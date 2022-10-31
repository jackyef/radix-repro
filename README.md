This repo reproduces an issue where typings for `@radix-ui/react-dialog` getting mixed up somehow depending on the package manager used.

With `tsconfig.json`'s `compilerOptions.baseUrl` set to `"./node_modules"`, when dependencies are installed with `yarn`, the issue does not occur. (See the [`yarn` branch](https://github.com/jackyef/radix-repro/tree/yarn))

When dependencies are installed with `pnpm`, the following issue occur.

```
Type '{ children: Element; }' has no properties in common with type 'IntrinsicAttributes & DialogOverlayProps & RefAttributes<HTMLDivElement>'.ts(2559)
```
