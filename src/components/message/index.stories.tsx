import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Message from './Message.vue'
import type { Side, Color, Variants, User, MessageContent } from './Message.vue'

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible message component for chat interfaces with support for different sides, colors, variants, and tails.

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
import { Message } from "@grapegram/ui-kit";
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right'] as Side[],
      description: 'Position of the message bubble',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'] as Color[],
      description: 'Background color variant',
    },
    variant: {
      control: 'select',
      options: ['first', 'middle', 'last', 'standalone'] as Variants[],
      description: 'Message position in a sequence',
    },
    showHeader: {
      control: 'boolean',
      description: 'Show username header',
    },
    user: {
      control: 'object',
      description: 'User information',
    },
    content: {
      control: 'object',
      description: 'Message content (text and images)',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const defaultUser: User = {
  username: 'John Doe',
  color: '#3b82f6',
}

const defaultContent: MessageContent = {
  text: 'Hello, this is a message!',
  images: [],
}

export const Default: Story = {
  args: {
    side: 'left',
    color: 'primary',
    variant: 'standalone',
    user: defaultUser,
    content: defaultContent,
    showHeader: true,
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args }
    },
    template: `<Message v-bind="args" />`,
  }),
}

export const LeftSide: Story = {
  args: {
    side: 'left',
    color: 'secondary',
    variant: 'standalone',
    user: defaultUser,
    content: defaultContent,
    showHeader: true,
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 400px;">
        <Message v-bind="args" />
      </div>
    `,
  }),
}

export const RightSide: Story = {
  args: {
    side: 'right',
    color: 'primary',
    variant: 'standalone',
    user: { username: 'Me', color: '#10b981' },
    content: { text: 'This is my message', images: [] },
    showHeader: false,
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 400px; display: flex; justify-content: flex-end;">
        <Message v-bind="args" />
      </div>
    `,
  }),
}

export const WithSingleImage: Story = {
  args: {
    side: 'left',
    color: 'secondary',
    variant: 'standalone',
    user: { username: 'Alice', color: '#ec4899' },
    content: {
      text: null,
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4'],
    },
    showHeader: true,
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 400px;">
        <Message v-bind="args" />
      </div>
    `,
  }),
}

export const WithMultipleImages: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Messages can display multiple images in a responsive grid layout.',
      },
    },
  },
  render: () => ({
    components: { Message },
    setup() {
      return {
        user: { username: 'Alice', color: '#ec4899' },
      }
    },
    template: `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">Two Images</p>
          <Message
            side="left"
            color="secondary"
            variant="standalone"
            :user="user"
            :content="{
              text: null,
              images: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
              ]
            }"
            :show-header="true"
          />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">Three Images</p>
          <Message
            side="left"
            color="secondary"
            variant="standalone"
            :user="user"
            :content="{
              text: null,
              images: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29'
              ]
            }"
            :show-header="false"
          />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">Four Images</p>
          <Message
            side="right"
            color="primary"
            variant="standalone"
            :user="{ username: 'Bob', color: '#10b981' }"
            :content="{
              text: null,
              images: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05'
              ]
            }"
            :show-header="false"
          />
        </div>
      </div>
    `,
  }),
}

export const WithTextAndImages: Story = {
  parameters: {
    docs: {
      description: {
        story: 'When both text and images are present, images are displayed above the text.',
      },
    },
  },
  args: {
    side: 'left',
    color: 'secondary',
    variant: 'standalone',
    user: { username: 'Alice', color: '#ec4899' },
    content: {
      text: 'Check out these amazing views! 🌄',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      ],
    },
    showHeader: true,
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 400px;">
        <Message v-bind="args" />
      </div>
    `,
  }),
}

