# Minimal Repository for Webpack Bug Demonstration

This repository is created to demonstrate a bug related to Webpack, as discussed in the [Webpack Discussion #17101](https://github.com/webpack/webpack/discussions/17101).

## Description

The issue arises from a specific import statement in the `MarkdownEditor.tsx` file, which causes an error during the Webpack build process.

## Problematic Code

The problematic line is:

```typescript
import "@stackoverflow/stacks/dist/css/stacks.css";
