import { html } from '../lib.js'

export function showArea(ctx) {
    ctx.render(areaViewTemp())
}

const areaViewTemp = () => html`
    <section class="secondsection">
        
      <div class="box-main">
          <div class="secondHalf">
              <p class="description-text">
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
                  &emsp;&emsp;&emsp;Най-характерните местообитания на фламингото са големи алкални или солени езера или естуарни лагуни, в които обикновено липсва растителност. Езерата могат да бъдат далеч навътре или близо до морето. Различни местообитания се използват от фламинго: мангрови блата, приливни равнини и пясъчни острови в приливната зона. Наличието или отсъствието на риба може да има голямо влияние върху използването на езерата от някои фламингота.  
              </p>
          </div>
      </div>

    </section>
`