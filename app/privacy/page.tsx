import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0D2B4F] to-[#081A2B] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-[#00B4D8] hover:text-[#0099C4] transition-colors">
            ← Back to Home
          </Link>
          <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-white mt-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 mt-2">
            Last updated: January 2025
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              Introduction
            </h2>
            <p className="text-[#333333] leading-relaxed">
              Hakkem Fleet (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our truck delivery booking service. Please read this privacy policy carefully. If you do not agree with 
              the terms of this privacy policy, please do not access the application.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              1. Information We Collect
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              We collect only the information necessary to provide our truck delivery services:
            </p>
            <ul className="list-disc pl-6 text-[#333333] space-y-2">
              <li><strong>Contact Information:</strong> Name and phone number for delivery coordination</li>
              <li><strong>Delivery Details:</strong> Pickup location, destination, and cargo information</li>
              <li><strong>Booking Information:</strong> Truck type preferences and delivery requirements</li>
              <li><strong>Communication Records:</strong> Messages and calls related to your delivery</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mt-4">
              We do not collect unnecessary personal information, financial data, or tracking information beyond what is 
              required for service delivery.
            </p>
          </section>

          {/* Use of Information */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              We use your information solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-[#333333] space-y-2">
              <li>Processing and managing your truck delivery bookings</li>
              <li>Coordinating pickup and delivery logistics</li>
              <li>Providing real-time delivery tracking and updates</li>
              <li>Communicating delivery status and important updates</li>
              <li>Resolving delivery issues and providing customer support</li>
              <li>Maintaining service quality and safety standards</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 text-[#333333] space-y-2">
              <li><strong>Service Providers:</strong> With our trusted drivers and logistics partners solely for delivery fulfillment</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice)</li>
              <li><strong>Consent:</strong> When you explicitly consent to sharing for specific purposes</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mt-4">
              We ensure all third parties with whom we share information maintain appropriate data protection standards.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              4. Data Security
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-[#333333] space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure servers with regular security updates</li>
              <li>Access controls and authentication protocols</li>
              <li>Regular security audits and monitoring</li>
              <li>Staff training on data protection practices</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mt-4">
              While we strive to protect your information, no method of transmission over the internet is 100% secure. 
              We cannot guarantee absolute security but are committed to using commercially acceptable means to protect 
              your personal information.
            </p>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Under Nigerian data protection laws and our commitment to your privacy, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-[#333333] space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided in the Contact section below.
            </p>
          </section>

          {/* Children Privacy */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              6. Children&apos;s Privacy
            </h2>
            <p className="text-[#333333] leading-relaxed">
              Our service is not intended for users under the age of 18. We do not knowingly collect personal 
              information from children under 18. If we become aware that we have collected personal information 
              from a child under 18, we will take steps to delete such information immediately. If you believe 
              we have collected information from a child under 18, please contact us immediately.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc pl-6 text-[#333333] space-y-2">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the &ldquo;Last updated&rdquo; date at the top of this policy</li>
              <li>Sending you an email notification for significant changes</li>
              <li>Providing notice through our application for material changes</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mt-4">
              We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our 
              service after any modifications constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="font-poppins text-2xl font-semibold text-[#0D2B4F] mb-4">
              8. Contact Information
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[#F4F6F8] p-6 rounded-lg">
              <div className="space-y-3">
                <div>
                  <strong className="text-[#0D2B4F]">Hakkem Fleet</strong>
                </div>
                <div>
                  <strong className="text-[#0D2B4F]">Email:</strong> 
                  <span className="text-[#333333] ml-2">privacy@hakkemfleet.com</span>
                </div>
                <div>
                  <strong className="text-[#0D2B4F]">Phone:</strong> 
                  <span className="text-[#333333] ml-2">+234 800 HAKKEM (425536)</span>
                </div>
                <div>
                  <strong className="text-[#0D2B4F]">Address:</strong> 
                  <span className="text-[#333333] ml-2">Lagos, Nigeria</span>
                </div>
                <div>
                  <strong className="text-[#0D2B4F]">Support Hours:</strong> 
                  <span className="text-[#333333] ml-2">Monday - Friday, 8:00 AM - 6:00 PM WAT</span>
                </div>
              </div>
            </div>
            <p className="text-[#333333] leading-relaxed mt-4">
              We will respond to your privacy inquiries within 30 days of receipt.
            </p>
          </section>


        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#081A2B] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2025 Hakkem Fleet. All Rights Reserved.
          </p>
          <div className="mt-4">
            <Link href="/" className="text-[#00B4D8] hover:text-[#0099C4] transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
