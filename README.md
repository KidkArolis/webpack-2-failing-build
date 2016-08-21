# Webpack 2 + postcss-import + svg-inline bug

Run

        $ npm install
        $ webpack --progress

And you should get:

```
inrainbows:webpack-2-failing-build karolis$ webpack --progress
Hash: 28649963993315d4a386
Version: webpack 2.1.0-beta.21
Time: 504ms
    Asset     Size  Chunks             Chunk Names
bundle.js  3.53 kB       0  [emitted]  main
   [6] ./app/index.js 25 bytes {0} [built]
    + 6 hidden modules

ERROR in ./~/failing-build/lib/Alert/icon.svg
Module build failed: (SystemJS) ENOENT: no such file or directory, open '/Users/karolis/webpack-2-failing-build/loader-utils'
        Error: ENOENT: no such file or directory, open '/Users/karolis/webpack-2-failing-build/loader-utils'
            at Error (native)
        Error loading /Users/karolis/webpack-2-failing-build/loader-utils as "loader-utils" from /Users/karolis/webpack-2-failing-build/node_modules/svg-inline-loader/index.js
 @ ./~/failing-build/lib/Alert/Alert.js 1:0-21
 @ ./~/failing-build/lib/Alert/index.js
 @ ./~/failing-build/lib/index.js
 @ ./app/index.js
```

Might need to run it several times to reproduce.
