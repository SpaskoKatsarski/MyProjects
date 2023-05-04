import { html } from '../lib.js'

export function showArea(ctx) {
    ctx.render(areaViewTemp())
}

const areaViewTemp = () => html`
    <section class="secondsection">
        
    <div class="box-main">
          <div class="secondHalf">
              <p class="text-small">
              &emsp;&emsp;&emsp;Всички фламинго се срещат в тропически и субтропични зони. Популациите на чилийски фламинго се срещат в централно Перу, двата бряга на Южна Южна Америка (главно през зимата), Аржентина, Уругвай, Парагвай, Перу, Боливия и Южна Бразилия. Има съобщения за изостанали на Фолкландските острови и Еквадор. Малкото фламинго е предимно африкански вид. Популациите се срещат в източна, югозападна и западна Африка. В допълнение, значителна популация гнезди в Индия. Закъсали могат да бъдат намерени чак на север до Южна Испания. Фламингото на Джеймс има най-ограничения ареал от всички видове фламинго. Срещат се в южно Перу, североизточно Чили, западна Боливия и северозападна Аржентина. Карибското фламинго се среща в Карибите (Куба, Бахамите, Юкатан, Търкс и Кайкос), островите Галапагос и северната част на крайбрежната Южна Америка.
              </p>
          </div>
      </div>

      <div class="wrapper">
        <div class="image-wrapper">
          <img class="info-flamingo-img" src="../imgs/flamingo-sea.jpg" /></div>
        </div>
      </div>

      <div class="box-main second-box-main">
          <div class="firstHalf">
            <p class="description-text ">
            &emsp;&emsp;&emsp;Младите фламингота се излюпват със сивкавочервено оперение, но възрастните варират от светлорозово до яркочервено поради водните бактерии и бета-каротина, получени от храната им. Добре охраненото здраво фламинго е с по-живи цветове, следователно е по-желан партньор; бяло или бледо фламинго обаче обикновено е нездравословно или недохранено. Фламинготата в плен са забележително изключение; те могат да станат бледорозови, ако не се хранят с каротин в нива като дивите.     
            </p>
          </div>
      </div>

  </section>
`