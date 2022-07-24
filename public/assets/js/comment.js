function comment(bugID, comment) {
  //create new comment object with bug ID and comment properties

  var newComment = {};

  newComment.bugID = bugID;

  newComment.comment = comment;

  //add new comment object to the global 'comments' array

  comments.push(newComment);
}

//save changes to local storage

saveCommentsToLocalStorage();

//render all comments on the page (including the new one)

renderComments();

function saveCommentsToLocalStorage() {
  //convert the 'comments' array into a JSON string

  var commentsJSON = JSON.stringify(comments);

  //save the JSON string to local storage

  localStorage.setItem("comments", commentsJSON);
}

function renderComments() {
  //clear all existing comments from the page

  $("#comments").html("");

  //loop through each comment in the 'comments' array

  for (var i = 0; i < comments.length; i++) {
    //get current comment object from array

    var currentComment = comments;

    //generate HTML for current comment

    var commentHTML = '<div class="comment">';

    commentHTML += "<p>" + currentComment.comment + "</p>";

    commentHTML += "</div>";

    //add generated HTML to the page

    $("#comments").append(commentHTML);
  }
} //end of renderComments() function

//create a global variable to store all comments in

var comments = [];

//load any existing comments from local storage when the page loads

function loadCommentsFromLocalStorage() {
  //get the stringified version of the 'comments' array from local storage

  var commentsJSON = localStorage.getItem("comments");

  //convert the string back into an array (if it exists)

  if (commentsJSON) {
    comments = JSON.parse(commentsJSON);
  }
}

//run the 'loadCommentsFromLocalStorage()' function when the page loads

$(document).ready(function () {
  loadCommentsFromLocalStorage();

  renderComments();
});

//listen for form submit and call 'comment()' function

$("form").submit(function (event) {
  //prevent page refresh on form submit

  event.preventDefault();

  //get values of inputs

  var bugID = $("input:text").val();

  var comment = $("textarea").val();

  //call 'comment()' function and pass in input values as arguments

  comment(bugID, comment);
}); //end of form submit listener*/}>

saveCommentsToLocalStorage();

renderComments();

loadCommentsFromLocalStorage();

renderComments();
