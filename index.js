import shellEscape from '@tehshrike/shell-escape-tag'
import { execSync } from 'child_process'

export default function sh(...args) {
	const command = shellEscape(...args)

	return execSync(command, {
		encoding: `utf8`,
	})
}
