var app = angular.module('app', [])

app.controller('repeatController', function ($scope, $http) {
  $http.get('https://demo3569733.mockable.io/').success(function (data) {
    $scope.products = data.products
  }).error(function (err) {
    throw err   
  }) 
}) 