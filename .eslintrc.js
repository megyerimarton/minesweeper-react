module.exports = {
	"plugins": [
		"react"
	],
	"parserOptions": {
			"ecmaVersion": 6,
			"sourceType": "module",
			"ecmaFeatures": {
					"jsx": true
			}
	},
	"env": {
			"es6":     true,
			"browser": true,
			"node":    true,
			"jest":   true
	},
	"extends": [
			"eslint:recommended",
			"plugin:react/recommended"
	],
  "rules": {
		"semi": ["error", "always"],
		"no-console": 0,
		"require-jsdoc": 0,
		"object-curly-spacing": 0,
		"array-bracket-spacing": 0,
		"no-unused-vars": 1,
		"padded-blocks": 0,
		"new-cap": 0,
		"max-len": 0,
		"arrow-parens": 0,
		"block-spacing": 0,
		"brace-style": 0,
		"linebreak-style": 0,
		"arrow-body-style": 0,
		"import/newline-after-import": 0,
		'comma-dangle': ['error', {
			arrays: 'never',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'never'
		}],
	}
}