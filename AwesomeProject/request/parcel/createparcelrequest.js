
export let CreateParcelRequest = (fields, setErrorFields, setError, token) => {
    fetch('http://192.168.191.148:8080/api/parcel',
        {
            "mode": "cors",
            "method": "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            "body": JSON.stringify(
                {
                    name: fields.name,
                    email: fields.email,
                    password: fields.password,
                    postCode: fields.postCode,
                    city: fields.city,
                    street: fields.street,
                    houseNumber: fields.houseNumber
                }
            )

        }
    )
        .then(response => {
            console.log(response.status)
            if (response.status === 200) {
                response.json().then(
                    js => {
                        let err = {errorCode: response.status, errorMessage: "", createdParcelId: js.id};
                        setError(err);
                    }
                )
            } else if (response.status === 400) {
                response.json().then(json => {
                    setErrorFields(() => {
                        let errorFields = {}
                        for (let object in json) {
                            errorFields[json[object].field] = json[object].defaultMessage;
                        }
                        return errorFields;
                    })
                });
            } else {
                setError(...{errorCode: response.status, errorMessage: JSON.stringify(response), createdParcelId: 0})
            }
        })
        .catch(e => {
            let err = {errorCode: "", errorMessage: e.toString(), createdParcelId: 0};
            setError(err);
        });
}
