# SuiSelect

### Props
| Prop            | Default     | Explaination                  |
|-----------------|-------------|-------------------------------|
| `options`       |             | An array of select items      |
| `options.value` | `undefined` | The value of this select item |
| `options.icon`  | `undefined` | The icon of this select item  |
| `options.label` | `undefined` | The label of this select item |
| `disabled`      | `false`     | Disables user interaction     |

### Slots
| Slot      | Explaination                                 |
|-----------|----------------------------------------------|
| `default` | Actions that are displayed on the right side |

:::info
This component interfaces via `v-model`
:::

## Default
<Example>
    <SuiSelectExample />
</Example>

```vue
<SuiSelect
    v-model="selectedItem"
    :options="[
        { value: 0, icon: 'heading', label: 'Heading' },
        { value: 1, icon: 'align-left', label: 'Text' },
        { value: 2, icon: 'double-quotes-l', label: 'Quote' },
    ]"
/>
```

## Disabled
<Example>
    <SuiSelect
        disabled
        :modelValue="0"
        :options="[{ value: 0, icon: 'heading', label: 'Heading' }]"
    />
</Example>

```vue
<SuiSelect
    v-model="selectedItem"
    :options="[
        { value: 0, icon: 'heading', label: 'Heading' },
        { value: 1, icon: 'align-left', label: 'Text' },
        { value: 2, icon: 'double-quotes-l', label: 'Quote' },
    ]"
    disabled
/>
```

<script setup>
import Example from './Example.vue';
import SuiSelectExample from "./SuiSelectExample.vue";
import {SuiSelect} from "../../src/components/index.js";
</script>