import { deleteShoe, getShoeById } from "../api/data.js";
import { html, nothing } from "../lib.js";

export async function showDetails(ctx) {
    const shoe = await getShoeById(ctx.params.id);
    const isOwner = ctx.user._id === shoe._ownerId;
    ctx.render(detailsTemp(shoe, isOwner, onDelete));

    async function onDelete() {
        await deleteShoe(shoe._id, ctx.user);
        ctx.page.redirect('/catalog');
    }
}

const detailsTemp = (shoe, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Show Details</p>
        <div id="img-wrapper">
            <img src=${shoe.imageUrl} alt="image" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        ${isOwner ? html`
        <div id="action-buttons">
            <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>
        ` : nothing}
    </div>
</section>
`;