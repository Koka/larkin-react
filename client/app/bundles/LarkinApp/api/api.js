export function isAuthenticated(token) {
  return fetch("/users/me")
    .then(me => me.ok)
    .catch(err => {
      console.error(err);
      return false;
    });
}

export function isUnauthenticated(token) {
  return isAuthenticated(token).then(bool => !bool);
}

export function getAuthToken(login, password) {
  return fetch('/knock/auth_token', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({auth: { login, password }})
  }).then(rs => rs.json().then(json => json.jwt), err => err);
}

export function getUser(token, id) {
  return fetch(`/users/${encodeURIComponent(id)}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  }).then(rs => rs.json(), err => err);
}
