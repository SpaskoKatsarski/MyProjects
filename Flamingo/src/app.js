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
    //To be impelented
    console.log('Searching...')
}