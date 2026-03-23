"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(w,f){
function O(e,r,t,i,y){var n,a;if(e<=0)return-1;for(n=y,a=0;a<e;a++){if(t[n]===r)return a;n+=i}return-1}f.exports=O
});var q=s(function(z,o){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=u();function l(e,r,t,i){return m(e,r,t,i,j(e,i))}o.exports=l
});var c=s(function(A,x){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),_=u();R(d,"ndarray",_);x.exports=d
});var E=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=c(),v,p=b(E(__dirname,"./native.js"));g(p)?v=h:v=p;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
