import 'server-only'
 
const dictionaries = {
  en: () => import('../dictionaries/en.js').then((module) => module.default),
  vi: () => import('../dictionaries/vi.js').then((module) => module.default),
}
 
export const getDictionary = async (locale) => {
  const dictionary = await dictionaries[locale]();
  return dictionary;
};