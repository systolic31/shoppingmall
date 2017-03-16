angular.module('home.models.categories', [
])

    .service('CategoriesModel', function ($http, $q) {
        var model = this,
            URLS = {
                FETCH: 'data/categories.json'
            },
            categories,
            currentCategory;

        function extract(result) {
            return result.data;
        }

        function cacheCagegories(result) {
            categories = extract(result);
            return categories;
        }

        model.getCategories = function () {
            return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCagegories);
        };

        model.setCurrentCategory = function (category) {
            return model.getCategoryByName(category).then(function (category) {
                currentCategory = category;
            })
        };

        model.getCurrentCategory = function () {
            return currentCategory;
        };

        model.getCurrentCategoryName = function () {
            return currentCategory ? currentCategory.name : '';
        };

        model.getCategoryByName = function (categoryName) {
            var deffered = $q.defer();

            function findCategory() {
                return _.find(categories, function (c) {
                    return c.name == categoryName;
                })
            }

            if (categories) {
                deffered.resolve(findCategory());
            } else {
                model.getCategories()
                    .then(function () {
                        deffered.resolve(findCategory());
                    });
            }

            return deffered.promise;
        };
    })