# SuiSwitch

### Props
| Prop       | Default | Explaination              |
|------------|---------|---------------------------|
| `disabled` | `false` | Disables user interaction |

:::info
This component interfaces via `v-model`
:::

## Default
<Example>
    <SuiSwitchExample />
</Example>

```vue
<SuiSwitch
    v-model="value"
/>
```

## Disabled
<Example>
    <div style="display: flex; justify-content: center; gap: 10px;">
        <SuiSwitch disabled :modelValue="true" />
        <SuiSwitch disabled />
    </div>
</Example>

```vue
<SuiSwitch
    disabled
    v-model="value"
/>
```

<script setup>
import Example from './Example.vue';
import SuiSwitchExample from "./SuiSwitchExample.vue";
import { SuiSwitch } from "../../src/components/index.js";
</script>