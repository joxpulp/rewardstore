(this["webpackJsonpstore-pantoja-josue"]=this["webpackJsonpstore-pantoja-josue"]||[]).push([[0],{49:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var i,o=n(0),r=n.n(o),c=n(40),a=n.n(c),s=(n(49),n(9)),u=n(10),l="#F9F9F9",p="#0AD4FA",d="#fff",x=Object(u.a)(i||(i=Object(s.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif; \n    font-size: 24px;\n}\n\n  body {\n    background-color: ",";\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1.1;\n  }\n\n  ul, li, a, ol {\n    list-style-type: none;\n    text-decoration: none;\n    color: inherit;\n  }\n"])),l),j=n(7),b=n(36),f=n.n(b),h=n(44),g=function(t,e){var n=Object(o.useState)({data:[],fetched:!1}),i=Object(j.a)(n,2),r=i[0],c=i[1],a=Object(o.useState)(!1),s=Object(j.a)(a,2),u=s[0],l=s[1];return Object(o.useEffect)((function(){t&&function(){var n=Object(h.a)(f.a.mark((function n(){var i,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,fetch(t,e);case 4:if(200!==(i=n.sent).status){n.next=11;break}return n.next=8,i.json();case 8:o=n.sent,c({data:o,fetched:!0}),l(!1);case 11:n.next=16;break;case 13:throw n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}()()}),[t]),{data:r,setData:c,loading:u,setLoading:l}},m=n(2),O=Object(o.createContext)();var y,v,C,w,S,D,k,I=function(t){var e=t.children,n=Object(o.useState)(0),i=Object(j.a)(n,2),r=i[0],c=i[1],a=Object(o.useState)(""),s=Object(j.a)(a,2),u=s[0],l=s[1],p=Object(o.useState)(!1),d=Object(j.a)(p,2),x=d[0],b=d[1],f=Object(o.useState)(!1),h=Object(j.a)(f,2),y=h[0],v=h[1],C=Object(o.useState)(!1),w=Object(j.a)(C,2),S=w[0],D=w[1],k=Object(o.useState)(!1),I=Object(j.a)(k,2),P=I[0],R=I[1],A=Object(o.useState)({points:0}),z=Object(j.a)(A,2),M=z[0],E=z[1],L={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRmMTU5MTY3Mjk2ZTAwMTk5NjQxMzYiLCJpYXQiOjE2MjUyMzI3ODV9.VtTEAHztgwB8UpIUoBf0pydVpIrEIRV8QoaqbXopJmQ"},B=g("https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/me",{headers:L}).data,F=g(y&&"https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/points",{method:"POST",headers:L,body:JSON.stringify({amount:r})}),T=F.data,N=F.setData,H=g(S&&"https://private-eaac9f-aerolabchallenge.apiary-proxy.com/redeem",{method:"POST",headers:L,body:JSON.stringify({productId:u})}),J=H.data,G=H.setData,U=g("https://private-eaac9f-aerolabchallenge.apiary-proxy.com/products",{headers:L}),Q=U.data,V=U.setData,Y=g(P&&"https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/history",{headers:L}).data;return Object(m.jsx)(O.Provider,{value:{user:B,points:T,redeem:J,setRedeem:G,products:Q,setProducts:V,amount:r,setAmount:c,setRedeemId:l,fetchPoints:y,setFetchPoints:v,fetchRedeem:S,setFetchRedeem:D,pointsModal:x,setPointsModal:b,currentPoints:M,setCurrentPoints:E,setPoints:N,history:Y,fetchHistory:P,setFetchHistory:R},children:e})},P=n(27),R=n(64),A=u.b.header(y||(y=Object(s.a)(["\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n"]))),z=u.b.nav(v||(v=Object(s.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\theight: 80px;\n\tpadding: 0 42px;\n\tbackground-color: ",";\n\n\t@media (max-width: 40em) {\n\t\tflex-direction: column;\n\t\tpadding: 10px 5px;\n\t\theight: auto;\n\t\t\n\t}\n"])),d),M=n(3),E=n(63),L=Object(u.b)(E.a.h1)(C||(C=Object(s.a)(["\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\ttransition: ",";\n\tcursor: ",";\n"])),M.i,M.c,M.j,M.f,M.d,M.e,M.b,M.g,M.h,(function(t){return t.transition}),(function(t){return t.cursor})),B=Object(u.b)(E.a.button)(w||(w=Object(s.a)(["\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: ",";\n\theight: ",";\n\tpadding: ",";\n\tbackground-color: ",";\n\tcolor: ",";\n\tborder-radius: ",";\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n\tbackdrop-filter: ",";\n\t-webkit-backdrop-filter: ",";\n\tbox-shadow: 0px 0px 4px 1px\n\t\t",";\n\n\t&:focus {\n\t\tbox-shadow: 0px 0px 4px 1px\n\t\t\t",";\n\t\t","\n\t}\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t\t","\n\t}\n"])),M.i,M.c,M.j,M.f,M.d,M.g,(function(t){return t.width?t.width:"172px"}),(function(t){return t.height?t.height:"48px"}),(function(t){return t.padding?t.padding:"24px"}),(function(t){return t.bg?t.bg:"#EDEDED"}),(function(t){return t.color?t.color:"#A3A3A3"}),(function(t){return t.borderRadius?t.borderRadius:"20.5px"}),(function(t){return t.glass&&"blur( 30px)"}),(function(t){return t.glass&&"blur(30px)"}),(function(t){return t.focusActiveColor?t.focusActiveColor:"transparent"}),(function(t){return t.focusColor?t.focusColor:"rgb(29,31,39, .3)"}),(function(t){return t.focusScale&&"transform: scale(1.1);"}),(function(t){return t.hover?t.focusColor:t.hoverGroup&&t.hoverbg}),(function(t){return t.hover?"white":t.hoverGroup&&t.hoverColor}),(function(t){return t.focusScale&&"transform: scale(1.2);"})),F=Object(u.b)(E.a.img)(S||(S=Object(s.a)(["\n\tposition: ",";\n\ttop: ",";\n\tright: ",";\n\tbottom: ",";\n\tleft: ",";\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\tmargin-left: ",";\n\tmargin-right: ",";\n\tpadding: ",";\n\tbackground: ",";\n\tcursor: ",";\n"])),(function(t){return t.position}),(function(t){return t.top}),(function(t){return t.right}),(function(t){return t.bottom}),(function(t){return t.left}),(function(t){return t.width}),(function(t){return t.height?t.height:"auto"}),(function(t){return t.margin}),(function(t){return t.mgL}),(function(t){return t.marginRight}),(function(t){return t.padding}),(function(t){return t.bg}),(function(t){return t.pointer&&"pointer"})),T=Object(u.b)(E.a.div)(D||(D=Object(s.a)(["\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\tdisplay: ",";\n\tcursor: ",";\n\tbackdrop-filter: ",";\n\t-webkit-backdrop-filter: ",";\n"])),M.i,M.c,M.j,M.f,M.d,M.e,M.b,M.g,M.h,M.a,(function(t){return t.display?t.display:"flex"}),(function(t){return t.cursor}),(function(t){return t.glass&&"blur(10px )"}),(function(t){return t.glass&&"blur(10px)"})),N=n.p+"static/media/aerolab-logo.0a8fb170.svg",H=n.p+"static/media/coin.448143a3.svg",J=n.p+"static/media/header-x1.b6f067c6.png",G=Object(u.b)(E.a.p)(k||(k=Object(s.a)(["\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\t","\n\ttransition: ",";\n\tcursor: ",";\n"])),M.i,M.c,M.j,M.f,M.d,M.e,M.b,M.g,M.h,(function(t){return t.transition}),(function(t){return t.cursor}));var U=function(){var t=Object(o.useContext)(O),e=t.setAmount,n=t.fetchPoints,i=t.setFetchPoints,r=t.setPoints,c=function(t){e({1e3:1e3,5e3:5e3,7500:7500}[t]),i(!0),r({fetched:!1})};return Object(o.useEffect)((function(){n&&i(!1)})),Object(m.jsxs)(T,{justifyContent:"center",children:[Object(m.jsxs)(B,{onClick:function(){return c(1e3)},bg:"#ffffff21",color:["#686868","#888888"],focusColor:"rgb(68, 221, 248, .7)",marginRight:"10px",width:"90px",borderRadius:"10px",hover:!0,glass:!0,initial:"normal",whileHover:"animation",children:["1000",Object(m.jsx)(F,{variants:{normal:{scale:1},animation:{scale:1.1,transition:{yoyo:1/0}}},mgL:"6px",src:H,alt:"coin"})]}),Object(m.jsxs)(B,{onClick:function(){return c(5e3)},bg:"#ffffff21",color:["#686868","#888888"],focusColor:"rgb(68, 221, 248, .7)",marginRight:"10px",width:"90px",borderRadius:"10px",hover:!0,glass:!0,initial:"normal",whileHover:"animation",children:["5000",Object(m.jsx)(F,{variants:{normal:{scale:1},animation:{scale:1.1,transition:{yoyo:1/0}}},mgL:"6px",src:H,alt:"coin"})]}),Object(m.jsxs)(B,{onClick:function(){return c(7500)},bg:"#ffffff21",color:["#686868","#888888"],focusColor:"rgb(68, 221, 248, .7)",marginRight:"10px",width:"90px",borderRadius:"10px",hover:!0,glass:!0,initial:"normal",whileHover:"animation",children:["7500",Object(m.jsx)(F,{variants:{normal:{scale:1},animation:{scale:1.1,transition:{yoyo:1/0}}},mgL:"6px",src:H,alt:"coin"})]})]})};var Q=function(){var t=Object(o.useContext)(O).setPointsModal;return Object(m.jsx)(T,{position:"absolute",width:"100%",height:["100%"],top:["115px","115px","85px"],justifyContent:"flex-end",zIndex:"1",padding:"0 20px",overflow:"hidden",children:Object(m.jsxs)(T,{width:"350px",height:"200px",bg:["#edededd3","#ffffffd4","#fafafab3"],flexDirection:"column",justifyContent:"space-around",borderRadius:"10px",alignItems:"center",initial:{x:"100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"100%",opacity:0},glass:!0,children:[Object(m.jsx)(G,{color:["#686868","#888888"],children:"Select the amount of points!!"}),Object(m.jsx)(U,{}),Object(m.jsx)(T,{margin:"0px 20px",justifyContent:"space-around",children:Object(m.jsx)(B,{width:"170px",fontSize:"15px",bg:["#00d7fd","#00d7fdba"],color:"white",onClick:function(){return t(!1)},glass:!0,children:"Cash Later / Close"})})]})})};var V=function(){var t=Object(o.useContext)(O),e=t.user,n=t.pointsModal,i=t.setPointsModal,r=t.currentPoints,c=t.setCurrentPoints,a=t.points,s=t.setFetchHistory,u=t.fetchHistory;return Object(o.useEffect)((function(){c({points:e.data.points})}),[e.data.points]),Object(o.useEffect)((function(){a.fetched&&c({points:a.data["New Points"]}),u&&s(!1)}),[a.fetched,u]),console.log(u),Object(m.jsxs)(A,{children:[Object(m.jsx)(R.a,{children:n&&Object(m.jsx)(Q,{})}),Object(m.jsxs)(z,{children:[Object(m.jsx)(P.b,{to:"/rewardstore",children:Object(m.jsx)(F,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1,transition:{delay:.2}},src:N,alt:"aerolablogo",focusScale:!0})}),Object(m.jsxs)(T,{width:"100%",height:"48px",alignItems:"center",justifyContent:["space-between","flex-end"],color:"#616161",children:[Object(m.jsx)(P.b,{to:"/userhistory",children:Object(m.jsx)(B,{width:"120px",height:"48px",bg:"transparent",focusColor:d,mx:[0,"10px"],borderRadius:"none",padding:"0",color:"#616161",focusScale:!0,onClick:function(){return s(!0)},children:e.data.name})}),Object(m.jsxs)(B,{width:"130px",height:"48px",borderRadius:"20.5px",color:"#616161",fontSize:"22px",focusColor:p,hover:!0,onClick:function(){return i(!n)},children:[r.points,Object(m.jsx)(F,{mgL:"6px",src:H,alt:"coin"})]})]})]}),Object(m.jsxs)(T,{position:"relative",color:"white",children:[Object(m.jsx)(F,{width:"100%",src:J,alt:"banner"}),Object(m.jsx)(L,{overflow:"hidden",position:"absolute",fontSize:["40px","72px"],left:["20px","20px","132px"],bottom:["20px","20px","46px"],children:"Electronics"})]})]})},Y=n(32),X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=Object(o.useState)(1),i=Object(j.a)(n,2),r=i[0],c=i[1],a=Object(o.useState)(e),s=Object(j.a)(a,2),u=s[0],l=s[1],p=Math.ceil(t.length/e),d=t.length,x=(r-1)*e,b=t.slice(x,x+e),f=function(){c((function(t){return Math.min(t+1,p)})),l((function(t){return Math.min(t+e,d)}))},h=function(){c((function(t){return Math.max(t-1,1)})),l((function(t){return Math.max(t-e,e)}))};return{data:b,totalItems:d,currentItems:u,nextPage:f,prevPage:h,currentPage:r}},_=n.p+"static/media/arrow-left.e6eb9be1.svg",q=n.p+"static/media/arrow-right.3306c112.svg",W=n(39),Z=function(t){var e=t.children,n=t.activebg,i=t.defaultbg,r=t.activeColor,c=t.defaultColor,a=t.hoverGroup,s=t.focus,u=Object(o.useState)(null),l=Object(j.a)(u,2),p=l[0],d=l[1];return Object(m.jsx)(m.Fragment,{children:e.map((function(t,e){return Object(o.cloneElement)(t,{setActiveButton:function(){return d(e)},key:e,bg:p===e?n:i,color:p===e?r:c,focusActiveColor:p===e?n:i,activeColor:r,activebg:n,hoverGroup:a,focusColor:s})}))})},K=function(t){return Object(o.useEffect)((function(e){t.defaultActive&&(t.setActiveButton(),t.onClick(e))}),[]),Object(m.jsx)(B,Object(W.a)(Object(W.a)({},t),{},{focusColor:t.focusColor&&t.activebg,hoverbg:t.activebg,hoverColor:t.activeColor,onClick:function(e){return function(e){t.setActiveButton(),t.onClick(e)}(e)},defaultActive:t.defaultActive,children:t.children}))},$=n.p+"static/media/buy-blue.c5c4f01c.svg",tt=n.p+"static/media/buy-white.334de73e.svg";var et=function(t){var e=t.productId,n=t.productImg,i=t.productCat,r=t.productName,c=t.productCost,a=t.currentPoints,s=t.onClick,u=Object(o.useState)(null),l=Object(j.a)(u,2),p=l[0],d=l[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(T,{position:"relative",flexDirection:"column",alignItems:"center",bg:"white",width:"100%",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)",onMouseEnter:function(){return d(e)},onMouseLeave:function(){return d(null)},initial:{opacity:0},animate:{opacity:1,transition:{duration:.6}},children:[a>=c?Object(m.jsx)(F,{position:"absolute",top:"0",right:"0",margin:"12px",src:$,initial:{opacity:0},animate:{opacity:1}}):Object(m.jsxs)(T,{position:"absolute",top:"0",right:"0",margin:"12px",padding:"11px 20px",borderRadius:"100px",alignItems:"center",bg:"rgb(97,97,97,.8)",color:"white",initial:{opacity:0},animate:{opacity:1},children:[Object(m.jsxs)(G,{marginRight:"6px",fontSize:"14px",children:["You need ",c-a]}),Object(m.jsx)(F,{src:H})]}),Object(m.jsx)(F,{width:"85%",margin:"45px 0px 0px 0px",src:n}),Object(m.jsxs)(T,{width:"80%",borderTop:"1px solid #D9D9D9",flexDirection:"column",padding:"18px 0px",children:[Object(m.jsx)(G,{color:"#A3A3A3",fontSize:"16px",children:i}),Object(m.jsx)(G,{color:"#616161",fontSize:"18px",children:r})]}),Object(m.jsx)(R.a,{children:p===e&&a>=c&&Object(m.jsxs)(T,{background:"linear-gradient(180deg, rgba(10, 212, 250, 0.7) 0%, rgba(37, 187, 241, 0.4) 100%)",width:"100%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},glass:!0,children:[Object(m.jsx)(F,{position:"absolute",top:"0",right:"0",margin:"12px",src:tt}),Object(m.jsxs)(T,{marginBottom:"9px",justifyContent:"center",width:"100%",children:[Object(m.jsx)(G,{marginRight:"12px",fontSize:"36px",color:"white",children:c}),Object(m.jsx)(F,{src:H})]}),Object(m.jsx)(B,{onClick:s,fontSize:"18px",color:"#616161",bg:"white",children:"Redeem Now"})]})})]})})};var nt=function(t){var e=t.productList,n=Object(o.useContext)(O),i=n.setRedeemId,r=n.fetchRedeem,c=n.setFetchRedeem,a=n.currentPoints,s=n.setCurrentPoints;return Object(o.useEffect)((function(){r&&c(!1)})),Object(m.jsx)(T,{width:"80%",display:["flex","grid"],gridTemplateColumns:[null,"repeat(2, minmax(100px, 1fr))","repeat(4, minmax(100px, 1fr))"],gridGap:"24px",padding:"54px 0px",initial:{opacity:0},animate:{opacity:1},flexDirection:["column"],children:e.map((function(t){return Object(m.jsx)(et,{productId:t._id,productImg:t.img.url,productCat:t.category,productName:t.name,productCost:t.cost,currentPoints:a.points,onClick:function(){return function(t,e,n){i(t),c(!0),s({points:n>=0&&n-e})}(t._id,t.cost,a.points)}},t._id)}))})};var it=function(){var t=function(t){var e=Object(o.useState)({data:[]}),n=Object(j.a)(e,2),i=n[0],r=n[1],c=Object(Y.a)(t);return Object(o.useEffect)((function(){0===i.data.length&&r({data:t})}),[i.data.length,t]),{sortElements:function(e){r({data:{default:function(){return t},ascending:function(){return c.sort((function(t,e){return t.cost-e.cost}))},descending:function(){return c.sort((function(t,e){return e.cost-t.cost}))}}[e]()})},sortState:i}}(Object(o.useContext)(O).products.data),e=t.sortState,n=t.sortElements,i=X(e.data,16),r=i.data,c=i.totalItems,a=i.currentItems,s=i.nextPage,u=i.prevPage,l=i.currentPage;return Object(m.jsxs)(T,{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",initial:{opacity:0},animate:{opacity:1,transition:{delay:.5,duration:.5}},exit:{x:"-100%",transition:{ease:"easeInOut"}},children:[Object(m.jsxs)(T,{alignItems:"center",flexDirection:["column","column","row"],width:["95%","80%"],py:["24px"],borderBottom:"1px solid #D9D9D9",children:[Object(m.jsx)(G,{padding:"0px 24px",borderRight:["none","none","1px solid #D9D9D9"],color:"#616161",children:"".concat(a," of ").concat(c," products")}),Object(m.jsx)(G,{display:["none","none","flex"],paddingLeft:[0,0,"24px"],color:"#616161",children:"Sort by:"}),Object(m.jsx)(T,{my:"10px",flex:1,children:Object(m.jsxs)(Z,{activeColor:"#ffffff",activebg:"#0AD4FA",hoverGroup:!0,focus:!0,children:[Object(m.jsx)(K,{onClick:function(){return n("default")},fontSize:["15px","20px"],width:["100%","172px"],mx:["6px","6px","24px"],my:["5px","5px",0],defaultActive:!0,children:"Most Recent"}),Object(m.jsx)(K,{onClick:function(){return n("ascending")},fontSize:["15px","20px"],width:["100%","172px"],mx:["6px","6px","24px"],my:["5px","5px",0],children:"Lowest Price"}),Object(m.jsx)(K,{onClick:function(){return n("descending")},fontSize:["15px","20px"],width:["100%","172px"],mx:["6px","6px","24px"],my:["5px","5px",0],children:"Highest Price"})]})}),Object(m.jsxs)(T,{children:[Object(m.jsx)(R.a,{children:l>1&&Object(m.jsx)(F,{marginRight:"10px",pointer:!0,onClick:function(){return u()},src:_,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})}),Object(m.jsx)(F,{pointer:!0,onClick:function(){return s()},src:q})]})]}),Object(m.jsx)(nt,{productList:r}),Object(m.jsxs)(T,{marginBottom:"64px",justifyContent:"space-between",alignItems:"center",width:"80%",padding:"24px 0px",borderBottom:"1px solid #D9D9D9",children:[Object(m.jsx)(G,{padding:"0px 24px",color:"#616161",children:"".concat(a," of ").concat(c," products")}),Object(m.jsxs)(T,{children:[Object(m.jsx)(R.a,{children:l>1&&Object(m.jsx)(F,{marginRight:"10px",pointer:!0,onClick:function(){return u()},src:_,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})}),Object(m.jsx)(F,{pointer:!0,onClick:function(){return s()},src:q})]})]})]})};var ot=function(t){var e=t.productImg,n=t.productCat,i=t.productName,o=t.productCost;return Object(m.jsxs)(T,{position:"relative",flexDirection:"column",alignItems:"center",bg:"white",width:"100%",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)",initial:{opacity:0},animate:{opacity:1,transition:{duration:.6}},children:[Object(m.jsx)(F,{width:"85%",margin:"45px 0px 0px 0px",src:e}),Object(m.jsxs)(T,{width:"80%",borderTop:"1px solid #D9D9D9",flexDirection:"column",padding:"18px 0px",children:[Object(m.jsx)(G,{color:"#A3A3A3",fontSize:"16px",children:n}),Object(m.jsx)(G,{color:"#616161",fontSize:"18px",children:i}),Object(m.jsxs)(G,{color:"#616161",fontSize:"18px",children:["Paid: ",o]})]})]})};var rt=function(t){var e=t.historyList;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(T,{width:"80%",display:["flex","grid"],gridTemplateColumns:[null,"repeat(2, minmax(100px, 1fr))","repeat(4, minmax(100px, 1fr))"],gridGap:"24px",padding:"54px 0px",initial:{opacity:0},animate:{opacity:1},flexDirection:["column"],children:e.map((function(t,e){return Object(m.jsx)(ot,{productImg:t.img.url,productCat:t.category,productName:t.name,productCost:t.cost},e)}))})})};var ct=function(){var t=Object(o.useContext)(O).history,e=Object(Y.a)(t.data).reverse(),n=X(e,16),i=n.data,r=n.totalItems,c=n.currentItems,a=n.nextPage,s=n.prevPage,u=n.currentPage;return Object(m.jsxs)(T,{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",initial:{opacity:0},animate:{opacity:1,transition:{delay:.5,duration:.5}},exit:{x:"-100%",transition:{ease:"easeInOut"}},children:[Object(m.jsxs)(T,{alignItems:"center",flexDirection:["column","column","row"],width:"80%",padding:"24px 0px",borderBottom:"1px solid #D9D9D9",children:[Object(m.jsx)(G,{padding:"0px 24px",borderRight:["none","none","1px solid #D9D9D9"],color:"#616161",children:"".concat(c," of ").concat(r," products")}),Object(m.jsx)(T,{flex:1,justifyContent:"center",children:Object(m.jsx)(L,{color:"#838383",children:"User History of Redeemed Products"})}),Object(m.jsxs)(T,{marginTop:["10px",null],children:[Object(m.jsx)(R.a,{children:u>1&&Object(m.jsx)(F,{marginRight:"10px",pointer:!0,onClick:function(){return s()},src:_,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})}),Object(m.jsx)(F,{pointer:!0,onClick:function(){return a()},src:q})]})]}),Object(m.jsx)(rt,{historyList:i}),Object(m.jsxs)(T,{marginBottom:"64px",justifyContent:"space-between",alignItems:"center",width:"80%",padding:"24px 0px",borderBottom:"1px solid #D9D9D9",children:[Object(m.jsx)(G,{padding:"0px 24px",color:"#616161",children:"".concat(c," of ").concat(r," products")}),Object(m.jsxs)(T,{children:[Object(m.jsx)(R.a,{children:u>1&&Object(m.jsx)(F,{marginRight:"10px",pointer:!0,onClick:function(){return s()},src:_,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})}),Object(m.jsx)(F,{pointer:!0,onClick:function(){return a()},src:q})]})]})]})},at=n(5);var st=function(){var t=Object(at.f)();return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(x,{}),Object(m.jsx)(V,{}),Object(m.jsx)(T,{width:"100%",marginTop:[0,0,"42px"],children:Object(m.jsx)(R.a,{children:Object(m.jsxs)(at.c,{location:t,children:[Object(m.jsx)(at.a,{exact:!0,path:"/rewardstore",children:Object(m.jsx)(it,{})}),Object(m.jsx)(at.a,{exact:!0,path:"/userhistory",children:Object(m.jsx)(ct,{})})]},t.key)})})]})};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P.a,{children:Object(m.jsx)(I,{children:Object(m.jsx)(st,{})})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.5e6b5856.chunk.js.map