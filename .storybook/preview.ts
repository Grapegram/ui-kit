import type { Preview } from '@storybook/vue3-vite'
import '../src/styles/main.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: 'var(--color-gray-900)' },
        light: { name: 'Light', value: 'var(--color-gray-100)' },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
}

export default preview
