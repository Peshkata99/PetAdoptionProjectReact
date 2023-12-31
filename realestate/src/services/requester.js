
const request = async (method, url, data,token ) => {
    const options = {};  
    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'Content-Type': 'application/json',
            };

            options.body = JSON.stringify(data)
        }
    }
    // handle no collection at start error
    if(token){
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };      
    }
    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }
    if(response.status === 404){
        return {};
    }
    if(response.status === 403 || response.status === 409 || response.status === 400){
        return await response.json()
    }


    const result = await response.json();

    if(!response.ok){
        throw result;
    }
    return result;
    
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');