import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Typography from './Typography.vue'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
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
import { Typography } from "@grapegram/ui-kit";
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body-sm', 'caption'],
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'This is how text will be looking by default for yout app. <br/> All text content use <b>Roboto</b> font.',
      },
    },
  },
  args: {
    variant: 'body',
    weight: 'regular',
    default: 'Chat using AI That Joins, Not Replaces.',
  },
}

export const HeadingsStyling: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All heading variants from <span className="font-bold">h1</span> to <span className="font-bold">h6</span>. <br/> All heading levels use <b>Rubik </b> font.',
      },
    },
  },
  render: () => ({
    components: { Typography },
    template: `
      <div className="flex flex-col gap-4">
        <Typography variant="h1"><span className="text-accent font-bold">Heading 1</span> - Grapegram messenger</Typography>
        <Typography variant="h2"><span className="text-accent font-bold">Heading 2</span> - Grapegram messenger</Typography>
        <Typography variant="h3"><span className="text-accent font-bold">Heading 3</span> - Grapegram messenger</Typography>
        <Typography variant="h4"><span className="text-accent font-bold">Heading 4</span> - Grapegram messenger</Typography>
        <Typography variant="h5"><span className="text-accent font-bold">Heading 5</span> - Grapegram messenger</Typography>
        <Typography variant="h6"><span className="text-accent font-bold">Heading 6</span> - Grapegram messenger</Typography>
      </div>
    `,
  }),
}

export const ContentStyling: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Body text variants with different sizes.',
      },
    },
  },
  render: () => ({
    components: { Typography },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px;">
        <Typography variant="body">
          <span className="text-brand font-bold">Body text</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="body-sm">
          <span className="text-brand font-bold">Small body text</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="caption">
          <span className="text-brand font-bold">Caption text</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
    `,
  }),
}

export const FontWeights: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Different font weights applied to the same variant. <br/> For now variants from h1 to h6 to not have any other weights except bold.',
      },
    },
  },
  render: () => ({
    components: { Typography },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 600px;">
        <Typography variant="body" weight="light">Light weight heading</Typography>
        <Typography variant="body" weight="regular">Regular weight heading</Typography>
        <Typography variant="body" weight="medium">Medium weight heading</Typography>
        <Typography variant="body" weight="bold">Bold weight heading</Typography>
      </div>
    `,
  }),
}

export const AsChild: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'You can use the `as-child` prop to render a different element inside the typography component, like an anchor tag. The component will forward all props and styles to the child element.',
      },
    },
  },
  render: () => ({
    components: { Typography },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Typography variant="body" weight="medium" as-child>
          <a href="#" style="color: #0066cc; text-decoration: underline;">I'm a link styled as typography</a>
        </Typography>
        <Typography variant="h4" as-child>
          <span className="text-rose-600">I'm a span styled as h4</span>
        </Typography>
      </div>
    `,
  }),
}

export const CustomTag: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Override the default HTML tag using the `as` prop while keeping the variant styling. <br/> It is usefull for SEO when you need to use another tag to describe your content.',
      },
    },
  },
  render: () => ({
    components: { Typography },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Typography variant="h1" as="p">h1 styles but rendered as <span className="font-bold text-accent">p</span> tag</Typography>
        <Typography variant="body" as="h2">body styles but rendered as <span className="font-bold text-accent">h2</span> tag</Typography>
        <Typography variant="caption" as="div">caption styles but rendered as <span className="font-bold text-accent">div</span> tag</Typography>
      </div>
    `,
  }),
}

export const AllCombinations: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all typography variants with different weights.',
      },
    },
  },
  render: () => ({
    components: { Typography },
    template: `
      <div className="flex flex-col gap-8 max-w-[800px]">
        <div>
          <Typography variant="body" weight="bold" className="text-accent uppercase font-bold">
            Headings
          </Typography>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <Typography variant="h1">Display Heading 1</Typography>
            <Typography variant="h2">Display Heading 2</Typography>
            <Typography variant="h3">Display Heading 3</Typography>
            <Typography variant="h4">Display Heading 4</Typography>
            <Typography variant="h5">Display Heading 5</Typography>
            <Typography variant="h6">Display Heading 6</Typography>
          </div>
        </div>

        <div>
          <Typography variant="body" weight="bold" className="text-accent uppercase font-bold">
            Body & Small Text
          </Typography>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <Typography variant="body">Regular body text for paragraphs and content</Typography>
            <Typography variant="body-sm">Small body text for secondary content</Typography>
            <Typography variant="caption">Caption text for labels and hints</Typography>
          </div>
        </div>

        <div>
          <Typography variant="body" weight="bold" className="text-accent uppercase font-bold">
            Font Weights
          </Typography>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <Typography variant="body" weight="light">Light weight text</Typography>
            <Typography variant="body" weight="regular">Regular weight text</Typography>
            <Typography variant="body" weight="medium">Medium weight text</Typography>
            <Typography variant="body" weight="bold">Bold weight text</Typography>
          </div>
        </div>
      </div>
    `,
  }),
}
