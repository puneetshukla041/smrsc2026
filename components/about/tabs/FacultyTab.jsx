"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SlidersHorizontal, Check } from 'lucide-react';

const FadeInView = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '50px' });

    const currentElement = domRef.current;
    if (currentElement) { observer.observe(currentElement); }
    return () => { if (currentElement) observer.unobserve(currentElement); };
  }, []);

  return (
    <div
      ref={domRef}
      className={`w-full transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FacultyTab = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOptions = ['All', 'Cardiac', 'Urology', 'General Surgery', 'Colorectal Surgery'];

  const internationalFacultyList = [
    { name: "Dr. Valluvan Jeevanandam", desc: "The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA", image: "image2.webp" },
    { name: "Dr. T Sloane Guy", desc: "Georgia Heart Institute, Gainesville, GA, USA", image: "image3.webp" },
    { name: "Dr. Gianluca Torregrossa", desc: "Lankenau Heart Institute, Philadelphia, PA, USA", image: "image4.webp" },
    { name: "Dr. Frank Van Praet", desc: "OLV Clinic, Aalst, Belgium", image: "image5.webp" },
    { name: "Dr. Bob Kiaii", desc: "Foothills Medical Centre, Libin Cardiovascular Institute, University of Calgary", image: "image6.webp" },
    { name: "Dr. Jae Won Lee", desc: "Buchon Sejong Hospital, Seoul, South Korea", image: "image7.webp" },
    { name: "Dr John D Puskas", desc: "Emory University Hospital Midtown, Atlanta", image: "image8.webp" },
    { name: "Dr. Johannes Oliver Bonatti", desc: "University of Pittsburgh Medical Center, Pittsburg, PA, USA", image: "image9.webp" },
    { name: "Dr. Dudy Hanafy", desc: "Harapan Kita Hospital, Jakarta, Indonesia", image: "image10.webp" },
    { name: "Dr. Go Watanabe", desc: "New Heart Watanabe Hospital Tokyo, Japan", image: "image11.webp" },
    { name: "Dr. Nirav Patel", desc: "Lenox Hill Hospital, New York, NY, USA", image: "image12.webp" },
    { name: "Dr. Victor Castillo", desc: "Fundación Cardiovascular de Colombia, Bucaramanga, Colombia", image: "image13.webp" },
    { name: "Dr. Feras Khaliel", desc: "King Faisal Specialist Hospital and Research Centre, Riyadh, Saudi Arabia", image: "image14.webp" },
    { name: "Dr. Lorena Montes", desc: "FAV Colombia", image: "image15.webp" },
    { name: "Dr. Gustavo Andres", desc: "FAV Colombia", image: "image16.webp" },
    { name: "Dr. Danny Ramzy", desc: "Memorial Hermann Memorial City Medical Center", image: "image17.webp" }
  ];

  const nationalFacultyList = [
    { name: "Dr. Ashok Seth", desc: "Fortis Escorts, Okhla, Delhi", image: "image19.webp" },
    { name: "Dr. Zile Singh Meherwal", desc: "Fortis Escorts, Okhla, Delhi", image: "image20.webp" },
    { name: "Dr. Yugal Kishore Mishra", desc: "Manipal Hospitals, Dwarka, Delhi", image: "image21.webp" },
    { name: "Dr. Ajay Kaul", desc: "Fortis Hospital, Noida, UP", image: "image22.webp" },
    { name: "Dr. Praveen Chandra", desc: "Medanta - The Medicity, Gurugram, Haryana", image: "image23.webp" },
    { name: "Dr. Krishna Subramony Iyer", desc: "Fortis Escorts, Okhla, Delhi", image: "image24.webp" },
    { name: "Dr. Nitin Rajput", desc: "Medanta - The Medicity, Gurugram, Haryana", image: "image25.webp" },
    { name: "Dr. Arunkumar Ulaganathan", desc: "KG Hospital, Coimbatore, TN", image: "image26.webp" },
    { name: "Dr. Arul Furtado", desc: "Aster CMI Hospital, Bengaluru, KA", image: "image27.webp" },
    { name: "Dr. Ritwick Raj Bhuyan", desc: "Fortis Escorts, Okhla, Delhi", image: "image28.webp" },
    { name: "Dr. T.S. Mahant", desc: "Fortis Hospital, Mohali, PB", image: "image29.webp" },
    { name: "Dr. Hiremath CS", desc: "Sri Sathya Sai Institute of Higher Medical Sciences, Bengaluru, KA", image: "image30.webp" },
    { name: "Dr. Harish Badami", desc: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad, TL", image: "image31.webp" },
    { name: "Dr. Lalitaditya Malik", desc: "Manipal Hospitals, Jaipur, Rajasthan", image: "image32.webp" },
    { name: "Dr. Devagourou Velayoudam", desc: "Aiims, New Delhi", image: "image33.webp" },
    { name: "Dr. M M Yusuf", desc: "Apollo Hospital, Chennai, TN", image: "image34.webp" },
    { name: "Dr. Milind Padmakar Hote", desc: "Fortis Escorts Heart Institute in Okhla, New Delhi", image: "image35.webp" },
    { name: "Dr. Satyajit Bose", desc: "The Mission Hospital, Durgapur, WB", image: "image36.webp" },
    { name: "Dr. Manoj Durairaj", desc: "Marian Cardiac Centre and Research Foundation, Pune, MH", image: "image37.webp" },
    { name: "Dr. Kunal Sarkar", desc: "Medica Superspecialty Hospital, Kolkata, WB", image: "image38.webp" },
    { name: "Dr. Ganeshakrishnan Iyer", desc: "Aster CMI Hospital, Bengaluru, KA", image: "image39.webp" },
    { name: "Dr. Amit Chandan", desc: "Marengo CIMS Hospital, Ahmedabad, GJ", image: "image40.webp" },
    { name: "Dr. S K Agarwal", desc: "Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow, UP", image: "image41.webp" },
    { name: "Dr. Dhiren Shah", desc: "Marengo CIMS Hospital, Ahmedabad, GJ", image: "image42.webp" },
    { name: "Dr. Vikram Goyal", desc: "Fortis Escort, Jaipur, RJ", image: "image43.webp" },
    { name: "Dr. Divakar Bhatt", desc: "Aster RV, Bengaluru, KA", image: "image44.webp" },
    { name: "Dr. Anuj Kumar", desc: "Jay Prabha Medanta Super Specialty Hospital, Patna, Bihar", image: "image45.webp" },
    { name: "Dr. Arvind Kumar Goyal", desc: "Jay Prabha Medanta Super Specialty Hospital, Patna, Bihar", image: "image46.webp" },
    { name: "Dr. Amit Chandra", desc: "Medanta - The Medicity, Gurugram, HR", image: "image47.webp" },
    { name: "Dr. Vinod K. Manikala", desc: "MGM Chennai, TN", image: "image48.webp" },
    { name: "Dr. Anil Mulpur", desc: "Sri Sathya Sai Institute of Higher Medical Sciences (SSSIHMS), Puttaparthi, AP", image: "image49.webp" },
    { name: "Dr. Nilesh Agrawal", desc: "Max Super Speciality Hospital, Nagpur, MH", image: "image50.webp" },
    { name: "Dr. Anubhav Gupta", desc: "Vardhman Mahavir Medical College and Safdarjung Hospital, Delhi", image: "image51.webp" },
    { name: "Dr. Zainulabedin Hamdulay", desc: "Masina Heart Institute, Mumbai, MH", image: "image52.png" },
    { name: "Dr. Bijoy Kutti", desc: "Platinum Hospitals & Icon Heart Institute, Mumbai, MH", image: "image53.png" },
  ];

  const urologyCoChairpersons = [
    { name: "Dr. Chandra Mohan vaddi", desc: "Preeti Urology & Kidney Hospital, Hyderabad, TL", image: "image2.webp" },
    { name: "Dr. Constantino Castillo", desc: "St. Luke's Medical Center, Philippines", image: "image3.webp" }
  ];

  const urologyFacultyList = [
    { name: "Dr. N P Gupta", desc: "Medanta-The Medicity, Gurugram, HR", image: "image4.webp" },
    { name: "Dr. Sanjay Gogoi", desc: "Medanta - The Medicity, Gurugram, HR", image: "image5.webp" },
    { name: "Dr. Amlesh Seth", desc: "AIIMS Delhi, Delhi", image: "image6.webp" },
    { name: "Dr. Rishi Nayyar", desc: "AIIMS Delhi, Delhi", image: "image7.webp" },
    { name: "Dr Mujeebu Rahiman M", desc: "Yenepoya Medical College Hospital, Mangalore, KA", image: "image8.webp" },
    { name: "Dr. Anant Kumar", desc: "Max Super Specialty Hospital, Delhi", image: "image9.webp" },
    { name: "Dr. Ritesh Mongha", desc: "Marengo Asia Hospitals, Faridabad, Haryana", image: "image10.webp" },
    { name: "Dr. Amitabh Singh", desc: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", image: "image11.webp" },
    { name: "Dr. M Ramalingam", desc: "Hindustan Hospital, Coimbatore, TN", image: "image12.webp" },
    { name: "Dr. Nikhil Saurabh", desc: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", image: "image13.webp" },
    { name: "Dr. Ashish Khanna", desc: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", image: "image14.webp" },
    { name: "Dr. Sarbartha Kumar Pratihar", desc: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", image: "image15.webp" },
    { name: "Dr. Rajeev Sood", desc: "Baba Farid University of Health Sciences, Faridkot, PB", image: "image16.webp" },
    { name: "Dr. Paresh Jain", desc: "Fortis Escorts, Okhla, Delhi", image: "image17.webp" },
    { name: "Dr. Saroj Baidya", desc: "B&B Hospital, Gwarko, Nepal", image: "image18.webp" },
    { name: "Dr. Deepak Dubey", desc: "Manipal Hospital, Bengaluru, KA", image: "image19.webp" },
    { name: "Dr. Arvind B Dhameliya", desc: "Dhameliya Kidney Hospital, Surat, GJ", image: "image20.webp" },
    { name: "Dr. Sachin Arakere Nataraj", desc: "Medanta - The Medicity, Gurugram, HR", image: "image21.webp" },
    { name: "Dr Anil Jain", desc: "Nobel Hospital, Kanpur, UP", image: "image22.webp" },
    { name: "Dr Shrinivas Narayan", desc: "Fortis Hospital & Kidney Institute, EM Bypass, Kolkata", image: "image23.webp" },
    { name: "Dr. Pankaj Panwar", desc: "Fortis Escorts, Okhla, NewDelhi", image: "image24.webp" },
    { name: "Dr. Satyajit Kumar Singh", desc: "Ruban Memorial Hospital, Patna, Bihar", image: "image25.webp" },
    { name: "Dr. Shrikanth Atluri", desc: "Apollo Hospitals, CBD Belapur, Navi Mumbai, MH", image: "image26.webp" },
    { name: "Dr. Raj Kalyan Gopala Krishna", desc: "Fortis Hospital & Kidney Institute, Gariahat, Kolkata", image: "image27.webp" },
    { name: "Dr. Anurag Nema", desc: "ICON Hospitals", image: "image28.webp" },
    { name: "Dr. Rishi Grover", desc: "ICON Hospitals Surat, GJ", image: "image29.webp" },
    { name: "Dr. Jitendra Amlani", desc: "Urocare Kidney Super Specialty Hospital, Rajkot, GJ", image: "image30.webp" },
    { name: "Dr. Shashanka Dhanuka", desc: "Fortis Hospital and Kidney Institute", image: "image31.webp" },
    { name: "Dr. Soumyan Dey", desc: "Fortis Hiranandani, Vashi, MH", image: "image32.png" },
    { name: "Dr. Reaud Iqbaul Gafoor", desc: "Urologist, Kingston Public Hospital, Jamaica", image: "image33.png" },
    { name: "Dr. Vivek Sharma", desc: "GBH American Hospital Udaipur, RJ", image: "image34.png" },
    { name: "Dr. Anand Sehgal", desc: "Deep Hospital, Ludhiana, PB", image: "image35.png" },
    { name: "Dr. Yajvender Pratap Singh Rana", desc: "BLK Max, New Delhi", image: "image36.png" },
    { name: "Dr. Ayush Chaudhary", desc: "Fortis Hospital & Kidney Institute, Kolkata, WB", image: "image37.png" },
    { name: "Dr. Pushkar Shyam Chowdhary", desc: "Fortis Hospital & Kidney Institute, Kolkata, WB", image: "image38.png" },
    { name: "Dr. Altaf Khan", desc: "Yenepoya Hospital, Mangalore, KA", image: "image39.png" },
    { name: "Dr. Nischith D'Souza", desc: "Yenepoya Hospital, Mangalore, KA", image: "image40.png" },
    { name: "Dr. Avinash T S", desc: "Aster-CMI hospital, Bangalore, KA", image: "image41.png" },
    { name: "Dr. Max Gubitz Scheibe", desc: "Interhospital, Guayaquil, Ecuador", image: "image42.png" },
    { name: "Dr. Anil Shrestha", desc: "B&B Hospital, Nepal", image: "image43.png" },
    { name: "Dr. Senthil Nathan", desc: "Cleveland Clinic London, UK", image: "image44.png" },
    { name: "Dr. Hemant Hardikar", desc: "Aster Royal Hospital, Muscat", image: "image45.png" },
    { name: "Dr. Dilip P Patil", desc: "Sri Sathya Sai Institute of Higher Medical Sciences, Puttaparthi, AP", image: "image46.png" }
  ];

  // Updated General Surgery Faculty List (Mapping image3.webp to image26.webp)
  const generalFacultyList = [
    { name: "Dr. Sreenjoy Patnaik", desc: "Shanti Memorial Hospital, Cuttack, Odisha", image: "image3.webp" },
    { name: "Dr. Sanjay Verma", desc: "Fortis Escorts, Okhla, Delhi", image: "image4.webp" },
    { name: "Dr. Vikrant Sharma", desc: "Meenakshi Hospital, Ghaziabad, UP", image: "image5.webp" },
    { name: "Dr. Sanjiv Haribhakti", desc: "Kaizen Hospital, Ahmedabad, GJ", image: "image6.webp" },
    { name: "Dr. Pedro Luis Maldonado Munoz", desc: "Interhospital, Guayaquil, Ecuador", image: "image7.webp" },
    { name: "Dr. Marcos Lenin Zambrano Avellan", desc: "Interhospital, Guayaquil, Ecuador", image: "image8.webp" },
    { name: "Dr. Prashanth Krishna Gopalaswamy", desc: "Prashant Group of Hospitals, Chennai, TN", image: "image9.webp" },
    { name: "Dr. Neeraj Chaudhary", desc: "Fortis, Vasant Kunj, New Delhi", image: "image10.webp" },
    { name: "Dr. Niraj Baidya", desc: "B&B Hospital, Gwarko, Nepal", image: "image11.webp" },
    { name: "Dr. Deepak Mittal", desc: "Aadhar Hospital, Hisar, HR", image: "image12.webp" },
    { name: "Dr. Harish Sharma", desc: "Aadhar Hospital, Hisar, HR", image: "image13.webp" },
    { name: "Dr. Deepak Subramanian", desc: "MGM Healthcare, Chennai, TN", image: "image14.webp" },
    { name: "Dr. Atul Kumar Soni", desc: "Park Hospital, Gurugram, HR", image: "image15.webp" },
    { name: "Dr. Kumar Sonal", desc: "Ruban Memorial Hospital, Patna, BR", image: "image16.webp" },
    { name: "Dr. Praveen Bhingare", desc: "Government Medical College, Nagpur, MH", image: "image17.webp" },
    { name: "Dr. Mohit Rawat", desc: "Rawat Hospital Aligarh, RJ", image: "image18.webp" },
    { name: "Dr. Hemant Bhanarkar", desc: "Government Medical College, Nagpur, MH", image: "image19.webp" },
    { name: "Dr. Hemant kumar", desc: "Fortis Flt Lt Rajan Dhall Hospital, Vasant Kunj, Delhi", image: "image20.webp" },
    { name: "Dr. Charisse Izobelle Q. Santos", desc: "GreenCity Medical Center, San Fernando, Pampanga, Philippines", image: "image21.webp" },
    { name: "Dr. Ryan D. Quiambao", desc: "Jose B. Lingad Memorial General Hospital, Philippines", image: "image22.webp" },
    { name: "Dr. Arturo Mendoza III", desc: "Ulticare Medical Center, Philippines", image: "image23.webp" },
    { name: "Dr. Noel Evangelista", desc: "Mother Teresa of Calcutta Medical Center, San Fernando, Pampanga, Philippines", image: "image24.webp" },
    { name: "Dr. Nazer M. Salonga", desc: "Mother Teresa of Calcutta Medical Center, San Fernando, Pampanga, Philippines", image: "image25.webp" },
    { name: "Dr. Pankaj Mutneja", desc: "Prem Institute of Medical Sciences, Panipat, HR", image: "image26.webp" }
  ];

  const colorectalFacultyList = [
    { name: "Dr. Deepak Mittal", desc: "Aadhar Hospital, Hisar, HR", image: "per3.webp" },
    { name: "Dr. Harish Sharma", desc: "Aadhar Hospital, Hisar, HR", image: "per4.webp" }
  ];

  const allSpecialtyStyle = { color: '#F8FFFF', fontFamily: '"Blauer Nue", sans-serif', fontSize: '36px', fontStyle: 'normal', fontWeight: 500, lineHeight: '36px' };
  const bannerContainerStyle = (color) => ({ display: 'flex', width: '100%', maxWidth: '1390px', padding: '20px', alignItems: 'center', gap: '10px', backgroundColor: color, marginTop: '24px', marginBottom: '30px', borderRadius: '4px' });
  const bannerTextStyle = { color: '#E6E6E6', fontFamily: 'Manrope, sans-serif', fontSize: '32px', fontStyle: 'normal', fontWeight: 500, lineHeight: '32px' };
  const sectionLabelBoxStyle = { display: 'flex', width: '100%', maxWidth: '300px', padding: '10px 20px', alignItems: 'center', gap: '10px', borderRadius: '20px', border: '1px solid #114D7E', background: 'linear-gradient(90deg, #1A689D 0%, rgba(0, 0, 0, 0.00) 42.79%)', marginBottom: '20px' };
  const sectionLabelTextStyle = { color: '#F8FFFF', fontFamily: '"Blauer Nue", sans-serif', fontSize: '24px', fontStyle: 'normal', fontWeight: 500, lineHeight: '40px' };
  const cardImageContainer = { position: 'relative', width: '100%', maxWidth: '300px', height: '373.333px', aspectRatio: '45/56', borderRadius: '16px', overflow: 'hidden', backgroundColor: 'transparent' };
  const nameStyle = { display: 'flex', height: 'auto', minHeight: '27px', flexDirection: 'column', justifyContent: 'center', color: '#FFF', fontFamily: 'Manrope, sans-serif', fontSize: '20px', fontStyle: 'normal', fontWeight: 600, lineHeight: '28px', marginTop: '16px' };
  const descStyle = { alignSelf: 'stretch', color: '#FFF', fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '18px', marginTop: '4px', width: '100%', maxWidth: '300px' };

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-700 pb-20 px-6 xl:px-0">
      
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-[1390px] relative gap-6 md:gap-0 mt-8">
        <h2 style={allSpecialtyStyle} className="text-center md:text-left">{activeFilter === 'All' ? 'All Specialty' : `${activeFilter} Faculty`}</h2>
        
        <div className="relative">
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border shadow-lg transition-all duration-300 cursor-pointer ${isFilterOpen ? 'bg-[#3FD0D4] border-[#3FD0D4] text-[#0B1C2E] shadow-[#3FD0D4]/20' : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#3FD0D4] hover:text-[#3FD0D4]'}`}
            >
            <span className="text-sm font-semibold tracking-wide mr-2 hidden md:block">FILTER</span>
            <SlidersHorizontal size={20} />
            </button>

            {isFilterOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-[#0B1C2E] border border-[#114D7E] rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl bg-opacity-95">
                    {filterOptions.map((option) => (
                        <button key={option} onClick={() => { setActiveFilter(option); setIsFilterOpen(false); }} className="flex items-center justify-between w-full px-6 py-4 text-left text-gray-300 hover:bg-[#1A689D]/30 hover:text-white transition-all border-b border-white/5 last:border-0 cursor-pointer">
                            <span className="font-medium">{option}</span>
                            {activeFilter === option && <Check size={18} className="text-[#3FD0D4]" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
      </div>

      {(activeFilter === 'All' || activeFilter === 'Cardiac') && (
        <FadeInView>
            <div style={bannerContainerStyle('rgba(121, 46, 46, 0.85)')} className="justify-center md:justify-start">
                <h3 style={bannerTextStyle}>International Faculty Cardiac</h3>
            </div>

            <div className="flex flex-col items-center md:items-start mb-16 w-full max-w-[1390px]">
                <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Chairman</span></div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div style={cardImageContainer} className="group cursor-pointer">
                        <Image src="/images/about/faculty/cardiac/image1.webp" alt="Dr. Husam Balkhy" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                    </div>
                    <div style={nameStyle}>Dr. Husam Balkhy</div>
                    <div style={descStyle}>The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA</div>
                    </div>
                </FadeInView>
            </div>

            <div className="flex flex-col items-center md:items-start w-full max-w-[1390px] mb-16">
                <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Faculty Members</span></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start w-full">
                {internationalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image src={`/images/about/faculty/cardiac/${faculty.image}`} alt={faculty.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>

            <div style={bannerContainerStyle('rgba(121, 46, 46, 0.85)')} className="justify-center md:justify-start">
                <h3 style={bannerTextStyle}>National Faculty Cardiac</h3>
            </div>

            <div className="flex flex-col items-center md:items-start mb-16 w-full max-w-[1390px]">
                <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Chairman</span></div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div style={cardImageContainer} className="group cursor-pointer">
                        <Image src="/images/about/faculty/cardiac/image18.webp" alt="Dr. Sudhir Srivastava" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                    </div>
                    <div style={nameStyle}>Dr. Sudhir Srivastava</div>
                    <div style={descStyle}>Founder, Chairman and CEO SS Innovations, INDIA</div>
                    </div>
                </FadeInView>
            </div>

            <div className="flex flex-col items-center md:items-start w-full max-w-[1390px] mb-16">
                <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Faculty Members</span></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start w-full">
                {nationalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image src={`/images/about/faculty/cardiac/${faculty.image}`} alt={faculty.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>
        </FadeInView>
      )}

      {(activeFilter === 'All' || activeFilter === 'Urology') && (
        <FadeInView>
            <div style={bannerContainerStyle('rgba(46, 88, 121, 0.85)')} className="justify-center md:justify-start"><h3 style={bannerTextStyle}>Urology Faculty</h3></div>
            
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-16 w-full max-w-[1390px]">
                <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Chairman</span></div>
                    <FadeInView>
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div style={cardImageContainer} className="group cursor-pointer">
                            <Image src="/images/about/faculty/urology/image1.webp" alt="Dr. Sudhir K Rawal" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                            </div>
                            <div style={nameStyle}>Dr. Sudhir K Rawal</div>
                            <div style={descStyle}>Rajiv Gandhi Cancer Institute and Research Center</div>
                        </div>
                    </FadeInView>
                </div>

                <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Co - Chairperson</span></div>
                    <div className="flex flex-col sm:flex-row gap-8 w-full justify-center lg:justify-start">
                        {urologyCoChairpersons.map((co, index) => (
                        <FadeInView key={index} delay={100}>
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div style={cardImageContainer} className="group cursor-pointer">
                                <Image src={`/images/about/faculty/urology/${co.image}`} alt={co.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                                </div>
                                <div style={nameStyle}>{co.name}</div>
                                <div style={descStyle}>{co.desc}</div>
                            </div>
                        </FadeInView>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-start w-full max-w-[1390px] mb-16">
                <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Faculty Members</span></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start w-full">
                {urologyFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image src={`/images/about/faculty/urology/${faculty.image}`} alt={faculty.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>
        </FadeInView>
      )}

      {(activeFilter === 'All' || activeFilter === 'General Surgery') && (
        <FadeInView>
            <div style={bannerContainerStyle('rgba(64, 25, 107, 0.85)')} className="justify-center md:justify-start"><h3 style={bannerTextStyle}>General Surgery Faculty</h3></div>
            
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-16 w-full max-w-[1390px]">
                <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Chairman</span></div>
                    <FadeInView>
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div style={cardImageContainer} className="group cursor-pointer">
                            {/* Corrected path to general faculty image1.webp */}
                            <Image src="/images/about/faculty/general/image1.webp" alt="Dr. Raj Gajbhiye" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                            </div>
                            <div style={nameStyle}>Dr. Raj Gajbhiye</div>
                            <div style={descStyle}>Government Medical College, Nagpur, MH</div>
                        </div>
                    </FadeInView>
                </div>

                <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Co - Chairperson</span></div>
                    <div className="flex flex-col sm:flex-row gap-8 w-full justify-center lg:justify-start">
                        <FadeInView>
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div style={cardImageContainer} className="group cursor-pointer">
                                {/* Corrected path to general faculty image2.webp */}
                                <Image src="/images/about/faculty/general/image2.webp" alt="Dr. Magan Mehrotra" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                                </div>
                                <div style={nameStyle}>Dr. Magan Mehrotra</div>
                                <div style={descStyle}>Apex Hospital, Moradabad, UP</div>
                            </div>
                        </FadeInView>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-start w-full max-w-[1390px] mb-16">
                <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Faculty Members</span></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start w-full">
                {generalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            {/* Corrected mapped path to point to /faculty/general/ */}
                            <Image src={`/images/about/faculty/general/${faculty.image}`} alt={faculty.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>
        </FadeInView>
      )}

      {(activeFilter === 'All' || activeFilter === 'Colorectal Surgery') && (
        <FadeInView>
            <div style={bannerContainerStyle('rgba(42, 85, 156, 0.85)')} className="justify-center md:justify-start"><h3 style={bannerTextStyle}>Colorectal Surgery Faculty</h3></div>
            
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-16 w-full max-w-[1390px]">
                <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Chairman</span></div>
                    <FadeInView>
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div style={cardImageContainer} className="group cursor-pointer">
                            <Image src="/images/about/general/per1.webp" alt="Dr. Raj Gajbhiye" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                            </div>
                            <div style={nameStyle}>Dr. Raj Gajbhiye</div>
                            <div style={descStyle}>Government Medical College, Nagpur, MH</div>
                        </div>
                    </FadeInView>
                </div>

                <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Co - Chairperson</span></div>
                    <div className="flex flex-col sm:flex-row gap-8 w-full justify-center lg:justify-start">
                        <FadeInView>
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div style={cardImageContainer} className="group cursor-pointer">
                                <Image src="/images/about/general/per2.webp" alt="Dr. Magan Mehrotra" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                                </div>
                                <div style={nameStyle}>Dr. Magan Mehrotra</div>
                                <div style={descStyle}>Apex Hospital, Moradabad, UP</div>
                            </div>
                        </FadeInView>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-start w-full max-w-[1390px] mb-16">
                <div style={sectionLabelBoxStyle}><span style={sectionLabelTextStyle}>Faculty Members</span></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start w-full">
                {colorectalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image src={`/images/about/general/${faculty.image}`} alt={faculty.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" unoptimized={true} loading="eager" fetchPriority="low" />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>
        </FadeInView>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
};



export default FacultyTab;