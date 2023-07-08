<template>
    <div
        v-bind="$attrs"
        ref="DOMDropdown"
        @focusout="closeDropdown"
        tabindex="0"
        class="sui sui-select"
        :class="`${disabled ? 'disabled' : ''}`"
    >
        <div @click="toggleDropdown" class="button">
            <span :class="`icon ${iconPrefix}${options[modelValue]?.icon}`" v-if="options[modelValue].icon"></span>
            <span class="value">{{ options[modelValue]?.label || 'Select' }}</span>
            <span :class="`icon ${showDropdown ? iconPrefix + iconArrowUp : iconPrefix + iconArrowDown }`"></span>
        </div>
        <transition name="sui-scale">
            <div v-show="showDropdown" class="options">
                <template
                    v-for="(option, i) in options"
                    :key="i"
                >
                    <div
                        v-if="option?.spacer ?? false"
                        class="spacer"
                    ></div>
                    <div
                        v-else
                        @click="selectOption(i)"
                        :class="`option ${modelValue === i ? 'selected' : ''}`"
                    >
                        <span :class="`icon ${iconPrefix}${option.icon}`" v-if="option.icon"></span>
                        <span class="label">{{ option.label }}</span>
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script setup>
import {inject, ref} from 'vue';

const iconPrefix = inject('SuiIconPrefix');
const iconArrowUp = inject('SuiIconArrowUp');
const iconArrowDown = inject('SuiIconArrowDown');

const props = defineProps({
    modelValue: [Number, String],
    options: {
        type: Array,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const DOMDropdown = ref(null);
const showDropdown = ref(false);
const selectedIndex = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

const toggleDropdown = () => {
    if(props.disabled) return;
    showDropdown.value = !showDropdown.value;
};

const selectOption = (value) => {
    if(props.disabled) return;
    selectedIndex.value = value;
    emit('update:modelValue', value);
    showDropdown.value = false;
};

const closeDropdown = () => {
    showDropdown.value = false;
};
</script>

<style lang="scss" scoped>
.sui-select {
    position: relative;
    transition: 0.15s ease-in-out all;
    
    & .button {
        cursor: pointer;
        background: rgba(var(--sui-colors-base-text), 0.07);
        color: rgba(var(--sui-colors-base-text), 0.6);
        border-radius: 4px;
        padding: 0 15px;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 6px;
        position: relative;
        overflow: hidden;
        transition: 0.15s ease-in-out all;
        
        & .value {
            flex-grow: 1;
            font-family: var(--sui-font-family);
            font-size: 1rem;
        }
        
        & .icon {
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            color: rgba(var(--sui-colors-base-text), 1);

            &.loading {
                animation: sui-rotate 1.5s linear infinite;
            }
        }
    }
    & .options {
        position: absolute;
        min-width: 100%;
        background: rgb(var(--sui-colors-base-2));
        color: rgb(var(--sui-colors-base-text));
        z-index: 50;
        border-radius: 4px;
        overflow: hidden;

        & .spacer {
            height: 2px;
            background: rgba(var(--sui-colors-base-text), 0.14);
            margin: 5px 10px;
            border-radius: 10px;
        }
        & .option {
            cursor: pointer;
            display: flex;
            gap: 10px;
            align-items: center;
            color: rgb(var(--sui-colors-base-text));
            transition: 0.15s ease-in-out all;
            padding: 0 15px;
            height: 40px;
            
            & .icon {
                width: 24px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
            & .label {
                font-family: var(--sui-font-family);
                color: rgba(var(--sui-colors-base-text), 0.6);
                font-size: 1rem;
                flex-grow: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            &.selected {
                background: rgb(var(--sui-colors-base-3));
            }
            &:hover {
                background: rgb(var(--sui-colors-base-3));
            }
        }
    }

    &.disabled {
        opacity: 0.3;
        
        & .button {
            cursor: not-allowed;
        }
    }
    &:not(.disabled) {
        & .button {
            &:hover {
                cursor: pointer;
                background: rgba(var(--sui-colors-base-text),0.14);
            }
        }
    }
}
</style>
