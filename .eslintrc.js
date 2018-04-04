module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: "eslint:recommended",
	parserOptions: {
		sourceType: "module"
	},
	rules: {
		"linebreak-style": [2, "unix"],
		"no-console": 0,

		// syntax
		"no-var": 2,
		"prefer-arrow-callback": 2,
		"prefer-template": 2,
		"no-eval": 2,
		"prefer-const": 1,
		"no-const-assign": 2,
		"no-use-before-define": 2,
		"func-style": [2, "expression"],
		"no-new-object": 2,
		"object-shorthand": [2, "always", { avoidQuotes: true }],
		"object-shorthand": 2,
		"quote-props": [2, "as-needed", { keywords: true, numbers: true }],
		"no-array-constructor": 2,
		"array-callback-return": 2,
		"no-useless-escape": 2,
		"no-loop-func": 2,
		"prefer-rest-params": 2,
		"prefer-spread": 2,
		"no-new-func": 2,
		// do not reassign func args
		"no-param-reassign": 2,
		"no-confusing-arrow": [2, { allowParens: false }],
		"arrow-parens": ["as-needed", { requireForBlockBody: false }],
		"arrow-body-style": [2, "as-needed"],
		"no-useless-constructor": 2,
		"no-dupe-class-members": 2,
		"no-duplicate-imports": [2, { includeExports: true }],
		"no-iterator": 2,
		"dot-notation": [2, { allowKeywords: false }],
		"no-undef": 2,
		"one-var": [2, "never"],
		"no-nested-ternary": 2,
		"no-unneeded-ternary": 2,
		"max-len": [2, { code: 100 }],
		radix: 2,

		//naming
		"id-length": [2, { min: 4, max: 20 }],
		camelcase: 2,
		"new-cap": 2,
		"no-underscore-dangle": [2, { enforceInMethodNames: true }],

		// commas, quotes, semicolons and etc
		quotes: [2, "double"],
		semi: [2, "always"],
		"eol-last": [2, "always"],
		"comma-dangle": [2, "always"],
		"comma-style": [2, "last"],

		// indent
		indent: [2, "tab"],

		// spacing
		"space-in-parens": [2, "always"],
		"template-curly-spacing": [2, "always"],
		"array-bracket-spacing": [2, "never"],
		"object-curly-spacing": [2, "never"],
		"computed-property-spacing": [2, "always"],
		"no-multiple-empty-lines": [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
		"space-before-function-paren": [2, "always"],
		"space-before-blocks": 2,
		"arrow-spacing": [2, { before: true, after: true }],
		"brace-style": ["1tbs", { allowSingleLine: true }],
		"keyword-spacing": 2,
		"space-infix-ops": 2,
		"padded-blocks": [2, "never"],
		"newline-per-chained-call": [2, { ignoreChainWithDepth: 1 }],
		"no-whitespace-before-property": 2
	},
	globals: {
		require: false,
		global: false,
		module: false,
		describe: false,
		it: false,
		beforeEach: false
	}
};
