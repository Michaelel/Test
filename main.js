var app = angular.module('app', ['ngRoute'])


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'dataController'
        })
        .when('/:search.name/:bsr_category', {
            controller: 'dataController'
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
    $scope.categoryLocation = ''
    $scope.setCategoryFilter = category => {
        $scope.categoryFilter = {bsr_category: category}
        //$scope.loc = $location.path().slice(1,$location.path().length)
        $scope.categoryLocation = category + '/'

    }

    $scope.setSearchFilter = inputName => {
        $scope.searchFilter = {name: inputName}
    }
    // if (!$scope.categoryFilter) {
    //     $location.path($scope.searchFilter)
    // } else {
    //     $location.path($scope.categoryFilter + '/' + $scope.searchFilter)
    //
    // }

    // $scope.searchRoute = name => {
    //     $scope.locName = $location.path(name)
    //     //console.log($scope.locSearch)
    // }

}])




