import { html } from '../lib.js'

export function showInfo(ctx) {
    ctx.render(infoTemp())
}

const infoTemp = () => html`
    <section class="firstsection">
      <div class="box-main">
          <div class="firstHalf">
            <p class="description-text pink-flamingo-description">
            &emsp;&emsp;&emsp;Фламингото обикновено стои на един крак, а другият е прибран под тялото. Причината за това поведение не е напълно разбрана. Една теория е, че стоенето на един крак позволява на птиците да запазят повече телесна топлина, като се има предвид, че те прекарват значително време в газене в студена вода. Поведението обаче се проявява и в топла вода и се наблюдава и при птици, които обикновено не стоят във вода. Алтернативна теория е, че стоенето на един крак намалява разхода на енергия за генериране на мускулно усилие за стоене и балансиране на един крак. Проучване върху трупове показа, че позата с един крак може да се задържи без никаква мускулна активност, докато живите фламинго демонстрират значително по-малко люлеене на тялото в поза с един крак. Освен че стоят във водата, фламингото може да тропа с ципестите си крака в тинята, за да разбърка храна от дъното.     
            </p>
          </div>

          <h1>Below here should be a big dynamic picture of a flamingo</h1>
      </div>
  </section>
`