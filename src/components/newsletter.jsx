import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setShowThankYou(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="newsletter-signup" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <style>{`
        /* iPhone SE and small mobile (< 376px) */
        @media (max-width: 375px) {
          .newsletter-heading {
            font-size: 1.75rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.75rem !important;
          }
          
          .newsletter-description {
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1.25rem !important;
          }

          .newsletter-input {
            font-size: 0.875rem !important;
            padding: 0.75rem 1rem !important;
          }

          .newsletter-button {
            font-size: 0.875rem !important;
            padding: 0.75rem 1.5rem !important;
          }

          .newsletter-thank-you {
            font-size: 0.875rem !important;
            margin-top: 0.75rem !important;
          }
        }

        /* Mobile (376px - 639px) */
        @media (min-width: 376px) and (max-width: 639px) {
          .newsletter-heading {
            font-size: 2rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.875rem !important;
          }
          
          .newsletter-description {
            font-size: 0.9375rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.5rem !important;
          }

          .newsletter-input {
            font-size: 0.9375rem !important;
            padding: 0.875rem 1.125rem !important;
          }

          .newsletter-button {
            font-size: 0.9375rem !important;
            padding: 0.875rem 1.75rem !important;
          }

          .newsletter-thank-you {
            font-size: 0.9375rem !important;
            margin-top: 0.875rem !important;
          }
        }

        /* Small Tablet (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .newsletter-heading {
            font-size: 2.25rem !important;
            line-height: 1.3 !important;
            margin-bottom: 1rem !important;
          }
          
          .newsletter-description {
            font-size: 1rem !important;
            line-height: 1.6 !important;
            margin-bottom: 1.75rem !important;
          }

          .newsletter-input {
            font-size: 1rem !important;
            padding: 1rem 1.25rem !important;
          }

          .newsletter-button {
            font-size: 1rem !important;
            padding: 1rem 2rem !important;
          }

          .newsletter-thank-you {
            font-size: 1rem !important;
            margin-top: 1rem !important;
          }
        }

        /* iPad Mini & Air (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .newsletter-heading {
            font-size: 2.5rem !important;
            line-height: 1.25 !important;
            margin-bottom: 1.125rem !important;
          }
          
          .newsletter-description {
            font-size: 1.0625rem !important;
            line-height: 1.65 !important;
            margin-bottom: 2rem !important;
          }

          .newsletter-input {
            font-size: 1.0625rem !important;
            padding: 1.125rem 1.375rem !important;
          }

          .newsletter-button {
            font-size: 1.0625rem !important;
            padding: 1.125rem 2.25rem !important;
          }

          .newsletter-thank-you {
            font-size: 1.0625rem !important;
            margin-top: 1.125rem !important;
          }
        }

        /* Desktop (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .newsletter-heading {
            font-size: 2.75rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1.25rem !important;
          }
          
          .newsletter-description {
            font-size: 1.125rem !important;
            line-height: 1.7 !important;
            margin-bottom: 2.25rem !important;
          }

          .newsletter-input {
            font-size: 1.125rem !important;
            padding: 1.25rem 1.5rem !important;
          }

          .newsletter-button {
            font-size: 1.125rem !important;
            padding: 1.25rem 2.5rem !important;
          }

          .newsletter-thank-you {
            font-size: 1.125rem !important;
            margin-top: 1.25rem !important;
          }
        }

        /* Large Desktop (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .newsletter-heading {
            font-size: 3rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1.375rem !important;
          }
          
          .newsletter-description {
            font-size: 1.1875rem !important;
            line-height: 1.7 !important;
            margin-bottom: 2.5rem !important;
          }

          .newsletter-input {
            font-size: 1.1875rem !important;
            padding: 1.375rem 1.625rem !important;
          }

          .newsletter-button {
            font-size: 1.1875rem !important;
            padding: 1.375rem 2.75rem !important;
          }

          .newsletter-thank-you {
            font-size: 1.1875rem !important;
            margin-top: 1.375rem !important;
          }
        }

        /* XL Desktop (1536px+) */
        @media (min-width: 1536px) {
          .newsletter-heading {
            font-size: 3.25rem !important;
            line-height: 1.15 !important;
            margin-bottom: 1.5rem !important;
          }
          
          .newsletter-description {
            font-size: 1.25rem !important;
            line-height: 1.75 !important;
            margin-bottom: 2.75rem !important;
          }

          .newsletter-input {
            font-size: 1.25rem !important;
            padding: 1.5rem 1.75rem !important;
          }

          .newsletter-button {
            font-size: 1.25rem !important;
            padding: 1.5rem 3rem !important;
          }

          .newsletter-thank-you {
            font-size: 1.25rem !important;
            margin-top: 1.5rem !important;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="newsletter-heading font-bold text-gray-900">
          Not hungry yet?
        </h2>

        {/* Description */}
        <p className="newsletter-description text-gray-700">
          Get special offers, meals, and news when you subscribe to our newsletter.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-stretch sm:items-center justify-center">
            {/* Email Input */}
            <div className="flex-1 relative">
              <label htmlFor="email" className="absolute -top-2 left-3 text-xs text-teal-700 bg-gray-50 px-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="bestbybites@gmail.com"
                required
                className="newsletter-input w-full border-2 border-teal-700 rounded-l-lg sm:rounded-r-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-blue-50/30"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="newsletter-button text-white font-semibold rounded-r-lg sm:rounded-l-none rounded-l-lg transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{ backgroundColor: '#04c55c' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#03a84d'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#04c55c'}
            >
              Sign up
            </button>
          </div>

          {/* Thank You Message */}
          {showThankYou && (
            <p className="newsletter-thank-you font-medium" style={{ color: '#04c55c' }}>
              Thank you!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;