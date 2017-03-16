angular.module('Homepage', [
    'ui.router',
    'categories',
    'categories.products',
    'productinfo'

])


.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
             .state('home', {
                 url: '/home',
                 views: {
                     '': { templateUrl: 'home.html' },
                     'categories@home': {
                         controller: 'CategoriesListCtrl as categoriesListCtrl',
                         templateUrl: 'categories/categories.html'
                     },
                     'products@home': {
                         controller: 'ProductsListCtrl as productsListCtrl',
                         templateUrl: 'categories/products/products.html'
                     }
                 }
             })

            .state('home.productinfo', {
                url: '/:product',
                views: {
                    '': { templateUrl: 'home.html' },
                    'categories@home': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'categories/categories.html'
                    },
                    'products@home': {
                        controller: 'ProductsInfoCtrl as productsInfoCtrl',
                        templateUrl: 'categories/products/productinfo.html'
                    }
                },
                params: {
                    product: null,
                    price: null,
                    description: null,
                    image: null
                }
            })

            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html'
            })

             .state('join', {
                 url: '/join',
                 templateUrl: 'join/join.html'
             })

            .state('productinfo', {
                url: '/productinfo',
                templateUrl: 'categories/products/productinfo.html'
            });
})


.controller('MainCtrl', function ($scope, $state) {

})
;