(this["webpackJsonpstore-pantoja-josue"]=this["webpackJsonpstore-pantoja-josue"]||[]).push([[0],{37:function(t,n,e){},44:function(t,n,e){"use strict";e.r(n);var r,o,i=e(1),c=e.n(i),a=e(27),u=e.n(a),s=(e(37),e(6)),l=e(7),f="#F9F9F9",d="#0AD4FA",p="#fff",b=Object(l.a)(r||(r=Object(s.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif; \n    font-size: 24px;\n}\n\n  body {\n    background-color: ",";\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1.1;\n  }\n\n  ul, li, a, ol {\n    list-style-type: none;\n    text-decoration: none;\n    color: inherit;\n  }\n"])),f),g=e(45),h=Object(l.b)(g.a.div)(o||(o=Object(s.a)(["\n\tposition: ",";\n\ttop: ",";\n\tright: ",";\n\tbottom: ",";\n\tleft: ",";\n\tdisplay: ",";\n\tflex: ",";\n\tgrid-template-columns: ",";\n\tgrid-gap: ",";\n\talign-items: ",";\n\tjustify-content: ",";\n\tflex-direction: ",";\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\tmargin-top: ",";\n\tmargin-bottom: ",";\n\tpadding: ",";\n\tborder-radius: ",";\n\tborder-top: ",";\n\tborder-bottom: ",";\n\tbackground: ",";\n\tcolor: ",";\n\tfont-size: ",";\n\ttransition: ",";\n\tcursor: ",";\n\tbox-shadow: ",";\n\tfilter: ",";\n\tz-index: ",";\n\toverflow: ",";\n\tbackdrop-filter: ",";\n\t-webkit-backdrop-filter: ",";\n"])),(function(t){return t.position}),(function(t){return t.top}),(function(t){return t.right}),(function(t){return t.bottom}),(function(t){return t.left}),(function(t){return t.display?t.display:"flex"}),(function(t){return t.flex}),(function(t){return t.gridColumn}),(function(t){return t.gridGap}),(function(t){return t.alignItems}),(function(t){return t.justifyContent}),(function(t){return t.flexDirection}),(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.margin}),(function(t){return t.marginTop}),(function(t){return t.marginBottom}),(function(t){return t.padding}),(function(t){return t.borderRadius}),(function(t){return t.borderTop}),(function(t){return t.borderBottom}),(function(t){return t.bgColor}),(function(t){return t.color}),(function(t){return t.fontSize}),(function(t){return t.transition}),(function(t){return t.cursor}),(function(t){return t.boxShadow}),(function(t){return t.filter}),(function(t){return t.zIndex}),(function(t){return t.overflow}),(function(t){return t.glass&&"blur(10px )"}),(function(t){return t.glass&&"blur(10px)"})),x=e(5),j=e(25),m=e.n(j),O=e(31),v=function(t,n){var e=Object(i.useState)({data:[],fetched:!1}),r=Object(x.a)(e,2),o=r[0],c=r[1],a=Object(i.useState)(!1),u=Object(x.a)(a,2),s=u[0],l=u[1];return Object(i.useEffect)((function(){t&&function(){var e=Object(O.a)(m.a.mark((function e(){var r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,fetch(t,n);case 4:if(200!==(r=e.sent).status){e.next=11;break}return e.next=8,r.json();case 8:o=e.sent,c({data:o,fetched:!0}),l(!1);case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),{data:o,setData:c,loading:s,setLoading:l}},C=e(32),y=e(2),w=Object(i.createContext)();var S,k,I,D=function(t){var n=t.children,e=Object(i.useState)(0),r=Object(x.a)(e,2),o=r[0],c=r[1],a=Object(i.useState)(!1),u=Object(x.a)(a,2),s=u[0],l=u[1],f=Object(i.useState)(!1),d=Object(x.a)(f,2),p=d[0],b=d[1],g={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRmMTU5MTY3Mjk2ZTAwMTk5NjQxMzYiLCJpYXQiOjE2MjUyMzI3ODV9.VtTEAHztgwB8UpIUoBf0pydVpIrEIRV8QoaqbXopJmQ"},h=v("https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/me",{headers:g}),j=h.data,m=h.setData,O=v(p&&"https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/points",{method:"POST",headers:g,body:JSON.stringify({amount:o})}).data,S=v("https://private-eaac9f-aerolabchallenge.apiary-proxy.com/redeem",{method:"POST",headers:g}),k=S.data,I=S.setData,D=v("https://private-eaac9f-aerolabchallenge.apiary-proxy.com/products",{headers:g}),R=D.data,P=D.setData,z=function(t){var n=Object(i.useState)({data:[]}),e=Object(x.a)(n,2),r=e[0],o=e[1];return Object(i.useEffect)((function(){0===r.data.length&&o({data:t})}),[r.data.length,t]),{sortElements:function(n){var e=Object(C.a)(t);o({data:{default:function(){return t},ascending:function(){return e.sort((function(t,n){return t.cost-n.cost}))},descending:function(){return e.sort((function(t,n){return n.cost-t.cost}))}}[n]()})},sortState:r}}(R.data),A=z.sortState,M=z.sortElements,B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,e=Object(i.useState)(1),r=Object(x.a)(e,2),o=r[0],c=r[1],a=Object(i.useState)(n),u=Object(x.a)(a,2),s=u[0],l=u[1],f=Math.ceil(t.length/n),d=t.length,p=(o-1)*n;return{data:t.slice(p,p+n),totalItems:d,currentItems:s,nextPage:function(){c((function(t){return Math.min(t+1,f)})),l((function(t){return Math.min(t+n,d)}))},prevPage:function(){c((function(t){return Math.max(t-1,1)})),l((function(t){return Math.max(t-n,n)}))},currentPage:o}}(A.data,16),E=B.data,L=B.totalItems,T=B.currentItems,F=B.nextPage,G=B.prevPage,J=B.currentPage;return Object(y.jsx)(w.Provider,{value:{user:j,setUser:m,points:O,redeem:k,setRedeem:I,productList:E,setProducts:P,amount:o,setAmount:c,setFetchPoints:b,fetchPoints:p,pointsModal:s,setPointsModal:l,totalItems:L,currentItems:T,nextPage:F,prevPage:G,currentPage:J,sortElements:M},children:n})},R=Object(l.b)(g.a.p)(S||(S=Object(s.a)(["\n\tposition: ",";\n\ttop: ",";\n\tright: ",";\n\tbottom: ",";\n\tleft: ",";\n\tdisplay: ",";\n\talign-items: ",";\n\tjustify-content: ",";\n\tflex-direction: ",";\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\tmargin-right: ",";\n\tpadding: ",";\n\tborder-top: ",";\n\tborder-right: ",";\n\tborder-bottom: ",";\n\tborder-left: ",";\n\tborder-radius: ",";\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-size: ",";\n\ttransition: ",";\n\tcursor: ",";\n\tbox-shadow: ",";\n"])),(function(t){return t.position}),(function(t){return t.top}),(function(t){return t.right}),(function(t){return t.bottom}),(function(t){return t.left}),(function(t){return t.display}),(function(t){return t.alignItems}),(function(t){return t.justifyContent}),(function(t){return t.flexDirection}),(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.margin}),(function(t){return t.marginRight}),(function(t){return t.padding}),(function(t){return t.borderTop}),(function(t){return t.borderRight}),(function(t){return t.borderBottom}),(function(t){return t.borderLeft}),(function(t){return t.borderRadius}),(function(t){return t.bgColor}),(function(t){return t.color}),(function(t){return t.fontSize}),(function(t){return t.transition}),(function(t){return t.cursor}),(function(t){return t.boxShadow})),P=Object(l.b)(g.a.img)(k||(k=Object(s.a)(["\n\tposition: ",";\n\ttop: ",";\n\tright: ",";\n\tbottom: ",";\n\tleft: ",";\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\tmargin-left: ",";\n\tmargin-right: ",";\n\tpadding: ",";\n\tbackground: ",";\n\tcursor: ",";\n"])),(function(t){return t.position}),(function(t){return t.top}),(function(t){return t.right}),(function(t){return t.bottom}),(function(t){return t.left}),(function(t){return t.width}),(function(t){return t.height?t.height:"auto"}),(function(t){return t.margin}),(function(t){return t.mgL}),(function(t){return t.marginRight}),(function(t){return t.padding}),(function(t){return t.bgColor}),(function(t){return t.pointer&&"pointer"})),z=e.p+"static/media/arrow-left.e6eb9be1.svg",A=e.p+"static/media/arrow-right.3306c112.svg",M=e(26),B=Object(l.b)(g.a.button)(I||(I=Object(s.a)(["\n\tposition: ",";\n\ttop: ",";\n\tright: ",";\n\tbottom: ",";\n\tleft: ",";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\tmargin-left: ",";\n\tmargin-right: ",";\n\tpadding: ",";\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-size: ",";\n\tborder-radius: ",";\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n\tbackdrop-filter: ",";\n\t-webkit-backdrop-filter: ",";\n\tbox-shadow: 0px 0px 4px 1px ",";\n\t\n\n\t&:focus {\n\t\tbox-shadow: 0px 0px 4px 1px\n\t\t\t",";\n\t\t","\n\t}\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.position}),(function(t){return t.top}),(function(t){return t.right}),(function(t){return t.bottom}),(function(t){return t.left}),(function(t){return t.width?t.width:"172px"}),(function(t){return t.height?t.height:"48px"}),(function(t){return t.margin}),(function(t){return t.marginLeft}),(function(t){return t.marginRight}),(function(t){return t.padding?t.padding:"24px 24px"}),(function(t){return t.bgColor?t.bgColor:"#EDEDED"}),(function(t){return t.color?t.color:"#A3A3A3"}),(function(t){return t.fontSize}),(function(t){return t.borderRadius?t.borderRadius:"20.5px"}),(function(t){return t.glass&&"blur( 30px)"}),(function(t){return t.glass&&"blur(30px)"}),(function(t){return t.focusActiveColor?t.focusActiveColor:"transparent"}),(function(t){return t.focusColor?t.focusColor:"rgb(29,31,39, .3)"}),(function(t){return t.focusScale&&"transform: scale(1.1);"}),(function(t){return t.hover?t.focusColor:t.hoverGroup&&t.hoverBgColor}),(function(t){return t.hover?"white":t.hoverGroup&&t.hoverColor})),E=function(t){var n=t.children,e=t.activeBgColor,r=t.defaultBgColor,o=t.activeColor,c=t.defaultColor,a=t.hoverGroup,u=t.focus,s=Object(i.useState)(null),l=Object(x.a)(s,2),f=l[0],d=l[1];return Object(y.jsx)(y.Fragment,{children:n.map((function(t,n){return Object(i.cloneElement)(t,{setActiveButton:function(){return d(n)},key:n,bgColor:f===n?e:r,color:f===n?o:c,focusActiveColor:f===n?e:r,activeColor:o,activeBgColor:e,hoverGroup:a,focusColor:u})}))})},L=function(t){var n=t.setActiveButton,e=t.onClick,r=t.defaultActive,o=t.children,c=t.focusColor,a=t.activeBgColor,u=t.activeColor,s=function(t){n(),e(t)};return Object(i.useEffect)((function(t){r&&(n(),e(t))}),[r,n,e]),Object(y.jsx)(B,Object(M.a)(Object(M.a)({},t),{},{focusColor:c&&a,hoverBgColor:a,hoverColor:u,onClick:function(t){return s(t)},defaultActive:r,children:o}))},T=e.p+"static/media/buy-blue.c5c4f01c.svg",F=e.p+"static/media/buy-white.334de73e.svg",G=e.p+"static/media/coin.448143a3.svg",J=e(46);var N=function(t){var n=t.productId,e=t.productImg,r=t.productCat,o=t.productName,c=t.productCost,a=t.userPoints,u=Object(i.useState)(null),s=Object(x.a)(u,2),l=s[0],f=s[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(h,{position:"relative",flexDirection:"column",alignItems:"center",bgColor:"white",width:"100%",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)",onHoverStart:function(){return f(n)},onHoverEnd:function(){return f(null)},initial:{opacity:0},animate:{opacity:1,transition:{duration:.6}},children:[a>c?Object(y.jsx)(P,{position:"absolute",top:"0",right:"0",margin:"12px",src:T}):Object(y.jsxs)(h,{position:"absolute",top:"0",right:"0",margin:"12px",padding:"11px 20px",borderRadius:"100px",alignItems:"center",bgColor:"rgb(97,97,97,.8)",color:"white",children:[Object(y.jsxs)(R,{marginRight:"6px",fontSize:"14px",children:["You need ",c-a]}),Object(y.jsx)(P,{src:G})]}),Object(y.jsx)(P,{width:"85%",margin:"45px 0px 0px 0px",src:e}),Object(y.jsxs)(h,{width:"80%",borderTop:"1px solid #D9D9D9",flexDirection:"column",padding:"18px 0",children:[Object(y.jsx)(R,{color:"#A3A3A3",fontSize:"16px",children:r}),Object(y.jsx)(R,{color:"#616161",fontSize:"18px",children:o})]}),Object(y.jsx)(J.a,{children:l===n&&a>c&&Object(y.jsxs)(h,{bgColor:"linear-gradient(180deg, rgba(10, 212, 250, 0.7) 0%, rgba(37, 187, 241, 0.4) 100%)",width:"100%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},glass:!0,children:[Object(y.jsx)(P,{position:"absolute",top:"0",right:"0",margin:"12px",src:F}),Object(y.jsxs)(h,{marginBottom:"9px",justifyContent:"center",width:"100%",children:[Object(y.jsx)(R,{marginRight:"12px",fontSize:"36px",color:"white",children:c}),Object(y.jsx)(P,{src:G})]}),Object(y.jsx)(B,{fontSize:"18px",color:"#616161",bgColor:"white",children:"Redeem Now"})]})})]})})};var H=function(){var t=Object(i.useContext)(w),n=t.productList,e=t.user;return Object(y.jsx)(h,{width:"80%",display:"grid",gridColumn:"repeat(4, minmax(100px, 1fr))",gridGap:"24px",padding:"54px 0px",initial:{opacity:0},animate:{opacity:1},children:n.map((function(t){return Object(y.jsx)(N,{productId:t._id,productImg:t.img.url,productCat:t.category,productName:t.name,productCost:t.cost,userPoints:e.data.points},t._id)}))})};var U=function(){var t=Object(i.useContext)(w),n=t.currentPage,e=t.nextPage,r=t.prevPage,o=t.currentItems,c=t.totalItems,a=t.sortElements;return Object(y.jsxs)(h,{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",children:[Object(y.jsxs)(h,{alignItems:"center",width:"80%",padding:"24px 0px",borderBottom:"1px solid #D9D9D9",children:[Object(y.jsx)(R,{padding:"0px 24px",borderRight:"1px solid #D9D9D9",color:"#616161",children:"".concat(o," of ").concat(c," products")}),Object(y.jsx)(R,{padding:"0 0 0 24px",color:"#616161",children:"Sort by:"}),Object(y.jsx)(h,{flex:1,children:Object(y.jsxs)(E,{activeColor:"#ffffff",activeBgColor:"#0AD4FA",hoverGroup:!0,focus:!0,children:[Object(y.jsx)(L,{onClick:function(){return a("default")},fontSize:"20px",margin:"0px 24px",default:!0,children:"Most Recent"}),Object(y.jsx)(L,{onClick:function(){return a("ascending")},fontSize:"20px",marginRight:"24px",children:"Lowest Price"}),Object(y.jsx)(L,{onClick:function(){return a("descending")},fontSize:"20px",marginRight:"24px",children:"Highest Price"})]})}),Object(y.jsxs)(h,{children:[Object(y.jsx)(J.a,{children:n>1&&Object(y.jsx)(P,{marginRight:"10px",pointer:!0,onClick:function(){return r()},src:z,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})}),Object(y.jsx)(P,{pointer:!0,onClick:function(){return e()},src:A})]})]}),Object(y.jsx)(H,{}),Object(y.jsxs)(h,{mgBottom:"64px",justifyContent:"space-between",alignItems:"center",width:"80%",padding:"24px 0px",borderBottom:"1px solid #D9D9D9",children:[Object(y.jsx)(R,{padding:"0px 24px",color:"#616161",children:"".concat(o," of ").concat(c," products")}),Object(y.jsxs)(h,{children:[Object(y.jsx)(J.a,{children:n>1&&Object(y.jsx)(P,{marginRight:"10px",pointer:!0,onClick:function(){return r()},src:z,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})}),Object(y.jsx)(P,{pointer:!0,onClick:function(){return e()},src:A})]})]})]})};var Q,V,Y,X=function(){return Object(y.jsx)(h,{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",marginTop:"42px",children:Object(y.jsx)(U,{})})},_=l.b.header(Q||(Q=Object(s.a)(["\n\tposition: relative;\n\twidth: 100%;\n    height: 100%;\n"]))),q=l.b.nav(V||(V=Object(s.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\theight: 80px;\n\tpadding: 0 42px;\n\tbackground-color: ",";\n"])),p),W=Object(l.b)(g.a.h1)(Y||(Y=Object(s.a)(["\n\tposition: ",";\n\ttop: ",";\n\tright: ",";\n\tbottom: ",";\n\tleft: ",";\n\tdisplay: ",";\n\talign-items: ",";\n\tjustify-content: ",";\n\tflex-direction: ",";\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\tpadding: ",";\n\tborder-radius: ",";\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-size: ",";\n\ttransition: ",";\n\tcursor: ",";\n\tbox-shadow: ",";\n"])),(function(t){return t.position}),(function(t){return t.top}),(function(t){return t.right}),(function(t){return t.bottom}),(function(t){return t.left}),(function(t){return t.display}),(function(t){return t.alignItems}),(function(t){return t.justifyContent}),(function(t){return t.flexDirection}),(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.margin}),(function(t){return t.padding}),(function(t){return t.borderRadius}),(function(t){return t.bgColor}),(function(t){return t.color}),(function(t){return t.fontSize}),(function(t){return t.transition}),(function(t){return t.cursor}),(function(t){return t.boxShadow})),Z=e.p+"static/media/aerolab-logo.0a8fb170.svg",K=e.p+"static/media/header-x1.b6f067c6.png";var $=function(){var t=Object(i.useContext)(w),n=t.setAmount,e=t.fetchPoints,r=t.setFetchPoints,o=function(t){n({1e3:1e3,5e3:5e3,7500:7500}[t]),r(!0)};return Object(i.useEffect)((function(){e&&r(!1)})),Object(y.jsxs)(h,{justifyContent:"center",children:[Object(y.jsxs)(B,{onClick:function(){return o(1e3)},bgColor:"#ffffff21",focusColor:"rgb(68, 221, 248, .7)",marginRight:"10px",width:"90px",borderRadius:"10px",hover:!0,glass:!0,initial:"normal",whileHover:"animation",children:["1000",Object(y.jsx)(P,{variants:{normal:{scale:1},animation:{scale:1.1,transition:{yoyo:1/0}}},mgL:"6px",src:G,alt:"coin"})]}),Object(y.jsxs)(B,{onClick:function(){return o(5e3)},bgColor:"#ffffff37",focusColor:"rgb(68, 221, 248, .7)",marginRight:"10px",width:"90px",borderRadius:"10px",hover:!0,glass:!0,initial:"normal",whileHover:"animation",children:["5000",Object(y.jsx)(P,{variants:{normal:{scale:1},animation:{scale:1.1,transition:{yoyo:1/0}}},mgL:"6px",src:G,alt:"coin"})]}),Object(y.jsxs)(B,{onClick:function(){return o(7500)},bgColor:"#ffffff37",focusColor:"rgb(68, 221, 248, .7)",marginRight:"10px",width:"90px",borderRadius:"10px",hover:!0,glass:!0,initial:"normal",whileHover:"animation",children:["7500",Object(y.jsx)(P,{variants:{normal:{scale:1},animation:{scale:1.1,transition:{yoyo:1/0}}},mgL:"6px",src:G,alt:"coin"})]})]})};var tt=function(){var t=Object(i.useContext)(w).setPointsModal;return Object(y.jsx)(h,{width:"100%",position:"absolute",top:"85px",justifyContent:"flex-end",zIndex:"1",padding:"0 20px",overflow:"hidden",children:Object(y.jsxs)(h,{width:"350px",height:"200px",bgColor:"#fafafab3",flexDirection:"column",justifyContent:"space-around",borderRadius:"10px",alignItems:"center",initial:{x:"100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"100%",opacity:0},glass:!0,children:[Object(y.jsx)(R,{color:"#888888",children:"Select the amount of points!!"}),Object(y.jsx)($,{}),Object(y.jsx)(h,{margin:"0px 20px",justifyContent:"space-around",children:Object(y.jsx)(B,{width:"170px",fontSize:"15px",bgColor:"#00d7fdba",color:"white",onClick:function(){return t(!1)},glass:!0,children:"Cash Later / Close"})})]})})};var nt=function(){var t=Object(i.useContext)(w),n=t.user,e=t.points,r=t.pointsModal,o=t.setPointsModal,c=t.setUserModal;return Object(y.jsxs)(_,{children:[Object(y.jsx)(J.a,{children:r&&Object(y.jsx)(tt,{})}),Object(y.jsxs)(q,{children:[Object(y.jsx)(P,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1,transition:{delay:.2}},src:Z,alt:"aerolablogo"}),Object(y.jsxs)(h,{height:"48px",alignItems:"center",justifyContent:"flex-end",color:"#616161",children:[Object(y.jsx)(B,{width:"150px",height:"48px",bgColor:"transparent",focusColor:p,margin:"0 10px",color:"#616161",focusScale:!0,onClick:function(){return c(!0)},children:n.data.name}),Object(y.jsxs)(B,{width:"130px",height:"48px",borderRadius:"20.5px",color:"#616161",fontSize:"22px",focusColor:d,hover:!0,onClick:function(){return o(!r)},children:[e.fetched?e.data["New Points"]:n.data.points,Object(y.jsx)(P,{mgL:"6px",src:G,alt:"coin"})]})]})]}),Object(y.jsxs)(h,{position:"relative",color:"white",children:[Object(y.jsx)(P,{width:"100%",src:K,alt:"banner"}),Object(y.jsx)(W,{position:"absolute",fontSize:"72px",left:"132px",bottom:"46px",children:"Electronics"})]})]})};var et=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(b,{}),Object(y.jsx)(nt,{}),Object(y.jsx)(X,{})]})};u.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(D,{children:Object(y.jsx)(et,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d5a9797e.chunk.js.map