(function(t){function e(e){for(var r,c,u=e[0],i=e[1],s=e[2],d=0,l=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={index:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1485:function(t,e,n){"use strict";n("2b0c")},"2b0c":function(t,e,n){},"4ad4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(t,e,n,o,a,c){var u=Object(r["i"])("StarsBg");return Object(r["e"])(),Object(r["c"])(u)}var a=Object(r["j"])("data-v-20d92318");Object(r["g"])("data-v-20d92318");var c={class:"body"},u={class:"stars"};Object(r["f"])();var i=a((function(t,e,n,o,a,i){return Object(r["e"])(),Object(r["c"])("div",c,[Object(r["d"])("div",u,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(a.starsCount,(function(t,e){return Object(r["e"])(),Object(r["c"])("div",{class:"star",ref:i.setItemRef,key:e},null,512)})),128))])])})),s=(n("159b"),n("99af"),{name:"MainIndex",data:function(){return{starsCount:800,distance:900,itemRefs:[]}},mounted:function(){var t=this;setTimeout((function(){t.itemRefs.forEach((function(e){var n=.2+1*Math.random(),r=t.distance+300*Math.random();e.style.transformOrigin="0 0 ".concat(r,"px"),e.style.transform="\n        translate3d(0,0,-".concat(r,"px)\n        rotateY(").concat(360*Math.random(),"deg)\n        rotateX(").concat(-50*Math.random(),"deg)\n        scale(").concat(n,",").concat(n,")")}))}),1e3)},methods:{setItemRef:function(t){this.itemRefs.push(t)}}});n("de69");s.render=i,s.__scopeId="data-v-20d92318";var f=s,d={name:"App",components:{StarsBg:f}};n("1485");d.render=o;var l=d;Object(r["b"])(l).mount("#app")},de69:function(t,e,n){"use strict";n("4ad4")}});
//# sourceMappingURL=index.e68262b2.js.map