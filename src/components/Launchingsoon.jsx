import { useState, useEffect, useRef } from 'react';

const LaunchingSoon = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    userType: '',
    phone: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.city || !formData.userType) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields' });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Full Name', formData.fullName);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('City', formData.city);
      formDataToSend.append('User Type', formData.userType);
      formDataToSend.append('Phone', formData.phone || 'Not provided');
      formDataToSend.append('_subject', 'New Launch Signup - Bestby Bites');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/ajax/support@bestbybites.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll be in touch soon.' });
        setFormData({
          fullName: '',
          email: '',
          city: '',
          userType: '',
          phone: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      ref={sectionRef}
      id="newsletter-signup"
      className="w-full min-h-screen flex items-center justify-center relative bg-[#013727]"
    >
      <div className="w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* Left Side - Content Card */}
          <div 
            className="flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-16 relative bg-cover bg-center bg-[#013727]"
            style={{ 
              backgroundImage: 'url(/images/FOOTER.jpg)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

            <div className={`relative z-10 max-w-xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div 
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 sm:mb-5 md:mb-6 transition-all duration-700 border-2 border-[#04c55c] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ 
                  backgroundColor: 'rgba(4, 197, 92, 0.15)',
                  transitionDelay: '200ms'
                }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse bg-[#04c55c]"></div>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#04c55c]">LAUNCHING SOON</span>
              </div>

              <h1 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: '300ms' }}
              >
                Be First When We Launch.
              </h1>

              <p 
                className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 font-light transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: '400ms' }}
              >
                Join our exclusive community and get early access to the future of food sustainability.
              </p>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {[
                  { text: 'Early access before public launch', delay: '500ms' },
                  { text: 'Exclusive launch-day offers', delay: '600ms' },
                  { text: 'Help reduce food waste from day one', delay: '700ms' }
                ].map((benefit, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center gap-3 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: benefit.delay }}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#04c55c]/20">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-white font-light">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form Card */}
          <div 
            className="flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-16 bg-[#04c55c]"
          >
            <div 
              className={`w-full max-w-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} 
              style={{ transitionDelay: '800ms' }}
            >
              
              <div className="mb-6 sm:mb-7 md:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                  Get special offers, meals, and news when you subscribe to our newsletter.
                </h3>
                <p className="text-sm sm:text-base md:text-base lg:text-lg font-medium text-white/90">
                  If you are a business owner join the platform at 0% joining fees
                </p>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div 
                  className={`mb-4 p-3 sm:p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-white/30' : 'bg-red-500/20'}`}
                >
                  <p className={`text-sm md:text-base font-medium ${submitStatus.type === 'success' ? 'text-white' : 'text-red-900'}`}>
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <div className="space-y-3 sm:space-y-4">
                <div 
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: '900ms' }}
                >
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013727] transition-all shadow-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013727] transition-all shadow-sm"
                    required
                  />
                </div>

                <div 
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013727] transition-all shadow-sm"
                    required
                  />
                  <div className="relative">
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013727] transition-all appearance-none cursor-pointer shadow-sm"
                      required
                    >
                      <option value="" disabled>I am a... *</option>
                      <option value="customer">Customer</option>
                      <option value="merchant">Merchant</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#013727] transition-all shadow-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: '1100ms', transitionDuration: '700ms' }}
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-3.5 sm:py-4 rounded-2xl bg-[#013727] text-white font-bold text-base sm:text-lg transition-all duration-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#013727] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ 
                    transitionDelay: '1200ms'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                <div 
                  className={`flex items-center justify-center gap-2 mt-3 sm:mt-4 opacity-80 transition-all duration-700 ${isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: '1300ms' }}
                >
                  <svg className="w-4 h-4 text-[#013727]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium text-[#013727]">Your information is secure</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LaunchingSoon;