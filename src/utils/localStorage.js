export const getJSONValue = (key) => {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
}

export const setJSONValue = (key, value) => {
    const valueJSON = JSON.stringify(value);
    localStorage.setItem(key, valueJSON);
}

export const clearValue = (key) => {
    localStorage.setItem(key, null);
}