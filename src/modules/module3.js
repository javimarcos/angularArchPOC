(function(){
  'use strict'
  var deps = ['angular']
  define(deps, function(angular){
     var module = angular.module('module3', []);
     var deps = ['$log']
     var moduleRun = function($log){
         $log.info("module3 launched");
     };
     deps = deps.concat([moduleRun]);
     module.run(deps);
     return module;
  });
}())
