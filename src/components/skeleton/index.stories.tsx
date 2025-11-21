import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Skeleton } from './index'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`tsx
//src/components/Component.tsx
import { Skeleton } from "@grapegram/ui-kit";
\`\`\`

A skeleton is a placeholder component that mimics the structure of your content while it is loading. It helps improve perceived performance and provides a better user experience by giving users a visual cue that content is being loaded.
        `,
      },
    },
  },
  argTypes: {
    class: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: '<Skeleton v-bind="args" class="w-[100px] h-[20px] rounded-full" />',
  }),
}

export const Card: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex flex-col space-y-3 max-w-sm">
        <Skeleton class="h-[125px] w-[250px] rounded-xl" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    `,
  }),
}

export const Avatar: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex items-center space-x-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    `,
  }),
}

export const Paragraph: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="space-y-2 max-w-lg">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-3/4" />
        <Skeleton class="h-4 w-5/6" />
        <Skeleton class="h-4 w-2/3" />
      </div>
    `,
  }),
}

export const List: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="space-y-3 max-w-md">
        <div class="flex items-center space-x-4">
          <Skeleton class="h-10 w-10 rounded" />
          <div class="flex-1 space-y-2">
            <Skeleton class="h-4 w-full" />
            <Skeleton class="h-3 w-3/4" />
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <Skeleton class="h-10 w-10 rounded" />
          <div class="flex-1 space-y-2">
            <Skeleton class="h-4 w-full" />
            <Skeleton class="h-3 w-3/4" />
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <Skeleton class="h-10 w-10 rounded" />
          <div class="flex-1 space-y-2">
            <Skeleton class="h-4 w-full" />
            <Skeleton class="h-3 w-3/4" />
          </div>
        </div>
      </div>
    `,
  }),
}
