/**
 * Created by gaborsornyei on 20/02/16.
 */

angular.module('myApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/category', {
                templateUrl: 'category/categories.html',
                controller: 'CategoryCtrl'
            })
            .when('/category/:catid', {
                templateUrl: 'category/category_form.html',
                controller: 'CategoryEditCtrl'
            })
            .when('/newCategory', {
                templateUrl: 'category/category_form.html',
                controller: 'CategoryEditCtrl'
            })
            .when('/subcategory', {
                templateUrl: 'category/subcategories.html',
                controller: 'SubCategoryCtrl'
            })
            .when('/subcategory/:subcatid', {
                templateUrl: 'category/subcategory_form.html',
                controller: 'SubCategoryEditCtrl'
            })
            .when('/newSubCategory', {
                templateUrl: 'category/subcategory_form.html',
                controller: 'SubCategoryEditCtrl'
            })
    })

    .controller('CategoryCtrl', function ($scope, CategorySrvc, $location) {
        $scope.categories = CategorySrvc.getCategories();


        $scope.addNew = function () {
            $location.path('/newCategory');
        }
    })

    .controller('CategoryEditCtrl', function ($scope, $routeParams, $location, CategorySrvc) {
        if ($routeParams.catid) {
            $scope.category = CategorySrvc.getCategoryById($routeParams.catid);
        } else {
            $scope.category = {id: 0}
        }

        $scope.cancel = function () {
            $location.path('/category');
        }

        $scope.submit = function () {
            if ($scope.category.id == 0) {
                CategorySrvc.addCategory($scope.category);
            } else {
                CategorySrvc.updateCategory($scope.category);
            }

            $location.path('/category')
        }

    })
    .controller('SubCategoryCtrl', function ($scope, CategorySrvc, $location) {
        $scope.subcategories = CategorySrvc.getSubCategories();


        $scope.addNew = function () {
            $location.path('/newSubCategory');
        }
    })
    .controller('SubCategoryEditCtrl', function ($scope, $routeParams, $location, CategorySrvc) {
        $scope.categories = CategorySrvc.getCategories();
        if ($routeParams.subcatid) {
            $scope.subcategory = CategorySrvc.getSubCategoryById($routeParams.subcatid);
        } else {
            $scope.subcategory = {id: 0}
        }

        $scope.cancel = function () {
            $location.path('/subcategory');
        }

        $scope.submit = function () {
            if ($scope.subcategory.id == 0) {
                CategorySrvc.addSubCategory($scope.subcategory);
            } else {
                CategorySrvc.updateSubCategory($scope.subcategory);
            }

            $location.path('/subcategory')
        }

    })