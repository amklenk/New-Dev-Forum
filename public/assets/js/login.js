function loginHandler(event) {
    event.preventDefault();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    if(email && password){
        const response = await fetch("/api/users/login", {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {"Content-Type": "application.json"}
        });

        if(response.ok){
            document.location.replace('/')
        } else{
            alert(response.statusText);
        }
        console.log(">>>>RESPONSE<<<<<",response)
    }
    console.log(">>>>RESPONSE<<<<<", response);
  }


async function registerHandler(event) {
  event.preventDefault();
  const username = document.querySelector("").value.trim();
  const email = document.querySelector("").value.trim();
  const password = document.querySelector("").value.trim();

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
      document.location.replace("/index/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".loginButton")
  .addEventListener("submit", loginHandler);

document
  .querySelector(".needs-validation")
  .addEventListener("submit", registerHandler);
