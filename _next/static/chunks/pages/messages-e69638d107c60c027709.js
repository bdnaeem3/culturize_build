_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{LeNT:function(e,a,t){"use strict";var s=t("DpRu");a.a=Object(s.createConstants)("message",["MESSAGE_INIT","MESSAGE_SUCCESS","MESSAGE_FAILED","GET_USER_MESSAGE_INIT","GET_USER_MESSAGE_SUCCESS","GET_USER_MESSAGE_FAILED","SEND_USER_MESSAGE_INIT","SEND_USER_MESSAGE_SUCCESS","SEND_USER_MESSAGE_FAILED"])},YuTi:function(e,a){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},hrUs:function(e,a,t){"use strict";var s=t("DpRu");a.a=Object(s.createConstants)("categoryMenu",["GET_MENU_CATEGORY_INIT","GET_MENU_CATEGORY_SUCCESS","GET_MENU_CATEGORY_FAILED","GET_MESSAGE_INIT","GET_MESSAGE_SUCCESS","GET_MESSAGE_FAILED","GET_NOTIFICATION_INIT","GET_NOTIFICATION_SUCCESS","GET_NOTIFICATION_FAILED","GET_CART_INIT","GET_CART_SUCCESS","GET_CART_FAILED"])},iNQN:function(e,a,t){"use strict";t.r(a);var s=t("q1tI"),i=t.n(s),n=t("ik4A"),l=t("rePB"),c=t("/MKj"),o=(t("YFqc"),t("wd/R")),r=t.n(o),u=t("g29l"),d=t("x8tL"),m=t("Twb8"),v=t("pj7n"),p=t("sqoZ"),N=t("SCcj"),g=t("FVIk"),b=i.a.createElement,f=function(){var e,a,t,n,o,f=Object(s.useContext)(N.a).userInfo,E=Object(c.c)(),_=Object(c.d)(Object(m.f)()),S=Object(c.d)(Object(m.u)()),x=Object(s.useState)("ALL"),I=x[0],h=x[1],G=Object(s.useState)(""),T=G[0],y=G[1],w=Object(s.useState)(""),A=w[0],O=w[1];return Object(s.useEffect)((function(){E(Object(p.b)({type:"ALL"===I?"usertouser":"SELLING"===I?"selling":"buying"}))}),[I]),Object(s.useEffect)((function(){O(_[0])}),[_]),Object(s.useEffect)((function(){E(Object(v.b)({receiver:A}))}),[A]),b("div",{className:"container"},b("div",{className:"row yourcartyourcart"},b(d.a,null),b("div",{className:"col-lg-3 col-md-12"},b(u.a,{three:"active"})),b("div",{className:"col-lg-9 col-md-12",style:{marginBottom:"100px"}},b("div",{className:"row"},b("div",{className:"col-md-12"},b("div",{className:"w-100 d-flex justify-content-between align-items-center res38"},b("p",{className:"db-maint1 mb-0"},"Messages"),b("p",{className:"db-maint2 mb-0"},"Home / Dashboard / Messages")),b("hr",{style:{margin:"12px auto 30px",width:"100%"}})),b("div",{className:"col-md-4 chatmsgs pr-0"},b("div",{className:"d-flex justify-content-start align-items-center"},b("p",{onClick:function(){h("ALL")},style:{cursor:"pointer"},className:"msgtabs ".concat("ALL"===I?"active":"")},"All"),b("p",{onClick:function(){h("SELLING")},style:{cursor:"pointer"},className:"msgtabs ".concat("SELLING"===I?"active":"")},"Selling"),b("p",{onClick:function(){h("BUYING")},style:{cursor:"pointer"},className:"msgtabs ".concat("BUYING"===I?"active":"")},"Buying")),b("div",{className:"d-flex justify-content-between align-items-center",style:{marginBottom:"32px",marginTop:"20px"}},b("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",style:{borderRadius:"16px",height:"32px",backgroundColor:"#eeeeee",width:"calc(100% - 70px)"}}),b("button",{className:"d-flex justify-content-center align-items-center",style:{backgroundColor:"#ffffff",height:"40px",width:"40px",border:"none",borderRadius:"50%",margin:"auto 10px auto 20px",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.09), 0 1px 1px 0 rgba(0, 0, 0, 0.12)"}},b("i",{className:"bx bxs-send",style:{fontSize:"20px",color:"#0097a7"}}))),null===_||void 0===_?void 0:_.map((function(e){var a,t,s,i,n,l,c;return b("div",{style:{cursor:"pointer"},onClick:function(){O(e)}},b("a",{className:"dropdown-item d-flex flex-row p-2 activechat"},b("div",{className:"d-flex align-items-center justify-content-start col p-0"},b("span",{style:{fontSize:10}},b("img",{onError:function(e){return e.target.src="https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG"},src:"ALL"!==I?null===(null===e||void 0===e||null===(a=e.receiver)||void 0===a?void 0:a.profile_image)?"https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG":null===e||void 0===e||null===(t=e.receiver)||void 0===t?void 0:t.profile_image:null===(null===e||void 0===e||null===(s=e.user)||void 0===s?void 0:s.profile_image)?"https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG":null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.profile_image,className:"msg-pro-img",alt:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.username,style:{float:"left"}})),b("div",{style:{overflow:"hidden"}},b("p",{className:"msg-title mb-0"},"ALL"!==I?null===e||void 0===e||null===(l=e.receiver)||void 0===l?void 0:l.username:null===e||void 0===e||null===(c=e.user)||void 0===c?void 0:c.username,b("span",{className:"msg-time"},r()(null===e||void 0===e?void 0:e.created_at).format("DD/MM/YYYY"))),b("p",{className:"msg-msg mb-0"},null===e||void 0===e?void 0:e.text)))))}))),b("div",{className:"col-md-6"},b("div",{className:"w-100 white-card-msgbox",style:{padding:"60px 16px 76px",position:"relative",minHeight:"650px"}},b("div",{style:{height:"512px",maxHeight:"512px",overflowY:"scroll",overflowX:"hidden"}},b("div",{className:"msgboxheader"},b("img",{onError:function(e){return e.target.src="https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG"},src:null===A||void 0===A||null===(e=A.user)||void 0===e?void 0:e.profile_image,className:"",alt:null===A||void 0===A||null===(a=A.user)||void 0===a?void 0:a.username,style:{height:"30px"}}),b("p",{className:"msgh-t1 ml-2 mr-3"},null===A||void 0===A||null===(t=A.user)||void 0===t?void 0:t.username),b("p",{className:"msgh-t2"}," missing Active 5 mins ago")),b("div",{className:"msgboxfooter"},b("div",{className:"input-group mb-3"},b("div",{className:"input-group-prepend"}),b("input",{type:"text",className:"form-control",placeholder:"type here...","aria-label":"","aria-describedby":"basic-addon1",value:T,onChange:function(e){y(e.target.value)}}),b("div",{className:"input-group-append"},b("button",{className:"prepostbtn",type:"button",onClick:function(){var e,a,t;""===T?Object(g.c)("error","Please enter message"):(E(Object(v.a)({receiver:"ALL"!==I?null===A||void 0===A||null===(e=A.receiver)||void 0===e?void 0:e.uuid:null===A||void 0===A||null===(a=A.user)||void 0===a?void 0:a.uuid,text:T,product:null===A||void 0===A||null===(t=A.product)||void 0===t?void 0:t.uuid})),setTimeout((function(){E(Object(v.b)({receiver:A}))}),500),y(""))},style:{borderRadius:"0 10px 10px 0"}},b("i",{className:"bx bxs-send",style:{fontSize:"18px",opacity:"0.6"}}))))),S.slice().reverse().map((function(e){var a,t,s,n,c,o;return b(i.a.Fragment,null,(null===e||void 0===e||null===(a=e.sender)||void 0===a?void 0:a.username)===(null===f||void 0===f?void 0:f.username)?b("div",{className:"d-flex align-items-end justify-content-end w-100 mb-3"},b("div",{className:"d-flex flex-column align-items-end w-100"},b("p",{className:"chatmsgmsg-t1 selected mb-0"},null===e||void 0===e?void 0:e.text),b("p",{className:"chatmsgmsg-t2 mb-0"},r()(null===e||void 0===e?void 0:e.created_at).fromNow())),b("img",(n={onError:function(e){return e.target.src="https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG"},src:null===e||void 0===e||null===(t=e.sender)||void 0===t?void 0:t.profile_image,className:""},Object(l.a)(n,"onError",(function(e){return e.target.src="https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG"})),Object(l.a)(n,"alt",null===e||void 0===e||null===(s=e.sender)||void 0===s?void 0:s.username),Object(l.a)(n,"style",{height:"32px",borderRadius:"50%",marginLeft:"12px",marginRight:"5px"}),n))):b("div",{className:"d-flex align-items-end justify-content-end w-100 mb-3"},b("img",{onError:function(e){return e.target.src="https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG"},src:null===e||void 0===e||null===(c=e.sender)||void 0===c?void 0:c.profile_image,className:"",alt:null===e||void 0===e||null===(o=e.sender)||void 0===o?void 0:o.username,style:{height:"32px",borderRadius:"50%",marginRight:"12px"}}),b("div",{className:"d-flex flex-column align-items-start w-100"},b("p",{className:"chatmsgmsg-t1 rightmsg mb-0"},null===e||void 0===e?void 0:e.text),b("p",{className:"chatmsgmsg-t2 mb-0"},r()(null===e||void 0===e?void 0:e.created_at).fromNow()))))}))))),(null===A||void 0===A?void 0:A.product)&&b("div",{className:"col-md-2 p-0"},b("div",{className:"w-100 p-2 white-card-msgs-ad d-flex flex-column align-items-center justify-content-center"},b("img",{onError:function(e){return e.target.src="https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG"},src:null===A||void 0===A||null===(n=A.product)||void 0===n||null===(o=n.images)||void 0===o?void 0:o[0],className:"",alt:"flag",style:{height:"125px"}}),b("p",{className:"msgad-t1"}," ","MISSING EVERYTHING POPLAY Caramel And Cinnamon Flavour"),b("p",{className:"msgad-t2"},"$21"),b("p",{className:"msgad-t3"},"View All Item"),b("button",{className:"msg-ad-btn-1 w-100 my-2"}," ","MISSING EVERYTHING Add to Cart"),b("button",{className:"msg-ad-btn-2 w-100 mb-1"}," ","MISSING EVERYTHING Buy it Now")))))))},E=i.a.createElement;a.default=function(){return E(i.a.Fragment,null,E("section",{className:"products-area py-5 yourcartyourcart",style:{backgroundColor:"#f6f9fc"}},E(f,null),E(n.a,null)))}},pj7n:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return l}));var s=t("aWKK"),i=t("LeNT"),n=(Object(s.a)(i.a.MESSAGE_INIT),Object(s.a)(i.a.GET_USER_MESSAGE_INIT)),l=Object(s.a)(i.a.SEND_USER_MESSAGE_INIT)},sqoZ:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return l})),t.d(a,"a",(function(){return c}));var s=t("aWKK"),i=t("hrUs"),n=(Object(s.a)(i.a.GET_MENU_CATEGORY_INIT),Object(s.a)(i.a.GET_MESSAGE_INIT)),l=Object(s.a)(i.a.GET_NOTIFICATION_INIT),c=Object(s.a)(i.a.GET_CART_INIT)},ydbG:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/messages",function(){return t("iNQN")}])}},[["ydbG",0,1,5,13,2,3,4,6,8,7,10,12,15]]]);