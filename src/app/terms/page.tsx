import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - MetaLeap LLC',
  description: 'Terms of Service for MetaLeap LLC products including MotifyUp and Shapemo.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12">Last updated: January 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              By accessing or using MetaLeap LLC&apos;s products and services, including MotifyUp and Shapemo, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Description of Services</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">MotifyUp</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              MotifyUp is a family goal-tracking application for iOS devices. It allows users to create profiles, set goals, and track progress. The app is provided free of charge.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">Shapemo</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Shapemo is a web-based geometric design generator. Basic features are free to use. AI-powered design generation requires credits, which can be purchased within the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Use our services only for lawful purposes</li>
              <li>Not attempt to reverse engineer, modify, or distribute our software</li>
              <li>Keep your account credentials secure</li>
              <li>Not use our services to create harmful, offensive, or illegal content</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              All content, features, and functionality of our services are owned by MetaLeap LLC and are protected by intellectual property laws. You retain ownership of any content you create using our tools.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Designs created with Shapemo are yours to use as you wish for personal and commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our services may rely on or integrate with third-party services (such as Apple App Store). Your use of these services is subject to their respective terms and conditions. We are not responsible for the availability, accuracy, or content of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or secure. We make no warranties regarding the accuracy or reliability of any results obtained through our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To the maximum extent permitted by law, MetaLeap LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, profits, or business opportunities, arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data and Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Your use of our services is also governed by our{' '}
              <a href="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Privacy Policy
              </a>
              . By using our services, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may modify these terms at any time. We will notify users of significant changes by updating the &quot;Last updated&quot; date. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you have questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:hello@metaleap.so" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                hello@metaleap.so
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
