
<div class="jumbotron text-center" style="background-image: url('images/1.jpg');">
	  <div class="wrapper">
    <form class="form-signin" name="registerForm" >       
      <center><h3 style="font-size: 40px">Register Here</h3><br></center>
      {{message}}
      <input type="email" class="form-control" name="email" placeholder="email"  autofocus=""  ng-model="username" required/>
      <span  ng-show="registerForm.email.$error.required" style="color:red; font-family: cursive; font-size: small;">*emailid required</span>
       <span  ng-show="registerForm.email.$error.email" style="color:red; font-family: cursive; font-size: small;">not an email</span>
      <br>
      <input type="password" class="form-control" name="password" placeholder="Password"  ng-model="password" required/>
      <span  ng-show="registerForm.password.$error.required" style="color:red; font-family: cursive; font-size: small;">*password required</span>
      <br> 
        <input type="text" class="form-control" name="Address" placeholder="Address"   ng-model="address" required/>
        <span  ng-show="registerForm.Address.$error.required" style="color:red; font-family: cursive; font-size: small;">*address required</span>
        <br> 
          <input type="date" class="form-control" name="DateofBirth" placeholder="yyyy-MM-dd"  ng-model="dateofbirth" min="1990-01-01" max="2016-12-31" required/>
          <span  ng-show="registerForm.DateofBirth.$error.required" style="color:red; font-family: cursive; font-size: small;">*dob required</span>
          <span  ng-show="registerForm.DateofBirth.$error.date" style="color:red; font-family: cursive; font-size: small;">*dob required</span>
          <br>
          <input type="file" ng-model="file"/> 
      <button class="btn btn-lg btn-primary btn-block" ng-click="register()">Register</button>   
    </form>
  </div>
</div>