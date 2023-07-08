<template>
    <div
        v-bind="$attrs"
        @click="emit('click')"
        class="sui sui-tab-item"
        :class="{'active': active}"
    >
        <slot />
    </div>
</template>

<script setup>
const emit = defineEmits(['click']);
defineProps({
    active: {
        type: Boolean,
        default: false,
    }
});
</script>

<style lang="scss" scoped>
.sui-tab-item {
    padding: 15px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: rgba(var(--sui-colors-base-text),0.6);
    transition: 0.15s ease-in-out background, 0.15s ease-in-out color;
    overflow: hidden;
    
    &:hover {
        background: rgba(var(--sui-colors-base-text), 0.07);
        cursor: pointer;
    }
    &::after {
        content: "";
        display: block;
        width: 50%;
        min-width: 50px;
        height: 3px;
        background: transparent;
        border-radius: 50px;
        transition: 0.15s ease-in-out transform;
        transform: translateY(4px);
    }
    &.active {
        color: rgba(var(--sui-colors-base-text),1);

        &::after {
            background: rgb(var(--sui-colors-primary));
            transform: translateY(0);
        }
    }
}
</style>
