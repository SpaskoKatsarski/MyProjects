export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    return sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    return sessionStorage.removeItem('userData');
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data);
    }
}