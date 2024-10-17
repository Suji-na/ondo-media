module.exports = {
    mode: "production",
    entry: {
        app: "./src/assets/js/app.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: "babel-loader"
        }]
    },
    //uncomment below code to get unminified js
    // performance: {
    //     hints: false
    // },
    // optimization: {
    //     minimize: false
    // },
    // devtool: "inline-source-map"
};
