import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

const TermsOfService: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-industrial-bg min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading subtitle="Legal" title="Terms of Service" />
        
        <div className="bg-white p-8 md:p-12 border border-industrial-border shadow-sm space-y-8 text-industrial-text">
          <p className="text-sm text-industrial-muted mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">1. Acceptance of Terms</h3>
            <p className="leading-relaxed text-industrial-muted">
              By accessing the website of Perfect Logistics (perfectlogistics.in), you agree to comply with these Terms of Service, all applicable laws, and regulations regarding infrastructure execution and safety.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">2. Service Disclaimer</h3>
            <p className="leading-relaxed text-industrial-muted">
              The information provided on this website regarding tank cleaning, calibration, and pipeline works is for general informational purposes. While we strive for accuracy:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-industrial-muted">
              <li>Specific project feasibility is subject to site inspection and engineering assessment.</li>
              <li>Timelines mentioned are indicative and subject to PESO/regulatory approvals.</li>
              <li>We reserve the right to refuse service for sites that do not meet minimum safety standards.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">3. Limitation of Liability</h3>
            <p className="leading-relaxed text-industrial-muted">
              In no event shall Perfect Logistics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if Perfect Logistics has been notified of the possibility of such damage.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">4. Intellectual Property</h3>
            <p className="leading-relaxed text-industrial-muted">
              All content, including the logo, infrastructure diagrams, and text, is the property of Perfect Logistics. Unauthorized reproduction of our certifications or client lists is strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">5. Governing Law</h3>
            <p className="leading-relaxed text-industrial-muted">
              These terms and conditions are governed by and construed in accordance with the laws of India. You irrevocably submit to the exclusive jurisdiction of the courts in Mangalore, Karnataka.
            </p>
          </div>

           <div className="space-y-4">
            <h3 className="text-xl font-bold text-industrial-secondary">6. Modifications</h3>
            <p className="leading-relaxed text-industrial-muted">
              Perfect Logistics may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;