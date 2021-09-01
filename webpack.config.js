const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules:[
      {
        test: /\.ts?$/,
        use:["babel-loader","ts-loader"],
        exclude: /node-modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: "file-loader",
        exclude: /node-modules/
      }
    ]
  },
  devServer:{
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    compress: true
  },
  resolve:{
    extensions: [".ts",".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
}