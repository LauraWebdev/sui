<template>
    <body class="playground">
        <slot />
    </body>
</template>

<script setup>
import '@fontsource-variable/manrope';
import '../../../src/sui.scss';
</script>

<style lang="scss" scoped>
.playground {
    min-height: 150px !important;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    & aside {
        position: absolute;
        top: 10px;
        left: 10px;
        color: #aaa;
        font-size: 16px;
    }

    /* Duplicating root vars as it's not supported by src imports */
    --font-size: 14px;
    --font-family: 'Manrope Variable', sans-serif;
    --transition-default: 0.15s ease-in-out all;

    --color-base-50: 246, 246, 246;
    --color-base-100: 231, 231, 231;
    --color-base-200: 209, 209, 209;
    --color-base-300: 176, 176, 176;
    --color-base-400: 136, 136, 136;
    --color-base-500: 109, 109, 109;
    --color-base-600: 93, 93, 93;
    --color-base-700: 79, 79, 79;
    --color-base-800: 52, 52, 52;
    --color-base-900: 35, 35, 35;
    --color-base-950: 17, 17, 17;

    --color-primary-50: 254, 242, 244;
    --color-primary-100: 254, 229, 233;
    --color-primary-200: 251, 208, 217;
    --color-primary-300: 248, 169, 186;
    --color-primary-400: 244, 120, 150;
    --color-primary-500: 232, 51, 99;
    --color-primary-600: 215, 39, 95;
    --color-primary-700: 181, 27, 79;
    --color-primary-800: 152, 25, 72;
    --color-primary-900: 130, 25, 67;
    --color-primary-950: 72, 9, 33;

    --color-danger-50: 254, 242, 245;
    --color-danger-100: 254, 229, 234;
    --color-danger-200: 252, 207, 219;
    --color-danger-300: 249, 168, 188;
    --color-danger-400: 244, 120, 154;
    --color-danger-500: 233, 53, 107;
    --color-danger-600: 215, 39, 100;
    --color-danger-700: 182, 26, 84;
    --color-danger-800: 152, 25, 76;
    --color-danger-900: 130, 25, 71;
    --color-danger-950: 72, 9, 35;
}
</style>
