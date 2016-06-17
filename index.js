const shellEscape = require('shell-escape-tag')
const cp = require('child_process')

module.exports = function sh(...args) {
	const command = shellEscape.apply(null, args)

	return cp.execSync(command, {
		encoding: 'utf8'
	})
}
