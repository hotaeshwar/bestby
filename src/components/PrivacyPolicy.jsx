import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Mail, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'intro',
      title: '1. Introduction',
      content: (
        <>
          <div className="mb-4">
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">1.1 Purpose</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
              Bestby Bites ("Bestby Bites," "Company," "we," "us," or "our") operates a digital marketplace that connects consumers with surplus food offered by participating vendors. This Privacy Policy describes how we collect, use, store, disclose, and protect personal information when users access or use our mobile application, website, and related services (collectively, the "Service").
            </span>
          </div>
          <div>
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">1.2 Scope and Acceptance</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
              This Privacy Policy applies to all users of the Service, including customers, vendors, and visitors. By accessing or using the Service, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree, you must discontinue use of the Service.
            </span>
          </div>
        </>
      )
    },
    {
      id: 'definitions',
      title: '2. Interpretation and Definitions',
      content: (
        <>
          <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3">2.2 Definitions</span>
          <div className="space-y-3">
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
              <div key={idx} className="border-l-2 border-emerald-500 pl-3 sm:pl-4">
                <span className="block text-xs sm:text-sm lg:text-base font-semibold text-gray-800">{item.term}</span>
                <span className="block text-xs sm:text-sm lg:text-base text-gray-600 mt-1">{item.def}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'collection',
      title: '3. Information We Collect',
      content: (
        <>
          <div className="mb-4">
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">3.1 Personal Data</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600 mb-3">We may collect Personal Data that you voluntarily provide, including:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {['Full name', 'Email address', 'Phone number', 'Delivery or pickup address', 'Account login credentials', 'Payment-related identifiers', 'Vendor business information'].map((item, idx) => (
                <span key={idx} className="flex items-center text-xs sm:text-sm lg:text-base text-gray-700">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">3.2 Usage Data</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600 mb-3">Usage Data is collected automatically and may include:</span>
            <div className="space-y-1.5">
              {['IP address', 'Device identifiers and operating system', 'Browser type and version', 'Pages viewed, actions taken, and timestamps', 'App performance, diagnostics, and crash data'].map((item, idx) => (
                <span key={idx} className="block text-xs sm:text-sm lg:text-base text-gray-700 pl-4">• {item}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">3.3 Mobile Device Data</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600">When accessing the Service through a mobile device, additional technical data may be collected to ensure proper functionality and security.</span>
          </div>
        </>
      )
    },
    {
      id: 'cookies',
      title: '4. Tracking Technologies and Cookies',
      content: (
        <>
          <span className="block text-xs sm:text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
            We use Cookies and similar technologies (including web beacons and pixels) to operate, secure, and improve the Service.
          </span>
          <div className="space-y-4">
            {[
              { title: 'Essential Cookies', type: 'Session Cookies', purpose: 'Enable authentication, account access, and fraud prevention.' },
              { title: 'Consent Cookies', type: 'Persistent Cookies', purpose: 'Record user cookie preferences.' },
              { title: 'Functionality Cookies', type: 'Persistent Cookies', purpose: 'Remember user preferences such as login state and language.' }
            ].map((cookie, idx) => (
              <div key={idx} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">{cookie.title}</span>
                <span className="block text-xs sm:text-sm text-gray-600"><span className="font-medium">Type:</span> {cookie.type}</span>
                <span className="block text-xs sm:text-sm text-gray-600 mt-1"><span className="font-medium">Purpose:</span> {cookie.purpose}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <span className="block text-xs sm:text-sm lg:text-base text-amber-800">
              <span className="font-semibold">Cookie Control:</span> Users may disable Cookies through device or browser settings; however, certain features may be unavailable.
            </span>
          </div>
        </>
      )
    },
    {
      id: 'usage',
      title: '5. Use of Personal Data',
      content: (
        <>
          <div className="mb-4">
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3">5.1 Core Operational Uses</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600 mb-2">We use Personal Data to:</span>
            <div className="space-y-2">
              {['Operate and maintain the Service', 'Create and manage customer and vendor Accounts', 'Facilitate surplus food listings, purchases, and fulfillment', 'Process transactions and payments', 'Provide customer support and account communications'].map((item, idx) => (
                <span key={idx} className="block text-xs sm:text-sm lg:text-base text-gray-700 pl-4">• {item}</span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3">5.2 Improvement and Analytics</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600">Personal Data may also be used to analyze usage trends, improve platform functionality, and enhance user experience.</span>
          </div>
          <div>
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">5.3 Communications</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600">We may contact users regarding service updates, security notices, transactional messages, and promotional communications where permitted by law.</span>
          </div>
        </>
      )
    },
    {
      id: 'disclosure',
      title: '6. Disclosure of Personal Data',
      content: (
        <div className="space-y-4">
          {[
            { title: '6.1 Service Providers', text: 'We may share Personal Data with Service Providers that support hosting, payments, analytics, communications, and customer support. These parties are contractually required to protect the data.' },
            { title: '6.2 Vendors and Customers', text: 'Limited information may be shared between vendors and customers solely to complete transactions and fulfill orders.' },
            { title: '6.3 Business Transfers', text: 'Personal Data may be disclosed or transferred in connection with a merger, acquisition, financing, or sale of Company assets.' },
            { title: '6.4 Legal and Regulatory Obligations', text: 'We may disclose Personal Data when required by law, regulation, court order, or lawful governmental request.' },
            { title: '6.5 User Consent', text: 'Personal Data may be disclosed for any other purpose with your explicit consent.' }
          ].map((item, idx) => (
            <div key={idx}>
              <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">{item.title}</span>
              <span className="block text-xs sm:text-sm lg:text-base text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'rights',
      title: '9. User Rights and Controls',
      content: (
        <>
          <div className="mb-4">
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3">9.1 Your Rights</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600 mb-3">Depending on your jurisdiction, you may have the right to:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {['Access your Personal Data', 'Correct inaccurate information', 'Request deletion of your data', 'Restrict or object to certain processing', 'Withdraw consent where applicable'].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-emerald-500 mr-2 text-sm sm:text-base">✓</span>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2">9.2 Exercising Rights</span>
            <span className="block text-xs sm:text-sm lg:text-base text-gray-600">Requests may be made through your Account settings or by contacting us directly.</span>
          </div>
        </>
      )
    },
    {
      id: 'security',
      title: '11. Data Security',
      content: (
        <div className="space-y-4">
          <div className="bg-emerald-50 p-4 sm:p-5 rounded-lg border border-emerald-200">
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-emerald-900 mb-2">11.1 Security Measures</span>
            <span className="block text-xs sm:text-sm lg:text-base text-emerald-800">We employ commercially reasonable administrative, technical, and organizational safeguards to protect Personal Data.</span>
          </div>
          <div className="bg-orange-50 p-4 sm:p-5 rounded-lg border border-orange-200">
            <span className="block text-sm sm:text-base lg:text-lg font-semibold text-orange-900 mb-2">11.2 Security Limitation</span>
            <span className="block text-xs sm:text-sm lg:text-base text-orange-800">No system is completely secure. While we strive to protect your information, we cannot guarantee absolute security.</span>
          </div>
        </div>
      )
    },
    {
      id: 'children',
      title: '12. Children\'s Privacy',
      content: (
        <div className="bg-purple-50 p-4 sm:p-5 rounded-lg border border-purple-200">
          <span className="block text-sm sm:text-base lg:text-lg font-semibold text-purple-900 mb-2">Age Limitation</span>
          <span className="block text-xs sm:text-sm lg:text-base text-purple-800 mb-3">The Service is not intended for individuals under the age of 13.</span>
          <span className="block text-xs sm:text-sm lg:text-base text-purple-800">If Personal Data from a child is identified, it will be deleted promptly.</span>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600">Bestby Bites</span>
              <span className="block text-xs sm:text-sm lg:text-base text-gray-500 mt-1">Privacy Policy</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              <span>Last Updated: January 06, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Introduction Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 shadow-lg">
          <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Your Privacy Matters</span>
          <span className="block text-sm sm:text-base lg:text-lg text-emerald-50 leading-relaxed">
            This policy explains how we collect, use, and protect your personal information when you use our surplus food marketplace. We are committed to transparency and safeguarding your data.
          </span>
        </div>

        {/* Sections */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-left text-base sm:text-lg lg:text-xl font-semibold text-gray-800">{section.title}</span>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {expandedSection === section.id && (
                <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 border-t border-gray-100 bg-gray-50">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-8 sm:mt-10 lg:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">15. Contact Information</span>
          <span className="block text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
            If you have questions or requests regarding this Privacy Policy, please contact:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Email</span>
                <span className="block text-xs sm:text-sm lg:text-base text-emerald-600 break-all">support@bestbybites.com</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Website</span>
                <span className="block text-xs sm:text-sm lg:text-base text-teal-600 break-all">bestbybites.com</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg sm:col-span-2 lg:col-span-1">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Company</span>
                <span className="block text-xs sm:text-sm lg:text-base text-purple-600">Bestby Bites</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-10 text-center">
          <span className="block text-xs sm:text-sm text-gray-500">
            © 2026 Bestby Bites. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}