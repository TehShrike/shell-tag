const test = require(`zora`)
const sh = require(`./`)
const shasync = require(`./async`)

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

test(`async`, async t => {
	const promise1 = shasync`node ./test-helper/print-ms-and-exit-after-2-seconds.js`
	const promise2 = shasync`node ./test-helper/print-ms-and-exit-after-2-seconds.js`

	const ms1 = parseInt((await promise1).trim(), 10)
	const ms2 = parseInt((await promise2).trim(), 10)
	const ms_difference = Math.abs(ms1 - ms2)

	t.ok(ms_difference < 500, 'ran in parallel')
})

test(`async exit code 1`, async t => {
	const promise = shasync`node ./test-helper/exit-code-1.js`

	try {
		await promise
		t.fail()
	} catch (e) {
		t.ok(e.message.includes('failed'))
	}
})
