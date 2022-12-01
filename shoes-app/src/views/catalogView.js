import { getAllShoes } from "../api/data.js";
import { html, nothing } from "../lib.js";

export async function showCatalog(ctx) {
    const shoes = await getAllShoes();
    debugger;
    ctx.render(catalogTemp(shoes, !!ctx.user))
}

const catalogTemp = (shoes, hasUser) => html`
    <section id="dashboard">
        <h2>Collectibles</h2>
        ${shoes.length > 0 ?
        
        html`
        <ul class="card-wrapper">
            ${shoes.map(s => shoeTemp(s, hasUser))}
        </ul>` :

        html`
        <h2>There are no items added yet.</h2>
        `
        }
    </section>
`;

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
    ` : nothing}
</li>
`