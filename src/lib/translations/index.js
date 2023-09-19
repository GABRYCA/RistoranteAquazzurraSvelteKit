import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
    log: {
        level: dev ? 'warn' : 'error',
    },
    translations: {
        it: { lang },
        en: { lang },
        de: { lang }
    },
    loaders: [
        {
            locale: 'it',
            key: 'locale',
            loader: async () => (await import('./it/it.json')).default,
        },
        {
            locale: 'en',
            key: 'locale',
            loader: async () => (await import('./en/en.json')).default,
        },
        {
            locale: 'de',
            key: 'locale',
            loader: async () => (await import('./de/de.json')).default,
        }
    ],
};

export const { t, loading, locales, locale, translations, loadTranslations, addTranslations, setLocale, setRoute } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));