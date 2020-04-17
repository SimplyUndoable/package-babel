const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare((api, { jsx, ts }) => {

	const preset = {
		presets: [
			'@babel/preset-modules',
			jsx && ['@babel/preset-react',
				{
			  development: process.env.BABEL_ENV === 'development',
				}
			],
			ts && [
				'@babel/preset-typescript',
				{
					isTSX: true,
					allExtensions: true
				}
			]
		].filter(Boolean),
		plugins: [
			'@babel/plugin-transform-runtime',
			'@babel/plugin-proposal-class-properties',
			jsx && [
				'transform-react-remove-prop-types',
				{
					removeImport: true
				}
			],
			jsx && '@babel/plugin-transform-react-inline-elements',
			jsx && '@babel/plugin-transform-react-constant-elements',
		].filter(Boolean)
	}

	return preset
})
