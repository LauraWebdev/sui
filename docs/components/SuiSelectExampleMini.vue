<template>
    <div style="display: flex; gap: 20px; align-items: center;">
        <SuiSelect
            v-model="selectedItemIndex"
            :options="options"
            mini
        />
        <span>{{ options[selectedItemIndex]?.label }}</span>
    </div>
</template>
<script setup>
import {SuiSelect} from "../../src/components/index.js";
import {ref} from "vue";
import SuiInput from "../../src/components/SuiInput.vue";

const selectedItemIndex = ref(0);
const options = ref([
    { icon: 'heading', label: 'Heading' },
    { icon: 'align-left', label: 'Text' },
    { icon: 'double-quotes-l', label: 'Quote' },
    { spacer: true },
    { value: 0, label: 'Option 1' },
    { value: 1, label: 'Option 2' },
    { value: 2, label: 'Option 3' },
]);
</script>