export let changeParcelStatus = (parcelId, parcelStatus, setError, token) => {
    fetch('http://192.168.191.148:8080/api/admin/parcel',
        {
            "mode": "cors",
            "method": "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            "body": JSON.stringify(
                {
                    parcelId: parcelId,
                    parcelStatus: parcelStatus
                }
            )
        }
    )
        .then(response => {
            if (response.status === 200) {
                setError(...200);
            } else {
                setError(...400);
            }
        })
        .catch(e => {
            let err = {errorCode: "", errorMessage: e.toString(), createdParcelId: 0};
            setError(err);
        });
}
