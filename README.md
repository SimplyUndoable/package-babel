# A config package for Babel

## Installation

1. Add `"@simplyundoable/babel-preset": "git+https://github.com/simplyundoable/package-babel.git",` to your package.json devDependencies

## Update this package

1. `make publish`

## Usage

### Eslint
```js
module.exports = {
	presets: [
		[
			'@simplyundoable',
			{
				jsx: true,
				ts: true
			}
		]
	]
}

```
