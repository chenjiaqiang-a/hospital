const { override, fixBabelImports,addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {'@primary-color': '#88afd4'},
        },      
    }),
    addWebpackPlugin(
        new AntdDayjsWebpackPlugin()
    ),
);