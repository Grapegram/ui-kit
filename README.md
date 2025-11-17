# @grapegram/ui-kit

Private UI-kit for Grapegram ecosystem.

## Tech stack

<div align="center">
    <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=9C36CF" alt="Typescript" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
        <img src="https://img.shields.io/badge/-Vue-black?style=for-the-badge&logoColor=white&logo=vuedotjs&color=212121" alt="Vue" />
    </a>
    <a href="https://www.shadcn-vue.com/" target="_blank">
        <img src="https://img.shields.io/badge/-Shadcn UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=9C36CF" alt="shadcnui" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
        <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=212121" alt="tailwindcss" />
    </a>
      <a href="https://storybook.js.org/" target="_blank">
        <img src="https://img.shields.io/badge/-Storybook-black?style=for-the-badge&logoColor=white&logo=storybook&color=9C36CF" alt="storybook" />
    </a>
</div>

## Dev instruments

<div align="center">
    <a href="https://vitejs.dev/" target="_blank">
        <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=9C36CF" alt="Vite" />
    </a>
    <a href="https://yarnpkg.com/" target="_blank">
        <img src="https://img.shields.io/badge/-Yarn-black?style=for-the-badge&logoColor=white&logo=yarn&color=212121" alt="Yarn" />
    </a>
    <a href="https://eslint.org/" target="_blank">
        <img src="https://img.shields.io/badge/-Eslint-black?style=for-the-badge&logoColor=white&logo=eslint&color=9C36CF" alt="eslint" />
    </a>
    <a href="https://prettier.io/" target="_blank">
        <img src="https://img.shields.io/badge/-prettier-black?style=for-the-badge&logoColor=white&logo=prettier&color=212121" alt="prettier" />
    </a>
    <a href="https://github.com/features/actions" target="_blank">
        <img src="https://img.shields.io/badge/-github_actions-black?style=for-the-badge&logoColor=white&logo=githubactions&color=9C36CF" alt="githubactions" />
    </a>
</div>

## Table of Contents

- [Explore components in live](#see-live-demos)
- [How to install](#installation-guide)
- [How to start developing](#development-guide)
  - [Development policy](#development-policy)
  - [Recommended IDE Setup](#recommended-ide-setup)
  - [Run locally](#run-locally)
  - [Release package](#release-package)
  - [Custom project scripts](#custom-project-scripts)

## See live demos

You can access the `components documentation` via link [grapegram.github.io/ui-kit/](grapegram.github.io/ui-kit/)

Here you can check `latest releases` of this package: [https://github.com/Grapegram/ui-kit/pkgs/npm/ui-kit](https://github.com/Grapegram/ui-kit/pkgs/npm/ui-kit)

## Installation guide

> [!WARNING]
> To install this package from Grapegram registry you will need to get a `personal access token` from your GitHub account with `read:packages` scope enabled. Then you will need to add it to your `.npmrc` file in your project root folder like this:
>
> Note that every time when you will need to update and reinstall packages, you will need to have this token set in your environment variable `GITHUB_TOKEN` or you can replace `${GITHUB_TOKEN}` with your actual token string but be careful not to push it to public repositories.

```rc
@grapegram:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

You can install the `latest version` of package via `npm` or `yarn` using the following commands:

Via `npm`:

```bash
npm install @grapegram/ui-kit
```

Via `yarn`:

```bash
yarn add @grapegram/ui-kit
```

You can install the `specific version` of package via `npm` or `yarn` using the following commands:

Via `npm`:

```bash
npm install @grapegram/ui-kit@0.2.5
```

Via `yarn`:

```bash
yarn add @grapegram/ui-kit@0.2.5
```

You can also add the package as a dependency into your `package.json` file manually:

```json
{
  "dependencies": {
    "@grapegram/ui-kit": "0.2.5"
  }
}
```

Then run `npm install` or `yarn` to install the package.

## Development guide

### Development policy

- All components must be documented in storybook.
- Follow the coding style used throughout the project.
- Write clear and concise commit messages according to the [naming convention policy](https://namingconvention.org/git/commit-message-naming).
- Create pull request and make changes in separate branches according to the [branch naming convention policy](https://namingconvention.org/git/branch-naming).

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

If you are using VSCode, you can install the recommended extensions for development. Just search for `@recommended` in the extensions tab and install them.

### Run locally

Clone repository on your local machine:

```bash
git clone https://github.com/Grapegram/ui-kit.git
```

Move into project folder:

```bash
cd ./ui-kit
```

Install all dependencies from `package.json`:

```bash
yarn
```

Run storybook locally for development (it is only one entry point for UI-kit development) then open [http://localhost:6006](http://localhost:6006) in your browser to see it live:

```bash
yarn dev storybook
```

When you finish you can just push changes to remote repository and create pull request with changes, in this case you will not create new version of package.

But if you want to create new version of package please follow the [release package section](#release-package) below.

### Release package

> [!NOTE]
> This pacckage follows `semantic versioning` rules. Please read more about it [semver info](https://semver.org/). We are using 3 digits versioning system: `MAJOR.MINOR.PATCH`.

When you finish your changes and want to release new version you can use scripts below to automaticly create new tag (it will increase version number depending on the type of release and current version in `package.json`) and commit + push it to remote repository:

- To create new `MAJOR` version (for breaking changes):

  ```bash
  yarn release:major
  ```

- To create new `MINOR` version (for new features, such as new components or utilities):

  ```bash
  yarn release:minor
  ```

- To create new `PATCH` version (for bug fixes or refactoring):

  ```bash
  yarn release:patch
  ```

Then you can check `Actions` tab in the repository to see the `publish` workflow running, it will automaticly publish new version of package to `GitHub Packages` registry.

### Custom project scripts

Formatting project files according to the `.prettierrc.json`:

```bash
yarn format
```

Linting project files according to the `eslint.config.ts`:

```bash
yarn lint
```

Build production version of storybook:

```bash
yarn build-storybook
```
