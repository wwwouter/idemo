angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', function($scope) {

}])

.controller('ContainerAddCtrl', function($scope,$state) {

    $scope.input = {
        containerid:""
    };


     $scope.save = function() {
        console.log($scope.input.containerid);

        $state.go('tab.dash')
  };



})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
