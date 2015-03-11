(function(){
  'use strict'
  var deps = ['angular']
  define(deps, function(angular){
     var module = angular.module('module1', []);
     var deps = ['$log']
     var moduleRun = function($log){
         $log.info("module1 launched");
     };
     deps = deps.concat([moduleRun]);
     module.run(deps);
     return module;
  });
}())
