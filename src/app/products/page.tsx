import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - MetaLeap LLC',
  description: 'Explore our innovative products: MotifyUp for family goal tracking and Shapemo for AI-powered geometric design.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black py-24 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
              Our Products
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up animation-delay-200">
              Discover innovative tools designed to help you achieve more, create freely, and bring your family closer together.
            </p>
          </div>
        </div>
      </section>

      {/* MotifyUp Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                iOS App
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                MotifyUp
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                A beautifully designed family goal-tracking app that brings households together through shared objectives and achievements. Whether it&apos;s reading goals, fitness challenges, or creative projects, MotifyUp helps everyone stay motivated.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Individual Profiles</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Create unique profiles for each family member with personalized goals and progress tracking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Progress Visualization</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Beautiful charts and earned stars make tracking progress fun and rewarding.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Multi-Category Goals</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Support for reading, fitness, creativity, and custom goal categories.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://motifyup.metaleap.so/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-orange-200 dark:shadow-none"
              >
                Visit MotifyUp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-900/30 dark:to-amber-900/30 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50 rounded-3xl p-8 md:p-12 border border-orange-100 dark:border-orange-900/30">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">MotifyUp</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Family Goal Tracking</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-gray-800">Free Download</span>
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-gray-800">iOS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-gray-200 dark:border-gray-800" />
      </div>

      {/* Shapemo Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl p-8 md:p-12 border border-indigo-100 dark:border-indigo-900/30">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Shapemo</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">AI Geometric Design</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-gray-800">Free to Use</span>
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-gray-800">Web App</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Web App
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Shapemo
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Transform your ideas into stunning geometric art with the power of AI. Simply describe what you want, and let Claude AI create beautiful abstract compositions in seconds. Perfect for creators, educators, and design enthusiasts.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI-Powered Generation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Describe your design in natural language and watch Claude AI bring it to life.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Curated Color Palettes</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Choose from Mondrian, Sunset, Pastel, Ocean, and more color schemes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Interactive Canvas</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pan, zoom, rotate, and fine-tune your designs with smooth controls.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.shapemo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-indigo-200 dark:shadow-none"
              >
                Visit Shapemo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who Uses Our Products?</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our tools are designed for diverse users with unique creative and organizational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👨‍👩‍👧‍👦', title: 'Families', desc: 'Track goals and build habits together' },
              { icon: '🎨', title: 'Creators', desc: 'Generate unique geometric designs' },
              { icon: '📚', title: 'Educators', desc: 'Teach art, design, and goal-setting' },
              { icon: '🏠', title: 'DIY Enthusiasts', desc: 'Create patterns for brick art & crafts' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center card-hover border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
