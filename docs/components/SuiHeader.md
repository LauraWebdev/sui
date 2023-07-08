# SuiHeader

### Props
| Prop    | Default   | Explaination            |
|---------|-----------|-------------------------|
| `label` | `false`   | The text of the header  |
| `mini`  | `false`   | Shows the label smaller |

### Slots
| Slot      | Explaination                                 |
|-----------|----------------------------------------------|
| `default` | Actions that are displayed on the right side |

## Default
<Example>
    <SuiHeader
        style="width: 90%"
        label="Settings"
    />
</Example>

```vue
<SuiHeader
    label="Settings"
/>
```

## Mini
<Example>
    <SuiHeader
        style="width: 90%"
        label="Settings"
        mini
    />
</Example>

```vue
<SuiHeader
    label="Settings"
    mini
/>
```

## Actions
<Example>
    <SuiHeader
        style="width: 90%"
        label="Settings"
    >
        <SuiButton
            icon="settings-line"
        />
    </SuiHeader>
</Example>

```vue
<SuiHeader
    label="Settings"
>
    <SuiButton
        icon="settings-line"
        @click="handleClick"
    />
</SuiHeader>
```

<script setup>
import Example from './Example.vue';
import {SuiHeader, SuiButton} from "../../src/components/index.js";
</script>