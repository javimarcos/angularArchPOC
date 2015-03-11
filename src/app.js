(function(){
  var modules = ['src/modules/module1', 'src/modules/module2', 'src/modules/module3']
  var deps = ['angular']
  deps = deps.concat(modules)
  define(deps, function(angular){
     var depsModules = ['module1', 'module2', 'module3']
     var example = angular.module('example', depsModules);
     var deps = ['$log']
     var anim = function($log){
         $log.info("app launched");
     };
     deps = deps.concat([anim]);
     example.run(deps);
     return example;
  });
}())
