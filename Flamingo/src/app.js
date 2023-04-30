import { page, render } from './lib.js'

import { showHome } from './views/homeView.js'
import { showInfo } from './views/infoView.js'
import { showLakeView } from './views/lakeView.js'
import { showAbout } from './views/aboutView.js'

const mainElement = document.getElementById('main-content')

page(decorateContext)

page('index.html', '/')
page('/', showHome)
page('/info', showInfo)
page('/areas', showHome)
page('/lake', showLakeView)
page('/about', showAbout)
page('*', '/')

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, mainElement)
    next()
}