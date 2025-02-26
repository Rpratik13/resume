import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

const reactPlugins = {
  'react-hooks': reactHooks,
  'react-refresh': reactRefresh,
};

const reactRules = {
  ...reactHooks.configs.recommended.rules,
  'react-hooks/exhaustive-deps': ['off'],
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
};

export { reactPlugins, reactRules };
