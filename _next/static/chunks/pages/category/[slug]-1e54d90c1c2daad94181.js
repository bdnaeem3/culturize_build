_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"7Ljw":function(e,t,n){"use strict";n.r(t);var c=n("rePB"),r=n("q1tI"),o=n.n(r),a=n("/MKj"),i=n("L0wF"),u=n("/6/1"),s=n("Twb8"),g=n("6BZX"),l=n("ik4A"),p=n("nOHt"),b=n("og5O"),O=n("Q9QB"),f=n("uuSi"),j=o.a.createElement;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(r.useContext)(b.a).price,t=Object(p.useRouter)(),n=Object(a.d)(Object(s.n)()),c=Object(a.c)(),h=t.query.slug,w=Object(r.useState)("undefined"),y=w[0],S=w[1],k=Object(r.useState)(!1),C=k[0],_=k[1],v=Object(r.useState)(!1),P=v[0],E=v[1],m=Object(r.useState)(""),N=m[0],D=m[1],B=Object(r.useState)(""),T=B[0],L=B[1],X=Object(r.useState)(""),q=X[0],x=X[1],A=Object(r.useState)([]),F=A[0],I=A[1],J=Object(r.useState)([]),Q=J[0],R=J[1],V=Object(r.useState)([]),Z=V[0],z=V[1],H=Object(r.useState)({page:1,range:[1,2,3]}),K=H[0],M=H[1];Object(r.useEffect)((function(){c(Object(u.e)({page:K.page,limit:20,category:h,price:e,sort_by:"".concat(y),condition:q,region:Q,country:F,sub_region:Z}))}),[h,K,e,y,q,Q,F,Z]);return j(o.a.Fragment,null,j("section",{className:"products-area py-5 prolist",style:{backgroundColor:"#f6f9fc"}},j(f.a,{onClick:function(){_(!C)},showSuccess:P,active:C,setShowSuccess:E}),j(g.a,{onClick:function(){localStorage.getItem("authToken")?_(!C):t.push("/login")}}),j(O.a,{onClick:function(){E(!P)},active:P}),j(i.a,{range:K.range,onNext:function(){(null===n||void 0===n?void 0:n.length)>20&&M({page:K.page+1,range:K.range.length===K.page?[K.range.length+1,K.range.length+2,K.range.length+3]:[1,2,3]})},sorBy:function(e){S(e)},zip:N,setZip:function(e){D(e)},countryCheck:F,setCountryCheck:I,regionCheck:Q,setRegionCheck:R,areaCheck:Z,setAreaCheck:z,condition:q,setCondition:function(e){x(e)},selectedDistance:T,setSelectedDistance:function(e){L(e)},onPrevious:function(){(null===n||void 0===n?void 0:n.length)>0&&K.page>1&&M({page:K.page-1,range:K.range.length===K.page?[K.range.length-2,K.range.length-1,K.range.length-0]:[1,2,3]})},current:String(K.page),products:n,onPageClick:function(e){M(d(d({},K),{},{page:e}))}}),j(l.a,null)))}},bsVk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return n("7Ljw")}])}},[["bsVk",0,1,5,2,3,4,6,8,7,9,11,15,16,17]]]);