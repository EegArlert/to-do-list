(()=>{"use strict";var n={496:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n:root {\n    font-family: \"Open Sans\", serif;\n    --font-size-big: 3rem;\n    --font-size-medium: 2rem;\n    --font-size-small: 1rem;\n    --color-main: #fffffff9;\n    --color-secondary: #dbdbdb;\n    --color-font-main: #000000;\n    --color-font-secondary: #3b3b3b;\n    --border-color-1: solid 1px #ff0000;\n    --border-color-2: solid 1px #ffee00;\n    --border-color-3: solid 1px #007bfd;\n    --border-color-4: solid 1px #19fd00;\n    --border-color-5: solid 1px #db00fd;\n}\n\nli {\n    display: inline;\n}\n\nbody {\n    border: var(--border-color-1);\n    display: flex;\n    flex-direction: column;\n    height: 95vh;\n    padding: 0 2rem;\n}\n\nheader {\n    border: var(--border-color-3);\n    text-align: center;\n    font-size: 3rem;\n    margin: 2rem 0;\n}\n\n#main-wrapper {\n    border: var(--border-color-2);\n    display: flex;\n    margin-bottom: 2rem;\n}\n\n#main-content {\n    border: var(--border-color-4);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 0 1 60%;\n}\n\n#content-top-bar {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: space-evenly;\n    margin-bottom: 3rem;\n}\n\n#content-top-bar button {\n    width: 150px;\n    height: 30px;\n    font-size: 1.2rem;\n}\n\n#content-sort {\n    display: flex;\n    align-items: center;\n}\n\n#content-sort h4 {\n    width: 4rem;\n    display: inline;\n}\n\n#content-sort #sort-input {\n    width: 15rem;\n    display: inline;\n}\n\n\n#list-content-event {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    row-gap: 10px;\n}\n\n.list-card-container {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border: solid 1px var(--border-color-1);\n    justify-items: center;\n    margin-bottom: 10px;\n}\n\n.list-card-container:nth-child(1) {\n    margin-bottom: 10px;\n}\n\n.event-delete-btn {\n    width: 20px;\n    height: 20px;\n}\n\n\n#display-content-wrapper {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.display-event {\n    width: 100%;\n    height: 95%;\n    margin-bottom: 20px;\n}\n\n.card-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: auto;\n}\n\n.card-container div {\n    display: inline;\n}\n\nform {\n    /* visibility: hidden; */\n    border-color: var();\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: repeat(7, 3rem);\n    align-self: center;\n    width: 40%;\n    row-gap: 1rem;\n    font-size: 1rem;\n}\n\n.button-container {\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#submit-btn,\n#cancel-btn {\n    width: 150px;\n    height: 40px;\n    font-size: 1.2rem;\n}",""]);const l=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],l=0;l<n.length;l++){var c=n[l],d=r.base?c[0]+r.base:c[0],s=i[d]||0,p="".concat(d," ").concat(s);i[d]=s+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var c=r(n,o),d=0;d<i.length;d++){var s=t(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}function r(n){return JSON.parse(localStorage.getItem(n))}function o(n,e,t){const r=document.createElement(n);return null===e||null===t?null===e?(r.id=t,r):(e.split(" ").forEach((n=>{r.classList.add(n)})),r):(e.split(" ").forEach((n=>{r.classList.add(n)})),r.id=t,r)}function i(n){return document.querySelector(n)}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var a=t(72),l=t.n(a),c=t(825),d=t.n(c),s=t(659),p=t.n(s),u=t(56),f=t.n(u),m=t(540),h=t.n(m),v=t(113),b=t.n(v),g=t(496),y={};y.styleTagTransform=b(),y.setAttributes=f(),y.insert=p().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=h(),l()(g.A,y),g.A&&g.A.locals&&g.A.locals;const x=document.querySelector(".button-container");localStorage.length>1&&(()=>{let n=1;(function(){const n=[];for(let e=1;e<localStorage.length;e++)n.push(r(e));return n})().forEach((e=>{const t=i("#list-content-event"),r=o("div","list-card-container content",`event-${n}`),a=o("span","event-input name",null);a.innerText=e.name,r.appendChild(a);const l=o("span","event-input description",null);l.innerText=e.description,r.appendChild(l);const c=o("span","event-input due-date",null);c.innerText=e.dueDate,r.appendChild(c);const d=o("span","event-input priority",null);d.innerText=e.priority,r.appendChild(d);const s=o("span","event-input difficulty",null);s.innerText=e.difficulty,r.appendChild(s);const p=o("span","event-input duration",null);p.innerText=e.duration,r.appendChild(p);const u=o("input","event-checkbox",null);u.type="checkbox",r.appendChild(u),t.appendChild(r),n++}))})(),x.addEventListener("click",(n=>{n.preventDefault();const e=function(){console.log("submitForm function invoked");const n=i("form"),e=i("#name").value,t=i("#description").value,r=i("#date").value,o=i('input[name="priority"]:checked').value,a=i('input[name="difficulty"]:checked').value,l=i('input[name="duration"]:checked').value;return function(n,e,t,r,o,i){localStorage.setItem(localStorage.length,function(n,e,t,r,o,i){const a={name:n,description:e,dueDate:t,priority:r,difficulty:o,duration:i};return JSON.stringify(a)}(n,e,t,r,o,i)),console.log("task has been added to the local storage")}(e,t,r,o,a,l),console.log(e),console.log(r),{form:n,name:e,description:t,dueDate:r,priority:o,difficulty:a,duration:l}}();console.log(localStorage.getItem(localStorage.length-2)),(()=>{const n=localStorage.length,e=r(n),t=i("#list-content-event"),a=o("div","list-card-container content",`event-${n}`),l=o("span","event-input name",null);l.innerText=e.name,a.appendChild(l);const c=o("span","event-input description",null);c.innerText=e.description,a.appendChild(c);const d=o("span","event-input due-date",null);d.innerText=e.dueDate,a.appendChild(d);const s=o("span","event-input priority",null);s.innerText=e.priority,a.appendChild(s);const p=o("span","event-input difficulty",null);p.innerText=e.difficulty,a.appendChild(p);const u=o("span","event-input duration",null);u.innerText=e.duration,a.appendChild(u);const f=o("input","event-checkbox",null);f.type="checkbox",a.appendChild(f),t.appendChild(a)})(),e.form.reset()}))})();