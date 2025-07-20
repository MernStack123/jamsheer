import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from './section/hero/Hero';
import About from './section/about/About';
import VideoSection from './section/video/VideoSection';
import ImageSection from './section/image/Image';

export default function HomePage() {
  return (
    <main className="relative w-full">
      <Navbar position="fixed" />
      <Hero />

      {/* Sticky Container */}
      <div className="relative">
        {/* Sticky Image */}
        <div className="sticky top-0 z-10">
          <div className="h-screen w-full">
            <ImageSection />
          </div>
        </div>

        {/* Overlapping Content */}
        <div className="-mt-screen relative z-20 bg-transparent">
          {/* Spacer to allow scroll */}
          <div className="h-screen w-full"></div>

          {/* Footer that slides over */}
          <About />
          <VideoSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
