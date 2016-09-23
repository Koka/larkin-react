export function isAuthenticated() {
  return fetch("/users/me")
    .then(me => me.ok)
    .catch(err => {
      console.error(err);
      return false;
    });
}

export function isUnauthenticated() {
  return isAuthenticated().then(bool => !bool);
}

export function login(login, password) {
  console.log(`LOGIN NOT IMPLEMENTED ${login} ${password}`)
}
