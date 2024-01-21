module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        'plugin:i18n-json/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: [".json"],
        tsconfigRootDir: __dirname
    },
    plugins: [
        'react'
    ],
    rules: {
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-unused-vars': 'off',

        semi: ['error', 'always'],
        'spaced-comment': 'off',
        'react/react-in-jsx-scope': 'off',


        'no-trailing-spaces': 'off',
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
        'eol-last': 'off',

        // i18next
        'i18n-json/valid-message-syntax': [2, {
            syntax: 'icu'
        }],
        'i18n-json/valid-json': 2,
        'i18n-json/sorted-keys': [2, {
            order: 'asc',
            indentSpaces: 2
        }],
        'i18n-json/identical-keys': 0
    },
    globals: {
        __IS_DEV__: true
    },
    settings: {
        react: {
            createClass: "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: "React", // Pragma to use, default to "React"
            fragment: "Fragment", // Fragment to use (maybe a property of <pragma>), default to "Fragment"
            version: "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc., if you want to override the detected value.
            // It will default to "latest" and warn if missing, and to "detect" in the future
            flowVersion: "0.53" // Flow version
        },
        propWrapperFunctions: [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {property: "freeze", object: "Object"},
            {property: "myFavoriteWrapper"},
            // for rules that check exact prop wrappers
            {property: "forbidExtraProps", exact: true}
        ],
        componentWrapperFunctions: [
            // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
            "observer", // `property`
            {property: "styled"}, // `object` is optional
            {property: "observer", object: "Mobx"},
            {property: "observer", object: "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
        ],
        formComponents: [
            // Components used as alternatives to <form> for forms, e.g. <Form endpoint={ url } />
            "CustomForm",
            {name: "Form", formAttribute: "endpoint"}
        ],
        linkComponents: [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            {name: "Link", linkAttribute: "to"}
        ]
    }
};