import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Stack } from './sections/Stack';
import { UseCases } from './sections/UseCases';
import { Speech } from './sections/Speech';
import { Brand } from './sections/Brand';
import { LanguageProvider } from './hooks/useLanguage';

function AppContent() {
  return (
    <div className="min-h-screen bg-io-deep-space px-6 pb-20 pt-10 text-white sm:px-10 lg:px-24">
      <Header />
      <Hero />
      <Features />
      <Stack />
      <Speech />
      <UseCases />
      <Brand />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
