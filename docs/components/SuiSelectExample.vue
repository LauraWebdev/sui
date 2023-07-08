<template>
    <div style="display: flex; gap: 20px; align-items: center">
        <SuiSelect
            style="width: 200px"
            v-model="selectedItemIndex"
            :options="options"
        />
        <span>{{ options[selectedItemIndex].label }}</span>
    </div>
</template>
<script setup>
import {SuiSelect} from "../../src/components/index.js";
import {ref} from "vue";

const selectedItemIndex = ref(0);
const options = ref([
    { value: 0, icon: 'heading', label: 'Heading' },
    { value: 1, icon: 'align-left', label: 'Text' },
    { value: 2, icon: 'double-quotes-l', label: 'Quote' },
]);
</script>