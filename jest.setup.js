// jest.setup.js - Jest configuration and global setup
import '@testing-library/jest-dom';

// Mock fetch globally if needed
global.fetch = jest.fn();

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
  fetch.mockClear();
  localStorage.getItem.mockClear();
  localStorage.setItem.mockClear();
  localStorage.removeItem.mockClear();
  sessionStorage.getItem.mockClear();
  sessionStorage.setItem.mockClear();
  sessionStorage.removeItem.mockClear();
});
