import Link from 'next/link';
import { Icons } from './Icon';

const Footer = () => {
  return (
    <footer className="relative h-full w-full bg-[#171717] py-8 md:py-16">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* <div>
          <span
            className={`font-montserrat text-base font-[700] uppercase tracking-[4px] hover:underline md:text-lg ${'text-[#ffff]'}`}
          >
            Jamsheer Portfolio
          </span>
        </div> */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-12">
          <Link
            href={'/'}
            className={`font-oswald text-sm font-[700] uppercase tracking-[2px] text-[#fff] hover:underline`}
          >
            Home
          </Link>
          <Link
            href={'/photos'}
            className={`font-oswald text-sm font-[700] uppercase tracking-[2px] text-[#fff] hover:underline`}
          >
            Photos
          </Link>
          <Link
            href={'/videos'}
            className={`font-oswald text-sm font-[700] uppercase tracking-[2px] text-[#fff] hover:underline`}
          >
            Videos
          </Link>
          <Link
            href={'/contact'}
            className={`font-oswald text-sm font-[700] uppercase tracking-[2px] text-[#fff] hover:underline`}
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 md:gap-6">
          <Link href={'#'} target="_blank">
            <Icons.instagram className="text-white" />
          </Link>
          <Link href={'#'} target="_blank">
            <Icons.facebook className="text-white" />
          </Link>
          <Link href={'#'} target="_blank">
            <Icons.unknown className="text-white" />
          </Link>
        </div>
        <div>
          <span className="font-montserrat text-xs font-[300] text-white">
            © 2025 — A Jamsheer Class Photography Production
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
