(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{1096:function(e,t,n){"use strict";n.d(t,{K:function(){return I}});var i=n(7568),o=n(655),s=n(5893),r=n(7294),l=n(636),a=n(381),d=n.n(a),c=n(2266),f=n.n(c),u=n(9462),p=n(4111),h=n(1438),g=n(8029),v=n(797),y=n(460),x=n(3935),m=n(7637),k=n(991),_=n(2970),j=function(e){return(0,r.useEffect)(function(){},[]),(0,s.jsx)("div",{id:"region-festival-".concat(e.festival.id),onClick:function(){return e.onClickMarker(e.festival)},children:(0,s.jsxs)("div",{style:{margin:0,padding:0,lineHeight:1,fontSize:4,fontWeight:"bold"},children:[e.festival.title.replace(/(\s*)/g,"").substring(0,2),(0,s.jsx)("br",{}),e.festival.title.replace(/(\s*)/g,"").substring(2,4)]})})},w=n(1143),b=function(e){(0,g.Z)(n,e);var t=(0,y.Z)(n);function n(e){(0,h.Z)(this,n),(s=t.call(this,e)).mKakaoMap=null,s.mRegions=[],s.mFestivals=[];var s,l=(0,p.Z)(s);return s.getInfoByNetwork=(0,i.Z)(function(){var e,t,n,i;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return l.props.onLoading(),e=l.mKakaoMap.getBounds(),l.mKakaoMap.getCenter(),[4,fetch(_.Xb.URL+"/api/tour/festivals/map/grid?swLng=".concat(e.oa,"&swLat=").concat(e.pa,"&neLng=").concat(e.ha,"&neLat=").concat(e.qa))];case 1:return[4,t.sent().json()];case 2:return i=t.sent(),l.props.onGridChanged(i),l.renderGrid(i),[2]}})}),s.mMapContainer=r.createRef(),s}var l=n.prototype;return l.render=function(){return(0,s.jsx)("div",{ref:this.mMapContainer,style:{height:"100%",width:"100%"}})},l.componentDidMount=function(){var e=this,t={center:new kakao.maps.LatLng(this.props.center.lat,this.props.center.lon),level:10};this.mKakaoMap=new kakao.maps.Map(this.mMapContainer.current,t),kakao.maps.event.addListener(this.mKakaoMap,"zoom_start",function(){(0,m.Z)(e.mRegions,function(e){e.marker.setMap(null),e.polygon.setMap(null)}),(0,m.Z)(e.mFestivals,function(e){e.marker.setMap(null),e.polygon.setMap(null)})}),kakao.maps.event.addListener(this.mKakaoMap,"zoom_end",function(){return e.getInfoByNetwork()}),kakao.maps.event.addListener(this.mKakaoMap,"dragend",function(){return e.getInfoByNetwork()}),this.getInfoByNetwork()},l.renderGrid=function(e){var t=this,n=[],i=[];(0,m.Z)(e,function(e){var o=(0,k.Z)(t.mFestivals,function(t){return t.festival.id===e.id});if(o){n.push(o);return}var s=new kakao.maps.CustomOverlay({position:new kakao.maps.LatLng(e.latitude,e.longitude),content:'<div id="'.concat(e.id,'" class="').concat(f().icon_festival,'" />'),zIndex:0}),r=new w.i;i.push({festival:e,marker:s,polygon:r})}),(0,m.Z)(this.mFestivals,function(e){(0,k.Z)(n,function(t){return t.festival.id===e.festival.id})||e.marker.setMap(null)}),this.mFestivals=(0,v.Z)(n).concat((0,v.Z)(i)),(0,m.Z)(this.mFestivals,function(e){e.marker.getMap()||e.marker.setMap(t.mKakaoMap);var n=document.getElementById("".concat(e.festival.id));n&&x.render((0,s.jsx)(j,{festival:e.festival,onClickMarker:function(e){return t.props.onClickMarker(e)}}),n)})},n}(r.Component),M=n(1382),C=n(7937),Y=n(7117),Z=n(1080),D=n.n(Z),N=function(e){var t,n,l,a=(0,r.useState)(!1),c=a[0],u=a[1],p=(0,r.useState)(null),h=p[0],g=p[1];(0,r.useEffect)(function(){e.fid&&(console.log("useEffect",e.fid),window.history.pushState(null,"랜선투어닷컴 - 지역 축제","/festival/".concat(e.fid)),x(e.fid))},[e.fid]);var v,y=function(){window.history.pushState(null,"랜선투어닷컴 - 지역 축제","/festival"),u(!0),e.onClose()},x=(v=(0,i.Z)(function(e){var t,n,i;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return u(!0),[4,new Promise(function(e){return setTimeout(e,500)})];case 1:return t.sent(),[4,fetch(_.Xb.URL+"/api/tour/festivals/info/".concat(e))];case 2:return[4,t.sent().json()];case 3:return i=t.sent(),u(!1),g(i),[2]}})}),function(e){return v.apply(this,arguments)});return(0,s.jsx)(s.Fragment,{children:e.hidden?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{top:(null===(t=e.postion)||void 0===t?void 0:t.top)-(null===(n=e.postion)||void 0===n?void 0:n.height)-30,left:(null===(l=e.postion)||void 0===l?void 0:l.left)+17,width:20,height:20,position:"absolute"},children:[(0,s.jsx)("div",{className:D().pin,style:{zIndex:13,backgroundColor:"#fff"}}),(0,s.jsx)("div",{className:D().pulse,style:{zIndex:12,backgroundColor:"#fff"}})]}),(0,s.jsxs)("div",{style:{width:"100%",height:"100%",position:"absolute",zIndex:10,display:"flex"},children:[(0,s.jsx)("div",{style:{flex:1,backgroundColor:"rgba(0, 0, 0, 0.7)"},onClick:function(){return y()}}),(0,s.jsxs)("div",{style:{width:480,backgroundColor:"#fff",display:"flex",flexDirection:"column"},children:[(0,s.jsxs)("div",{style:{display:"flex",fontSize:14,padding:4},children:[(0,s.jsx)("div",{className:f().close_text,onClick:function(){return y()},children:(0,s.jsx)(C.Z,{})}),(0,s.jsx)("div",{style:{flex:1,textAlign:"center",fontWeight:"bold"},children:null==h?void 0:h.title})]}),(0,s.jsx)("div",{style:{backgroundColor:"#004ea7",height:1}}),c?(0,s.jsxs)("div",{style:{width:460,backgroundColor:"#fff",textAlign:"center",paddingTop:20},children:[" ",(0,s.jsx)(M.Z,{size:"large"})]}):(0,s.jsxs)("div",{style:{flex:1,overflow:"auto",fontSize:12},children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{width:60,backgroundColor:"#f0f0f0",textAlign:"center",padding:4},children:"축제"}),(0,s.jsxs)("div",{style:{flex:1,cursor:"pointer",padding:"4px 10px"},onClick:function(e){e.preventDefault();var t="https://www.google.com/search?q=".concat(encodeURIComponent(null==h?void 0:h.title));window.open(t,"_blank","noopener,noreferrer")},children:[null==h?void 0:h.title," ",(0,s.jsx)(Y.Z,{})]})]}),[{title:"기간",desc:"".concat(d()(null==h?void 0:h.eventstartdate,"YYYYMMDD").format("YYYY.MM.DD")," - ").concat(d()(null==h?void 0:h.eventenddate,"YYYYMMDD").format("YYYY.MM.DD"))},{title:"주소",desc:null==h?void 0:h.addr1},{title:"전화",desc:null==h?void 0:h.tel},].map(function(e,t){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{width:60,backgroundColor:"#f0f0f0",textAlign:"center",padding:4},children:e.title}),(0,s.jsx)("div",{style:{flex:1,padding:"4px 10px"},children:e.desc})]})]},t)}),(0,s.jsx)("div",{style:{backgroundColor:"#ccc",height:1}}),(0,s.jsx)("img",{className:f().side_detail_img,src:null==h?void 0:h.firstimage})]})]})]})]})})},I=function(e){var t,n=(0,r.useState)([]),a=n[0],c=n[1],p=(0,r.useState)(!1),h=p[0],g=p[1],v=(0,r.useState)({fid:null,name:null,hidden:!0,position:null}),y=v[0],x=v[1],m=d()();(0,r.useEffect)(function(){console.log("fid",e.fid),e.fid&&k()},[]);var k=(t=(0,i.Z)(function(){var t,n;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return g(!0),[4,new Promise(function(e){return setTimeout(e,500)})];case 1:return t.sent(),n=document.getElementById("region-festival-".concat(e.fid)).getBoundingClientRect(),x({fid:e.fid,name:"",hidden:!1,position:n}),[2]}})}),function(){return t.apply(this,arguments)});return(0,s.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,s.jsx)(u.a1,{}),(0,s.jsxs)("div",{style:{width:"100%",height:"100%",position:"relative"},children:[(0,s.jsxs)("div",{style:{width:"100%",height:"100%",position:"absolute",display:"flex"},children:[(0,s.jsx)("div",{style:{flex:1},children:(0,s.jsx)(b,{center:{lat:e.center.lat,lon:e.center.lon},onLoading:function(){g(!0),c([])},onGridChanged:function(e){g(!1),c(e.sort(function(){return Math.random()-.5}))},onClickMarker:function(e){var t=document.getElementById("region-festival-".concat(e.id)).getBoundingClientRect();x({fid:e.id,name:e.title,hidden:!1,position:t})}})}),(0,s.jsx)("div",{style:{width:480,overflow:"auto"},children:(0,s.jsx)(l.ZP,{dataSource:a,split:!0,loading:h,header:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row",height:22},children:[(0,s.jsx)("div",{className:f().festival_title,children:"지역 축제 :: ".concat(a.length,"개")}),(0,s.jsx)("div",{style:{width:210,display:"flex",textAlign:"center"},children:["월","화","수","목","금","토","일","월","화","수","목","금","토","일"].map(function(e,t){return d()().startOf("isoWeek").add(t,"days"),(0,s.jsx)("div",{style:{width:15,fontSize:14,margin:0,padding:0,fontWeight:"bold",color:5==t||6==t||12==t||13==t?"#f04125":"#333"},children:e},t)})}),(0,s.jsx)("div",{style:{width:20}})]}),(0,s.jsx)("div",{style:{backgroundColor:"#ff816e",height:1}})]}),renderItem:function(e,t){return(0,s.jsx)(l.ZP.Item,{style:{padding:0},children:(0,s.jsxs)("div",{style:{width:"100%",position:"relative",height:22},children:[(0,s.jsx)("div",{style:{position:"absolute",zIndex:1,width:"130px",marginTop:3,marginLeft:4,fontSize:10,overflow:"hidden",whiteSpace:"nowrap",fontWeight:"bold",cursor:"pointer"},onMouseOut:function(t){var n=t.target;n.style.background="#fff",n.style.width="130px";var i=document.getElementById("region-festival-".concat(e.id));(null==i?void 0:i.parentNode)&&(i.parentNode.style.background="#000"),(null==i?void 0:i.parentNode.parentNode)&&(i.parentNode.parentNode.style.zIndex=0)},onMouseOver:function(t){var n=t.target;n.style.background="rgba(219, 233, 255, 0.8)",n.style.width="460px";var i=document.getElementById("region-festival-".concat(e.id));(null==i?void 0:i.parentNode)&&(i.parentNode.style.background="#f04125"),(null==i?void 0:i.parentNode.parentNode)&&(i.parentNode.parentNode.style.zIndex=9)},onClick:function(){var t=document.getElementById("region-festival-".concat(e.id)).getBoundingClientRect();x({fid:e.id,name:e.title,hidden:!1,position:t})},children:e.title}),(0,s.jsxs)("div",{style:{width:"100%",display:"flex",fontSize:10},children:[(0,s.jsx)("div",{style:{flex:1}}),(0,s.jsxs)("div",{style:{width:90,marginTop:2},children:[(0,s.jsx)("span",{style:{color:"#ddd"},children:"|\xa0\xa0"}),(0,s.jsxs)("span",{children:[d()(e.eventstartdate,"YYYYMMDD").format("MM.DD")," - ",d()(e.eventenddate,"YYYYMMDD").format("MM.DD")]})]}),(0,s.jsx)("div",{style:{width:210,display:"flex"},children:Array.from(Array(14).keys()).map(function(t){var n=d()(e.eventstartdate,"YYYYMMDD"),i=d()(e.eventenddate,"YYYYMMDD"),o=d()().startOf("isoWeek").add(t,"days"),r=m.isSameOrBefore(o,"d"),l=o.isBetween(n,i,"days","[]");return(0,s.jsxs)("div",{style:{width:15,position:"relative"},children:[(0,s.jsxs)("span",{style:{fontSize:10,color:"#ddd",width:14,position:"absolute",marginTop:3,display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",o.format("D")]}),(0,s.jsx)("div",{style:{height:14,width:14,marginTop:3,borderRadius:3,backgroundColor:l?r?"#004ea7":"#bbb":"#fff"}})]},t)})}),(0,s.jsx)("div",{style:{width:20}})]})]})},t)}})})]}),(0,s.jsx)(N,{fid:y.fid,hidden:y.hidden,postion:y.position,onClose:function(){return x({fid:null,name:null,hidden:!0,position:null})},onMove:function(e,t,n){console.log("onMove",e,t,n)}})]}),(0,s.jsx)(u.r,{})]})};I.defaultProps={fid:null,center:{lat:37.5739449022336,lon:126.9768214538364}}},1143:function(e,t,n){"use strict";n.d(t,{i:function(){return l}});var i=n(1438),o=n(3871),s=n(7637),r=n(2970),l=function(){function e(){(0,i.Z)(this,e),this.polygons=[]}var t=e.prototype;return t.addGeoJson=function(e,t){var n,i;e&&e.coordinates&&(n=e.type,i=e.coordinates,"Polygon"===n?this.polygons=(0,o.Z)(i,function(e){var n=(0,o.Z)(e,function(e){return new kakao.maps.LatLng(e[1],e[0])});return new kakao.maps.Polygon(r.Zr.merge({path:n},t))}):this.polygons=(0,o.Z)(i,function(e){var n=(0,o.Z)(e[0],function(e){return new kakao.maps.LatLng(e[1],e[0])});return new kakao.maps.Polygon(r.Zr.merge({path:n},t))}))},t.addCircle=function(e,t,n,i){this.polygons=[new kakao.maps.Circle(r.Zr.merge({center:new kakao.maps.LatLng(e,t),radius:n},i))]},t.setMap=function(e){for(var t=0;t<this.polygons.length;t++)this.polygons[t].setMap(e)},t.setZIndex=function(e){for(var t=0;t<this.polygons.length;t++)this.polygons[t].setZIndex(e)},t.setOptions=function(e){(0,s.Z)(this.polygons,function(t){t.setOptions(e)})},t.reset=function(){for(var e=0;e<this.polygons.length;e++)this.polygons[e].setMap(null)},t.getPolygons=function(){return this.polygons},e}();l.Style={Region:{Office:{fillColor:"#01abb9",fillOpacity:.3,strokeColor:"#01abb9",strokeWeight:2,strokeOpacity:1},Store:{fillColor:"#bb4f45",fillOpacity:.3,strokeColor:"#bb4f45",strokeWeight:2,strokeOpacity:1},Agent:{fillColor:"#7839d0",fillOpacity:.3,strokeColor:"#7839d0",strokeWeight:2,strokeOpacity:1},Branch:{fillColor:"#303537",fillOpacity:.2,strokeColor:"#303537",strokeWeight:2,strokeOpacity:.5}},Station:{fillColor:"#10aa17",fillOpacity:.3,strokeColor:"#10aa17",strokeWeight:2,strokeOpacity:1}}},2266:function(e){e.exports={festival_title:"festival_festival_title__VHVkB",region_icon_festival_mobile:"festival_region_icon_festival_mobile__xI7pk",close_text:"festival_close_text__zh9Nl",side_detail_img:"festival_side_detail_img__p_60z",icon_festival:"festival_icon_festival__FRNHN",hide_scrollbar:"festival_hide_scrollbar__2D25h"}},1080:function(e){e.exports={pin:"marker_pin__Y6Hot",bounce:"marker_bounce__R466F",pulse:"marker_pulse__xOyHE",pulsate:"marker_pulsate__F4bWp"}}}]);