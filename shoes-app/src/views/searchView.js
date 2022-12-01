import { getShoeByQuery } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

export function showSearch(ctx) {
    ctx.render(searchTemp(createSubmitHandler(onSearch)));

    async function onSearch(data) {
        const query = data['search'];
        const result = await getShoeByQuery(query);
        ctx.render(searchTemp(onSearch, result, !!ctx.user))
    }
}

const shoeTemp = (shoe, hasUser) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="image" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    ${hasUser ? html`
    <a class="details-btn" href="/details/${shoe._id}">Details</a>
    ` : nothing}`;

const searchTemp = (handler, shoes = false, hasUser) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${handler} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    ${shoes ? html`
    ${shoes.length > 0 ? html`${shoes.map(s => shoeTemp(s, hasUser))}` : html`<h2>There are no results found.</h2>`}
    ` : nothing}
</section>
`;