import { content } from '@/flotiq-api-client';
import { ProductHydrated } from '@flotiq/flotiq-api-sdk';
import ProductCard from '@/app/_components/ProductCard/ProductCard';
import { getDictionary } from '@/app/[lang]/dictionaries';

type HomePageParams = {
  readonly params: Promise<{ readonly lang: 'en' | 'pl' }>;
};

export default async function Home({ params }: HomePageParams) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const productsList: ProductHydrated[] = await content.product.list({ hydrate: 1 })
    .then((response) => {
      return response.data;
    });
  return (
    <div
      className="px-5 lg:px-10 pb-10 xl:pb-18"
    >
      <div className="max-w-7xl m-auto flex flex-col">
        <h1>{dict.Products}</h1>
        <div

          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10 lg:gap-10 lg:gap-y-18"
        >
          {productsList.map((product: ProductHydrated) => (
            <ProductCard product={product} key={product.slug} lang={lang}/>
          ))}
        </div>
      </div>
    </div>
  );
}
