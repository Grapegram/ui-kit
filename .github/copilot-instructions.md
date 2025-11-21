# AI agent instructions for this repo

These notes orient AI coding agents (Copilot, Cursor, Windsurf, etc.) to be productive immediately in this UI kit.

## Project overview

- Stack: Vue 3 + Vite 7, TypeScript, Tailwind CSS v4 (via `@tailwindcss/vite`), Storybook 9 for docs, ESLint flat config.
- Purpose: a reusable UI kit exported as Vue SFC components under `src/components` with tokenized styling in `src/styles`.
- Aliases: `@` maps to `./src` (see `vite.config.ts` and `tsconfig.*`). Use absolute imports like `@/lib/utils`.

## Build, dev, and quality workflows

- Install: `yarn`
- Dev server: `yarn dev` (Vite)
- Storybook: `yarn storybook` (port 6006) | static build: `yarn build-storybook`
- Type check: `yarn type-check` (vue-tsc incremental)
- Build library/app: `yarn build` (runs `vue-tsc` then `vite build`)
- Lint/format: `yarn lint` (ESLint flat) and `yarn format` (Prettier over `src/`)
- Preview prod build: `yarn preview`
- Pre-commit: husky hook present, but currently only runs `npm test` and there’s no test script; keep this in mind if you rely on hooks. A `.lintstagedrc` file exists but is empty.

## Testing

- Vitest deps are installed and `@storybook/addon-vitest` is configured, but no `vitest.config.*` or test files exist. If you add tests, prefer Vitest and colocate under `src/**/__tests__` or `*.spec.ts`. Wire a `test` script in `package.json` if you expect CI or husky to run them.

## Architecture and conventions

- Components live under `src/components/<name>/` with:
  - `Component.vue` SFC using `<script setup lang="ts">` and `defineOptions({ name: ... })` for devtools names.
  - `index.ts` exporting the SFC and any variant utilities.
  - `*.stories.tsx` Storybook stories using `@storybook/vue3-vite` and tags `['autodocs']`.
- Styling:
  - Tailwind v4 token system is split into two files:
    - `src/styles/tailwind.config.css` - contains `@theme inline` tokens for Tailwind utilities (exported separately for consumers)
    - `src/styles/theme.css` - contains CSS variables (`:root` and `.dark` themes) for runtime theming
  - Both files are loaded via `src/styles/main.css` (imported in Storybook `preview.ts`).
  - Utility `cn(...classes)` from `src/lib/utils.ts` merges class names with `clsx` + `tailwind-merge`.
  - Variant patterns use `class-variance-authority` (CVA). Example: `src/components/button/index.ts` defines `buttonVariants` and its TS type `ButtonVariants` used by the SFC.
- Primitives: Components may render `reka-ui` primitives via the `Primitive` component to support `as`/`asChild` polymorphism. Respect `PrimitiveProps` in props.
- Icons: Use `lucide-vue-next` for icons in stories or components when needed.
- Import aliases and TS paths are unified in `vite.config.ts` (alias `@`) and `tsconfig*.json` (paths) — keep them in sync.

## Storybook specifics

- Main config: `.storybook/main.ts` (adds docs, a11y, vitest addons; vue docgen via `vue-component-meta`).
- Preview: `.storybook/preview.ts` imports `src/styles/main.css` and defines background presets using CSS variables from the theme. Use `initialGlobals.backgrounds` when showcasing light/dark states.
- Stories live alongside components as `index.stories.tsx` (TSX is used for Storybook typing helpers). Prefer CSF with `Meta`/`StoryObj`.

## ESLint and formatting

- Flat config in `eslint.config.ts`: includes Vue essential rules, TypeScript recommended, Tailwind and Storybook plugins, and Prettier-compat via `skip-formatting`.
- Ignored build outputs: `dist`, `dist-ssr`, `coverage`.
- Keep `.storybook` linted (explicit ignore negation present).

## CSS tokens and theming

- Theme tokens are split into:
  - `src/styles/tailwind.config.css` - Tailwind v4 `@theme inline` configuration with design tokens (colors, typography, spacing, etc.). This file is exported separately via `@grapegram/ui-kit/tailwind-config` for consumers to import into their Tailwind setup.
  - `src/styles/theme.css` - CSS variables defining light (`:root`) and dark (`.dark`) themes. Exported via `@grapegram/ui-kit/theme`.
- Components should reference semantic tokens (e.g., `bg-primary`, `text-foreground`) not raw colors.
- Fonts are loaded via Google Fonts CDN in `main.css`. Main CSS applies base styles and sets a `dark` variant via `@custom-variant`.
- Consumers can use design tokens in their own Tailwind utilities by importing `@grapegram/ui-kit/tailwind-config` and `@grapegram/ui-kit/theme` in their CSS.

## Example pattern: Button

- Variant contract defined in `src/components/button/index.ts` with CVA keys `variant` and `size`.
- SFC `Button.vue` consumes `buttonVariants` and `cn`, exposing `variant`, `size`, `disabled`, and `class` while passing through `PrimitiveProps`.
- Export surface: `src/components/index.ts` re-exports `./button` so consumers can `import { Button } from '@/components'`.

## Adding a new component checklist

- Create `src/components/<name>/<Name>.vue`, `src/components/<name>/index.ts`, and `src/components/<name>/index.stories.tsx`.
- Use CVA for variants when applicable; export the variant type with `VariantProps<typeof yourVariants>`.
- Import `cn` for class composition; prefer semantic Tailwind tokens from the theme.
- Add story args/controls mirroring your props and tag `['autodocs'] please use exsisting examples of stories for creating new stories. Use tailwindcss inside of stories instead plain css`.

## Gotchas

- Tailwind v4 is plugin-based via Vite; ensure `src/styles/main.css` is imported wherever styles should apply (already included in Storybook). If creating an app entry, import it in your app root.
- The husky `pre-commit` expects a `test` script; either add one or update the hook if commits are blocked.
- `components.json` is present from shadcn-vue tooling but isn’t actively used by build scripts; don’t rely on it for generation unless you wire it up.

## Requirements

- Ensure high and clean code quality
- provide professional and production ready code
- write code like a senior developer using best practices of frameworks and languages
- follow the architecture and structure of the existing codebase
- follow connected figma design
- all documentation for components in stories or .md/mdx files should be written in English
