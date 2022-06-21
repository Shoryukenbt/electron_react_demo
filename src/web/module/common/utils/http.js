function doFetch(method, url, data) {
    const options = {
        method,
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    return fetch(url, options).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        try {
            return response.json();
        } catch (e) {
            return response.text;
        }
    });
}

export function doGet(url) {
    return doFetch('GET', url);
}

export function doPost(url, data) {
    return doFetch('POST', url, data); 
}

export function doDelete(url) {
    return doFetch('DELETE', url); 
}

export function doPut(url, data) {
    return doFetch('PUT', url, data); 
}