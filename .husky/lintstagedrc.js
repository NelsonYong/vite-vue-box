module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write'],
  '*.{scss,less,styl,html}': ['prettier --write'],
  '*.{html,vue,css,sass,scss,less}': [
    'stylelint --cache --fix "**/*.{vue,less,postcss,css}" --cache --cache-location node_modules/.cache/stylelint/',
  ],
};
