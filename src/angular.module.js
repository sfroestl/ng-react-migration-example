import angular from 'angular';

const setupRoutes = ($stateProvider) => {
    $stateProvider
        .state('home', {
        url: '/',
        template: `
            <h3>Hello World!</h3>
            <item></item>
        `,
    });
};

const enableHtml5Mode = ($locationProvider) => {
    $locationProvider.html5Mode({ enabled: true });
};

module.exports = angular.module('ngReactExample', [
  require('angular-ui-router'),
  require('./components/Item').name,
])
.config(enableHtml5Mode)
.config(setupRoutes);

