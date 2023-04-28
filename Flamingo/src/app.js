import { render } from './lib.js'
import { page } from './lib.js'

import { showHome } from './views/homeView.js'

const mainElement = document.getElementById('main-content')

page(decorateContext)

page('index.html', '/')
page('/', showHome)

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, mainElement)
    next() 
}