"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=s(function(w,f){
function O(e,r,i,a,y){var n,t;if(e<=0)return-1;for(n=y,t=0;t<e;t++){if(i[n]===r)return t;n+=a}return-1}f.exports=O
});var q=s(function(z,o){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=u();function l(e,r,i,a){return m(e,r,i,a,j(e,a))}o.exports=l
});var c=s(function(A,x){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),_=u();R(d,"ndarray",_);x.exports=d
});var E=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=c(),v,p=b(E(__dirname,"./native.js"));g(p)?v=h:v=p;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
