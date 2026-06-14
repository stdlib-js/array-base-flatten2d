"use strict";var S=function(f,e){return function(){try{return e||f((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var p=S(function(b,l){
function m(f,e,s){var t,n,o,r,a,i;if(n=e[1],o=e[0],t=[],s){for(r=0;r<n;r++)for(a=0;a<o;a++)t.push(f[a][r]);return t}for(a=0;a<o;a++)for(i=f[a],r=0;r<n;r++)t.push(i[r]);return t}l.exports=m
});var d=S(function(h,q){
function x(f,e,s,t,n,o){var r,a,i,v,c,u;if(r=e[1],a=e[0],u=o,s){for(i=0;i<r;i++)for(v=0;v<a;v++)t[u]=f[v][i],u+=n;return t}for(v=0;v<a;v++)for(c=f[v],i=0;i<r;i++)t[u]=c[i],u+=n;return t}q.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),O=d();y(g,"assign",O);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
