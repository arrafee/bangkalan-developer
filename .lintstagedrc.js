module.exports = {
    'src/**/*.{ts,tsx,js,jsx}': ['eslint --cache --fix', 'prettier --write'],
    'src/**/*.{css,scss,less}': ['stylelint --fix'],
};