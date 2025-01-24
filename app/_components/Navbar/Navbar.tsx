import Image from 'next/image';
import { getAssetPath } from '@/app/_lib/helpers';
import Link from 'next/link';
import LanguageSwitcher from '@/app/_components/LanguageSwitcher/LanguageSwitcher';

type NavbarProps = {
  readonly lang: 'en' | 'pl',
}

export default async function Navbar({ lang }: NavbarProps) {

  return (
    <div className="relative max-w-7xl mx-auto">
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
