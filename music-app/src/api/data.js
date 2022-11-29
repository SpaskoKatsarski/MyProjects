import { get, post, put, del } from './api.js';

//************* create application service *************
const endponts = {
    'albums': '/data/albums'
};

export async function getAllAlbums() {
    const result = await get(endponts.albums);
    return result;
}

export async function addAlbum(data) {
    const result = await post(endponts.albums, data);
    return result;
}

export async function getAlbumById(id) {
    const result = await get(endponts.albums + '/' + id);
    return result;
}

export async function setAlbum(id, data) {
    const result = await put(endponts.albums + '/' + id, data);
    return result;
}

export async function deleteAlbum(id) {
    const result = await del(endponts.albums + '/' + id);
    return result;
}

export async function getAlbumsByQuery(query) {
    const result = await get(endponts.albums + `?where=name%20LIKE%20%22${query}%22`);
    return result;
}