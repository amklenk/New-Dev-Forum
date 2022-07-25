async function bugSubmitHandler(event) {
  event.preventDefault();

  const language = document.querySelector('input[name="post-title"]').value;
  const bug_photo = document.querySelector('input[name="post-url"]').value;
  const question = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      language,
      question
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#submit').addEventListener('submit', bugSubmitHandler);