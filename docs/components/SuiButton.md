# SuiButton

### Props
| Prop       | Default   | Explaination                                                                                 |
|------------|-----------|----------------------------------------------------------------------------------------------|
| `label`    | `false`   | The text of the button                                                                       |
| `icon`     | `false`   | The icon of the button                                                                       |
| `color`    | `default` | The color of the button (`default`, `primary`, `danger`, `success`, `bright`, `transparent`) |
| `mini`     | `false`   | Displays the button smaller                                                                  |
| `loading`  | `false`   | Hides the icon if set and displays an animated loading icon                                  |
| `reversed` | `false`   | Swaps position of label and icon                                                             |
| `disabled` | `false`   | Disables user interaction                                                                    |

### Events
| Event   | Explaination                      |
|---------|-----------------------------------|
| `click` | Fires when the button was clicked |

## Default
<Example>
    <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center">
        <SuiButton
            icon="settings-line"
        />
        <SuiButton
            label="Hello World"
        />
        <SuiButton
            icon="settings-line"
            label="Hello World"
        />
    </div>
</Example>

```vue
<SuiButton
    icon="settings-line"
    @click="handleClick"
/>
```

```vue
<SuiButton
    label="Login"
    @click="handleClick"
/>
```

```vue
<SuiButton
    icon="settings-line"
    label="Login"
    @click="handleClick"
/>
```

## Mini
<Example>
    <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center">
        <SuiButton
            mini
            icon="settings-line"
        />
        <SuiButton
            mini
            label="Hello World"
        />
        <SuiButton
            mini
            icon="settings-line"
            label="Hello World"
        />
    </div>
</Example>

```vue
<SuiButton
    mini
    icon="settings-line"
    @click="handleClick"
/>
```
```vue
<SuiButton
    mini
    label="Hello World"
    @click="handleClick"
/>
```
```vue
<SuiButton
    mini
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

## Disabled
<Example>
    <div style="display: flex; gap: 10px;">
        <SuiButton
            disabled
            icon="settings-line"
            label="Hello World"
        />
        <SuiButton
            icon="settings-line"
            label="Hello World"
        />
    </div>
</Example>

```vue
<SuiButton
    disabled
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

## Loading
<Example>
    <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center">
        <SuiButton
            loading
            icon="settings-line"
        />
        <SuiButton
            loading
            label="Hello World"
        />
        <SuiButton
            loading
            icon="settings-line"
            label="Hello World"
        />
    </div>
</Example>

```vue
<SuiButton
    loading
    icon="settings-line"
    @click="handleClick"
/>
```
```vue
<SuiButton
    loading
    label="Hello World"
    @click="handleClick"
/>
```
```vue
<SuiButton
    loading
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

## Reversed
<Example>
        <SuiButton
            reversed
            icon="settings-line"
            label="Hello World"
        />
</Example>

```vue
<SuiButton
    reversed
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

## Colors
<Example>
    <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center">
        <SuiButton
            v-for="color in ['default', 'inverse', 'primary', 'danger', 'success', 'transparent']"
            :color="color"
            icon="settings-line"
            :label="color"
        />
    </div>
</Example>

```vue
<SuiButton
    color="default"
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

```vue
<SuiButton
    color="inverse"
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

```vue
<SuiButton
    color="primary"
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

```vue
<SuiButton
    color="danger"
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

```vue
<SuiButton
    color="success"
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

```vue
<SuiButton
    color="transparent"
    icon="settings-line"
    label="Hello World"
    @click="handleClick"
/>
```

## Badge
<Example>
    <div style="display: flex; gap: 10px;">
        <SuiButton
            color="transparent"
            badge
            icon="loop-right-line"
        />
        <SuiButton
            color="transparent"
            badge="99"
            icon="loop-right-line"
        />
        <SuiButton
            color="transparent"
            mini
            badge
            icon="loop-right-line"
        />
        <SuiButton
            color="transparent"
            mini
            badge="99"
            icon="loop-right-line"
        />
    </div>
</Example>

```vue
<SuiButton
    badge
    icon="loop-right-line"
    @click="handleClick"
/>
```

```vue
<SuiButton
    badge="99"
    icon="loop-right-line"
    @click="handleClick"
/>
```

<script setup>
import Example from './Example.vue';
import {SuiButton} from "../../src/components/index.js";
</script>