const URL = "10.12.6.35:8080";

export function createConfig(token, form, setResponse) {
  fetch(URL + "/config", {
    "method": "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    "body": JSON.stringify(form),
  }).then(r => {

    console.log(r.status);
    r.json().then(
      response => {
        console.log(response);
      },
    );
  });
}
