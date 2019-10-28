export const handleResponse = response => {
    return response.json().then(data => {
        return response.ok ? data : Promise.reject(data);
    });
}