"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[28141],{506907:e=>{e.exports=function(e){e=String(e||"");if(r.test(e))return"rtl";if(u.test(e))return"ltr";return"neutral"};var n="֑-߿יִ-﷽ﹰ-ﻼ",t="A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",r=new RegExp("^[^"+t+"]*["+n+"]"),u=new RegExp("^[^"+n+"]*["+t+"]")},254631:(e,n,t)=>{t.d(n,{s:()=>r,Z:()=>f});var r,u=t(247346);function o(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){o(e,n,t[n])}))}return e}function a(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e)
;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}!function(e){e.UPDATE_COLUMN_COUNTS="UPDATE_COLUMN_COUNTS";e.SET_FOCUSED_POSITION="SET_FOCUSED_POSITION"}(r||(r={}));function s(e,n){return Number.isNaN(e)?n:Number.isNaN(n)?e:Math.max(e,n)}function i(e,n){return Number.isNaN(e)?n:Number.isNaN(n)?e:Math.min(e,n)}function f(e,n){switch(n.type){case u.Us.NAVIGATE_UP:return function(e,n){var t=s(0,e.focusedY-1);return a(c({},e),{focusedX:i(e.columnCounts[t]-1,e.focusedX),focusedY:t})}(e);case u.Us.NAVIGATE_DOWN:return function(e,n){var t=i(e.focusedY+1,e.columnCounts.length-1);return a(c({},e),{focusedX:i(e.columnCounts[t]-1,e.focusedX),focusedY:t})}(e);case u.Us.NAVIGATE_RIGHT:return function(e,n){
var t=!(e.focusedY===e.columnCounts.length-1)&&e.focusedX+1===e.columnCounts[e.focusedY],r=t?0:i(e.focusedX+1,e.columnCounts[e.focusedY]-1),u=t?e.focusedY+1:e.focusedY;return a(c({},e),{focusedX:r,focusedY:u})}(e);case u.Us.NAVIGATE_LEFT:return function(e,n){var t=!(0===e.focusedY)&&0===e.focusedX,r=t?e.focusedY-1:e.focusedY,u=t?e.columnCounts[r]-1:s(0,e.focusedX-1);return a(c({},e),{focusedX:u,focusedY:r})}(e);case u.Us.NAVIGATE_INLINE_START:return function(e,n){return a(c({},e),{focusedX:0})}(e);case u.Us.NAVIGATE_INLINE_END:return function(e,n){return a(c({},e),{focusedX:e.columnCounts[e.focusedY]-1})}(e);case u.Us.NAVIGATE_START:return function(e,n){return a(c({},e),{focusedX:0,focusedY:0})}(e);case u.Us.NAVIGATE_END:return function(e,n){var t=e.columnCounts.length-1;return a(c({},e),{focusedX:e.columnCounts[t]-1,focusedY:t})}(e);case r.UPDATE_COLUMN_COUNTS:return function(e,n){var t=n.columnCounts,r=i(s(0,t.length-1),e.focusedY);return a(c({},e),{columnCounts:t,
focusedX:i(null==t[r]?0:t[r]-1,e.focusedX),focusedY:r})}(e,n);case r.SET_FOCUSED_POSITION:return function(e,n){var t=n.x,r=s(0,i(n.y,e.columnCounts.length-1));return a(c({},e),{focusedX:s(0,i(t,e.columnCounts[r]-1)),focusedY:r})}(e,n);case u.Us.SELECT_FOCUSED_ITEM:return e;default:console.warn("Grid navigator was given an unhandled action ".concat(n.type))}return e}},628518:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(667294),u=t(254631),o=t(247346),c=t(707558);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,u,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done);c=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){a=!0;u=e}finally{try{c||null==t.return||t.return()}finally{if(a)throw u}}return o}}(e,n)||f(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);return"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}var l=[o.R8.TAB];function E(e,n,t){return null!=n&&null!=t?"#".concat((0,c.NE)(e,n,t)):"[data-ref-id=".concat(e,"]")}function N(e){return document.querySelector(e)}function A(e){
var n,t=e.navId,a=e.columnCounts,f=e.focusedX,A=e.focusedY,I=e.onSelect,d=e.prepareFocus,_=e.getNewFocusPosition,T=e.dispatch,S=e.maintainFocusPosition,O=e.enabled,C=e.autoFocusElement,U=e.useVirtualFocus,p=r.useRef();p.current=O;var m=N(E(t,f,A)),v=s(r.useState(!1),2),y=v[0],b=v[1],P=s(r.useState(!1),2),D=P[0],L=P[1],R=s(r.useState(!1),2),g=R[0],M=R[1],G=s(r.useState((function(){return new c.$o((function(e){var n=s(e.split(",").map(Number),2),t=n[0],r=n[1];return function(){b(!0);T({type:u.s.SET_FOCUSED_POSITION,x:t,y:r})}}))})),1),h=G[0];r.useEffect((function(){return function(){return h.clean()}}),[h]);var w=r.useCallback((function(e){if(!p.current||!C)return!1;e.focus()}),[C]),F=r.useCallback((function(e,n){var r=E(t,e,n);(null!=d?d(e,n,r):Promise.resolve()).then((function(){var e=N(r);if(null!=e){w(e);L(!1)}else requestAnimationFrame((function(){return L(!0)}))}))}),[t,d,w]),Y=r.useCallback((function(){
var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=s(null!=_?_(f,A):[f,A],2),r=n[0],o=n[1];if(r!==f||o!==A){T({type:u.s.SET_FOCUSED_POSITION,x:r,y:o});if(!e){M(!0);return}}var c=N(E(t,r,o));if(null!=c){M(!0);w(c)}}),[T,f,A,_,t,w]),V=s(r.useState(!1),2),k=V[0],X=V[1];r.useEffect((function(){if(k&&y){X(!1);var e=N(E(t,f,A));if(null==e){b(!1);var n=N(E(t));null!=n&&w(n)}else w(e)}}),[t,k,y,w,f,A]);var j=r.useCallback((function(e){p.current&&null==e&&X(!0)}),[]);r.useEffect((function(){if(y&&D&&null!=m){w(m);L(!1)}}),[D,m]);r.useEffect((function(){if(y){g||F(f,A);M(!1)}}),[f,A]);var K=r.useCallback((function(e){if(p.current)if(U||!l.includes(e.key)||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||e.currentTarget!==e.target){var n,t=function(e){switch(e.key){case o.R8.ENTER:return o.Us.SELECT_FOCUSED_ITEM;case o.R8.UP:return o.Us.NAVIGATE_UP;case o.R8.DOWN:return o.Us.NAVIGATE_DOWN;case o.R8.RIGHT:return o.Us.NAVIGATE_RIGHT;case o.R8.LEFT:return o.Us.NAVIGATE_LEFT
;case o.R8.HOME:return e.ctrlKey?o.Us.NAVIGATE_START:o.Us.NAVIGATE_INLINE_START;case o.R8.END:return e.ctrlKey?o.Us.NAVIGATE_END:o.Us.NAVIGATE_INLINE_END}}(e);switch(t){case o.Us.NAVIGATE_UP:case o.Us.NAVIGATE_DOWN:case o.Us.NAVIGATE_RIGHT:case o.Us.NAVIGATE_LEFT:case o.Us.NAVIGATE_INLINE_START:case o.Us.NAVIGATE_INLINE_END:case o.Us.NAVIGATE_START:case o.Us.NAVIGATE_END:if(!(0===a.length||0===f&&0===A&&t===o.Us.NAVIGATE_LEFT)){e.preventDefault();e.stopPropagation()}T({type:t});return;case o.Us.SELECT_FOCUSED_ITEM:if(C&&!(n=m,(null==n?void 0:n.ownerDocument.activeElement)===n))return;if(e.repeat)return;e.preventDefault();e.stopPropagation();T({type:t});null!=I?I(f,A,e):null!=m&&m.click()}}else{e.preventDefault();e.stopPropagation();Y()}}),[Y,T,C,m,I,f,A]),x=r.useCallback((function(e){if(e.currentTarget!==e.target){if(!y){b(!0);M(!0)}return!1}if(y){Y(!1);return!1}S&&null!=m?F(f,A):Y(!0)}),[y,S,m,Y,F,f,A]),W=r.useCallback((function(e){if(e.target!==e.currentTarget){
if(e.currentTarget.contains(e.relatedTarget))return!1;b(!1)}}),[]),H=r.useMemo((function(){return(n=Math).max.apply(n,i(a))}),[a]),B=r.useCallback((function(){return{role:"grid","aria-rowcount":a.length,"aria-colcount":H,tabIndex:y&&S?-1:0,"data-ref-id":t,onKeyDown:K,onFocus:x,onBlur:W}}),[a.length,H,y,S,t,K,x,W]),q=r.useCallback((function(e,n){var r={role:"gridcell","aria-rowindex":n+1,"aria-colindex":e+1,id:(0,c.NE)(t,e,n),tabIndex:S&&e===f&&n===A?0:-1,onFocus:h.get("".concat(e,",").concat(n))};e===f&&n===A&&(r.ref=j);return r}),[t,S,f,A,h,j]),Z=r.useCallback((function(e){return{role:"row","aria-rowindex":e+1}}),[]);return r.useMemo((function(){return{dispatch:T,getContainerProps:B,getItemProps:q,getRowProps:Z}}),[T,B,q,Z])}function I(e){
var n=e.navId,t=e.columnCounts,o=e.focusedX,a=void 0===o?0:o,i=e.focusedY,f=void 0===i?0:i,l=e.onSelect,E=e.prepareFocus,N=e.getNewFocusPosition,I=e.maintainFocusPosition,d=void 0===I||I,_=e.enabled,T=void 0===_||_,S=e.onDispatch,O=e.autoFocusElement,C=void 0===O||O,U=e.useVirtualFocus,p=void 0!==U&&U,m=r.useCallback((function(e,n){var t=(0,u.Z)(e,n);null!=S&&S(e,t,n);return t}),[S]),v=s(r.useReducer(m,{focusedX:a,focusedY:f,columnCounts:t}),2),y=v[0],b=v[1],P=y.columnCounts,D=y.focusedX,L=y.focusedY,R=s(r.useState((function(){return(0,c.P2)(b,16)})),1)[0];r.useEffect((function(){b({type:u.s.UPDATE_COLUMN_COUNTS,columnCounts:t})}),[t]);return A({navId:n,columnCounts:P,focusedX:D,focusedY:L,dispatch:R,onSelect:l,prepareFocus:E,getNewFocusPosition:N,maintainFocusPosition:d,enabled:T,autoFocusElement:C,useVirtualFocus:p})}},532832:(e,n,t)=>{t.d(n,{C:()=>r});var r;!function(e){e[e.APPLICATION=1]="APPLICATION";e[e.LINK=2]="LINK"}(r||(r={}));new Set([1,2])},250539:(e,n,t)=>{t.d(n,{o:()=>r})
;var r;!function(e){e[e.LIST=1]="LIST";e[e.LIST_WITH_IMAGE=2]="LIST_WITH_IMAGE";e[e.GALLERY=3]="GALLERY"}(r||(r={}));new Set([1,2,3])},425537:(e,n,t)=>{t.d(n,{s:()=>r});var r;!function(e){e[e.APPLICATION=1]="APPLICATION";e[e.ACTIVITY_APPLICATION=2]="ACTIVITY_APPLICATION";e[e.CONNECTION=3]="CONNECTION"}(r||(r={}))},310790:(e,n,t)=>{t.d(n,{c:()=>r});var r;!function(e){e[e.SEARCH_RESULTS=1]="SEARCH_RESULTS";e[e.MUSIC=2]="MUSIC"}(r||(r={}))},16455:(e,n,t)=>{t.d(n,{j:()=>r});var r;!function(e){e[e.BLOCK_MESSAGE=1]="BLOCK_MESSAGE";e[e.FLAG_TO_CHANNEL=2]="FLAG_TO_CHANNEL";e[e.USER_COMMUNICATION_DISABLED=3]="USER_COMMUNICATION_DISABLED";e[e.QUARANTINE_USER=4]="QUARANTINE_USER"}(r||(r={}))},921354:(e,n,t)=>{t.d(n,{q:()=>r});var r;!function(e){e[e.UNKNOWN=0]="UNKNOWN";e[e.MESSAGE_SEND=1]="MESSAGE_SEND";e[e.GUILD_MEMBER_JOIN_OR_UPDATE=2]="GUILD_MEMBER_JOIN_OR_UPDATE"}(r||(r={}))},986468:(e,n,t)=>{t.d(n,{G:()=>r});var r;!function(e){e.RULE_NAME="rule_name";e.CHANNEL_ID="channel_id"
;e.DECISION_ID="decision_id";e.KEYWORD="keyword";e.KEYWORD_MATCHED_CONTENT="keyword_matched_content";e.FLAGGED_MESSAGE_ID="flagged_message_id";e.TIMEOUT_DURATION="timeout_duration";e.QUARANTINE_USER="quarantine_user";e.DECISION_REASON="decision_reason";e.ALERT_ACTIONS_EXECUTION="alert_actions_execution"}(r||(r={}))},901399:(e,n,t)=>{t.d(n,{D:()=>r});var r;!function(e){e.JOIN_ATTEMPTS="join_attempts";e.RAID_DATETIME="raid_datetime"}(r||(r={}))},216829:(e,n,t)=>{var r;!function(e){e.BIO="bio";e.USERNAME="username"}(r||(r={}))},828153:(e,n,t)=>{t.d(n,{f:()=>r});var r;!function(e){e[e.KEYWORD=1]="KEYWORD";e[e.SPAM_LINK=2]="SPAM_LINK";e[e.ML_SPAM=3]="ML_SPAM";e[e.DEFAULT_KEYWORD_LIST=4]="DEFAULT_KEYWORD_LIST";e[e.MENTION_SPAM=5]="MENTION_SPAM";e[e.USER_PROFILE=6]="USER_PROFILE";e[e.SERVER_POLICY=7]="SERVER_POLICY"}(r||(r={}))}}]);
//# sourceMappingURL=c8e491b27fe94f60d363.js.map