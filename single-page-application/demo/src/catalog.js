import { showDetailsView } from './details.js';

document.getElementById('recipe-list').addEventListener('click', openRecipe);
document.getElementById('catalog-link').addEventListener('click', showCatalogView);

export async function showCatalogView() {
    [...document.querySelectorAll('section')].forEach(s => s.style.display = 'none');

    const recipes = await getAllRecipes();

    document.getElementById('catalog-view').style.display = 'block';

    displayRecipes(recipes);
}

async function getAllRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes?select=' + encodeURIComponent('_id,name'));
    const recipes = await response.json();

    return recipes;
}

function displayRecipes(recipes) {
    const cards = recipes.map(createRecipeCard);

    const recipesFragment = document.createDocumentFragment();

    for (const card of cards) {
        recipesFragment.appendChild(card);
    }

    const list = document.getElementById('recipe-list');
    list.replaceChildren(recipesFragment);
}

function createRecipeCard(recipe) {
    const element = document.createElement('li');
    element.textContent = recipe.name;

    const link = document.createElement('a');
    link.href = 'javascript:void(0)';
    link.text = '[Details]';
    link.id = recipe._id;
    
    element.appendChild(link);

    return element;
}

function openRecipe(event) {
    //showDetails of the recipe if it has been called from 'A'
    if (event.target.tagName == 'A') {
        event.preventDefault();
        const id = event.target.id;
        showDetailsView(id);
    }
}