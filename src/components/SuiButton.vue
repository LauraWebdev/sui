<template>
    <button
        v-bind="$attrs"
        @click="emit('click')"
        :disabled="disabled"
        :class="`sui sui-button color-${color} ${reversed ? 'reversed' : ''} ${mini ? 'mini' : ''} ${icon ? 'has-icon' : ''} ${label ? 'has-label' : ''}`"
    >
        <span v-if="loading" :class="`loading icon ${iconPrefix}${iconLoader}`"></span>
        <span v-if="icon && !loading" :class="`icon ${iconPrefix}${icon}`"></span>
        <span v-if="label" class="label">{{ label }}</span>
    </button>
</template>

<script setup>
import {inject} from "vue";

const iconPrefix = inject('SuiIconPrefix');
const iconLoader = inject('SuiIconLoader');
const emit = defineEmits(['click']);

defineProps({
    label: {
        type: [String, Boolean],
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    mini: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: [String, Boolean],
        default: false,
    },
    reversed: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        default: 'default',
    }
});
</script>

<style lang="scss" scoped>
.sui-button {
    flex-shrink: 0;
    background: rgba(var(--sui-colors-base-text), 0.07);
    color: rgb(var(--sui-colors-base-text));
    border-radius: 4px;
    padding: 0 10px;
    height: 40px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    position: relative;
    overflow: hidden;
    transition: 0.15s ease-in-out all;
    
    & .icon {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        
        &.loading {
            animation: sui-rotate 1.5s linear infinite;
        }
    }
    & .label {
        font-family: var(--sui-font-family);
        font-size: 1rem;
    }
    &.has-icon {
        & .label {
            margin-right: 5px;
        }
    }
    
    &[disabled] {
        opacity: 0.3;
        cursor: not-allowed;
    }
    &.reversed {
        flex-direction: row-reverse;
    }
    &.mini {
        height: 30px;
        padding: 0 7px;
        gap: 3px;
        
        & .icon {
            width: 20px;
            height: 20px;
            font-size: 15px;
        }
        & .label {
            font-size: 0.85rem;
        }
        &.has-icon {
            & .label {
                margin-right: 3px;
            }
        }
    }
    
    &.color-default {
        background: rgba(var(--sui-colors-base-text), 0.07);
        color: rgb(var(--sui-colors-base-text));
    }
    &.color-primary {
        background: rgba(var(--sui-colors-primary),0.2);
        color: rgb(var(--sui-colors-primary));
    }
    &.color-danger {
        background: rgba(var(--sui-colors-error),0.2);
        color: rgb(var(--sui-colors-error));
    }
    &.color-success {
        background: rgba(var(--sui-colors-success),0.2);
        color: rgb(var(--sui-colors-success));
    }
    &.color-inverse {
        background: rgba(var(--sui-colors-base-text),0.8);
        color: rgb(var(--sui-colors-base));
    }
    &.color-transparent {
        background: transparent;
        color: rgb(var(--sui-colors-base-text));
    }
    
    &:not([disabled]):hover {
        cursor: pointer;
        background: rgba(var(--sui-colors-base-text),0.14);
        
        &.color-default {
            background: rgba(var(--sui-colors-base-text),0.14);
        }
        &.color-primary {
            background: rgba(var(--sui-colors-primary),0.35);
        }
        &.color-danger {
            background: rgba(var(--sui-colors-error),0.35);
        }
        &.color-success {
            background: rgba(var(--sui-colors-success),0.35);
        }
        &.color-inverse {
            background: rgb(var(--sui-colors-base-text));
        }
        &.color-transparent {
            background: rgba(var(--sui-colors-base-text), 0.07);
            color: rgb(var(--sui-colors-base-text));
        }
    }

    &:not([disabled]):active {
        cursor: pointer;
        background: rgba(var(--sui-colors-base-text),0.21);

        &.color-default {
            background: rgba(var(--sui-colors-base-text),0.21);
        }
        &.color-primary {
            background: rgba(var(--sui-colors-primary),0.5);
        }
        &.color-danger {
            background: rgba(var(--sui-colors-error),0.5);
        }
        &.color-success {
            background: rgba(var(--sui-colors-success),0.5);
        }
        &.color-inverse {
            background: rgb(var(--sui-colors-base-text));
        }
        &.color-transparent {
            background: rgba(var(--sui-colors-base-text), 0.14);
            color: rgb(var(--sui-colors-base-text));
        }
    }
}
</style>