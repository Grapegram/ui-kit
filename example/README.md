# Grapegram UI Kit - Example Project

This is a minimal example application demonstrating how to use the `@grapegram/ui-kit` package in a Vue 3 project with Tailwind CSS v4.

## 🚀 Quick Start

### 1. Install Dependencies

First, make sure the UI kit is built:

```bash
cd ..
yarn install
yarn build
cd example
```

Then install the example project dependencies:

```bash
yarn install
```

### 2. Run Development Server

```bash
yarn dev
```

Open your browser at `http://localhost:5173` to see the example application.

## 📦 What's Included

This example demonstrates:

- ✅ All UI Kit components (Button, Input, Avatar, Badge, Typography, etc.)
- ✅ Proper Tailwind CSS v4 configuration
- ✅ Design token imports from the UI kit
- ✅ Theme CSS variables usage
- ✅ TypeScript setup
- ✅ Different component variants and sizes
- ✅ Combined component examples

## 🔧 Project Structure

```
example/
├── src/
│   ├── App.vue          # Main application with component examples
│   ├── main.ts          # Application entry point
│   └── styles/
│       └── main.css     # Imports UI kit styles and tokens
├── index.html           # HTML entry point
├── package.json         # Dependencies (linked to parent UI kit)
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 💡 Key Configuration Files

### `package.json`

The UI kit is linked using the `link:` protocol:

```json
{
  "dependencies": {
    "@grapegram/ui-kit": "link:.."
  }
}
```

### `src/styles/main.css`

Imports all necessary styles from the UI kit:

```css
/* Import Tailwind base configuration from UI kit */
@import '@grapegram/ui-kit/tailwind-config';

/* Import UI kit theme variables (CSS custom properties) */
@import '@grapegram/ui-kit/theme';

/* Import UI kit compiled styles */
@import '@grapegram/ui-kit/styles';
```

### `vite.config.ts`

Includes the Tailwind CSS v4 Vite plugin:

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```

## 🎨 Using Components

Import components from the UI kit package:

```vue
<script setup lang="ts">
import { Button, Input, Avatar } from '@grapegram/ui-kit'
</script>

<template>
  <Button variant="primary">Click me</Button>
  <Input placeholder="Enter text..." />
  <Avatar fallback="JD" />
</template>
```

## 🎯 Design Tokens

The UI kit provides design tokens via CSS custom properties:

```css
/* Colors */
background-color: hsl(var(--background));
color: hsl(var(--foreground));

/* Typography */
font-family: var(--font-body);
font-weight: var(--font-weight-medium);

/* Spacing & Radius */
border-radius: var(--radius);
```

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn type-check` - Run TypeScript type checking

## 🔗 Using in Your Own Project

To use the UI kit in your own project:

### Option 1: Local Link (Development)

```bash
# In the ui-kit directory
cd /path/to/ui-kit
yarn build
yarn link

# In your project
cd /path/to/your-project
yarn link @grapegram/ui-kit
```

### Option 2: File Protocol

Add to your `package.json`:

```json
{
  "dependencies": {
    "@grapegram/ui-kit": "link:/path/to/ui-kit"
  }
}
```

### Option 3: Published Package (Production)

```bash
yarn add @grapegram/ui-kit
```

## 🛠️ Required Peer Dependencies

Make sure your project has these installed:

```json
{
  "dependencies": {
    "vue": ">=3",
    "lucide-vue-next": ">=0.526.0",
    "tailwindcss": ">=4",
    "tw-animate-css": ">=1"
  }
}
```

## 📚 Learn More

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

If you find issues or have suggestions for the UI kit, please open an issue in the main repository.

## 📄 License

MIT
