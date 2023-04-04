/* empty css                       */import{r as u}from"./index.45a47ed6.js";var o={},c={get exports(){return o},set exports(r){o=r}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=u,d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,_=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function p(r,e,i){var t,n={},a=null,l=null;i!==void 0&&(a=""+i),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)v.call(e,t)&&!x.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:d,type:r,key:a,ref:l,props:n,_owner:_.current}}s.Fragment=m;s.jsx=p;s.jsxs=p;(function(r){r.exports=s})(c);function j(){const r=e=>{e.preventDefault(),console.log("hola"),window.location.href="https://wa.link/zzr1ot"};return o.jsx("div",{children:o.jsxs("div",{className:"card-reservation",children:[o.jsx("div",{className:"reservation-banner-up"}),o.jsxs("button",{className:"reserv-button",onClick:r,children:["Reserv Now Here!",o.jsx("img",{src:"images/whatsapp-negro.png",alt:"whatsapp"})]})]})})}export{j as default};
