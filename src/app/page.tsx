import {
  CallToAction,
  FeaturesSection,
  Header,
  HeroSection,
  Logo,
  TestimonialsSection,
} from "@/components";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToAction />
      </main>

      <footer className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <Logo className="mb-4 md:mb-0" />
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-500">
                © 2025 Vayu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
