(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rooms","chunk-5e7635af","chunk-233fcbac","chunk-70242282","chunk-0635b894","chunk-2d0d643d","chunk-2d22c8c0","chunk-2d0dee78"],{"28ac":function(t,o,i){"use strict";i.r(o),i.d(o,"roomList",function(){return c}),i.d(o,"roomType",function(){return m});var s=i("cebc"),e=i("c0d6"),a=i("2ef0"),r=i("8846"),n=i("f462"),c=r,m=function(){var t={};return Object(a["forOwn"])(e["default"].getters.roomCategory,function(o,i){if(o.iconIntro){var e=o.iconIntro;t[i]=Object(s["a"])({},o,{iconIntro:e.map(function(t){return Object(s["a"])({},t,{icon:(t.icon||[]).map(function(t){return n[t]})})})})}else t[i]=o}),t}},"39f1":function(t,o,i){"use strict";i.r(o);var s=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"page-rooms page-container"},[i("v-layout",{attrs:{row:""}},[i("v-flex",{staticClass:"primary-title",attrs:{xs6:""}},[i("title-boat",{attrs:{targetClass:t.title.targetClass,textUp:t.title.textUp,textDown:t.title.textDown}})],1)],1),i("v-carousel",{staticClass:"index-topic__carousels",attrs:{height:"43.86vw","hide-delimiters":""}},t._l(t.roomList[t.roomKey].imgList,function(t,o){return i("v-carousel-item",{key:"roomsPhotoList"+o,staticClass:"page-rooms__carousels",attrs:{"prev-icon":"mdi-chevron-left-circle","next-icon":"mdi-chevron-right-circle"}},[i("div",{staticClass:"primary-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t||null,expression:"item || null"}],staticClass:"lg",attrs:{alt:""}})])])}),1),i("div",{staticClass:"primary-content page-rooms__content"},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs9:""}},[i("div",{staticClass:"page-rooms__left"},[i("div",{staticClass:"page-rooms__space"},[i("div",{staticClass:"page-rooms__theme white--text secondary"},[t._v("房間介紹")]),t._l(t.roomType[t.roomTypeKey].info,function(o,s){return i("p",{key:"roomTypeInfo"+s,staticClass:"page-rooms__text textBlack--text"},[t._v(t._s(o.text)+"："+t._s(o.val))])}),t._l(t.roomType[t.roomTypeKey].iconIntro,function(o,s){return i("div",{key:"iconList"+s,staticClass:"page-rooms__services-icon"},[o?[i("p",[t._v(t._s(o.text))]),i("v-layout",{staticClass:"page-rooms__icon-list",attrs:{row:"",wrap:""}},[o.icon?t._l(o.icon,function(o,s){return i("v-flex",{key:"icon"+s,staticClass:"page-rooms__icon-list--icon",attrs:{xs4:"",md3:""}},[o?[i("v-icon",[t._v(t._s(o.icon))]),i("span",[t._v(t._s(o.val))])]:t._e()],2)}):t._e()],2)]:t._e()],2)})],2),i("div",{staticClass:"page-rooms__space"},[i("div",{staticClass:"page-rooms__theme white--text info"},[t._v("住房須知")]),i("p",{staticClass:"page-rooms__text textBlack--text"},[t._v(t._s(t.info.liveNotice))]),i("ul",t._l(t.info.liveRule,function(o,s){return i("li",{key:"liveRule"+s,staticClass:"page-rooms__text textBlack--text"},[t._v(t._s(o))])}),0),i("p",{staticClass:"page-rooms__text textBlack--text"},[t._v(t._s(t.info.end))])]),i("div",{staticClass:"page-rooms__space"},[i("div",{staticClass:"page-rooms__theme white--text warning"},[t._v("退訂政策")]),i("ul",t._l(t.info.unsubscribe,function(o,s){return i("li",{key:"unsubscribe"+s,staticClass:"page-rooms__text textBlack--text"},[t._v(t._s(o))])}),0)])])]),i("v-flex",{attrs:{xs3:""}},[i("div",{staticClass:"page-rooms__right"},[i("a",{attrs:{href:t.orderLink,target:"_blank"}},[i("v-btn",{staticClass:"page-rooms__order-btn white--text error"},[t._v(t._s(t.orderBtnText))])],1)])])],1)],1),i("show-rooms")],1)},e=[],a=i("cebc"),r=(i("cadf"),i("551c"),i("f751"),i("097d"),i("752c")),n=i("d540"),c=i("5b30"),m=i("28ac"),l=i("2f62"),f={name:"pageRooms",components:{titleBoat:r["default"],showRooms:n["default"]},mounted:function(){this.scrollToTop()},watch:{roomKey:{handler:function(t){t||this.$router.push("/")},immediate:!0}},computed:Object(a["a"])({roomKey:function(){return this.$route.query&&this.$route.query.t?(this.$vuetify.goTo(-200,c["default"].scrollPagAni),this.$route.query.t):null},roomTypeKey:function(){return this.roomKey?this.roomList[this.roomKey].type:null},title:function(){return{textUp:this.roomType[this.roomTypeKey].textUp||"房間介紹",textDown:"ROOMS_".concat(this.roomList[this.roomKey].textDown||""),targetClass:"target-rooms"}}},Object(l["b"])({info:"roomIntro",orderLink:"orderLink"})),data:function(){return{constVar:c["default"],roomList:m["roomList"],roomType:Object(m["roomType"])(),orderBtnText:"立即\n訂房"}},methods:{scrollToTop:function(){var t=this;setTimeout(function(){t.$vuetify.goTo(-200,c["default"].scrollPagAni)})}}},u=f,g=i("2877"),p=i("6544"),v=i.n(p),d=i("8336"),b=i("5e66"),_=i("3e35"),x=i("0e8f"),h=i("132d"),y=i("a722"),j=Object(g["a"])(u,s,e,!1,null,null,null);o["default"]=j.exports;v()(j,{VBtn:d["a"],VCarousel:b["a"],VCarouselItem:_["a"],VFlex:x["a"],VIcon:h["a"],VLayout:y["a"]})},"5d6b":function(t,o,i){var s=i("e53d").parseInt,e=i("a1ce").trim,a=i("e692"),r=/^[-+]?0[xX]/;t.exports=8!==s(a+"08")||22!==s(a+"0x16")?function(t,o){var i=e(String(t),3);return s(i,o>>>0||(r.test(i)?16:10))}:s},"728d":function(t,o,i){"use strict";i.r(o);var s=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"rooms-list"},[i("a",{staticClass:"rooms-list__link",on:{click:function(o){return t.$router.push({path:t.url,query:t.info})}}},[i("v-layout",{attrs:{column:""}},[i("v-flex",{staticClass:"rooms-list__img",attrs:{xs8:""}},[i("div",{staticClass:"rooms-list__img-ani"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"img"}],staticClass:"sm",attrs:{alt:""}})])]),i("v-flex",{staticClass:"rooms-list__content",attrs:{xs4:""}},[i("v-layout",{attrs:{column:""}},[i("v-flex",{staticClass:"rooms-list__title justify-center",attrs:{xs6:""}},[i("h2",{class:["primary--text text-xs-center rooms-list__title-text",t.title.length>=10?"letter-space-zero":""]},[t._v(t._s(t.title))])]),i("v-flex",{staticClass:"rooms-list__intro",attrs:{xs6:""}},[i("p",{staticClass:"textBlack--text text-xs-center"},[t._v(t._s(t.intro))])])],1)],1)],1)],1)])},e=[],a={name:"roomsList",props:["img","title","intro","url","info"],data:function(){return{}}},r=a,n=i("2877"),c=i("6544"),m=i.n(c),l=i("0e8f"),f=i("a722"),u=Object(n["a"])(r,s,e,!1,null,null,null);o["default"]=u.exports;m()(u,{VFlex:l["a"],VLayout:f["a"]})},7445:function(t,o,i){var s=i("63b6"),e=i("5d6b");s(s.G+s.F*(parseInt!=e),{parseInt:e})},8846:function(t){t.exports={afas:{textDown:"愛琴海",type:"s4",imgList:["/img/rooms/afas/afas01.jpg","/img/rooms/afas/afas02.jpg","/img/rooms/afas/afas03.jpg","/img/rooms/afas/afas04.jpg"]},afcs:{textDown:"加勒比海",type:"s4",imgList:[]},atis:{textDown:"愛爾蘭海",type:"s2",imgList:["/img/rooms/atis/atis01.jpg","/img/rooms/atis/atis02.jpg","/img/rooms/atis/atis04.jpg","/img/rooms/atis/atis01.jpg"]},atcs:{textDown:"珊瑚海",type:"s2",imgList:["/img/rooms/atcs/atcs01.jpg","/img/rooms/atcs/atcs02.jpg","/img/rooms/atcs/atcs03.jpg","/img/rooms/atcs/atcs04.jpg"]},atio:{textDown:"印度洋",type:"s2",imgList:["/img/rooms/atio/atio01.jpg","/img/rooms/atio/atio02.jpg","/img/rooms/atio/atio03.jpg","/img/rooms/atio/atio04.jpg"]},afao:{textDown:"北冰洋",type:"s4",imgList:["/img/rooms/afao/afao01.jpg","/img/rooms/afao/afao02.jpg","/img/rooms/afao/afao03.jpg","/img/rooms/afao/afao04.jpg"]},atpo:{textDown:"太平洋",type:"s2",imgList:["/img/rooms/atpo/atpo01.jpg","/img/rooms/atpo/atpo02.jpg","/img/rooms/atpo/atpo03.jpg"]},ata:{textDown:"大西洋",type:"s2",imgList:["/img/rooms/ata/ata01.jpg","/img/rooms/ata/ata02.jpg","/img/rooms/ata/ata03.jpg"]},bfcr:{textDown:"栗梅紅",type:"r4",imgList:["/img/rooms/bfcr/bfcr01.jpg","/img/rooms/bfcr/bfcr02.jpg","/img/rooms/bfcr/bfcr03.jpg","/img/rooms/bfcr/bfcr04.jpg"]},btsb:{textDown:"天空藍",type:"r2",imgList:["/img/rooms/btsb/btsb01.jpg","/img/rooms/btsb/btsb02.jpg","/img/rooms/btsb/btsb03.jpg","/img/rooms/btsb/btsb04.jpg"]},bfoo:{textDown:"桔子橙",type:"r4",imgList:["/img/rooms/bfoo/bfoo01.jpg","/img/rooms/bfoo/bfoo02.jpg","/img/rooms/bfoo/bfoo03.jpg","/img/rooms/bfoo/bfoo04.jpg"]},bfv:{textDown:"紫蘿蘭",type:"r4",imgList:["/img/rooms/bfv/bfv01.jpg","/img/rooms/bfv/bfv02.jpg","/img/rooms/bfv/bfv03.jpg","/img/rooms/bfv/bfv04.jpg"]},bfag:{textDown:"蘋果綠",type:"r4",imgList:["/img/rooms/bfag/bfag01.jpg","/img/rooms/bfag/bfag02.jpg","/img/rooms/bfag/bfag03.jpg","/img/rooms/bfag/bfag04.jpg"]},bfc:{textDown:"可可棕",type:"r4",imgList:["/img/rooms/bfc/bfc01.jpg","/img/rooms/bfc/bfc02.jpg","/img/rooms/bfc/bfc03.jpg","/img/rooms/bfc/bfc04.jpg"]},bfcp:{textDown:"珊瑚粉",type:"r4",imgList:["/img/rooms/bfcp/bfcp01.jpg","/img/rooms/bfcp/bfcp02.jpg","/img/rooms/bfcp/bfcp03.jpg","/img/rooms/bfcp/bfcp04.jpg"]}}},a1ce:function(t,o,i){var s=i("63b6"),e=i("25eb"),a=i("294c"),r=i("e692"),n="["+r+"]",c="​",m=RegExp("^"+n+n+"*"),l=RegExp(n+n+"*$"),f=function(t,o,i){var e={},n=a(function(){return!!r[t]()||c[t]()!=c}),m=e[t]=n?o(u):r[t];i&&(e[i]=m),s(s.P+s.F*n,"String",e)},u=f.trim=function(t,o){return t=String(e(t)),1&o&&(t=t.replace(m,"")),2&o&&(t=t.replace(l,"")),t};t.exports=f},b9e9:function(t,o,i){i("7445"),t.exports=i("584a").parseInt},d540:function(t,o,i){"use strict";i.r(o);var s=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"show-rooms"},[i("v-layout",{staticClass:"show-rooms__outer",attrs:{row:""}},[i("v-flex",{staticClass:"show-rooms__line",attrs:{xs5:""}},[i("h2",{staticClass:"text-under-line"})]),i("v-flex",{staticClass:"show-rooms__text",attrs:{xs2:""}},[i("h2",{staticClass:"show-rooms__title secondary--text"},[t._v("探索房型")])]),i("v-flex",{staticClass:"show-rooms__line",attrs:{xs5:""}},[i("h2",{staticClass:"text-under-line"})])],1),i("rooms-carousels")],1)},e=[],a=i("f4bb"),r={name:"showRooms",components:{roomsCarousels:a["default"]},data:function(){return{}}},n=r,c=i("2877"),m=i("6544"),l=i.n(m),f=i("0e8f"),u=i("a722"),g=Object(c["a"])(n,s,e,!1,null,null,null);o["default"]=g.exports;l()(g,{VFlex:f["a"],VLayout:u["a"]})},e692:function(t,o){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,o,i){t.exports=i("b9e9")},f462:function(t){t.exports={home:{icon:"mdi-home-variant",val:"獨立房間"},suite:{icon:"mdi-seat-individual-suite",val:"加大雙人床"},suiteDouble:{icon:"mdi-seat-individual-suite",val:"加大雙人床*2"},smokingOff:{icon:"mdi-smoking-off",val:"禁菸房"},shower:{icon:"mdi-shower",val:"獨立衛浴"},wifi:{icon:"mdi-wifi",val:"無線網路"},face:{icon:"mdi-face",val:"鏡子"},hanger:{icon:"mdi-hanger",val:"衣架"},phone:{icon:"mdi-phone-classic",val:"電話"},seat:{icon:"mdi-seat-recline-normal",val:"椅子"},air:{icon:"mdi-air-conditioner",val:"冷氣"},tv:{icon:"mdi-television-classic",val:"電視"},tvGuide:{icon:"mdi-television-guide",val:"多頻道智能電視盒"},shoe:{icon:"mdi-shoe-formal",val:"室內拖鞋"},router:{icon:"mdi-router-wireless",val:"路由器"},tooth:{icon:"mdi-tooth",val:"牙膏、牙刷"},crop:{icon:"mdi-crop-square",val:"浴巾"},buffer:{icon:"mdi-buffer",val:"毛巾"},gas:{icon:"mdi-gas-cylinder",val:"洗髮精"},hockey:{icon:"mdi-hockey-puck",val:"沐浴乳"},fan:{icon:"mdi-fan",val:"吹風機"},curling:{icon:"mdi-curling",val:"衛生紙"},toilet:{icon:"mdi-toilet",val:"乾溼分離"},square:{icon:"mdi-square",val:"防滑地墊"},fridge:{icon:"mdi-fridge",val:"冰箱"},bottle:{icon:"mdi-bottle-wine",val:"免費瓶裝水"},kettle:{icon:"mdi-kettle",val:"快速燒水壺"},briefcase:{icon:"mdi-briefcase",val:"行李寄放(免費)"},elevator:{icon:"mdi-elevator",val:"有電梯"},car:{icon:"mdi-car",val:"機場接送(免費)"},washing:{icon:"mdi-washing-machine",val:"自助洗衣免費"},food:{icon:"mdi-food",val:"餐飲服務"},parking:{icon:"mdi-parking",val:"P停車免費"},stairs:{icon:"mdi-stairs",val:"需上下樓梯"},motorbike:{icon:"mdi-motorbike",val:"機車免費"},baby:{icon:"mdi-baby-buggy",val:"親子友善"},account:{icon:"mdi-account-group",val:"交誼廳"},ticket:{icon:"mdi-ticket",val:"代售旅遊票劵"},smoke:{icon:"mdi-smoke-detector",val:"煙霧偵測器"},cctv:{icon:"mdi-cctv",val:"CCTV"},light:{icon:"mdi-alarm-light",val:"緊急照明燈"},fire:{icon:"mdi-fire-truck",val:"滅火器"},medical:{icon:"mdi-medical-bag",val:"醫藥箱"},bullhorn:{icon:"mdi-bullhorn",val:"警報器"}}},f4bb:function(t,o,i){"use strict";i.r(o);var s=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"index-rooms"},[i("v-carousel",{staticClass:"index-topic__carousels",attrs:{height:"36.22vw","hide-delimiters":"",interval:18e3}},t._l(t.roomsList,function(o,s){return i("v-carousel-item",{key:"roomsList"+s,attrs:{"prev-icon":"mdi-chevron-left-circle","next-icon":"mdi-chevron-right-circle"}},[i("v-layout",{staticClass:"index-rooms__content",attrs:{row:""}},t._l(o,function(t,o){return i("v-flex",{key:"roomsListGroup"+o,attrs:{xs4:""}},[i("rooms-list",{attrs:{url:"/rooms",img:t.img,title:t.title,intro:t.intro,info:{t:t.type}}})],1)}),1)],1)}),1)],1)},e=[],a=i("e814"),r=i.n(a),n=i("cebc"),c=i("728d"),m=i("2f62"),l={name:"indexRooms",components:{roomsList:c["default"]},computed:Object(n["a"])({},Object(m["b"])(["roomsSM"]),{roomsList:function(){return this.roomsSM.reduce(function(t,o,i){var s=r()(i/3,10);return t[s]?t[s].push(o):t.push([o]),t},[])}})},f=l,u=i("2877"),g=i("6544"),p=i.n(g),v=i("5e66"),d=i("3e35"),b=i("0e8f"),_=i("a722"),x=Object(u["a"])(f,s,e,!1,null,null,null);o["default"]=x.exports;p()(x,{VCarousel:v["a"],VCarouselItem:d["a"],VFlex:b["a"],VLayout:_["a"]})}}]);