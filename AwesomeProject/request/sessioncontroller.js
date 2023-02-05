import jwt_decode from "jwt-decode";

export const addSession = (token) => {
    let name = "";
    let role = "";
    try {
        let decoded = jwt_decode(token);
        name = decoded.sub;
        role = decoded.role;

    } catch {
        token = "";

    }
    return{token: `${token}`, name: `${name}`, role: `${role}`};
}
