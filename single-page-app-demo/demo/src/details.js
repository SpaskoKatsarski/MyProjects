export async function showDetailsView(id) {
    [...document.querySelectorAll('section')].forEach(s => s.style.display = 'none');

    const recipe = await getById(id);

    document.getElementById('details-view').style.display = 'block';

    displayRecipe(recipe);
}


async function getById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const data = await response.json();

    return data;
}

function displayRecipe(recipe) {
    document.getElementById('recipe-name').textContent = recipe.name;

    const ingredientsFragment = document.createDocumentFragment();

    for (const item of recipe.ingredients) {
        const li = document.createElement('li');
        li.textContent = item;
        ingredientsFragment.appendChild(li);
    }

    document.getElementById('recipe-ingredients').replaceChildren(ingredientsFragment);

    const stepsFragment = document.createDocumentFragment();

    for (const step of recipe.steps) {
        const li = document.createElement('li');
        li.textContent = step;
        stepsFragment.appendChild(li);
    }

    document.getElementById('recipe-steps').replaceChildren(stepsFragment);
}