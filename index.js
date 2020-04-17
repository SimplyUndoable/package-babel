const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare((api, { jsx, ts }) => {

	const preset = {
		presets: [
			[
				'@babel/preset-env',
				{
					'modules': false,
					'useBuiltIns': 'usage',
					'corejs': 3
				}
			],
			jsx && '@babel/preset-react',
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
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-proposal-class-properties',
			jsx && [
				'transform-react-remove-prop-types',
				{
					removeImport: true
				}
			],
			jsx && '@babel/plugin-transform-react-inline-elements',
			jsx && '@babel/plugin-transform-react-constant-elements',
			jsx && 'react-hot-loader/babel'
		].filter(Boolean)
	}


	return preset
})
