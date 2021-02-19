module.exports = {
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|jpeg|svg|gif|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
};
