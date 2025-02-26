const typescriptRules = {
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
};

export { typescriptRules };
