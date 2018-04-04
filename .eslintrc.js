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
		"linebreak-style": ["error", "unix"],
		"no-console": 0,

		// syntax
		"no-var": "error",
		"prefer-arrow-callback": "error",
		"prefer-template": "error",
		"no-eval": "error",
		"prefer-const": 1,
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-use-before-define": "error",
		"func-style": ["error", "expression"],

		// indent
		indent: ["error", "tab"],

		// spacing
		"space-in-parens": [2, "always"],
		"template-curly-spacing": [2, "always"],
		"array-bracket-spacing": [2, "always"],
		"object-curly-spacing": [2, "always"],
		"computed-property-spacing": [2, "always"],
		"no-multiple-empty-lines": [2, { max: 1, maxEOF: 0, maxBOF: 0 }]
	}
};
