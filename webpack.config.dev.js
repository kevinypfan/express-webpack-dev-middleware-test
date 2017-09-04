var webpack = require('webpack');

module.exports = {
    entry: {
        main: [
          'main.js',
          // reload=true，只說當有不能hot reload的情況，就整頁refresh
          'webpack-hot-middleware/client?reload=true'
        ]
    },
    output: {
        filename: 'bundle.js',
        // compile後結果會存在記憶體中，直接設成根目錄
        path: '/',
        // 有require的靜態資源(例如：CSS)，設完整路徑
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [
          // 任何你需要的loaders
        ]
    },
    plugins: [
        // 提供hot reload功能
        new webpack.HotModuleReplacementPlugin(),
        // 當程式碼有錯誤時，不更新畫面，如果錯誤被修正才會hot reload
        // 這個可以選擇使用。
        new webpack.NoErrorsPlugin()
    ]
};
