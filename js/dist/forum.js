module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([,function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/IndexPage"]},,function(t,e,r){"use strict";r.r(e);var o=r(1),n=r(2),a=r.n(n);app.initializers.add("justoverclock/flarum-ext-socialcards",(function(){Object(o.extend)(a.a.prototype,"view",(function(t){if(t.children&&t.children.splice&&!0===app.forum.attribute("ShowFacebook")){var e=m("div",{class:"sticky-icon"},[m("a",{class:"Facebook",href:app.forum.attribute("fblink"),target:"_blank"},[m("i",{class:"fab fa-facebook-f"})," Facebook "])]);t.children.splice(1,0,e)}if(!0===app.forum.attribute("ShowYoutube")){var r=m("div",{class:"sticky-iconyt"},[m("a",{class:"Youtube",href:app.forum.attribute("ytlink"),target:"_blank"},[m("i",{class:"fab fa-youtube"})," Youtube "])]);t.children.splice(2,0,r)}if(!0===app.forum.attribute("ShowTwitter")){var o=m("div",{class:"sticky-icontw"},[m("a",{class:"Twitter",href:app.forum.attribute("twlink"),target:"_blank"},[m("i",{class:"fab fa-twitter"})," Twitter "])]);t.children.splice(3,0,o)}}))}))}]);
//# sourceMappingURL=forum.js.map