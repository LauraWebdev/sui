---
title: Getting Started
---

# Getting Started
To use the Sui component system, you must register it in your Vue application.

```js
app.use(Sui);
```

You can also provide the default theme and icon system to use. To learn more about customization options, check out [Theming](/theming) and [Icons](/icons).

```js
app.use(Sui, {
    theme: Themes.Dark,
    icons: Icons.Remixicon,
});
```