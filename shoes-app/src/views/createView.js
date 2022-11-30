import { addShoe } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

export function showCreate(ctx) {
    ctx.render(createTemp(createSubmitHandler(onCreate)));

    async function onCreate(data) {
        const { brand, model, imageUrl, release, designer, value } = data;

        if (!brand || !model || !imageUrl || !release || !designer || !value) {
            return alert('All fields are required!');
        }

        await addShoe({ brand, model, imageUrl, release, designer, value });
        ctx.page.redirect('/catalog');
    }
}

const createTemp = (handler) => html`
    <section id="create">
        <div class="form">
            <h2>Add item</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                <input type="text" name="model" id="shoe-model" placeholder="Model" />
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                <input type="text" name="value" id="shoe-value" placeholder="Value" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;