import React from 'react';

const BusinessModel = () => {
  return (
    <section className="w-full bg-gray-50 py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <style>{`
        /* Enhanced font sizes for all devices */
        
        /* Mobile (< 640px) */
        @media (max-width: 640px) {
          .business-model-heading {
            font-size: 2rem !important; /* 32px */
            line-height: 1.2 !important;
            font-weight: 900 !important;
          }
          
          .business-model-subtitle {
            font-size: 1.0625rem !important; /* 17px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
        }

        /* Tablet (641px - 1023px) */
        @media (min-width: 641px) and (max-width: 1023px) {
          .business-model-heading {
            font-size: 2.75rem !important; /* 44px */
            line-height: 1.2 !important;
            font-weight: 900 !important;
          }
          
          .business-model-subtitle {
            font-size: 1.1875rem !important; /* 19px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
          .business-model-heading {
            font-size: 3.5rem !important; /* 56px */
            line-height: 1.15 !important;
            font-weight: 900 !important;
          }
          
          .business-model-subtitle {
            font-size: 1.375rem !important; /* 22px */
            line-height: 1.7 !important;
            font-weight: 600 !important;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="business-model-heading text-gray-900 mb-2 sm:mb-2 md:mb-2 lg:mb-3 tracking-tight">
            The Business Model
          </h2>
          
          {/* Subtitle */}
          <p className="business-model-subtitle text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-6">
            A smarter system that benefits customers, businesses, and the planet all at the same time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;