(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3db82698","chunk-2d2311e3","chunk-2d0c18ec","chunk-2d22c342","chunk-2d0d3dd9","chunk-74b64517","chunk-2d22fdaf","chunk-2d21e73b"],{"470c":function(t,i,e){t.exports=e.p+"img/icon_airplane.ec821eca.svg"},"5f1c":function(t,i,e){t.exports=e.p+"img/icon_ship.22c89b84.svg"},"7e638":function(t,i,e){t.exports=e.p+"img/map_airplane.e95712e2.png"},b6f6:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page-location page-container"},[e("v-layout",{attrs:{row:""}},[e("v-flex",{staticClass:"primary-title",attrs:{xs6:""}},[e("title-boat",{attrs:{targetClass:t.title.targetClass,textUp:t.title.textUp,textDown:t.title.textDown}})],1)],1),e("div",{staticClass:"page-location__content"},t._l(t.locationList,function(t,i){return e("location-list",{key:"locationList"+i,attrs:{title:t.title,titleIcon:t.titleIconSrc,targetTitle:t.targetTitle,targetAddress:t.targetAddress,trafficTitle:t.trafficTitle,trafficTitleTip:t.trafficTitleTip,trafficList:t.trafficList,image:t.imageSrc}})}),1)],1)},r=[],s=e("752c"),n=e("eed1"),l=e("f1de"),c=e.n(l),o=e("470c"),f=e.n(o),u=e("5f1c"),d=e.n(u),g=e("ea96"),m=e.n(g),p=e("7e638"),_=e.n(p),v=e("d62e"),w=e.n(v),b=e("5b30"),T={name:"pageLocation",components:{titleBoat:s["default"],locationList:n["default"]},mounted:function(){this.scrollToTop()},data:function(){return{constVar:b["default"],title:{textUp:"交通位置",textDown:"LOCATION",targetClass:"target-location"},locationList:[{title:"民宿地理位置",titleIconSrc:c.a,targetTitle:"飛樂米星空號位於",targetAddress:"澎湖縣馬公市山水里22鄰珠江182號",trafficTitle:"民宿距離",trafficList:[{target:"馬公機場",describe:"車程約",number:"12",unit:"分鐘",moreInfo:"",targetUrl:""},{target:"馬公港口",describe:"車程約",number:"15",unit:"分鐘",moreInfo:"",targetUrl:""},{target:"馬公市區",describe:"車程約",number:"15",unit:"分鐘",moreInfo:"",targetUrl:""},{target:"山水沙灘",describe:"車程約",number:"2",unit:"分鐘",moreInfo:"",targetUrl:""}],imageSrc:m.a},{title:"搭船",titleIconSrc:d.a,targetTitle:"馬公碼頭位於",targetAddress:"澎湖縣馬公市新營路25號",trafficTitle:"船班資訊",trafficTitleTip:"(游標移至下方顯示更多)",trafficList:[{target:"滿天星號",describe:"航程約",number:"80",unit:"分鐘",moreInfo:"滿天星航運：馬公 06-9269721、布袋 05-3470948",targetUrl:"http://www.aaaaa.com.tw/"},{target:"凱旋三號",describe:"航程約",number:"85",unit:"分鐘",moreInfo:"凱旋航運：馬公 06-9277995、布袋 05-3471886",targetUrl:"http://www.no3-farnlin.com.tw/"},{target:"凱旋六號",describe:"航程約",number:"85",unit:"分鐘",moreInfo:"凱旋航運：馬公 06-9277995、布袋 05-3471886",targetUrl:"http://www.no3-farnlin.com.tw/"},{target:"百麗客輪",describe:"航程約",number:"60",unit:"分鐘",moreInfo:"百麗客輪: 馬公 06-9268199 布袋 05-3472366",targetUrl:"https://www.pescadoresferry.com.tw"},{target:"台華輪(高雄)",describe:"航程約",number:"270",unit:"分鐘",moreInfo:"台華輪：馬公 06-9264087",targetUrl:"http://www.tnc-kao.com.tw/about.aspx"}],imageSrc:w.a},{title:"搭飛機",titleIconSrc:f.a,targetTitle:"澎湖機場位於",targetAddress:"澎湖縣湖西鄉隘門村126-5號",trafficTitle:"班機資訊",trafficTitleTip:"(點擊航空名稱前往該航空官網)",trafficList:[{target:"立榮航空",describe:"航程約",number:"30～50",unit:"分鐘",moreInfo:"",targetUrl:"https://www.uniair.com.tw/uniweb/index.aspx"},{target:"華信航空",describe:"航程約",number:"30～50",unit:"分鐘",moreInfo:"",targetUrl:"https://www.mandarin-airlines.com/"}],imageSrc:_.a}]}},methods:{scrollToTop:function(){var t=this;setTimeout(function(){t.$vuetify.goTo(-200,b["default"].scrollPagAni)})}}},x=T,h=e("2877"),C=e("6544"),I=e.n(C),y=e("0e8f"),L=e("a722"),k=Object(h["a"])(x,a,r,!1,null,null,null);i["default"]=k.exports;I()(k,{VFlex:y["a"],VLayout:L["a"]})},d62e:function(t,i,e){t.exports=e.p+"img/map_ship.eeaa9f3d.png"},ea96:function(t,i,e){t.exports=e.p+"img/map_position.28822f79.png"},eed1:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"location-list"},[e("v-layout",{attrs:{row:""}},[e("v-flex",{staticClass:"location-list__left",attrs:{xs8:""}},[e("div",{staticClass:"location-list__title text-under-line"},[e("div",{staticClass:"location-list__title--img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.titleIcon,expression:"titleIcon"}],attrs:{alt:""}})]),e("h2",{staticClass:"primary--text"},[t._v(t._s(t.title))])]),e("div",{staticClass:"location-list__address"},[e("p",{staticClass:"primary--text"},[t._v(t._s(t.targetTitle))]),e("h3",{staticClass:"error--text"},[t._v(t._s(t.targetAddress))])]),e("div",{staticClass:"location-list__traffic"},[e("h3",{staticClass:"primary--text location-list__traffic--title"},[t._v("\n          "+t._s(t.trafficTitle)+"\n          "),t.trafficTitleTip?e("span",[t._v(t._s(t.trafficTitleTip))]):t._e()]),t._l(t.trafficList,function(i,a){return e("div",{key:"trafficList"+a,staticClass:"location-list__traffic-list"},[e("div",{staticClass:"primary--text location-list__traffic-list--row"},[e("div",{class:["location-list__traffic-list--target",i.targetUrl?"location-list__traffic-list--target-click cursor-pointer":""],on:{click:function(e){return t.methodToOutsidePage(i.targetUrl)}}},[t._v(t._s(i.target))]),e("div",{staticClass:"location-list__traffic-list--describe"},[t._v(t._s(i.describe))]),e("div",{staticClass:"location-list__traffic-list--number white--text error"},[t._v(t._s(i.number))]),e("div",{staticClass:"location-list__traffic-list--unit"},[t._v(t._s(i.unit))])]),i.moreInfo?e("div",{staticClass:"grey lighten-3 textBlack--text location-list__traffic-list--more-info"},[e("span",[t._v(t._s(i.moreInfo))])]):t._e()])})],2)]),e("v-flex",{staticClass:"location-list__right",attrs:{xs4:""}},[e("div",{staticClass:"location-list__img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"image"}],class:t.image?"":"lg",attrs:{alt:""}})])])],1)],1)},r=[],s=(e("cadf"),e("551c"),e("f751"),e("097d"),{name:"locationList",props:["title","titleIcon","targetTitle","targetAddress","trafficTitle","trafficTitleTip","trafficList","image"],data:function(){return{methodToOutsidePage:function(t){(/^http:/.test(t)||/^https:/.test(t))&&window.open(t)}}}}),n=s,l=e("2877"),c=e("6544"),o=e.n(c),f=e("0e8f"),u=e("a722"),d=Object(l["a"])(n,a,r,!1,null,null,null);i["default"]=d.exports;o()(d,{VFlex:f["a"],VLayout:u["a"]})},f1de:function(t,i,e){t.exports=e.p+"img/icon_position.256a75a2.svg"}}]);