import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
\`\`\`tsx
//src/components/Component.tsx
import { Input } from "@grapegram/ui-kit";
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The value of the input (v-model)',
    },
    defaultValue: {
      control: 'text',
      description: 'Default value for the input',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the input is in an invalid state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const WithValue: Story = {
  name: 'With Value (Uncontrolled component)',
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Input component with a preset value. You can change the value as needed.',
      },
    },
  },
  args: {
    modelValue: 'example@email.com',
    placeholder: 'Enter your email',
    invalid: false,
  },
}

export const Invalid: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Invalid state shows red border and uses destructive color scheme. Use this for form validation errors.',
      },
    },
  },
  args: {
    placeholder: 'Enter your email',
    invalid: true,
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled state makes the input non-interactive and applies a muted style.',
      },
    },
  },
  args: {
    placeholder: 'Enter your email',
    disabled: true,
  },
}

export const VModel: Story = {
  name: 'V Model (Controlled component)',
  parameters: {
    docs: {
      description: {
        story:
          'Example of using v-model with the Input component. Type in the input to see the value update in real-time.',
      },
    },
  },
  render: () => ({
    components: { Input },
    setup() {
      const inputValue = ref('')
      return { inputValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; min-width: 300px;">
        <Input v-model="inputValue" />
        <p style="font-size: 14px; color: var(--color-muted-foreground);">
          Current value: <strong class="text-accent">{{ inputValue || '(empty)' }}</strong>
        </p>
      </div>
    `,
  }),
}

export const States: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All input states: `default`, `focused (click to focus)`, `invalid`, and `disabled`.',
      },
    },
  },
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; min-width: 300px;">
        <div>
          <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500;">Default</label>
          <Input defaultValue="Default input" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500;">Invalid</label>
          <Input defaultValue="invalid@email" :invalid="true" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500;">Disabled</label>
          <Input defaultValue="Disabled input" :disabled="true" />
        </div>
      </div>
    `,
  }),
}
