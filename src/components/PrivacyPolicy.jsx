import React from 'react';
import { Shield, Mail, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#013727] to-[#015d3a] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col items-center">
            <img 
              src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png" 
              alt="Bestby Bites Logo" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto mb-4 sm:mb-5"
            />
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Privacy Policy</span>
              <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3 text-xs sm:text-sm text-green-100">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Last Updated: January 06, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Introduction Banner */}
        <div className="bg-gradient-to-r from-[#013727] to-[#015d3a] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 shadow-lg">
          <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Your Privacy Matters</span>
          <span className="block text-sm sm:text-base lg:text-lg text-green-50 leading-relaxed">
            This policy explains how we collect, use, and protect your personal information when you use our surplus food marketplace. We are committed to transparency and safeguarding your data.
          </span>
        </div>

        {/* Sections */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Section 1: Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">1. Introduction</span>
            
            <div className="mb-6">
              <span className="block text-lg font-semibold text-gray-800 mb-3">1.1 Purpose</span>
              <span className="block text-gray-600 leading-relaxed">
                Bestby Bites ("Bestby Bites," "Company," "we," "us," or "our") operates a digital marketplace that connects consumers with surplus food offered by participating vendors. This Privacy Policy describes how we collect, use, store, disclose, and protect personal information when users access or use our mobile application, website, and related services (collectively, the "Service").
              </span>
            </div>
            
            <div>
              <span className="block text-lg font-semibold text-gray-800 mb-3">1.2 Scope and Acceptance</span>
              <span className="block text-gray-600 leading-relaxed">
                This Privacy Policy applies to all users of the Service, including customers, vendors, and visitors. By accessing or using the Service, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree, you must discontinue use of the Service.
              </span>
            </div>
          </div>

          {/* Section 2: Interpretation and Definitions */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">2. Interpretation and Definitions</span>
            
            <span className="block text-lg font-semibold text-gray-800 mb-4">2.2 Definitions</span>
            <div className="space-y-4">
              {[
                { term: 'Account', def: 'means a unique account created to access the Service.' },
                { term: 'Affiliate', def: 'means any entity that directly or indirectly controls, is controlled by, or is under common control with the Company.' },
                { term: 'Company', def: 'refers to Bestby Bites.' },
                { term: 'Cookies', def: 'means small text files stored on a user\'s device to support functionality and analytics.' },
                { term: 'Device', def: 'means any device capable of accessing the Service, including smartphones, tablets, or computers.' },
                { term: 'Personal Data', def: 'means any information that identifies or can reasonably be linked to an identifiable individual.' },
                { term: 'Service', def: 'refers to the Bestby Bites mobile application, website, and related services.' },
                { term: 'Service Provider', def: 'means a third party that processes data on behalf of the Company.' },
                { term: 'Usage Data', def: 'means data collected automatically through interaction with the Service.' },
                { term: 'Website', def: 'refers to bestbybites.com.' },
                { term: 'User or You', def: 'means an individual or legal entity accessing or using the Service.' }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#013727] pl-4">
                  <span className="block font-semibold text-gray-800">{item.term}</span>
                  <span className="block text-gray-600 mt-1">{item.def}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Information We Collect */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">3. Information We Collect</span>
            
            <div className="mb-8">
              <span className="block text-lg font-semibold text-gray-800 mb-3">3.1 Personal Data</span>
              <span className="block text-gray-600 mb-4">We may collect Personal Data that you voluntarily provide, including:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {['Full name', 'Email address', 'Phone number', 'Delivery or pickup address', 'Account login credentials', 'Payment-related identifiers', 'Vendor business information'].map((item, idx) => (
                  <span key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#013727] rounded-full mr-2"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <span className="block text-lg font-semibold text-gray-800 mb-3">3.2 Usage Data</span>
              <span className="block text-gray-600 mb-4">Usage Data is collected automatically and may include:</span>
              <div className="space-y-2">
                {['IP address', 'Device identifiers and operating system', 'Browser type and version', 'Pages viewed, actions taken, and timestamps', 'App performance, diagnostics, and crash data'].map((item, idx) => (
                  <span key={idx} className="block text-gray-700 pl-4">• {item}</span>
                ))}
              </div>
            </div>
            
            <div>
              <span className="block text-lg font-semibold text-gray-800 mb-3">3.3 Mobile Device Data</span>
              <span className="block text-gray-600">When accessing the Service through a mobile device, additional technical data may be collected to ensure proper functionality and security.</span>
            </div>
          </div>

          {/* Section 4: Tracking Technologies and Cookies */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">4. Tracking Technologies and Cookies</span>
            
            <span className="block text-gray-600 mb-6 leading-relaxed">
              We use Cookies and similar technologies (including web beacons and pixels) to operate, secure, and improve the Service.
            </span>
            
            <div className="space-y-4 mb-6">
              {[
                { title: 'Essential Cookies', type: 'Session Cookies', purpose: 'Enable authentication, account access, and fraud prevention.' },
                { title: 'Consent Cookies', type: 'Persistent Cookies', purpose: 'Record user cookie preferences.' },
                { title: 'Functionality Cookies', type: 'Persistent Cookies', purpose: 'Remember user preferences such as login state and language.' }
              ].map((cookie, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <span className="block font-semibold text-gray-800 mb-2">{cookie.title}</span>
                  <span className="block text-gray-600"><span className="font-medium">Type:</span> {cookie.type}</span>
                  <span className="block text-gray-600 mt-1"><span className="font-medium">Purpose:</span> {cookie.purpose}</span>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <span className="block text-amber-800">
                <span className="font-semibold">Cookie Control:</span> Users may disable Cookies through device or browser settings; however, certain features may be unavailable.
              </span>
            </div>
          </div>

          {/* Section 5: Use of Personal Data */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">5. Use of Personal Data</span>
            
            <div className="mb-8">
              <span className="block text-lg font-semibold text-gray-800 mb-4">5.1 Core Operational Uses</span>
              <span className="block text-gray-600 mb-3">We use Personal Data to:</span>
              <div className="space-y-2">
                {['Operate and maintain the Service', 'Create and manage customer and vendor Accounts', 'Facilitate surplus food listings, purchases, and fulfillment', 'Process transactions and payments', 'Provide customer support and account communications'].map((item, idx) => (
                  <span key={idx} className="block text-gray-700 pl-4">• {item}</span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <span className="block text-lg font-semibold text-gray-800 mb-3">5.2 Improvement and Analytics</span>
              <span className="block text-gray-600">Personal Data may also be used to analyze usage trends, improve platform functionality, and enhance user experience.</span>
            </div>
            
            <div>
              <span className="block text-lg font-semibold text-gray-800 mb-3">5.3 Communications</span>
              <span className="block text-gray-600">We may contact users regarding service updates, security notices, transactional messages, and promotional communications where permitted by law.</span>
            </div>
          </div>

          {/* Section 6: Disclosure of Personal Data */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">6. Disclosure of Personal Data</span>
            
            <div className="space-y-6">
              {[
                { title: '6.1 Service Providers', text: 'We may share Personal Data with Service Providers that support hosting, payments, analytics, communications, and customer support. These parties are contractually required to protect the data.' },
                { title: '6.2 Vendors and Customers', text: 'Limited information may be shared between vendors and customers solely to complete transactions and fulfill orders.' },
                { title: '6.3 Business Transfers', text: 'Personal Data may be disclosed or transferred in connection with a merger, acquisition, financing, or sale of Company assets.' },
                { title: '6.4 Legal and Regulatory Obligations', text: 'We may disclose Personal Data when required by law, regulation, court order, or lawful governmental request.' },
                { title: '6.5 User Consent', text: 'Personal Data may be disclosed for any other purpose with your explicit consent.' }
              ].map((item, idx) => (
                <div key={idx}>
                  <span className="block text-lg font-semibold text-gray-800 mb-2">{item.title}</span>
                  <span className="block text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9: User Rights and Controls */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">9. User Rights and Controls</span>
            
            <div className="mb-8">
              <span className="block text-lg font-semibold text-gray-800 mb-4">9.1 Your Rights</span>
              <span className="block text-gray-600 mb-4">Depending on your jurisdiction, you may have the right to:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Access your Personal Data', 'Correct inaccurate information', 'Request deletion of your data', 'Restrict or object to certain processing', 'Withdraw consent where applicable'].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#013727] mr-2 text-lg">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <span className="block text-lg font-semibold text-gray-800 mb-3">9.2 Exercising Rights</span>
              <span className="block text-gray-600">Requests may be made through your Account settings or by contacting us directly.</span>
            </div>
          </div>

          {/* Section 11: Data Security */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">11. Data Security</span>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <span className="block text-lg font-semibold text-green-900 mb-2">11.1 Security Measures</span>
                <span className="block text-green-800">We employ commercially reasonable administrative, technical, and organizational safeguards to protect Personal Data.</span>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                <span className="block text-lg font-semibold text-orange-900 mb-2">11.2 Security Limitation</span>
                <span className="block text-orange-800">No system is completely secure. While we strive to protect your information, we cannot guarantee absolute security.</span>
              </div>
            </div>
          </div>

          {/* Section 12: Children's Privacy */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <span className="block text-xl sm:text-2xl font-bold text-gray-800 mb-6">12. Children's Privacy</span>
            
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <span className="block text-lg font-semibold text-purple-900 mb-3">Age Limitation</span>
              <span className="block text-purple-800 mb-3">The Service is not intended for individuals under the age of 13.</span>
              <span className="block text-purple-800">If Personal Data from a child is identified, it will be deleted promptly.</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <span className="block text-2xl font-bold text-gray-800 mb-6">15. Contact Information</span>
          <span className="block text-gray-600 mb-6">
            If you have questions or requests regarding this Privacy Policy, please contact:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-5 bg-green-50 rounded-lg border border-green-100">
              <Mail className="w-6 h-6 text-[#013727] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-semibold text-gray-700 mb-1">Email</span>
                <span className="block text-[#013727] break-all">support@bestbybites.com</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 bg-teal-50 rounded-lg border border-teal-100">
              <Globe className="w-6 h-6 text-[#013727] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-semibold text-gray-700 mb-1">Website</span>
                <span className="block text-[#013727] break-all">bestbybites.com</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 bg-purple-50 rounded-lg border border-purple-100 sm:col-span-2 lg:col-span-1">
              <Shield className="w-6 h-6 text-[#013727] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-semibold text-gray-700 mb-1">Company</span>
                <span className="block text-[#013727]">Bestby Bites</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <span className="block text-sm text-gray-500">
            © 2026 Bestby Bites. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}