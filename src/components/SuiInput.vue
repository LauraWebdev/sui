<template>
    <div
        v-bind="$attrs"
        class="sui sui-input"
        :class="`${horizontal ? 'horizontal' : ''} ${actions ? 'actions' : ''}`"
    >
        <div class="text">
            <div class="label" v-if="label">{{ label }}</div>
            <div class="hint" v-if="hint">{{ hint }}</div>
        </div>
        <div class="input">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: [String, Boolean],
        default: false,
    },
    hint: {
        type: [String, Boolean],
        default: false,
    },
    horizontal: {
        type: Boolean,
        default: false,
    },
    actions: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss">
.sui-input {
    display: grid;
    gap: 10px;
    width: 100%;

    &.horizontal {
        grid-template-columns: 1fr 2fr;
        gap: 50px;
        align-items: center;
    }

    &:not(.horizontal) {
        & .text {
            & .hint {
                margin-bottom: 5px;
            }
        }
    }

    & .text {
        display: flex;
        flex-direction: column;
        
        & .label {
            font-size: 0.9rem;
        }
        & .hint {
            color: rgba(var(--sui-colors-base-text),0.4);
            line-height: 1.25rem;
        }
    }
    & .input {
        display: flex;
        align-items: center;
        gap: 10px;

        & input[type=text], & input[type=url], & input[type=password], & input[type=number] {
            width: 100%;
            border: 1px solid rgba(var(--sui-colors-base-text), 0.14);
            background: rgba(var(--sui-colors-base-text), 0.07);
            color: rgb(var(--sui-colors-base-text));
            font-family: var(--sui-font-family);
            font-size: 1rem;
            border-radius: 4px;
            padding: 0 15px;
            height: 40px;
            transition: 0.15s ease-in-out all;
            outline-color: rgb(var(--sui-colors-primary));

            &:disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }
            &:not(:disabled):hover {
                background: rgba(var(--sui-colors-base-text), 0.14);
            }
            &:focus {
                outline: 1px solid rgb(var(--sui-colors-primary));
                border-color: rgb(var(--sui-colors-primary));
            }
        }
        & .select {
            position: relative;
            cursor: pointer;
            
            & select {
                width: 100%;
                appearance: none;
                background: rgba(var(--sui-colors-base-text), 0.07);
                border: 0;
                color: rgb(var(--sui-colors-base-text));
                font-family: var(--sui-font-family);
                font-size: 1rem;
                border-radius: 4px;
                padding: 0 15px;
                height: 40px;
                margin-right: 25px;

                & option {
                    background: rgb(var(--sui-colors-base));
                    color: rgb(var(--sui-colors-base-text));
                }
            }

            & .icon {
                pointer-events: none;
                position: absolute;
                right: 10px;
                top: 9px;
                font-size: 22px;
            }
        }
    }
    &:not(.actions) {
        & .input {
            & > *:nth-child(1) {
                flex-grow: 1;
            }
        }
    }
    &.actions {
        & .input {
            justify-content: flex-end;
        }
    }
}
</style>