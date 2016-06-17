const shellEscape = require('shell-escape-tag')
const cp = require('child_process')

module.exports = function sh() {
	const command = shellEscape.apply(null, arguments)

	return cp.execSync(command, {
		encoding: 'utf8'
	})
}
