import { useState, useEffect } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const fullText = "Get special offers, meals, and news when you subscribe to our newsletter.";

  useEffect(() => {
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
  }, [typedText, isVisible]);

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
    <section id="newsletter-signup" className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
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

        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes borderPulse {
          0%, 100% {
            border-color: #86efac;
            box-shadow: 0 0 0 0 rgba(134, 239, 172, 0.7);
          }
          50% {
            border-color: #4ade80;
            box-shadow: 0 0 20px 4px rgba(134, 239, 172, 0.4);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(134, 239, 172, 0.5), 0 0 20px rgba(134, 239, 172, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(134, 239, 172, 0.8), 0 0 30px rgba(134, 239, 172, 0.5);
          }
        }

        .email-input-wrapper input:not(:focus) {
          animation: borderPulse 3s ease-in-out infinite, glowPulse 3s ease-in-out infinite;
        }

        .email-input-wrapper input:focus ~ .email-label,
        .email-input-wrapper input:not(:placeholder-shown) ~ .email-label {
          transform: translateY(-32px) scale(0.9);
          color: #10b981;
          background: #ffffff;
        }

        .email-label {
          transition: all 0.3s ease;
          transform-origin: left;
        }

        .email-input-wrapper input:focus {
          border-color: #10b981 !important;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.3) !important;
          animation: none !important;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .input-slide-in {
          animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     float 3s ease-in-out infinite 1s;
        }
      `}</style>

      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4"
          style={{
            transitionDelay: '100ms'
          }}
        >
          Not hungry yet?
        </h2>

        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-5 md:mb-6 lg:mb-8 min-h-[2em]"
          style={{
            transitionDelay: '200ms'
          }}
        >
          {typedText}
          {!isTypingComplete && <span className="cursor">|</span>}
        </p>

        {isTypingComplete && (
          <div className="max-w-2xl mx-auto fade-in-up">
            <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center">
              <div className="w-full email-input-wrapper relative input-slide-in">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder=" "
                  required
                  style={{ backgroundColor: '#ffffff', color: '#013727' }}
                  className="w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg border-2 border-green-300 rounded-lg focus:outline-none transition-all peer placeholder-gray-400"
                />
                <label 
                  htmlFor="email" 
                  className="email-label absolute left-3 sm:left-4 md:left-5 lg:left-6 top-2.5 sm:top-3 md:top-3.5 lg:top-4 text-sm sm:text-base md:text-lg bg-white px-2 pointer-events-none"
                  style={{ color: '#013727' }}
                >
                  bestbybites@gmail.com
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg text-white font-semibold rounded-lg bg-[#04c55c] hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                Get in touch
              </button>
            </div>

            {showThankYou && (
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-[#04c55c] slide-up">
                Thank you!
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;