"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[18145],{224134:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(744564);const o={startTyping:function(e){r.Z.dispatch({type:"TYPING_START_LOCAL",channelId:e})},stopTyping:function(e){r.Z.dispatch({type:"TYPING_STOP_LOCAL",channelId:e})}}},112897:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(785893),o=(n(667294),n(707961)),i=n(769321),u=n(763933),l=n(691797),a=n(473708);function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.Z.Messages.COPY_ID,c=arguments.length>3?arguments[3]:void 0,s=function(n){var r=null!=t&&n.shiftKey?t:e;(0,l.JG)(r);null==c||c()},f=i.Sb.useSetting();return!__OVERLAY__&&f&&l.wS?(0,r.jsx)(o.sNh,{id:"devmode-copy-id",label:n,action:s,icon:u.Z},"devmode-copy-id"):null}},872017:(e,t,n)=>{n.d(t,{AB:()=>l,ZP:()=>s});var r=n(202351),o=n(21372),i=n(473903),u=n(309945);function l(e){var t=(0,r.e7)([i.default],(function(){return i.default.getCurrentUser()}));return s(null==t?void 0:t.id,e)}
function a(e,t,n){return null!=t&&null!=e?n.getMember(t,e):null}function c(e){var t;return[null!==(t=null==e?void 0:e.communicationDisabledUntil)&&void 0!==t?t:null,(0,u.b)(e)]}function s(e,t){return c((0,r.e7)([o.ZP],(function(){return a(e,t,o.ZP)}),[t,e]))}},869854:(e,t,n)=>{n.d(t,{B0:()=>c,kz:()=>s,yr:()=>f,OG:()=>p});var r=n(281110),o=n(744564),i=n(2590);function u(e,t,n,r,o,i,u){try{var l=e[i](u),a=l.value}catch(e){n(e);return}l.done?t(a):Promise.resolve(a).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){u(i,r,o,l,a,"next",e)}function a(e){u(i,r,o,l,a,"throw",e)}l(void 0)}))}}var a=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){
if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;r=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function c(e,t,n,r){o.Z.dispatch({type:"QUEUE_INTERACTION_COMPONENT_STATE",messageId:e,nonce:t,state:n,indices:r})}function s(e,t){var n=t.data,r=t.messageId,i=t.onCreate,u=t.onSuccess,l=t.onFailure
;o.Z.dispatch({type:"INTERACTION_QUEUE",data:n,nonce:e,messageId:r,onCreate:i,onSuccess:u,onFailure:l})}function f(e,t,n){o.Z.dispatch({type:"INTERACTION_FAILURE",nonce:e,errorMessage:n,errorCode:t})}function p(e,t){return d.apply(this,arguments)}function d(){return(d=l((function(e,t){var n,u;return a(this,(function(l){switch(l.label){case 0:return[4,r.Z.get({url:i.ANM.MESSAGE_INTERACTION_DATA(e,t),oldFormErrors:!0})];case 1:if((n=l.sent()).ok){u=n.body;o.Z.dispatch({type:"LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",channelId:e,messageId:t,interactionData:u})}return[2]}}))}))).apply(this,arguments)}},873934:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(202351),o=n(744564),i=n(73904),u=n(61209),l=n(457896);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0
}):e[t]=n;return e}function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return f(e)}function p(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function d(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){
var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){l=!0;o=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}var O={},g={},E={};function w(e){delete O[e];var t=E[e];null!=t&&delete g[t];delete E[e]}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&y(e,t)}(n,e);var t=v(n);function n(){c(this,n);return t.apply(this,arguments)}var r=n.prototype;r.getInteraction=function(e){var t=g[e.id];return null!=t?O[t]:null};r.getMessageInteractionStates=function(){var e={},t=!0,n=!1,r=void 0;try{for(var o,i=Object.entries(O)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){
var u=b(o.value,2),l=u[0],a=u[1],c=E[l];null!=c&&(e[c]=a.state)}}catch(e){n=!0;r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}return e};r.canQueueInteraction=function(e,t){var n=g[e];return!(null!=n&&null!=O[n]&&O[n].state!==l.F.FAILED||null!=O[t]&&O[t].state!==l.F.FAILED)};r.__getLocalVars=function(){return{interactions:O,messageIdToNonce:g,nonceToMessageId:E}};return n}(r.ZP.Store);m.displayName="InteractionStore";const T=new m(o.Z,{LOGOUT:function(){O={};g={};E={}},INTERACTION_QUEUE:function(e){var t=e.nonce,n=e.messageId,r=e.data,o=e.onCreate,i=e.onCancel,u=e.onSuccess,a=e.onFailure;if(null!=n){g[n]=t;E[t]=n}O[t]={state:l.F.QUEUED,data:r,onCreate:o,onCancel:i,onSuccess:u,onFailure:a}},INTERACTION_CREATE:function(e){var t,n=e.nonce,r=e.interactionId;if(null==n)return!1;var o=O[n];if(null==o||o.state!==l.F.QUEUED)return!1;o.state=l.F.CREATED;null===(t=o.onCreate)||void 0===t||t.call(o,r)},INTERACTION_SUCCESS:function(e){var t,n=e.nonce;if(null==n)return!1
;var r=O[n];if(null==r)return!1;null===(t=r.onSuccess)||void 0===t||t.call(r);w(n)},INTERACTION_FAILURE:function(e){var t,n=e.nonce,r=e.errorCode,o=e.errorMessage;if(null==n)return!1;var u=O[n];if(null==u)return!1;null===(t=u.onFailure)||void 0===t||t.call(u,r,o);u.data.interactionType===i.B8.APPLICATION_COMMAND?w(n):O[n]=p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){s(e,t,n[t])}))}return e}({},u),{state:l.F.FAILED,errorCode:r,errorMessage:o})},MESSAGE_CREATE:function(e){var t=e.message;if(null==t.nonce)return!1;var n,r=O[t.nonce];if(null==r)return!1;null===(n=r.onSuccess)||void 0===n||n.call(r);w(t.nonce)},CHANNEL_SELECT:function(e){var t=e.channelId;if(null==u.Z.getChannel(t))return!1;var n=!0,r=!1,o=void 0;try{
for(var i,a=Object.entries(O)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=b(i.value,2),s=c[0];c[1].state===l.F.FAILED&&w(s)}}catch(e){r=!0;o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}})},457896:(e,t,n)=>{n.d(t,{F:()=>r});var r;!function(e){e[e.QUEUED=0]="QUEUED";e[e.CREATED=1]="CREATED";e[e.FAILED=2]="FAILED"}(r||(r={}))},166076:(e,t,n)=>{n.d(t,{ow:()=>v,tM:()=>E,Sg:()=>_,rQ:()=>m,t$:()=>I,$s:()=>A});var r=n(842227),o=n(281110),i=n(665472),u=n(73904),l=n(671293),a=n(736818),c=n(869854),s=n(873934),f=n(457896),p=n(2590);function d(e,t,n,r,o,i,u){try{var l=e[i](u),a=l.value}catch(e){n(e);return}l.done?t(a):Promise.resolve(a).then(r,o)}function y(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){y(e,t,n[t])}))}return e}var h=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;r=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}
if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function v(e){return null==e||""===e||Number.isNaN(e)?Date.now():r.default.extractTimestamp(e)+9e5}var O,g,E=(g=(O=function(e){var t,n,i,f,d,y,v,O,g,E,m;return h(this,(function(h){switch(h.label){case 0:t=e.componentType,n=e.messageId,i=e.messageFlags,f=e.customId,d=e.indices,y=e.applicationId,v=e.channelId,O=e.guildId,g=e.localState;E=r.default.fromTimestamp(Date.now());return s.Z.canQueueInteraction(n,E)?[4,l.Z.unarchiveThreadIfNecessary(v)]:[2];case 1:h.sent();(0,c.kz)(E,{messageId:n,data:{interactionType:u.B8.MESSAGE_COMPONENT,customId:f,indices:d},onFailure:function(e,t){return T(v,e,t)}});null!=g&&(0,c.B0)(n,E,g,d);m={type:u.B8.MESSAGE_COMPONENT,nonce:E,
guild_id:O,channel_id:v,message_flags:i,message_id:n,application_id:y,session_id:a.default.getSessionId(),data:b({component_type:t,custom_id:f},w(g))};return[4,o.Z.post({url:p.ANM.INTERACTIONS,body:m,timeout:3e3},(function(e){return _(E,e)}))];case 2:h.sent();return[2]}}))},function(){var e=this,t=arguments;return new Promise((function(n,r){var o=O.apply(e,t);function i(e){d(o,n,r,i,u,"next",e)}function u(e){d(o,n,r,i,u,"throw",e)}i(void 0)}))}),function(e){return g.apply(this,arguments)});function w(e){if(null==e)return null;if(e.type===u.re.STRING_SELECT||e.type===u.re.INPUT_TEXT)return e;var t=e.selectedOptions.map((function(e){return e.value}));return{type:e.type,values:t}}var m,T=function(e,t,n){null==n&&null!=t&&i.Z.sendClydeError(e,t)},S=function(e){for(var t in e){var n=e[t];if(null!=n){if("_errors"===t&&Array.isArray(n)){var r,o;return null!==(o=null===(r=n[0])||void 0===r?void 0:r.message)&&void 0!==o?o:null}if("object"==typeof n)return S(n)}}return null},_=function(e,t){
if(!t.ok){if(!t.hasErr){if(t.status>=400&&t.status<500&&t.body){var n=null;if(t.body.code===p.evJ.INVALID_FORM_BODY&&t.body.errors){n=S(t.body.errors);(0,c.yr)(e,void 0,n);return}(0,c.yr)(e,void 0,t.body.message);return}var r;(0,c.yr)(e,null===(r=t.body)||void 0===r?void 0:r.code);return}(0,c.yr)(e)}};!function(e){e[e.SENDING=0]="SENDING";e[e.CREATED=1]="CREATED";e[e.FAILED=2]="FAILED";e[e.TIMED_OUT=3]="TIMED_OUT"}(m||(m={}));var I=function(e,t){var n,o=null==t?void 0:t.state,i=e.state===p.yb.SENT&&v(e.id)<Date.now(),l=e.state===p.yb.SEND_FAILED&&(null==(n=e.id)||""===n||Number.isNaN(n)?Date.now():r.default.extractTimestamp(n)+3e3)<Date.now(),a=(null==t?void 0:t.data.interactionType)===u.B8.APPLICATION_COMMAND,c=e.isCommandType()
;return a&&o===f.F.QUEUED||c&&e.state===p.yb.SENDING?m.SENDING:a&&o===f.F.CREATED||e.hasFlag(p.iLy.LOADING)&&!i?m.CREATED:null!=e.interaction&&e.hasFlag(p.iLy.LOADING)&&i||null!=e.interaction&&!e.hasFlag(p.iLy.LOADING)&&l?m.TIMED_OUT:c&&e.state===p.yb.SEND_FAILED?m.FAILED:void 0};function A(e){for(var t=e.options;1===(null==t?void 0:t.length)&&(t[0].type===u.jw.SUB_COMMAND_GROUP||t[0].type===u.jw.SUB_COMMAND);)t=t[0].options;var n=!0,r=!1,o=void 0;try{for(var i,l=(null!=t?t:[])[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){if(i.value.type===u.jw.ATTACHMENT)return!1}}catch(e){r=!0;o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return!0}},771575:(e,t,n)=>{n.d(t,{Q1:()=>T,_0:()=>S,RK:()=>_,yi:()=>I,DT:()=>A,hz:()=>C,Pq:()=>N,HO:()=>P,Ef:()=>D,NZ:()=>M});var r=n(441143),o=n.n(r),i=n(940060),u=n(281110),l=n(761953),a=(n(327499),n(73904)),c=n(396043),s=n(715107),f=n(407561),p=n(563135),d=n(915840),y=n(68537),b=n(341971),h=n(525261),v=n(2590);function O(e,t,n,r,o,i,u){
try{var l=e[i](u),a=l.value}catch(e){n(e);return}l.done?t(a):Promise.resolve(a).then(r,o)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){O(i,r,o,u,l,"next",e)}function l(e){O(i,r,o,u,l,"throw",e)}u(void 0)}))}}function E(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){E(e,t,n[t])}))}return e}var m=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){
return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;r=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function T(e,t){var n=e.getGuildId();o()(null!=n,"This channel cannot be guildless.");t&&(0,c.yw)(v.rMx.REQUEST_TO_SPEAK_INITIATED,w({},(0,y.s$)(e)));return u.Z.patch({
url:v.ANM.UPDATE_VOICE_STATE(n),body:{request_to_speak_timestamp:t?(new Date).toISOString():null,channel_id:e.id}})}function S(e,t){var n=e.getGuildId();o()(null!=n,"This channel cannot be guildless.");return u.Z.patch({url:v.ANM.UPDATE_VOICE_STATE(n,t),body:{suppress:!1,request_to_speak_timestamp:(new Date).toISOString(),channel_id:e.id}})}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=null==e?void 0:e.getGuildId();o()(null!=r,"This channel cannot be guildless.");var i=f.Z.getVoiceStateForChannel(e.id),l=(0,h.gf)(i);l!==h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK||t||(0,c.yw)(v.rMx.PROMOTED_TO_SPEAKER,w({},(0,y.s$)(e)));return u.Z.patch({url:v.ANM.UPDATE_VOICE_STATE(r),body:w({suppress:t,request_to_speak_timestamp:null,channel_id:e.id},n?{silent:n}:{})})}function I(e){var t=null==e?void 0:e.getGuildId();o()(null!=t,"This channel cannot be guildless.");return u.Z.patch({url:v.ANM.UPDATE_VOICE_STATE(t),body:{suppress:!0,channel_id:e.id,self_video:!1,
self_stream:!1}})}function A(e,t,n){var r=e.getGuildId();o()(null!=r,"This channel cannot be guildless.");return u.Z.patch({url:v.ANM.UPDATE_VOICE_STATE(r,t),body:{suppress:n,channel_id:e.id}})}function C(e,t){if(null!=t&&null!=e){var n=t.getGuildId();o()(null!=n,"This channel cannot be guildless.");A(t,e.id,!0);return u.Z.patch({url:v.ANM.UPDATE_VOICE_STATE(n,e.id),body:{suppress:!0,channel_id:t.id,self_video:!1,self_stream:!1}})}}function N(e,t,n){var r=e.getGuildId();o()(null!=r,"Channel cannot be guildless");var u=e.permissionOverwrites[r],c=w({id:r,type:a.BN.ROLE,allow:p.ZP.NONE,deny:p.ZP.NONE},u);if(n){c.allow=i.Z.add(c.allow,t);c.deny=i.Z.remove(c.deny,t)}else{c.allow=i.Z.remove(c.allow,t);c.deny=i.Z.add(c.deny,t)}l.Z.updatePermissionOverwrite(e.id,c)}function P(e,t,n,r){return j.apply(this,arguments)}function j(){return(j=g((function(e,t,n,r){var o;return m(this,(function(i){switch(i.label){case 0:if(""===t)return[2];s.Z.getVoiceChannelId()===e.id||(0,d.TM)(e);return[4,(0,
b.me)(e.id,t,n,r)];case 1:o=i.sent();_(e,!1,!0);return[2,o]}}))}))).apply(this,arguments)}function D(e,t,n){return Z.apply(this,arguments)}function Z(){return(Z=g((function(e,t,n){return m(this,(function(r){switch(r.label){case 0:return""===t?[2]:[4,(0,b.Dk)(e.id,t,n)];case 1:return[2,r.sent()]}}))}))).apply(this,arguments)}function M(e){return x.apply(this,arguments)}function x(){return(x=g((function(e){return m(this,(function(t){switch(t.label){case 0:return[4,(0,b.Ix)(e.id)];case 1:t.sent();return[2]}}))}))).apply(this,arguments)}},341971:(e,t,n)=>{n.d(t,{me:()=>a,Dk:()=>s,Ix:()=>p});var r=n(281110),o=n(2590);function i(e,t,n,r,o,i,u){try{var l=e[i](u),a=l.value}catch(e){n(e);return}l.done?t(a):Promise.resolve(a).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function l(e){i(u,r,o,l,a,"next",e)}function a(e){i(u,r,o,l,a,"throw",e)}l(void 0)}))}}var l=function(e,t){var n,r,o,i,u={label:0,sent:function(){
if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;r=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}
}([i,l])}}};function a(e,t,n,r,o){return c.apply(this,arguments)}function c(){return(c=u((function(e,t,n,i,u){return l(this,(function(l){switch(l.label){case 0:return[4,r.Z.post({url:o.ANM.STAGE_INSTANCES,body:{channel_id:e,topic:t,privacy_level:n,guild_scheduled_event_id:u,send_start_notification:i}})];case 1:return[2,l.sent().body]}}))}))).apply(this,arguments)}function s(e,t,n){return f.apply(this,arguments)}function f(){return(f=u((function(e,t,n){return l(this,(function(i){switch(i.label){case 0:return[4,r.Z.patch({url:o.ANM.STAGE_INSTANCE(e),body:{topic:t,privacy_level:n}})];case 1:return[2,i.sent().body]}}))}))).apply(this,arguments)}function p(e){return r.Z.delete(o.ANM.STAGE_INSTANCE(e))}},827991:(e,t,n)=>{n.d(t,{q:()=>h,Z:()=>v});var r=n(785893),o=(n(667294),n(202351)),i=n(707961),u=n(224134),l=n(61209),a=n(682776),c=n(715107),s=n(930948),f=n(749565),p=n(2590),d=n(473708);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r
}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){l=!0;o=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){var n=e.id,r="@".concat(f.ZP.getUserTag(e,{decoration:"never"})),o="<@".concat(n,">")
;s.S.dispatchToLastSubscribed(p.CkL.INSERT_TEXT,{plainText:r,rawText:o});null!=t&&u.Z.startTyping(t)}function v(e,t,n){var u=b((0,o.Wu)([c.Z,l.Z,a.Z],(function(){var e=c.Z.getChannelId(t),n=l.Z.getChannel(e);return[e,null!=n&&(n.isMultiUserDM()||a.Z.can(p.Plq.SEND_MESSAGES,n))]}),[t]),2),s=u[0],f=u[1],y=n===p.IlC.POPOUT;return!f||y?null:(0,r.jsx)(i.sNh,{id:"mention",label:d.Z.Messages.MENTION,action:function(){h(e,s)}})}},318313:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(785893),o=(n(667294),n(633878));function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function u(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){
Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function a(e){var t=e.width,n=void 0===t?24:t,a=e.height,c=void 0===a?24:a,s=e.color,f=void 0===s?"currentColor":s,p=e.foreground,d=l(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){i(e,t,n[t])}))}return e}({},(0,o.Z)(d)),{
width:n,height:c,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{fill:f,fillRule:"evenodd",clipRule:"evenodd",className:p,d:"M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"})}))}},763933:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(785893),o=(n(667294),n(633878));function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function u(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function l(e,t){
if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function a(e){var t=e.width,n=void 0===t?24:t,a=e.height,c=void 0===a?24:a,s=e.color,f=void 0===s?"currentColor":s,p=e.foreground,d=l(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){i(e,t,n[t])}))}return e}({},(0,o.Z)(d)),{width:n,height:c,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{className:p,fill:f,
fillRule:"evenodd",clipRule:"evenodd",d:"M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"})}))}}}]);
//# sourceMappingURL=09f9cb5b97489133e27d.js.map