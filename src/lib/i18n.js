import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'it'

register('it', () => import('$lib/locales/it.json'))
register('en', () => import('$lib/locales/en.json'))

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
})