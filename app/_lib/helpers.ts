import { ProductHydrated, Product } from '@flotiq/flotiq-api-sdk';

/**
 * Get page absolute URL based on path
 * @param {string} path - page path
 * @param {boolean} trailingSlash - if page should have trailing slash at the end
 * @returns {string} page absolute URL
 */
export function getAbsoluteUrl(path?: string, trailingSlash: boolean = true): string {
  const baseURL =
    `${(process.env.PUBLIC_URL || 'https://demo-shop.com').replace(/\/+$/, '')}${trailingSlash ? '/' : ''}`;
  if (!path) return baseURL;
  return `${baseURL.replace(/\/+$/, '')}/${path.replace(/^\/*/, '')}${trailingSlash ? '/' : ''}`;
}


/**
 * Get asset path with sub-path name
 * @param {string} path - asset path
 * @returns {string} asset path
 */
export function getAssetPath(path: string): string {
  const subPath = process.env.NEXT_PUBLIC_BASE_PATH;
  if (!subPath) return path.replace(/\/+$/, '');
  return `${subPath.replace(/\/+$/, '')}/${path.replace(/^\/*/, '')}`;
}

export function getTranslatedField(object: ProductHydrated, field: string, lang: 'en' | 'pl') {
  return object.__translations?.find((translation: Product._translationsBase) => translation.__language == lang)?.[field]
    || object[field];
}
