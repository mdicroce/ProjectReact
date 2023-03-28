module.exports = {
  plugins: ['@babel/plugin-syntax-dynamic-import'],

  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
        esmodules: true
      }
    }],
    [
      '@babel/preset-react', { runtime: 'automatic' }
    ],
    '@babel/preset-typescript'
  ]
}
