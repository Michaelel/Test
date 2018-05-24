var app = angular.module('app', ['ngRoute'])


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'dataController'
        })
    }])

app.controller('dataController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('https://demo3569733.mockable.io/')
        .then((data) => (data.data))
        .then((data) => {
            $scope.products = data.products
            $scope.categories = []
            data.products.map(el => {
                if ($scope.categories.join().search(el.bsr_category) === -1) {
                    $scope.categories.push(el.bsr_category)
                }
            })
            $scope.locationSearch = ''
            $scope.locationCategory = ''
            $scope.addr = $location.path().split('/')
            if ($scope.addr[2]) {
                $scope.locationSearch = $scope.addr[2]
                $scope.locationCategory = $scope.addr[1]
            } else if ($scope.categories.indexOf($scope.addr[1]) != -1) {
                $scope.locationCategory = $scope.addr[1]
                $scope.locationSearch = ''
            } else if ($scope.addr[2]) {
                $scope.locationSearch = $scope.addr[1]
                $scope.locationCategory = ''
            } else {
                $scope.locationSearch = ''
                $scope.locationCategory = ''
            }
        })
        .catch(err => {
            throw err
        })
    $scope.categoryLocation = ''
    $scope.setCategoryFilter = category => {
        $scope.categoryLocation = category + '/'
        $scope.locationCategory = category
        $scope.addr = $location.path().split('/')
        console.log($scope.addr);
        if ($scope.addr[2]) {
            $scope.locationSearch = $scope.addr[2]
        } else if ($scope.categories.indexOf($scope.addr[1]) != -1) {
            $scope.locationSearch = ''
        } else if ($scope.addr[1]) {
            $scope.locationSearch = $scope.addr[1]
        } else {
            $scope.locationSearch = ''
        }
        if(category === ''){
            $scope.searchLocation = ''
            $scope.locationSearch = ''
        } else {
            $scope.searchLocation = '/' + $scope.locationSearch
        }
    }

    $scope.searchLocation = ''
    $scope.setSearchFilter = inputName => {
        $scope.searchLocation = '/' + inputName
        $scope.locationSearch = inputName
        $scope.addr = $location.path().split('/')
        console.log($scope.addr);
        if ($scope.addr[2]) {
            $scope.locationCategory = $scope.addr[1]
        } else if ($scope.categories.indexOf($scope.addr[1]) != -1) {
            $scope.locationCategory = $scope.addr[1]
        } else {
            $scope.locationCategory = ''
        }
    }
}])




