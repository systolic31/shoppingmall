angular.module('productinfo', [
    'home.models.categories',
    'home.models.products'
])

   // .config(function ($stateProvider) {
   //     $stateProvider
   //         .state('home.productinfo', {
   //             url: '/:product',
   //             views: {
   //                 'products@home': {
   //                     controller: 'ProductsInfoCtrl as productsInfoCtrl',
   //                     templateUrl: 'categories/products/productinfo.html'
   //                 }
   //             }
   //         })
   //     ;
   // })

    .controller('ProductsInfoCtrl', function ($scope, $stateParams, CategoriesModel, ProductsModel) {
        var productsInfoCtrl = this;

        
        productsInfoCtrl.productName = $stateParams.product;
        productsInfoCtrl.productPrice = $stateParams.price;
        productsInfoCtrl.productDescription = $stateParams.description;
        productsInfoCtrl.productImage = $stateParams.image;

        //
        // CategoriesModel.setCurrentCategory($stateParams.category);
        //
        // ProductsModel.getProducts()
        //     .then(function (products) {
        //         productsListCtrl.products = products;
        //     });
        //
        // productsListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
        // productsListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;

    })


    .directive('backImg', function(){
        return function(scope, element, attrs){
            var url = attrs.backImg;
            element.css({
                'background-image': 'url(' + url +')',
                'background-size' : '100% 100%'
            });
        };
    });
;