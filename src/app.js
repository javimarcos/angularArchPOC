(function(){
  'use strict'
  define(['angular'], function(angular){
     var example = angular.module('example',[]);
     var deps = ['$log']
     var anim = function($log){
         $log.info("entra aqui");
     };
     deps = deps.concat([anim]);
     example.run(deps);
     return example;
  });
}())
