import { clearUserData, setUserData } from "../util.js";
import { post, get } from "./api.js";

const endPoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
};

export async function login(email, password) {
    const {_id, email: resultEmail ,accessToken} = await post(endPoints.login, { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function register(email, password) {
    const {_id, email: resultEmail ,accessToken} = await post(endPoints.register, { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function logout() {
    await get(endPoints.logout);

    clearUserData();
}