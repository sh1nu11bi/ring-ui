!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1171)}({10:function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=t(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},11:function(n,e,t){n.exports=t(2)(535)},1171:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(41),o=t.n(r),i=t(295),a=t(168),c=t(913);o.a.module("test",[c.a]).controller("testCtrl",function(){this.AvatarSize=a.b,this.avatarUrl="".concat(i.a.serverUri,"/api/rest/avatar/default?username=Jet%20Brains")})},12:function(n,e,t){n.exports=t(2)(332)},13:function(n,e,t){n.exports=t(2)(320)},14:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,':root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c=i[1],u=i[2],s=i[3],l={css:c,media:u,sourceMap:s};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function i(n,e){var t=v(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),x.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=v(n.insertAt.before,t);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=l();t&&(n.attrs.nonce=t)}return s(e,n.attrs),i(n,e),e}function u(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",s(e,n.attrs),i(n,e),e}function s(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function l(){return t.nc}function f(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var s=w++;t=m||(m=c(e)),r=p.bind(null,t,s,!1),o=p.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=u(e),r=b.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=c(e),r=d.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=j(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function b(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=O(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var h={},y=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(n,e){return e?e.querySelector(n):document.querySelector(n)},v=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=g.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),m=null,w=0,x=[],O=t(48);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=y()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var c=t[a],u=h[c.id];u.refs--,i.push(u)}n&&r(o(n,e),e);for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete h[u.id]}}}};var j=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},16:function(n,e,t){n.exports=t(2)(290)},168:function(n,e,t){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e){return c(n)||a(n,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}function c(n){if(Array.isArray(n))return n}function u(){return u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},u.apply(this,arguments)}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){w(n,e,t[e])})}return n}function l(n,e){if(null==n)return{};var t,r,o=f(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function f(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}function p(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function d(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function b(n,e,t){return e&&d(n.prototype,e),t&&d(n,t),n}function h(n,e){return!e||"object"!==r(e)&&"function"!=typeof e?m(n):e}function y(n){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function g(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&v(n,e)}function v(n,e){return(v=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function m(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function w(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"b",function(){return I}),t.d(e,"a",function(){return M});var x=t(5),O=(t.n(x),t(4)),j=(t.n(O),t(13)),S=(t.n(j),t(6)),E=(t.n(S),t(9)),k=(t.n(E),t(12)),C=(t.n(k),t(37)),U=(t.n(C),t(3)),_=t.n(U),P=t(7),R=t.n(P),T=t(11),N=t.n(T),z=t(40),A=t(32),L=t(196),$=t.n(L),I={Size18:18,Size20:20,Size24:24,Size32:32,Size40:40,Size48:48,Size56:56},M=function(n){function e(){var n,t;p(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=h(this,(n=y(e)).call.apply(n,[this].concat(o))),w(m(m(t)),"state",{errorUrl:""}),w(m(m(t)),"handleError",function(){t.setState({errorUrl:t.props.url})}),w(m(m(t)),"handleSuccess",function(){t.setState({errorUrl:""})}),t}return g(e,n),b(e,[{key:"render",value:function(){var n=this.props,e=n.size,r=n.url,i=n.dpr,a=n.style,c=n.round,f=l(n,["size","url","dpr","style","round"]),p="".concat(e,"px"),d=e<=I.Size18?"var(--ring-border-radius-small)":"var(--ring-border-radius)",b=s({borderRadius:c?"50%":d,height:p,width:p},a);if(!r||this.state.errorUrl===r)return _.a.createElement("span",u({},f,{className:N()($.a.avatar,$.a.empty,this.props.className),style:b}));var h=r;if(!t.i(z.g)(r)){var y=r.split("?"),g=o(y,2),v=g[0],m=g[1],w=s({},t.i(z.e)(m),{dpr:i,size:e});h=t.i(z.a)(v,w)}return _.a.createElement("img",u({},f,{onError:this.handleError,onLoad:this.handleSuccess,className:N()($.a.avatar,this.props.className),style:b,src:h}))}}]),e}(U.PureComponent);w(M,"propTypes",{dpr:R.a.number,className:R.a.string,size:R.a.number,style:R.a.object,url:R.a.string,round:R.a.bool}),w(M,"defaultProps",{dpr:t.i(A.b)(),size:I.Size20,style:{}})},17:function(n,e,t){n.exports=t(2)(540)},195:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.push([n.i,'.avatar_cdd {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n\n  border-radius: 3px;\n\n  border-radius: var(--ring-border-radius); /* This is a "graceful degradation" fallback, while the real value is controlled by JS */\n}\n\n.empty_5bc {\n  display: inline-block;\n\n  box-sizing: border-box;\n\n  border: 1px solid #b8d1e5;\n\n  border: 1px solid var(--ring-borders-color);\n}\n',""]),e.locals={avatar:"avatar_cdd",empty:"empty_5bc"}},196:function(n,e,t){var r=t(195);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(15)(r,o),r.locals&&(n.exports=r.locals)},2:function(n,e){n.exports=vendor_lib},21:function(n,e,t){n.exports=t(2)(395)},23:function(n,e,t){n.exports=t(2)(355)},27:function(n,e,t){n.exports=t(2)(394)},274:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return u});var c=t(6),u=(t.n(c),function(){function n(){for(var e=this,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];r(this,n),a(this,"$inject",{}),this.constructor.$inject.forEach(function(n,t){e.$inject[n]=o[t]})}return i(n,null,[{key:"controller",get:function(){return this}}]),n}());a(u,"$inject",[])},294:function(n,e,t){n.exports=t(2)(376)},295:function(n,e,t){"use strict";var r=t(294),o=(t.n(r),{serverUri:"https://hub.jetbrains.com",clientId:"81a0bffb-6d0f-4a38-b93a-0a4d1e567698"}),i=o.serverUri,a=o.clientId,c=window.location,u=c.origin,s=c.pathname,l=s.startsWith("/ring-ui/")?"".concat("/ring-ui/","/").concat("master","/index.html"):"/";e.a={reloadOnUserChange:!1,embeddedLogin:!0,serverUri:i,clientId:a,requestCredentials:"skip",redirectUri:u+l}},3:function(n,e,t){n.exports=t(2)(131)},32:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n){return n===document||n instanceof Node&&document.documentElement.contains(n.parentNode)}function u(n){if(n instanceof Range||c(n)){var e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}return Object.assign({},w)}function s(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function l(){return window.innerHeight}function f(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function p(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function d(n){n.preventDefault&&n.preventDefault()}t.d(e,"d",function(){return m}),e.h=c,e.a=u,e.b=s,e.g=l,e.e=f,e.f=p,t.d(e,"c",function(){return x}),e.i=d;var b=t(64),h=(t.n(b),t(9)),y=(t.n(h),t(21)),g=(t.n(y),t(6)),v=(t.n(g),t(13)),m=(t.n(v),window.getComputedStyle.bind(window)),w={top:0,right:0,bottom:0,left:0,width:0,height:0},x=function(){function n(){r(this,n),a(this,"_all",new Set)}return i(n,[{key:"add",value:function(n,e,t,r){n.addEventListener(e,t,r);var o=function(){return n.removeEventListener(e,t,r)};return this._all.add(o),o}},{key:"remove",value:function(n){n(),this._all.delete(n)}},{key:"removeAll",value:function(){var n=this;this._all.forEach(function(e){return n.remove(e)})}}]),n}()},34:function(n,e,t){"use strict";var r=t(56),o=t.n(r),i=new o.a;i.sniff(),e.a=i},360:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}function a(n,e){return!e||"object"!==p(e)&&"function"!=typeof e?c(n):e}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&l(n,e)}function l(n,e){return(l=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function f(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function d(n){return"rg".concat(n)}function b(n,e){var o,c,l=Object.keys(n.propTypes),p={};return l.forEach(function(n){p[n]="<"}),c=o=function(e){function o(){return r(this,o),a(this,u(o).apply(this,arguments))}return s(o,e),i(o,[{key:"$postLink",value:function(){var n=this;(0,this.$inject.$transclude)(function(e){n.innerNodes=Array.from(e),n.render()})}},{key:"$onChanges",value:function(){this.innerNodes&&this.render()}},{key:"$onDestroy",value:function(){t.i(U.unmountComponentAtNode)(this.$inject.$element[0])}},{key:"render",value:function(){var e=this,r=this.$inject,o=r.$scope,i=r.$element[0],a={};l.forEach(function(n){void 0!==e[n]&&("function"==typeof e[n]?a[n]=function(){var t=e[n].apply(e,arguments);return o.$applyAsync(),t}:a[n]=e[n])});var c=this.innerNodes&&this.innerNodes.length;t.i(U.render)(C.a.createElement(n,a,c?C.a.createElement(P.a,{nodes:this.innerNodes}):null),i)}}]),o}(_.a),f(o,"$inject",["$scope","$element","$transclude"]),f(o,"bindings",p),f(o,"transclude",!0),c}function h(n,e){var t="Ring.".concat(e[0].toLowerCase()+e.slice(1));return S.a.module(t,[]).component(d(e),b(n,e))}t.d(e,"a",function(){return b});var y=t(5),g=(t.n(y),t(4)),v=(t.n(g),t(47)),m=(t.n(v),t(372)),w=(t.n(m),t(9)),x=(t.n(w),t(12)),O=(t.n(x),t(6)),j=(t.n(O),t(41)),S=t.n(j),E=t(27),k=(t.n(E),t(3)),C=t.n(k),U=t(17),_=(t.n(U),t(274)),P=t(368);e.b=h},368:function(n,e,t){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}function c(n,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(n):e}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&l(n,e)}function l(n,e){return(l=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function f(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return w});var d=t(5),b=(t.n(d),t(4)),h=(t.n(b),t(6)),y=(t.n(h),t(3)),g=t.n(y),v=t(7),m=t.n(v),w=function(n){function e(){var n,t;o(this,e);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=c(this,(n=u(e)).call.apply(n,[this].concat(i))),p(f(f(t)),"nodeRef",function(n){t.node=n}),t}return s(e,n),a(e,[{key:"componentDidMount",value:function(){var n=this.props.nodes;if(this.node&&n&&n.length){var e=document.createDocumentFragment();n.forEach(function(n){return e.appendChild(n)}),this.node.appendChild(e)}}},{key:"render",value:function(){var n=this.props.className;return g.a.createElement("div",{className:n,ref:this.nodeRef})}}]),e}(y.Component);p(w,"propTypes",{className:m.a.string,nodes:m.a.array})},37:function(n,e,t){n.exports=t(2)(357)},372:function(n,e,t){n.exports=t(2)(329)},4:function(n,e,t){n.exports=t(2)(381)},40:function(n,e,t){"use strict";function r(){var n=document.getElementsByTagName("base")[0];return n?n.href:void 0}function o(){var n=r(),e="".concat(window.location.protocol,"//").concat(window.location.host);return n?g.test(n)?n:e+n:e}function i(){return window.location.href.split("#")[0]}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;if(-1===n.indexOf("http://")&&-1===n.indexOf("https://")&&0!==n.indexOf("/")){var t=e();if(t)return t+n}return n}function c(n,e){return n&&-1===e.indexOf("http://")&&-1===e.indexOf("https://")?n+e:e}function u(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return e()&&("firefox"===y.a.browser.name||"edge"===y.a.browser.name||"chrome"===y.a.browser.name&&y.a.browser.version[0]>=49)?t()+n:String(n)}function s(n){function e(n){return decodeURIComponent(n.replace(/\+/g," "))}if(null==n)return{};for(var t,r=/([^&;=]+)=?([^&;]*)/g,o={};null!=(t=r.exec(n));)o[e(t[1])]=e(t[2]);return o}function l(n,e){var t,r=-1===n.indexOf("?")?"?":"&",o=n,i=0;for(t in e)e.hasOwnProperty(t)&&null!=e[t]&&(o+=(0==i++?r:"&")+encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return o}function f(n){return 0===n.indexOf("data:")}e.c=o,e.d=a,e.b=c,e.f=u,e.e=s,e.a=l,e.g=f;var p=t(23),d=(t.n(p),t(16)),b=(t.n(d),t(37)),h=(t.n(b),t(43)),y=(t.n(h),t(34)),g=/^[a-z]+:\/\//i},41:function(n,e,t){n.exports=t(2)(534)},43:function(n,e,t){n.exports=t(2)(354)},47:function(n,e,t){n.exports=t(2)(270)},48:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},5:function(n,e,t){n.exports=t(2)(401)},56:function(n,e,t){n.exports=t(2)(543)},6:function(n,e,t){n.exports=t(2)(402)},64:function(n,e,t){n.exports=t(2)(192)},7:function(n,e,t){n.exports=t(2)(194)},9:function(n,e,t){n.exports=t(2)(130)},913:function(n,e,t){"use strict";var r=t(16),o=(t.n(r),t(360)),i=t(168);e.a=t.i(o.b)(i.a,"Avatar").name}});