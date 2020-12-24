module.exports = {
	env: {
		commonjs: true,
		es6: true,
    node: true
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		indent: ['error', 'tab'],
		'max-len': ['error', {
			code: 150
		}],
		'no-tabs': 0,
		'sort-imports': 'error',
		'no-console': 'error',
		'no-underscore-dangle': ['error', {
			'allowAfterThis': true
		}]
	}
}











