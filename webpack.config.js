module.exports = {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@wordpress/blocks': ['wp', 'blocks'],
    '@wordpress/block-library': ['wp', 'blockLibrary'],
    '@wordpress/components': ['wp', 'components'],
    '@wordpress/data': ['wp', 'data'],
    '@wordpress/date': ['wp', 'date'],
    '@wordpress/editor': ['wp', 'editor'],
    '@wordpress/element': ['wp', 'element'],
    '@wordpress/i18n': ['wp', 'i18n'],
    '@wordpress/utils': ['wp', 'utils'],
    'lodash': ['lodash'],
  },
	cache: true,
	devtool: 'source-map',
	target: 'web',
	entry: {
		dynpagesBlocks: './src/index.js',
	},
	resolve: {
		extensions: ['.js'],
	},
	output: {
		path: __dirname + '/src/dist/',
		publicPath: '/wp-content/plugins/dynpages-blocks/dist/',
		filename: 'js/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: true,
					}
				}
			}
		],
	}
};
