/**
 * Created by HulkTron on 4/5/2016.
 */
angular.module("Blood_bank")
  .controller("homeCtrl",function($scope){


  })
  .controller("loginCtrl",function($scope,$http){
  $scope.user = {};
  $scope.login = function(user) {
    $http.post("http://localhost:8080/api/login",{data:user})
      .success(function(response){
        console.log(response)
      })
      .error(function(err){
        console.log(err)
      })
     }
  })
  .controller("signupCtrl", function($scope,$http) {
    $scope.detail = {};
    $scope.signup = function(detail){
      console.log(detail);
      $http.post("http://localhost:8080/api/signup",{data:detail})
        .success(function (response) {
          console.log(response)
        })
        .error(function(err){
          console.log(err)
        })
    }
  });
