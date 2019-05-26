angular.module('myApp', ['ngRoute', 'ngResource'])
  .config(function($routeProvider) {

    $routeProvider.when('/pagina01', {
      templateUrl: 'paginas/pagina01.njk',
      controller: 'myController'
    });


});