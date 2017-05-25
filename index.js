var commentNode = document.getElementById("comments");
commentNode.innerHTML = "<div class='some-class'>This is a comment and it is real long</div><p>" + someDynamicValue + "</p><p>" + someOtherValue
+ "</p>";


function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
}

//create template string
var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
//create template function
var templateFn = _.template(commentTemplate);
}

var commentsDiv = document.getElementById("comments");

 //execute template function with JSON object for the interpolated values
 var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

 //append rather than replace!
 commentsDiv.innerHTML += templateHTML;
}
