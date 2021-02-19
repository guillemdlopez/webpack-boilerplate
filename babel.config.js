const plugins = [];

if (process.env.NODE_ENV !== 'production') {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    ['@babel/preset-env', { debug: true, useBuiltIns: 'usage', corejs: '3.9' }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins,
};
