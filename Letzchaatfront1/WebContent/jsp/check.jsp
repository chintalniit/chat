<html ng-app="myApp">
<head>
<!-- SPELLS -->
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<div ng-controller="myCtrl">
 <div class="jumbotron"><input type="file" ng-model="myFile"/> <button ng-click="uploadFile()">upload me</button></div>
 &nbsp;
 <div class="alert alert-danger fade in"><a class="close" href="#" data-dismiss="alert">×</a> <strong>Errors!</strong> {{errors.value}}</div>
 </div>
 <script>
 var myApp = angular.module('myApp', []);

myApp.directive('fileModel', ['$parse', function ($parse) {
 return {
 restrict: 'A',
 link: function(scope, element, attrs) {
 var model = $parse(attrs.fileModel);
 var modelSetter = model.assign;

element.bind('change', function(){
 scope.$apply(function(){
 modelSetter(scope, element[0].files[0]);
 });
 });
 }
 };
 }]);

myApp.service('fileUpload', ['$q','$http', function ($q,$http) {
 var deffered = $q.defer();
 var responseData;
 this.uploadFileToUrl = function(file, uploadUrl){
 var fd = new FormData();
 fd.append('file', file);
 return $http.post(uploadUrl, fd, {
 transformRequest: angular.identity,
 headers: { 'Content-Type' : undefined}
 })
 .success(function(response){

/* $scope.errors = response.data.value; */
 console.log(response);
 responseData = response;
 deffered.resolve(response);
 return deffered.promise;
 })
 .error(function(error){
 deffered.reject(error);
 return deffered.promise;
 });

}
this.getResponse = function() {
 return responseData;
 }
}]);

myApp.controller('myCtrl', ['$scope', '$q', 'fileUpload', function($scope, $q, fileUpload){
 $scope.dataUpload = true;
 $scope.errVisibility = false;
 $scope.uploadFile = function(){
 var file = $scope.myFile;
 console.log('file is ' );
 console.dir(file);

var uploadUrl = "http://localhost:8090/letzchaat/addUser";
 fileUpload.uploadFileToUrl(file, uploadUrl).then(function(result){
 $scope.errors = fileUpload.getResponse();
 console.log($scope.errors);
 $scope.errVisibility = true;
 }, function(error) {
 alert('error');
 })

};
 }]);
 </script>