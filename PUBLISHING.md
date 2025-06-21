# Publishing to npm Registry

This document provides instructions for publishing this package to the npm registry.

## Prerequisites

1. You need an npm account. If you don't have one, create it at [npmjs.com](https://www.npmjs.com/signup).
2. You need to be logged in to npm in your terminal. Run:
   ```bash
   npm login
   ```
   And follow the prompts to enter your username, password, and email.
3. For scoped packages (like this one with the `@toufiq-austcse` scope), you need to ensure the scope exists and you have access to it. See [SCOPE_CREATION.md](./SCOPE_CREATION.md) for detailed instructions if you encounter a "Scope not found" error.

## Publishing Process

1. Make sure all your changes are committed to the repository.

2. Build the package to ensure the dist directory is up-to-date:
   ```bash
   npm run build
   ```

3. Publish the package:
   ```bash
   npm run publish
   ```
   This will run the prepublishOnly script to build the package and then publish it with public access.

## Updating the Package

To update the package after making changes:

1. Update the version number in package.json following [semantic versioning](https://semver.org/) principles:
   - Increment the patch version (1.0.x) for bug fixes
   - Increment the minor version (1.x.0) for new features
   - Increment the major version (x.0.0) for breaking changes

2. Build and publish as described above.

## Viewing Your Package

After publishing, you can view your package on the npm registry at:
https://www.npmjs.com/package/@toufiq-austcse/video-touch-common

## Using Your Published Package

Once published, you can install and use your package in other projects:

```bash
npm install @toufiq-austcse/video-touch-common
```

Or with yarn:

```bash
yarn add @toufiq-austcse/video-touch-common
```

Or with pnpm:

```bash
pnpm add @toufiq-austcse/video-touch-common
```
