import type { Preview } from '@storybook/vue3-vite'
import type { Decorator } from '@storybook/vue3'
import '../src/styles/main.css'

const withTheme: Decorator = (story, context) => {
  const background = context.globals.backgrounds?.value || 'dark'

  if (background === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return story()
}

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    docs: { codePanel: true },
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
    options: {
      storySort: {
        order: ['Getting Started', ['Installation'], 'Components'],
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
}

export default preview
