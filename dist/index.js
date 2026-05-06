"use strict";var S=function(f,i){return function(){return i||f((i={exports:{}}).exports,i),i.exports}};var p=S(function(b,l){
function m(f,i,u){var t,n,s,r,a,e;if(n=i[1],s=i[0],t=[],u){for(r=0;r<n;r++)for(a=0;a<s;a++)t.push(f[a][r]);return t}for(a=0;a<s;a++)for(e=f[a],r=0;r<n;r++)t.push(e[r]);return t}l.exports=m
});var d=S(function(h,q){
function x(f,i,u,t,n,s){var r,a,e,v,c,o;if(r=i[1],a=i[0],o=s,u){for(e=0;e<r;e++)for(v=0;v<a;v++)t[o]=f[v][e],o+=n;return t}for(v=0;v<a;v++)for(c=f[v],e=0;e<r;e++)t[o]=c[e],o+=n;return t}q.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),O=d();y(g,"assign",O);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
