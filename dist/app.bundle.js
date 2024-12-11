(()=>{"use strict";var n={496:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: \'\';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n:root {\n    font-family: "Open Sans", serif;\n    --font-size-big: 3rem;\n    --font-size-medium: 2rem;\n    --font-size-small: 1rem;\n    --color-main: #fffffff9;\n    --color-secondary: #fdfdfd;\n    --color-font-main: #000000;\n    --color-font-secondary: #3b3b3b;\n    --border-color-1: solid 1px #ff0000;\n    --border-color-2: solid 1px #ffee00;\n    --border-color-3: solid 1px #007bfd;\n    --border-color-4: solid 1px #19fd00;\n    --border-color-5: solid 1px #db00fd;\n    --grid-background-color: rgba(243, 243, 243, 1);\n}\n\nli {\n    display: inline;\n}\n\nhtml {\n    background-color: var(--color-font-secondary);\n    margin: 0 2rem;\n}\n\nbody {\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin: 3rem 2rem;\n    padding: 0.5rem 2rem;\n    background-color: var(--color-secondary);\n    color: var(--color-font-main);\n}\n\nheader {\n    text-align: center;\n    font-size: 2.4rem;\n    margin: 1rem 0;\n    padding: 1rem;\n}\n\nheader.blur.active {\n    filter: blur(10px);\n    pointer-events: none;\n    user-select: none;\n}\n\n#main-wrapper {\n    display: flex;\n    width: 100%;\n    margin-bottom: 1rem;\n}\n\n#main-wrapper.active {\n    filter: blur(10px);\n    pointer-events: none;\n    user-select: none;\n}\n\n#main-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n    border: solid 1.5px black;\n    border-radius: 5px;\n}\n\n#content-top-bar {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 15%;\n    padding-top: 10px;\n    justify-content: space-evenly;\n}\n\n/* Top Bar button design start */\n#content-top-bar button {\n    appearance: none;\n    background-color: #FAFBFC;\n    border: 1px solid rgba(27, 31, 35, 0.25);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;\n    box-sizing: border-box;\n    color: #24292E;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n    list-style: none;\n    padding: 6px 16px;\n    position: relative;\n    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n    word-wrap: break-word;\n    margin: 0 1rem;\n}\n\n#content-top-bar button:hover {\n    background-color: #F3F4F6;\n    text-decoration: none;\n    transition-duration: 0.1s;\n}\n\n#content-top-bar button:active {\n    background-color: #EDEFF2;\n    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;\n    transition: none 0s;\n}\n\n\n\n#content-top-bar button:-webkit-details-marker {\n    display: none;\n}\n\n/* Top bar button design end */\n\n/* Top Rad button design start from @AbubakerSaeed96 */\n#content-sort {\n    display: flex;\n    align-items: center;\n}\n\n#content-sort h4 {\n    width: 4rem;\n    margin-right: 4px;\n    display: inline;\n}\n\n.rad-label {\n    display: flex;\n    align-items: center;\n\n    border-radius: 100px;\n    padding: 10px 13px;\n    margin: 5px 0;\n\n    cursor: pointer;\n    transition: .3s;\n}\n\n.rad-label:hover,\n.rad-label:focus-within {\n    background: hsla(0, 0%, 80%, .14);\n}\n\n.rad-input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 1px;\n    height: 1px;\n    opacity: 0;\n    z-index: -1;\n}\n\n.rad-design {\n    width: 16px;\n    height: 16px;\n    border-radius: 100px;\n\n    background: var(--color-font-secondary);\n    position: relative;\n}\n\n.rad-design::before {\n    content: \'\';\n\n    display: inline-block;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n\n    background: hsl(0, 0%, 90%);\n    transform: scale(1.1);\n    transition: .3s;\n}\n\n.rad-input:checked+.rad-design::before {\n    transform: scale(0);\n}\n\n.rad-text {\n    color: var(--color-font-main);\n    margin-left: 8px;\n    font-size: 1rem;\n    font-weight: 500;\n    transition: .3s;\n}\n\n.rad-input:checked~.rad-text {\n    color: hsl(0, 0%, 40%);\n}\n\n/* Rad button design end from @AbubakerSaeed96 */\n\n#list-content-event {\n    min-height: 50vh;\n    max-height: 60vh;\n    width: 100%;\n    display: grid;\n    grid-auto-rows: 50px;\n    overflow-y: scroll;\n    background-color: var(--grid-background-color);\n    gap: 1px;\n}\n\n#list-content-event>div {\n    background-color: #fff;\n}\n\n#list-content-event>div:hover {\n    background-color: #f6f6f6;\n}\n\n#list-content-event>div.active {\n    background-color: #d5e7f7;\n}\n\n.grid-label {\n    display: grid;\n    grid-template-columns: repeat(2, 3fr) repeat(5, 1fr);\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    margin: 5px 0 0 0;\n    padding: 10px 0;\n    border-top: solid 1px #000000;\n    border-bottom: solid 1px #000000;\n}\n\n.list-card-container {\n    display: grid;\n    grid-template-columns: repeat(2, 3fr) repeat(5, 1fr);\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    max-height: 50px;\n    border-bottom: sodid 1px black;\n    background-color: none;\n}\n\n\n.list-card-container.top {\n    border-bottom: solid 1px #000000;\n}\n\n.event-delete-btn {\n    width: 20px;\n    height: 20px;\n}\n\n/* Checkbox Styling start*/\n\n.checkbox-wrapper-40 {\n    --borderColor: #000;\n    --borderWidth: .125em;\n}\n\n.checkbox-wrapper-40 label {\n    display: block;\n    max-width: 100%;\n    margin: 0 auto;\n}\n\n.checkbox-wrapper-40 input[type=checkbox] {\n    -webkit-appearance: none;\n    appearance: none;\n    vertical-align: middle;\n    background: #fff;\n    font-size: 1.8em;\n    border-radius: 0.125em;\n    display: inline-block;\n    border: 1px solid var(--borderColor);\n    width: 1em;\n    height: 1em;\n    position: relative;\n}\n\n.checkbox-wrapper-40 input[type=checkbox]:before,\n.checkbox-wrapper-40 input[type=checkbox]:after {\n    content: "";\n    position: absolute;\n    background: var(--borderColor);\n    width: calc(var(--borderWidth) * 3);\n    height: var(--borderWidth);\n    top: 50%;\n    left: 10%;\n    transform-origin: left center;\n}\n\n.checkbox-wrapper-40 input[type=checkbox]:before {\n    transform: rotate(45deg) translate(calc(var(--borderWidth) / -2), calc(var(--borderWidth) / -2)) scaleX(0);\n    transition: transform 200ms ease-in 200ms;\n}\n\n.checkbox-wrapper-40 input[type=checkbox]:after {\n    width: calc(var(--borderWidth) * 5);\n    transform: rotate(-45deg) translateY(calc(var(--borderWidth) * 2)) scaleX(0);\n    transform-origin: left center;\n    transition: transform 200ms ease-in;\n}\n\n.checkbox-wrapper-40 input[type=checkbox]:checked:before {\n    transform: rotate(45deg) translate(calc(var(--borderWidth) / -2), calc(var(--borderWidth) / -2)) scaleX(1);\n    transition: transform 200ms ease-in;\n}\n\n.checkbox-wrapper-40 input[type=checkbox]:checked:after {\n    width: calc(var(--borderWidth) * 5);\n    transform: rotate(-45deg) translateY(calc(var(--borderWidth) * 2)) scaleX(1);\n    transition: transform 200ms ease-out 200ms;\n}\n\n.checkbox-wrapper-40 input[type=checkbox]:focus {\n    outline: calc(var(--borderWidth) / 2) dotted rgba(0, 0, 0, 0.25);\n}\n\n\n/* checkbox styling end */\n\n/* Style of displaying edit card starts */\n\n#display-edit-wrapper {\n    display: none;\n}\n\n#display-edit-wrapper.active {\n    width: 40%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.card-container {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    background-color: var(--grid-background-color);\n    gap: 5px;\n    align-items: center;\n    border: solid 1px var(--borderColor);\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: repeat(7, 1fr);\n}\n\n.card-container .focus-button-container {\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.focus-button-container .card-btn.finish-edit {\n    position: absolute;\n    justify-self: center;\n}\n\n.focus-button-container button {\n    width: 150px;\n    height: 50px;\n}\n\n.card-container .focus-label {\n    grid-column: 1 / 2;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.card-container .focus-input {\n    grid-column: 2 / 3;\n    width: 80%;\n    height: 80%;\n    font-size: 1.2rem;\n    padding-left: 0.5rem;\n}\n\n.card-container #focus-input-name {\n    grid-row: 1;\n}\n\n.card-container #focus-input-description {\n    grid-row: 2;\n}\n\n.card-container #focus-input-due-date {\n    grid-row: 3;\n}\n\n.card-container #focus-input-priority {\n    grid-row: 4;\n}\n\n.card-container #focus-input-difficulty {\n    grid-row: 5;\n}\n\n.card-container #focus-input-duration {\n    grid-row: 6;\n}\n\n/* Style of displaying edit card ends */\n\n\n/* Style of displaying finished task starts */\n\n#finished-task-wrapper {\n    width: 100%;\n    height: 50vh;\n    border: solid 1.5px #000;\n    border-radius: 5px;\n    box-sizing: border-box;\n    margin-bottom: 1rem;\n    overflow: hidden;\n}\n\n#finished-task-wrapper.blur.active {\n    filter: blur(10px);\n    pointer-events: none;\n    user-select: none;\n}\n\n#finished-task-wrapper h2 {\n    font-size: 2rem;\n    display: block;\n    text-align: center;\n    margin: 2rem;\n}\n\n#finished-task-content-grid {\n    min-height: 50vh;\n    max-height: 60vh;\n    width: 100%;\n    display: grid;\n    gap: 2px;\n    background-color: var(--grid-background-color);\n    grid-auto-rows: 50px;\n    overflow-y: scroll;\n    margin-bottom: 2rem;\n}\n\n#finished-task-content-grid>div {\n    background-color: var(--color-main);\n}\n\n/* Style of displaying finished task ends */\n\nform {\n    visibility: hidden;\n    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);\n    background-color: #fff;\n    border-radius: 20px;\n    padding: 50px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: repeat(7, 3rem);\n    align-self: center;\n    width: 40%;\n    height: auto;\n    row-gap: 1.6rem;\n    font-size: 1rem;\n    position: fixed;\n    transform: translate(0, 10%);\n    opacity: 0;\n}\n\nform.blur.active {\n    visibility: visible;\n    opacity: 1;\n}\n\nform.hidden {\n    display: none;\n}\n\nform h2 {\n    grid-column: 1 / 3;\n    font-size: 2rem;\n    justify-self: center;\n}\n\nform label {\n    align-self: center;\n    padding-left: 50px\n}\n\n.button-container {\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#submit-btn,\n#cancel-btn {\n    width: 150px;\n    height: 40px;\n    font-size: 1.2rem;\n}',""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var l=n[c],d=o.base?l[0]+o.base:l[0],s=i[d]||0,p="".concat(d," ").concat(s);i[d]=s+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var l=o(n,r),d=0;d<i.length;d++){var s=t(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}function o(n,e,t){const o=document.createElement(n);return null===e&&null===t?o:null===e||null===t?null===e?(o.id=t,o):(e.split(" ").forEach((n=>{o.classList.add(n)})),o):(e.split(" ").forEach((n=>{o.classList.add(n)})),o.id=t,o)}function r(n){return document.querySelector(n)}function i(n,e){n instanceof NodeList||Array.isArray(n)?n.forEach((n=>{n.classList.toggle(e)})):n instanceof HTMLElement?n.classList.toggle(e):console.error("Invalid input passed to toggle: ",n)}function a(n,e,t,o,r,i,a,c){console.log(n),localStorage.setItem(n,function(n,e,t,o,r,i,a,c){const l={taskId:n,name:e,description:t,dueDate:o,priority:r,difficulty:i,duration:a,finished:c};return JSON.stringify(l)}(n,e,t,o,r,i,a,c))}function c(n){return JSON.parse(localStorage.getItem(n))}function l(){let n=[],e=d();for(let t=0;t<e.length;t++)"debug"!==e[t]&&"undefined"!==e[t]&&n.push(c(e[t]));return n}function d(){const n=[];for(let e=0;e<localStorage.length;e++)"debug"!==localStorage.key(e)&&"undefined"!==localStorage.key(e)&&"honey:core-sdk:*"!=localStorage.key(e)&&n.push(localStorage.key(e));return n}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,d();const s=r("#list-content-event"),p=r("#finished-task-content-grid"),u=n=>{const e=c(n),t=o("div","list-card-container content",`event-${n}`),r=o("span","event-input name",null);r.innerText=e.name,t.appendChild(r);const i=o("span","event-input description",null);i.innerText=e.description,t.appendChild(i);const l=o("span","event-input due-date",null),d=e.dueDate.split("-"),u=new Intl.DateTimeFormat("en-US").format(new Date(d[0],d[1]-1,d[2]));l.innerText=u,t.appendChild(l);const f=o("span","event-input priority",null);f.innerText=e.priority,t.appendChild(f);const h=o("span","event-input difficulty",null);h.innerText=e.difficulty,t.appendChild(h);const b=o("span","event-input duration",null);b.innerText=e.duration,t.appendChild(b);const g=o("div","checkbox-wrapper-40",null),m=o("label",null,null);g.appendChild(m);const y=o("input","event-checkbox",null);y.type="checkbox",m.appendChild(y);const v=o("span","checkbox",null);m.appendChild(v),t.appendChild(g),1==e.finished&&(y.checked=!0),y.addEventListener("click",(t=>{t.stopPropagation(),y.checked?e.finished=!0:e.finished=!1,a(n,e.name,e.description,e.dueDate,e.priority,e.difficulty,e.duration,e.finished),E()})),y.checked?p.appendChild(t):s.appendChild(t)},f=()=>{h(),console.log(d()),d().forEach((n=>{u(n)})),k()},h=()=>{s.innerHTML="",p.innerHTML=""};function b(n,e,t){n.value=t,n.readOnly=!1,e.appendChild(n)}function g(n,e,t,o){n.innerText=t,n.htmlFor=o,e.appendChild(n)}Math.pow(10,8);const m=Symbol.for("constructDateFrom");function y(n,e){return o=n,"function"==typeof(t=e||n)?t(o):t&&"object"==typeof t&&m in t?t[m](o):t instanceof Date?new t.constructor(o):new Date(o);var t,o}function v(n){return"low"===n.priority?1:"medium"===n.priority?2:3}const x=document.querySelectorAll(".blur");function k(){document.querySelectorAll(".list-card-container").forEach((n=>{n.addEventListener("click",(()=>{i(n,"active")}))}))}function w(){console.log("active container checker function called");let n=[];const e=document.querySelectorAll(".list-card-container");return console.log(e),e.forEach((e=>{var t,o;e.classList.contains("active")&&(t=e,o=e=>{console.log("inserting key"),n.push(e)},console.log(t),o(t.id.split("-")[1]))})),n.length<=0?(console.log("there are no active key"),[]):n}function E(){const n=document.querySelectorAll(".list-card-container"),e=r("#finished-task-content-grid"),t=r("#list-content-event");n.forEach((n=>{let o=r(`#${n.id} .event-checkbox`);console.log(o),o.checked&&t.contains(n)?e.appendChild(n):!o.checked&&e.contains(n)&&t.appendChild(n)}))}var C=t(72),S=t.n(C),L=t(825),T=t.n(L),A=t(659),D=t.n(A),z=t(56),I=t.n(z),j=t(540),M=t.n(j),q=t(113),F=t.n(q),W=t(496),H={};H.styleTagTransform=F(),H.setAttributes=I(),H.insert=D().bind(null,"head"),H.domAPI=T(),H.insertStyleElement=M(),S()(W.A,H),W.A&&W.A.locals&&W.A.locals,console.log(d()),document.addEventListener("DOMContentLoaded",(()=>{r("#add-btn").addEventListener("click",(()=>{i(x,"active")})),r("#edit-btn").addEventListener("click",(()=>{const n=w();console.log("edit button clicked"),console.log(n),n.length<=0?alert("Please choose a task to edit"):n.length>1?alert("Please choose only one task to edit"):((n=>{const e=c(n),t=o("div","card-container",null);r("#display-edit-wrapper").appendChild(t),g(o("label","focus-label name",null),t,"Name","focus-input-name"),g(o("label","focus-label description",null),t,"Description","focus-input-description"),g(o("label","focus-label due-date",null),t,"Due Date","focus-input-due-date"),g(o("label","focus-label priority",null),t,"Priority","focus-input-priority"),g(o("label","focus-label difficulty",null),t,"Difficulty","focus-input-difficulty"),g(o("label","focus-label duration",null),t,"Duration","focus-input-duration");const i=o("input","focus-input","focus-input-name");b(i,t,e.name);const l=o("input","focus-input","focus-input-description");b(l,t,e.description);const d=o("input","focus-input","focus-input-due-date");b(d,t,e.dueDate);const s=o("input","focus-input","focus-input-priority");b(s,t,e.priority);const p=o("input","focus-input","focus-input-difficulty");b(p,t,e.difficulty);const u=o("input","focus-input","focus-input-duration");b(u,t,e.duration);const m=o("div","focus-button-container",null),y=o("button","card-submit-btn",null);m.appendChild(y),y.innerText="Submit";const v=o("button","card-cancel-btn",null);m.appendChild(v),v.innerText="Cancel",y.addEventListener("click",(()=>{a(e.taskId,i.value,l.value,d.value,s.value,p.value,u.value),t.innerHTML="",t.style.display="none",h(),f()})),v.addEventListener("click",(()=>{t.innerHTML="",t.style.display="none"})),t.appendChild(m)})(w()),i(r("#display-edit-wrapper"),"active"))})),r("#delete-btn").addEventListener("click",(()=>{console.log(w()),w().length<1||(w().forEach((n=>{!function(n){localStorage.removeItem(n),console.log(`task with key number ${n} has been removed`)}(n)})),f())})),function(){const n=r("#sort-date"),e=function(){const n=l().map(((n,e)=>({key:n.taskId,dueDate:n.dueDate})));let e=[];for(let e=n.length-2;e>=0;e--){const r=n[e];let i=e+1;for(;i<n.length&&(t=n[i].dueDate,o=r.dueDate,+y(t)<+y(o));)n[i-1]=n[i],i++;n[i-1]=r}var t,o;return n.forEach((n=>{e.push(n.key)})),e}();n.addEventListener("click",(()=>{h(),e.forEach((n=>{u(n)})),E(),k()}))}(),function(){const n=r("#sort-priority"),e=function(){const n=l().map((n=>({key:n.taskId,priority:v(n)})));console.log(n);let e=[];for(let e=1;e<n.length;e++){const t=n[e];let o=e-1;for(;o>=0&&t.priority<n[o].priority;)n[o+1]=n[o],o--;n[o+1]=t}return n.forEach((n=>{e.push(n.key)})),e}();n.addEventListener("click",(()=>{h(),e.forEach((n=>{u(n)})),E(),k()}))}(),function(){const n=r("#sort-duration"),e=function(){let n=[];const e=l();console.log(e);const t=e.map((n=>{return{key:n.taskId,duration:(e=n.duration,"long"==e?3:"medium"==e?2:1)};var e}));console.log(t);for(let n=1;n<t.length;n++){const e=t[n];let o=n-1;for(;o>=0&&e.duration<t[o].duration;)t[o+1]=t[o],o--;t[o+1]=e}return t.forEach((e=>{n.push(e.key)})),n}();n.addEventListener("click",(()=>{h(),e.forEach((n=>{u(n)})),E(),k()}))}(),f(),E()}))})();