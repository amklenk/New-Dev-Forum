//Allows the user to upvote on a bug and update the bug in the database
async function upvoteClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(id);
  const response = await fetch('/api/bugs/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      bug_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#upvote').addEventListener('click', upvoteClickHandler);
