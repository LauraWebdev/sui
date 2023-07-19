# SuiSelect

### Props
| Prop             | Default     | Explaination                                    |
|------------------|-------------|-------------------------------------------------|
| `options`        |             | An array of select items                        |
| `options.value`  | `undefined` | If defined, this item will have a value         |
| `options.icon`   | `undefined` | If defined, this item will have an icon         |
| `options.label`  | `undefined` | The label of this select item                   |
| `options.spacer` | `undefined` | If defined, this item will be a seperation line |
| `disabled`       | `false`     | Disables user interaction                       |

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
        { label: 'Option 1' },
        { label: 'Option 2' },
        { label: 'Option 3' },
    ]"
/>
```

## Values
<Example>
    <SuiSelectExampleValues />
</Example>

```vue
<SuiSelect
    v-model="selectedItem"
    :options="[
        { value: 'opt-1', label: 'Option 1' },
        { value: 'opt-2', label: 'Option 2' },
        { value: 'opt-3', label: 'Option 3' },
    ]"
/>
```

## Icons
<Example>
    <SuiSelectExampleIcons />
</Example>

```vue
<SuiSelect
    v-model="selectedItem"
    :options="[
        { icon: 'heading', label: 'Heading' },
        { icon: 'align-left', label: 'Text' },
        { icon: 'double-quotes-l', label: 'Quote' },
        { label: 'Option 1' },
        { label: 'Option 2' },
        { label: 'Option 3' },
    ]"
/>
```

## Spacer
<Example>
    <SuiSelectExampleSpacer />
</Example>

```vue
<SuiSelect
    v-model="selectedItem"
    :options="[
        { icon: 'heading', label: 'Heading' },
        { spacer: true },
        { icon: 'align-left', label: 'Text' },
        { icon: 'double-quotes-l', label: 'Quote' },
    ]"
/>
```

## Mini
<Example>
    <SuiSelectExampleMini />
</Example>

```vue
<SuiSelect
    v-model="selectedItem"
    mini
    :options="[
        { icon: 'heading', label: 'Heading' },
        { icon: 'align-left', label: 'Text' },
        { icon: 'double-quotes-l', label: 'Quote' },
        { spacer: true },
        { label: 'Option 1' },
        { label: 'Option 2' },
        { label: 'Option 3' },
    ]"
/>
```

## Disabled
<Example>
    <SuiSelect
        disabled
        :modelValue="0"
        :options="[{ label: 'Heading' }]"
    />
</Example>

```vue
<SuiSelect
    v-model="selectedItem"
    :options="[
        { label: 'Heading' },
        { label: 'Text' },
        { label: 'Quote' },
    ]"
    disabled
/>
```

<script setup>
import Example from './Example.vue';
import SuiSelectExample from "./SuiSelectExample.vue";
import SuiSelectExampleValues from "./SuiSelectExampleValues.vue";
import SuiSelectExampleIcons from "./SuiSelectExampleIcons.vue";
import SuiSelectExampleMini from "./SuiSelectExampleMini.vue";
import SuiSelectExampleSpacer from "./SuiSelectExampleSpacer.vue";
import {SuiSelect} from "../../src/components/index.js";
</script>