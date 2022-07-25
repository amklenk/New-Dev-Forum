function addBug(title, description, category) {
  //create new bug post object with title, description, and category properties

  var newBug = {};

  newBug.title = title;

  newBug.description = description;

  newBug.category = category;

  //add new bug post object to the global 'bugs' array

  bugs.push(newBug);

  //save changes to local storage

  saveBugsToLocalStorage();

  //render all bugs on the page (including the new one)

  renderBugs();
}

function saveBugsToLocalStorage() {
  //convert the 'bugs' array into a JSON string

  var bugsJSON = JSON.stringify(bugs);

  //save the JSON string to local storage

  localStorage.setItem("bugs", bugsJSON);
}

function renderBugs() {
  //clear all existing bug posts from the page

  $("#bugs").html("");

  //loop through each bug in the 'bugs' array

  for (var i = 0; i < bugs.length; i++) {
    //get current bug object from array

    var currentBug = bugs;

    //generate HTML for current bug

    var bugHTML = '<div class="bug">';

    bugHTML += "<h3>" + currentBug.title + "</h3>";

    bugHTML += "<p>" + currentBug.description + "</p>";

    bugHTML += "<p>Category: " + currentBug.category + "</p>";

    bugHTML += "</div>";

    //add generated HTML to the page

    $("#bugs").append(bugHTML);
  }
}

//end of renderBugs() function

//create a global variable to store all bug posts in

var bugs = [];

//load any existing bugs from local storage when the page loads

function loadBugsFromLocalStorage() {
  //get the stringified version of the 'bugs' array from local storage

  var bugsJSON = localStorage.getItem("bugs");

  //convert the string back into an array (if it exists)

  if (bugsJSON) {
    bugs = JSON.parse(bugsJSON);
  }
}

//run the 'loadBugsFromLocalStorage()' function when the page loads

$(document).ready(function () {
  loadBugsFromLocalStorage();

  renderBugs();
});

//listen for form submit and call 'addBug()' function

$("form").submit(function (event) {
  //prevent page refresh on form submit

  event.preventDefault();

  //get values of inputs

  var title = $("input:text").val();

  var description = $("textarea").val();

  var category = $("select option:selected").val();

  //call 'addBug()' function and pass in input values as arguments

  addBug(title, description, category);
}); //end of form submit listener

//listen for 'clear storage' button click and call 'clearBugsFromLocalStorage()' function

$("button").click(function () {
  clearBugsFromLocalStorage();
});
