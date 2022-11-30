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