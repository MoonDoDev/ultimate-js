module.exports = {
	extends: ['eslint:recommended'],
	parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
	rules: {
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				semi: true,
				trailingComma: 'es5',
				tabWidth: 4,
				bracketSpacing: true,
				printWidth: 100,
			},
		],
		'space-in-parens': ['error', 'always'],
		'space-in-brackets': [
			'error',
			'always',
			{ singleValue: true, objectsInArrays: true, arraysInArrays: true },
		],
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
};
