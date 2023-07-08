<template>
    <div style="display: flex; gap: 20px; align-items: center">
        <SuiSwitch v-model="value" />
        <span>{{ value }}</span>
    </div>
</template>

<script setup>
import { SuiSwitch } from "../../src/components/index.js";
import {ref} from "vue";

const value = ref(false);
</script>