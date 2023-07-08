# SuiTabItem

### Props
| Prop     | Default   | Explaination                  |
|----------|-----------|-------------------------------|
| `active` | `false`   | Whether the tabitem is active |

### Events
| Event   | Explaination                       |
|---------|------------------------------------|
| `click` | Fires when the tabitem was clicked |

## Default
<Example>
    <SuiTabItem>
        Tab Item
    </SuiTabItem>
</Example>

```vue
<SuiTabItem>Tab Item</SuiTabItem>
```

## Active
<Example>
    <SuiTabItem active>
        Tab Item
    </SuiTabItem>
</Example>

```vue
<SuiTabItem active>Tab Item</SuiTabItem>
```

<script setup>
import Example from './Example.vue';
import {SuiTabItem} from "../../src/components/index.js";
</script>