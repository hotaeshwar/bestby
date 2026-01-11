import React from 'react';

const BusinessModel = () => {
  return (
    <section className="w-full bg-gray-50 py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-2 sm:mb-2 md:mb-2 lg:mb-3 tracking-tight">
            The Business Model
          </h2>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-6">
            A smarter system that benefits customers, businesses, and the planet all at the same time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;