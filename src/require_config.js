require.config({
    baseUrl:'./',
    waitSeconds: 0,
    paths:{
        angular: 'lib/angularjs/angular'
    },
    shim:{
        angular:{
          exports: 'angular'
        }
    }
});
