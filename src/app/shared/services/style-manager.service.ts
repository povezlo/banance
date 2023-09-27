import { Injectable } from '@angular/core';

export const DARK_MATERIAL_THEME = 'dark-theme';

@Injectable({ providedIn: 'root' })
export class StyleManager {
	isDark = false;

	toggleDarkTheme() {
		if (this.isDark) {
			this.removeStyle(DARK_MATERIAL_THEME);
			document.body.classList.remove(DARK_MATERIAL_THEME);
			this.isDark = false;
		} else {
			const href = 'dark-theme.css';
			getLinkElementForKey(DARK_MATERIAL_THEME).setAttribute('href', href);
			document.body.classList.add(DARK_MATERIAL_THEME);
			this.isDark = true;
		}
	}

	removeStyle(key: string) {
		const existingLinkElement = getExistingLinkElementByKey(key);
		if (existingLinkElement) {
			document.head.removeChild(existingLinkElement);
		}
	}
}

function getLinkElementForKey(key: string) {
	return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
	return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}

function createLinkElementWithKey(key: string) {
	const linkEl = document.createElement('link');
	linkEl.setAttribute('rel', 'stylesheet');
	linkEl.classList.add(getClassNameForKey(key));
	document.head.appendChild(linkEl);
	return linkEl;
}

function getClassNameForKey(key: string) {
	return `style-manager-${key}`;
}
