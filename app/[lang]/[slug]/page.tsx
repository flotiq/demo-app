import { content, helpers } from '@/flotiq-api-client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { getTranslatedField } from '@/app/_lib/helpers';
import CartForm from '@/app/_components/CartForm/CartForm';
import { getDictionary } from '@/app/[lang]/dictionaries';

type ProductPageParams = {
  readonly params: Promise<{ readonly slug: string, readonly lang: 'en' | 'pl' }>;
};

export default async function ProductPage({ params }: ProductPageParams) {
  const { slug, lang } = await params;
  const productData = await content.product.list({
    limit: 1,
    filters: { slug: { type: 'equals', filter: slug } },
    hydrate: 1,
  });

  if (!productData?.data?.[0]) {
    return notFound();
  }
  const product = productData.data[0];
  const productImage = product.productImage?.[0];

  const dict = await getDictionary(lang);

  return (
    <>
      <div className="flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex basis-full lg:basis-1/2">
          {productImage && (
            <Image
              className={twMerge(
                'w-full rounded-md h-fit',
              )}
              src={helpers.getMediaUrl(productImage)}
              height={423}
              width={752}
              alt={productImage.alt || product.name}
            />
          )}
        </div>
        <div className="flex flex-col basis-full lg:basis-1/2 pl-0 lg:pl-12 pt-5 pb-10">
          <h1 className="text-7xl p-0 mt-3 md:mt-0 mb-5 font-black">
            {getTranslatedField(product, 'name', lang)}
          </h1>
          <h2 className="text-xl md:text-4xl uppercase font-light pb-0">${product.price}</h2>
          <div dangerouslySetInnerHTML={{ __html: getTranslatedField(product, 'description', lang) || '<p></p>' }}/>
          <CartForm dict={dict} product={product} />
        </div>
      </div>
    </>
  );
}
