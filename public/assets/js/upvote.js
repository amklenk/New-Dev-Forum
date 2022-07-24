function upvoteBug(bugID) {
  //increase the vote count for the bug post by 1

  //update the totalVoteCount for the bug post in the global 'votes' array

  votes.push(1);

  //save changes to local storage

  saveUpvotesToLocalStorage();
}

//save changes to local storage

function saveUpvotesToLocalStorage() {
  //convert the 'votes' array into a JSON string

  var votesJSON = JSON.stringify(votes);

  //save the JSON string to local storage

  localStorage.setItem("votes", votesJSON);
}

function renderUpvotes() {
  //clear all existing upvotes from the page

  $("#upvotes").html("");

  //loop through each vote in the 'votes' array

  for (var i = 0; i < votes.length; i++) {
    //get current vote object from array

    var currentVote = votes;

    //generate HTML for current vote

    var voteHTML = '<div class="vote">';

    voteHTML += "<p>" + currentVote.upvote + "</p>";

    voteHTML += "</div>";

    //add generated HTML to the page

    $("#upvotes").append(voteHTML);
  }
}

upvoteBug(bugID);

saveUpvotesToLocalStorage();

renderUpvotes();
