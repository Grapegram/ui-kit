import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
import { Button } from "@grapegram/ui-kit";
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'destructive', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    default: 'Button',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Button',
    disabled: false,
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'Button',
    disabled: false,
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    default: 'Button',
    disabled: false,
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Button',
    disabled: false,
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    default: 'Button',
    disabled: false,
  },
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
        </Button>
      </div>
    `,
  }),
}

export const AsChild: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'You can use the `as-child` prop to render a different element inside the button, like an anchor tag. This is useful for links that look like buttons. In that case the component with `as-child` will forward all props and styles to the child element and will not appear in the DOM.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <Button variant="link" as-child>
        <a href="#">I'm a link inside a button!</a>
      </Button>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    default: 'Disabled Button',
    disabled: true,
  },
}

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All button variants. Use Tab to navigate and see focus states.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); max-width: 600px;">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    `,
  }),
}
