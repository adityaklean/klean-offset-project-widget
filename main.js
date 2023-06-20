import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    
    <h3 style="text-align:left; margin: 1em">Choose your impact</h3>
    <div class="project" style="margin: 1em">
    <button class="btn"><i class="fa fa-home"></i></button>
    <button class="btn"><i class="fa-solid fa-hashtag"></i></button>
     <button class="btn"><i class="fa-sharp fa-solid fa-share-nodes"></i></button>
     <button class="btn"><i class="fa-solid fa-people-arrows"></i></button>
      </div>
    
    <div class="card">
    <div class="project">
    <span style="color:#666666; font-size: 12px"> Black Equity </span>
    <span style="color:#666666; font-size: 12px">Powered by Klean</span>
    </div>
    <p style="text-align: left; font-size: 16px">Fund 375 meals for dogs at a no-kill shelter in LA via Wags and Walks</p>
  </div>
  <div class="card">
  <div class="project">
  <span style="color:#666666; font-size: 12px"> Black Equity </span>
  <span style="color:#666666; font-size: 12px">Powered by Klean</span>
  </div>
  <p style="text-align: left;">Fund 375 meals for dogs at a no-kill shelter in LA via Wags and Walks</p>
</div>
<div class="card">
<div class="project">
<span style="color:#666666; font-size: 12px"> Black Equity </span>
<span style="color:#666666; font-size: 12px">Powered by Klean</span>
</div>
<p style="text-align: left;">Fund 375 meals for dogs at a no-kill shelter in LA via Wags and Walks</p>
</div>
   
  </div>
`

setupCounter(document.querySelector('#counter'))



{/* <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a> */}
{/* <div class="card">
      <button id="counter" type="button"></button>
    </div> */}



  //   <p class="read-the-docs">
  //   Click on the Vite logo to learn more
  // </p>