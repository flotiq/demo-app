import Image from 'next/image';
import { getAssetPath } from '@/app/_lib/helpers';
import Link from 'next/link';
import LanguageSwitcher from '@/app/_components/LanguageSwitcher/LanguageSwitcher';

type NavbarProps = {
  lang: 'en' | 'pl',
}

export default async function Navbar({ lang }: NavbarProps) {

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="absolute left-2 top-0">
        <a href="#" style={{ textDecoration: 'none' }}>
          <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="<http://www.w3.org/2000/svg>">
            <path d="" fill="#9094FF"/>
          </svg>
          <span></span>
        </a>
      </div>
      <div className="m-5 text-center">
        <Link href={`/${lang}`}>
          <Image
            className="inline"
            src={getAssetPath('/shop-logo.svg')}
            alt="Shop logo"
            width={137}
            height={36}
          />
        </Link>
      </div>
      <LanguageSwitcher lang={lang} />
    </div>
  );
};
