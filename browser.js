// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__;function f(e,r,t){var o,n,i,a,l,u;if(n=r[1],i=r[0],o=[],t){for(a=0;a<n;a++)for(l=0;l<i;l++)o.push(e[l][a]);return o}for(l=0;l<i;l++)for(u=e[l],a=0;a<n;a++)o.push(u[a]);return o}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},e(f,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n,i){var a,l,u,f,c,p;if(a=r[1],l=r[0],p=i,t){for(u=0;u<a;u++)for(f=0;f<l;f++)o[p]=e[f][u],p+=n;return o}for(f=0;f<l;f++)for(c=e[f],u=0;u<a;u++)o[p]=c[u],p+=n;return o}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).flatten2d=r();
//# sourceMappingURL=browser.js.map