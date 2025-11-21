import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Separator from './Separator.vue'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
\`\`\`tsx
//src/components/Component.tsx
import { Separator } from "@grapegram/ui-kit";
\`\`\`

A separator visually divides content. It can be horizontal or vertical and is purely decorative by default.
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is purely decorative (not accessible)',
    },
    withLabel: {
      control: 'boolean',
      description: 'Whether to show a label in the center of the separator',
    },
  },
  args: {
    orientation: 'horizontal',
    decorative: true,
    withLabel: false,
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Separator },
    setup() {
      return { args }
    },
    template: `
      <div class="w-[300px]">
        <div class="space-y-1">
          <h4 class="text-sm font-medium">Grapegram</h4>
          <p class="text-sm text-muted-foreground">Modern social media platform.</p>
        </div>
        <Separator v-bind="args" class="my-4" />
        <div class="space-y-1">
          <h4 class="text-sm font-medium">Features</h4>
          <p class="text-sm text-muted-foreground">Using modern web technologies.</p>
        </div>
      </div>
    `,
  }),
}

export const Horizontal: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Horizontal separator is the default orientation and spans the full width of its container.',
      },
    },
  },
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-[400px] space-y-4">
        <div class="text-sm">
          <p class="font-medium">Introduction</p>
          <p class="text-muted-foreground">This is the first section of content.</p>
        </div>

        <Separator orientation="horizontal" />

        <div class="text-sm">
          <p class="font-medium">Features</p>
          <p class="text-muted-foreground">This is the second section of content.</p>
        </div>

        <Separator orientation="horizontal" />

        <div class="text-sm">
          <p class="font-medium">Conclusion</p>
          <p class="text-muted-foreground">This is the third section of content.</p>
        </div>
      </div>
    `,
  }),
}

export const CustomSpacing: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Control the spacing around separators using margin utilities.',
      },
    },
  },
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-[350px] space-y-6">
        <div>
          <p class="text-sm font-medium">Small spacing (my-2)</p>
          <Separator class="my-2" />
          <p class="text-sm text-muted-foreground">Content after separator</p>
        </div>

        <div>
          <p class="text-sm font-medium">Default spacing (my-4)</p>
          <Separator class="my-4" />
          <p class="text-sm text-muted-foreground">Content after separator</p>
        </div>

        <div>
          <p class="text-sm font-medium">Large spacing (my-6)</p>
          <Separator class="my-6" />
          <p class="text-sm text-muted-foreground">Content after separator</p>
        </div>
      </div>
    `,
  }),
}

export const CustomColor: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Override the default border color using Tailwind background utilities.',
      },
    },
  },
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-[350px] space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">Default (bg-border)</p>
          <Separator />
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Accent color</p>
          <Separator class="bg-accent" />
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Destructive color</p>
          <Separator class="bg-destructive" />
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Muted color</p>
          <Separator class="bg-muted" />
        </div>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Separator can display a label in the center, useful for section dividers or form groups.',
      },
    },
  },
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-[450px] space-y-8">
        <div>
          <div class="text-sm">
            <p class="font-medium">Previous Section</p>
            <p class="text-muted-foreground">Content from the previous section.</p>
          </div>

          <Separator with-label class="my-6">
            OR
          </Separator>

          <div class="text-sm">
            <p class="font-medium">Next Section</p>
            <p class="text-muted-foreground">Content from the next section.</p>
          </div>
        </div>

        <div>
          <div class="text-sm">
            <p class="font-medium">Login Information</p>
            <p class="text-muted-foreground">Enter your credentials below.</p>
          </div>

          <Separator with-label class="my-6">
            Continue with
          </Separator>

          <div class="text-sm">
            <p class="font-medium">Social Login</p>
            <p class="text-muted-foreground">Use your social accounts.</p>
          </div>
        </div>

        <div>
          <div class="text-sm space-y-2">
            <p class="text-muted-foreground">Item 1</p>
            <p class="text-muted-foreground">Item 2</p>
            <p class="text-muted-foreground">Item 3</p>
          </div>

          <Separator with-label class="my-4">
            2024
          </Separator>

          <div class="text-sm space-y-2">
            <p class="text-muted-foreground">Item 4</p>
            <p class="text-muted-foreground">Item 5</p>
            <p class="text-muted-foreground">Item 6</p>
          </div>
        </div>
      </div>
    `,
  }),
}
