export let parcelRequest = (id, setParcel, setError, token) => {
    fetch('http://192.168.191.148:8080/api/parcel/' + id,
        {
            "mode": "cors",
            "method": "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then(response => {
            if (response.status === 200) {
                response.json().then(json => {
                    setParcel(json);
                    let err = {code: 200, message: json.message}
                    setError(err)
                });
            } else if (response.status === 409) {
                response.json().then(json => {
                    let err = {code: 409, message: json.message}
                    setError(err)
                })
            } else {
                setError(() => {
                    return {
                        status: 400,
                        message: response
                    };
                });
            }
        })
        .catch(e => {
            setError(e.toString());
            setError(() => {
                return {
                    status: 400,
                    message: e.toString()
                };
            });
        })
}
