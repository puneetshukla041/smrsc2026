import { useState, useCallback, useEffect, useRef } from 'react';
import { fetchWithRetry } from '../lib/fetchWithRetry';

const FORM_STORAGE_KEY = 'contactus-form-data';
const CSRF_TOKEN_ENDPOINT = '/api/csrf-token';

export function useContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: '', success: false });
  const [csrfToken, setCSRFToken] = useState('');
  const [showRetryButton, setShowRetryButton] = useState(false);
  const retrySubmitRef = useRef(null);

  // Load form data from session storage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(FORM_STORAGE_KEY);
      if (saved) {
        setFormData(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to restore form data:', e);
    }

    // Fetch CSRF token
    const fetchCSRFToken = async () => {
      try {
        const response = await fetch(CSRF_TOKEN_ENDPOINT);
        if (response.ok) {
          const data = await response.json();
          setCSRFToken(data.token);
        }
      } catch (e) {
        console.warn('Failed to fetch CSRF token:', e);
      }
    };

    fetchCSRFToken();
  }, []);

  // Save form data to session storage on change
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    
    try {
      sessionStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save form data:', e);
    }
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!csrfToken) {
      setStatus({ loading: false, error: 'Security token missing. Please refresh and try again.', success: false });
      return;
    }

    setStatus({ loading: true, error: '', success: false });
    retrySubmitRef.current = { formData, csrfToken };

    try {
      const response = await fetchWithRetry(
        '/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
          body: JSON.stringify(formData)
        },
        2,  // Retry up to 2 times
        1000 // Base delay 1 second
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      // Clear form data on success
      setFormData({ name: '', email: '', message: '' });
      sessionStorage.removeItem(FORM_STORAGE_KEY);
      
      setStatus({
        loading: false,
        error: '',
        success: true
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      const errorMessage = error.message || 'An error occurred while submitting the form';
      
      // Show retry button for critical failures
      if (error.message.includes('503') || error.message.includes('timeout')) {
        setShowRetryButton(true);
      }
      
      setStatus({
        loading: false,
        error: errorMessage,
        success: false
      });
    }
  }, [formData, csrfToken]);

  const handleRetry = useCallback(async () => {
    if (retrySubmitRef.current) {
      setShowRetryButton(false);
      const { formData: data, csrfToken: token } = retrySubmitRef.current;
      
      setStatus({ loading: true, error: '', success: false });

      try {
        const response = await fetchWithRetry(
          '/api/contact',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': token,
            },
            body: JSON.stringify(data)
          },
          1,
          1000
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Submission failed');
        }

        setFormData({ name: '', email: '', message: '' });
        sessionStorage.removeItem(FORM_STORAGE_KEY);
        
        setStatus({
          loading: false,
          error: '',
          success: true
        });

        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);

      } catch (error) {
        setStatus({
          loading: false,
          error: error.message || 'Retry failed. Please try again later.',
          success: false
        });
        setShowRetryButton(true);
      }
    }
  }, []);

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
    handleRetry,
    showRetryButton,
    hasError: status.error !== '',
    hasSuccess: status.success
  };
}
