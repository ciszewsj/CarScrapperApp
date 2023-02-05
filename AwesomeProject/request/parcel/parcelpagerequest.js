
export let parcelsPageRequest = (setParcels, setError, token) => {

    fetch('http://192.168.191.148:8080/api/parcel',
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
            console.log(response.status)
            if (response.status === 200) {
                response.json().then(json => {
                    setParcels(json)
                });
                setError();
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
            console.log("123")
            setError(e.toString());
        });
}
