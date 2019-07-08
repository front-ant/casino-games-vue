export const loadGames = () =>
  fetch("http://localhost:3000/games").then(res => res.json());

export const postUserData = (user, pw) =>
  fetch("http://localhost:3000/users", {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: "POST",
    body: JSON.stringify({
      name: user,
      password: pw
    })
  }).then(res => res.json());

export const getToken = () =>
  fetch("http://localhost:3000/users/1").then(resp => resp.json());
