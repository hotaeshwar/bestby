import { useState, useEffect } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Get special offers, meals, and news when you subscribe to our newsletter.";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText, isVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setShowThankYou(true);
      
      setTimeout(() => {
        setShowThankYou(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="newsletter-signup" className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        .cursor {
          animation: blink 1s infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }

        /* Input focus animation - moves label up */
        .email-input-wrapper input:focus ~ .email-label,
        .email-input-wrapper input:not(:placeholder-shown) ~ .email-label {
          transform: translateY(-32px) scale(0.9);
          color: #0f766e;
        }

        .email-label {
          transition: all 0.3s ease;
          transform-origin: left;
        }

        .email-input-wrapper input:focus {
          border-color: #0f766e;
        }
      `}</style>

      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Heading */}
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4"
          style={{
            transitionDelay: '100ms'
          }}
        >
          Not hungry yet?
        </h2>

        {/* Description with Typing Animation */}
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-5 md:mb-6 lg:mb-8 min-h-[2em]"
          style={{
            transitionDelay: '200ms'
          }}
        >
          {typedText}
          {!isTypingComplete && <span className="cursor">|</span>}
        </p>

        {/* Email Form - Fades in after typing completes */}
        {isTypingComplete && (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto fade-in-up">
            <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center">
              {/* Email Input with Float Label Animation */}
              <div className="w-full email-input-wrapper relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  required
                  className="w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg border-2 border-teal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-blue-50/30 peer"
                />
                <label 
                  htmlFor="email" 
                  className="email-label absolute left-3 sm:left-4 md:left-5 lg:left-6 top-2.5 sm:top-3 md:top-3.5 lg:top-4 text-sm sm:text-base md:text-lg text-gray-500 bg-gray-50 px-2 pointer-events-none"
                >
                  bestbybites@gmail.com
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg text-white font-semibold rounded-lg bg-[#04c55c] hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                Sign up
              </button>
            </div>

            {/* Thank You Message */}
            {showThankYou && (
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-[#04c55c] slide-up">
                Thank you!
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;