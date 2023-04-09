module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{psd,jpg,js,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};