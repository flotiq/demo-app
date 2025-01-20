import { getAssetPath } from '@/app/_lib/helpers';
import Image from 'next/image';

export default function Footer() {
    return (
      <div className="max-w-7xl m-auto flex flex-col">
          <div className="flex justify-between items-center">
              <div>
                  <Image
                    className="inline"
                    src={getAssetPath('/shop-logo.svg')}
                    alt="Shop logo"
                    width={137}
                    height={36}
                  />
              </div>
              <div className="flex flex-col space-y-2 uppercase text-lg font-normal w-fit">
                  <p>
                      Phone:
                      <span className="ml-5 font-light">
                     +1 123123123
                  </span>
                  </p>
                  <p>
                      Address:
                      <span className="ml-5 font-light">DEMO STREET</span>
                  </p>
                  <p>
                      Email:
                      <a href="mail:example@example.com" className="ml-5 font-light">
                          example@example.com
                      </a>
                  </p>
              </div>
              <div>
                  CONTACT FORM
              </div>
          </div>
      </div>
  );
}
