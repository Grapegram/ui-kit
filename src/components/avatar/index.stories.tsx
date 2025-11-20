import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Avatar, AvatarFallback, AvatarImage } from './index'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
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
import { Avatar, AvatarImage, AvatarFallback } from "@grapegram/ui-kit";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Avatar size',
    },
  },
  args: {
    size: 'base',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    setup() {
      return { args }
    },
    template: `
      <div class="flex items-center gap-4">
        <Avatar v-bind="args">
          <AvatarImage src="https://avatars.githubusercontent.com/u/176707719?s=200&v=4" alt="Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}

export const Fallback: Story = {
  render: (args) => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    setup() {
      return { args }
    },
    template: `
      <div class="flex items-center gap-4">
        <Avatar v-bind="args">
          <AvatarImage src="broken-link.png" alt="Avatar" />
          <AvatarFallback>AO</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    template: `
      <div class="flex flex-wrap items-center gap-8">
        <div class="flex flex-col items-center gap-3">
          <Avatar size="sm">
            <AvatarImage src="https://avatars.githubusercontent.com/u/75485121?v=4" alt="Avatar" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <span class="text-sm text-muted-foreground">sm (40px)</span>
        </div>

        <div class="flex flex-col items-center gap-3">
          <Avatar size="base">
            <AvatarImage src="https://avatars.githubusercontent.com/u/75485130?v=4" alt="Avatar" />
            <AvatarFallback>BS</AvatarFallback>
          </Avatar>
          <span class="text-sm text-muted-foreground">base (64px)</span>
        </div>

        <div class="flex flex-col items-center gap-3">
          <Avatar size="lg">
            <AvatarImage src="https://avatars.githubusercontent.com/u/146655640?s=200&v=4" alt="Avatar" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <span class="text-sm text-muted-foreground">lg (128px)</span>
        </div>
      </div>
    `,
  }),
}

export const WithFallback: Story = {
  render: () => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <Avatar size="sm">
          <AvatarFallback>VS</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>DV</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>KU</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AO</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LK</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Overlapping avatars to show a group of users. Adjust spacing with negative margin classes.',
      },
    },
  },
  render: () => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    template: `
      <div class="flex -space-x-4">
        <Avatar size="sm">
          <AvatarImage src="https://avatars.githubusercontent.com/u/74236970?v=4" alt="User 1" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://avatars.githubusercontent.com/u/61083295?v=4" alt="User 2" />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://avatars.githubusercontent.com/u/95349625?v=4" alt="User 3" />
          <AvatarFallback>U3</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>LK</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback class="bg-accent text-accent-foreground">+5</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}

export const CustomColors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Override fallback background colors using Tailwind classes for different visual states.',
      },
    },
  },
  render: () => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <Avatar>
          <AvatarFallback class="bg-accent text-accent-foreground">AC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback class="bg-destructive text-destructive-foreground">DE</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback class="bg-secondary text-secondary-foreground">SE</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback class="bg-primary text-primary-foreground">PR</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}
