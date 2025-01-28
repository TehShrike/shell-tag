Because sometimes you want to write shell scripts with JavaScript instead of bash.

Uses [a fork of shell-escape-tag](https://github.com/TehShrike/shell-escape-tag) to escape values.

# Usage

```js
import sh from 'shell-tag'

const lsOutput = sh`ls -1`

// => "index.js
// node_modules
// package.json
// readme.md
// test-helper
// test.js"
```

You can even use javascript variables inside your bash code!

```js
import sh from 'shell-tag'

const str = 'say "what"'

const echoOutput = sh`echo ${str}`

// => say "what"
```

Throws errors if a non-0 exit code is returned.  Otherwise, returns the string from stdout.


An async version is available:

```js
import sh from 'shell-tag/async'

const str = 'say "what"'

(async() => {
	const echoOutput = await sh`cat package.json | grep name`

	// => '  "name": "shell-tag",\n'
})()
```

# License

[WTFPL](http://wtfpl2.com/)
