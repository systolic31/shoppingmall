angular.module('home.models.products', [
])

    .service('ProductsModel', function ($http, $q) {
        var model = this,
            URLS = {
                FETCH: 'data/products.json'
            },
            products,
            currentProduct;

        function extract(result) {
            return result.data;
        }

        function cacheProducts(result) {
            products = extract(result);
            return products;
        }

        function findProducts(ProductsId) {
            return _.find(products, function (product) {
                return products.id === parseInt(productId, 10);
            })
        }

        model.getProducts = function () {
            return (products) ? $q.when(products) : $http.get(URLS.FETCH).then(cacheProducts);
        };

        model.setCurrentProduct = function (product) {
            return model.getProductByName(product).then(function (product) {
                currentProduct = product;
            })
        };

        model.getCurrentProduct = function () {
            return currentProduct;
        };

        model.getCurrentProductName = function () {
            return currentProduct ? currentProduct.name : '';
        };

        model.getProductById = function (productId) {
            var deferred = $q.defer();

            if (products) {
                deferred.resolve(findProduct(productId))
            } else {
                model.getProducts().then(function () {
                    deferred.resolve(findProduct(productId))
                })
            }
            return deferred.promise;
        };

        model.getProductByName = function (productName) {
            var deffered = $q.defer();

            function findProduct() {
                return _.find(products, function (c) {
                    return c.name == productName;
                })
            }

            if (products) {
                deffered.resolve(findProduct());
            } else {
                model.getProducts()
                    .then(function () {
                        deffered.resolve(findProduct());
                    });
            }

            return deffered.promise;
        };

        model.updateProduct = function (product) {
            var index = _.findIndex(products, function (b) {
                return b.id == product.id
            });

            products[index] = product;
        };

        model.deleteProduct = function (product) {
            _.remove(products, function (b) {
                return b.id == product.id;
            });
        };


    });

