<html>
   
   <head>
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
   </head>
   
   <body ng-app = "myApp">
	
      <div ng-controller = "myCtrl">
      UserName:<input type="text" ng-model="username">
         <input type = "file" file-model = "myFile"/>
         <button ng-click = "uploadFile()">upload me</button>
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
      
         myApp.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl,username){
               var fd = new FormData();
               fd.append('file', file);
               fd.append('username',username);
            console.log("fd:"+fd)
               $http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){
               })
            
               .error(function(){
               });
            }
         }]);
         myApp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
            $scope.uploadFile = function(){
               var file = $scope.myFile;
               var username=$scope.username;
               console.log("username"+username);
               console.log('file is ' );
               console.dir(file);
               var uploadUrl = "http://localhost:8090/letzchaat/fileUpload";
               fileUpload.uploadFileToUrl(file, uploadUrl,username);
            };
         }]);
			
      </script>
      
   </body>
</html>