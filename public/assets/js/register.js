//Allows the user to sign up and send their data to the database
async function registerHandler(event) {
  event.preventDefault();
  const username = document.querySelector('.register-name').value.trim();
  const email = document.querySelector('.register-email').value.trim();
  const password = document.querySelector('.register-password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
    }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#register-form').addEventListener('submit', registerHandler);


