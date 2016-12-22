var likes=0;
var letzChaat=angular.module("letzChaat",['ngRoute']);
letzChaat.config(function($routeProvider) {
	$routeProvider
	.when("/",
	{
		templateUrl:"jsp/mainhome.jsp",
		controller:'mainController'
	})
	.when("/home",
	{
		templateUrl:"jsp/main.jsp",
		controller:'mainController'
	})
	.when("/viewBlogs",
	{
		templateUrl:"jsp/viewBlogs.jsp",
		controller:'viewBlogsController'
	})
	.when("/viewAllBlogs",
	{
		templateUrl:"jsp/viewBlogs.jsp",
		controller:'viewBlogsController'
	})
	.when("/login",
	{
		templateUrl:"jsp/login.jsp",
		controller:'loginController'
	})
	.when("/userForum",
	{
		templateUrl:"jsp/userForum.jsp",
		controller:'userForumController'
	})
	.when("/register",
	{
		templateUrl:"jsp/reg.jsp",
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
	}).
	when("/logout",
			{
				templateUrl:"jsp/logout.jsp",
				controller:'logoutController'
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
	.when("/admin",
	{
		templateUrl:"jsp/admin.jsp",
		controller:'adminController'
	})
	.when("/adminBlog",
	{
		templateUrl:"jsp/adminBlog.jsp",
		controller:'adminBlogController'
	})
	.when("/adminJobs",
	{
		templateUrl:"jsp/adminJobs.jsp",
		controller:'adminJobsController'
	})
	.when("/forum",
	{
		templateUrl:"jsp/forum.jsp",
		controller:'forumController'
	})
});

letzChaat.directive('fileModel', ['$parse', function ($parse) {
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

letzChaat.service('fileUpload', ['$http','$location', function ($http,$scope,$location) {
    this.uploadFileToUrl = function(file, uploadUrl,username,password,address,dob){
       var fd = new FormData();
       fd.append('file', file);
       fd.append('username',username);
       fd.append('password',password);
       fd.append('address',address);
       fd.append('dob',dob);
    console.log("fd:"+fd)
       $http.post(uploadUrl, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })
    
       .success(function(){
    	   $scope.message="registered! you can login now!!";
    	    $scope.username="";
    	    $scope.password="";
    	   
       })
    
       .error(function(){
       });
    
    
    
    
    
    
    
    }
 }]);
letzChaat.controller('registerController', ['$scope', 'fileUpload', function($scope,fileUpload){
    $scope.register = function(){
       var file = $scope.myFile;
       var username=$scope.username;
       var password=$scope.password;
       var address=$scope.address;
       var dob=$scope.dateofbirth;
       console.log("username"+username);
       console.log('file is ' );
       console.dir(file);
       var uploadUrl = "http://localhost:8080/letzchaat/fileUpload";
       fileUpload.uploadFileToUrl(file, uploadUrl,username,password,address,dob);
    };
 }]);

letzChaat.controller('viewBlogsController',function($scope,$rootScope,$http)		
		{   
	$rootScope.userForum=true;
	console.log("root scope likes:"+$rootScope.likes);
	console.log("this is viewblogs controller");
			$scope.message="you are in view blogs";
			$scope.like=function () {
				console.log("inside the like function");
			     likes=likes+1;	
			     console.log("no of likes:"+likes);
			     $rootScope.likes=likes;
			     console.log("root scope likes:"+$rootScope.likes);
			}
		        console.log("scope like:"+$scope.likes);
			 $http.get("http://localhost:8080/letzchaat/viewAllBlogs")
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
				 var res = $http.post('http://localhost:8080/letzchaat/addBlog',dataObj);
				 $http.get("http://localhost:8080/letzchaat/viewBlogs")
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
				$http.put('http://localhost:8080/letzchaat/updateBlog', dataObj);
				$http.get("http://localhost:8080/letzchaat/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("delete blog called");
				blog_id:$scope.blogDataToEdit.blog_id;
				console.log("blog_id:"+blogDataToEdit.blog_id);
				$http.delete('http://localhost:8080/letzchaat/deleteBlog/'+blogDataToEdit.blog_id);
				 $http.get("http://localhost:8080/letzchaat/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			}
			
			
			
		}

		);






letzChaat.controller('userForumController',function($scope,$rootScope)		
		{
	
	console.log("I am in forum controller");
	$scope.forum = function()
	{
	console.log("in forum controller");	

	var forum = 
		{
			title : $scope.title,
			category : $scope.category,
			description : $scope.description
		};

	var res  = $http.post("http://localhost:8080//letzchaat//addQuestion",forum);
	res.success(function(data,status,header,config)
			{
		console.log("status:"+status);
		var message;
		$scope.message="you are successfully created forum";
		$scope.title="";
		$scope.category="";
			$scope.description="";

			});
	}
	});


letzChaat.controller('mainController',function($scope)		
		{
			$scope.message="you are in main page";
			$scope.isBlog=true;	
		}
		);


letzChaat.controller('logoutController',function($scope,$rootScope)		
		{
			console.log("logout controller called");
			$rootScope.login=true;
			$rootScope.register=true;
			$rootScope.services=true;
			$rootScope.about=true;
			$rootScope.home=true;
			$rootScope.blog=false;
			$rootScope.forum=false;
			$rootScope.jobs=false;
			$rootScope.logout=false;
			$rootScope.chat=false;
			$rootScope.adminBlog=false;
			$rootScope.users=false;
		}
		);
letzChaat.controller('loginController',['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope)		
		{
	
             console.log(" login controller");
			 $scope.login=function()
			 {
				  var loginData={
						  username:$scope.username,	
							password:$scope.password,  
				  }
 $http.post('http://localhost:8080/letzchaat/authenticate',loginData).then(function (response) {
	 console.log("result   data:"+response.data);
	 var r=response.data.toString();
	 console.log("response:"+r);
     
		if(r==1)
			{
			$rootScope.blog=true;
			$rootScope.forum=true;
			$rootScope.jobs=true;
			$rootScope.login=false;
			$rootScope.register=false;
			$rootScope.services=false;
			$rootScope.about=false;
			$rootScope.home=false;
			$rootScope.logout=true;
			$rootScope.chat=true;
			$rootScope.viewBlogs=true;
			console.log('logout:'+$rootScope.logout);
			console.log("jaffa:"+response.data);
			/* var path="/userHome?username="+$scope.username;
			$location.path(path);*/
			console.log("uname from root scope:"+$rootScope.uname);
			$rootScope.uname=$scope.username;
			console.log("uname:"+$rootScope.uname);
			$location.path("/userHome");
			}
		if(r==0)
			{
			$scope.username="";
			$scope.password="";
			$scope.message="username/password incorrect";
			$location.path('/login');
			}
		if(r==2)
		{
			$rootScope.login=false;
			$rootScope.register=false;
			$rootScope.services=false;
			$rootScope.about=false;
			$rootScope.home=false;
			$rootScope.adminBlog=true;
			$rootScope.users=true;
			$rootScope.registeredUsers=true;
			$rootScope.logout=true;
			
		$location.path('/admin');
		}
		
 });  
			 }
		}]
		);

letzChaat.controller("adminJobsController",function($scope,$http,$rootScope)
{
	 $rootScope.login=false;
		$rootScope.register=false;
		$rootScope.services=false;
		$rootScope.about=false;
		$rootScope.home=false;
		$rootScope.adminBlog=true;
		$rootScope.users=true;
		$rootScope.registeredUsers=true;
		$rootScope.logout=true;
		$rootScope.adminJobs=true;
	  console.log("you are in adminjobs");
	  console.log("inside job controller");
	    $http.get("http://localhost:8080/letzchaat/viewAllJobs")
	    .then(function (response) {$scope.jobs = response.data;});
	   
});


letzChaat.controller("adminBlogController",function($scope,$http,$rootScope)	
		{	
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminBlog=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	console.log("i am in adminblog controller");
	console.log("after this");
			 $http.get("http://localhost:8080/letzchaat/viewBlogs")
			    .then(function (response) {
			    	
			    	$scope.blogs = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
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
				 var res = $http.post('http://localhost:8080/letzchaat/addBlog',dataObj);
				 $http.get("http://localhost:8080/letzchaat/viewBlogs")
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
				$http.put('http://localhost:8080/letzchaat/updateBlog', dataObj);
				$http.get("http://localhost:8080/letzchaat/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("delete blog called");
				blog_id:$scope.blogDataToEdit.blog_id;
				console.log("blog_id:"+blogDataToEdit.blog_id);
				$http['delete']('http://localhost:8080/letzchaat/deleteBlog/'+blogDataToEdit.blog_id);
				 $http.get("http://localhost:8080/letzchaat/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
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
letzChaat.controller("blogController",function($scope,$http,$rootScope)	
		{	
	             console.log("I am in blog controller");
	             console.log("username in blog controller:"+$rootScope.uname);
	
			 $http.get("http://localhost:8080/letzchaat/viewBlogs?name="+$rootScope.uname)
			    .then(function (response) {$scope.blogs = response.data;});
			
			$scope.newBlog={};
			console.log("In Controller");
			$scope.addBlog=function(newBlog)
			{				
				var dataObj = {
		    			blogTitle:$scope.blogTitle,
		    			blogDescription:$scope.blogDescription,
		 				category:$scope.category,
		 				postedBy:$rootScope.uname
		 		};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8080/letzchaat/addBlog',dataObj);
				 $http.get("http://localhost:8080/letzchaat/viewBlogs")
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
				$http.put('http://localhost:8080/letzchaat/updateBlog', dataObj);
				$http.get("http://localhost:8080/letzchaat/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("delete blog called");
				blog_id:$scope.blogDataToEdit.blog_id;
				console.log("blog_id:"+blogDataToEdit.blog_id);
				$http.delete('http://localhost:8080/letzchaat/deleteBlog/'+blogDataToEdit.blog_id);
				 $http.get("http://localhost:8080/letzchaat/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			}
			
			
			
		}

		);

letzChaat.controller('forumController',function($scope)		
		{
	
	console.log("I am in forum controller");
	$scope.forum = function()
	{
	console.log("in forum controller");	

	var forum = 
		{
			title : $scope.title,
			category : $scope.category,
			description : $scope.description
		};

	var res  = $http.post("http://localhost:8080//letzchaat//addQuestion",forum);
	res.success(function(data,status,header,config)
			{
		console.log("status:"+status);
		var message;
		$scope.message="you are successfully created forum";
		$scope.title="";
		$scope.category="";
			$scope.description="";

			});
	}
	});
letzChaat.controller('userHomeController',function($scope)		
		{
			$scope.message="you are in userhome page";
		}
		);

letzChaat.controller('adminController',function($scope)		
		{
			$scope.message="you are in admin controller";
		}
		);


letzChaat.controller('jobsController',function($scope,$http,$rootScope)		
		{
	console.log("inside job controller");
    $http.get("http://localhost:8080/letzchaat/viewAllJobs")
    .then(function (response) {$scope.jobs = response.data;});
    
    $scope.applyJob=function()
    {
    	 console.log("applyJob function called");
    	 var jobData={
           jobId:$scope.jobId,
    	 registrationNumber:$scope.registrationNumber,
    	 studentId:$scope.studentId,
    	 certificateNumber:$scope.certificateNumber	
    	 };
    	 var res = $http.post('http://localhost:8080/letzchaat/registerJob',jobData);
    }
		}
       
		);
