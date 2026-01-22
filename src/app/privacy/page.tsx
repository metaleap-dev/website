import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - MetaLeap LLC',
  description: 'Privacy Policy for MetaLeap LLC products including MotifyUp and Shapemo.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12">Last updated: January 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              MetaLeap LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our products and services, including MotifyUp and Shapemo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">MotifyUp</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Profile information (names, avatars) stored locally on your device</li>
              <li>Goal and progress data stored locally on your device</li>
              <li>We do not collect or transmit personal data to external servers</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">Shapemo</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Your Anthropic API key (stored locally in your browser only)</li>
              <li>Design prompts and generated content (processed via Anthropic&apos;s API)</li>
              <li>We do not store your designs or API keys on our servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send important updates about our services (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We prioritize local-first data storage. Your data in MotifyUp is stored on your device and synced via iCloud if enabled. Shapemo stores your API key in your browser&apos;s local storage. We implement industry-standard security measures to protect any data that passes through our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Our products may integrate with third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong>Apple (MotifyUp):</strong> For app distribution and optional iCloud sync</li>
              <li><strong>Anthropic (Shapemo):</strong> For AI-powered design generation</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Please review these services&apos; privacy policies for information about their data practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Access your personal data</li>
              <li>Delete your data (by uninstalling our apps or clearing browser data)</li>
              <li>Opt out of any marketing communications</li>
              <li>Request information about how your data is used</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              MotifyUp is designed for family use, including children. We do not knowingly collect personal information from children under 13 without parental consent. All child data in MotifyUp is stored locally on the parent&apos;s device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you have questions about this privacy policy or our data practices, please contact us at:{' '}
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
