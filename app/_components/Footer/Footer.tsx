import { getAssetPath } from '@/app/_lib/helpers';
import Image from 'next/image';
import { getDictionary } from '@/app/[lang]/dictionaries';

type FooterProps = {
  readonly lang: 'en' | 'pl',
}

export default async function Footer({ lang }: FooterProps) {
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-7xl m-auto mb-2">
      <div
        className="flex justify-between items-stretch lg:items-start flex-col lg:flex-row flex-grow lg:flex-grow-0 space-y-4">
        <div className="my-2 mx-auto lg:mx-0">
          <Image
            className="inline lg:ml-4 xl:ml-0"
            src={getAssetPath('/shop-logo.svg')}
            alt="Shop logo"
            width={137}
            height={36}
          />
        </div>
        <div className="flex flex-col space-y-2 uppercase text-lg font-normal w-fit mx-auto">
          <p className="flex justify-between">
            {dict.Phone}:
            <span className="ml-5 font-light">
                     +1 123123123
                  </span>
          </p>
          <p className="flex justify-between">
            {dict.Address}:
            <span className="ml-5 font-light">DEMO STREET</span>
          </p>
          <p className="flex justify-between">
            {dict.Email}:
            <a href="mail:example@example.com" className="ml-5 font-light">
              example@example.com
            </a>
          </p>
        </div>
        <div className="basis-1/3 mx-4 lg:mx-4 max-w-96 min-w-[calc(100vw-2rem)] lg:min-w-fit">
          {/* @ts-expect-error custom tag */}
          <flotiq-form/>
        </div>
      </div>
    </div>
  );
}
