(()=>{var e={781:(e,a,t)=>{var n={"./about.png":590,"./ketchup.png":67,"./menu.png":864,"./piroata.png":749,"./pizza.png":915,"./pizza/allcheese.png":1568,"./pizza/aloha.png":4365,"./pizza/argentina.png":217,"./pizza/bbq.png":8567,"./pizza/capriciosa.png":310,"./pizza/carnivora.png":4977,"./pizza/country.png":3128,"./pizza/diavola.png":5920,"./pizza/emptyPizza.png":8227,"./pizza/margherita.png":1820,"./pizza/mexico.png":681,"./pizza/prosciutto.png":9396,"./pizza/provence.png":184,"./pizza/quattrostagioni.png":3106,"./pizza/quattrostagionimix.png":7810,"./pizza/tonno.png":9516,"./pizzabg.png":466,"./toppings/ananas.png":5414,"./toppings/bacon.png":921,"./toppings/banana.png":2873,"./toppings/bbq.png":3269,"./toppings/bbqsauce.png":3456,"./toppings/camembert.png":5274,"./toppings/cheddar.png":3751,"./toppings/chicken.png":101,"./toppings/chiliflakes.png":169,"./toppings/corn.png":1916,"./toppings/creamcheese.png":2913,"./toppings/gradecheese.png":4358,"./toppings/ham.png":2498,"./toppings/jalapeno.png":8128,"./toppings/mincedmeat.png":6231,"./toppings/mozzarella.png":9217,"./toppings/mushroom.png":3024,"./toppings/nachos.png":2070,"./toppings/olives.png":5730,"./toppings/onion.png":8631,"./toppings/oregano.png":7129,"./toppings/paprika.png":4212,"./toppings/pepper.png":8206,"./toppings/pepperoni.png":7928,"./toppings/pizzasauce.png":557,"./toppings/pulledpork.png":6298,"./toppings/redonion.png":7658,"./toppings/saltytomato.png":8719,"./toppings/spicygum.png":7905,"./toppings/spinach.png":5308,"./toppings/sweetchilly.png":2567,"./toppings/tomato.png":596,"./toppings/tuna.png":8260};function i(e){var a=p(e);return t(a)}function p(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=p,e.exports=i,i.id=781},208:(e,a,t)=>{"use strict";t.d(a,{A:()=>v});var n=t(601),i=t.n(n),p=t(314),o=t.n(p),r=t(417),s=t.n(r),c=new URL(t(466),t.b),d=new URL(t(67),t.b),g=new URL(t(915),t.b),u=new URL(t(864),t.b),l=new URL(t(590),t.b),m=o()(i()),b=s()(c),z=s()(d),f=s()(g),h=s()(u),x=s()(l);m.push([e.id,`.roboto-regular {\n    font-family: "Roboto", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n  }\n\nbody {\n    background-image: url(${b});\n    font-family: "Roboto", sans-serif;\n    margin: 0;\n    background-attachment: fixed;\n    \n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    background-color: black;\n    margin: 0;\n    padding: 10px;\n    position: relative;\n}\n\nbutton {\n    background-image: url(${z});\n    color: black;\n    height: 40px;\n    font-size: 20px;\n}\n\n.cover {\n    position: relative;\n    margin: 0;\n}\n\n.ketchup {\n    position: absolute;\n    top: 40px;\n    left: 0px;\n    width: 69px;\n}\n\n.hidden {\n    background-image: none;\n    margin: 0;\n    background-color: rgb(255, 255, 255);\n}\n\n#content {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    margin: auto;\n    margin-top: 50px;\n    padding: 40px;\n    gap: 50px;\n    background-color: black;\n    color: white;\n    max-width: 800px;\n    border-radius: 10px;\n    font-size: 25px;\n}\n\n#content:first-child {\n    font-size: 50px;\n    font-weight: 600;\n}\n\n.homeContainer {\n    position: relative;\n    margin: 0;\n    min-width: max-content;\n}\n\n.piroata {\n    max-width: 30px;\n    position: absolute;\n    top: 22px;\n    left: 310px;\n}\n\n.piroata:last-of-type {\n    max-width: 30px;\n    position: absolute;\n    top: 22px;\n    left: 64px;\n}\n\n.title {\n    border: 1px solid white;\n    font-size: 90px;\n    font-weight: 600;\n    padding: 10px;\n    border-radius: 40px;\n}\n\n.text {\n    border: 1px solid white;\n    padding: 40px;\n    border-radius: 40px;\n}\n\n.text2 {\n    border: 1px solid white;\n    padding: 40px;\n    border-radius: 40px;\n    text-overflow: auto;\n}\n\n.contact {\n    border: 2px solid white;\n    padding: 40px;\n    border-radius: 40px;\n}\n\n.displayContainer {\n    display: flex;\n    gap: 2px;\n}\n\n.displayContainer button {\n    color: whitesmoke;\n    text-shadow: -2px -2px 0 #000, 2px -1px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;\n    font-weight: 800;\n    font-size: 30px;\n    width: 208px;\n    height: 300px;\n}\n\n.displayContainer button:first-child {\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    background-image: url(${f});\n    background-size: cover;\n}\n\n.displayContainer button:nth-child(2) {\n    background-image: url(${h});\n    background-size: cover;\n}\n\n.displayContainer button:last-child {\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    background-image: url(${x});\n    background-size: cover;\n}\n\n.pizzaCards {\n    display: grid;\n    grid-template-columns: repeat(3, 250px);\n    grid-auto-rows: max-content;\n    gap: 10px;\n}\n\n.card {\n    display: grid;\n    justify-items: center;\n    background: linear-gradient(#000000, #3b3b3b);\n    padding: 10px;\n    overflow: clip;\n    grid-template-rows: max-content 70px max-content;\n    border-radius: 5px;\n}\n\n.card p {\n    justify-self: flex-start;\n}\n\n.card p:nth-child(2) {\n   font-size: 20px;\n   font-weight: 600;\n}\n\n.card p:last-child {\n    font-size: 15px;\n}\n\n.pizzaIcon {\n    width: 200px;\n}\n\n.pizzaForm {\n    display: grid;\n    grid-template-columns: repeat(3, max-content);\n    grid-auto-rows: 50px;\n    gap: 10px;\n}\n\n.toppingSelector {\n    text-align: center;\n    padding: 10px;\n    border: 1px solid rgb(136, 136, 136);\n    background-color: #000;\n}\n\n.toppingSelector:hover {\n    background-color: rgb(136, 136, 136);\n}\n\n.checked {\n    background-color: rgb(136, 136, 136);\n}\n\n.toppingImg {\n    position: absolute;\n    top: 0;\n}\n\n.makeYourPizzaImgContainer {\n    position: relative;\n}`,""]);const v=m},314:e=>{"use strict";e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t="",n=void 0!==a[5];return a[4]&&(t+="@supports (".concat(a[4],") {")),a[2]&&(t+="@media ".concat(a[2]," {")),n&&(t+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),t+=e(a),n&&(t+="}"),a[2]&&(t+="}"),a[4]&&(t+="}"),t})).join("")},a.i=function(e,t,n,i,p){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&o[d[0]]||(void 0!==p&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=p),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),a.push(d))}},a}},417:e=>{"use strict";e.exports=function(e,a){return a||(a={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),a.hash&&(e+=a.hash),/["'() \t\n]|(%20)/.test(e)||a.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var a=[];function t(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function n(e,n){for(var p={},o=[],r=0;r<e.length;r++){var s=e[r],c=n.base?s[0]+n.base:s[0],d=p[c]||0,g="".concat(c," ").concat(d);p[c]=d+1;var u=t(g),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)a[u].references++,a[u].updater(l);else{var m=i(l,n);n.byIndex=r,a.splice(r,0,{identifier:g,updater:m,references:1})}o.push(g)}return o}function i(e,a){var t=a.domAPI(a);return t.update(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap&&a.supports===e.supports&&a.layer===e.layer)return;t.update(e=a)}else t.remove()}}e.exports=function(e,i){var p=n(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<p.length;o++){var r=t(p[o]);a[r].references--}for(var s=n(e,i),c=0;c<p.length;c++){var d=t(p[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}p=s}}},659:e=>{"use strict";var a={};e.exports=function(e,t){var n=function(e){if(void 0===a[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},540:e=>{"use strict";e.exports=function(e){var a=document.createElement("style");return e.setAttributes(a,e.attributes),e.insert(a,e.options),a}},56:(e,a,t)=>{"use strict";e.exports=function(e){var a=t.nc;a&&e.setAttribute("nonce",a)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var a=e.insertStyleElement(e);return{update:function(t){!function(e,a,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,i&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var p=t.sourceMap;p&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),a.styleTagTransform(n,e,a.options)}(a,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)}}}},113:e=>{"use strict";e.exports=function(e,a){if(a.styleSheet)a.styleSheet.cssText=e;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(e))}}},590:(e,a,t)=>{"use strict";e.exports=t.p+"b5f14c2ad93240154ae9.png"},67:(e,a,t)=>{"use strict";e.exports=t.p+"0d46acd3789bac214653.png"},864:(e,a,t)=>{"use strict";e.exports=t.p+"514c4c6f001db05a227f.png"},749:(e,a,t)=>{"use strict";e.exports=t.p+"7f86d9ad8a534c28e4df.png"},915:(e,a,t)=>{"use strict";e.exports=t.p+"c312267a9668fbd303a5.png"},1568:(e,a,t)=>{"use strict";e.exports=t.p+"032e5a785388bed4b580.png"},4365:(e,a,t)=>{"use strict";e.exports=t.p+"b5475654ddf661f0e3d7.png"},217:(e,a,t)=>{"use strict";e.exports=t.p+"1fe303bb23abc4885005.png"},8567:(e,a,t)=>{"use strict";e.exports=t.p+"d85f20c9b6a78c87af9b.png"},310:(e,a,t)=>{"use strict";e.exports=t.p+"babc6c9901f72ebc0544.png"},4977:(e,a,t)=>{"use strict";e.exports=t.p+"2c776e8bf33d7f30747d.png"},3128:(e,a,t)=>{"use strict";e.exports=t.p+"2ca5a0a4dab4a5fb96d2.png"},5920:(e,a,t)=>{"use strict";e.exports=t.p+"c139f7ca72d1475bbadf.png"},8227:(e,a,t)=>{"use strict";e.exports=t.p+"228ae26ecfef34336016.png"},1820:(e,a,t)=>{"use strict";e.exports=t.p+"d9f621ff41c3a8e6f332.png"},681:(e,a,t)=>{"use strict";e.exports=t.p+"9ea59ca83833f843b2fb.png"},9396:(e,a,t)=>{"use strict";e.exports=t.p+"f00f9f306d17107f0759.png"},184:(e,a,t)=>{"use strict";e.exports=t.p+"cefe5192917d71fcd4ed.png"},3106:(e,a,t)=>{"use strict";e.exports=t.p+"503082c06a0981f55d6b.png"},7810:(e,a,t)=>{"use strict";e.exports=t.p+"771303f0b58592d7f9de.png"},9516:(e,a,t)=>{"use strict";e.exports=t.p+"95d8155cebc69b7164f7.png"},466:(e,a,t)=>{"use strict";e.exports=t.p+"291d5801fb08bb456775.png"},5414:(e,a,t)=>{"use strict";e.exports=t.p+"4a22d9f65665ec973a9e.png"},921:(e,a,t)=>{"use strict";e.exports=t.p+"e745c875f4afaba14271.png"},2873:(e,a,t)=>{"use strict";e.exports=t.p+"6a66cd9b5e866ad700c5.png"},3269:(e,a,t)=>{"use strict";e.exports=t.p+"06ead818a42d7b2fdc8b.png"},3456:(e,a,t)=>{"use strict";e.exports=t.p+"d9826c2171b8ed1d83a6.png"},5274:(e,a,t)=>{"use strict";e.exports=t.p+"59da3a291b7c80ce0f04.png"},3751:(e,a,t)=>{"use strict";e.exports=t.p+"8f0979a8b9bc31f148c2.png"},101:(e,a,t)=>{"use strict";e.exports=t.p+"08ac505dbea4b3472b54.png"},169:(e,a,t)=>{"use strict";e.exports=t.p+"da7dfd2aec6fa51e1716.png"},1916:(e,a,t)=>{"use strict";e.exports=t.p+"77a9b33b2337fc07ccc3.png"},2913:(e,a,t)=>{"use strict";e.exports=t.p+"097b7c6dcb9994088637.png"},4358:(e,a,t)=>{"use strict";e.exports=t.p+"ac75d46e26a5232921da.png"},2498:(e,a,t)=>{"use strict";e.exports=t.p+"4dd6051d665d99894c87.png"},8128:(e,a,t)=>{"use strict";e.exports=t.p+"0593bb9c0d3c821c3d41.png"},6231:(e,a,t)=>{"use strict";e.exports=t.p+"d27fd3603074761aea1d.png"},9217:(e,a,t)=>{"use strict";e.exports=t.p+"6ea1e1efd534863e4d8e.png"},3024:(e,a,t)=>{"use strict";e.exports=t.p+"a6e709cc8030b3e7d3a0.png"},2070:(e,a,t)=>{"use strict";e.exports=t.p+"e0bef5a0d258f2efee92.png"},5730:(e,a,t)=>{"use strict";e.exports=t.p+"209e7a1afa5ca77d5f7d.png"},8631:(e,a,t)=>{"use strict";e.exports=t.p+"19b3e6a2b338e5be4a71.png"},7129:(e,a,t)=>{"use strict";e.exports=t.p+"762f3f7b30a883bf226c.png"},4212:(e,a,t)=>{"use strict";e.exports=t.p+"399ce8eb9a3d0b9957c5.png"},8206:(e,a,t)=>{"use strict";e.exports=t.p+"ee904adf2ea2cb6e1e25.png"},7928:(e,a,t)=>{"use strict";e.exports=t.p+"a0b23a94e883f3dfc31a.png"},557:(e,a,t)=>{"use strict";e.exports=t.p+"cd9ae1d2d4a29169c35b.png"},6298:(e,a,t)=>{"use strict";e.exports=t.p+"d45bc1cfd4d93e092e5b.png"},7658:(e,a,t)=>{"use strict";e.exports=t.p+"1eff40e5a8c798f0c472.png"},8719:(e,a,t)=>{"use strict";e.exports=t.p+"4a2916ca18bb58f37fb2.png"},7905:(e,a,t)=>{"use strict";e.exports=t.p+"16c86223126ea0613d27.png"},5308:(e,a,t)=>{"use strict";e.exports=t.p+"7310e5a30f72983b07d9.png"},2567:(e,a,t)=>{"use strict";e.exports=t.p+"8f325a51c75d6002dbfb.png"},596:(e,a,t)=>{"use strict";e.exports=t.p+"9e466639debf351d8610.png"},8260:(e,a,t)=>{"use strict";e.exports=t.p+"58d492abe09e545b95c8.png"}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var p=a[n]={id:n,exports:{}};return e[n](p,p.exports,t),p.exports}t.m=e,t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var a=t.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var n=a.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";function e(){const e=document.createElement("h1"),a=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("p"),p=document.createElement("p"),o=document.createElement("p"),r=document.createElement("p"),s=document.createElement("p"),c=document.createElement("p"),d=document.createElement("p"),g=document.createElement("p"),u=document.createElement("p"),l=document.createElement("p");a.setAttribute("class","contact"),t.setAttribute("class","contact"),n.setAttribute("class","contact"),i.setAttribute("class","status"),p.setAttribute("class","status"),o.setAttribute("class","status"),r.setAttribute("class","name"),s.setAttribute("class","name"),c.setAttribute("class","name"),d.setAttribute("class","phone"),g.setAttribute("class","phone"),u.setAttribute("class","phone"),content.textContent="",e.textContent="Contact",i.textContent="Sef",r.textContent="Piccolo Pigaura",d.textContent="777-777-777",p.textContent="Mario Pigaura",g.textContent="888-888-888",o.textContent="Comenzi Telefon",c.textContent="111-111-1111",u.textContent="111-111-1112",l.textContent="Rosieni Str. Maslinilor Nr.9",content.appendChild(e),content.appendChild(a),content.appendChild(t),content.appendChild(n),content.appendChild(l),a.appendChild(i),a.appendChild(r),a.appendChild(d),t.appendChild(p),t.appendChild(s),t.appendChild(g),n.appendChild(o),n.appendChild(c),n.appendChild(u)}function a(){const e=document.createElement("div"),a=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("img"),p=document.createElement("img");content.textContent="",a.textContent="Pizza Pigaura",t.textContent="Cea mai buna si inovativa pizza cu gaura. Pizza Pigaura a fost descoperita in 2020 dupa ce Piccolo Pigaura a bagat la cuptor o pizza fara sa o aseze in tava, ceea ce a dus la centrul pizzei curgand in restul cuptorului rezultand intr-un dezastru culinar. Sau cel putin asta ar fi crezut oamenii de rand, pe cand Pigaura, a vazut partea plina a paharului, in cazul asta al pizzei si s-a gandit sa creeze un nou mod de a manca pizza. Cu timpul acesta a perfectionat tehnica de a gati cea mai buna pizza cu gaura din lume alaturi de fratele sau Mario, folosind locul liber din mijloc ca suport pentru sosuri",n.textContent="Pentru mai multe detalii va rugam sa consultati sectiunea Despre (about) pentru a afla detalii precum numar de telefon, locatia si intervalul orar in care este deschis. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",i.src="./images/piroata.png",p.src="./images/piroata.png",e.setAttribute("class","homeContainer"),i.setAttribute("class","piroata"),p.setAttribute("class","piroata"),a.setAttribute("class","title"),t.setAttribute("class","text"),n.setAttribute("class","text2"),content.appendChild(e),e.appendChild(a),e.appendChild(i),e.appendChild(p),content.appendChild(t),content.appendChild(n)}function n(){const e=document.createElement("div"),a=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("form"),i=document.createElement("div"),p=document.createElement("img"),o=document.createElement("div"),r={pizzaQuatro:{name:"Pizza Quattro Stagioni",ingredients:"Pizza de baza + pepperoni, ciuperci, masline, ardei",image:"../images/pizza/quattrostagioni.png"},pizzaQuatro2:{name:"Pizza Quattro Stagioni Amestecat",ingredients:"Pizza de baza + pepperoni, ciuperci, masline, ardei",image:"../images/pizza/quattrostagionimix.png"},pizzaMargherita:{name:"Pizza Margherita",ingredients:"Pizza de baza + mozzarella, busuioc",image:"../images/pizza/margherita.png"},pizzaDiavola:{name:"Pizza Diavola",ingredients:"Pizza de baza + salam picant",image:"../images/pizza/diavola.png"},pizzaConTonno:{name:"Pizza Con Tonno",ingredients:"Pizza de baza + ton, porumb, ciuperci, masline",image:"../images/pizza/tonno.png"},pizzaCarnivora:{name:"Pizza Carnivora",ingredients:"Pizza de baza + sunca, pepperoni, pulled pork, pui",image:"../images/pizza/carnivora.png"},pizzaCapriciosa:{name:"Pizza Capriciosa",ingredients:"Pizza de baza + ciuperci, sunca, ardei, masline",image:"../images/pizza/capriciosa.png"},pizzaProsciutto:{name:"Pizza Prosciutto E Funghi",ingredients:"Pizza de baza + ciuperci, sunca",image:"../images/pizza/prosciutto.png"},pizzaAllcheese:{name:"Pizza All Cheese",ingredients:"Pizza de baza + gorgonzola, mozzarella, cedar, camembert, crema de branza",image:"../images/pizza/allcheese.png"},pizzaCountry:{name:"Pizza Country",ingredients:"Pizza de baza + bucati bacon, porumb, ceapa, ciuperci",image:"../images/pizza/country.png"},pizzaAloha:{name:"Pizza Aloha",ingredients:"Pizza de baza + sunca, ananas, porumb, ceapa",image:"../images/pizza/aloha.png"},pizzaMexico:{name:"Pizza Mexico",ingredients:"Pizza de baza + sos chilly, pepperoni, porumb, ceapa, jalapenos, nachos",image:"../images/pizza/mexico.png"},pizzaBBQ:{name:"Pizza BBQ",ingredients:"Pizza de baza + sos BBQ, ceapa, porumb, bucati bacon, ciuperci, pui",image:"../images/pizza/bbq.png"},pizzaProvence:{name:"Pizza Provence",ingredients:"Pizza de baza + blue cheese, rosii uscate, pui, ceapa, ardei",image:"../images/pizza/provence.png"},pizzaArgentina:{name:"Pizza Argentina",ingredients:"Pizza de baza + carne tocata, ardei, branza cedar, ceapa",image:"../images/pizza/argentina.png"}},s={pizzaSauce:{name:"sos de pizza",id:"pizzaSauce",image:"../images/toppings/pizzasauce.png"},bbqSauce:{name:"sos BBQ",id:"bbqSauce",image:"../images/toppings/bbq.png"},bbqMixSauce:{name:"sos BBQ cu sos Pizza",id:"bbqMixSauce",image:"../images/toppings/bbqsauce.png"},sweetChilly:{name:"sos sweet chilly",id:"sweetChilly",image:"../images/toppings/sweetchilly.png"},spicyGum:{name:"sos balon",id:"spicyGum",image:"../images/toppings/spicygum.png"},ananas:{name:"Ananas",id:"ananas",image:"../images/toppings/ananas.png"},bacon:{name:"Bacon",id:"bacon",image:"../images/toppings/bacon.png"},banana:{name:"Banana",id:"banana",image:"../images/toppings/banana.png"},camembert:{name:"Branza Camembert",id:"camembert",image:"../images/toppings/camembert.png"},cheddar:{name:"Branza Cedar",id:"cheddar",image:"../images/toppings/cheddar.png"},chicken:{name:"Pui",id:"chicken",image:"../images/toppings/chicken.png"},chiliflakes:{name:"Fulgi de Chili",id:"chiliflakes",image:"../images/toppings/chiliflakes.png"},corn:{name:"Porumb",id:"corn",image:"../images/toppings/corn.png"},creamCheese:{name:"Crema de Branza",id:"creamCheese",image:"../images/toppings/creamCheese.png"},gradeCheese:{name:"Branza cu Mucegai",id:"gradeCheese",image:"../images/toppings/gradeCheese.png"},ham:{name:"Sunca",id:"ham",image:"../images/toppings/ham.png"},jalapeno:{name:"Jalapeno",id:"jalapeno",image:"../images/toppings/jalapeno.png"},mincedmeat:{name:"Carne tocata",id:"mincedmeat",image:"../images/toppings/mincedmeat.png"},mozzarella:{name:"Mozzarella",id:"mozzarella",image:"../images/toppings/mozzarella.png"},mushroom:{name:"Ciuperci",id:"mushroom",image:"../images/toppings/mushroom.png"},nachos:{name:"Nachos",id:"nachos",image:"../images/toppings/nachos.png"},olives:{name:"Masline",id:"olives",image:"../images/toppings/olives.png"},onion:{name:"Ceapa",id:"onion",image:"../images/toppings/onion.png"},oregano:{name:"Oregano",id:"oregano",image:"../images/toppings/oregano.png"},paprika:{name:"Ardei gras",id:"paprika",image:"../images/toppings/paprika.png"},pepper:{name:"Piper",id:"pepper",image:"../images/toppings/pepper.png"},pepperoni:{name:"Pepperoni",id:"pepperoni",image:"../images/toppings/pepperoni.png"},pulledPork:{name:"Pulled Pork",id:"pulledPork",image:"../images/toppings/pulledpork.png"},redOnion:{name:"Ceapa Rosie",id:"redOnion",image:"../images/toppings/redonion.png"},saltyTomato:{name:"Rosii Uscate",id:"saltyTomato",image:"../images/toppings/saltytomato.png"},spinach:{name:"Spanac",id:"spinach",image:"../images/toppings/spinach.png"},tomato:{name:"Rosii",id:"tomato",image:"../images/toppings/tomato.png"},tuna:{name:"Ton",id:"tuna",image:"../images/toppings/tuna.png"}};function c(e){if("toppingSelector checked"===e.getAttribute("class"))return e.setAttribute("class","toppingSelector"),void d();e.setAttribute("class","toppingSelector checked"),d()}function d(){const e=document.querySelectorAll(".checked");console.log(e),o.textContent="";for(const a of e){const e=document.createElement("img"),t=a.id;e.src=`${s[t].image}`,e.width="350",e.setAttribute("class","toppingImg"),o.appendChild(e)}i.appendChild(o)}!function(){for(const a in r){const t=document.createElement("div"),n=document.createElement("img"),i=document.createElement("p"),p=document.createElement("p");t.setAttribute("class","card"),n.setAttribute("class","pizzaIcon"),i.textContent=r[a].name,p.textContent=r[a].ingredients,n.src=r[a].image,e.appendChild(t),t.appendChild(n),t.appendChild(i),t.appendChild(p)}for(const e in s){const a=document.createElement("div");a.setAttribute("class","toppingSelector"),a.setAttribute("id",`${s[e].id}`),a.textContent=s[e].name,n.appendChild(a),a.addEventListener("click",(function(e){c(e.target)}))}content.textContent="",t.textContent="Creeaza pizza ta!",a.textContent="Topping-uri:",i.textContent="",p.src="../images/pizza/emptypizza.png",p.width="350",i.setAttribute("class","makeYourPizzaImgContainer"),e.setAttribute("class","pizzaCards"),n.setAttribute("class","pizzaForm"),content.appendChild(e),content.appendChild(t),content.appendChild(i),i.appendChild(p),content.appendChild(a),a.appendChild(n)}()}t(749),t(781);var i=t(72),p=t.n(i),o=t(825),r=t.n(o),s=t(659),c=t.n(s),d=t(56),g=t.n(d),u=t(540),l=t.n(u),m=t(113),b=t.n(m),z=t(208),f={};f.styleTagTransform=b(),f.setAttributes=g(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),p()(z.A,f),z.A&&z.A.locals&&z.A.locals;const h=document.querySelector("#content"),x=document.querySelector(".home"),v=document.querySelector(".menu"),C=document.querySelector(".about"),y=document.querySelectorAll("button"),A=function(){const e=[0,1,2];let a=e[0];return{getTab:function(){return a},switchTab:function(t){return a=e[t]}}}();x.addEventListener("click",(function(){a(),y[A.getTab()].setAttribute("class","hidden"),A.switchTab(0),y[A.getTab()].removeAttribute("class","hidden")})),v.addEventListener("click",(function(){n(),y[A.getTab()].setAttribute("class","hidden"),A.switchTab(1),y[A.getTab()].removeAttribute("class","hidden")})),C.addEventListener("click",(function(){e(),y[A.getTab()].setAttribute("class","hidden"),A.switchTab(2),y[A.getTab()].removeAttribute("class","hidden")})),function(){for(const e of y)e.setAttribute("class",`${e.getAttribute("class")} hidden`);!function(){const t=document.querySelector("nav"),i=document.createElement("div"),p=document.createElement("button"),o=document.createElement("button"),r=document.createElement("button");i.setAttribute("class","displayContainer"),p.setAttribute("class","displayHome"),o.setAttribute("class","displayMenu"),r.setAttribute("class","displayAbout"),h.appendChild(i),i.appendChild(p),i.appendChild(o),i.appendChild(r),t.style.display="none",p.textContent="Home",o.textContent="Menu",r.textContent="About",p.addEventListener("click",(function(){a(),y[A.getTab()].setAttribute("class","hidden"),A.switchTab(0),y[A.getTab()].removeAttribute("class","hidden"),t.style.display="flex"})),o.addEventListener("click",(function(){n(),y[A.getTab()].setAttribute("class","hidden"),A.switchTab(1),y[A.getTab()].removeAttribute("class","hidden"),t.style.display="flex"})),r.addEventListener("click",(function(){e(),y[A.getTab()].setAttribute("class","hidden"),A.switchTab(2),y[A.getTab()].removeAttribute("class","hidden"),t.style.display="flex"}))}()}()})()})();