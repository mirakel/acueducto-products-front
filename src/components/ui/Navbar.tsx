import Link from 'next/link';
import { Search } from './Search';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref legacyBehavior>
          <a className=" cursor-pointer">
            <h1 className="flex no-underline">
              <Image
                height="64"
                width="64"
                alt="logo"
                className="h-16 w-16 mr-1 object-contain"
                src="/adidas.png"
              />
              <span className="text-xl font-primary font-bold tracking-tight pt-4">
                Adidas Company
              </span>
            </h1>
          </a>
        </Link>

        <div>
          <Search />
        </div>
      </div>
    </header>
  );
};
