import { ResponseObject, Statuses } from "./ResponseObject";

const URL = "http://192.168.191.148:8080";


export function register(form, setResponse) {
  fetch(URL + "/account/register", {
    "method": "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    "body": JSON.stringify(form),
  }).then(r => {
    if (r.status === 200) {
      setResponse(new ResponseObject(Statuses.SUCCESS), null);
    }
    console.log(r.status);
    setResponse(new ResponseObject(Statuses.FAILURE), null);

  }).catch(e => {
    setResponse(new ResponseObject(Statuses.FAILURE), null);
  });
}

export function getProductsCategories(token, setResponse) {
  fetch(URL + "/product/categories", {
    "method": "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then(r => {
    if (r.status !== 200) {
      setResponse(new ResponseObject(Statuses.FAILURE), null);
    }
    r.json().then(
      response => {
        console.log(response);
        setResponse(new ResponseObject(Statuses.SUCCESS, response));
      },
    );
  }).catch(e => {
    setResponse(new ResponseObject(Statuses.FAILURE), null);
  });
}

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
    if (r.status !== 200) {
      setResponse(new ResponseObject(Statuses.FAILURE), null);
    }
    r.json().then(
      response => {
        setResponse(new ResponseObject(Statuses.SUCCESS, response));
      },
    ).catch(e => {
      setResponse(new ResponseObject(Statuses.FAILURE), null);
    });
  }).catch(e => {
    setResponse(new ResponseObject(Statuses.FAILURE), null);
  });
}
