import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'it'

register('it', () => import('$lib/locales/it.js'))
register('en', () => import('$lib/locales/en.js'))

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
})