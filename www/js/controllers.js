angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('DeviceListCtrl', function($scope, Device) {
  $scope.devices = [];

  Device.query(function (devices) {
    $scope.devices = devices;
  });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('DeviceDetailCtrl', function($scope, $stateParams, Device) {
  Device.query(function(devices) {
  for (i = 0; i < devices.length; i++) {
        if(devices[i].id == $stateParams.deviceId) {
          $scope.device = devices[i];
          break;
        }
      }
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
