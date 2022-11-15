require('events').EventEmitter.defaultMaxListeners = 20;
module.exports = {
    devServer: {
        //host:"127.0.0.1",
        //port:"8080",
        proxy: {
            "/vnr": {
                target: "http://223.3.94.112:8181/onos/nvh",
                changeOrigin: true,
            },
            '/tenants': {
                target: 'http://223.3.94.112:8181/onos/p4virtex',
                changeOrigin: true
            },
            '/vnets': {
                target: 'http://223.3.94.112:8181/onos/p4virtex',
                changeOrigin: true
            },
            '/vnets/topology': {
                target: 'http://223.3.94.112:8181/onos/p4virtex',
                changeOrigin: true
            },
            '/vnets/embed': {
                target: 'http://223.3.94.112:8181/onos/p4virtex',
                changeOrigin: true
            },
            // 原映射，与新端口合并
            // '/network/configuration': {
            //     target: 'http://127.0.0.1:8181/onos/v1',
            //     changeOrigin: true,
            // },
            // 原映射，与新端口合并
            // '/devices': {
            //     target: 'http://127.0.0.1:8181/onos/v1',
            //     changeOrigin: true,
            // },

            // 原映射，与新端口合并
            // '/devices/ports': {
            //     target: 'http://127.0.0.1:8181/onos/v1',
            //     changeOrigin: true,
            // },

            // 原映射，与新端口合并
            // '/links': {
            //     target: 'http://127.0.0.1:8181/onos/v1',
            //     changeOrigin: true,
            // },

            // 原映射，与新端口合并
            // '/hosts': {
            //     target: 'http://127.0.0.1:8181/onos/v1',
            //     changeOrigin: true,
            // },

            /* Apis for k8s api/v1 */
            '/terminal': {
                target: 'http://223.3.94.112:8009/api/v1',
                changeOrigin: true,
                pathRewrite: {
   				 '^/terminal': '',  
 			    },
            },

            '/task': {
                target: 'http://223.3.94.112:8009/apis/apps/v1',
                changeOrigin: true,
                pathRewrite: {
   				 '^/task': '',  
 			    },
            },

            /* Apis for k8s apis/custom.metrics.k8s.io/v1beta1 */
            // '/costum-metrics': {
            //     target: 'http://192.168.1.104:8009/apis/custom.metrics.k8s.io/v1beta1',
            //     changeOrigin: true,
            //     pathRewrite: {
   			// 	 '^/costum-metrics': '',   
 			//     },
            // },

            /* Apis for k8s apis/metrics.k8s.io/v1beta1 */
            // '/metrics': {
            //     target: 'http://192.168.1.104:8009/apis/metrics.k8s.io/v1beta1',
            //     changeOrigin: true,
            //     pathRewrite: {
   			// 	 '^/metrics': '',   
 			//     },
            // },

            /* Apis for onos api/v1 */
            '/network': {
                target: 'http://223.3.94.112:8181/onos/v1',
                changeOrigin: true,
                pathRewrite: {
   				 '^/network': '',   
 			    },
            },

            /* Apis for edgex foundry */
            '/IoT': {
                target: 'http://223.3.94.112:30080',
                changeOrigin: true,
                pathRewrite: {
   				 '^/IoT': '',   
 			    },
            }
        }
    }
}
