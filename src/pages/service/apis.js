import { address } from './address'

function request(config) {
    config = Object.assign(
        {},
        {
            url: '',
            body: undefined,
            method: 'POST',
            hasCert: false,
            isJson: true,
            isBlob: false,
            hasHeader: true,
            token: null,
        },
        config
    );

    let elements = {
        method: config.method,
        body: config.body,
        headers: undefined,
    };
    if (config.hasHeader) {
        if (config.token) {
            elements.headers = {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                authorization: `Bearer ${config.token}`,
            };
        }
        else {
            elements.headers = {
                Accept: "application/json",
                "Content-Type": "applicaion/json;charset=UTF-8",
            };
        }
    }
    if (config.hasCert) {

    }
    return fetch(config.url, elements)
        .then((response) => {
            if (!response.ok) {
                let errr = new Error(response.statusText || "Something bas happen");
                error.response = response;
                throw error;
            }
            if (config.isBlob) return response.blob();
            if (config.isJson) return response.json();
            return response.text();
        })
        .then((jsonText) => {
            return jsonText;
        });
}

function Add(token, bady, fun) {
    request({
        url: address.serviceDomain,
        body: JSON.stringify(bady),
        token: localStorage.getItem("token"),
    })
}

export {
    Add,
    request,
};