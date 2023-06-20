(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function r(a){let s=0;const o=n=>{s=n,a.innerHTML=`count is ${s}`};a.addEventListener("click",()=>o(s+1)),o(0)}document.querySelector("#app").innerHTML=`
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
`;r(document.querySelector("#counter"));
