import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { type FC } from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="pr-20">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-end justify-end pb-8 pt-16 md:pt-20"></div>
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-end justify-end gap-7">
            <Link
              href="/"
              className="font-oswald flex w-full justify-end p-0 text-2xl font-[700] tracking-[2px] text-[#000]"
            >
              Home
            </Link>
            <Link
              href="/photos"
              className="font-oswald flex w-full justify-end p-0 text-2xl font-[700] tracking-[2px] text-[#000]"
            >
              Photos
            </Link>
            <Link
              href="/about"
              className="font-oswald flex w-full justify-end p-0 text-2xl font-[700] tracking-[2px] text-[#000]"
            >
              About
            </Link>
            <Link
              href="/videos"
              className="font-oswald flex w-full justify-end p-0 text-2xl font-[700] tracking-[2px] text-[#000]"
            >
              Videos
            </Link>
            <Link
              href="https://wa.me/917034732231?text=Hi%20Jamsheer,%20I'm%20interested%20in%20your%20photography%20services."
              className="font-oswald flex w-full justify-end p-0 text-2xl font-[700] tracking-[2px] text-[#000]"
            >
              Contact
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
