module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.cmp.svg$/, use: ['@svgr/webpack'], },
            { test: /(.png|.svg|.jpg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/, use: ['file-loader'], },
        ]
    }
}