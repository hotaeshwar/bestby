import React, { useEffect } from 'react';
import { Mail, Globe, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Terms() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    // Ensure scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#013727] to-[#015d3a] text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col items-center">
            <img 
              src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png" 
              alt="Bestby Bites Logo" 
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mb-3 sm:mb-4 cursor-pointer hover:opacity-80 transition-opacity touch-manipulation"
              onClick={handleLogoClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLogoClick();
                }
              }}
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-green-100 text-center">
              Last Updated: January 06, 2026
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
        {/* Introduction Card */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 mb-5 sm:mb-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-[#013727]" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                Your Privacy Matters
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                At Bestby Bites, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our digital marketplace connecting consumers with surplus food from participating vendors.
              </p>
            </div>
          </div>
        </div>

        {/* Single Continuous Content Section */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6">
          <div className="space-y-6 text-sm sm:text-base text-gray-700">
            {/* Section 1 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">1.</span> Introduction
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">1.1 Purpose</h3>
                  <p className="leading-relaxed">
                    Bestby Bites <span className="text-gray-600">("Bestby Bites," "Company," "we," "us," or "our")</span> operates a digital marketplace that connects consumers with surplus food offered by participating vendors. This Privacy Policy describes how we collect, use, store, disclose, and protect personal information when users access or use our mobile application, website, and related services <span className="text-gray-600">(collectively, the "Service")</span>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">1.2 Scope and Acceptance</h3>
                  <p className="leading-relaxed">
                    This Privacy Policy applies to all users of the Service, including customers, vendors, and visitors. By accessing or using the Service, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree, you must discontinue use of the Service.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">2.</span> Interpretation and Definitions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">2.1 Interpretation</h3>
                  <p className="leading-relaxed">
                    Capitalized terms have the meanings assigned below, regardless of whether they appear in singular or plural form.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">2.2 Definitions</h3>
                  <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                    <p><span className="font-semibold text-[#013727]">Account:</span> means a unique account created to access the Service.</p>
                    <p><span className="font-semibold text-[#013727]">Affiliate:</span> means any entity that directly or indirectly controls, is controlled by, or is under common control with the Company.</p>
                    <p><span className="font-semibold text-[#013727]">Company:</span> refers to Bestby Bites.</p>
                    <p><span className="font-semibold text-[#013727]">Cookies:</span> means small text files stored on a user's device to support functionality and analytics.</p>
                    <p><span className="font-semibold text-[#013727]">Device:</span> means any device capable of accessing the Service, including smartphones, tablets, or computers.</p>
                    <p><span className="font-semibold text-[#013727]">Personal Data:</span> means any information that identifies or can reasonably be linked to an identifiable individual.</p>
                    <p><span className="font-semibold text-[#013727]">Service:</span> refers to the Bestby Bites mobile application, website, and related services.</p>
                    <p><span className="font-semibold text-[#013727]">Service Provider:</span> means a third party that processes data on behalf of the Company.</p>
                    <p><span className="font-semibold text-[#013727]">Usage Data:</span> means data collected automatically through interaction with the Service.</p>
                    <p><span className="font-semibold text-[#013727]">Website:</span> refers to bestbybites.com.</p>
                    <p><span className="font-semibold text-[#013727]">User or You:</span> means an individual or legal entity accessing or using the Service.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">3.</span> Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">3.1 Personal Data</h3>
                  <p className="mb-2 leading-relaxed">We may collect Personal Data that you voluntarily provide, including:</p>
                  <ul className="list-disc list-inside space-y-1 ml-3 bg-gray-50 p-4 rounded-lg">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Delivery or pickup address</li>
                    <li>Account login credentials</li>
                    <li>Payment-related identifiers <span className="text-gray-600">(processed by third-party providers)</span></li>
                    <li>Vendor business information <span className="text-gray-600">(business name, address, contact details)</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">3.2 Usage Data</h3>
                  <p className="mb-2 leading-relaxed">Usage Data is collected automatically and may include:</p>
                  <ul className="list-disc list-inside space-y-1 ml-3 bg-gray-50 p-4 rounded-lg">
                    <li>IP address</li>
                    <li>Device identifiers and operating system</li>
                    <li>Browser type and version</li>
                    <li>Pages viewed, actions taken, and timestamps</li>
                    <li>App performance, diagnostics, and crash data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">3.3 Mobile Device Data</h3>
                  <p className="leading-relaxed">
                    When accessing the Service through a mobile device, additional technical data may be collected to ensure proper functionality and security.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">4.</span> Tracking Technologies and Cookies
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">4.1 Use of Tracking Technologies</h3>
                  <p className="leading-relaxed">
                    We use Cookies and similar technologies <span className="text-gray-600">(including web beacons and pixels)</span> to operate, secure, and improve the Service.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">4.2 Categories of Cookies</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-[#013727]">4.2.1 Essential Cookies</h4>
                      <p><span className="font-semibold">Type:</span> Session Cookies</p>
                      <p><span className="font-semibold">Purpose:</span> Enable authentication, account access, and fraud prevention.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-[#013727]">4.2.2 Consent Cookies</h4>
                      <p><span className="font-semibold">Type:</span> Persistent Cookies</p>
                      <p><span className="font-semibold">Purpose:</span> Record user cookie preferences.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-[#013727]">4.2.3 Functionality Cookies</h4>
                      <p><span className="font-semibold">Type:</span> Persistent Cookies</p>
                      <p><span className="font-semibold">Purpose:</span> Remember user preferences such as login state and language.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">4.3 Cookie Control</h3>
                  <p className="leading-relaxed">
                    Users may disable Cookies through device or browser settings; however, certain features may be unavailable.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">5.</span> Use of Personal Data
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">5.1 Core Operational Uses</h3>
                  <p className="mb-2 leading-relaxed">We use Personal Data to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-3 bg-gray-50 p-4 rounded-lg">
                    <li>Operate and maintain the Service</li>
                    <li>Create and manage customer and vendor Accounts</li>
                    <li>Facilitate surplus food listings, purchases, and fulfillment</li>
                    <li>Process transactions and payments</li>
                    <li>Provide customer support and account communications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">5.2 Improvement and Analytics</h3>
                  <p className="mb-2 leading-relaxed">Personal Data may also be used to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-3 bg-gray-50 p-4 rounded-lg">
                    <li>Analyze usage trends and performance</li>
                    <li>Improve platform functionality and reliability</li>
                    <li>Enhance user experience and service quality</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">5.3 Communications</h3>
                  <p className="leading-relaxed">
                    We may contact users regarding service updates, security notices, transactional messages, and promotional communications where permitted by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">6.</span> Disclosure of Personal Data
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">6.1 Service Providers</h3>
                  <p className="leading-relaxed">
                    We may share Personal Data with Service Providers that support hosting, payments, analytics, communications, and customer support. These parties are contractually required to protect the data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">6.2 Vendors and Customers</h3>
                  <p className="leading-relaxed">
                    Limited information may be shared between vendors and customers solely to complete transactions and fulfill orders.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">6.3 Business Transfers</h3>
                  <p className="leading-relaxed">
                    Personal Data may be disclosed or transferred in connection with a merger, acquisition, financing, or sale of Company assets.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">6.4 Legal and Regulatory Obligations</h3>
                  <p className="leading-relaxed">
                    We may disclose Personal Data when required by law, regulation, court order, or lawful governmental request.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">6.5 User Consent</h3>
                  <p className="leading-relaxed">
                    Personal Data may be disclosed for any other purpose with your explicit consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">7.</span> Data Retention
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">7.1 Retention Period</h3>
                  <p className="leading-relaxed">
                    We retain Personal Data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including legal, accounting, and regulatory requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">7.2 Usage Data</h3>
                  <p className="leading-relaxed">
                    Usage Data is generally retained for a shorter period unless required for security, analytics, or compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">8.</span> International Data Transfers
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">8.1 Cross-Border Processing</h3>
                  <p className="leading-relaxed">
                    Your Personal Data may be processed and stored outside your region. Data protection laws in other jurisdictions may differ from those in your location.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">8.2 Safeguards</h3>
                  <p className="leading-relaxed">
                    We implement reasonable safeguards to protect Personal Data during international transfers.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">9.</span> User Rights and Controls
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">9.1 Your Rights</h3>
                  <p className="mb-2 leading-relaxed">Depending on your jurisdiction, you may have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-3 bg-gray-50 p-4 rounded-lg">
                    <li>Access your Personal Data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Restrict or object to certain processing</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">9.2 Exercising Rights</h3>
                  <p className="leading-relaxed">
                    Requests may be made through your Account settings or by contacting us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">10.</span> Data Deletion
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">10.1 Account Deletion</h3>
                  <p className="leading-relaxed">
                    Users may request deletion of their Account and associated Personal Data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">10.2 Legal Exceptions</h3>
                  <p className="leading-relaxed">
                    Certain information may be retained where required by law or for legitimate business purposes, including fraud prevention and dispute resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">11.</span> Data Security
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">11.1 Security Measures</h3>
                  <p className="leading-relaxed">
                    We employ commercially reasonable administrative, technical, and organizational safeguards to protect Personal Data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">11.2 Security Limitation</h3>
                  <p className="leading-relaxed">
                    No system is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">12.</span> Children's Privacy
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">12.1 Age Limitation</h3>
                  <p className="leading-relaxed">
                    The Service is not intended for individuals under the age of <span className="font-semibold">13</span>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">12.2 Data Removal</h3>
                  <p className="leading-relaxed">
                    If Personal Data from a child is identified, it will be deleted promptly.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">13.</span> Third-Party Links
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">13.1 External Services</h3>
                  <p className="leading-relaxed">
                    The Service may contain links to third-party websites or services. We are not responsible for their privacy practices and encourage users to review their policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                <span className="text-[#013727]">14.</span> Changes to This Privacy Policy
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base mb-2">14.1 Updates</h3>
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted within the Service and reflected by the updated date.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">14.2 Continued Use</h3>
                  <p className="leading-relaxed">
                    Continued use of the Service after changes become effective constitutes acceptance of the revised Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 sm:mt-10 lg:mt-12 bg-gradient-to-r from-[#013727] to-[#015d3a] rounded-lg shadow-lg p-5 sm:p-6 lg:p-8 text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">
            <span className="text-green-100">15.</span> Contact Information
          </h2>
          <p className="text-sm sm:text-base mb-5 sm:mb-6 text-center text-green-50">
            If you have questions or requests regarding this Privacy Policy, please contact:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-green-100 mb-1">Email</p>
                <a 
                  href="mailto:support@bestbybites.com" 
                  className="text-sm sm:text-base font-semibold hover:text-green-200 transition-colors break-all"
                >
                  support@bestbybites.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <Globe className="h-5 w-5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-green-100 mb-1">Website</p>
                <a 
                  href="https://bestbybites.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-semibold hover:text-green-200 transition-colors break-all"
                >
                  bestbybites.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            This Privacy Policy is effective as of the date stated above. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-10 sm:mt-12 lg:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="text-center">
            <p className="text-xs sm:text-sm">
              <span className="font-semibold">© 2026 Bestby Bites.</span> All rights reserved.
            </p>
            <p className="text-xs sm:text-sm mt-2 text-gray-400">
              Connecting consumers with surplus food to reduce waste.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Better touch interaction for mobile/iPad */
        .touch-manipulation {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}