import angular from 'angular';

const setupRoutes = ($stateProvider) => {
    $stateProvider
        .state('home', {
        url: '/',
        template: '<h3>hello world!</h3>'
    });
};

const enableHtml5Mode = ($locationProvider) => {
    $locationProvider.html5Mode({ enabled: true });
};

module.exports = angular.module('ngReactExample', [
  require('angular-ui-router'),
])
.config(enableHtml5Mode)
.config(setupRoutes);

