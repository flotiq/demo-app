import 'server-only';

const dictionaries = {
  en: () => import('../_dictionaries/en.json').then((module) => module.default),
  pl: () => import('../_dictionaries/pl.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'pl') =>
  dictionaries[locale]();
