import { getAllAlbums } from "../api/data.js";
import { html, nothing } from "../lib.js";

export async function showCatalog(ctx) {
    const albums = await getAllAlbums();
    ctx.render(catalogTemp(albums, !!ctx.user));
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
        <img src=".${album.imgUrl}">
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