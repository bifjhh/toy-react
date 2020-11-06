module.exports = {
    entry: {
        // 打包入口文件
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                            '@babel/plugin-transform-react-jsx', {
                                    pragma: 'createElement'
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    mode: "development",
    optimization: {
        minimize: false
    }
}

// npx webpack