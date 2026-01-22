'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const subjectLabels: Record<string, string> = {
    general: 'General Inquiry',
    motifyup: 'MotifyUp Support',
    shapemo: 'Shapemo Support',
    feedback: 'Feedback',
    partnership: 'Partnership',
    other: 'Other',
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectText = subjectLabels[formData.subject] || formData.subject;
    const emailSubject = encodeURIComponent(`[${subjectText}] Message from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${subjectText}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:hello@metaleap.so?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black py-24 md:py-32">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up animation-delay-200">
              Have a question, feedback, or just want to say hello? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                Whether you&apos;re interested in our products, have suggestions for improvements, or want to explore collaboration opportunities, we&apos;re here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:hello@metaleap.so"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      hello@metaleap.so
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Products</h3>
                    <div className="space-y-1">
                      <a
                        href="https://motifyup.metaleap.so/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        motifyup.metaleap.so
                      </a>
                      <a
                        href="https://www.shapemo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        shapemo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social/Additional Info */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <h3 className="font-semibold mb-4">Response Time</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We typically respond to inquiries within 1-2 business days. For urgent matters, please mention it in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="motifyup">MotifyUp Support</option>
                      <option value="shapemo">Shapemo Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Open Email Client
                  </button>

                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    This will open your default email app with the message pre-filled
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is MotifyUp free to use?',
                a: 'Yes, MotifyUp is free to download on the App Store. You can create profiles and track goals without any cost.',
              },
              {
                q: 'Do I need to pay for Shapemo?',
                a: 'Shapemo is free to use. You just need to provide your own Anthropic API key, which is stored securely in your browser.',
              },
              {
                q: 'What platforms do your products support?',
                a: 'MotifyUp is available on iOS (iPhone and iPad). Shapemo is a web application that works on any modern browser.',
              },
              {
                q: 'How can I report a bug or suggest a feature?',
                a: 'Use the contact form above and select the appropriate product. We appreciate all feedback and actively consider feature suggestions.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
