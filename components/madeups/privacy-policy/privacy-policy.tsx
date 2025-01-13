import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="mt-20 mx-auto py-8 px-6 container">
      <h1 className="text-5xl mb-6">Privacy & Cookie Policy</h1>

      <p className="text-sm text-gray-600 mb-8">Last Updated: 12th Oct 2023</p>

      <section className="mb-8">
        <h2 className="text-3xl mb-4">Introduction</h2>
        <p className="text-lg">
          Welcome to EZMigrate. Your privacy is important to us, and we are
          dedicated to protecting your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you interact with our website, products, and services. By using our
          platform, you agree to the practices described in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl mb-4">Information We Collect</h2>
        <div>
          <div>
            <strong className="text-gray-900">Contact Information:</strong>
            <p className="text-gray-700">
              We collect details like your name, email address, phone number,
              and postal address when you interact with us, use our services, or
              contact us for inquiries.
            </p>
          </div>
          <div>
            <strong className="text-gray-900">Usage Information:</strong>
            <p className="text-gray-700">
              We collect data such as IP addresses, device information, browser
              type, and pages visited to understand how you use our website and
              improve your experience.
            </p>
          </div>
          <div>
            <strong className="text-gray-900">Account Information:</strong>
            <p className="text-gray-700">
              If you register an account with us, we store information like your
              username, password, and preferences.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl mb-4">How We Use Your Information</h2>
        <div>
          <div>
            <p className="text-gray-700 text-lg">
              <strong className="text-gray-900 text-lg">
                Service Delivery:
              </strong>{" "}
              We use your information to provide requested services, process
              applications, and offer customer support.
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-lg">
              <strong className="text-gray-900 text-lg">
                Service Improvement:
              </strong>{" "}
              Your data helps us refine our website, customise user experiences,
              and introduce new features.
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-lg">
              <strong className="text-gray-900 text-lg">Communication:</strong>{" "}
              We may send you updates, promotional offers, newsletters, or
              service-related announcements. You can opt out of non-essential
              communications anytime.
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-lg">
              <strong className="text-gray-900 text-lg">
                Legal Compliance:
              </strong>{" "}
              We process your data to adhere to legal obligations and respond to
              lawful government requests.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl mb-4">Data Security</h2>
        <p className="text-gray-700">
          We prioritise the security of your personal data by employing
          industry-standard security measures to prevent unauthorised access,
          alteration, or destruction. However, no online transmission method is
          entirely secure, and we cannot guarantee complete protection.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl mb-4">Use of Google reCAPTCHA</h2>
        <p className="text-gray-700">
          To protect against spam and abuse, we use Google reCAPTCHA on our
          website. This service collects information such as IP addresses and
          browsing behaviour to verify user authenticity. By using our website,
          you agree to Google&apos;s privacy practices as described in their{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>
          .
        </p>
        <p className="text-gray-700 mt-2">
          If you are uncomfortable with Google reCAPTCHA data collection, you
          can contact us directly for assistance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl mb-4">Sharing Your Information</h2>
        <div className="space-y-4">
          <div>
            <p className="text-gray-700 text-lg">
              <strong className="text-gray-900 text-lg">
                With Service Providers:
              </strong>{" "}
              We may share your data with trusted third-party providers who
              assist us in operating our platform and delivering services.
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-lg">
              <strong className="text-gray-900 text-lg">
                Legal Requirements:
              </strong>{" "}
              Your information may be disclosed to comply with legal obligations
              or protect the rights, safety, and property of EZMigrate, our
              users, and the public.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          This Privacy Policy may be updated periodically to reflect changes in
          our practices or for legal compliance. We encourage you to review it
          regularly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl mb-4">Contact Us</h2>
        <p className="text-gray-700">
          For questions, concerns, or requests related to your personal data or
          this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:info@ezmigrate.com"
            className="text-blue-600 hover:underline"
          >
            info@ezmigrate.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
