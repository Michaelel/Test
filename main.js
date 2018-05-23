var app = angular.module('app', ['ngRoute'])


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'dataController'
        })
        .when('/:bsr_category', {
            controller: 'dataController'
        })
        .when('/:locSearch', {
            conroller: 'dataController'
        })

}])

app.controller('dataController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
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
        $scope.loc = $location.path().slice(1,$location.path().length)

    }

    $scope.searchRoute = name => {
        $scope.locName = $location.path(name)
        //console.log($scope.locSearch)
    }

}])




