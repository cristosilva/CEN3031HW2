angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({ 'code':$scope.code, 'name': $scope.name, 'coordinates': {'latitude' : $scope.latitude, 'longitude' :$scope.longitude}, 'address':$scope.address });
      $scope.code='';
      $scope.name='';
      $scope.latitude='';
      $scope.longitude='';
      $scope.address='';
    };

    $scope.deleteListing = function(index) {
      var i = $scope.listings.indexOf(index);
      $scope.listings.splice(i, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = {'coordinates':index.coordinates, 'address':index.address}  
    };
  }
]);