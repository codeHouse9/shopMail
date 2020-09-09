module.exports = {
	 publicPath: process.env.NODE_ENV == 'production' ? './' : '/',
	 // assetsDir: 'public',
	 // outputDir:"dist",
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
				'common': '@/common'
			}
		},
	},
	chainWebpack: config => {
		config.plugin("html").tap(args => {
			args[0].minify = false;
			return args;
		});
	},
}
