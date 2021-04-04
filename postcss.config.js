module.exports = {
  plugins: {
    'postcss-import': true,
    'postcss-preset-env': {
      stage: 0,
    },
    'postcss-nested': true,
    'postcss-responsive-type': true,
    'postcss-discard-comments': true,
    '@fullhuman/postcss-purgecss': {
      content: ['./publich/index.html'],
      css: ['./src/stylesheets/**/*.*css'],
    },
    autoprefixer: true,
  },
};
