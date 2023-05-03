import { page, render } from './lib.js'
import { showArea } from './views/areaView.js'

import { showHome } from './views/homeView.js'
import { showInfo } from './views/infoView.js'
import { showLakeView } from './views/lakeView.js'

document.querySelector('button').addEventListener('click', onSearch)

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

function onSearch() {
    // Simulating a search functionality
    const inputText = document.getElementById('search').value
    document.getElementById('search').value = null
    
    if (inputText.toLowerCase() === 'фламинго' 
        || inputText.toLowerCase() === 'flamingo') {
        page('/info')
    } else if (inputText.toLowerCase() === 'територии' 
                || inputText.toLowerCase() === 'areas') {
        page('/areas')
    } else if (inputText.toLowerCase().includes('езеро')
                || inputText.toLowerCase().includes('lake')) {
        page('/lake')
    }
}