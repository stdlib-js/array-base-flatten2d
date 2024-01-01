// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e){var o,f,s,t,i,u;if(f=n[1],s=n[0],o=[],e){for(t=0;t<f;t++)for(i=0;i<s;i++)o.push(r[i][t]);return o}for(i=0;i<s;i++)for(u=r[i],t=0;t<f;t++)o.push(u[t]);return o}function e(r,n,e,o,f,s){var t,i,u,a,d,p;if(t=n[1],i=n[0],p=s,e){for(u=0;u<t;u++)for(a=0;a<i;a++)o[p]=r[a][u],p+=f;return o}for(a=0;a<i;a++)for(d=r[a],u=0;u<t;u++)o[p]=d[u],p+=f;return o}r(n,"assign",e);export{e as assign,n as default};
//# sourceMappingURL=index.mjs.map
