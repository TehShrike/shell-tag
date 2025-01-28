const shellEscape = require('@tehshrike/shell-escape-tag')
const util = require('util')
const cp = require('node:child_process')
const exec = util.promisify(cp.exec)

module.exports = async function sh(...args) {
	const command = shellEscape(...args)

	const stdio = await exec(command, {
		encoding: `utf8`,
	})

	return stdio.stdout
}
