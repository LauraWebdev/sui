<template>
    <div
        v-bind="$attrs"
        class="sui sui-tab-bar"
    >
        <SuiTabItem
            v-for="(item, i) in tabs"
            :key="i"
            :active="i === activeTab"
            @click="handleTabChange(i)"
        >
            {{ item }}
        </SuiTabItem>
    </div>
</template>

<script setup>
import {ref, watch} from 'vue';

const emit = defineEmits(['change']);
const props = defineProps({
    selected: {
        type: Number,
        default: 0,
    },
    tabs: {
        type: Array,
        default: () => [],
    }
});

const activeTab = ref(props.selected);

const handleTabChange = (i) => {
    activeTab.value = i;
    emit('change', i);
}

watch(() => props.selected, (oldSelected, newSelected) => {
    activeTab.value = newSelected;
});
</script>

<style lang="scss" scoped>
.sui-tab-bar {
    display: flex;
    border-bottom: 1px solid rgba(var(--sui-colors-base-text),0.07);
    padding: 0 25px;
    gap: 10px;
}
</style>
