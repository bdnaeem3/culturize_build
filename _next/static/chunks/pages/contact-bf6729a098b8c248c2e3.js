_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"1OyB":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},ALdH:function(e,t,r){"use strict";r.r(t);var n,a=r("o0o1"),o=r.n(a),u=r("rePB"),l=r("HaE+"),c=r("q1tI"),i=r.n(c),s=r("Ix5F"),f=new Uint8Array(16);function p(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(f)}var m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(e){return"string"===typeof e&&m.test(e)},b=[],h=0;h<256;++h)b.push((h+256).toString(16).substr(1));var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]).toLowerCase();if(!d(r))throw TypeError("Stringified UUID is invalid");return r};var v=function(e,t,r){var n=(e=e||{}).random||(e.rng||p)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return y(n)},N=r("YFqc"),w=r.n(N),g=r("KYPV"),_=r("ik4A"),x=r("/MKj"),O=r("N76A"),E=r("k4Hw"),S=i.a.createElement;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=Object(x.c)();return S(i.a.Fragment,null,S("div",{className:"c-contact"},S(s.a,{pageTitle:"Contact Us",homePageUrl:"/",homePageText:"Home",activePageText:"Contact Us"})),S("div",{className:"container-fluid cul-contact requestitem",style:{backgroundColor:"#f7f9fa"}},S("div",{className:"row"},S("div",{className:"col-sm-12"},S("div",{style:{maxWidth:"1076px",backgroundColor:"white",margin:"60px auto 120px",border:"1px solid #d8dde2",padding:"60px",borderRadius:"6px",display:"flex"},className:"res8"},S("div",{className:"col-md-7 p-sm-0 left-form"},S("div",{className:"text-left pb-4"},S("h3",{style:{marginRight:"30%"}},"Get in touch with us by filling the details below")),S(g.b,{initialValues:{name:"",phone_number:"",email:"",query:""},onSubmit:function(){var t=Object(l.a)(o.a.mark((function t(r,n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setSubmitting,n.setErrors,n.setStatus,a=n.resetForm,e(Object(O.b)(C({question_id:v()},r))),a();case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),validationSchema:E.b},(function(e){e.submitCount>0&&(e.validateOnChange=!0);var t=e.values,r=e.touched,n=e.errors,a=(e.dirty,e.isSubmitting,e.handleChange),o=e.handleBlur,u=e.handleSubmit;e.handleReset,e.setFieldValue,e.getFieldMeta;return S("form",{onSubmit:u,className:"c-form"},S("div",{className:"form-group"},S("label",{htmlFor:"userName"},"Full Name"),S("input",{type:"text",className:"form-control",id:"fullName",name:"name",placeholder:"Enter full name",value:t.name,onChange:a,onBlur:o}),n.name&&r.name&&S("div",{className:"input-feedback"},n.name)),S("div",{className:"form-group"},S("label",{htmlFor:"userName"},"Phone number"),S("input",{type:"number",className:"form-control",id:"fullName",placeholder:"Enter your phone number",name:"phone_number",value:t.phone_number,onChange:a,onBlur:o}),n.phone_number&&r.phone_number&&S("div",{className:"input-feedback"},n.phone_number)),S("div",{className:"form-group"},S("label",{htmlFor:"userName"},"Email Address"),S("input",{type:"text",className:"form-control",id:"fullName",name:"email",placeholder:"Enter your email address",value:t.email,onChange:a,onBlur:o}),n.email&&r.email&&S("div",{className:"input-feedback"},n.email)),S("div",{className:"form-group"},S("label",{htmlFor:"exampleFormControlTextarea1"},"Write Your Query"),S("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"4",name:"query",placeholder:"Enter your query here",value:t.query,onChange:a,onBlur:o}),n.query&&r.query&&S("div",{className:"input-feedback"},n.query)),S("button",{type:"submit",className:"default-btn w-100",style:{height:"48px"}},"Submit"))}))),S("div",{className:"col-md-5 p-sm-0 text-left "},S("div",{className:"right-s single-footer-widget mb-0"},S("p",{className:"small-label"},"Mail us at"),S("p",{className:"l-text"},"Support@culturize.com"),S("p",{className:"small-label"},"Support Call "),S("p",{className:"l-text"},"+880 9365 23456"),S("p",{className:"small-label"},"Address"),S("p",{className:"m-label"}," Postal Address:"),S("p",{className:"s-text"},"Ataturk Tower, suite 2B ( Level 1 ), 22, Kemal Ataturk Avenue, Dhaka 1213, BANGLADESH"),S("p",{className:"m-label"},"Corporate Address:"),S("p",{className:"s-text"},"870 Market St Suite 640, San Francisco, CA 94102, UNITIED STATES OF AMERICA"),S("p",{className:"small-label mt-3"},"Connect With Social"),S("ul",{className:"social-link"},S("li",null,S(w.a,{href:"https://www.facebook.com/culturize/"},S("a",{href:"https://www.facebook.com/culturize/",className:"d-block",target:"_blank"},S("i",{className:"bx bxl-facebook"})))),S("li",null,S(w.a,{href:"https://www.twitter.com/culturize/"},S("a",{href:"https://www.twitter.com/culturize/",className:"d-block",target:"_blank"},S("i",{className:"bx bxl-twitter"})))),S("li",null,S(w.a,{href:"https://www.instagram.com/culturize/"},S("a",{href:"https://www.instagram.com/culturize/",className:"d-block",target:"_blank"},S("i",{className:"bx bxl-instagram"})))),S("li",null,S(w.a,{href:"https://www.linkedin.com/company/culturize"},S("a",{href:"https://www.linkedin.com/company/culturize",className:"d-block",target:"_blank"},S("i",{className:"bx bxl-linkedin"})))),S("li",null,S(w.a,{href:"https://pin.it/1aQELg7"},S("a",{href:"https://pin.it/1aQELg7",className:"d-block",target:"_blank"},S("i",{className:"bx bxl-pinterest-alt"})))),S("li",null,S(w.a,{href:"https://vm.tiktok.com/ZMdnoj3SA/"},S("a",{href:"https://vm.tiktok.com/ZMdnoj3SA/",className:"d-block",target:"_blank"},S("i",{class:"fab fa-tiktok"}))))),S("button",{className:"quick-chat"},"Quick Chat"))))))),S(_.a,null))}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,a,o,u){try{var l=e[o](u),c=l.value}catch(i){return void r(i)}l.done?t(c):Promise.resolve(c).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var u=e.apply(t,r);function l(e){n(u,a,o,l,c,"next",e)}function c(e){n(u,a,o,l,c,"throw",e)}l(void 0)}))}}r.d(t,"a",(function(){return a}))},JX7q:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},Ji7U:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("s4An");function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(n.a)(e,t)}},N76A:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return c}));var n=r("aWKK"),a=r("RM62"),o=Object(n.a)(a.a.AUTH_INIT),u=Object(n.a)(a.a.PARTNER_INIT),l=Object(n.a)(a.a.SINGUP_INIT),c=Object(n.a)(a.a.CONTACT_INIT)},RM62:function(e,t,r){"use strict";var n=r("DpRu");t.a=Object(n.createConstants)("auth",["AUTH_INIT","AUTH_SUCCESS","AUTH_FAILED","LOG_OUT","PARTNER_INIT","PARTNER_SUCCESS","PARTNER_FAILED","SINGUP_INIT","SINGUP_SUCCESS","SINGUP_FAILED","CONTACT_INIT","CONTACT_SUCCESS","CONTACT_FAILED"])},YFqc:function(e,t,r){e.exports=r("cTJO")},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),a=r("7KCV");t.__esModule=!0,t.default=void 0;var o,u=a(r("q1tI")),l=r("elyg"),c=r("nOHt"),i=new Map,s=window.IntersectionObserver,f={};var p=function(e,t){var r=o||(s?o=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),i.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function m(e,t,r,n){(0,l.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),f[t+"%"+r]=!0)}var d=function(e){var t=!1!==e.prefetch,r=u.default.useState(),a=n(r,2),o=a[0],i=a[1],d=(0,c.useRouter)(),b=d&&d.pathname||"/",h=u.default.useMemo((function(){var t=(0,l.resolveHref)(b,e.href,!0),r=n(t,2),a=r[0],o=r[1];return{href:a,as:e.as?(0,l.resolveHref)(b,e.as):o||a}}),[b,e.href,e.as]),y=h.href,v=h.as;u.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,l.isLocalURL)(y)&&!f[y+"%"+v])return p(o,(function(){m(d,y,v)}))}),[t,o,y,v,d]);var N=e.children,w=e.replace,g=e.shallow,_=e.scroll;"string"===typeof N&&(N=u.default.createElement("a",null,N));var x=u.Children.only(N),O={ref:function(e){e&&i(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(r))&&(e.preventDefault(),null==u&&(u=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,y,v,w,g,_)}};return t&&(O.onMouseEnter=function(e){(0,l.isLocalURL)(y)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),m(d,y,v,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(O.href=(0,l.addBasePath)((0,l.addLocale)(v,d&&d.locale,d&&d.defaultLocale))),u.default.cloneElement(x,O)};t.default=d},foSv:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},lqnA:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r("ALdH")}])},md7G:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("cDf5"),a=r.n(n),o=r("JX7q");function u(e,t){return!t||"object"!==a()(t)&&"function"!==typeof t?Object(o.a)(e):t}},o0o1:function(e,t,r){e.exports=r("ls82")},s4An:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"a",(function(){return n}))},vuIU:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return a}))}},[["lqnA",0,1,2,3,10,20]]]);