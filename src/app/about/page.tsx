import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - MetaLeap LLC',
  description: 'Learn about MetaLeap LLC, our mission to build innovative digital products that help families and creators achieve their goals.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-black dark:to-gray-900 py-24 md:py-32">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/30 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
              About MetaLeap
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up animation-delay-200">
              We&apos;re a small team with big ideas, passionate about creating digital products that make a meaningful difference in people&apos;s lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                At MetaLeap, we believe technology should bring people together and unlock creativity. Our mission is to build innovative digital products that empower families to achieve their goals and enable creators to express themselves freely.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We&apos;re driven by the idea that the best tools are those that feel intuitive, look beautiful, and genuinely help people accomplish what matters most to them.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-cyan-200 dark:from-indigo-900/30 dark:to-cyan-900/30 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 border border-gray-100 dark:border-gray-700">
                <blockquote className="text-xl font-medium leading-relaxed">
                  &ldquo;We take a leap forward so our users can too.&rdquo;
                </blockquote>
                <p className="mt-4 text-gray-500 dark:text-gray-400">— MetaLeap Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/50 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe the best products are those that feel effortless to use. We obsess over removing complexity so our users can focus on what matters.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/50 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every pixel, every interaction, every feature is crafted with care. We don&apos;t ship until we&apos;re proud of what we&apos;ve built.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We build for families and communities. Our products are designed to bring people together and strengthen connections.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We embrace new technologies like AI not for novelty, but to create experiences that were previously impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What We Build</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our current products focus on two areas: helping families thrive and enabling creative expression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-3xl p-8 border border-orange-100 dark:border-orange-900/30 card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">MotifyUp</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Family goal tracking that brings households together through shared achievements.
              </p>
              <a
                href="https://motifyup.metaleap.so/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/30 card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Shapemo</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                AI-powered geometric design generator for instant creative expression.
              </p>
              <a
                href="https://www.shapemo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Want to learn more?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have questions, feedback, or just want to say hello, don&apos;t hesitate to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
