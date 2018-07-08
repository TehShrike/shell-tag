const test = require(`zora`)
const sh = require(`./`)

test(`running echo`, t => {
	const str = `say "what"`
	const output = sh`echo ${ str }`

	t.equal(output.trim(), `say "what"`)
})

test(`indented lines`, t => {
	const str = `say "what"`
	const output = sh`
		echo ${ str }
	`

	t.equal(output.trim(), `say "what"`)
})

test(`exit code 1`, t => {
	t.throws(() => sh`node ./test-helper/exit-code-1.js`, /failed/)
})
