import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#141414' },
        light: { name: 'Light', value: '#E5E5E5' },
      },
    },
    initialGlobals: {
      backgrounds: { value: 'dark' },
    },
  },

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    variant: 'default',
    default: 'Button',
    disabled: false,
  },
}
