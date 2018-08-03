// en caso de querer modificar la configuración de webpack señalar esos cambios aquí
// en versiones anteriores del CLI esos archivos estaban en carpetas externas (build, config)
// pero en >3.0 se encuentran en los node modules

// relevant code ex.:

// module.exports = {
//     configureWebpack: {
//         plugins: [
//         new MyAwesomeWebpackPlugin()
//         ]
//     }
// }

module.exports = {

    pages: {
        app: {
            entry: 'src/main.js',
            template: 'index.html',
            filename: 'index.html',
            title: 'HOME',
            chunks: ['chunk-vendors', 'listadousers', 'pagination']
        },
        
        // test: {
        //     entry : 'src/test.js',
        //     template: 'index.html',
        //     filename: 'test.html',
        //     title: 'TEST',
        //     chunks: ['chunk-vendors', 'helloworld']
        // }
    },
    baseUrl: '/',
    outputDir: 'dist',    
    configureWebpack: {  
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    ListadoUsers: {
                        test: /[\\/]src[\\/]components[\\/]ListadoUsers/,
                        minSize: 0
                    },
                    Pagination: {
                        test: /[\\/]src[\\/]components[\\/]Pagination/,
                        minSize: 0
                    },
                    // FichaUser: {
                    //     test: /[\\/]src[\\/]components[\\/]FichaUser/,
                    //     minSize: 0
                    // },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },
    }
};