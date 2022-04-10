export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { Authorization: 'x-access-token ' + user.token };
  } else {
    return {};
  }
}
