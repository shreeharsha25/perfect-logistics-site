import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-industrial-bg min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading subtitle="Legal" title="Privacy Policy" />
        
        <div className="bg-white p-8 md:p-12 border border-industrial-border shadow-sm space-y-8 text-industrial-text">
          <p className="text-sm text-industrial-muted mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">1. Information We Collect</h3>
            <p className="leading-relaxed text-industrial-muted">
              Perfect Logistics ("we," "us," or "our") collects information to provide specialized petroleum infrastructure services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-industrial-muted">
              <li><strong>Personal Identification:</strong> Name, Designation, Official Email, Mobile Number.</li>
              <li><strong>Corporate Data:</strong> Company Name, GST Number, Project Site Locations.</li>
              <li><strong>Technical Data:</strong> IP addresses, browser type, and device information when accessing our portal.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">2. Use of Information</h3>
            <p className="leading-relaxed text-industrial-muted">
              We use collected data strictly for business-to-business (B2B) operations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-industrial-muted">
              <li>To assess feasibility for infrastructure projects (Tank Cleaning, Pipeline Works).</li>
              <li>To issue quotations, tenders, and HSE compliance documents.</li>
              <li>To comply with PESO and OISD regulatory requirements.</li>
              <li>To improve website performance and user experience.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">3. Data Protection</h3>
            <p className="leading-relaxed text-industrial-muted">
              We implement industry-standard security measures to protect your data. Project blueprints, tender documents, and proprietary infrastructure details uploaded via our forms are stored on secure, encrypted servers. Access is restricted to authorized engineering and administrative personnel only.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">4. Information Sharing</h3>
            <p className="leading-relaxed text-industrial-muted">
              We do not sell, trade, or rent your personal identification information. We may share generic aggregated demographic information not linked to any personal identification information with our subsidiaries (Perfect Trading Co, Petro Tech Engineers) for operational coordination.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">5. Cookies</h3>
            <p className="leading-relaxed text-industrial-muted">
              Our website uses "cookies" to enhance user experience. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. Note that some parts of the site may not function properly without cookies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">6. Contact Us</h3>
            <p className="leading-relaxed text-industrial-muted">
              If you have any questions about this Privacy Policy, please contact us at:<br/>
              <strong>Perfect Logistics</strong><br/>
              1st Floor, Vishnukripa Building, NH 17, Kulai, Mangalore - 575 010<br/>
              Email: info@perfectlogistics.in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;