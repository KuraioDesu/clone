"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[11177,75651],{975651:(e,t,n)=>{n.r(t);n.d(t,{default:()=>b});var r=n(785893),o=n(667294),i=n(707961),a=n(473708),c=n(300393),u=n.n(c);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e){l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return l(e)}function f(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return p(e,t)}var h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&p(e,t)}(n,e);var t=d(n);function n(){s(this,n);var e;(e=t.apply(this,arguments)).state={value:"",error:null,isLoading:!1};e.handleSubmit=function(t){t.preventDefault();var n=e.state.value,r=e.props,o=r.handleSubmit,i=r.onClose,a=r.onError;e.setState({isLoading:!0});o(n).then((function(e){return i(null!=e?e:void 0)}),(function(t){if(null!=t.body){null==a||a(t.body);t.body.password?e.setState({error:t.body.password,isLoading:!1}):t.body.message&&e.setState({error:t.body.message,isLoading:!1})}}))}
;e.handleCancel=function(){(0,e.props.onClose)()};e.handlePasswordChange=function(t){var n=e.props.onPasswordChange;null==n||n(t);e.setState({value:t})};return e}n.prototype.render=function(){var e=this.props,t=e.title,n=e.actionText,c=e.children,s=e.transitionState,l=this.state,f=l.error,p=l.isLoading,h=l.value,d=o.Children.count(c)>0?(0,r.jsx)(i.Zbd,{type:i.Zbd.Types.WARNING,className:u().card,children:(0,r.jsx)(i.xvT,{className:u().warning,variant:"text-md/normal",children:c})}):null;return(0,r.jsx)(i.Y0X,{transitionState:s,children:(0,r.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,r.jsx)(i.xBx,{separator:!1,children:(0,r.jsx)(i.X6q,{variant:"heading-lg/semibold",children:t})}),(0,r.jsxs)(i.hzk,{children:[d,(0,r.jsxs)(i.xJW,{title:a.Z.Messages.FORM_LABEL_PASSWORD,className:u().spacing,children:[(0,r.jsx)(i.oil,{type:"password",autoComplete:"off",autoFocus:!0,value:h,onChange:this.handlePasswordChange}),null!=f&&""!==f?(0,r.jsxs)(i.xvT,{variant:"text-xs/normal",
color:"text-danger",className:u().error,children:[" ",f," "]}):null]})]}),(0,r.jsxs)(i.mzw,{children:[(0,r.jsx)(i.zxk,{type:"submit",disabled:p||0===h.length,children:null!=n?n:a.Z.Messages.CONFIRM}),(0,r.jsx)(i.zxk,{onClick:this.handleCancel,look:i.zxk.Looks.LINK,color:i.zxk.Colors.PRIMARY,children:a.Z.Messages.CANCEL})]})]})})};return n}(o.PureComponent);y.key=function(){return"password-confirm-modal"};const b=y},411177:(e,t,n)=>{n.r(t);n.d(t,{default:()=>ae});var r=n(785893),o=n(667294),i=n(202351),a=n(975651),c=n(539381),u=n(426797),s=n(82726),l=n(984237),f=n(473903),p=n(294184),h=n.n(p),d=n(468811),y=n.n(d),b=n(999357),E=n(707961),m=n(528180),v=n(836485),R=n(107364),g=n(268335),_=n(376845),C=n(718831),I=n(473708),O=n(517866),P=n.n(O),w=n(637678),j=n.n(w),N=n(518280),S=n.n(N);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e){A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){
return e.__proto__||Object.getPrototypeOf(e)};return A(e)}function T(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t){k=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return k(e,t)}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){c=!0;o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n)
;if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=A(e);if(t){var o=A(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}const F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,
writable:!0,configurable:!0}});t&&k(e,t)}(n,e);var t=M(n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r;(r=t.call(this,e)).handleChange=function(e){r.closePopout();r.setState({phone:e.currentTarget.value})};r.handleKeyPress=function(e){r.closePopout();if(13===e.which){e.preventDefault();r.handleSubmit()}};r.handleSubmit=function(){var e=r.props,t=e.onSubmit,n=e.submitting,o=r.state,i=o.countryCode,a=o.phone;n||null==t||t("".concat(i).concat(a))};r.handleTogglePopout=function(){r.setState({open:!r.state.open})};r.handleClick=function(e){var t=Z(e.code.split(" "),2),n=t[0],o=t[1];r.setState({open:!1,countryCode:n,phone:null!=o?o:""})};var o=Z(g.Z.find((function(e){return"United States"===e.name})).phoneCountryCode.split(" "),2),i=o[0],a=o[1];r.state={countryCode:i,phone:null!=a?a:"",open:!1};return r}var o=n.prototype;o.render=function(){
var e=this.state,t=e.countryCode,n=e.phone,o=e.open,i=this.props,a=i.className,c=i.submitting,u=Z(t.split("+"),2)[1];return(0,r.jsxs)(R.Z,{className:h()(P().phoneField,j().elevationLow,a),align:R.Z.Align.CENTER,grow:0,children:[(0,r.jsxs)(E.zxk,{size:E.PhG.SMALL,className:P().countryButton,color:E.Ttl.PRIMARY,innerClassName:P().countryButtonInner,onClick:this.handleTogglePopout,children:[(0,r.jsxs)(R.Z,{className:h()(P().countryCodeContainer,S().marginReset),justify:R.Z.Justify.CENTER,children:[(0,r.jsx)("div",{className:P().plusSign,children:"+"}),(0,r.jsx)("div",{className:P().countryCode,children:u})]}),(0,r.jsx)(C.Z,{foreground:P().phoneFieldExpand,expanded:o,width:16,height:16})]}),(0,r.jsx)("input",{"aria-label":I.Z.Messages.PHONE_VERIFICATION_PHONE_LABEL,className:P().inputField,value:n,onChange:this.handleChange,onKeyPress:this.handleKeyPress,autoFocus:!0}),(0,r.jsx)(E.zxk,{className:P().sendButton,size:E.PhG.SMALL,submitting:c,onClick:this.handleSubmit,
children:I.Z.Messages.SEND}),o?(0,r.jsx)(_.Z,{onClick:this.handleClick}):null]})};o.closePopout=function(){this.state.open&&this.setState({open:!1})};return n}(o.PureComponent);var L=n(499809),V=n.n(L),B=n(913957),U=n.n(B);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){n(e);return}c.done?t(u):Promise.resolve(u).then(r,o)}function z(e){z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return z(e)}function Y(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e,t){K=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return K(e,t)}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){
var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){c=!0;o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=z(e);if(t){var o=z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}var W=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:
if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};const X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&K(e,t)}(o,e);var t=J(o);function o(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n;(n=t.call(this,e))._animItem=null;n.headerId=y().v4();n.setLottieRef=function(e){n._lottieRef=e};n.handleAddPhone=function(e){if(n.state.animated||null==n._animItem)n.setState({phone:e});else{n._animItem.play()
;n.setState({animated:!0,phone:e})}var t=n.props.onAddPhone;null==t||t(e)};n.handleVerifyCaptcha=function(e){var t=n.state.phone,r=n.props.onVerifyCaptcha;null==r||r(t,e)};n.handleVerifyPhone=function(e){var t=n.props.onVerifyPhone;null==t||t(e)};n.handleResendCode=function(){var e=n.props.onAddPhone;null==e||e(n.state.phone)};n.state={animated:!1,phone:""};return n}var i=o.prototype;i.componentDidMount=function(){var e,t=this;return(e=function(){var e,r,o,i;return W(this,(function(a){switch(a.label){case 0:return[4,Promise.all([n.e(20907).then(n.t.bind(n,320907,19)),n.e(11248).then(n.t.bind(n,211248,23))])];case 1:e=q.apply(void 0,[a.sent(),2]),r=e[0],o=e[1],i=o.default;t._animItem=i.loadAnimation({container:t._lottieRef,renderer:"svg",loop:!0,autoplay:!1,animationData:r});return[2]}}))},function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){Q(i,r,o,a,c,"next",e)}function c(e){Q(i,r,o,a,c,"throw",e)}a(void 0)}))})()}
;i.componentWillUnmount=function(){if(null!=this._animItem){this._animItem.destroy();this._animItem=void 0}};i.render=function(){var e,t,n,o=this.props,i=o.error,a=o.working,c=o.transitionState,u=o.validPhone,s=o.captchaService,l=o.captchaSitekey;e=null!=s?(0,r.jsx)("div",{className:h()(V().description,S().marginBottom20),children:I.Z.Messages.GUILD_JOIN_CAPTCHA_DESCRIPTION}):null!=i&&""!==i?(0,r.jsx)("div",{className:h()(V().description,V().error,S().marginBottom20),children:i}):u?(0,r.jsx)("div",{className:h()(V().description,S().marginBottom20),children:I.Z.Messages.VERIFICATION_PHONE_DESCRIPTION}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:h()(V().description,S().marginBottom20),children:I.Z.Messages.ENTER_PHONE_DESCRIPTION}),(0,r.jsx)("div",{className:h()(V().description,S().marginBottom20),children:I.Z.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()})]});t=u?(0,r.jsxs)(R.Z,{className:V().field,direction:R.Z.Direction.VERTICAL,align:R.Z.Align.CENTER,children:[(0,
r.jsx)(v.Z,{onSubmit:this.handleVerifyPhone}),(0,r.jsx)(E.zxk,{className:S().marginTop8,size:E.PhG.SMALL,look:E.iLD.LINK,color:E.Ttl.PRIMARY,onClick:this.handleResendCode,children:I.Z.Messages.RESEND_CODE})]}):null!=s?(0,r.jsx)(m.Z,{captchaService:s,sitekey:l,onVerify:this.handleVerifyCaptcha}):(0,r.jsx)(F,{className:V().field,onSubmit:this.handleAddPhone,submitting:a});n=null!=s?I.Z.Messages.GUILD_JOIN_CAPTCHA_HEADER:u?I.Z.Messages.VERIFICATION_PHONE_TITLE:I.Z.Messages.ENTER_PHONE_TITLE;return(0,r.jsxs)(E.Y0X,{impressionName:b.zs.USER_VERIFY_PHONE,transitionState:c,className:h()(V().phoneVerificationModal,U().vertical,U().alignCenter,U().justifyCenter,S().marginTop60),"aria-labelledby":this.headerId,children:[(0,r.jsx)("div",{className:V().animationContainer,ref:this.setLottieRef}),(0,r.jsx)("div",{className:h()(V().title,S().marginBottom8),id:this.headerId,children:n}),e,t]})};return o}(o.PureComponent);var $=n(565050);function ee(e,t){(null==t||t>e.length)&&(t=e.length)
;for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function te(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){n(e);return}c.done?t(u):Promise.resolve(u).then(r,o)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){te(i,r,o,a,c,"next",e)}function c(e){te(i,r,o,a,c,"throw",e)}a(void 0)}))}}function re(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){c=!0;o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ie=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:
i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};const ae=o.forwardRef((function(e,t){var n=e.onAddedPhone,p=e.onClose,h=e.transitionState,d=e.reason,y=(0,i.e7)([f.default],(function(){return f.default.getCurrentUser()})),b=(0,i.e7)([l.Z],(function(){return l.Z.getAction()})),E=oe(o.useState(null),2),m=E[0],v=E[1],R=oe(o.useState(null),2),g=R[0],_=R[1],C=oe(o.useState(null),2),O=C[0],P=C[1],w=oe(o.useState(!1),2),j=w[0],N=w[1],S=o.useCallback(function(){var e=ne((function(e){var t;return ie(this,(function(n){switch(n.label){case 0:N(!0);n.label=1;case 1:n.trys.push([1,6,,7])
;return s.Z.isPhoneReverification(y,b)?[4,u.Z.beginReverifyPhone(e,d)]:[3,3];case 2:n.sent();return[3,5];case 3:return[4,u.Z.beginAddPhone(e,d)];case 4:n.sent();n.label=5;case 5:P(null);v(e);return[3,7];case 6:t=n.sent();P(new c.Z(t));return[3,7];case 7:N(!1);return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),[y,d,b]),x=o.useCallback(function(){var e=ne((function(e,t){var n;return ie(this,(function(r){switch(r.label){case 0:N(!0);r.label=1;case 1:r.trys.push([1,6,,7]);return s.Z.isPhoneReverification(y,b)?[4,u.Z.beginReverifyPhone(e,d,t)]:[3,3];case 2:r.sent();return[3,5];case 3:return[4,u.Z.beginAddPhone(e,d,t)];case 4:r.sent();r.label=5;case 5:P(null);v(e);return[3,7];case 6:n=r.sent();P(new c.Z(n));return[3,7];case 7:N(!1);return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),[y,d,b]),A=o.useCallback(function(){var e=ne((function(e){var t,n;return ie(this,(function(r){switch(r.label){case 0:if(null==m||null==y)return[2];N(!0);r.label=1;case 1:
r.trys.push([1,3,,4]);return[4,u.Z.verifyPhone(m,e)];case 2:t=r.sent().token;P(null);_(t);return[3,4];case 3:n=r.sent();P(new c.Z(n));return[3,4];case 4:N(!1);return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),[y,m]),T=o.useCallback(function(){var e=ne((function(e){return ie(this,(function(t){switch(t.label){case 0:return null==g?[2]:s.Z.isPhoneReverification(y,b)?[4,u.Z.reverifyPhone(g,e,d)]:[3,2];case 1:t.sent();return[3,4];case 2:return[4,u.Z.addPhone(g,e,d)];case 3:t.sent();t.label=4;case 4:null==n||n();p();return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),[n,p,g,d,y,b]);if(null!=g)return(0,r.jsx)(a.default,{onClose:p,transitionState:h,title:I.Z.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,handleSubmit:T});var k={};if(null!=O&&Object.keys(O.captchaFields).length>0){var Z=O.captchaFields;k.captchaService=(0,$.B)(Z.captcha_service);k.captchaSitekey=Z.captcha_sitekey}return(0,r.jsx)(X,function(e){for(var t=1;t<arguments.length;t++){
var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){re(e,t,n[t])}))}return e}({onClose:p,transitionState:h,error:null==O?void 0:O.getAnyErrorMessage(),working:j,validPhone:null!=m,onAddPhone:S,onVerifyPhone:A,onVerifyCaptcha:x},k))}))},376845:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(785893),o=n(667294),i=n(294184),a=n.n(i),c=n(824390),u=n.n(c),s=n(496486),l=n.n(s),f=n(268335),p=n(707961),h=n(335186),d=n(107364),y=n(473708),b=n(2270),E=n.n(b),m=n(637678),v=n.n(m);function R(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return g(e)}function _(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function C(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e,t){I=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return I(e,t)}var O=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&I(e,t)}(n,e);var t=P(n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r;(r=t.call(this,e)).onChangeQuery=function(e){r.setState({query:e})};r.onClearQuery=function(){r.setState({query:""})};r.onClick=function(e){var t,n;null===(n=(t=r.props).onClick)||void 0===n||n.call(t,e)};r.state={query:""};return r}var i=n.prototype;i.renderItems=function(){var e=this,t=this.state.query,n=f.Z.flatMap((function(e,t){
var n=e.alpha2,o=e.phoneCountryCodes,i=e.name,a=(0,h.q9)(n);return o.map((function(e){return{key:"".concat(t,"-").concat(e),name:i,translatedName:a,countryData:{name:i,alpha2:n,code:e},children:(0,r.jsxs)(d.Z,{className:E().countryItem,justify:d.Z.Justify.CENTER,align:d.Z.Align.CENTER,children:[(0,r.jsx)(d.Z.Child,{className:E().countryName,children:a}),(0,r.jsx)(d.Z.Child,{className:E().countryCode,grow:0,shrink:0,children:e})]})}}))})),i=l()(n).filter((function(e){return 0===t.length||u()(t.toLowerCase(),e.name.toLowerCase())||u()(t.toLowerCase(),e.translatedName.toLowerCase())})).map((function(t){return(0,o.createElement)(p.mzC.Item,_(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){R(e,t,n[t])}))}return e}({},t),{key:t.key,
onClick:function(){return e.onClick(t.countryData)}}))})).value();return 0===i.length?(0,r.jsx)(p.mzC.Empty,{children:y.Z.Messages.NONE}):(0,r.jsx)(p.w0Z,{className:E().phoneFieldScroller,children:i})};i.render=function(){var e=this.props.className;return(0,r.jsxs)(p.mzC,{className:a()(E().phoneFieldPopout,v().elevationBorderLow,e),children:[(0,r.jsx)(p.mzC.SearchBar,{query:this.state.query,placeholder:y.Z.Messages.SEARCH_COUNTRY,onChange:this.onChangeQuery,onClear:this.onClearQuery,autoComplete:"off"}),(0,r.jsx)(p.mzC.Divider,{}),this.renderItems()]})};return n}(o.PureComponent)},82726:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(496486),o=n.n(r),i=n(2590),a=n(473708);function c(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}var u,s=i.PUi.CAPTCHA,l=i.PUi.EMAIL,f=i.PUi.PHONE,p=i.PUi.REVERIFY_EMAIL,h=i.PUi.REVERIFY_PHONE,d=(c(u={},i.c2C.REQUIRE_VERIFIED_EMAIL,[l]),c(u,i.c2C.REQUIRE_VERIFIED_PHONE,[f]),
c(u,i.c2C.REQUIRE_REVERIFIED_EMAIL,[p]),c(u,i.c2C.REQUIRE_REVERIFIED_PHONE,[h]),c(u,i.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE,[l,f]),c(u,i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,[f,p]),c(u,i.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE,[l,h]),c(u,i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE,[p,h]),c(u,i.c2C.REQUIRE_CAPTCHA,[s]),c(u,i.c2C.AGREEMENTS,[]),u);const y={isPhoneReverification:function(e,t){return void 0!==e&&e.isPhoneVerified()&&(t===i.c2C.REQUIRE_REVERIFIED_PHONE||t===i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE||t===i.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE)},isEmailReverification:function(e){return e===i.c2C.REQUIRE_REVERIFIED_EMAIL||e===i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE||e===i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE},getVerificationTypes:function(e){return null==e||"symbol"==(void 0===e?"undefined":(t=e)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t)?[]:d[e];var t},
getButtonTitle:function(e){switch(e){case i.PUi.EMAIL:return a.Z.Messages.VERIFY_BY_EMAIL;case i.PUi.PHONE:return a.Z.Messages.START_PHONE_VERIFICATION_BUTTON;case i.PUi.REVERIFY_EMAIL:return a.Z.Messages.START_EMAIL_REVERIFICATION_BUTTON;case i.PUi.REVERIFY_PHONE:return a.Z.Messages.START_PHONE_REVERIFICATION_BUTTON;default:return a.Z.Messages.START_VERIFICATION_BUTTON}},areVerificationTypesEqual:function(e,t){return o().isEqual(e,t)}}},836485:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(785893),o=n(667294),i=n(294184),a=n.n(i),c=n(107364),u=n(304404),s=n.n(u);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return f(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}})
;t&&d(e,t)}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){d=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return d(e,t)}var y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}var E=function(e){p(n,e);var t=b(n);function n(){l(this,n);var e;(e=t.apply(this,arguments)).setCodeBlockRef=function(t){e._codeBlockRef=t};e.handleKeyDown=function(t){
var n=8===t.which||37===t.which||39===t.which,r=t.which>=48&&t.which<=57||t.keyCode>=96&&t.keyCode<=105;n||r||t.preventDefault();var o=e.props.onKeyDown;null==o||o(t)};e.handleChange=function(t){var n=e.props.onChange;null==n||n(t.currentTarget.value)};return e}var o=n.prototype;o.render=function(){var e=this.props.className;return(0,r.jsx)("input",{ref:this.setCodeBlockRef,className:a()(s().input,e),maxLength:1,value:null!=this.props.code?this.props.code:void 0,autoFocus:this.props.autoFocus,onKeyDown:this.handleKeyDown,onChange:this.handleChange})};o.focus=function(){var e;null===(e=this._codeBlockRef)||void 0===e||e.focus()};o.blur=function(){var e;null===(e=this._codeBlockRef)||void 0===e||e.blur()};return n}(o.PureComponent);E.defaultProps={autoFocus:!1};var m=function(e){p(n,e);var t=b(n);function n(e){l(this,n);var r;(r=t.call(this,e))._codeBlockRefs=new Array(r.props.count);r.state={codes:new Array(e.count)};return r}var o=n.prototype;o.render=function(){for(var e=function(e){
e===a.length/2&&u.push((0,r.jsx)("div",{className:s().spacer},"spacer"));u.push((0,r.jsx)(E,{ref:function(n){return t.setCodeBlockRef(e,n)},code:a[e],autoFocus:0===e,onChange:function(n){return t.handleChange(e,n)},onKeyDown:function(n){return t.handleKeyDown(e,n)},className:i},e))},t=this,n=this.props,o=n.className,i=n.inputClassName,a=this.state.codes,u=[],l=0;l<a.length;l++)e(l);return(0,r.jsx)(c.Z,{align:c.Z.Align.CENTER,justify:c.Z.Justify.CENTER,className:o,children:u})};o.setCodeBlockRef=function(e,t){this._codeBlockRefs[e]=t};o.handleChange=function(e,t){this.state.codes[e]=t;var n=this.getCodeOrFirstEmptyIndex();if("string"==typeof n)this.submit(n);else{var r=this._codeBlockRefs[n];null==r||r.focus()}};o.handleKeyDown=function(e,t){var n=this.state.codes;if(8===t.which&&e>0&&(null==n[e]||0===n[e].length)){var r=e-1;n[r]="";var o=this._codeBlockRefs[r];null==o||o.focus()}};o.getCodeOrFirstEmptyIndex=function(){for(var e=this.state.codes,t="",n=0;n<e.length;n++){
if(isNaN(parseInt(e[n])))return n;t+=e[n]}return t};o.submit=function(e){var t=this.props.onSubmit;null==t||t(e)};return n}(o.PureComponent);m.defaultProps={count:6};const v=m}}]);
//# sourceMappingURL=2e523b5fe24dc1a0690b.js.map