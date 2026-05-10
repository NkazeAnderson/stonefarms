import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-[150px] pb-20 px-4 md:px-20 max-w-5xl mx-auto">
      <h1 className="text-primary text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none space-y-8 text-gray-800">
        <section>
          <p className="text-xl text-gray-600">
            Last updated: May 9, 2026
          </p>
          <p className="mt-4">
            At StoneFarms, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Subscribe to our newsletter.</li>
            <li>Make a donation.</li>
            <li>Contact us through our website.</li>
            <li>Participate in our programs or events.</li>
          </ul>
          <p className="mt-4">
            This information may include your name, email address, phone number, and any other details you choose to share.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide you with updates about our projects and impact.</li>
            <li>Process your donations and provide receipts.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Improve our website and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">3. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Request access to the personal information we hold about you.</li>
            <li>Request the correction of inaccurate information.</li>
            <li>Request the deletion of your personal information.</li>
            <li>Opt-out of receiving marketing communications at any time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you may contact us using the information below:
          </p>
          <div className="mt-4 p-6 bg-primary-100 rounded-2xl border border-primary-200">
            <p className="font-bold">StoneFarms Ltd Cameroon</p>
            <p>Chefferie Yaguem, Dschang, West Region, Cameroon</p>
            <p>Email: <a href="mailto:info@stonefarms.org" className="text-primary underline">info@stonefarms.org</a></p>
            <p>Phone: +237 6 51 95 97 78</p>
          </div>
        </section>
      </div>
    </main>
  );
}
