# SuiBadge

lorem ipsum dolor sit amet.

## Default
<Example>
    <SuiBadge text="Hello World" />
</Example>

```vue
<SuiBadge text="Hello World" />
```

## Mini
<Example>
    <SuiBadge mini text="Hello World" />
</Example>

```vue
<SuiBadge mini text="Hello World" />
```

## Rounded
<Example>
    <SuiBadge rounded text="Hello World" />
</Example>

```vue
<SuiBadge rounded text="Hello World" />
```

## Colors
<Example>
    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap">
        <SuiBadge
            v-for="color in ['default', 'inverse', 'primary', 'danger', 'success', 'transparent']"
            :color="color"
            :text="color"
        />
    </div>
</Example>

```vue
<SuiBadge color="default" text="Hello World" />
<SuiBadge color="inverse" text="Hello World" />
<SuiBadge color="primary" text="Hello World" />
<SuiBadge color="danger" text="Hello World" />
<SuiBadge color="success" text="Hello World" />
<SuiBadge color="transparent" text="Hello World" />
```

<script setup>
import Example from './Example.vue';
import {SuiBadge} from "../../src/components/index.js";
</script>