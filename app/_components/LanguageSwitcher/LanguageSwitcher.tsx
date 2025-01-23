'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type LanguageSwitcherProps = {
  lang: 'en' | 'pl',
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  return (
    <div className="absolute right-2 top-0">
      <Link
        href={pathname?.replace('\/pl', '/en') || '/en'}
        className={twMerge(lang === 'en' && 'font-bold pointer-events-none')}
        aria-disabled={lang === 'en'}
      >
        EN
      </Link>
      {' '}|{' '}
      <Link
        href={pathname?.replace('\/en', '/pl') || '/pl'}
        className={twMerge(lang === 'pl' && 'font-bold pointer-events-none')}
        aria-disabled={lang === 'en'}
      >
        PL
      </Link>
    </div>
  );
}
