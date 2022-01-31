## My typescript learn projects

### Required

1. nodejs & npm
2. typescript
3. ts-node for TypeScript execution and REPL for node.js

### Installation

1. install typescript and ts-node globally

```sh
npm install -g typescript ts-node
```

2. install dependencies based on package.json

```sh
npm install
```

3. compile & execute specific typescript file with ts-node

```sh
ts-node src/HelloWorld.ts
```

4. watch & compile all on typescript files just execute

```sh
npm start
```

then compiled files stored on `build` folder, then if you want execute built file

```sh
node build/main.js
```

5. (optional) if you want compile all typescript files just execute (with grunt task runner help)

```sh
npm run compile
```

then built files write on build folder, just execute with node like:

```sh
node build/main.js
```
