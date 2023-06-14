/**
 * @typedef {'light' | 'dark'} Theme
 */

import { browser } from "$app/environment";
import { writable } from "svelte/store";

const userTheme = browser && localStorage.getItem('color-scheme')
export const theme = writable(userTheme ?? 'dark')

export function toggleTheme() {
    theme.update(currentTheme => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('color-scheme', newTheme);
        localStorage.setItem('color-scheme', newTheme);
        return newTheme;
    })
}
/**
 * Set the theme to the specified value.
 * @param {Theme} newTheme - The new theme to set.
 */
export function setTheme(newTheme) {
    theme.set(newTheme)
}