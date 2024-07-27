import borscht from "./borscht.png";
import muttonCurry from "./muttonCurry.png";
import pigeon from "./pigeon.png";
const menu = document.createElement("div");
menu.innerHTML = ` <div class="menu-page">
        <div class="menu">
          <div class="dish">
            <img src=${pigeon} alt="" />
            <div class="text">
              <h1>Golubev Pigeon Cake</h1>
              <p class="text">
                Behold the signature dish of Anton's Big Beautiful Bakery, the
                PIGEON HEAD CAKE! This dish is the the pride of the Golubev
                family, passed down through the eons to the eldest son.
              </p>
            </div>
          </div>
          <div class="dish">
            <img src=${borscht} alt="" />
            <div class="text">
              <h1>BBC Borscht</h1>
              <p class="text">
                If you are allergic to pigeons you can try our delightful and
                delectable borscht. Is it a cake? Is it a soup? You have to buy
                it to find out. Try to guess the secret ingredient!
                <span>
                  *Anton's BBC is not responsible nor liable for any emotional,
                  physical, or spiritual harm upon consuming the Borscht
                  processed person food®
                </span>
              </p>
            </div>
          </div>
          <div class="dish">
            <img src=${muttonCurry} alt="" />
            <div class="text">
              <h1>Soph's Mutton Curry</h1>
              <p class="text">
                We stuffed an entire human dressed up as a sheep in here!!!
                What's not to like??? They enjoyed it!
              </p>
            </div>
          </div>
        </div>
      </div>`;

export default menu;
