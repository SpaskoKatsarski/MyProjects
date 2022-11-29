import { html } from "../lib.js";
import { getAlbumsByQuery } from "../api/data.js"
import { detailsTemp } from "./detailsView.js";
import { getUserData } from "../util.js";

export function showSearch(ctx) {
    ctx.render(searchTemp());
}

const searchTemp = () => html`
    <section id="searchPage">
        <h1>Search by Name</h1>
    
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button @click=${onSearch} class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
    
    </section>
    `;

const resultTemp = (albums, hasMatches, ownerId, onDelete) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>
    
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button @click=${onSearch} class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
    
        ${hasMatches ? html`
        <div class="search-result">
            ${albums.map(a => detailsTemp(a, ownerId === a._ownerId, onDelete))}
            <div>
                `: html`
                <div class="search-result">
                    <p class="no-result">No result.</p>
                    <div></div>
                    `}
    </section>
    `;

async function onSearch() {
    const albums = await getAlbumsByQuery(document.getElementById('search-input').value);
    const hasMatches = albums.length > 0;
    const ownerId = context.user._id;

    ctx.render(resultTemp(albums, hasMatches, ownerId, onDelete))
}

async function onDelete() {
    const option = confirm('Are you sure that you want to delete this item?');
    const user = await getUserData();
    debugger;

    if (option) {
        await deleteAlbum(album._id);
        context.page.redirect('/catalog')
    }
}