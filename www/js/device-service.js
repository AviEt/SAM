angular.module('starter.services').
factory("Device", function($resource, $http,BASE_URL) {
   return $resource(BASE_URL + "/SAM/:id", {
       id: '@id'
   }, {
       update: {
           method: "PUT"
       },
       remove: {
           method: "DELETE"
       }
   });
});