import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Badge from './Badge.vue'
import { Avatar, AvatarImage, AvatarFallback } from '../avatar'
import { Bell, Zap, Star, Loader2 } from 'lucide-vue-next'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Badge component to display status or count indicators.

\`\`\`tsx
//src/components/Component.tsx
import { Badge } from "@grapegram/ui-kit";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'active'],
      description: 'Badge variant',
    },
  },
  args: {
    variant: 'base',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'base',
    default: '42',
  },
}

export const Active: Story = {
  args: {
    variant: 'active',
    default: '42',
  },
}

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All badge variants available in the design system.',
      },
    },
  },
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex items-center gap-4">
        <Badge variant="base">42</Badge>
        <Badge variant="active">99+</Badge>
      </div>
    `,
  }),
}

export const WithDifferentContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Badges can display different types of content like numbers, text, icons, or be empty. Icons can also be animated using Tailwind classes.',
      },
    },
  },
  render: () => ({
    components: { Badge, Bell, Zap, Star, Loader2 },
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <Badge variant="base">1</Badge>
        <Badge variant="base">9</Badge>
        <Badge variant="base">42</Badge>
        <Badge variant="base">99+</Badge>
        <Badge variant="active">New</Badge>
        <Badge variant="active">12</Badge>

        <!-- Badges with icons -->
        <Badge variant="active" class="gap-1">
          <Bell :size="14" />
          5
        </Badge>

        <Badge variant="base" class="gap-1">
          <Star :size="14" />
          Star
        </Badge>

        <Badge variant="active" class="gap-1">
          <Zap :size="14" />
        </Badge>

        <!-- Badge with animated icon -->
        <Badge variant="active" class="gap-1">
          <Loader2 :size="14" class="animate-spin" />
          Loading
        </Badge>
      </div>
    `,
  }),
}

export const OnlineStatus: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Badge can be used as an online status indicator on avatars. The badge is positioned absolutely and appears as a small dot without content.',
      },
    },
  },
  render: () => ({
    components: { Badge, Avatar, AvatarImage, AvatarFallback },
    template: `
      <div class="flex flex-wrap items-center gap-8">
        <!-- Small avatar with online status -->
        <div class="relative">
          <Avatar size="sm">
            <AvatarImage src="https://avatars.githubusercontent.com/u/176707719?s=200&v=4" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Badge
            variant="active"
            class="absolute bottom-0 right-0 size-3 min-w-0 min-h-0 p-0 ring-2 ring-background"
          />
        </div>

        <!-- Base avatar with online status -->
        <div class="relative">
          <Avatar size="base">
            <AvatarImage src="https://avatars.githubusercontent.com/u/61083295?v=4" alt="User" />
            <AvatarFallback>VL</AvatarFallback>
          </Avatar>
          <Badge
            variant="active"
            class="absolute bottom-0 right-0 size-4 min-w-0 min-h-0 p-0 ring-2 ring-background"
          />
        </div>

        <!-- Large avatar with online status -->
        <div class="relative">
          <Avatar size="lg">
            <AvatarImage src="https://avatars.githubusercontent.com/u/74236970?v=4" alt="User" />
            <AvatarFallback>FB</AvatarFallback>
          </Avatar>
          <Badge
            variant="active"
            class="absolute bottom-1 right-1 size-6 min-w-0 min-h-0 p-0 ring-4 ring-background"
          />
        </div>
      </div>
    `,
  }),
}

export const NotificationBadge: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Badges can be positioned on UI elements to show notification counts.',
      },
    },
  },
  render: () => ({
    components: { Badge, Avatar, AvatarImage, AvatarFallback },
    template: `
      <div class="flex flex-wrap items-center gap-8">
        <!-- Avatar with notification count -->
        <div class="relative">
          <Avatar size="base">
            <AvatarImage src="https://s.yimg.com/ny/api/res/1.2/lYXASWzXbNPogQY1Rx5IFw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en-SG/homerun/businessinsider.sg/0da122a1d64f475d5485d5bcd5433668" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Badge
            variant="active"
            class="absolute -bottom-1 -right-1"
          >
            12
          </Badge>
        </div>
      </div>
    `,
  }),
}

export const AsChild: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'You can use the `as-child` prop to render a different element, like an anchor tag. The component will forward all props and styles to the child element.',
      },
    },
  },
  render: () => ({
    components: { Badge },
    template: `
      <Badge variant="active" as-child>
        <a href="#" class="cursor-pointer hover:opacity-80">
          New Message
        </a>
      </Badge>
    `,
  }),
}
