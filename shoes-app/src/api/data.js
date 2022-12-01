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

export async function updateShoe(id, data) {
    const result = await put(endpoints.shoes + '/' + id, data);
    return result;
}

export async function deleteShoe(id) {
    const result = await del(endpoints.shoes + '/' + id);
    return result;
}