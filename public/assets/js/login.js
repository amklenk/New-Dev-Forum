function loginHandler(event) {
    event.preventDefault();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
//   if email and password 
    if(email && password){
        const response = await fetch("/assets/login", {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {"Content-Type": "application.json"}
        });
  
        if(response.ok){
            document.location.replace('/index.html')
        } else{
            alert(response.statusText);
        }
        console.log(">>>>RESPONSE<<<<<",response)
    }
  }
  document
    .querySelector(".btn-primary")
    .addEventListener("submit", loginHandler);
  