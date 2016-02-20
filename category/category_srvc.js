/**
 * Created by gaborsornyei on 20/02/16.
 */
angular.module('myApp')
    .factory('CategorySrvc', function () {
        var factory = {}
        var categories = [
            {id: 1, name: 'Munka'},
            {id: 2, name: 'Otthon'},
            {id: 3, name: 'Szabaidő'}
        ]

        var subcategories = [
            {id: 1, catId: 3, name: 'Sport'},
            {id: 2, catId: 3, name: 'Hobbi'},
            {id: 3, catId: 2, name: 'Játék'},
            {id: 4, catId: 2, name: 'Kirándulás'},
            {id: 5, catId: 1, name: 'Értekezlet'}
        ]

        factory.getCategories = function () {
            return categories;
        }

        factory.getCategoryById = function (id) {
            var cats = categories.filter(function (cat) {
                return cat.id == id;
            })

            return cats[0];
        }

        factory.getSubCategories = function () {
            var subcats = subcategories;
            for (var i = 0; i < subcategories.length; i++) {
                currSubCat = subcategories[i];
                var cats = categories.filter(function (cat) {
                    return currSubCat.catId == cat.id;
                })
                currSubCat.category = cats[0];
            }

            return subcats;
        }

        factory.getSubCategoryiesByCatId = function (catId) {
            var subcats = subcategories.filter(function (subcat) {
                return subcat.catId == catId;
            })

            return subcats;
        }

        factory.getSubCategoryById = function (id) {
            var subcats = subcategories.filter(function (subcat) {
                return subcat.id == id;
            })

            return subcats[0];
        }

        factory.addCategory = function (category) {
            category.id = categories.length + 1;
            categories.push(category);
        }

        factory.updateCategory = function (category) {
            for (var i = 0; i < categories.length; i++) {
                currCategory = categories[i];
                if (currCategory.id == category.id) {
                    currCategory.name = category.name;
                }
            }
        }

        factory.addSubCategory = function (subcategory) {
            subcategory.id = subcategories.length + 1;
            subcategories.push(subcategory);
        }

        factory.updateSubCategory = function (subcategory) {
            for (var i = 0; i < subcategories.length; i++) {
                var currSubCategory = subcategories[i];
                if (currSubCategory.id == subcategory.id) {
                    currSubCategory.name = subcategory.name;
                    currSubCategory.catId = subcategory.catId;
                }
            }
        }

        return factory;
    });
