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
	.when("/jobs",
	{
		templateUrl:"jsp/jobs.jsp",
		controller:'jobsController'
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
			$scope.isBlog=true;	
		}
		);
letzChaat.controller('loginController',['$scope',function($scope,$http,$location)		
		{
	             
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
     
		if(r=="true")
			{
			console.log("scope value:"+$scope.blog);
			console.log("scope value:"+$scope.forum);
			$scope.blog=true;
			$scope.forum=true;
			console.log("scope value after:"+$scope.blog);
			console.log("scope value:"+$scope.forum);
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
		}]
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
letzChaat.controller("blogController",function($scope,$http)	
		{	
			 $http.get("http://localhost:8090/letzchaat/viewBlogs")
			    .then(function (response) {$scope.blogs = response.data;});
			
			$scope.newBlog={};
			console.log("In Controller");
			$scope.addBlog=function(newBlog)
			{
				var dataObj = {
		    			blogTitle:$scope.blogTitle,
		    			blogDescription:$scope.blogDescription,
		 				category:$scope.category
		 		};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8090/letzchaat/addBlog',dataObj);
				 $http.get("http://localhost:8090/letzchaat/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editBlog=function(blog)
			{
				console.log("inside editblog");
				console.log("blog:"+blog);
				$scope.blogDataToEdit=blog;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
		    			blogTitle:$scope.blogDataToEdit.blogTitle,
		    			blogDescription:$scope.blogDataToEdit.blogDescription,
		 				category:$scope.blogDataToEdit.category,
		 				blog_id:$scope.blogDataToEdit.blog_id
		 		};
				$http.put('http://localhost:8090/letzchaat/updateBlog', dataObj);
				$http.get("http://localhost:8090/letzchaat/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("delete blog called");
				blog_id:$scope.blogDataToEdit.blog_id;
				console.log("blog_id:"+blogDataToEdit.blog_id);
				$http.delete('http://localhost:8090/letzchaat/deleteBlog/'+blogDataToEdit.blog_id);
				 $http.get("http://localhost:8090/letzchaat/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			}
			
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


letzChaat.controller('jobsController',function($scope,$http)		
		{
	console.log("inside job controller");
    $http.get("http://localhost:8090/letzchaat/viewAllJobs")
    .then(function (response) {$scope.jobs = response.data;});
    
    $scope.applyJob=function()
    {
    	 console.log("applyJob function called");
    }
		}
       
		);
