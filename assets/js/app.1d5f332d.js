(function(t){function e(e){for(var i,n,r=e[0],c=e[1],l=e[2],h=0,d=[];h<r.length;h++)n=r[h],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/youtube-demo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c38":function(t,e,a){"use strict";a("b0d7")},"0e21":function(t,e,a){},"16ce":function(t,e,a){},"1d78":function(t,e,a){"use strict";a("c2fe")},"2b97":function(t,e){t.exports="data:image/png;base64,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"},4829:function(t,e,a){},"4d40":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("d3b7"),a("96cf");var i=a("1da1"),s=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("q-dialog",{model:{value:t.myAlert,callback:function(e){t.myAlert=e},expression:"myAlert"}},[a("q-card",[a("q-card-section",[t.alertWord.indexOf("成功收藏")>-1?a("i",{staticClass:"far fa-smile"}):t._e(),t.alertWord.indexOf("取消收藏")>-1?a("i",{staticClass:"far fa-sad-tear"}):t._e(),a("div",{staticClass:"text-h6"},[t._v(t._s(t.alertWord))])])],1)],1)],1)},n=[],r=a("5530"),c=a("2f62"),l={name:"App",data:function(){return{myAlert:!1}},computed:Object(r["a"])({},Object(c["d"])(["alert","alertWord"])),watch:{alert:function(){var t=this;this.alert&&(console.log(1),this.myAlert=!0,setTimeout((function(){t.myAlert=!1,t.CHANGE_ALERT_STATUS(!1),t.CHANGE_ALERT_WORD("")}),1e3))}},created:function(){this.alert&&this.CHANGE_ALERT_STATUS(!1)},methods:Object(r["a"])({},Object(c["c"])(["CHANGE_ALERT_STATUS","CHANGE_ALERT_WORD"]))},u=l,h=(a("5c0b"),a("2877")),d=a("24e8"),p=a("f09f"),f=a("a370"),y=a("93dc"),m=a.n(y),v=Object(h["a"])(u,o,n,!1,null,null,null),T=v.exports;m()(v,"components",{QDialog:d["a"],QCard:p["a"],QCardSection:f["a"]});var g=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-wrap scroll-div",on:{scroll:t.scrollEvent}},[a("div",{staticClass:"search-wrap row items-center"},[a("q-icon",{attrs:{name:"format_align_justify",size:"sm"},on:{click:function(e){t.showPageList=!t.showPageList}}}),a("div",{staticClass:"search row items-center"},[a("svg",{staticClass:"q-mr-sm",attrs:{width:"20",height:"20",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M8.16504 2.52506C9.24811 2.52407 10.3071 2.84433 11.2082 3.44533C12.1092 4.04633 12.8117 4.90106 13.2268 5.9014C13.642 6.90174 13.7511 8.00274 13.5405 9.06511C13.3298 10.1275 12.8087 11.1035 12.0432 11.8697C11.2777 12.6359 10.3022 13.1578 9.24 13.3695C8.17782 13.5811 7.07673 13.473 6.07601 13.0588C5.07529 12.6445 4.21992 11.9428 3.61809 11.0423C3.01627 10.1419 2.69504 9.08312 2.69504 8.00006C2.70161 6.55089 3.27986 5.16287 4.30412 4.13767C5.32838 3.11247 6.71588 2.53295 8.16504 2.52506ZM8.16504 1.50006C6.87946 1.50006 5.62276 1.88128 4.55384 2.59551C3.48492 3.30974 2.65179 4.3249 2.15983 5.51262C1.66786 6.70034 1.53913 8.00727 1.78994 9.26815C2.04074 10.529 2.65981 11.6872 3.56885 12.5963C4.47789 13.5053 5.63608 14.1244 6.89696 14.3752C8.15783 14.626 9.46477 14.4972 10.6525 14.0053C11.8402 13.5133 12.8554 12.6802 13.5696 11.6113C14.2838 10.5423 14.665 9.28564 14.665 8.00006C14.665 6.27615 13.9802 4.62285 12.7612 3.40387C11.5423 2.18488 9.88895 1.50006 8.16504 1.50006Z",fill:"#c4c4c4"}}),a("path",{attrs:{d:"M17.5 16.6449L13.815 12.9349L13.105 13.6399L16.79 17.3499C16.8363 17.3966 16.8913 17.4336 16.9519 17.459C17.0125 17.4843 17.0775 17.4975 17.1432 17.4977C17.2089 17.4979 17.274 17.4852 17.3348 17.4603C17.3956 17.4354 17.4509 17.3987 17.4975 17.3524C17.5441 17.3061 17.5811 17.2511 17.6065 17.1905C17.6319 17.1299 17.645 17.0649 17.6453 16.9992C17.6455 16.9335 17.6328 16.8684 17.6079 16.8076C17.5829 16.7468 17.5463 16.6916 17.5 16.6449Z",fill:"#c4c4c4"}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",name:"searchInput",placeholder:"video"===t.searchType?"搜尋影片":"playlist"===t.searchType?"搜尋播放清單":"搜尋頻道"},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendSearch(t.text)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),""!==t.text?a("i",{staticClass:"fas fa-times-circle",on:{click:function(e){t.text=""}}}):t._e()])],1),t.keywordHistory.length>0&&t.isHomePage()?a("div",{staticClass:"keywordHistoryList"},[a("KeywordHistory",{attrs:{data:t.keywordHistory},on:{searchThisKeyword:t.searchThisKeyword,cleanKeyword:t.cleanKeyword}})],1):t._e(),a("router-view",{attrs:{keywordHistory:t.keywordHistory,searchedKeyword:t.searchedKeyword,searchType:t.searchType,startToSearch:t.startToSearch}}),t.isHomePage()?a("q-fab",{staticClass:"chooseTypeButton",attrs:{icon:"search","external-label":"","label-class":"bg-grey-3 text-white",color:"primary",direction:"up"},model:{value:t.chooseTypeButton,callback:function(e){t.chooseTypeButton=e},expression:"chooseTypeButton"}},[a("q-fab-action",{attrs:{"label-class":"btnLabel text-white","external-label":"","text-color":"channel"===t.searchType?"white":"primary",color:"channel"===t.searchType?"primary":"white","label-position":"left",label:"頻道",icon:"face"},on:{click:function(e){t.searchType="channel"}}}),a("q-fab-action",{attrs:{"label-class":"btnLabel text-white","external-label":"","text-color":"playlist"===t.searchType?"white":"primary",color:"playlist"===t.searchType?"primary":"white","label-position":"left",label:"播放清單",icon:"fact_check"},on:{click:function(e){t.searchType="playlist"}}}),a("q-fab-action",{attrs:{"label-class":"btnLabel text-white","external-label":"","text-color":"video"===t.searchType?"white":"primary",color:"video"===t.searchType?"primary":"white","label-position":"left",label:"影片",icon:"movie"},on:{click:function(e){t.searchType="video"}}})],1):t._e(),t.chooseTypeButton?a("div",{staticClass:"backgroundGray",on:{click:t.backgroundGrayHide}}):t._e(),t.showPageList?a("div",{staticClass:"backgroundGray allPage",on:{click:t.backgroundGrayHide}}):t._e(),a("transition",{attrs:{name:"moveL"}},[t.showPageList?a("div",{staticClass:"pageList"},[a("q-icon",{staticClass:"alignIcon",attrs:{name:"format_align_justify",size:"sm"},on:{click:function(e){t.showPageList=!t.showPageList}}}),a("div",{staticClass:"list row items-center",on:{click:t.toHome}},[a("q-icon",{staticClass:"q-mr-lg",attrs:{name:"home",size:"sm"}}),a("span",[t._v("首頁")])],1),a("div",{staticClass:"list row items-center",on:{click:t.toFavoriteVideo}},[a("q-icon",{staticClass:"q-mr-lg",attrs:{name:"favorite",size:"sm"}}),a("span",[t._v("收藏影片")])],1),a("div",{staticClass:"list row items-center",on:{click:t.toPlaylist}},[a("q-icon",{staticClass:"q-mr-lg",attrs:{name:"fact_check",size:"sm"}}),a("span",[t._v("收藏播放清單")])],1),a("div",{staticClass:"list row items-center",on:{click:t.toChannel}},[a("q-icon",{staticClass:"q-mr-lg",attrs:{name:"sentiment_very_satisfied",size:"sm"}}),a("span",[t._v("收藏頻道")])],1)],1):t._e()])],1)},w=[],A=(a("c975"),a("fb6a"),a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-scroll-area",{staticStyle:{height:"53px"},attrs:{horizontal:"","thumb-style":t.thumbStyle}},[a("div",{staticClass:"keywordHistory-wrap"},[a("div",{staticClass:"tag-scroll row items-center"},t._l(t.data,(function(e){return a("div",{key:e,staticClass:"row justify-between items-center tag",on:{click:function(a){return t.searchThisKeyword(e)}}},[a("span",{staticClass:"q-mr-sm"},[t._v(t._s(e))]),a("i",{staticClass:"fas fa-times-circle",on:{click:function(a){return a.stopPropagation(),t.cleanTag(e)}}})])})),0)])])}),C=[],b=(a("4160"),a("159b"),{name:"KeywordHistory",components:{},props:["data"],data:function(){return{thumbStyle:{right:"2px",borderRadius:"5px",backgroundColor:"#9BC6BD",width:"3px",opacity:.75}}},computed:{},created:function(){},mounted:function(){this.calcScrollWidth()},updated:function(){this.calcScrollWidth()},methods:{searchThisKeyword:function(t){this.$emit("searchThisKeyword",t)},cleanTag:function(t){this.$emit("cleanKeyword",t)},calcScrollWidth:function(){var t=document.querySelector(".tag-scroll"),e=document.querySelectorAll(".tag"),a=0;e.forEach((function(t){a+=t.offsetWidth+15})),t.style.width=a+"px"}}}),S=b,_=(a("0c38"),a("4983")),L=Object(h["a"])(S,A,C,!1,null,"d3b1169e",null),R=L.exports;m()(L,"components",{QScrollArea:_["a"]});var x={name:"Home",components:{KeywordHistory:R},data:function(){return{text:"",searchedKeyword:"",notfromTyping:!1,keywordHistory:[],chooseTypeButton:!1,searchType:"video",finalSearchResultList:[],startToSearch:"first",showPageList:!1}},computed:Object(r["a"])({},Object(c["d"])("HomeModule",["searchResultList","nextPageToken","apiDoing","searchPage"])),watch:{text:function(){},searchType:function(){this.SET_SEARCH_RESULT_LIST([]),this.cleanTextValue(),this.startToSearch="changeType"}},created:function(){this.keywordHistory.push("mamamoo"),this.sendSearch("老高")},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["b"])("HomeModule",["getSearchResult"])),Object(c["c"])("HomeModule",["SET_SEARCH_PAGE","SET_SEARCH_RESULT_LIST"])),{},{scrollEvent:function(t){this.apiDoing||0===this.searchResultList.length||"/#/"!==window.location.href.slice(-3)||t.srcElement.scrollTop+t.srcElement.offsetHeight>t.srcElement.scrollHeight-50&&(this.getSearchResult({keyword:this.text,nextPageToken:this.nextPageToken,type:this.searchType,page:this.searchPage+1}),this.SET_SEARCH_PAGE(this.searchPage+1))},sendSearch:function(t){""!==t&&(this.isHomePage()||it.push("/"),this.startToSearch&&(this.startToSearch="searched"),this.keywordHistory.indexOf(t)>-1&&this.keywordHistory.splice(this.keywordHistory.indexOf(t),1),this.keywordHistory.unshift(t),this.searchedKeyword=t,this.getSearchResult({keyword:t,type:this.searchType,page:1}),this.SET_SEARCH_PAGE(1))},searchThisKeyword:function(t){this.text=t,this.notfromTyping=!0,this.sendSearch(t);var e=this;setTimeout((function(){e.notfromTyping=!1}),2e3)},cleanKeyword:function(t){var e=this.keywordHistory.indexOf(t);this.keywordHistory.splice(e,1)},cleanTextValue:function(){this.text=""},backgroundGrayHide:function(){this.chooseTypeButton?this.chooseTypeButton=!1:this.showPageList&&(this.showPageList=!1)},toHome:function(){this.backgroundGrayHide(),it.push("/")},toFavoriteVideo:function(){this.backgroundGrayHide(),it.push("/Favorite/video")},toPlaylist:function(){this.backgroundGrayHide(),it.push("/Favorite/playlist")},toChannel:function(){this.backgroundGrayHide(),it.push("/Favorite/channel")},isHomePage:function(){return"/#/"===window.location.href.slice(-3)}})},I=x,k=(a("bc2a"),a("0016")),O=a("c294"),H=a("72db"),D=Object(h["a"])(I,E,w,!1,null,"818c8234",null),j=D.exports;m()(D,"components",{QIcon:k["a"],QFab:O["a"],QFabAction:H["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"favorite-wrap"},[a("div",{staticClass:"title"},[t._v("你收藏的"+t._s("video"===t.type?"影片":"playlist"===t.type?"播放清單":"頻道"))]),a("VideoInfo",{attrs:{data:"video"===t.type?t.favoriteVideo:"playlist"===t.type?t.favoritePlaylist:t.favoriteChannel,keywordHistory:[],type:t.type,favorite:!0}})],1)},P=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"'videoInfo-wrap'"},[0!==t.data.length?t._l(t.data,(function(e,i){return a("div",{key:e.id.videoId,staticClass:"videoInfo row items-center"},[a("a",{staticClass:"article-wrap row items-center",attrs:{target:"_blank",href:t.updateLink(i),title:e.snippet.title}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+e.snippet.thumbnails.medium.url,expression:"`${item.snippet.thumbnails.medium.url}`"}],style:"channel"===t.type?"border-radius:110px;width:110px":"",attrs:{alt:"影片縮圖"}}),"playlist"===t.type?a("div",{staticClass:"playlistCount column items-center justify-center"},[a("span",[t._v(t._s(e.totalResults))]),a("q-icon",{attrs:{name:"playlist_play",size:"xs"}})],1):t._e(),a("div",{class:["channel"===t.type?"justify-center":"justify-between","item-wrap column "]},[a("div",{staticClass:"itemTitle overflow-ellipsis",domProps:{innerHTML:t._s(e.snippet.title)}}),"playlist"!==t.type&&""!==e.snippet.description?a("div",{staticClass:"itemSummary overflow-ellipsis-2"},[t._v(t._s(e.snippet.description))]):t._e(),"channel"!==t.type?a("div",{staticClass:"itemTime overflow-ellipsis"},[t._v(" "+t._s(e.snippet.channelTitle)+" ")]):t._e(),"playlist"!==t.type?a("div",{staticClass:"itemTime overflow-ellipsis"},[t._v(" "+t._s("channel"===t.type?"頻道創建於 "+e.snippet.publishTime.substring(0,e.snippet.publishTime.indexOf("T")):e.snippet.publishTime.replace("T"," ").slice(0,-4))+" ")]):t._e(),"playlist"===t.type&&e.playlistInfo?a("div",{staticClass:"itemPlaylist"},[a("div",{staticClass:"overflow-ellipsis"},[t._v(" "+t._s(e.playlistInfo[0].snippet.title)+" ")]),a("div",{staticClass:"overflow-ellipsis"},[t._v(" "+t._s(e.playlistInfo[1].snippet.title)+" ")])]):t._e()])]),a("q-icon",{staticClass:"favoriteIcon",attrs:{name:t.isFavorite(e.etag)?"favorite":"favorite_border",size:"sm"},on:{click:function(a){t.toggleFavorite(e,t.isFavorite(e.etag))}}})],1)})):0===t.data.length?[a("div",{class:[0!==t.keywordHistory.length||t.favorite?"":"noKeywordHistory","noArticle column items-center justify-center"]},[t.favorite?[a("i",{staticClass:"far fa-smile"}),a("span",{staticClass:"noArticleText"},[t._v("你還沒有收藏的"+t._s("video"===t.type?"影片":"playlist"===t.type?"播放清單":"頻道"))])]:"searched"!==t.startToSearch?[a("i",{staticClass:"far fa-smile-wink"}),"first"===t.startToSearch?a("span",{staticClass:"noArticleText"},[t._v(" step 1.右下角選擇搜尋類型 "),a("br"),t._v(" step 2.上方搜尋框進行搜尋 ")]):a("span",{staticClass:"noArticleText"},[t._v("歡迎搜尋"+t._s("video"===t.type?"影片":"playlist"===t.type?"播放清單":"頻道"))])]:[a("i",{staticClass:"fas fa-exclamation-circle"}),a("span",{staticClass:"noArticleText"},[t._v("沒有搜尋結果")])]],2)]:t._e()],2)},N=[],M=(a("99af"),a("4de4"),{name:"VideoInfo",components:{},props:["data","keyword","type","startToSearch","keywordHistory","favorite"],data:function(){return{}},computed:Object(r["a"])({},Object(c["d"])("FavoriteModule",["favoriteVideo","favoritePlaylist","favoriteChannel"])),mounted:function(){var t=this;if(""!==this.keyword){var e=document.querySelectorAll(".item-wrap.column>div");e.forEach((function(e){e.innerHTML=e.innerHTML.replaceAll(t.keyword,'<font color="88b4ab">'.concat(t.keyword,"</font>"))}))}},watch:{data:function(){var t=this;if(""!==this.keyword){var e=document.querySelectorAll(".item-wrap.column>div");e.forEach((function(e){e.innerHTML=e.innerHTML.replaceAll(t.keyword,'<font color="88b4ab">'.concat(t.keyword,"</font>"))}))}}},updated:function(){var t=this;if(""!==this.keyword){var e=document.querySelectorAll(".item-wrap.column>div");e.forEach((function(e){e.innerHTML=e.innerHTML.replaceAll(t.keyword,'<font color="88b4ab">'.concat(t.keyword,"</font>"))}))}},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["c"])(["CHANGE_ALERT_STATUS","CHANGE_ALERT_WORD"])),Object(c["c"])("FavoriteModule",["ADD_FAVORITE_VIDEO","DELETE_FAVORITE_VIDEO","ADD_FAVORITE_PLAYLIST","DELETE_FAVORITE_PLAYLIST","ADD_FAVORITE_CHANNEL","DELETE_FAVORITE_CHANNEL"])),{},{updateLink:function(t){var e=this;setTimeout((function(){if(0!==e.data.length){var a=document.querySelectorAll(".article-wrap")[t],i="";i="playlist"===e.type&&e.data[t].playlistInfo?"https://www.youtube.com/watch?v=".concat(e.data[t].playlistInfo[0].contentDetails.videoId,"&list=").concat(e.data[t].id.playlistId):"channel"===e.type?"https://www.youtube.com/channel/".concat(e.data[t].id.channelId):"https://www.youtube.com/watch?v=".concat(e.data[t].id.videoId),a.setAttribute("href",i)}}),500)},isFavorite:function(t){return"video"===this.type?this.favoriteVideo.filter((function(e){return e.etag===t})).length>0:"playlist"===this.type?this.favoritePlaylist.filter((function(e){return e.etag===t})).length>0:this.favoriteChannel.filter((function(e){return e.etag===t})).length>0},toggleFavorite:function(t,e){switch(this.type){case"video":e?(this.DELETE_FAVORITE_VIDEO(t),this.CHANGE_ALERT_STATUS(!0),this.CHANGE_ALERT_WORD("取消收藏影片")):(this.ADD_FAVORITE_VIDEO(t),this.CHANGE_ALERT_STATUS(!0),this.CHANGE_ALERT_WORD("成功收藏影片"));break;case"playlist":e?(this.DELETE_FAVORITE_PLAYLIST(t),this.CHANGE_ALERT_STATUS(!0),this.CHANGE_ALERT_WORD("取消收藏播放清單")):(this.ADD_FAVORITE_PLAYLIST(t),this.CHANGE_ALERT_STATUS(!0),this.CHANGE_ALERT_WORD("成功收藏播放清單"));break;case"channel":e?(this.DELETE_FAVORITE_CHANNEL(t),this.CHANGE_ALERT_STATUS(!0),this.CHANGE_ALERT_WORD("取消收藏頻道")):(this.ADD_FAVORITE_CHANNEL(t),this.CHANGE_ALERT_STATUS(!0),this.CHANGE_ALERT_WORD("成功收藏頻道"));break}}})}),V=M,q=(a("eaf0"),Object(h["a"])(V,F,N,!1,null,"17154fab",null)),K=q.exports;m()(q,"components",{QIcon:k["a"]});var W={name:"Favorite",components:{VideoInfo:K},props:[],data:function(){return{type:""}},created:function(){this.type=this.$route.params.type},computed:Object(r["a"])({},Object(c["d"])("FavoriteModule",["favoriteVideo","favoritePlaylist","favoriteChannel"])),watch:{$route:function(){this.type=this.$route.params.type}},methods:{}},B=W,Q=(a("1d78"),Object(h["a"])(B,G,P,!1,null,"040cd3b3",null)),U=Q.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:[0===t.keywordHistory.length?"noKeywordHistoryList":"","content"]},[t.searchResultList.length>0?a("div",{staticClass:"searchResultTitle"},[t._v(" 搜尋 "),a("span",[t._v(t._s(t.searchedKeyword))]),t._v(" 相關"+t._s("video"===t.searchType?"影片":"playlist"===t.searchType?"播放清單":"頻道")+"結果 ")]):t._e(),a("VideoInfo",{attrs:{data:t.finalSearchResultList,keywordHistory:t.keywordHistory,keyword:t.searchedKeyword,type:t.searchType,startToSearch:t.startToSearch}})],1)])},z=[],J={name:"SearchResult",props:["searchedKeyword","searchType","startToSearch","keywordHistory"],components:{VideoInfo:K},data:function(){return{finalSearchResultList:[]}},created:function(){var t=this;"playlist"===this.searchType?setTimeout((function(){t.finalSearchResultList=t.searchResultList}),500):this.finalSearchResultList=this.searchResultList},computed:Object(r["a"])({},Object(c["d"])("HomeModule",["searchResultList"])),watch:{searchResultList:function(){var t=this;"playlist"===this.searchType?setTimeout((function(){t.finalSearchResultList=t.searchResultList}),500):this.finalSearchResultList=this.searchResultList}},updated:function(){},methods:{}},Z=J,X=(a("cd97"),Object(h["a"])(Z,Y,z,!1,null,"4e748e43",null)),$=X.exports,tt=g["a"].prototype.push;g["a"].prototype.push=function(t){return tt.call(this,t).catch((function(t){return t}))},s["a"].use(g["a"]);var et=[{path:"/",name:"Home",component:j,children:[{path:"",name:"SearchResult",component:$},{path:"/Favorite/:type",name:"Favorite",component:U}]}],at=new g["a"]({mode:"hash",base:"/youtube-demo/",routes:et}),it=at,st=a("2909"),ot=a("bc3a"),nt=a.n(ot),rt=a("f508"),ct={getSearchResult:function(t,e){rt["a"].show(),t.commit("SET_API_DOING",!0);var a="";return a=e.nextPageToken?"".concat("https://www.googleapis.com/youtube/v3","/search?part=snippet&q=").concat(e.keyword,"&key=").concat(t.rootState.key,"&type=").concat(e.type,"&maxResults=10&pageToken=").concat(e.nextPageToken):"".concat("https://www.googleapis.com/youtube/v3","/search?part=snippet&q=").concat(e.keyword,"&key=").concat(t.rootState.key,"&type=").concat(e.type,"&maxResults=10"),nt.a.get(a).then(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(i){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.nextPageToken?(s=t.state.searchResultList,t.commit("SET_SEARCH_RESULT_LIST",[].concat(Object(st["a"])(s),Object(st["a"])(i.data.items)))):t.commit("SET_SEARCH_RESULT_LIST",i.data.items),"playlist"===e.type&&i.data.items.forEach((function(a,i){t.dispatch("getPlaylistInfo",{playlistId:a.id.playlistId,index:10*(e.page-1)+i})})),t.commit("SET_API_DOING",!1),t.commit("SET_NEXT_PAGE_TOKEM",i.data.nextPageToken),"playlist"!==e.type){a.next=6;break}return a.abrupt("return");case 6:rt["a"].hide();case 7:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){console.error(t),rt["a"].hide()}))},getPlaylistInfo:function(t,e){rt["a"].show();var a="".concat("https://www.googleapis.com/youtube/v3","/playlistItems?part=snippet,contentDetails,status,id&key=").concat(t.rootState.key,"&playlistId=").concat(e.playlistId);return nt.a.get(a).then(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.state.searchResultList[e.index].playlistInfo=i.data.items,t.state.searchResultList[e.index].totalResults=i.data.pageInfo.totalResults,rt["a"].hide();case 3:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){console.error(t),rt["a"].hide()}))}},lt={SET_SEARCH_RESULT_LIST:function(t,e){t.searchResultList=e},SET_NEXT_PAGE_TOKEM:function(t,e){t.nextPageToken=e},SET_API_DOING:function(t,e){t.apiDoing=e},SET_SEARCH_PAGE:function(t,e){t.searchPage=e}},ut={},ht={searchResultList:[],nextPageToken:"",searchPage:0,apiDoing:!1},dt={namespaced:!0,state:ht,getters:ut,actions:ct,mutations:lt},pt={namespaced:!0,state:{favoriteVideo:[],favoritePlaylist:[],favoriteChannel:[]},getters:{},actions:{},mutations:{ADD_FAVORITE_VIDEO:function(t,e){t.favoriteVideo.push(e)},DELETE_FAVORITE_VIDEO:function(t,e){var a=t.favoriteVideo.filter((function(t){return t.etag!==e.etag}));t.favoriteVideo=a},ADD_FAVORITE_PLAYLIST:function(t,e){t.favoritePlaylist.push(e)},DELETE_FAVORITE_PLAYLIST:function(t,e){var a=t.favoritePlaylist.filter((function(t){return t.etag!==e.etag}));t.favoritePlaylist=a},ADD_FAVORITE_CHANNEL:function(t,e){t.favoriteChannel.push(e)},DELETE_FAVORITE_CHANNEL:function(t,e){var a=t.favoriteChannel.filter((function(t){return t.etag!==e.etag}));t.favoriteChannel=a}}};s["a"].use(c["a"]);var ft=new c["a"].Store({state:{alert:!1,alertWord:"",key:"AIzaSyBEjwr1ysCzdqhoXchbhS2w0c5IR9wflYs"},getters:{},mutations:{CHANGE_ALERT_STATUS:function(t,e){t.alert=e},CHANGE_ALERT_WORD:function(t,e){t.alertWord=e}},actions:{},modules:{HomeModule:dt,FavoriteModule:pt}}),yt=(a("f5df1"),a("0e21"),a("5c7d"),a("b3f7")),mt=(a("e54f"),a("573e"),a("b05d"));s["a"].use(mt["a"],{config:{},plugins:{Loading:rt["a"]},iconSet:yt["a"]});var vt=a("caf9");a("16ce");s["a"].config.productionTip=!1,s["a"].use(vt["a"],{loading:a("cdd5"),error:a("2b97")}),s["a"].directive("real-img",function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=a.value,!i){t.next=6;break}return t.next=4,Tt(i);case 4:s=t.sent,s&&e.setAttribute("src",i);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());var Tt=function(t){return new Promise((function(e){var a=new Image;a.onload=function(){1==this.complete&&(e(!0),a=null)},a.onerror=function(){e(!1),a=null},a.src=t}))};new s["a"]({router:it,store:ft,render:function(t){return t(T)},mounted:function(){document.dispatchEvent(new Event("render-event"))}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("4d40")},"85f7":function(t,e,a){},b0d7:function(t,e,a){},bc2a:function(t,e,a){"use strict";a("d4a4")},c2fe:function(t,e,a){},cd97:function(t,e,a){"use strict";a("85f7")},cdd5:function(t,e,a){t.exports=a.p+"assets/img/img_loading.26ef8bb4.gif"},d4a4:function(t,e,a){},eaf0:function(t,e,a){"use strict";a("4829")}});
//# sourceMappingURL=app.1d5f332d.js.map