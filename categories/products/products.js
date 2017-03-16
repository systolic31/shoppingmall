angular.module('categories.products', [
    'home.models.categories',
    'home.models.products'
])

    .config(function ($stateProvider) {
        $stateProvider
            .state('home.categories.products', {
                url: 'categories/:category',
                views: {
                    'products@home': {
                        templateUrl: 'categories/products/products.html',
                        controller: 'ProductsListCtrl as productsListCtrl'
                    }
                }
            })            
            ;
    })

    .controller('ProductsListCtrl', function ($stateParams, CategoriesModel, ProductsModel) {
        var productsListCtrl = this;

        CategoriesModel.setCurrentCategory($stateParams.category);

        ProductsModel.getProducts()
            .then(function (products) {
                productsListCtrl.products = products;
            });

        productsListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
        productsListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;

    })
;