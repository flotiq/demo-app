import Image from 'next/image';
import { helpers } from '@/flotiq-api-client';
import { ProductHydrated } from '@flotiq/flotiq-api-sdk';
import Link from 'next/link';
import { getTranslatedField } from '@/app/_lib/helpers';
import { getDictionary } from '@/app/[lang]/dictionaries';

type ProductCardProps = {
  /**
   * Product data
   */
  readonly product: ProductHydrated,
  readonly lang: 'en' | 'pl',
}

export default async function ProductCard({ product, lang }: ProductCardProps) {
  const productImage = product.productImage?.[0];
  const dict = await getDictionary(lang);
  return (
    <div
      className="relative items-center gap-4 rounded-md border-white border
       hover:border-gray-200 transition-transform duration-700"
    >
      <Link
        className="absolute top-0 left-0 h-full w-full"
        href={`/${lang}/${product.slug}`}
        prefetch
      />

      {productImage && (
        <Image
          className="w-full rounded-md"
          src={helpers.getMediaUrl(productImage, { width: 1504 })}
          height={423}
          width={752}
          alt={productImage.alt || product.name}
        />
      )}

      <div className="flex flex-col gap-1 lg:gap-2 w-full">
        <h3 className="text-base/[20px] lg:text-2xl mb-0 mt-2">{getTranslatedField(product, 'name', lang)}</h3>
        <p className="text-base lg:text-lg">{dict.Price}: ${product.price}</p>
      </div>
    </div>
  );
}
