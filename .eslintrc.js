module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@sbf/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest', '@typescript-eslint', 'import'],
  rules: {
    /**
     * The react/react-in-jsx-scope rules are no longer necessary after React's 17.0.0 release.
     * Thereafter, it's compiler's JSX Transform job to automatically import the applicable React entry point.
     *
     * @see https://github.com/yannickcr/eslint-plugin-react/issues/2928
     * @see https://github.com/facebook/create-react-app/blob/b9963abde5870d46cd906160f98f81dbc0a5ecf2/packages/react-scripts/config/webpack.config.js#L776
     */
    'react/react-in-jsx-scope': 'off',

    /**
     * Explicit types for function return values and arguments makes it clear to any calling
     * code what is the module boundary's input and output. But it can make the code verbose
     *
     * In TypeScript, there are several places where type inference is used to provide type
     * information when there is no explicit type annotation.
     *
     * @see https://www.typescriptlang.org/docs/handbook/type-inference.html
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * JavaScript allows the omission of curly braces when a block contains only one statement. However,
     * it is considered by many to be best practice to never omit curly braces around blocks, even when
     * they are optional, because it can lead to bugs and reduces code clarity and consistency.
     */
    curly: 'error',

    /**
     * There are many ways to import a index file. This rule prevent unnecessary
     * path segments in import and require statements
     */
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],

    /**
     * Enforce a convention in the order of named imports
     *
     * @see https://github.com/benmosher/eslint-plugin-import/issues/1732
     */
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],

    /**
     * Enforce a convention in the order of require / import statements.
     */
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
        pathGroups: [
          /**
           * The alias import must be placed after the external packages
           *
           * @example
           * // invalid
           * import React from 'react';
           * import foo from './foo';
           * import { Button } from '@/fairplay/Button';
           *
           * // valid
           * import React from 'react';
           * import { Button } from '@/fairplay/Button';
           * import foo from './foo';
           */
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],

    /**
     * Imports restriction agreements
     */
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          /**
           * We can only import components thats exported by the index file of fairplay folder
           *
           * @example
           * // invalid
           * import { Button } from '@/fairplay/Button';
           *
           * // valid
           * import { Button } from '@/fairplay';
           */
          {
            group: ['@/fairplay/*'],
            message: "Please use the import from '@/fairplay' instead.",
          },
        ],
      },
    ],

    /**
     * TODO: temporarily disabled while POC images are not completed
     */
    '@next/next/no-img-element': 'off',
  },
  overrides: [
    /**
     * rules for non-test files
     */
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.spec.*', '*.stories.*'],
      rules: {
        /**
         * Imports restriction agreements
         */
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              /**
               * We can only import test helpers inside of a test file
               *
               * @example
               * // invalid
               * // source: foo.ts
               * import { render } from '@/test/testUtils';
               *
               * // valid
               * // source: foo.spec.ts
               * import { render } from '@/test/testUtils';
               */
              {
                group: ['@/test/*'],
                message: 'Use this import ONLY in test files ',
              },
            ],
          },
        ],
      },
    },
  ],
};
