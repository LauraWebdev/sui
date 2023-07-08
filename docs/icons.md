---
title: Icons
---

# Icons
## How to set the icon system
You can set an icon system by adding it as an option when registering the components.
```js
app.use(Sui, {
    icons: Icons.Remixicon,
});
```

## Default icon systems
:::info
Sui does not include an icon font by default. You must install them on your own.
:::
### Remixicon <Badge text="Icons.Remixicon" type="tip" />
```
{
    prefix: 'ri-',
    loader: 'loader-4-line',
    arrowUp: 'arrow-up-s-line',
    arrowDown: 'arrow-down-s-line',
}
```

### Material Design Icons <Badge text="Icons.MaterialDesignIcons" type="tip" />
```
{
    prefix: 'mdi mdi-',
    loader: 'loading',
    arrowUp: 'menu-up',
    arrowDown: 'menu-down',
}
```

## Using your own icon system
### Creating a new icon system
You can create a custom icon system by exporting an object with the needed values or directly providing them as options.

```js
app.use(Sui, {
    icons: {
        prefix: 'mycons-',          // Prefix that is set before all icons
        loader: 'loading',          // Icon to be used for loading states
        arrowUp: 'up-arrow',        // Icon to be used for a dropdowns "open" state
        arrowDown: 'down-arrow',    // Icon to be used for a dropdowns "close" state
    },
});
```

### Overriding an existing icon system
You can override an existing icon system by including your custom values as new keys to the icon system object.

```js
app.use(Sui, {
    icons: {
        ...Icons.Remixicon,
        "arrowUp": "arrow-drop-up-line",
        "arrowDown": "arrow-drop-down-line",
    },
});
```