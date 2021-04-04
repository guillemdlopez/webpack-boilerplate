module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-safe-parser',
  plugins: {
    'postcss-import': true,
    'postcss-preset-env': {
      stage: 0,
    },
    'postcss-nested': true,
    'postcss-responsive-type': true,
    'postcss-discard-comments': true,
    autoprefixer: true,
  },
};
