

export const reqHelper = {
    reqHeader,
    reqFormDataHeader,
    handleResponse,
};

function reqHeader() {
    const motionlaserToken = localStorage.getItem("motionlaser_token");
    let contentType = "application/json";
    if (motionlaserToken) {
        return {
            Authorization: "Bearer " + motionlaserToken,
            "Content-Type": contentType,
            "Accept": "application/json"
        };
    } else {
        return {
            "Content-Type": contentType,
            "Accept": "application/json"
        };
    }
}

function reqFormDataHeader() {
    const motionlaserToken = localStorage.getItem("esb_auth_token");
    if (motionlaserToken) {
        return {
            Authorization: "Bearer " + motionlaserToken,
            "Accept": "application/json",
        };
    } else {
        return {
            "Accept": "application/json"
        };
    }
}

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            return Promise.reject(data);
        }
        return data;
    });
}
