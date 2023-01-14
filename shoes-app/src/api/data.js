import { get, post, put, del } from './api.js';

const endpoints = {
    'shoes': '/data/shoes'
};

//************* create application service *************
export async function getAllShoes() {
    const shoes = await get(endpoints.shoes);
    return shoes;
}

export async function addShoe(data) {
    const result = await post(endpoints.shoes, data);
    return result;
}

export async function getShoeById(id) {
    const shoe = await get(endpoints.shoes + '/' + id);
    return shoe;
}

export async function updateShoe(id, data, user) {
    const result = await put(endpoints.shoes + '/' + id, data, user);
    return result;
}

export async function deleteShoe(id, user) {
    const result = await del(endpoints.shoes + '/' + id, user);
    return result;
}

export async function getShoeByQuery(query) {
    const result = await get(endpoints.shoes + `?where=brand%20LIKE%20%22${query}%22`);
    return result;
}