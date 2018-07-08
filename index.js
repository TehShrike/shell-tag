const shellEscape = require(`@tehshrike/shell-escape-tag`)
const cp = require(`child_process`)

module.exports = function sh(...args) {
	const command = shellEscape(...args)

	return cp.execSync(command, {
		encoding: `utf8`,
	})
}
