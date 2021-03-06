const path = require('path');

const SRC_DIR = path.join(__dirname, '/src');
const PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env', {
            'plugins': ['@babel/plugin-proposal-class-properties']
          }],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
