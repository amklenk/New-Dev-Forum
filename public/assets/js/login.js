async function loginHandler(event) {
    event.preventDefault();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    console.log(email);
    console.log(password);

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
  }


async function registerHandler(event) {
  event.preventDefault();
  const username = document.querySelector(".register-name").value.trim();
  const email = document.querySelector(".register-email").value.trim();
  const password = document.querySelector(".register-password").value.trim();

  if (username && email && password) {
    const response = await fetch("./api/users", {
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-button")
  .addEventListener("click", loginHandler);

document
  .querySelector(".register-button")
  .addEventListener("submit", registerHandler);

var test = document.querySelector(".login-button")
test.onclick = function () { 
  console.log("LOGIN BUTTON CLICKED!!!!!!!!!!!!!");
}