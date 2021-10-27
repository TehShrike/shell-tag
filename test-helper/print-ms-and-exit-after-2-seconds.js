setTimeout(function() {
	console.log(new Date().valueOf())
	console.error(Math.random() * 1e9)
	process.exit(0)
}, 2000)
