var app = angular.module('app', ['ngRoute'])


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'dataController'
        })
        .when('/:bsr_category', {
            controller: 'dataController'
        })
}])

app.controller('dataController', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://demo3569733.mockable.io/')
        .then(data => data.data)
        .then(data => {
            $scope.products = data.products
            $scope.categories = []
            data.products.map(el => {
                if ($scope.categories.join().search(el.bsr_category) === -1) {
                    $scope.categories.push(el.bsr_category)
                }
            })
        })
        .catch(err => {
            throw err
        })

    $scope.setCategoryFilter = category => {
        $scope.categoryFilter = {bsr_category: category}
    }
}])




