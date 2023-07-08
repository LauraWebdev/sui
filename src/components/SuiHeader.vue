<template>
    <header
        v-bind="$attrs"
        :class="`sui sui-header ${mini ? 'mini' : ''}`"
    >
        <h1 v-if="label">{{ label }}</h1>
        <div class="actions">
            <slot />
        </div>
    </header>
</template>

<script setup>
defineProps({
    label: {
        type: [String, Boolean],
        default: false,
    },
    mini: {
        type: Boolean,
        default: false,
    }
});
</script>

<style lang="scss" scoped>
.sui-header {
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
    
    & h1 {
        font-size: 1.5rem;
        font-weight: 700;
        flex-grow: 1;
        color: rgb(var(--sui-colors-base-text));
    }
    & .actions {
        display: flex;
        gap: 5px;
    }
    
    &.mini {
        & h1 {
            font-size: 1.15rem;
        }
    }
}
</style>
