Because sometimes you want to write shell scripts with JavaScript instead of bash.

# Usage

```js
const sh = require('shell-tag')

const output = sh`ls -1`

// => "index.js
// node_modules
// package.json
// readme.md
// test-helper
// test.js"

```

Throws errors if a non-0 exit code is returned.  Otherwise, returns the string from stdout.

# License

[WTFPL](http://wtfpl2.com/)
