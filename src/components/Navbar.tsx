'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = ({
  position = 'static',
}: {
  position?: 'static' | 'fixed' | 'absolute';
}) => {
  useEffect(() => {
    const d = localStorage.getItem('positiond');
    if (d !== null) {
      setPositiond(d);
    }
  }, []);

  const [positiond, setPositiond] = useState<string>('');

  useEffect(() => {
    if (positiond) {
      localStorage.setItem('positiond', positiond);
    }
  }, [positiond]);

  const pathname = usePathname();

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full bg-[#ffff] pt-4 transition-all duration-300 md:pt-5`,
        pathname === '/menu' && 'bg-menubackground pt-4',
        // isScrolled && "h-[15vh] bg-[#013827] backdrop-blur-sm md:h-[11vh]",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 lg:block lg:px-12">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center justify-center">
            <span
              className={`font-montserrat text-base font-[700] uppercase tracking-[4px] hover:underline md:text-lg ${
                pathname === '/' ? 'text-[#000]' : 'text-[#000]'
              }`}
            >
              Jamsheer Portfolio
            </span>
          </div>
          <div className="flex flex-row items-center justify-center gap-12">
            <Link
              href={'/'}
              className={`font-montserrat text-sm font-[700] uppercase hover:underline ${
                pathname === '/' ? 'text-[#000]' : 'text-[#000]'
              }`}
            >
              Home
            </Link>
            <Link
              href={'/photos'}
              className={`font-montserrat text-sm font-[700] uppercase hover:underline ${
                pathname === '/' ? 'text-[#000]' : 'text-[#000]'
              }`}
            >
              Photos
            </Link>
            <Link
              href={'/videos'}
              className={`font-montserrat text-sm font-[700] uppercase hover:underline ${
                pathname === '/' ? 'text-[#000]' : 'text-[#000]'
              }`}
            >
              Videos
            </Link>
            <Link
              href="https://wa.me/917034732231?text=Hi%20Jamsheer,%20I'm%20interested%20in%20your%20photography%20services."
              className={`font-montserrat text-sm font-[700] uppercase hover:underline ${
                pathname === '/' ? 'text-[#000]' : 'text-[#000]'
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <span
              className={`font-montserrat text-sm font-[700] uppercase tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-[#000]' : 'text-[#000]'
              }`}
            >
              Menu
            </span>
            <Sidebar>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary flex px-1 py-1 hover:bg-transparent"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{' '}
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 lg:hidden lg:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <span
              className={`font-montserrat text-base font-[700] uppercase tracking-[1px] hover:underline md:text-lg md:tracking-[4px] ${
                pathname === '/' ? 'text-[#000]' : 'text-[#000]'
              }`}
            >
              Jamsheer Portfolio
            </span>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary flex px-1 py-1 hover:bg-transparent"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{' '}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={`bar ${pathname === '/' ? 'bg-[#000]' : 'bg-[#000]'}`}
      ></div>
      <div
        className={`bar ${pathname === '/' ? 'bg-[#000]' : 'bg-[#000]'}`}
      ></div>
      <div
        className={`bar ${pathname === '/' ? 'bg-[#000]' : 'bg-[#000]'}`}
      ></div>
    </div>
  );
};
