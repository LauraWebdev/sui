# SuiTabBar

### Props
| Prop       | Default | Explaination                     |
|------------|---------|----------------------------------|
| `selected` | `0`     | The index of the active tab      |
| `tabs`     | `[]`    | An array of strings for the tabs |

### Events
| Event    | Explaination                                                                                |
|----------|---------------------------------------------------------------------------------------------|
| `change` | Fires when the selected tabitem was changed. Includes the index of the now selected tabitem |

## Default
<Example>
    <SuiTabBar
        :tabs="['Home', 'Blog', 'Projects']"
    />
</Example>

```vue
<SuiTabBar
    :tabs="['Home', 'Blog', 'Projects']"
    @change="handleTabChange"
/>
```

<script setup>
import Example from './Example.vue';
import {SuiTabBar} from "../../src/components/index.js";
</script>