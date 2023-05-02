import { html } from "../lib.js";

import { showArea } from "./areaView.js";
import { showInfo } from "./infoView.js";
import { showLakeView } from "./lakeView.js";

export function showHome(ctx) {
    ctx.render(homeTemp(showInfoView, showAreaView, showLakeInfo))

    function showInfoView() {
        showInfo(ctx)
    }

    function showAreaView() {
        showArea(ctx)
    }

    function showLakeInfo() {
        showLakeView(ctx)
    }
}

const homeTemp = (showInfoView, showAreaView, showLakeInfo) => html`
    <section class="firstsection">
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big" id="pink-flamingo-text">
                  Розовото Фламинго
              </h1>
               
              <p class="text-small pink-flamingo-description">
                Розовото фламинго е птица от семейство Фламингови. Розовото фламинго живее край солени езера и морски лагуни. Храни се с планктон, червеи, миди, скариди, ларви на насекоми и други богати на каротиноиди храни. Благодарение на странната му извита човка, която влачи във водата, то може да прецежда и задържа микроорганизмите от плитките места.
              </p>

              <button style="--clr:#FF44CC" @click="${showInfoView}" class="custom-btn"><span>Научи още</span><i></i></button>

          </div>
      </div>
  </section>

  <section class="secondsection">
      <div class="box-main">
          <div class="secondHalf">
              <h1 class="text-big" id="areas-text">
                  Територии
              </h1>
              <p class="text-small">
                В Европа се среща в южна Франция и южна Испания. В Африка птицата е най-разпространена в Мароко, южен Тунис и Кения. Среща се и в Афганистан и северозападна Индия. Може да се види и в България целогодишно. През 2022 година, август в Бургаска област са преброени около три хиляди броя.
              </p>

              <button style="--clr:#39FF14" @click="${showAreaView}" class="custom-btn"><span>Разгледай</span><i></i></button>

          </div>
      </div>
  </section>

  <section class="section">
      <div class="paras">
          <h1 class="sectionTag text-big" id="lake-text">Езеро</h1>

          <p class="sectionSubTag text-small">
            Над 1600 розови фламингота откриха дом в Атанасовското езеро, съобщено от Българското дружество за защита на птиците. Това е максималната численост, която е преброявана по нашите географски ширини в последните 15 години.
          </p>

          <button style="--clr:#0FF0FC" @click="${showLakeInfo}" class="custom-btn"><span>Разгледай</span><i></i></button>

      </div>

  </section>
`