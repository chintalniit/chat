var letzChaat=angular.module("letzChaat",['ngRoute']);
letzChaat.config(function($routeProvider) {
	$routeProvider
	.when("/",
	{
		templateUrl:"jsp/main.jsp",
		controller:'mainController'
	})
	.when("/login",
	{
		templateUrl:"jsp/login.jsp",
		controller:'loginController'
	})
	.when("/register",
	{
		templateUrl:"jsp/register.jsp",
		controller:'registerController'
	})
	.when("/about",
	{
		templateUrl:"jsp/about.jsp",
		controller:'aboutController'
	})
	.when("/services",
	{
		templateUrl:"jsp/services.jsp",
		controller:'servicesController'
	}).when("/blog",
	{
		templateUrl:"jsp/blog.jsp",
		controller:'blogController'
	})
	.when("/userHome",
	{
		templateUrl:"jsp/userHome.jsp",
		controller:'userHomeController'
	})
	
	
	.when("/forum",
	{
		templateUrl:"jsp/forum.jsp",
		controller:'forumController'
	})
});
letzChaat.controller('mainController',function($scope)		
		{
			$scope.message="you are in main page";
		}
		);
letzChaat.controller('loginController',function($scope,$http,$location)		
		{
	
	  console.log("inside login controller");               
			 $scope.login=function()
			 {
				  var loginData={
						  username:$scope.username,	
							password:$scope.password,  
				  }
			
 $http.post('http://localhost:8090/letzchaat/authenticate',loginData).then(function (response) {
	 console.log("result:"+response.data);
	 var r=response.data.toString();
	 console.log("response:"+r);
	 console.log("scope value controller start:");
     
		if(r=="true")
			{
			$scope.blog=true;
			console.log("scope value:"+$scope.blog);
			console.log("wat is this ya:"+response.data);
			console.log("scope value:"+$scope.blog);
			console.log("wat is this ya:"+response.data);
			console.log("scope value:"+$scope.blog);
			console.log("wat is this ya:"+response.data);
			$location.path('/userHome');
			}
		if(r=="false")
			{
			$scope.username="";
			$scope.password="";
			$scope.message="username/password incorrect";
			$location.path('/login');
			}
		
 });
				         
			 }
		}
		);
letzChaat.controller('registerController',function($scope,$http)		
		{
			$scope.register=function()
			{
				console.log("username:"+$scope.username);
				var userData={
					username:$scope.username,	
					password:$scope.password,
				    address:$scope.address,
				    dateofbirth:$scope.dateofbirth
				}
				 var res = $http.post('http://localhost:8090/letzchaat/addUser',userData);
			 		res.success(function(data, status, headers, config) {
			 			console.log("status:"+status);
			 			$scope.message="you are successfully registered!!!";
			 			$scope.username="";
			 			$scope.password="";
			 			$scope.address="";
			 			$scope.dateofbirth=""
			 		});
				
			}
		}
		);
letzChaat.controller('aboutController',function($scope)		
		{
			$scope.message="you are in about page";
		}
		);
letzChaat.controller('servicesController',function($scope)		
		{
			$scope.message="you are in services page";
		}
		);
letzChaat.controller('blogController',function($scope)		
		{
			$scope.message="you are in blog page";
		}
		);
letzChaat.controller('forumController',function($scope)		
		{
			$scope.message="you are in forum page";
		}
		);
letzChaat.controller('userHomeController',function($scope)		
		{
			$scope.message="you are in userhome page";
		}
		);