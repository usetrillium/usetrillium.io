import ThemeToggle from './components/theme-toggle';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Trillium</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Features</a>
            <a href="#" className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">Documentation</a>
            <a href="#" className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">GitHub</a>
            <ThemeToggle />
            <a href="#" className="text-sm px-4 py-2 bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white rounded-md transition-all duration-200 ease-in-out transform hover:scale-105">Login</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-32 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-gray-800 to-gray-50 dark:to-gray-900 opacity-60 z-0"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block">Modern Infrastructure</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Simplified</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Trillium delivers an open source hyperconverged infrastructure platform designed for modern cloud-native workloads. Deploy, scale, and manage your virtualized infrastructure with ease.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md"
              >
                Try Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-green-600 dark:border-green-400 text-base font-medium rounded-md text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 transition-all duration-200 shadow-sm"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--color-primary))] to-emerald-500 inline-block">Why Choose Trillium?</h2>
              <p className="mt-4 text-lg text-[rgb(var(--color-muted))] max-w-2xl mx-auto">
                A powerful open source alternative for managing virtualized infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 rounded-lg shadow-md bg-[rgb(var(--color-card))] border border-gray-200/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[rgb(var(--color-primary))]/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--color-foreground))]">Open Source Freedom</h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Built on open standards with a fully transparent codebase that you can inspect, modify, and contribute to.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-6 rounded-lg shadow-md bg-[rgb(var(--color-card))] border border-gray-200/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[rgb(var(--color-primary))]/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--color-foreground))]">Simplified Management</h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Streamline operations with an intuitive dashboard for deploying and managing your virtual infrastructure.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-6 rounded-lg shadow-md bg-[rgb(var(--color-card))] border border-gray-200/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[rgb(var(--color-primary))]/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--color-foreground))]">Edge to Cloud Ready</h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Deploy and manage workloads seamlessly from edge devices to your data center with unified management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-[rgb(var(--color-secondary))]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to transform your infrastructure?</h2>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[rgb(var(--color-primary))] hover:bg-opacity-90 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700/30 bg-[rgb(var(--color-card))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--color-primary))] to-emerald-500">Trillium</span>
              <p className="mt-1 text-sm text-[rgb(var(--color-muted))]">Open Source Hyperconverged Infrastructure</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-[rgb(var(--color-primary))] transition-colors">GitHub</a>
              <a href="#" className="text-sm hover:text-[rgb(var(--color-primary))] transition-colors">Documentation</a>
              <a href="#" className="text-sm hover:text-[rgb(var(--color-primary))] transition-colors">Community</a>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700/20 text-center text-xs text-[rgb(var(--color-muted))]">
            <p>&copy; {new Date().getFullYear()} Trillium Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
