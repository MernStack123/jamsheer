import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutPage from './section/AboutPage';

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="fixed" />
        <div className="h-[10vh] w-full bg-[#ffff] md:h-[10vh]" id="hero"></div>
        <AboutPage />
        <Footer />
      </div>
    </main>
  );
};

export default page;
