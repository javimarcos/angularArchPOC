require(['src/app'],function(app){
    bootstrapCallback = function(angular){
        angular.module('example');
        angular.element(document).ready(function(){
            angular.bootstrap(document,['example'])
        });
    };
    require(['angular'], bootstrapCallback);
});
