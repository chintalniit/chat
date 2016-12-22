<!DOCTYPE html>
<html>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<div class="container">
  <div ng-app="myApp" ng-controller="dataCtrl">
<form>
Title:<input type="text" ng-model="blogTitle"></input>
Description:<input type="text" ng-model="blogDescription"></input>
Posted By:<input type="text" ng-model="postedBy"></input>
Category:<input type="text" ng-model="category"></input>
<button ng-click="addBlog()">Add The Blog</button>
</form>
<script>
var app = angular.module('myApp', []);
var blog={};
var data
app.controller('dataCtrl', function($scope, $http) {
     console.log("inside controller");
     $scope.addBlog=function()
     {
    	dataObj = {
    			blogTitle:$scope.blogTitle,
    			blogDescription:$scope.blogDescription,
 				postedBy:$scope.postedBy,
 				category:$scope.category
 		};
    	 console.log("inside addBlog()");
    	 console.log("data:"+dataObj);
    	 var res = $http.post('http://localhost:8090/letzchaat/addBlog',dataObj);
 		res.success(function(data, status, headers, config) {
 			$scope.message = data;
 			console.log("status:"+status);
 		});
     }
});
</script>
</body>

</html>
