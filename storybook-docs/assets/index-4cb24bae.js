var M=Object.defineProperty;var v=(e,o)=>M(e,"name",{value:o,configurable:!0});var b={},P={get exports(){return b},set exports(e){b=e}},t={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=60103,m=60106,c=60107,s=60108,u=60114,i=60109,f=60110,p=60112,l=60113,$=60120,a=60115,y=60116,g=60121,C=60122,_=60117,w=60129,S=60131;if(typeof Symbol=="function"&&Symbol.for){var r=Symbol.for;d=r("react.element"),m=r("react.portal"),c=r("react.fragment"),s=r("react.strict_mode"),u=r("react.profiler"),i=r("react.provider"),f=r("react.context"),p=r("react.forward_ref"),l=r("react.suspense"),$=r("react.suspense_list"),a=r("react.memo"),y=r("react.lazy"),g=r("react.block"),C=r("react.server.block"),_=r("react.fundamental"),w=r("react.debug_trace_mode"),S=r("react.legacy_hidden")}function n(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case d:switch(e=e.type,e){case c:case u:case s:case l:case $:return e;default:switch(e=e&&e.$$typeof,e){case f:case p:case y:case a:case i:return e;default:return o}}case m:return o}}}v(n,"y");var h=i,E=d,F=p,z=c,I=y,j=a,k=m,A=u,L=s,R=l;t.ContextConsumer=f;t.ContextProvider=h;t.Element=E;t.ForwardRef=F;t.Fragment=z;t.Lazy=I;t.Memo=j;t.Portal=k;t.Profiler=A;t.StrictMode=L;t.Suspense=R;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return n(e)===f};t.isContextProvider=function(e){return n(e)===i};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===d};t.isForwardRef=function(e){return n(e)===p};t.isFragment=function(e){return n(e)===c};t.isLazy=function(e){return n(e)===y};t.isMemo=function(e){return n(e)===a};t.isPortal=function(e){return n(e)===m};t.isProfiler=function(e){return n(e)===u};t.isStrictMode=function(e){return n(e)===s};t.isSuspense=function(e){return n(e)===l};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===c||e===u||e===w||e===s||e===l||e===$||e===S||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===a||e.$$typeof===i||e.$$typeof===f||e.$$typeof===p||e.$$typeof===_||e.$$typeof===g||e[0]===C)};t.typeOf=n;(function(e){e.exports=t})(P);export{b as r};
//# sourceMappingURL=index-4cb24bae.js.map
