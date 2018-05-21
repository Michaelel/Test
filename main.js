var app = angular.module('app', [])

app.controller('dataController', function ($scope, $http) {
  $http.get('https://demo3569733.mockable.io/').success(function (data) {
    $scope.products = data.products
    $scope.categories = []
    let j = 0;
    for(var i = 0; i < data.products.length; i++) {
      if (!($scope.categories.join().search(data.products[i].bsr_category) != -1)) {             $scope.categories[j] = data.products[i].bsr_category
        j++
      }
}
  }).error(function (err) {
    throw err   
  }) 
})


