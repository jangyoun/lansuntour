(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{9116:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/festival",function(){return n(8034)}])},4475:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var i=n(5893);n(7294);var o=n(7117),r=function(){return(0,i.jsx)("div",{style:{backgroundColor:"#333",fontSize:12,color:"#fff",padding:"4px 10px"},children:(0,i.jsxs)("span",{style:{cursor:"pointer"},onClick:function(e){e.preventDefault(),window.open("/about","_blank","noopener,noreferrer")},children:["랜선투어닷컴 :: 제휴 문의\xa0 ",(0,i.jsx)(o.Z,{})]})})}},6974:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var i=n(5893);n(7294);var o=n(2743),r=n.n(o),s=function(){return(0,i.jsxs)("div",{style:{height:40,width:"100%",display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("div",{style:{flex:1,display:"flex"},children:[(0,i.jsx)("div",{className:r().header_logo,onClick:function(e){}}),(0,i.jsx)("div",{style:{flex:1}}),(0,i.jsx)("div",{className:r().header_menu_main,onClick:function(e){},children:"지역축제"}),(0,i.jsx)("div",{style:{width:1}}),(0,i.jsx)("div",{className:r().header_menu_main,onClick:function(e){},children:"지역명소"}),(0,i.jsx)("div",{className:r().header_menu_sub,onClick:function(e){},children:"등록"}),(0,i.jsx)("div",{style:{width:20}})]}),(0,i.jsx)("div",{style:{height:1,width:"100%",backgroundColor:"#ccc"}})]})}},8034:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var i=n(5893),o=n(7294),r=n(9008),s=n.n(r),a=n(6974),l=n(4475),d=n(364),c=n(381),u=n.n(c),f=n(2266),h=n.n(f),g=n(4111),p=n(7568),v=n(1438),x=n(8029),y=n(797),m=n(460),k=n(655),j=n(3935),w=n(9669),_=n.n(w),C=n(7637),b=n(991),M=function(e){return(0,o.useEffect)(function(){},[]),(0,i.jsx)("div",{id:"region-festival-".concat(e.festival.id),onClick:function(){return e.onClickMarker(e.festival)},children:(0,i.jsxs)("div",{style:{margin:0,padding:0,lineHeight:1},children:[e.festival.title.replace(/(\s*)/g,"").substring(0,2),(0,i.jsx)("br",{}),e.festival.title.replace(/(\s*)/g,"").substring(2,4)]})})},Y=n(3871),Z=n(8146),D=n(6378),N=n(2344),I=n(5017),L=n(7698),O=function(){function e(){(0,v.Z)(this,e)}return e.queryString=function(t){var n=(0,Y.Z)(t,function(t){return t.key+"="+e.encodeURIComponent(t.value)}).join("&");return"?".concat(n)},e.encodeURI=function(e){return(0,Z.Z)(e)||(0,D.Z)(e)?encodeURI(e||""):e},e.encodeURIComponent=function(e){return(0,Z.Z)(e)||(0,D.Z)(e)?encodeURIComponent(e||""):e},e.isFirefox=function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1},e.isInternetExplorer=function(){return navigator.userAgent.toLowerCase().indexOf("trident")>-1},e.merge=function(e,t){return(0,N.Z)([e,t],function(e,t){return(0,I.Z)(e,t)},{})},e.getQueryParameterWithoutDecode=function(e){var t=window.location.href,n=RegExp("[?&]"+(e=e.replace(/[\[\]]/g,"\\$&"))+"(=([^&#]*)|&|#|$)","i").exec(t);return n?n[2]?n[2].replace(/\+/g," "):"":null},e.getQueryParameter=function(e){return decodeURIComponent(this.getQueryParameterWithoutDecode(e))},e.isMobile=function(){return/Mobi|Android/i.test(navigator.userAgent)},e.isNotMobile=function(){return!/Mobi|Android/i.test(navigator.userAgent)},e.date=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM-DD HH:mm",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD'T'HH:mm:ss.SSS";return u()(e,n).format(t)},e.geoDistance=function(e,t,n,i){if(!e||!t||!n||!i)return"";var o=(0,L.getDistance)({latitude:e,longitude:t},{latitude:n,longitude:i});return o>1e3?new Intl.NumberFormat().format(Math.floor(o/1e3))+"km":new Intl.NumberFormat().format(Math.floor(o))+"m"},e.phone=function(e){return!e||e.length<4?e:e.length<8?"".concat(e.slice(0,3),"-").concat(e.slice(3)):"".concat(e.slice(0,3),"-").concat(e.slice(3,7),"-").concat(e.slice(7,11))},e.business=function(e){return!e||e.length<4?e:e.length<7?"".concat(e.slice(0,3),"-").concat(e.slice(3)):"".concat(e.slice(0,3),"-").concat(e.slice(3,5),"-").concat(e.slice(5,10))},e.mac=function(e){return e&&12==e.length?"".concat(e.slice(0,4),"-").concat(e.slice(4,8),"-").concat(e.slice(8,12)):e},e}(),S=function(){function e(){(0,v.Z)(this,e),this.polygons=[]}var t=e.prototype;return t.addGeoJson=function(e,t){var n,i;e&&e.coordinates&&(n=e.type,i=e.coordinates,"Polygon"===n?this.polygons=(0,Y.Z)(i,function(e){var n=(0,Y.Z)(e,function(e){return new kakao.maps.LatLng(e[1],e[0])});return new kakao.maps.Polygon(O.merge({path:n},t))}):this.polygons=(0,Y.Z)(i,function(e){var n=(0,Y.Z)(e[0],function(e){return new kakao.maps.LatLng(e[1],e[0])});return new kakao.maps.Polygon(O.merge({path:n},t))}))},t.addCircle=function(e,t,n,i){this.polygons=[new kakao.maps.Circle(O.merge({center:new kakao.maps.LatLng(e,t),radius:n},i))]},t.setMap=function(e){for(var t=0;t<this.polygons.length;t++)this.polygons[t].setMap(e)},t.setZIndex=function(e){for(var t=0;t<this.polygons.length;t++)this.polygons[t].setZIndex(e)},t.setOptions=function(e){(0,C.Z)(this.polygons,function(t){t.setOptions(e)})},t.reset=function(){for(var e=0;e<this.polygons.length;e++)this.polygons[e].setMap(null)},t.getPolygons=function(){return this.polygons},e}();S.Style={Region:{Office:{fillColor:"#01abb9",fillOpacity:.3,strokeColor:"#01abb9",strokeWeight:2,strokeOpacity:1},Store:{fillColor:"#bb4f45",fillOpacity:.3,strokeColor:"#bb4f45",strokeWeight:2,strokeOpacity:1},Agent:{fillColor:"#7839d0",fillOpacity:.3,strokeColor:"#7839d0",strokeWeight:2,strokeOpacity:1},Branch:{fillColor:"#303537",fillOpacity:.2,strokeColor:"#303537",strokeWeight:2,strokeOpacity:.5}},Station:{fillColor:"#10aa17",fillOpacity:.3,strokeColor:"#10aa17",strokeWeight:2,strokeOpacity:1}};var z=function(e){(0,x.Z)(n,e);var t=(0,m.Z)(n);function n(e){(0,v.Z)(this,n),(i=t.call(this,e)).mKakaoMap=null,i.mRegions=[],i.mFestivals=[];var i,r=(0,g.Z)(i);return i.getInfoByNetwork=(0,p.Z)(function(){var e,t,n,i;return(0,k.__generator)(this,function(o){switch(o.label){case 0:return r.props.onLoading(),e=r.mKakaoMap.getBounds(),r.mKakaoMap.getCenter(),t="https://www.jjatech.io/api/tour/festivals/map/grid",n={params:{swLng:e.oa,swLat:e.pa,neLng:e.ha,neLat:e.qa}},[4,_().get(t,n)];case 1:if(200!=(i=o.sent()).status)return[2];return r.props.onGridChanged(i.data),r.renderGrid(i.data),[2]}})}),i.mMapContainer=o.createRef(),i}var r=n.prototype;return r.render=function(){return(0,i.jsx)("div",{ref:this.mMapContainer,style:{height:"100%",width:"100%"}})},r.componentDidMount=function(){var e=this,t={center:new kakao.maps.LatLng(37.5739449022336,126.9768214538364),level:10};this.mKakaoMap=new kakao.maps.Map(this.mMapContainer.current,t),kakao.maps.event.addListener(this.mKakaoMap,"zoom_start",function(){(0,C.Z)(e.mRegions,function(e){e.marker.setMap(null),e.polygon.setMap(null)}),(0,C.Z)(e.mFestivals,function(e){e.marker.setMap(null),e.polygon.setMap(null)})}),kakao.maps.event.addListener(this.mKakaoMap,"zoom_end",function(){return e.getInfoByNetwork()}),kakao.maps.event.addListener(this.mKakaoMap,"dragend",function(){return e.getInfoByNetwork()}),this.getInfoByNetwork()},r.renderGrid=function(e){var t=this,n=[],o=[];(0,C.Z)(e,function(e){var i=(0,b.Z)(t.mFestivals,function(t){return t.festival.id===e.id});if(i){n.push(i);return}var r=new kakao.maps.CustomOverlay({position:new kakao.maps.LatLng(e.latitude,e.longitude),content:'<div id="'.concat(e.id,'" class="').concat(h().region_icon_festival,'" />'),zIndex:0}),s=new S;o.push({festival:e,marker:r,polygon:s})}),(0,C.Z)(this.mFestivals,function(e){(0,b.Z)(n,function(t){return t.festival.id===e.festival.id})||e.marker.setMap(null)}),this.mFestivals=(0,y.Z)(n).concat((0,y.Z)(o)),(0,C.Z)(this.mFestivals,function(e){e.marker.getMap()||e.marker.setMap(t.mKakaoMap);var n=document.getElementById("".concat(e.festival.id));n&&j.render((0,i.jsx)(M,{festival:e.festival,onClickMarker:function(e){return t.props.onClickMarker(e)}}),n)})},n}(o.Component),A=n(1382),F=n(7937),E=n(7117),R=function(e){var t=(0,o.useState)(!1),n=t[0],r=t[1],s=(0,o.useState)(null),a=s[0],l=s[1];(0,o.useEffect)(function(){e.id&&f(e.id)},[e.id]);var d,c=function(){r(!0),e.onClose()},f=(d=(0,p.Z)(function(e){var t,n;return(0,k.__generator)(this,function(i){switch(i.label){case 0:return t="api/tour/festivals/info/".concat(e),r(!0),[4,new Promise(function(e){return setTimeout(e,500)})];case 1:return i.sent(),[4,_().get(t)];case 2:if(200!=(n=i.sent()).status)return[2];return r(!1),l(n.data),[2]}})}),function(e){return d.apply(this,arguments)});return(0,i.jsx)(i.Fragment,{children:e.hidden?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)("div",{style:{width:"100%",height:"100%",position:"absolute",zIndex:10,display:"flex"},children:[(0,i.jsx)("div",{style:{flex:1,backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:function(){return c()}}),(0,i.jsxs)("div",{style:{width:460,backgroundColor:"#fff",display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("div",{style:{display:"flex",fontSize:14,padding:4},children:[(0,i.jsx)("div",{className:h().close_text,onClick:function(){return c()},children:(0,i.jsx)(F.Z,{})}),(0,i.jsx)("div",{style:{flex:1,textAlign:"center",fontWeight:"bold"},children:e.name})]}),(0,i.jsx)("div",{style:{backgroundColor:"#004ea7",height:1}}),n?(0,i.jsxs)("div",{style:{width:460,backgroundColor:"#fff",textAlign:"center",paddingTop:20},children:[" ",(0,i.jsx)(A.Z,{size:"large"})]}):(0,i.jsxs)("div",{style:{flex:1,overflow:"auto",fontSize:12},children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{width:60,backgroundColor:"#f0f0f0",textAlign:"center",padding:4},children:"축제"}),(0,i.jsxs)("div",{style:{flex:1,cursor:"pointer",padding:"4px 10px"},onClick:function(e){e.preventDefault();var t="https://www.google.com/search?q=".concat(encodeURIComponent(null==a?void 0:a.title));window.open(t,"_blank","noopener,noreferrer")},children:[null==a?void 0:a.title," ",(0,i.jsx)(E.Z,{})]})]}),(0,i.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{width:60,backgroundColor:"#f0f0f0",textAlign:"center",padding:4},children:"기간"}),(0,i.jsxs)("div",{style:{flex:1,padding:"4px 10px"},children:[(null==a?void 0:a.eventstartdate)?u()(null==a?void 0:a.eventstartdate,"YYYYMMDD").format("YYYY.MM.DD"):"","\xa0\xa0-\xa0\xa0",(null==a?void 0:a.eventenddate)?u()(null==a?void 0:a.eventenddate,"YYYYMMDD").format("YYYY.MM.DD"):""]})]}),(0,i.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{width:60,backgroundColor:"#f0f0f0",textAlign:"center",padding:4},children:"전화"}),(0,i.jsx)("div",{style:{flex:1,padding:"4px 10px"},children:null==a?void 0:a.tel})]}),(0,i.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{width:60,backgroundColor:"#f0f0f0",textAlign:"center",padding:4},children:"가격"}),(0,i.jsx)("div",{style:{flex:1,padding:"4px 10px"},children:""})]}),(0,i.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{width:60,backgroundColor:"#f0f0f0",textAlign:"center",padding:4},children:"주차"}),(0,i.jsx)("div",{style:{flex:1,padding:"4px 10px"},children:""})]}),(0,i.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{width:60,backgroundColor:"#f0f0f0",textAlign:"center",padding:4},children:"주소"}),(0,i.jsxs)("div",{style:{flex:1,cursor:"pointer",padding:"4px 10px"},onClick:function(e){},children:[null==a?void 0:a.addr1," ",(0,i.jsx)(E.Z,{})]})]}),(0,i.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,i.jsx)("div",{style:{height:100,padding:"0px 0px",backgroundColor:"lightgray"},children:((null==a?void 0:a.latitude)==null||null==a||a.longitude,(0,i.jsx)(i.Fragment,{}))}),(0,i.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,i.jsx)("img",{className:h().side_detail_img,src:null==a?void 0:a.firstimage})]})]})]})})},B=function(){var e=(0,o.useState)([]),t=e[0],n=e[1],r=(0,o.useState)(!1),s=r[0],a=r[1],l=(0,o.useState)({id:null,name:null,hidden:!0}),c=l[0],f=l[1],g=u()();return(0,o.useEffect)(function(){},[]),(0,i.jsxs)("div",{style:{flex:1,position:"relative"},children:[(0,i.jsxs)("div",{style:{width:"100%",height:"100%",position:"absolute",display:"flex"},children:[(0,i.jsx)("div",{style:{flex:1},children:(0,i.jsx)(z,{onLoading:function(){a(!0),n([])},onGridChanged:function(e){console.log("onGridChanged",e),a(!1),n(e.sort(function(){return Math.random()-.5}))},onClickMarker:function(e){console.log("onClickMarker",e),f({id:e.id,name:e.title,hidden:!1})}})}),(0,i.jsx)("div",{style:{width:480,overflow:"auto"},children:(0,i.jsx)(d.ZP,{dataSource:t,split:!0,loading:s,header:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",height:22},children:[(0,i.jsx)("div",{className:h().festival_title,children:"지역 축제 :: ".concat(t.length,"개")}),(0,i.jsx)("div",{style:{width:210,display:"flex",textAlign:"center"},children:["월","화","수","목","금","토","일","월","화","수","목","금","토","일"].map(function(e,t){return u()().startOf("isoWeek").add(t,"days"),(0,i.jsx)("div",{style:{width:15,fontSize:14,margin:0,padding:0,fontWeight:"bold",color:5==t||6==t||12==t||13==t?"#f04125":"#333"},children:e},t)})}),(0,i.jsx)("div",{style:{width:20}})]}),(0,i.jsx)("div",{style:{backgroundColor:"#ff816e",height:1}})]}),renderItem:function(e,t){return(0,i.jsx)(d.ZP.Item,{style:{padding:0},children:(0,i.jsxs)("div",{style:{width:"100%",position:"relative",height:22},children:[(0,i.jsx)("div",{style:{position:"absolute",zIndex:1,width:"130px",marginTop:3,marginLeft:4,fontSize:10,overflow:"hidden",whiteSpace:"nowrap",fontWeight:"bold",cursor:"pointer"},onMouseOut:function(t){var n=t.target;n.style.background="#fff",n.style.width="130px";var i=document.getElementById("region-festival-".concat(e.id));(null==i?void 0:i.parentNode)&&(i.parentNode.style.background="#000"),(null==i?void 0:i.parentNode.parentNode)&&(i.parentNode.parentNode.style.zIndex=0)},onMouseOver:function(t){var n=t.target;n.style.background="rgba(219, 233, 255, 0.8)",n.style.width="460px";var i=document.getElementById("region-festival-".concat(e.id));(null==i?void 0:i.parentNode)&&(i.parentNode.style.background="#f04125"),(null==i?void 0:i.parentNode.parentNode)&&(i.parentNode.parentNode.style.zIndex=9)},onClick:function(){return f({id:e.id,name:e.title,hidden:!1})},children:e.title}),(0,i.jsxs)("div",{style:{width:"100%",display:"flex",fontSize:10},children:[(0,i.jsx)("div",{style:{flex:1}}),(0,i.jsxs)("div",{style:{width:90,marginTop:2},children:[(0,i.jsx)("span",{style:{color:"#ddd"},children:"|\xa0\xa0"}),(0,i.jsxs)("span",{children:[u()(e.eventstartdate,"YYYYMMDD").format("MM.DD")," - ",u()(e.eventenddate,"YYYYMMDD").format("MM.DD")]})]}),(0,i.jsx)("div",{style:{width:210,display:"flex"},children:Array.from(Array(14).keys()).map(function(t){var n=u()(e.eventstartdate,"YYYYMMDD"),o=u()(e.eventenddate,"YYYYMMDD"),r=u()().startOf("isoWeek").add(t,"days"),s=g.isSameOrBefore(r,"d"),a=r.isBetween(n,o,"days","[]");return(0,i.jsxs)("div",{style:{width:15,position:"relative"},children:[(0,i.jsxs)("span",{style:{fontSize:10,color:"#ddd",width:14,position:"absolute",marginTop:3,display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",r.format("D")]}),(0,i.jsx)("div",{style:{height:14,width:14,marginTop:3,borderRadius:3,backgroundColor:a?s?"#004ea7":"#bbb":"#fff"}})]},t)})}),(0,i.jsx)("div",{style:{width:20}})]})]})},t)}})})]}),(0,i.jsx)(R,{id:c.id,name:c.name,hidden:c.hidden,onClose:function(){return f({id:null,name:null,hidden:!0})},onMove:function(e,t,n){console.log("onMove",e,t,n)}})]})},P=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{children:(0,i.jsx)("script",{type:"text/javascript",src:"//dapi.kakao.com/v2/maps/sdk.js?appkey=83c09aacb4a65b4a839e538ef4402966&libraries=services"})}),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,i.jsx)(a.Y,{}),(0,i.jsx)(B,{}),(0,i.jsx)(l.Y,{})]})})]})}},2266:function(e){e.exports={festival_title:"festival_festival_title__VHVkB",region_icon_festival:"festival_region_icon_festival__Kdt2s",close_text:"festival_close_text__zh9Nl",side_detail_img:"festival_side_detail_img__p_60z"}},2743:function(e){e.exports={header_logo:"layout_header_logo___78GJ",header_menu_main:"layout_header_menu_main__3Sq0T",header_menu_sub:"layout_header_menu_sub__CzGaL"}}},function(e){e.O(0,[885,358,712,825,774,888,179],function(){return e(e.s=9116)}),_N_E=e.O()}]);