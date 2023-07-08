import "./main.css";

import {
    SuiBadge,
    SuiButton,
    SuiHeader,
    SuiInput,
    SuiLoader,
    SuiSelect,
    SuiSwitch,
    SuiTabBar,
    SuiTabItem
} from "./components/index.js";

export const Sui = {
    install(app, options) {
        app.component('SuiButton', SuiButton);
        app.component('SuiLoader', SuiLoader);
        app.component('SuiSwitch', SuiSwitch);
        app.component('SuiHeader', SuiHeader);
        app.component('SuiTabBar', SuiTabBar);
        app.component('SuiTabItem', SuiTabItem);
        app.component('SuiInput', SuiInput);
        app.component('SuiSelect', SuiSelect);
        app.component('SuiBadge', SuiBadge);

        app.provide('SuiIconPrefix', options?.icons?.prefix ?? '');
        app.provide('SuiIconLoader', options?.icons?.loader ?? '');
        app.provide('SuiIconArrowUp', options?.icons?.arrowUp ?? '');
        app.provide('SuiIconArrowDown', options?.icons?.arrowDown ?? '');
        app.provide('SuiSetTheme', (theme) => this.setTheme(theme));
        
        this.setTheme(options?.theme ?? Themes.Light);
    },
    setTheme(theme) {
        setThemeVariables(theme);
    }
}

const setThemeVariables = (inputObject, parentKey = '') => {
    const root = document?.documentElement ?? null;
    if(root === null) return;

    for (let key in inputObject) {
        if (typeof inputObject[key] === 'object' && inputObject[key] !== null) {
            setThemeVariables(inputObject[key], parentKey + key + '-');
        } else {
            root.style.setProperty('--sui-' + parentKey + key, inputObject[key]);
        }
    }
}

export const Themes = {
    Light: {
        "font-family": "Verdana, sans-serif",
        "colors": {
            "base": "255, 255, 255",
            "base-2": "238, 238, 238",
            "base-3": "221, 221, 221",
            "base-text": "17, 17, 17",
            "primary": "232, 77, 177",
            "secondary": "113, 79, 172",
            "error": "255, 56, 99",
            "success": "61, 251, 132",
        },
    },
    Dark: {
        "font-family": "Verdana, sans-serif",
        "colors": {
            "base": "17, 17, 17",
            "base-2": "34, 34, 34",
            "base-3": "51, 51, 51",
            "base-text": "255, 255, 255",
            "primary": "232, 77, 177",
            "secondary": "113, 79, 172",
            "error": "255, 56, 99",
            "success": "61, 251, 132",
        },
    }
}

export const Icons = {
    Remixicon: {
        prefix: 'ri-',
        loader: 'loader-4-line',
        arrowUp: 'arrow-up-s-line',
        arrowDown: 'arrow-down-s-line',
    },
    MaterialDesignIcons: {
        prefix: 'mdi mdi-',
        loader: 'loading',
        arrowUp: 'menu-up',
        arrowDown: 'menu-down',
    },
    FontAwesome: {
        prefix: 'fa-solid fa-',
        loader: 'spinner',
        arrowUp: 'chevron-up',
        arrowDown: 'chevron-down',
    }
}