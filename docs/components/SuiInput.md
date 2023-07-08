# SuiInput

### Props
| Prop         | Default | Explaination                                         |
|--------------|---------|------------------------------------------------------|
| `label`      | `false` | The label of this input                              |
| `hint`       | `false` | Additional explaination of this input                |
| `horizontal` | `false` | Layout the input horizontally rather than vertically |
| `actions`    | `false` | Layout the slot items to the right                   |

### Slots
| Slot      | Explaination                                                                               |
|-----------|--------------------------------------------------------------------------------------------|
| `default` | Inputs, buttons and labels of this input. The first item tries to be as long as it can be. |

## Default
<Example>
    <SuiInput
        style="max-width: 400px; width: 100%;"
        label="First Name"
    >
        <input type="text" />
    </SuiInput>
</Example>

```vue
<SuiInput
    label="First Name"
>
    <input type="text" />
</SuiInput>
```

## Hint
<Example>
    <SuiInput
        style="max-width: 400px; width: 100%;"
        label="Website"
        hint="Must include the protocol"
    >
        <input type="text" />
    </SuiInput>
</Example>

```vue
<SuiInput
    label="Website"
    hint="Must include the protocol"
>
    <input type="url" />
</SuiInput>
```

## Actions
<Example>
    <SuiInput
        style="max-width: 400px; width: 100%;"
        actions
    >
        <SuiButton
            icon="save-line"
            color="primary"
            label="Save"
        />
    </SuiInput>
</Example>

```vue
<SuiInput
    actions
>
    <SuiButton
        icon="save-line"
        color="primary"
        label="Save"
    />
</SuiInput>
```

## Horizontal
<Example>
    <div
        style="max-width: 500px; width: 100%; display: flex; gap: 15px; flex-direction: column;"
    >
        <SuiInput
            horizontal
            label="First Name"
        >
            <input type="text" />
        </SuiInput>
        <SuiInput
            horizontal
            label="Last Name"
        >
            <input type="text" />
        </SuiInput>
    </div>
</Example>

```vue
<SuiInput
    label="First Name"
    horizontal
>
    <input type="text" />
</SuiInput>
```

## Slots
<Example>
    <div
        style="max-width: 500px; width: 100%; display: flex; gap: 15px; flex-direction: column;"
    >
        <SuiInput
            label="First Name"
            horizontal
        >
            <input type="text" />
        </SuiInput>
        <SuiInput
            label="Last Name"
            horizontal
        >
            <input type="text" />
        </SuiInput>
        <SuiInput
            label="Address"
            horizontal
        >
            <input type="text" />
        </SuiInput>
        <SuiInput
            label="ZIP & City"
            horizontal
        >
            <input type="number" />
            <input type="text" />
        </SuiInput>
        <SuiInput
            horizontal
            actions
        >
            <SuiButton
                icon="save-line"
                color="primary"
                label="Save"
            />
        </SuiInput>
    </div>
</Example>

```vue
<SuiInput
    label="First Name"
    horizontal
>
    <input type="text" />
</SuiInput>
<SuiInput
    label="Last Name"
    horizontal
>
    <input type="text" />
</SuiInput>
<SuiInput
    label="Address"
    horizontal
>
    <input type="text" />
</SuiInput>
<SuiInput
    label="ZIP & City"
    horizontal
>
    <input type="number" />
    <input type="text" />
</SuiInput>
<SuiInput
    horizontal
    actions
>
    <SuiButton
        icon="save-line"
        color="primary"
        label="Save"
    />
</SuiInput>
```

<script setup>
import Example from './Example.vue';
import {SuiInput} from "../../src/components/index.js";
</script>