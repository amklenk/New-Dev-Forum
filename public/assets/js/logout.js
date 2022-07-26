//Function that handles logging out the user when they click "logout" in the nav
async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/homepage/");
  } else {
    alert(response.statusText);
  }
}

//Event listener
document.querySelector("#logout").addEventListener("click", logout);
