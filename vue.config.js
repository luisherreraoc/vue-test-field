// en caso de querer modificar la configuración de webpack señalar esos cambios aquí
// en versiones anteriores del CLI esos archivos estaban en carpetas externas (build, config)
// pero en >3.0 se encuentran en los node modules

// relevant code ex.:

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    pages: {
        app: {
            // indicar los files de referencia 
            entry: 'src/main.js',
            template: 'public/index.html',
            // nombre del file q obtendremos
            filename: 'index.html',
            title: 'HOME',
            // los chunks q vamos a crear, vendors se crea siempre
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
                // diversas opciones: async, all o initial. Recomendados async o all
                chunks: "all",
                // minSize: 30000,
                // minChunks: 1,
                // maxAsyncRequests: 5,
                // maxInitialRequests: 3,
                // name: true,
                cacheGroups: {
                    // test da la referencia del nombre del archivo q se tiene q encontrar y separar
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
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },    
        plugins: [
            new HtmlWebpackPlugin({
                // se ordena inyectar en el cuerpo del .html los scripts q estaremos generando y necesario en el runtime 
                template: 'public/index.html',
                inject: 'body',
            })
        ]
    },

};