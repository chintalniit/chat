<div>
    <hr>
    <h2>All Blogs</h2>
    <span class="clearfix"></span>
    </hr>
    <hr>
    </hr>
    <table class="table table-striped">
    <thead>
      <tr>
      <th>blog id</th>
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
         <th>PostedBy</th>
          <th>category</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="blog in blogs">
      <td>{{blog.blog_id}}</td>
        <td>{{blog.blogTitle}}</td>
        <td>{{blog.blogDescription}}</td>
        <td>{{blog.date}}</td>
        <td>{{blog.postedBy}}</td>
         <td>{{blog.category}}</td>
        <td><button type="button" class="btn btn-primary btn-sm "   ng-click="like()">Like</button></td> no of likes: {{likes}}
         <!-- <td><button type="button" class="btn btn-danger btn-sm "  ng-click="like()">Delete</button></td> -->
      </tr>
       </tbody>
  </table>
  </div>
    </div>