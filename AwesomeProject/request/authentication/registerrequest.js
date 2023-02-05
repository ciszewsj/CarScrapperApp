export let RegisterRequest = (fields, setErrorFields, setError) => {
    fetch('http://192.168.191.148:8080/api/customer/register',
        {
            "mode": "cors",
            "method": "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify(
                {
                    postCode: fields.postCode,
                    city: fields.city,
                    street: fields.street,
                    houseNumber: fields.houseNumber,
                    name: fields.name,
                    email: fields.email,
                    password: fields.password
                }
            )

        }
    )
        .then(response => {
            let newError = () => {
                let error = {};
                error.status = response.status;
                return error;
            }
            if (response.status === 201) {
            } else if (response.status === 400) {
                response.json().then(
                    json => {
                        setErrorFields(() => {
                            let errorFields = {}
                            for (let object in json) {
                                errorFields[json[object].field] = json[object].defaultMessage;
                            }
                            return errorFields;
                        })
                    }
                )
            } else {
                response.json().then(
                    json => {
                        setError(response.status + " " + JSON.stringify(json));
                    }
                )
            }
            setError({
                ...newError()
            })
        })
        .catch(e => {
            setError(e.toString());
        });
}
