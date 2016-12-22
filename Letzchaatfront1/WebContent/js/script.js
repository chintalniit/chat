var letzChaat=angular.module("letzChaat",['ngRoute']);
letzChaat.config(function($routeProvider) {
	$routeProvider
	.when("/",
	{
		templateUrl:"home.jsp",
		controller:'mainController'
	})
	.when("/about",
	{
		templateUrl:"about.jsp",
		controller:'aboutController'
	})
	.when("/blog",
	{
		templateUrl:"blogs.jsp",
		controller:'blogController'
	})
	.when("/contact",
	{
		templateUrl:"contact.jsp",
		controller:'contactController'
	});
	
});

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

letzChaat.controller('aboutController',function($scope,$http)		
		{
	  $http.get("http://localhost:8090/letzchaat/viewAllJobs")
	    .then(function (response) {$scope.names = response.data;
	    console.log("data:"+$scope.names);
	    $scope.applyForJob=function()
	    {
	    	console.log("apply for job");
	    }
	    });
		}
		);
letzChaat.controller('contactController',function($scope)		
		{
			$scope.message="you are in contact page";
		}
		);