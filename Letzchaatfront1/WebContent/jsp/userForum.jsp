<link rel="stylesheet" href="css/login.css" />
<div class="jumbotron text-center" style="background-image: url('images/forum-seo.jpg') ; background-repeat: no-repeat; background-size: 1200px 800px; background-position: center;">
	  <div class="wrapper">
    <form class="form-signin" name="forumForm">       
      <center><h4 style="font-size: 40px ; font-family: cursive;">Hello Buddy!!!  Post your question</h4><br></center>
      <input type="text" class="form-control" name="questionTitle" placeholder="Question Title"  autofocus=""  ng-model="questionTitle" required/>
      <span  ng-show="forumForm.questionTitle.$error.required" style="color:red; font-family: cursive; font-size: small;">*question title required</span>
 
      <br>
   Select the category:  <select name="category" ng-model="category" class="form-control" required>
     <option>Technology</option>
      <option>Arts</option> 
       <option>Science</option>
        <option>Mathematics</option>
     </select>   <br> 
     <textarea class="form-control" name="questionDescription" placeholder="Enter Description" ng-model="questionDescription" required"></textarea><br>
     <span  ng-show="forumForm.questionDescription.$error.required" style="color:red; font-family: cursive; font-size: small;">*question description required</span>
     
      <button class="btn btn-lg btn-primary btn-block" ng-click="addQuestion()">Add Question to Forum</button>   
    </form>
  </div>
</div>