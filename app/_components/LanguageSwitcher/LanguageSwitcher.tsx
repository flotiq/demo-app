'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link';

type LanguageSwitcherProps = {
  readonly lang: 'en' | 'pl',
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  return (
    <div className="absolute right-2 top-0">
      <Link
        href={pathname?.replace('\/pl', '/en') || '/en'}
        className={lang === 'en' ? 'font-bold pointer-events-none' : ''}
        aria-disabled={lang === 'en'}
      >
        EN
      </Link>
      {' '}|{' '}
      <Link
        href={pathname?.replace('\/en', '/pl') || '/pl'}
        className={lang === 'pl' ? 'font-bold pointer-events-none' : ''}
        aria-disabled={lang === 'en'}
      >
        PL
      </Link>
    </div>
  );
}
