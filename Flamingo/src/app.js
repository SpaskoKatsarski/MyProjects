import { page, render } from './lib.js'
import { showArea } from './views/areaView.js'

import { showHome } from './views/homeView.js'
import { showInfo } from './views/infoView.js'
import { showLakeView } from './views/lakeView.js'

document.querySelector('button').addEventListener('click', onSearch)

const flamingoEl = document.getElementById('flamingo')
const areasEl = document.getElementById('areas')
const lakeEl = document.getElementById('lake')

//TODO: add a class which changes the color of the selected menu
flamingoEl.addEventListener('click', changeColorFlamingo)

const mainElement = document.getElementById('main-content')

page(decorateContext)

page('index.html', '/')
page('/', showHome)
page('/info', showInfo)
page('/areas', showArea)
page('/lake', showLakeView)
page('*', '/')

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, mainElement)
    next()
}

function changeColorFlamingo() {
    debugger;
    //make it with class not with the property 'style'
    document.getElementById('flamingoLi').style.color = 'red'

    // areasEl.classList.remove('active')
    // lakeEl.classList.remove('active')
}

function onSearch() {
    // Simulating a search functionality
    const inputText = document.getElementById('search').value
    document.getElementById('search').value = null
    
    if (inputText.toLowerCase().includes('фламинго')
        || inputText.toLowerCase().includes('flamingo')) {
        page('/info')
    } else if (inputText.toLowerCase().includes('територии')
                || inputText.toLowerCase().includes('areas')) {
        page('/areas')
    } else if (inputText.toLowerCase().includes('езеро')
                || inputText.toLowerCase().includes('lake')) {
        page('/lake')
    }
}