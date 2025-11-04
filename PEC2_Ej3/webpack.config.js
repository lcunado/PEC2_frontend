const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', 
  entry: './src/app.ts', // Punto de entrada de la aplicación
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/, // Compila archivos .ts
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'] // Permite importar sin extensión
  },
  output: {
    filename: 'bundle.js', // Archivo único generado
    path: path.resolve(__dirname, 'dist'),
    clean: true // Limpia la carpeta dist antes de compilar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Usa index.html como plantilla
      inject: 'body' // Inserta el script al final del body
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 8080,
    open: true,
    hot: true
  }
};