export const WithMarkdown: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Text content supports full Markdown formatting including **bold**, *italic*, `code`, links, lists, and more.',
      },
    },
  },
  args: {
    side: 'left',
    color: 'secondary',
    variant: 'standalone',
    user: { username: 'Developer', color: '#3b82f6' },
    content: {
      text: `Here's some **Markdown** support:

- *Italic text* and **bold text**
- \`inline code\`
- [Links](https://example.com)
- And automatic URL conversion: https://example.com

> This is a blockquote
> It can span multiple lines`,
      images: [],
    },
    showHeader: true,
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 500px;">
        <Message v-bind="args" />
      </div>
    `,
  }),
}

export const MessageSequence: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A sequence of messages showing different variants: first, middle, and last. Notice how the border radius changes to create a cohesive group.',
      },
    },
  },
  render: () => ({
    components: { Message },
    setup() {
      return {
        leftUser: { username: 'Alice', color: '#ec4899' },
        rightUser: { username: 'Bob', color: '#10b981' },
      }
    },
    template: `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: flex-start;">
          <Message
            side="left"
            color="secondary"
            variant="first"
            :user="leftUser"
            :content="{ text: 'Hey there!', images: [] }"
            :show-header="true"
          />
        </div>

        <div style="display: flex; justify-content: flex-start;">
          <Message
            side="left"
            color="secondary"
            variant="middle"
            :user="leftUser"
            :content="{ text: 'How are you doing?', images: [] }"
            :show-header="false"
          />
        </div>

        <div style="display: flex; justify-content: flex-start;">
          <Message
            side="left"
            color="secondary"
            variant="last"
            :user="leftUser"
            :content="{ text: 'Long time no see!', images: [] }"
            :show-header="false"
          />
        </div>

        <div style="height: 16px;"></div>

        <div style="display: flex; justify-content: flex-end;">
          <Message
            side="right"
            color="primary"
            variant="first"
            :user="rightUser"
            :content="{ text: 'Hi Alice!', images: [] }"
            :show-header="false"
          />
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <Message
            side="right"
            color="primary"
            variant="last"
            :user="rightUser"
            :content="{ text: 'I am doing great, thanks!', images: [] }"
            :show-header="false"
          />
        </div>
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All message variants displayed side by side for comparison.',
      },
    },
  },
  render: () => ({
    components: { Message },
    setup() {
      return {
        user: { username: 'User', color: '#3b82f6' },
      }
    },
    template: `
      <div style="display: grid; gap: 24px; grid-template-columns: repeat(2, 1fr); max-width: 800px;">
        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">Standalone</p>
          <Message
            side="left"
            color="secondary"
            variant="standalone"
            :user="user"
            :content="{ text: 'Standalone message', images: [] }"
            :show-header="true"
          />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">First</p>
          <Message
            side="left"
            color="secondary"
            variant="first"
            :user="user"
            :content="{ text: 'First in sequence', images: [] }"
            :show-header="true"
          />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">Middle</p>
          <Message
            side="left"
            color="secondary"
            variant="middle"
            :user="user"
            :content="{ text: 'Middle of sequence', images: [] }"
            :show-header="false"
          />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">Last</p>
          <Message
            side="left"
            color="secondary"
            variant="last"
            :user="user"
            :content="{ text: 'Last in sequence', images: [] }"
            :show-header="false"
          />
        </div>
      </div>
    `,
  }),
}

export const Colors: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Different color variants for messages.',
      },
    },
  },
  render: () => ({
    components: { Message },
    setup() {
      return {
        user: { username: 'User', color: '#3b82f6' },
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">Primary</p>
          <Message
            side="left"
            color="primary"
            variant="standalone"
            :user="user"
            :content="{ text: 'Primary color', images: [] }"
            :show-header="true"
          />
        </div>

        <div>
          <p style="margin-bottom: 8px; font-weight: 600;">Secondary</p>
          <Message
            side="left"
            color="secondary"
            variant="standalone"
            :user="user"
            :content="{ text: 'Secondary color', images: [] }"
            :show-header="true"
          />
        </div>
      </div>
    `,
  }),
}

export const ChatConversation: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'A realistic chat conversation demonstrating the full capabilities of the Message component.',
      },
    },
  },
  render: () => ({
    components: { Message },
    setup() {
      return {
        alice: { username: 'Alice', color: '#ec4899' },
        bob: { username: 'Bob', color: '#10b981' },
      }
    },
    template: `
      <div style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 4px; padding: 20px; background: var(--background); border-radius: 12px;">
        <div style="display: flex; justify-content: flex-start;">
          <Message
            side="left"
            color="secondary"
            variant="standalone"
            :user="alice"
            :content="{ text: 'Hey Bob! How is the project going?', images: [] }"
            :show-header="true"
          />
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <Message
            side="right"
            color="primary"
            variant="first"
            :user="bob"
            :content="{ text: 'Hi Alice!', images: [] }"
            :show-header="false"
          />
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <Message
            side="right"
            color="primary"
            variant="middle"
            :user="bob"
            :content="{ text: 'It is going really well!', images: [] }"
            :show-header="false"
          />
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <Message
            side="right"
            color="primary"
            variant="last"
            :user="bob"
            :content="{ text: 'We should be done by next week.', images: [] }"
            :show-header="false"
          />
        </div>

        <div style="display: flex; justify-content: flex-start;">
          <Message
            side="left"
            color="secondary"
            variant="first"
            :user="alice"
            :content="{ text: 'That is awesome!', images: [] }"
            :show-header="false"
          />
        </div>

        <div style="display: flex; justify-content: flex-start;">
          <Message
            side="left"
            color="secondary"
            variant="last"
            :user="alice"
            :content="{ text: 'Let me know if you need any help.', images: [] }"
            :show-header="false"
          />
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <Message
            side="right"
            color="primary"
            variant="standalone"
            :user="bob"
            :content="{ text: 'Will do, thanks! 👍', images: [] }"
            :show-header="false"
          />
        </div>
      </div>
    `,
  }),
}

export const LongMessage: Story = {
  args: {
    side: 'left',
    color: 'secondary',
    variant: 'standalone',
    user: { username: 'Alice', color: '#ec4899' },
    content: {
      text: 'This is a much longer message to demonstrate how the component handles text that spans multiple lines. The message bubble should expand naturally to accommodate the content while maintaining its design integrity and proper border radius.',
      images: [],
    },
    showHeader: true,
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 400px;">
        <Message v-bind="args" />
      </div>
    `,
  }),
}
