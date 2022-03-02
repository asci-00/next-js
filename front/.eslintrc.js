module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['prettier'],
    extends: ['react-app', 'airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                tabWidth: 2,
                semi: true,
                singleQuote: true,
                quoteProps: 'consistent',
                bracketSpacing: true,
                arrowParens: 'always',
                endOfLine: 'auto',
                printWidth: 120,
            },
        ],
        'no-console': 'off',
        'no-plusplus': 'off',
        'max-depth': ['error', 2],
        'no-restricted-syntax': 'off',
        'no-continue': 'off',
        'no-alert': 'off',
        'max-len': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
    },
};
