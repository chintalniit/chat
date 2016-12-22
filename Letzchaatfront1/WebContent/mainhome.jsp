<html ng-app="letzChaat" ng-init="likes=0;viewBlogs=false;blog=false;userForum=false;users=false;adminJobs=false;adminBlog=false;jobs=false;login=true;register=true;about=true;services=true;home=true;logout=false;chat=false;uname='data'">
<head>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />

  <!-- SPELLS -->
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="js/chintal.js"></script>
 <style>
  body {
     
     background-size: cover;
      font: 400 15px Lato, sans-serif;
      line-height: 1.8;
      color: #818181;
  }
 
  .navbar {
      margin-bottom: 0;
      background-color: #f4511e;
      z-index: 9999;
      border: 0;
      font-size: 12px !important;
      line-height: 1.42857143 !important;
      letter-spacing: 4px;
      border-radius: 0;
      font-family: Montserrat, sans-serif;
  }
  .navbar li a, .navbar .navbar-brand {
      color: #fff !important;
  }
  .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #f4511e !important;
      background-color: #fff !important;
  }
  .navbar-default .navbar-toggle {
      border-color: transparent;
      color: #fff !important;
  }
  footer .glyphicon {
      font-size: 20px;
      margin-bottom: 20px;
      color: #f4511e;
  }
  .slideanim {visibility:hidden;}
  .slide {
      animation-name: slide;
      -webkit-animation-name: slide;
      animation-duration: 1s;
      -webkit-animation-duration: 1s;
      visibility: visible;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
    }
  }
  @media screen and (max-width: 768px) {
    .col-sm-4 {
      text-align: center;
      margin: 25px 0;
    }
    .btn-lg {
        width: 100%;
        margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
        font-size: 150px;
    }
    
  }
  </style>
</head>



<body>
<nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">HangOuts</a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#home"><i class="fa fa-home" ng-show="home"></i> Home</a></li>
        <li><a href="#login" ng-show="login"><i class="fa fa-shield"></i> Login</a></li>
        <li><a href="#register" ng-show="register"><i class="fa fa-User"></i> Register</a></li>
        <li><a href="#about" ng-show="about"><i class="fa fa-comment"></i>About Us</a></li>
         <li><a href="#services" ng-show="services"><i class="fa fa-comment"></i>Services</a></li>
          <li><a href="#blog" ng-show="blog"><i class="fa fa-comment"></i>Blogs</a></li>
          <li><a href="#viewAllBlogs" ng-show="viewBlogs"><i class="fa fa-comment"></i>View Blogs</a></li>
             <li><a href="#jobs" ng-show="jobs"><i class="fa fa-comment"></i>Jobs</a></li>
             <li><a href="#logout" ng-show="logout"><i class="fa fa-comment"></i>logout</a></li>
              <li><a href="#chat" ng-show="chat"><i class="fa fa-comment"></i>chat</a></li>
              <li><a href="#adminBlog" ng-show="adminBlog"><i class="fa fa-comment"></i>Blogs</a></li>
              <li><a href="#users" ng-show="users"><i class="fa fa-comment"></i>Users</a></li>
               <li><a href="#adminJobs" ng-show="adminJobs"><i class="fa fa-comment"></i>Jobs</a></li>
               <li><a href="#userForum" ng-show="userForum"><i class="fa fa-comment"></i>Forum</a></li>
      </ul>
    </div>
  </nav>
  <div id="main">

    <!-- angular templating -->
		<!-- this is where content will be injected -->
    <div ng-view></div>
  </div>
</body>

</html>