(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var i=s[o];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},r=[];function o(e){return c.p+"js/"+({Details:"Details"}[e]||e)+"."+{Details:"c3732e17"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s=a[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,n){s=a[e]=[t,n]}));t.push(s[2]=n);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=o(e);var l=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(u);var s=a[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,s[1](l)}a[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="weather-app/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"1cf2":function(e,t,s){"use strict";s("2484")},"225a":function(e,t,s){"use strict";s("9552")},2484:function(e,t,s){},"278a":function(e,t,s){},"2c78":function(e,t,s){"use strict";s("278a")},3710:function(e,t,s){},3961:function(e,t,s){e.exports=s.p+"img/sun.ca921b8b.svg"},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"4f53":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid"},[s("router-view")],1)},r=[],o=(s("5c0b"),s("2877")),c={},i=Object(o["a"])(c,a,r,!1,null,null,null),l=i.exports,u=s("9483");Object(u["a"])("".concat("weather-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});s("d3b7");var d=s("8c4f"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container px-0"},[s("search"),s("days-list"),s("current-day")],1)},b=[],p=(s("96cf"),s("1da1")),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"days-wrapper mb-2"},e._l(10,(function(e){return s("day",{key:"day_"+e,attrs:{data:e}})})),1)},j=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"day-body",class:{active:1===e.data}},[s("h6",[e._v("Fri")]),e._m(0),e._m(1),e._m(2)])},v=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h6",{staticClass:"m-0"},[s("span",[s("strong",[e._v("28"),s("sup",[e._v("°")])])]),s("span",[e._v("19"),s("sup",[e._v("°")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},[n("img",{attrs:{src:s("3961"),alt:"sun"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"m-0"},[s("small",[e._v("Sunny")])])}],g=(s("a9e3"),{name:"Day",props:{data:Number}}),y=g,_=(s("bed3"),Object(o["a"])(y,m,v,!1,null,"44c2a702",null)),C=_.exports,w={name:"DaysList",components:{Day:C}},k=w,O=(s("1cf2"),Object(o["a"])(k,h,j,!1,null,"4c8802ae",null)),x=O.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-3"},[n("autocomplete",{attrs:{search:e.search,placeholder:"Search for a city","aria-label":"Search for a city"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.rootProps,r=t.inputProps,o=t.inputListeners,c=t.resultListProps,i=t.resultListListeners,l=t.results,u=t.resultProps;return[n("div",e._b({},"div",a,!1),[n("div",{staticClass:"input-group bg-white"},[n("span",{staticClass:"input-group-prepend icon"},[n("img",{staticClass:"img-fluid",attrs:{src:s("6672"),alt:"location"}})]),n("input",e._g(e._b({class:["form-control",{"autocomplete-input-no-results":e.noResults}],on:{focus:e.handleFocus,blur:e.handleBlur}},"input",r,!1),o)),n("span",{staticClass:"input-group-append icon"},[n("img",{staticClass:"img-fluid",attrs:{src:s("d103"),alt:"location"}})])]),e.noResults?n("ul",{staticClass:"autocomplete-result-list",staticStyle:{position:"absolute","z-index":"1",width:"100%",top:"100%"}},[n("li",{staticClass:"autocomplete-result"},[e._v("No results found")])]):e._e(),n("ul",e._g(e._b({},"ul",c,!1),i),e._l(l,(function(t,s){return n("li",e._b({key:u[s].id},"li",u[s],!1),[e._v(" "+e._s(t)+" ")])})),0)])]}}])})],1)},S=[],z=s("95bf"),D=(s("8b78"),{name:"Search",data:function(){return{noResults:!1,inputProps:{search:""},results:[]}},components:{Autocomplete:z["a"]},methods:{search:function(){},handleFocus:function(){},handleBlur:function(){}}}),$=D,T=(s("225a"),Object(o["a"])($,E,S,!1,null,"c61b50fe",null)),P=T.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card my-3"},[s("div",{staticClass:"card-body px-3"},[e._m(0),s("days-timeline")],1)])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"temp"},[n("strong",[e._v("28"),n("sup",[e._v("°")])]),n("span",{staticClass:"icon"},[n("img",{attrs:{src:s("3961"),alt:"sun"}})])])}],A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid p-0"},[s("div",{staticClass:"chartWrapper"},[s("div",{staticClass:"canvasContainer"},[s("canvas",{ref:"canvas",attrs:{width:"1200",height:"180"}})])]),e._m(0),s("sun-set-rise")],1)},B=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col stat"},[s("div",{staticClass:"data"},[s("h6",[s("strong",[e._v("Pressure")])]),s("h6",{staticClass:"m-0"},[e._v(" 1013hpa ")])])]),s("div",{staticClass:"col stat"},[s("div",{staticClass:"data"},[s("h6",[s("strong",[e._v("Humidity")])]),s("h6",{staticClass:"m-0"},[e._v(" 93% ")])])])])}],N=(s("4160"),s("159b"),s("30ef")),M=s("337e"),F=s("b166"),q=s("0dae"),G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid p-0"},[e._m(0),s("div",{staticClass:"chartWrapper"},[s("div",{staticClass:"canvasContainer"},[s("canvas",{ref:"sunCanvas",attrs:{height:"150"}})])])])},W=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"d-flex align-items-center justify-content-between p-2"},[s("div",[s("p",{staticClass:"m-0 small"},[s("strong",[e._v("Sunrise")])]),s("p",{staticClass:"m-0 small"},[e._v(" 7:22am ")])]),s("div",[s("p",{staticClass:"m-0 small"},[s("strong",[e._v("Sunset")])]),s("p",{staticClass:"m-0 small"},[e._v(" 6:22pm ")])])])}],H=(s("cb29"),s("ac1f"),s("1276"),s("2186")),U=s("ef06"),I={name:"SunSetRise",data:function(){return{chart:null,data:{labels:[],datasets:[{label:"before sunrise",pointBackgroundColor:"white",pointBorderColor:"rgb(3, 169, 244)",pointBorderWidth:3,borderColor:"rgb(3, 169, 244)",data:[]}]}}},methods:{getTimeline:function(){var e="",t="7:22",s=[],n=[],a=Object(M["a"])(new Date),r=t.split(":"),o=r[0],c=r[1],i=Object(q["a"])(a,5),l=Object(H["a"])(Object(q["a"])(a,parseInt(o)),parseInt(c));return s.push(a.getTime()-i.getTime()),s.push(Object(U["a"])(i,l).getTime()),s.push(a.getTime()-i.getTime()),e="start",n.push(Object(F["a"])(Object(q["a"])(a,5),"hh a")),n.push(Object(F["a"])(Object(q["a"])(a,13),"hh a")),n.push(Object(F["a"])(Object(q["a"])(a,20),"hh a")),{data:s,labels:n,boundary:e}},initChart:function(){var e=this;if(this.$refs["sunCanvas"]){var t=this.$refs["sunCanvas"].getContext("2d"),s=t.createLinearGradient(0,0,0,450);s.addColorStop(0,"rgba(245, 195, 46, 1)"),s.addColorStop(.5,"rgba(245, 195, 46, 0.5)"),s.addColorStop(.51,"rgba(0,0,0, 0.5)"),s.addColorStop(1,"rgba(0,0,0, 1)"),this.data.datasets.forEach((function(t){t.backgroundColor=s;var n=e.getTimeline(),a=n.data,r=n.labels,o=n.boundary;e.data.labels=r,t.fill=o,t.data=a})),this.chart=new N["Chart"](t,{type:"line",data:this.data,options:{events:[],tooltips:{enabled:!1},legend:{display:!1},scales:{yAxes:[{display:!1}]}}})}}},mounted:function(){this.initChart()}},J=I,K=(s("bebf"),Object(o["a"])(J,G,W,!1,null,"0d1d6375",null)),V=K.exports,Y={name:"DaysTimelineChart",components:{SunSetRise:V},data:function(){return{chart:null,data:{labels:[],datasets:[{label:"Days Timeline",pointBackgroundColor:"white",pointBorderColor:"rgb(3, 169, 244)",pointBorderWidth:3,borderColor:"rgb(3, 169, 244)",data:[]}]}}},methods:{getTimeline:function(){for(var e=[],t=[],s=Object(M["a"])(new Date),n=0;n<=24;n++)e.push(50*Math.random()),t.push(Object(F["a"])(Object(q["a"])(s,n),"hh a"));return{data:e,labels:t}},initChart:function(){if(this.$refs["canvas"]){var e=this.$refs["canvas"].getContext("2d"),t=e.createLinearGradient(0,0,0,450);t.addColorStop(0,"rgba(3, 169, 244, 1)"),t.addColorStop(.25,"rgba(3, 169, 244, 0)");var s=this.getTimeline(),n=s.data,a=s.labels;this.data.labels=a,this.data.datasets.forEach((function(e){e.backgroundColor=t,e.data=n})),this.chart=new N["Chart"](e,{type:"line",data:this.data,options:{events:[],tooltips:{enabled:!1},legend:{display:!1},scales:{yAxes:[{display:!1}]}}})}}},mounted:function(){this.initChart()}},Q=Y,X=(s("2c78"),Object(o["a"])(Q,A,B,!1,null,"3850311f",null)),Z=X.exports,ee={name:"CurrentDay",components:{DaysTimeline:Z}},te=ee,se=(s("87fe"),Object(o["a"])(te,L,R,!1,null,"27fb75f3",null)),ne=se.exports,ae=(s("99af"),function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(s,"&key=").concat(Object({NODE_ENV:"production",BASE_URL:"weather-app/"}).GOOGLE_MAP_KEY));case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()),re=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://ip-api.com/json");case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,console.log(t),e.abrupt("return",ae(t.lat,t.lon));case 10:return e.prev=10,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){if(!("geolocation"in navigator))return console.log("geolocation is not enabled on this browser"),re();navigator.geolocation.getCurrentPosition((function(e){return console.log("latitude",e.coords.latitude,"longitude",e.coords.longitude),ae(e.coords.latitude,e.coords.longitude)}),(function(e){return console.log("An error has occured while retrieving location",e),re()}))},ce={name:"Home",components:{DaysList:x,Search:P,CurrentDay:ne},mounted:function(){return Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe();case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},ie=ce,le=Object(o["a"])(ie,f,b,!1,null,null,null),ue=le.exports;n["a"].use(d["a"]);var de=[{path:"/",name:"Home",component:ue},{path:"/details",name:"Details",component:function(){return s.e("Details").then(s.bind(null,"9f52"))}}],fe=new d["a"]({routes:de}),be=fe;n["a"].config.productionTip=!1,new n["a"]({router:be,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},6672:function(e,t,s){e.exports=s.p+"img/location-pin.194b7af1.svg"},"87fe":function(e,t,s){"use strict";s("4f53")},9552:function(e,t,s){},"9c0c":function(e,t,s){},bebf:function(e,t,s){"use strict";s("f747")},bed3:function(e,t,s){"use strict";s("3710")},d103:function(e,t,s){e.exports=s.p+"img/search.5d65b94e.svg"},f747:function(e,t,s){}});
//# sourceMappingURL=app.ca211773.js.map