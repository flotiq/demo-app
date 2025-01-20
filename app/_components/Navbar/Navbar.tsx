import Image from 'next/image';
import { getAssetPath } from '@/app/_lib/helpers';
import Link from 'next/link';

export default function Navbar() {
    return (
      <div className="m-5 text-center">
        <Link href="/">
          <Image
            className="inline"
            src={getAssetPath('/shop-logo.svg')}
            alt="Shop logo"
            width={137}
            height={36}
          />
        </Link>
      </div>
    );
};
