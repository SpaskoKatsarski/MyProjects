import { getAllAlbums } from "../api/data.js";
import { html, nothing, until } from "../lib.js";

export async function showCatalog(ctx) {
    ctx.render(until(loadAlbums(), html`
    <div class="center">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>`));

    async function loadAlbums() {
        const albums = await getAllAlbums();
        const hasUser = !!ctx.user;

        return html`${catalogTemp(albums, hasUser)}`;
    }
}

const catalogTemp = (albums, hasUser) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albums.length > 0 ? html`
    ${albums.map(a => createAlbumTemp(a, hasUser))}
    ` : html`
    <p>No Albums in Catalog!</p>
    `}
</section>
`;

function createAlbumTemp(album, hasUser) {
    return html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${hasUser ? html`
            <div class="btn-group">
                <a href="/catalog/${album._id}" id="details">Details</a>
            </div>
            ` : nothing}
        </div>
    </div>
    `;
} 