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
            <span :class="`icon ${iconPrefix}${options.find(x => x.value === modelValue)?.icon}`"></span>
            <span class="value">{{ options.find(x => x.value === modelValue)?.label || 'Select' }}</span>
            <span :class="`icon ${showDropdown ? iconPrefix + iconArrowUp : iconPrefix + iconArrowDown }`"></span>
        </div>
        <transition name="sui-scale">
            <div v-show="showDropdown" class="options">
                <div
                    v-for="option in options"
                    :key="option.value"
                    @click="selectOption(option.value)"
                    :class="`option ${modelValue === option.value ? 'selected' : ''}`"
                >
                    <span :class="`icon ${iconPrefix}${option.icon}`"></span>
                    <span class="label">{{ option.label }}</span>
                </div>
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
    modelValue: String,
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
const selectedValue = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

const toggleDropdown = () => {
    if(props.disabled) return;
    showDropdown.value = !showDropdown.value;
};

const selectOption = (value) => {
    if(props.disabled) return;
    selectedValue.value = value;
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
    min-width: 175px;
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
        width: 100%;
        background: rgb(var(--sui-colors-base-2));
        color: rgb(var(--sui-colors-base-text));
        z-index: 50;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        overflow: hidden;

        & .option {
            cursor: pointer;
            display: grid;
            grid-template-columns: 24px auto;
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
