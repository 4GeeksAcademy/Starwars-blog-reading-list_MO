// webpack.common.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Ajusta la ruta si tu archivo de entrada está en otro lugar
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regla para manejar archivos CSS
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Regla para manejar archivos de imágenes
        use: ['file-loader']
      }
    ]
  }
};