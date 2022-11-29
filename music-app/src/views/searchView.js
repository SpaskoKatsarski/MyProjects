import { html, nothing } from "../lib.js";
import { getAlbumsByQuery } from "../api/data.js";

const searchTemp = (isClicked, handler, albums, hasUser) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>
    
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button @click=${handler} class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
        <div class="search-result">
    ${isClicked ? 
        albums.length > 0 ? html`
                ${albums.map(a => createAlbumCard(a, hasUser))}
            ` : 
        html`<p class="no-result">No result.</p>`
    : nothing}
    </div>
    </section>`;

const createAlbumCard = (album, hasUser) => html`
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
`

export function showSearch(ctx) {
    ctx.render(searchTemp(false, onSearch));

    async function onSearch(e) {
        const query = document.getElementById('search-input').value;

        if (!query) {
            return alert('Enter text!');
        }

        const albums = await getAlbumsByQuery(query);
        ctx.render(searchTemp(true, onSearch, albums, !!ctx.user));
    }
}