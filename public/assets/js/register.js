function registerUser(username, password) {
  // check if the username is available

  if (usernameIsAvailable(username)) {
    // if the username is available, register the user

    register(username, password);
  } else {
    // if the username is not available, throw an error

    throw new Error("That username is already taken!");
  }
}

function usernameIsAvailable(username) {
  // check the database to see if the username is available
}

function register(username, password) {
  // add the user to the database
}
