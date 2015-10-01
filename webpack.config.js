module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.html$|\.png$|\.json$|\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: "file?name=[path][name].[ext]",
      },
    ],
  },


  output: {
    filename: "app.js",
    path: __dirname + "/build",
  },
}
