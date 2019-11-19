var loggedIn = false;

function authenticate() {
  var password = document.getElementById('password').value;
  
  loggedIn = login(password);
  status();
}

function login(password) {
    var storedPassword = '123';

    return password == storedPassword;
}

function status() {
  if(loggedIn) {
    console.log('You are in :)');
  } else {
    console.log('You are not in :(');
  }
}