(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["location","chunk-3db82698","chunk-2d2311e3","chunk-2d0c18ec","chunk-2d22c342","chunk-2d0d3dd9","chunk-74b64517","chunk-2d22fdaf","chunk-2d21e73b"],{3210:function(t,e,a){t.exports=a.p+"img/icon_header.2f9012a0.svg"},"470c":function(t,e,a){t.exports=a.p+"img/icon_airplane.ec821eca.svg"},"5f1c":function(t,e,a){t.exports=a.p+"img/icon_ship.22c89b84.svg"},"752c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["title-boat",t.targetClass]},[a("v-layout",{staticClass:"title-boat__up",attrs:{row:""}},[a("v-flex",{staticClass:"title-boat__text",attrs:{xs9:"","justify-center":"","align-end":""}},[a("h2",{staticClass:"primary--text"},[t._v(t._s(this.textUp))])]),a("v-flex",{staticClass:"title-boat__img",attrs:{xs3:""}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.titleImg,expression:"titleImg"}],attrs:{alt:""}}),a("img",{class:["title-boat__star title-boat-start-one-"+t.textUp],attrs:{src:t.titleBoatStar,alt:""}}),a("img",{class:["title-boat__star title-boat-start-two-"+t.textUp],attrs:{src:t.titleBoatStar,alt:""}}),a("img",{class:["title-boat__star title-boat-start-three-"+t.textUp],attrs:{src:t.titleBoatStar,alt:""}}),a("img",{class:["title-boat__star title-boat-start-four-"+t.textUp],attrs:{src:t.titleBoatStar,alt:""}})])],1),a("v-layout",{staticClass:"title-boat__down",attrs:{row:""}},[a("v-flex",{staticClass:"title-boat__text",attrs:{xs9:"","justify-center":"","align-start":""}},[a("h3",{staticClass:"primary--text"},[t._v(t._s(this.textDown))])])],1)],1)},s=[],r=(a("14b9"),a("cffa")),o=a("3210"),l=a.n(o),n=a("d16e"),c=a.n(n),f={name:"titleBoat",props:["targetClass","textUp","textDown"],mounted:function(){var t=new r["b"],e=document.querySelectorAll(".title-boat-start-one-".concat(this.textUp));t.to(e,1,{top:"50%",right:"0",scale:1.2,rotation:"0",ease:r["a"].easeNone,autoAlpha:0}),t.to(e,1,{top:"17%",right:"5%",scale:1,rotation:"90",ease:r["a"].easeNone,autoAlpha:1}),t.to(e,1,{top:"-3%",right:"16%",scale:.55,rotation:"180",ease:r["a"].easeNone}),t.to(e,1,{top:"-14%",right:"28%",scale:0,rotation:"360",ease:r["a"].easeNone});t.repeat(-1);var a=document.querySelectorAll(".title-boat-start-two-".concat(this.textUp)),i=new r["b"];i.to(a,1,{top:"50%",right:"0",scale:1.2,rotation:"0",ease:r["a"].easeNone,autoAlpha:0}),i.to(a,1,{top:"17%",right:"5%",scale:1,rotation:"90",ease:r["a"].easeNone,autoAlpha:1}),i.to(a,1,{top:"-3%",right:"16%",scale:.55,rotation:"180",ease:r["a"].easeNone}),i.to(a,1,{top:"-14%",right:"28%",scale:0,rotation:"360",ease:r["a"].easeNone});i.repeat(-1),i.delay(1);var s=document.querySelectorAll(".title-boat-start-three-".concat(this.textUp)),o=new r["b"];o.to(s,1,{top:"50%",right:"0",scale:1.2,rotation:"0",ease:r["a"].easeNone,autoAlpha:0}),o.to(s,1,{top:"17%",right:"5%",scale:1,rotation:"90",ease:r["a"].easeNone,autoAlpha:1}),o.to(s,1,{top:"-3%",right:"16%",scale:.55,rotation:"180",ease:r["a"].easeNone}),o.to(s,1,{top:"-14%",right:"28%",scale:0,rotation:"360",ease:r["a"].easeNone});o.repeat(-1),o.delay(2);var l=document.querySelectorAll(".title-boat-start-four-".concat(this.textUp)),n=new r["b"];n.to(l,1,{top:"50%",right:"0",scale:1.2,rotation:"0",ease:r["a"].easeNone,autoAlpha:0}),n.to(l,1,{top:"17%",right:"5%",scale:1,rotation:"90",ease:r["a"].easeNone,autoAlpha:1}),n.to(l,1,{top:"-3%",right:"16%",scale:.55,rotation:"180",ease:r["a"].easeNone}),n.to(l,1,{top:"-14%",right:"28%",scale:0,rotation:"360",ease:r["a"].easeNone});n.repeat(-1),n.delay(3)},data:function(){return{titleImg:l.a,titleBoatStar:c.a}},methods:{}},u=f,p=a("2877"),g=a("6544"),d=a.n(g),m=a("0e8f"),_=a("a722"),h=Object(p["a"])(u,i,s,!1,null,null,null);e["default"]=h.exports;d()(h,{VFlex:m["a"],VLayout:_["a"]})},"7e638":function(t,e,a){t.exports=a.p+"img/map_airplane.e95712e2.png"},b6f6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-location page-container"},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"primary-title",attrs:{xs6:""}},[a("title-boat",{attrs:{targetClass:t.title.targetClass,textUp:t.title.textUp,textDown:t.title.textDown}})],1)],1),a("div",{staticClass:"page-location__content"},t._l(t.locationList,function(t,e){return a("location-list",{key:"locationList"+e,attrs:{title:t.title,titleIcon:t.titleIconSrc,targetTitle:t.targetTitle,targetAddress:t.targetAddress,trafficTitle:t.trafficTitle,trafficTitleTip:t.trafficTitleTip,trafficList:t.trafficList,image:t.imageSrc}})}),1)],1)},s=[],r=a("752c"),o=a("eed1"),l=a("f1de"),n=a.n(l),c=a("470c"),f=a.n(c),u=a("5f1c"),p=a.n(u),g=a("ea96"),d=a.n(g),m=a("7e638"),_=a.n(m),h=a("d62e"),b=a.n(h),v=a("5b30"),x={name:"pageLocation",components:{titleBoat:r["default"],locationList:o["default"]},mounted:function(){this.scrollToTop()},data:function(){return{constVar:v["default"],title:{textUp:"交通位置",textDown:"LOCATION",targetClass:"target-location"},locationList:[{title:"民宿地理位置",titleIconSrc:n.a,targetTitle:"飛樂米星空號位於",targetAddress:"澎湖縣馬公市山水里22鄰珠江182號",trafficTitle:"民宿距離",trafficList:[{target:"馬公機場",describe:"車程約",number:"12",unit:"分鐘",moreInfo:"",targetUrl:""},{target:"馬公港口",describe:"車程約",number:"15",unit:"分鐘",moreInfo:"",targetUrl:""},{target:"馬公市區",describe:"車程約",number:"15",unit:"分鐘",moreInfo:"",targetUrl:""},{target:"山水沙灘",describe:"車程約",number:"2",unit:"分鐘",moreInfo:"",targetUrl:""}],imageSrc:d.a},{title:"搭船",titleIconSrc:p.a,targetTitle:"馬公碼頭位於",targetAddress:"澎湖縣馬公市新營路25號",trafficTitle:"船班資訊",trafficTitleTip:"(游標移至下方顯示更多)",trafficList:[{target:"滿天星號",describe:"航程約",number:"80",unit:"分鐘",moreInfo:"滿天星航運：馬公 06-9269721、布袋 05-3470948",targetUrl:"http://www.aaaaa.com.tw/"},{target:"凱旋三號",describe:"航程約",number:"85",unit:"分鐘",moreInfo:"凱旋航運：馬公 06-9277995、布袋 05-3471886",targetUrl:"http://www.no3-farnlin.com.tw/"},{target:"凱旋六號",describe:"航程約",number:"85",unit:"分鐘",moreInfo:"凱旋航運：馬公 06-9277995、布袋 05-3471886",targetUrl:"http://www.no3-farnlin.com.tw/"},{target:"百麗客輪",describe:"航程約",number:"60",unit:"分鐘",moreInfo:"百麗客輪: 馬公 06-9268199 布袋 05-3472366",targetUrl:"https://www.pescadoresferry.com.tw"},{target:"台華輪(高雄)",describe:"航程約",number:"270",unit:"分鐘",moreInfo:"台華輪：馬公 06-9264087",targetUrl:"http://www.tnc-kao.com.tw/about.aspx"}],imageSrc:b.a},{title:"搭飛機",titleIconSrc:f.a,targetTitle:"澎湖機場位於",targetAddress:"澎湖縣湖西鄉隘門村126-5號",trafficTitle:"班機資訊",trafficTitleTip:"(點擊航空名稱前往該航空官網)",trafficList:[{target:"立榮航空",describe:"航程約",number:"30～50",unit:"分鐘",moreInfo:"",targetUrl:"https://www.uniair.com.tw/uniweb/index.aspx"},{target:"華信航空",describe:"航程約",number:"30～50",unit:"分鐘",moreInfo:"",targetUrl:"https://www.mandarin-airlines.com/"}],imageSrc:_.a}]}},methods:{scrollToTop:function(){var t=this;setTimeout(function(){t.$vuetify.goTo(-200,v["default"].scrollPagAni)})}}},w=x,T=a("2877"),y=a("6544"),C=a.n(y),U=a("0e8f"),I=a("a722"),A=Object(T["a"])(w,i,s,!1,null,null,null);e["default"]=A.exports;C()(A,{VFlex:U["a"],VLayout:I["a"]})},d16e:function(t,e,a){t.exports=a.p+"img/titleBoatStar.6f171a9b.svg"},d62e:function(t,e,a){t.exports=a.p+"img/map_ship.eeaa9f3d.png"},ea96:function(t,e,a){t.exports=a.p+"img/map_position.28822f79.png"},eed1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-list"},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"location-list__left",attrs:{xs8:""}},[a("div",{staticClass:"location-list__title text-under-line"},[a("div",{staticClass:"location-list__title--img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.titleIcon,expression:"titleIcon"}],attrs:{alt:""}})]),a("h2",{staticClass:"primary--text"},[t._v(t._s(t.title))])]),a("div",{staticClass:"location-list__address"},[a("p",{staticClass:"primary--text"},[t._v(t._s(t.targetTitle))]),a("h3",{staticClass:"error--text"},[t._v(t._s(t.targetAddress))])]),a("div",{staticClass:"location-list__traffic"},[a("h3",{staticClass:"primary--text location-list__traffic--title"},[t._v("\n          "+t._s(t.trafficTitle)+"\n          "),t.trafficTitleTip?a("span",[t._v(t._s(t.trafficTitleTip))]):t._e()]),t._l(t.trafficList,function(e,i){return a("div",{key:"trafficList"+i,staticClass:"location-list__traffic-list"},[a("div",{staticClass:"primary--text location-list__traffic-list--row"},[a("div",{class:["location-list__traffic-list--target",e.targetUrl?"location-list__traffic-list--target-click cursor-pointer":""],on:{click:function(a){return t.methodToOutsidePage(e.targetUrl)}}},[t._v(t._s(e.target))]),a("div",{staticClass:"location-list__traffic-list--describe"},[t._v(t._s(e.describe))]),a("div",{staticClass:"location-list__traffic-list--number white--text error"},[t._v(t._s(e.number))]),a("div",{staticClass:"location-list__traffic-list--unit"},[t._v(t._s(e.unit))])]),e.moreInfo?a("div",{staticClass:"grey lighten-3 textBlack--text location-list__traffic-list--more-info"},[a("span",[t._v(t._s(e.moreInfo))])]):t._e()])})],2)]),a("v-flex",{staticClass:"location-list__right",attrs:{xs4:""}},[a("div",{staticClass:"location-list__img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"image"}],class:t.image?"":"lg",attrs:{alt:""}})])])],1)],1)},s=[],r=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"locationList",props:["title","titleIcon","targetTitle","targetAddress","trafficTitle","trafficTitleTip","trafficList","image"],data:function(){return{methodToOutsidePage:function(t){(/^http:/.test(t)||/^https:/.test(t))&&window.open(t)}}}}),o=r,l=a("2877"),n=a("6544"),c=a.n(n),f=a("0e8f"),u=a("a722"),p=Object(l["a"])(o,i,s,!1,null,null,null);e["default"]=p.exports;c()(p,{VFlex:f["a"],VLayout:u["a"]})},f1de:function(t,e,a){t.exports=a.p+"img/icon_position.256a75a2.svg"}}]);