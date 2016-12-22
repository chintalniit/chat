<html><head>
<style>
.body
  {
    
    background-size: cover;
    padding: 0;
    margin: 0;
} 
.wrap
{
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
}

p.form-title
{
    font-family: 'Open Sans' , sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: #FFFFFF;
    margin-top: 5%;
    text-transform: uppercase;
    letter-spacing: 4px;
}
form
{
    width: 250px;
    margin: 0 auto;
}
form.login input[type="text"], form.login input[type="password"]
{
    width: 100%;
    margin: 0;
    padding: 5px 10px;
    background: 0;
    border: 0;
    border-bottom: 1px solid #FFFFFF;
    outline: 0;
    font-style: italic;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 5px;
    color: #FFFFFF;
    outline: 0;
}

form.login input[type="submit"]
{
    width: 100%;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 16px;
    outline: 0;
    cursor: pointer;
    letter-spacing: 1px;
}

form.login input[type="submit"]:hover
{
    transition: background-color 0.5s ease;
}

form.login .remember-forgot
{
    float: left;
    width: 100%;
    margin: 10px 0 0 0;
}
form.login .forgot-pass-content
{
    min-height: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}
form.login label, form.login a
{
    font-size: 12px;
    font-weight: 400;
    color: #FFFFFF;
}

form.login a
{
    transition: color 0.5s ease;
}

form.login a:hover
{
    color: #2ecc71;
}

.pr-wrap
{
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: none;
}

.show-pass-reset
{
    display: block !important;
}

.pass-reset
{
    margin: 0 auto;
    width: 250px;
    position: relative;
    margin-top: 22%;
    z-index: 999;
    background: #FFFFFF;
    padding: 20px 15px;
}

.pass-reset label
{
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 15px;
}

.pass-reset input[type="email"]
{
    width: 100%;
    margin: 5px 0 0 0;
    padding: 5px 10px;
    background: 0;
    border: 0;
    border-bottom: 1px solid #000000;
    outline: 0;
    font-style: italic;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 5px;
    color: #000000;
    outline: 0;
}

.pass-reset input[type="submit"]
{
    width: 100%;
    border: 0;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 10px;
    outline: 0;
    cursor: pointer;
    letter-spacing: 1px;
}

.pass-reset input[type="submit"]:hover
{
    transition: background-color 0.5s ease;
}
.posted-by
{
    position: absolute;
    bottom: 26px;
    margin: 0 auto;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.66);
    padding: 10px;
    left: 45%;
}
</style>

</head>




<body>
<div class="jumbotron text-center" style="background-image: url('images/black.jpg'); background-size: cover;">
	  <div class="wrapper">
    <form class="form-signin" name="registerForm" >       
      <center><h3 style="font-size: 40px;color:white;">Register Here</h3><br></center>
      {{message}}
      <input type="email" class="form-control" name="email" placeholder="email"  autofocus=""  ng-model="username" required/>
      <span  ng-show="registerForm.email.$error.required" style="color:white; font-family: cursive; font-size: small;">*emailid required</span>
       <span  ng-show="registerForm.email.$error.email" style="color:white; font-family: cursive; font-size: small;">not an email</span>
      <br>
      <input type="password" class="form-control" name="password" placeholder="Password"  ng-model="password" required/>
      <span  ng-show="registerForm.password.$error.required" style="color:white; font-family: cursive; font-size: small;">*password required</span>
      <br> 
        <input type="text" class="form-control" name="Address" placeholder="Address"   ng-model="address" required/>
        <span  ng-show="registerForm.Address.$error.required" style="color:white; font-family: cursive; font-size: small;">*address required</span>
        <br> 
          <input type="date" class="form-control" name="DateofBirth" placeholder="yyyy-MM-dd"  ng-model="dateofbirth" min="1990-01-01" max="2016-12-31" required/>
          <span  ng-show="registerForm.DateofBirth.$error.required" style="color:white; font-family: cursive; font-size: small;">*dob required</span>
          <span  ng-show="registerForm.DateofBirth.$error.date" style="color:white; font-family: cursive; font-size: small;">*dob required</span>
          <br>
             <input type = "file" file-model = "myFile"/><br>
             
      <button class="btn btn-lg btn-color-red btn-block" ng-click="register()">Register</button>   
    </form>
  </div>
</div>
</body>
</html>