const app = angular.module('app', ['ui.router'])

const helloComponent = {
  bindings: {
    userName: '<'
  },
  template: '<div>Hello, {{$ctrl.userName}}!</div>',
  controller: function () {
    console.log('userName', this.userName)
    setTimeout(() => {
      console.log('userName', this.userName)
    }, 0);
  }
};

app.component('helloComponent', helloComponent);

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('hello', {
    url: '/hello',
    component: 'helloComponent',
    resolve: {
      userName: () => 'uirouter'
    }
  });

  $urlRouterProvider.otherwise('/hello');

});

