import { html } from "../lib.js";
import { getShoeById, updateShoe } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

export async function showEdit(ctx) {
    const shoe = await getShoeById(ctx.params.id);
    ctx.render(editTemp(shoe, createSubmitHandler(onPost)));

    async function onPost(data) {
        const { brand, model, imageUrl, release, designer, value } = data;

        if (!brand || !model || !imageUrl || !release || !designer || !value) {
            return alert('All fields are required!');
        }

        const id = shoe._id;

        await updateShoe(id, { brand, model, imageUrl, release, designer, value }, ctx.user);
        ctx.page.redirect(`/details/${id}`);
    }
}

const editTemp = (shoe, handler) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${handler} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoe.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoe.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoe.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoe.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoe.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoe.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

