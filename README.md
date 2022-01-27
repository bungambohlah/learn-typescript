## My typescript learn projects

### Required

1. nodejs & npm
2. typescript

### Installation

1. install typescript globally

```sh
npm install -g typescript
```

2. compile typescript file with tsc

```sh
tsc HelloWorld.ts
```

3. then execute output file (which is js file) with node

```sh
node HelloWorld.js
```

**NOTES** : for Modules.ts & util.ts need to compare as one, like:

```sh
tsc util.ts Modules.ts --out util.js
node util.js
```
