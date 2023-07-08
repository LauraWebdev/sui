<template>
    <span
        class="sui sui-badge"
        :class="`color-${color} ${mini ? 'mini' : ''} ${rounded ? 'rounded' : ''}`"
    >
        {{ text }}
    </span>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'default',
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    mini: {
        type: Boolean,
        default: false,
    }
});
</script>

<style lang="scss" scoped>
.sui-badge {
    display: inline-block;
    font-size: 0.9rem;
    padding: 5px 10px;
    border-radius: 3px;
    line-height: 1rem;

    &.color-default {
        background: rgba(var(--sui-colors-base-text), 0.07);
        color: rgb(var(--sui-colors-base-text));
    }
    &.color-primary {
        background: rgba(var(--sui-colors-primary),1);
        color: rgb(var(--sui-colors-base));
    }
    &.color-danger {
        background: rgba(var(--sui-colors-error),1);
        color: rgb(var(--sui-colors-base));
    }
    &.color-success {
        background: rgba(var(--sui-colors-success),1);
        color: rgb(var(--sui-colors-base));
    }
    &.color-inverse {
        background: rgba(var(--sui-colors-base-text),1);
        color: rgb(var(--sui-colors-base));
    }
    &.color-transparent {
        background: transparent;
        color: rgb(var(--sui-colors-base-text));
    }

    &.mini {
        font-size: 0.7rem;
        padding: 3px 7px;
    }
    &.rounded {
        border-radius: 50px;
        padding: 5px 15px;

        &.mini {
            padding: 3px 12px;
        }
    }
}
</style>