<template>
    <div
        v-bind="$attrs"
        :class="`sui sui-loader ${line ? 'line' : ''}`"
    >
        <div class="icon">
            <span :class="`icon ${iconPrefix}${iconLoader}`"></span>
        </div>
    </div>
</template>

<script setup>

import {inject} from "vue";

const iconPrefix = inject('SuiIconPrefix');
const iconLoader = inject('SuiIconLoader');

defineProps({
    line: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
.sui-loader {
    &:not(.line) {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        animation: 0.3s loadingEntry linear forwards;

        & .icon {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 42px;
            color: rgb(var(--sui-colors-base-text));
            animation: sui-rotate 1.5s linear infinite;
        }
    }
    &.line {
        width: 100%;
        height: 4px;
        background: rgb(var(--sui-colors-base-text), 0.14);
        border-radius: 10px;
        opacity: 0;
        animation: 0.3s loadingEntry linear forwards;
        overflow: hidden;
        position: relative;

        & .icon {
            background: rgb(var(--sui-colors-base-text));
            width: 0;
            border-radius: 10px;
            height: 4px;
            position: absolute;
            animation: loadingLoopLine 0.5s linear infinite;

            & > span {
                display: none;
            }
        }
    }
}

@keyframes loadingEntry {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes loadingLoopLine {
    0% {
        width: 100%;
        left: -100%;
    }
    100% {
        width: 100%;
        left: 100%;
    }
}
</style>