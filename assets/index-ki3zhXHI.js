(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();function l(){const i=document.querySelector(".header__menu-button.dekstop-hidden"),d=document.querySelector(".header__menu"),a=`<svg xmlns="http://www.w3.org/2000/svg"
   width="36" height="36" viewBox="0 0 24 24">
            <path fill="#fff"
              d="M20 10.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0-4H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0 8H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0 4H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5" />
</svg>`,c=`<svg xmlns="http://www.w3.org/2000/svg"
   width="36" height="36" viewBox="0 0 24 24"><path fill="#fff" d="M13.93 11h-10a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 0 1.5m6.14-4h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0 8h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m-6.14 4h-10a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 0 1.5"/>
  </svg>`;i.addEventListener("click",()=>{d.classList.toggle("active"),i.innerHTML=d.classList.contains("active")?c:a})}const o=[{name:"portfolio",table:`   <table class="hero__table">
              <thead>
                <tr>
                  <th>Coin Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Date / Time</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                 <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                 <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                 <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                 <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                 <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                      <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                      <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                      <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                      <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                      <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                
              
              </tbody>

            </table>`},{name:"order",table:`   <table class="hero__table">
              <thead>
                <tr>
                  <th>Coin Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Date / Time</th>
                  <th>Action</th>
                  <th>Order Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
               <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
                    <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
               <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
                    <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
               <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
                    <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
                <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
                <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
                <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>Buy</td>
                  <td>Limit</td>
                  <td>Completed</td>
              </tr>
              </tbody>

            </table>`},{name:"history",table:`   <table class="hero__table">
              <thead>
                <tr>
                  <th>Coin Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Date / Time</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>

                    <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
              

                        <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                  <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>

                    <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
                <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>

                    <tr>
                  <td>
                    <div class="hero__table-item--coin">
                      <img src="./icons/bitcoin.svg" alt="bitcoin" width="32" height="32">Bitcoin / BTC
                    </div>
                  </td>
                  <td>₿ 1.00 BTC</td>
                  <td>₹ 28,247,35.05</td>
                  <td>20 Mar, 2022 <span class="header__table-item--date"> 14:20</span></td>
                  <td>₹ 28,247,35.05</td>
                  <td>Buy</td>
                </tr>
              
              
              </tbody>

            </table>`}];function n(i,d){const a=document.querySelector(".hero__wrapper");a.innerHTML=i[d].table,localStorage.setItem("tab",d)}function h(){const i=document.querySelectorAll(".hero__header-button");i.forEach((d,a)=>{d.addEventListener("click",()=>{i.forEach(c=>{c.classList.remove("active"),n(o,a)}),d.classList.add("active")})})}function b(i,d){i.forEach(a=>{a.classList.remove("active")}),i[d].classList.add("active")}let r=Number(localStorage.getItem("tab"))||0,m=document.querySelectorAll(".hero__header-button");l();h();n(o,r);b(m,r);
