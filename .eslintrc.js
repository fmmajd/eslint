module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: "eslint:recommended",
	parserOptions: {
		sourceType: "module"
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": 0,
		"no-var": "error",
		"prefer-arrow-callback": "error",
		"prefer-template": "error",
		"no-eval": "error",
		"prefer-const": 1,
		"no-inline-comments": 0
	}
};