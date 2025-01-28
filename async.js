import shellEscape from '@tehshrike/shell-escape-tag'
import { promisify } from 'node:util'
import cp from 'node:child_process'
const exec = promisify(cp.exec)

export default async function sh(...args) {
	const command = shellEscape(...args)

	const stdio = await exec(command, {
		encoding: `utf8`,
	})

	return stdio.stdout
}
