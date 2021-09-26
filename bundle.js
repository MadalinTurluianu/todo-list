(()=>{"use strict";var n={821:(n,e,t)=>{t.d(e,{Z:()=>a});var i=t(645),r=t.n(i)()((function(n){return n[1]}));r.push([n.id,'@keyframes grow {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 6rem;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes fade-in-down {\n  0% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n}\n@keyframes fade-in-right {\n  0% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n}\n@keyframes fade-in-left {\n  0% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n}\n* {\n  box-sizing: border-box;\n  font-family: "Rubik";\n  color: #6743bb;\n}\n\n.inactive {\n  display: none !important;\n}\n\n.flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.high-priority {\n  background-color: rgba(255, 255, 255, 0.603) !important;\n  background-image: linear-gradient(-45deg, rgba(248, 54, 0, 0.267), rgba(249, 213, 35, 0.514)) !important;\n}\n\noption {\n  cursor: pointer;\n}\n\nbody {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  overflow-x: hidden;\n  background-image: linear-gradient(45deg, #b993d6, #8ca6db);\n}\n\n.backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n  animation: fade-in 1s;\n}\n\n.mobile-backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  animation: fade-in 1s;\n}\n\nbutton {\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  border-radius: 14px;\n  width: 5rem;\n  padding: 0.3rem;\n  font-size: 0.8rem;\n}\n\ninput,\nselect,\noption {\n  background-color: rgba(255, 255, 255, 0.603);\n}\n\nnav {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 1rem 0 1rem;\n  height: 8rem;\n}\n\nnav img {\n  min-width: 6rem;\n  width: 6rem;\n  margin-left: 1rem;\n}\n\n.mobile-menu {\n  display: none;\n}\n\n.nav-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  width: clamp(8rem, 80%, 25rem);\n  margin-top: 0.6rem;\n}\n\n.wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 14px;\n  transition: height;\n  width: 8rem;\n}\n\n.wrapper button {\n  background: transparent;\n  width: 8rem;\n}\n\n.filters-container,\n.add-project__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.603);\n  animation: grow 0.3s;\n  overflow: hidden;\n  width: 90%;\n}\n.filters-container button,\n.add-project__container button {\n  color: rgba(255, 255, 255, 0.877);\n}\n.filters-container .add-project_btn,\n.add-project__container .add-project_btn {\n  color: #6743bb;\n}\n\n.add-project__form {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.add-project__form input {\n  width: 90%;\n  margin: auto;\n}\n.add-project__form button {\n  color: #6743bb;\n}\n.add-project__form .buttons-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0.5rem 0;\n  width: 100%;\n}\n.add-project__form .buttons-container button {\n  width: 3rem;\n  padding: 0;\n  font-weight: normal;\n}\n\nmain {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 10rem;\n}\n\n.page-title__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.603);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.3rem;\n}\n.page-title__container h2 {\n  font-family: Pacifico;\n  color: rgba(255, 255, 255, 0.877);\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: normal;\n}\n.page-title__container .delete-project__btn {\n  background-color: #f01d5d;\n  color: rgba(255, 255, 255, 0.877);\n  position: absolute;\n  right: -6rem;\n  top: 1rem;\n  width: 4rem;\n}\n\n.add-task__btn {\n  width: 5rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 0.5rem 0;\n}\n\n.add-task__form {\n  position: absolute;\n  z-index: 50;\n  top: 30vh;\n  animation: fade-in-down 0.8s;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  row-gap: 0.8rem;\n  column-gap: 0.5rem;\n  width: clamp(10rem, 90%, 50rem);\n  box-shadow: -2px 2px rgba(255, 255, 255, 0.466);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 1rem;\n  border-radius: 15px;\n}\n\nmain form div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-column: 1/3;\n}\n\nmain form button {\n  background-color: transparent;\n  width: 5rem;\n  margin-top: 1rem;\n}\n\ninput,\nmain select {\n  height: 1.2rem;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n}\n\nlabel {\n  text-align: center;\n  font-size: 0.9rem;\n}\n\ninput:hover,\ninput:active,\ninput:focus,\nselect:hover,\nselect:active,\nselect:focus,\nbutton:hover,\nbutton:active,\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover {\n  color: #f01d5d !important;\n}\n\n.page-title__container button:hover {\n  color: #6743bb !important;\n}\n\n.list-container {\n  width: 100%;\n}\n\n.list-container ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style-type: none;\n  margin-block-start: 2rem;\n  margin-block-end: 2rem;\n  padding-inline-start: 0;\n  width: 100%;\n}\n\nli {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto auto;\n  grid-template-rows: 2rem 1.5rem;\n  grid-template-areas: "TITLE DATE" "DESCRIPTION DESCRIPTION";\n  width: clamp(10rem, 90%, 50rem);\n  margin: 0;\n  margin-bottom: 2rem;\n  padding: 0.5rem 1rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 20px;\n}\n\n.task-title {\n  grid-area: TITLE;\n}\n\n.task-description {\n  grid-area: DESCRIPTION;\n}\n\n.task-date {\n  grid-area: DATE;\n  font-size: 0.8rem;\n  margin-left: 0.8rem;\n}\n\n.delete-task__btn {\n  position: absolute;\n  right: 1.2rem;\n  top: center;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.603);\n  width: 1.3rem;\n  height: 1.3rem;\n  background-image: none;\n  background-color: transparent;\n}\n\nli h2,\nli p {\n  margin: 0;\n}\n\n@media (max-width: 600px) {\n  .mobile-menu {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    margin-top: 1.4rem;\n  }\n  .mobile-menu div {\n    width: 0.7rem;\n    height: 0.7rem;\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.774), rgba(255, 255, 255, 0.349));\n    border-radius: 50%;\n    margin-right: 0.3rem;\n  }\n\n  .nav-buttons {\n    animation: fade-in-left 0.8s;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    position: absolute;\n    z-index: 30;\n    top: 0;\n    right: 0;\n    width: clamp(10rem, 50vw, 40rem);\n    height: 100vh;\n    margin: 0;\n    background-color: rgba(255, 255, 255, 0.753);\n  }\n\n  .nav-buttons button {\n    font-size: 1.2rem;\n  }\n\n  .nav-buttons > button {\n    margin-top: 5rem;\n  }\n\n  .nav-buttons > div {\n    margin-top: 3rem;\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .nav-buttons button {\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .wrapper {\n    width: 80%;\n  }\n\n  .filters-container button,\n.projects-container button {\n    color: #9d5cc4;\n    font-size: 1.1rem;\n  }\n\n  .add-project__container button {\n    font-size: 1rem;\n  }\n\n  .filters-container,\n.add-project__container {\n    border-top: 1px solid rgba(103, 67, 187, 0.603);\n  }\n}\n',""]);const a=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var a={},o=[],l=0;l<n.length;l++){var d=n[l],c=i.base?d[0]+i.base:d[0],s=a[c]||0,u="".concat(c," ").concat(s);a[c]=s+1;var f=t(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==f?(e[f].references++,e[f].updater(m)):e.push({identifier:u,updater:r(m,i),references:1}),o.push(u)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=i(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var l=t(a[o]);e[l].references--}for(var d=i(n,r),c=0;c<a.length;c++){var s=t(a[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i=t.css,r=t.media,a=t.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),i=t(795),r=t.n(i),a=t(569),o=t.n(a),l=t(565),d=t.n(l),c=t(216),s=t.n(c),u=t(589),f=t.n(u),m=t(821),p={};p.styleTagTransform=f(),p.setAttributes=d(),p.insert=o().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=s(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;class b{constructor(n,e,t,i,r){this.title=n.value,this.description=e.value,this.dueDate=""===t.value?"":new Date(t.value).toString().split(" ").slice(1,4).join(" "),this.priority=i.value,this.project=r.value}}function g(n,e,t){n.querySelector("ul").removeChild(e.taskEl),t.splice(t.indexOf(e),1)}const h=document.querySelector(".backdrop"),y=document.querySelector(".mobile-backdrop"),v=(document.querySelector("nav"),document.querySelector(".mobile-menu")),x=document.querySelector(".mobile-menu div"),k=document.querySelector(".nav-buttons"),w=document.querySelector(".add-project_btn"),L=document.querySelector(".projects-container"),_=document.querySelector(".inbox"),S=document.querySelector(".filters"),E=document.querySelector(".projects"),j=document.querySelector(".filters-container"),C=document.querySelector(".daily-filter"),q=document.querySelector(".weekly-filter"),D=document.querySelector(".hp-filter"),T=document.querySelector(".add-project__container"),N=document.querySelector(".add-project__form"),O=N.querySelector("input"),I=N.querySelector("button[type='button']"),M=(document.querySelector("main"),document.querySelector(".add-task__btn")),z=(document.querySelector("ul"),document.querySelector(".list-container")),A=document.querySelector(".page-title__container"),$=document.createElement("h2");$.textContent="Inbox",A.appendChild($);const J=document.querySelector(".add-task__form"),P=document.querySelector("#form-title"),F=document.querySelector("#form-description"),H=document.querySelector("#form-due-date"),R=document.querySelector("#form-priority"),Z=document.querySelector("#belong-project"),X=document.querySelector(".add-task__form button[type='button']");R.addEventListener("change",(function(){"high"===R.value?R.classList.add("high-priority"):R.classList.remove("high-priority")})),M.addEventListener("click",(function(){J.classList.remove("inactive"),R.classList.remove("high-priority"),h.classList.remove("inactive"),document.querySelector("ul").classList.add("inactive"),j.classList.add("inactive"),T.classList.add("inactive")})),_.addEventListener("click",(function(){j.classList.add("inactive"),T.classList.add("inactive")})),S.addEventListener("click",(function(){j.classList.toggle("inactive"),T.classList.add("inactive")})),E.addEventListener("click",(function(){j.classList.add("inactive"),T.classList.toggle("inactive")}));for(let n of[...j.children])n.addEventListener("click",(function(){j.classList.add("inactive")}));function Y(){k.classList.add("flex"),v.classList.add("inactive"),x.classList.add("inactive"),y.classList.remove("inactive")}function U(){k.classList.remove("flex"),v.classList.remove("inactive"),x.classList.remove("inactive"),y.classList.add("inactive")}v.addEventListener("click",Y),x.addEventListener("click",Y);const W=[];function B(){J.classList.add("inactive"),P.value="",F.value="",H.value="",R.value="normal",Z.value="",h.classList.add("inactive"),document.querySelector("ul").classList.remove("inactive")}function G(){w.classList.remove("inactive"),N.classList.add("inactive"),O.value=""}function K(n,e=""){let t=function(n,e,t=""){const i=document.createElement("ul");let r,a=(new Date).toString().split(" ").slice(0,4).join(" ");return"inbox"===n?r=e:"high priority"===n?r=e.filter((n=>"high"===n.taskObj.priority)):"today"===n?r=e.filter((n=>new Date(n.taskObj.dueDate).toString().split(" ").slice(0,4).join(" ")===a)):"week"===n?r=e.filter((n=>{let e=new Date(n.taskObj.dueDate).toString().split(" ").slice(0,4),t=e[1],i=e[2],r=e[3],o=Number(a.split(" ")[2]),l=a.split(" ")[1],d=a.split(" ")[3],c=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(a.split(" ")[0]);const s={all:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],31:["Jan","Mar","May","Jul","Aug","Oct","Dec"],30:["Apr","Jun","Sep","Nov"],29:Number(d)%4==0?["Feb"]:[],28:Number(d)%4==0?[]:["Feb"]};for(let n=c;n<=c+6;n++){let e=o+(6-n),a=l,c=d;function u(){"Dec"===a?(a="Jan",c=(Number(c)+1).toString()):a=s.all[s.all.indexOf(a)+1]}function f(){"Jan"===a?(a="Dec",c=(Number(c)-1).toString()):a=s.all[s.all.indexOf(a)-1]}if(s[31].includes(a)&&e>31?(e-=31,u()):s[30].includes(a)&&e>30?(u(),e-=30):s[29].includes(a)&&e>29?(e-=29,u()):s[28].includes(a)&&e>28?(e-=28,u()):e<1?(f(),s[31].includes(a)?e=31+e:s[30].includes(a)?e=30+e:s[29].includes(a)?e=29+e:s[28].includes(a)&&(e=28+e)):e=e,`${Number(i)} ${t} ${r}`==`${e} ${a} ${c}`)return!0}})):"project"===n&&(r=e.filter((n=>t===n.taskObj.project))),r.map((n=>{i.appendChild(n.taskEl)})),i}(n,W,e);z.innerHTML="",z.appendChild(t),A.innerHTML="",A.appendChild($)}h.addEventListener("click",B),J.addEventListener("submit",(function(n){n.preventDefault();let e=function(n,e,t,i,r){const a=new b(n,e,t,i,r);let o=document.createElement("li"),l=document.createElement("h2");l.textContent=a.title;let d=document.createElement("p");d.textContent=a.description,d.className="task-description";let c=document.createElement("p"),s=new Date(a.dueDate);c.textContent=""===a.dueDate?"":`${s.getDate()>=10?s.getDate():`0${s.getDate()}`}-${s.getMonth()+1>=10?s.getMonth()+1:`0${s.getMonth()+1}`}-${s.getFullYear()}`,c.className="task-date","high"===a.priority&&o.classList.add("high-priority");let u=document.createElement("button");return u.className="delete-task__btn",o.appendChild(u),o.appendChild(l),o.appendChild(d),o.appendChild(c),{taskEl:o,taskObj:a}}(P,F,H,R,Z);e.taskEl.style.animation="fade-in-right 1s",function(n,e,t){n.querySelector("ul").appendChild(e.taskEl),t.push(e)}(z,e,W),B(),K("inbox"),$.textContent="Inbox",setTimeout((()=>{e.taskEl.style.animation=""}),1e3),[...e.taskEl.children].filter((n=>"delete-task__btn"===n.className))[0].addEventListener("click",g.bind(null,z,e,W))})),X.addEventListener("click",B),w.addEventListener("click",(function(){w.classList.add("inactive"),N.classList.remove("inactive")})),I.addEventListener("click",G),N.addEventListener("submit",(function(n){if(n.preventDefault(),""!==O.value.trim()){let n=function(n,e,t){let i=document.createElement("option");i.value=n,i.textContent=n,e.appendChild(i);let r=document.createElement("button");return r.textContent=n,t.appendChild(r),{option:i,button:r,name:n}}(O.value.trim(),Z,L);n.button.addEventListener("click",(function(){K("project",n.name),A.innerHTML="",A.appendChild($),$.textContent=n.name,T.classList.add("inactive");let e=document.createElement("button");e.className="delete-project__btn",e.textContent="Delete",e.addEventListener("click",(function(){!function(n,e,t,i){for(let t of e)t.taskObj.project===n&&e.splice(e.indexOf(t),1);let r=[...t.children].findIndex((e=>e.textContent===n));t.removeChild(t.children[r]);let a=[...i.children].findIndex((e=>e.textContent===n));i.removeChild(i.children[a])}(n.name,W,Z,L),K("inbox"),$.textContent="Inbox",A.remove(e)})),A.appendChild(e)}))}G()})),y.addEventListener("click",(function(){G(),U(),T.classList.add("inactive"),j.classList.add("inactive")})),_.addEventListener("click",(function(){K("inbox"),$.textContent="Inbox",U()})),D.addEventListener("click",(function(){K("high priority"),$.textContent="High priority",U()})),C.addEventListener("click",(function(){K("today"),$.textContent="Today",U()})),q.addEventListener("click",(function(){K("week"),$.textContent="This week",U()}))})()})();