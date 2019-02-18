module.exports = {
	pwa: {
		workboxPluginMode: 'InjectManifest',
		workboxOptions:{
			swSrc:'src/service-worker.js',
			swDest:'service-worker.js'
		},
		name: 'Wuxia'
	}
};