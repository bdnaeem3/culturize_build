_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{"fC/G":function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),c=a.n(s),o=a("ik4A"),i=a("1OyB"),l=a("vuIU"),n=a("JX7q"),r=a("Ji7U"),m=a("md7G"),d=a("foSv"),u=a("rePB"),p=(a("YFqc"),a("/MKj")),f=a("GGqY"),b=a("s1Rd"),g=a("mr2b"),N=a("g29l"),h=a("x8tL"),v=c.a.createElement;function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return Object(m.a)(this,a)}}var w=function(e){Object(r.a)(a,e);var t=y(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return e=t.call.apply(t,[this].concat(c)),Object(u.a)(Object(n.a)(e),"state",{QuickViewModal:!1,modalProduct:{},products:[],pageOfItems:[],currentPage:0,pageSize:0}),Object(u.a)(Object(n.a)(e),"onChangePage",(function(t,a){var s=a.currentPage,c=a.pageSize;e.setState({pageOfItems:t,currentPage:s,pageSize:c}),window.scrollTo({top:0,left:100,behavior:"smooth"})})),Object(u.a)(Object(n.a)(e),"toggleModal",(function(){e.setState({QuickViewModal:!e.state.QuickViewModal})})),Object(u.a)(Object(n.a)(e),"handleAddToCart",(function(t){e.props.addToCart(t),f.b.success("Added to the cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})})),Object(u.a)(Object(n.a)(e),"passDataToModal",(function(t){e.setState({modalProduct:t})})),Object(u.a)(Object(n.a)(e),"toggleViewChangePasswordModal",(function(){e.setState({ChangePasswordModal:!e.state.ChangePasswordModal})})),Object(u.a)(Object(n.a)(e),"toggleViewChangeEmailModal",(function(){e.setState({ChangeEmailModal:!e.state.ChangeEmailModal})})),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({products:this.props.products})}},{key:"render",value:function(){return v("div",{className:"container"},v(f.a,null),v("div",{className:"row yourcartyourcart"},v(h.a,null),v("div",{className:"col-lg-3 col-md-12"},v(N.a,{eight:"active"})),v("div",{className:"col-lg-9 col-md-12",style:{marginBottom:"100px"}},v("div",{className:"row"},v("div",{className:"col-md-12"},v("div",{className:"w-100 d-flex justify-content-between align-items-center res38"},v("p",{className:"db-maint1 mb-0"},"Settings"),v("p",{className:"db-maint2 mb-0"},"Home / Dashboard / Settings")),v("hr",{style:{margin:"12px auto 30px",width:"100%"}})),v("div",{className:"col-md-12"},v("div",{className:"w-100 white-card-setting mb-4 res51"},v("p",{className:"w-100 settings-t1 mb-3"},"Account Password"),v("div",{className:"w-100 d-flex align-items-center justify-content-start mb-2 res50"},v("p",{className:"settings-t2 mb-0"},"Password"),v("p",{className:"settings-t3 mb-0 mx-2"},"***********"),v("p",{className:"settings-t4 mb-0",onClick:this.toggleViewChangePasswordModal,style:{cursor:"pointer"}},"Change")),v("div",{className:"w-100 d-flex align-items-center justify-content-start mb-2 res50"},v("p",{className:"settings-t2 mb-0"},"Email"),v("p",{className:"settings-t3 mb-0 mx-2"},"abdullah*****noman@gmail.com"),v("p",{className:"settings-t4 mb-0",onClick:this.toggleViewChangeEmailModal,style:{cursor:"pointer"}},"Change")),v("div",{className:"w-100 d-flex align-items-center justify-content-start mb-0"},v("p",{className:"settings-t2 mb-0"},"Member since"),v("p",{className:"settings-t3 mb-0 mx-2"},"January 7, 2020"))),v("div",{className:"w-100 white-card-setting mb-4"},v("p",{className:"w-100 settings-t1 mb-3"},"Security Settings"),v("div",{className:"d-flex align-items-start mb-0"},v("div",{className:"form-check"},v("input",{className:"form-check-input mt-2",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"2step",checked:!0})),v("div",null,v("p",{className:"settings-t5 mb-0"},"2-Step Verification"),v("p",{className:"settings-t6 mb-0"},"Enter the CVV & OTP code to verify payment safer. (Does not apply to JCB & Amex)."))),v("hr",{style:{margin:"16px 0",width:"100%"}}),v("div",{className:"d-flex align-items-start mb-0"},v("div",{className:"form-check"},v("input",{className:"form-check-input mt-2",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"1step"})),v("div",null,v("p",{className:"settings-t5 mb-0"},"1-Step Verification"),v("p",{className:"settings-t6 mb-0"},"Enter only the CVV code for fast and hassle free verification.")))),v("div",{className:"w-100 white-card-setting mb-4"},v("p",{className:"w-100 settings-t1 mb-3"},"Notification"),v("div",{className:"row"},v("div",{className:"col"},v("p",{className:"settings-t7 mb-0"},"Emails"),v("p",{className:"settings-t8 mb-3"},"Send me updates to abdul******noman@gmail.com about"))),v("div",{className:"row"},v("div",{className:"col"},v("p",{className:"settings-t9 mb-0 mt-3"},"Notification Me"),v("p",{className:"settings-t8 mb-3"},"Description")),v("div",{className:"col d-flex"},v("div",{className:"d-flex justify-content-center flex-column align-items-center",style:{width:"60px"}},v("p",{className:"settings-t-10 mb-0"},"Email"),v("div",{className:"myTest custom-control custom-checkbox",style:{marginRight:"-4px"}},v("input",{type:"checkbox",className:"custom-control-input",id:"individual",checked:!0}),v("label",{className:"custom-control-label chkbx-lab",htmlFor:"individual"}))),v("div",{className:"d-flex justify-content-center flex-column align-items-center",style:{width:"60px"}},v("p",{className:"settings-t-10 mb-0"},"Push"),v("div",{className:"myTest custom-control custom-checkbox",style:{marginRight:"-4px"}},v("input",{type:"checkbox",className:"custom-control-input",id:"individual",checked:!0}),v("label",{className:"custom-control-label chkbx-lab",htmlFor:"individual"}))))),v("div",{className:"row"},v("div",{className:"col"},v("p",{className:"settings-t9 mb-0"},"Notification Me"),v("p",{className:"settings-t8 mb-3"},"Description")),v("div",{className:"col d-flex"},v("div",{className:"d-flex justify-content-center flex-column align-items-center",style:{width:"60px"}},v("div",{className:"myTest custom-control custom-checkbox",style:{marginRight:"-4px"}},v("input",{type:"checkbox",className:"custom-control-input",id:"individual"}),v("label",{className:"custom-control-label chkbx-lab",htmlFor:"individual"}))),v("div",{className:"d-flex justify-content-center flex-column align-items-center",style:{width:"60px"}},v("div",{className:"myTest custom-control custom-checkbox",style:{marginRight:"-4px"}},v("input",{type:"checkbox",className:"custom-control-input",id:"individual",checked:!0}),v("label",{className:"custom-control-label chkbx-lab",htmlFor:"individual"}))))),v("div",{className:"row"},v("div",{className:"col"},v("p",{className:"settings-t9 mb-0"},"Notification Me"),v("p",{className:"settings-t8 mb-0"},"Description")),v("div",{className:"col d-flex"},v("div",{className:"d-flex justify-content-center flex-column align-items-center",style:{width:"60px"}},v("div",{className:"myTest custom-control custom-checkbox",style:{marginRight:"-4px"}},v("input",{type:"checkbox",className:"custom-control-input",id:"individual",checked:!0}),v("label",{className:"custom-control-label chkbx-lab",htmlFor:"individual"}))),v("div",{className:"d-flex justify-content-center flex-column align-items-center",style:{width:"60px"}},v("div",{className:"myTest custom-control custom-checkbox",style:{marginRight:"-4px"}},v("input",{type:"checkbox",className:"custom-control-input",id:"individual",checked:!0}),v("label",{className:"custom-control-label chkbx-lab",htmlFor:"individual"})))))))))),v(g.a,{onClick:this.toggleViewChangePasswordModal,active:this.state.ChangePasswordModal}),v(b.a,{onClick:this.toggleViewChangeEmailModal,active:this.state.ChangeEmailModal}))}}]),a}(s.Component),x=Object(p.b)(null,(function(e){return{addToCart:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){e(addToCart(t))}))}}))(w),k=c.a.createElement;t.default=function(e){var t=e.products;return k(c.a.Fragment,null,k("section",{className:"products-area py-5 yourcartyourcart",style:{backgroundColor:"#f6f9fc"}},k(x,{products:t}),k(o.a,null)))}},foSv:function(e,t,a){"use strict";function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return s}))},md7G:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a("cDf5"),c=a.n(s),o=a("JX7q");function i(e,t){return!t||"object"!==c()(t)&&"function"!==typeof t?Object(o.a)(e):t}},mr2b:function(e,t,a){"use strict";var s=a("q1tI"),c=a.n(s),o=(a("YFqc"),a("zM5D")),i=a("/MKj"),l=a("8ihE"),n=a("FVIk"),r=c.a.createElement;t.a=function(e){var t=Object(i.c)(),a=Object(s.useState)(""),c=a[0],m=a[1],d=Object(s.useState)(""),u=d[0],p=d[1],f=Object(s.useState)(""),b=f[0],g=f[1];return r(o.a,{show:e.active,onHide:e.onClick,contentClassName:"successfull-modal-content",dialogClassName:"successfull-modal-dialog"},r(o.a.Header,{closeButton:!0},r(o.a.Title,{className:"cpmt1"},"Change Password")),r(o.a.Body,null,r("form",{className:"ep-form"},r("div",{className:"row"},r("div",{className:"form-group col"},r("label",{htmlFor:"firstname"},"Old Password"),r("input",{value:c,onChange:function(e){m(e.target.value)},type:"text",className:"form-control",id:"firstname"}))),r("div",{className:"row"},r("div",{className:"form-group col"},r("label",{htmlFor:"firstname"},"New Password"),r("input",{value:u,onChange:function(e){p(e.target.value)},type:"text",className:"form-control",id:"firstname"}))),r("div",{className:"row"},r("div",{className:"form-group col"},r("label",{htmlFor:"firstname"},"Password Confrom"),r("input",{value:b,onChange:function(e){g(e.target.value)},type:"text",className:"form-control",id:"firstname"})))),r("div",{className:"yourcartyourcart mt-3 mb-2"},r("button",{onClick:function(){""===c?Object(n.c)("error","Old password is required"):""===u?Object(n.c)("error","New password is required"):""===b?Object(n.c)("error","Confirm password is required"):u!==b?Object(n.c)("error","New password and confirm password did not match"):(t(Object(l.c)({old_password:c,new_password:u,confirm_password:b})),g(""),p(""),m(""),e.onClick(!1))},className:"bluebutton",style:{height:"48px"}},"Update"))))}},nkd9:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return a("fC/G")}])},s1Rd:function(e,t,a){"use strict";var s=a("q1tI"),c=a.n(s),o=(a("YFqc"),a("zM5D")),i=a("/MKj"),l=a("FVIk"),n=a("8ihE"),r=c.a.createElement;t.a=function(){var e=Object(i.c)(),t=Object(s.useState)(""),a=t[0],c=t[1];return r(o.a,{show:undefined.props.active,onHide:undefined.props.onClick,contentClassName:"successfull-modal-content",dialogClassName:"successfull-modal-dialog"},r(o.a.Header,{closeButton:!0},r(o.a.Title,{className:"cpmt1"},"Change Email")),r(o.a.Body,null,r("p",{className:"chemt1"},"Please enter a new email address. Once it's linked to your account, you'll be able to use it to sign into culturize.com"),r("form",{className:"ep-form"},r("div",{className:"row"},r("div",{className:"form-group col"},r("label",{htmlFor:"firstname"},"New Email"),r("input",{value:a,onChange:function(e){c(e.target.value)},type:"email",className:"form-control",id:"firstname"})))),r("div",{className:"yourcartyourcart mt-3 mb-2"},r("button",{onClick:function(){""===a?Object(l.c)("error","email is required"):(e(Object(n.a)({email:a})),c(""),props.onClick(!1))},className:"bluebutton",style:{height:"48px"}},"Submit"))))}}},[["nkd9",0,1,5,2,3,4,7,6,8,13]]]);