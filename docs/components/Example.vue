<template>
    <div class="example">
        <span class="label">example</span>

        <slot />
    </div>
</template>

<script setup>
import {Themes} from "../../src/index.js";
import {inject, onMounted} from "vue";

const suiSetTheme = inject('SuiSetTheme');
const rootElement = document.documentElement;

onMounted(() => {
    const switcherElement = document.querySelector("button.VPSwitch.VPSwitchAppearance");
    switcherElement.addEventListener('click', () => {
        syncTheme();
    });

    syncTheme();
});

const syncTheme = () => {
    if(rootElement.classList.contains("dark")) {
        suiSetTheme(Themes.Dark);
    } else {
        suiSetTheme(Themes.Light);
    }
};
</script>

<style lang="scss" scoped>
.example {
    border: 1px solid rgba(0,0,0,0.14);
    padding: 20px;
    border-radius: 8px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & > span.label {
        position: absolute;
        top: 2px;
        right: 8px;
        z-index: 2;
        font-size: 12px;
        font-weight: 500;
        color: var(--vp-c-code-dimm);
    }
}
:root.dark .example {
    border: 1px solid rgba(255,255,255,0.14);
}
</style>