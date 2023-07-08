---
title: Theming
---

# Theming
## Setting a theme
You can set a theme by adding it as an option when registering the components.
```js
app.use(Sui, {
    theme: Themes.Dark,
});
```

## Dynamically changing the theme
After the library has been registered, you can use the global `SuiSetTheme` function to change the theme at runtime.
```js
const suiSetTheme = inject("SuiSetTheme");

const OhGodMyEyes = () => {
    suiSetTheme(Themes.Dark);
};
const LetThereBeLight = () => {
    suiSetTheme(Themes.Light);
};
```

## Default Themes
### Light <Badge text="Themes.Light" type="tip" />
```
{
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
}
```

### Dark <Badge text="Themes.Dark" type="tip" />
```
{
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
```

## Custom Themes
:::warning
Note that all color values must be three RGB values. This was done to enable easier manipulation of the colors on hover/active states.
:::
### Creating a new theme
You can create a custom theme by exporting an object with the needed values or directly providing them as options.

```js
app.use(Sui, {
    theme: {
        "font-family": "'Work Sans', sans-serif",
        "colors": {
            //...
        }
    },
});
```

### Overriding an existing theme
You can override an existing theme by including your custom values as new keys to the theme object.

```js
app.use(Sui, {
    theme: {
        ...Themes.Dark["font-family"],
        "colors": {
            ...Themes.Dark.colors,
            "primary": "16, 185, 104",
        }
    },
});
```