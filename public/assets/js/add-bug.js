// Allows the user to add a bug and send their data to the database
async function bugClickHandler(event) {
  console.log('click!');
  event.preventDefault();

  const formData = new FormData();

  const language = document.querySelector('#exampleFormControlSelect1').value;
  const bug_photo = document.querySelector('input[type=file]').files[0];
  const question = document.querySelector('#exampleFormControlTextarea1').value;

  const fileSize = bug_photo.size / 1024 / 1024;
  if (fileSize > 2) {
    alert('File size exceeds 2 MiB');
  } else {
    formData.append('bug_photo', bug_photo);
  }

  formData.append('language', language);

  formData.append('question', question);

  const response = await fetch(`/api/bugs`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#submit').addEventListener('click', bugClickHandler);
