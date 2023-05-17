import { ResponseObject, Statuses } from "./ResponseObject";

const URL = "http://192.168.191.148:9000";

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
    setResponse(new ResponseObject(Statuses.FAILURE), null);

  }).catch(e => {
    setResponse(new ResponseObject(Statuses.FAILURE), null);
  });
}

export function getProductsCategories(token, setResponse) {
  fetch(URL + "/product/categories", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        setResponse(new ResponseObject(Statuses.FAILURE), null);
      } else {
        response.json().then((data) => {
          setResponse(new ResponseObject(Statuses.SUCCESS, data));
        }).catch((error) => {
          setResponse(new ResponseObject(Statuses.FAILURE), null);
        });
      }
    })
    .catch((error) => {
      setResponse(new ResponseObject(Statuses.FAILURE), null);
    });
}

export function getConfig(id, token, setResponse) {
  fetch(URL + "/config/" + id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        setResponse(new ResponseObject(Statuses.FAILURE), null);
      } else {
        response.json().then((data) => {
          setResponse({ ...new ResponseObject(Statuses.SUCCESS, data) });
        }).catch((error) => {
          setResponse(new ResponseObject(Statuses.FAILURE), null);
        });
      }
    })
    .catch((error) => {
      setResponse(new ResponseObject(Statuses.FAILURE), null);
    });
}

export function deleteConfig(id, token, setResponse) {
  fetch(URL + "/config/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        setResponse(new ResponseObject(Statuses.FAILURE), null);
      } else {
        setResponse({ ...new ResponseObject(Statuses.SUCCESS, null) });
      }
    })
    .catch((error) => {
      setResponse(new ResponseObject(Statuses.FAILURE), null);
    });
}

export function getConfigList(token, setResponse) {
  fetch(URL + "/config", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        setResponse(new ResponseObject(Statuses.FAILURE), null);
      } else {
        response.json().then((data) => {
          setResponse(new ResponseObject(Statuses.SUCCESS, data));
        }).catch((error) => {
          setResponse(new ResponseObject(Statuses.FAILURE), null);
        });
      }
    })
    .catch((error) => {
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
    console.log("STATUS ??? ", r.status);
    if (r.status !== 200) {
      setResponse(new ResponseObject(Statuses.FAILURE), null);
    } else {
      r.json().then(
        response => {
          setResponse(new ResponseObject(Statuses.SUCCESS, response));
        },
      ).catch(e => {
        setResponse(new ResponseObject(Statuses.FAILURE), null);
      });
    }
  }).catch(e => {
    setResponse(new ResponseObject(Statuses.FAILURE), null);
  });
}

export function updateConfig(id, token, form, setResponse) {
  fetch(URL + "/config/" + id, {
    "method": "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    "body": JSON.stringify(form),
  }).then(r => {
    console.log("STATUS ??? ", r.status);

    if (r.status !== 200) {
      setResponse(new ResponseObject(Statuses.FAILURE), null);

    } else {
      r.json().then(
        response => {
          setResponse(new ResponseObject(Statuses.SUCCESS, response));
        },
      ).catch(e => {
        setResponse(new ResponseObject(Statuses.FAILURE), null);
      });
    }
  }).catch(e => {
    setResponse(new ResponseObject(Statuses.FAILURE), null);
  });
}
