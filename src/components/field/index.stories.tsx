import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '.'
import Input from '../input/Input.vue'

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Do not forget to import styles of UI-kit first:
\`\`\`tsx
//src/main.ts
import "@grapegram/ui-kit/styles";

//or directly in your main css entry file

//src/style.css
@import "@grapegram/ui-kit/styles";
\`\`\`

Then you can import and use component in your file:

\`\`\`tsx
//src/components/Component.tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle
} from "@grapegram/ui-kit";
\`\`\`

The Field family is designed for composing accessible forms. Use it to combine labels, controls, and help text.

Check the full documentation and more use-cases in shadcn-vue site [here](https://www.shadcn-vue.com/docs/components/field).
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Basic field with label, input, and description. This is the most common use case for forms.',
      },
    },
  },
  render: () => ({
    components: { Field, FieldLabel, FieldDescription, Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="w-[350px]">
        <Field>
          <FieldLabel for="name">Full name</FieldLabel>
          <Input id="name" v-model="value" placeholder="Andrej" />
          <FieldDescription>This appears on invoices and emails.</FieldDescription>
        </Field>
      </div>
    `,
  }),
}

export const InErrorState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Field with validation error. Use data-invalid attribute on Field and aria-invalid on input for proper accessibility.',
      },
    },
  },
  args: {
    invalid: true,
  },
  render: (args) => ({
    components: { Field, FieldLabel, FieldError, Input },
    setup() {
      const value = ref('user')
      return { value, args }
    },
    template: `
      <div class="w-[350px]">
        <Field :invalid="args.invalid">
          <FieldLabel for="username">Username</FieldLabel>
          <Input id="username" v-model="value" :invalid="args.invalid" />
          <FieldError>This username is already taken. Choose another one.</FieldError>
        </Field>
      </div>
    `,
  }),
}

export const InDisabledState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Field in disabled state. All child elements inherit the disabled styling through group data attributes.',
      },
    },
  },
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Field, FieldLabel, FieldDescription, Input },
    setup() {
      const value = ref('user')
      return { value, args }
    },
    template: `
      <div class="w-[350px]">
        <Field :disabled="args.disabled">
          <FieldLabel for="username">Username</FieldLabel>
          <Input id="username" v-model="value" :disabled="args.disabled" />
          <FieldDescription>This appears on invoices and emails.</FieldDescription>
        </Field>
      </div>
    `,
  }),
}

export const Horizontal: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Field with horizontal orientation. Label and control are aligned side-by-side.',
      },
    },
  },
  render: () => ({
    components: { Field, FieldLabel, FieldDescription, Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="w-[500px]">
        <Field orientation="horizontal">
          <FieldLabel for="email">Email address</FieldLabel>
          <Input id="email" v-model="value" type="email" placeholder="you@example.com" />
        </Field>
      </div>
    `,
  }),
}

export const HorizontalWithContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Horizontal field with `FieldContent` to group description alongside the input for better alignment.',
      },
    },
  },
  render: () => ({
    components: { Field, FieldLabel, FieldContent, FieldDescription, Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="w-[600px]">
        <Field orientation="horizontal">
          <FieldLabel for="bio">Biography</FieldLabel>
          <FieldContent>
            <Input id="bio" v-model="value" placeholder="Tell us about yourself" />
            <FieldDescription>
              A short description that will appear on your profile.
            </FieldDescription>
          </FieldContent>
        </Field>
      </div>
    `,
  }),
}

export const MultipleErrors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Field with multiple validation errors. `FieldError` automatically renders errors as a list when array contains multiple messages.',
      },
    },
  },
  render: () => ({
    components: { Field, FieldLabel, FieldError, Input },
    setup() {
      const value = ref('pass')
      const errors = ref([
        { message: 'Password must be at least 8 characters long.' },
        { message: 'Password must contain at least one number.' },
        { message: 'Password must contain at least one uppercase letter.' },
      ])
      return { value, errors }
    },
    template: `
      <div class="w-[400px]">
        <Field invalid>
          <FieldLabel for="password">Password</FieldLabel>
          <Input id="password" v-model="value" type="password" invalid />
          <FieldError :errors="errors" />
        </Field>
      </div>
    `,
  }),
}

export const WithSeparatorAndFieldset: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Fields separated with `FieldSeparator` to create visual sections within a form.',
      },
    },
  },
  render: () => ({
    components: {
      FieldGroup,
      Field,
      FieldLabel,
      FieldDescription,
      FieldSeparator,
      Input,
    },
    setup() {
      const email = ref('')
      const username = ref('')
      return { email, username }
    },
    template: `
      <div class="w-[400px]">
        <FieldGroup class="flex flex-col gap-6">
          <Field>
            <FieldLabel for="emailField">Email</FieldLabel>
            <Input id="emailField" v-model="email" type="email" placeholder="you@example.com" />
            <FieldDescription>We'll never share your email with anyone.</FieldDescription>
          </Field>

          <FieldSeparator>Or</FieldSeparator>

          <Field>
            <FieldLabel for="usernameField">Username</FieldLabel>
            <Input id="usernameField" v-model="username" placeholder="golem" />
            <FieldDescription>Choose a unique username.</FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    `,
  }),
}
