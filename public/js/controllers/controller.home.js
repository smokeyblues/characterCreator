angular.module('CharCreator')
  .controller('homeController', homeController);
  homeController.$inject = ['$scope'];

  function homeController($scope) {
    var hc = this;

    hc.welcome = 'You have found the amazing Character Creator!!!'
  }
