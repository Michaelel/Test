var app = angular.module('app', [])

app.controller('dataController', function ($scope, $http) {
    $http.get('https://demo3569733.mockable.io/').success(data => {
        $scope.products = data.products
        $scope.categories = []
        data.products.map(el => {
            if ($scope.categories.join().search(el.bsr_category) === -1) {
                $scope.categories.push(el.bsr_category)
            }
        })
    }).error(err => {
        throw err
    })
    $scope.setCategoryFilter = category => {
        $scope.categoryFilter = {bsr_category: category}
    }
})


