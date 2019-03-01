const app = angular.module('app', ['ui.router'])

app.component('helloComponent', {
  template: '<div>Hello, {{name}}!</div>',
  controller: function ($scope) {
    $scope.name = 'uirouter';
  }
});

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('hello', {
    url: '/hello',
    component: 'helloComponent'
  });

  $urlRouterProvider.otherwise('/hello');

});

