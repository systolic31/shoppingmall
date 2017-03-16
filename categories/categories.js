angular.module('categories', [
    'home.models.categories'
])
  .config(function ($stateProvider) {
      $stateProvider
          .state('home.categories', {
              url: '/',
              views: {
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
      ;
  })
    .controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel) {
        var categoriesListCtrl = this;

        CategoriesModel.getCategories()
            .then(function (result) {
                categoriesListCtrl.categories = result;
            });
    })
;