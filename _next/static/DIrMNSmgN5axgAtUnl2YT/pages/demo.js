(window.webpackJsonp=window.webpackJsonp||[]).push([["c0dc"],{"/eQG":function(e,t,n){n("v5Dd");var r=n("WEpk").Object;e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"9uAx":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){var e=n("oIiN");return{page:e.default||e}}])},"Jo+v":function(e,t,n){e.exports=n("/eQG")},oIiN:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("O40h"),i=n("q1tI"),c=n.n(i),l=n("m/Pd"),m=n.n(l),s=n("vOnD"),u=n("o59O"),d=n("0RWw"),p=n("N39q"),f=n("Ytie"),h=n("r9c7"),g=n("D/Yu"),b=s.d.header.withConfig({displayName:"Header__Wrapper",componentId:"ht3yc7-0"})(["width:100vw;display:flex;align-items:center;justify-content:space-between;height:60px;padding:0.3em 4em;background-color:",";z-index:",";transform:translateY(0);transition:all 0.3s ease-in;color:",";","{height:70px;padding:3px 5em;}"],function(e){return e.theme.colors.primary},function(e){return e.theme.z.high},function(e){return e.theme.colors.white},Object(h.a)("largeDesktop")),y=s.d.div.withConfig({displayName:"Header__SectionWrapper",componentId:"ht3yc7-1"})(["display:flex;align-items:center;> p{letter-spacing:0.75px;}"]),v=s.d.div.withConfig({displayName:"Header__Avatar",componentId:"ht3yc7-2"})(["width:3.2rem;height:3.2rem;background:url(",") no-repeat center/cover;border:solid 1px #e5e5e5;border-radius:50%;margin-left:1em;"],function(e){return e.src}),w=function(){var e=Object(i.useContext)(g.a).user;return c.a.createElement(b,null,c.a.createElement(f.a,null),c.a.createElement(y,null,c.a.createElement("p",null,e.name),c.a.createElement(v,{src:e.avatarUri})))},x=s.d.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-14ssp2l-0"})(["position:relative;height:20vh;overflow:hidden;display:flex;justify-content:center;"]),E=s.d.div.withConfig({displayName:"Footer__Divider",componentId:"sc-14ssp2l-1"})(["width:100%;height:1px;background-color:",";opacity:0.4;margin:5% 0;"],function(e){return e.theme.colors.darkGrey}),C=s.d.p.withConfig({displayName:"Footer__CopyRight",componentId:"sc-14ssp2l-2"})(["color:",";font-size:",";"],function(e){return e.theme.colors.darkGrey},function(e){return e.theme.fontSize.smaller}),_=function(){return c.a.createElement(x,{id:"section-contact"},c.a.createElement("div",{style:{width:"65%"}},c.a.createElement(E,null),c.a.createElement(C,null,"© Turing Chain Limited. All rights reserved")))},N=s.d.main.withConfig({displayName:"Demo__Main",componentId:"sc-1fsqy9d-0"})(["width:65%;margin:auto;"]),k=function(e){var t=e.children,n=e.title,r=void 0===n?p.a:n;return c.a.createElement(s.a,{theme:function(e){return e.color=e.colors.smokyBlack,e.background=e.colors.backgroundWhite,e}},c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null),c.a.createElement(u.a,null),c.a.createElement(m.a,null,c.a.createElement("title",null,r)),c.a.createElement(w,null),c.a.createElement(N,null,t),c.a.createElement(_,null)))},j=n("wEEd"),O=n("642E"),I=n("6W1E"),z=Object(s.d)(I.a).withConfig({displayName:"Title",componentId:"ufdaer-0"})(["font-size:1.75em;color:",";letter-spacing:1.3px;margin-top:0;margin-bottom:0.75em;"],function(e){return e.theme.colors.primary}),S=s.d.div.withConfig({displayName:"AboutMe__Wrapper",componentId:"iv58tb-0"})(["margin-top:10%;"]),W=s.d.div.withConfig({displayName:"AboutMe__InfoWrapper",componentId:"iv58tb-1"})(["width:100%;display:flex;align-items:center;justify-content:space-between;background-color:",";padding:2em 8%;"],function(e){return e.theme.colors.white}),M=s.d.div.withConfig({displayName:"AboutMe__UserWrapper",componentId:"iv58tb-2"})(["display:flex;"]),P=s.d.div.withConfig({displayName:"AboutMe__Avatar",componentId:"iv58tb-3"})(["width:4.5rem;height:4.5rem;border:solid 1px #e6e6e6;background:url(",") center no-repeat/cover;margin-right:1em;border-radius:50%;"],function(e){return e.src}),q=s.d.div.withConfig({displayName:"AboutMe__NameWrapper",componentId:"iv58tb-4"})(["display:flex;flex-direction:column;justify-content:center;.name{white-space:nowrap;font-weight:bold;letter-spacing:1px;font-size:",";margin-bottom:2px;}.join-date{color:#bdbdbd;font-size:",";}"],function(e){return e.theme.fontSize.bigger},function(e){return e.theme.fontSize.smaller}),A=s.d.div.withConfig({displayName:"AboutMe__IconWrapper",componentId:"iv58tb-5"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;width:8em;height:8em;border-radius:50%;border:solid 6px ",";margin-left:2em;"],function(e){return e.theme.colors.primary}),F=Object(s.d)(j.a.p).withConfig({displayName:"AboutMe__AnimatedNumber",componentId:"iv58tb-6"})(["color:",";margin-top:3px;font-size:3em;font-weight:bold;font-family:",";"],function(e){return e.theme.colors.primary},function(e){return e.theme.fontFamily.SFText}),D=function(){var e=Object(i.useContext)(g.a).user,t=Object(i.useContext)(O.a).certs,n=t.filter(function(e){return!!e.verified}).length,r=t.length-n,a=Object(j.b)({number:t.length,from:{number:0}}),o=Object(j.b)({number:n,from:{number:0}}),l=Object(j.b)({number:r,from:{number:0}}),m=[{name:"認證數量",count:t.length,props:a},{name:"已完成認證",count:n,props:o},{name:"認證中",count:r,props:l}];return c.a.createElement(S,null,c.a.createElement(z,null,"關於我"),c.a.createElement(W,null,c.a.createElement(M,null,c.a.createElement(P,{src:e.avatarUri}),c.a.createElement(q,null,c.a.createElement("p",{className:"name"},e.name),c.a.createElement("p",{className:"join-date"},"Join at Jan 2019"))),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},m.map(function(e){return c.a.createElement(A,{key:e.name},c.a.createElement("p",null,e.name),c.a.createElement(F,null,e.props.number.interpolate(function(e){return e.toFixed(0)})))}))))},T=n("doui"),J=s.d.div.withConfig({displayName:"SortControl__Wrapper",componentId:"uyjre4-0"})(["display:flex;color:#bdbdbd;align-items:center;"]),B=s.d.div.withConfig({displayName:"SortControl__Button",componentId:"uyjre4-1"})(["cursor:pointer;color:#9e9e9e;background:",";border-radius:4px;padding:0.5em 0.75em;margin-left:10px;&:hover{opacity:0.8;}"],function(e){return e.theme.colors.grey}),V=function(){return c.a.createElement(J,null,c.a.createElement("p",null,"排序"),c.a.createElement(B,null,"依時間"))};var G={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},R=i.createContext&&i.createContext(G),H=function(){return(H=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},L=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function U(e){return function(t){return i.createElement(X,H({attr:H({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return i.createElement(t.tag,H({key:n},t.attr),e(t.child))})}(e.child))}}function X(e){var t=function(t){var n,r=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var a=e.attr,o=e.title,c=L(e,["attr","title"]);return i.createElement("svg",H({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:H({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),e.children)};return void 0!==R?i.createElement(R.Consumer,null,function(e){return t(e)}):t(G)}var Y=function(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)};Y.displayName="FaCheck";var Q=function(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)};Q.displayName="FaSearch";var K=function(e){return U({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"}}]})(e)};K.displayName="FaShareSquare";var Z=s.d.div.withConfig({displayName:"SearchControl__Wrapper",componentId:"clchgd-0"})(["display:flex;align-items:center;&:hover{cursor:pointer;}"]),$=s.d.input.withConfig({displayName:"SearchControl__Input",componentId:"clchgd-1"})(["width:100%;max-width:",";padding:",";border-bottom:solid 2px #e0e0e0;background:transparent;margin-left:0.5em;color:",";transition:max-width ease-in 0.3s;letter-spacing:0.67px;"],function(e){return e.show?"200px":"0px"},function(e){return e.show?"0px 2px 5px":"0 0 5px"},function(e){return e.theme.colors.darkGrey}),ee=function(e){var t=e.value,n=e.setValue,r=Object(i.useState)(!1),a=Object(T.default)(r,2),o=a[0],l=a[1],m=Object(i.useCallback)(function(){return l(function(e){return!e})},[]);return c.a.createElement(Z,null,c.a.createElement(Q,{color:"#e0e0e0",size:"1.5em",onClick:m}),c.a.createElement($,{type:"text",value:t,show:o,onChange:n}))},te=n("Jo+v"),ne=n.n(te),re=n("4mXO"),ae=n.n(re),oe=n("pLtp"),ie=n.n(oe),ce=n("hfKm"),le=n.n(ce);function me(e,t,n){return t in e?le()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=function(e){return U({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.729 4.271c-.389-.391-1.021-.393-1.414-.004-.104.104-.176.227-.225.355-.832 1.736-1.748 2.715-2.904 3.293-1.297.64-2.786 1.085-5.186 1.085-.13 0-.26.025-.382.076-.245.102-.439.297-.541.541-.101.244-.101.52 0 .764.051.123.124.234.217.326l3.243 3.243-4.537 6.05 6.05-4.537 3.242 3.242c.092.094.203.166.326.217.122.051.252.078.382.078s.26-.027.382-.078c.245-.102.44-.295.541-.541.051-.121.077-.252.077-.381 0-2.4.444-3.889 1.083-5.166.577-1.156 1.556-2.072 3.293-2.904.129-.049.251-.121.354-.225.389-.393.387-1.025-.004-1.414l-3.997-4.02z"}}]})(e)};se.displayName="TiPin";var ue=n("9rZX"),de=n.n(ue),pe=n("cBaE"),fe=n("blJm"),he=s.d.div.withConfig({displayName:"Certs__Wrapper",componentId:"c3qonf-0"})(["display:flex;flex-wrap:wrap;justify-content:flex-start;margin-top:1em;"]),ge=s.d.div.withConfig({displayName:"Certs__CertWrapper",componentId:"c3qonf-1"})(["cursor:pointer;position:relative;width:31%;margin:0 1.75% 3%;background:",";padding:1em 1.5em;font-weight:400;border-radius:10px;box-shadow:0px 0px 15px 0px rgb(0,0,0,0.1);&:first-child{margin-left:0;}&:nth-child(3n){margin-right:0;}> .issuer{color:",";font-size:",";margin-bottom:0.5em;}> .name{font-weight:500;letter-spacing:0.5px;margin-bottom:1em;height:2.5em;overflow:hidden;text-overflow:ellipsis;}.create-data{font-size:",";color:#bdbdbd;}"],function(e){return e.theme.colors.white},function(e){return e.theme.colors.primary},function(e){return e.theme.fontSize.smaller},function(e){return e.theme.fontSize.smaller}),be=s.d.div.withConfig({displayName:"Certs__CertCover",componentId:"c3qonf-2"})(["width:100%;height:8.5em;background:"," url(",") no-repeat center/contain;margin-bottom:1em;"],function(e){return e.theme.colors.white},function(e){return e.src}),ye=s.d.img.withConfig({displayName:"Certs__Icon",componentId:"c3qonf-3"})(["position:absolute;width:2em;bottom:1em;right:1.5em;"]),ve=Object(s.d)(se).withConfig({displayName:"Certs__PinIcon",componentId:"c3qonf-4"})(["position:absolute;top:1em;right:1.5em;"]),we=s.d.div.withConfig({displayName:"Certs__ModalWrapper",componentId:"c3qonf-5"})(["width:35vw;min-width:300px;display:flex;align-items:flex-start;justify-content:center;flex-direction:column;","{background-color:transparent;height:12em;margin-top:0.5em;margin-bottom:1.5em;}.issuer{color:",";margin-bottom:0.75em;}> .name{width:100%;font-size:",";font-weight:500;letter-spacing:0.6px;margin-bottom:1em;height:2.5em;overflow:hidden;text-overflow:ellipsis;}.create-data{color:#bdbdbd;}"],be,function(e){return e.theme.colors.primary},function(e){return e.theme.fontSize.bigger}),xe=s.d.div.withConfig({displayName:"Certs__ModalProgressTitleWrapper",componentId:"c3qonf-6"})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:1em;width:100%;.title{color:",";font-weight:500;}.icon-wrapper{display:flex;align-items:center;}"],function(e){return e.theme.colors.primary}),Ee=s.d.div.withConfig({displayName:"Certs__StyledModalIcon",componentId:"c3qonf-7"})(["cursor:pointer;transition:background-color 0.1s ease-in;display:flex;align-items:center;justify-content:center;width:2em;height:2em;background-color:#eeeeee;border-radius:50%;margin-right:1em;&:hover{background-color:",";svg{color:white !important;}}",""],function(e){return e.theme.colors.primary},function(e){return e.pin&&Object(s.c)(["background-color:",";svg{color:white !important;}"],e.theme.colors.primary)}),Ce=s.d.div.withConfig({displayName:"Certs__Divider",componentId:"c3qonf-8"})(["width:100%;height:1px;background:#eeeeee;margin-top:2em;margin-bottom:1em;"]),_e=s.d.div.withConfig({displayName:"Certs__Progress",componentId:"c3qonf-9"})(["display:flex;align-items:center;font-size:",";margin-bottom:1em;color:",";.icon-wrapper{display:flex;align-items:center;justify-content:center;border-radius:50%;width:1.2em;height:1.2em;background-color:",";margin-right:1em;margin-top:3px;}"],function(e){return e.theme.fontSize.smaller},function(e){return e.success?e.theme.color:"#bdbdbd"},function(e){return e.success?"#0035ad":"#bdbdbd"}),Ne=[{key:"connect",name:"Connected To The Blockchain"},{key:"retrive",name:"Retrieved Credentials"},{key:"verify-account",name:"Verified Account Info"},{key:"verify-cert",name:"Verified Certificate Integrity"},{key:"verify-source",name:"Verified Source Authenticity"}],ke=function(e){var t=e.certs,n=e.updateCert,r=Object(i.useState)(-1),a=Object(T.default)(r,2),o=a[0],l=a[1],m=t[o];return c.a.createElement(he,null,t.map(function(e,t){return c.a.createElement(ge,{key:e.ipfs,onClick:function(){return l(t)}},c.a.createElement(be,{src:e.coverUri}),c.a.createElement("p",{className:"issuer"},e.issuer),c.a.createElement("p",{className:"name"},e.name),c.a.createElement("p",{className:"create-data"},"June 2019"),c.a.createElement(ye,{src:Object(pe.a)("/static/icon/icon-certicheck.png"),srcSet:"".concat(Object(pe.a)("/static/icon/icon-certicheck@2x.png")," 2x, ").concat(Object(pe.a)("/static/icon/icon-certicheck@3x.png")," 3x")}),e.pin&&c.a.createElement(ve,{color:fe.a.colors.primary,size:"1.1em"}))}),o>=0&&c.a.createElement(de.a,{className:"ReactModal__Cert_Content",isOpen:o>=0,onRequestClose:function(){return l(-1)},style:{overlay:{background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center"},content:{position:"relative",borderRadius:"10px",backgroundColor:"#fafafa",padding:"2em"}}},c.a.createElement(we,null,c.a.createElement(be,{src:m.coverUri}),c.a.createElement("p",{className:"issuer"},m.issuer),c.a.createElement("p",{className:"name"},m.name,"1"),c.a.createElement("p",{className:"create-data"},"June 2019"),c.a.createElement(Ce,null),c.a.createElement(xe,null,c.a.createElement("p",{className:"title"},"認證進度"),c.a.createElement("div",{className:"icon-wrapper"},c.a.createElement(Ee,{pin:m.pin,onClick:function(){console.log(123),n(m.ipfs,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=ie()(n);"function"==typeof ae.a&&(r=r.concat(ae()(n).filter(function(e){return ne()(n,e).enumerable}))),r.forEach(function(t){me(e,t,n[t])})}return e}({},m,{pin:!m.pin}))}},c.a.createElement(se,{size:"1.3em",color:fe.a.colors.darkGrey})),c.a.createElement(Ee,null,c.a.createElement(K,{size:"1.1em",color:fe.a.colors.darkGrey})))),c.a.createElement("div",null,Ne.map(function(e,t){return c.a.createElement(_e,{key:e.key,success:m.progress[t]},c.a.createElement("div",{className:"icon-wrapper"},c.a.createElement(Y,{size:".8em",color:"white"})),c.a.createElement("p",null,e.name))})))))},je=s.d.div.withConfig({displayName:"MyCerts__Wrapper",componentId:"kp7bly-0"})(["margin-top:8%;"]),Oe=s.d.div.withConfig({displayName:"MyCerts__ControlWrapper",componentId:"kp7bly-1"})(["display:flex;align-items:center;justify-content:space-between;"]),Ie=function(){var e=Object(i.useContext)(O.a),t=e.certs,n=e.updateCert,r=Object(i.useState)(""),a=Object(T.default)(r,2),o=a[0],l=a[1],m=Object(i.useMemo)(function(){return o?t.filter(function(e){return e.name.includes(o)}):t},[t,o]);return c.a.createElement(je,null,c.a.createElement(z,null,"我的證書"),c.a.createElement("div",null,c.a.createElement(Oe,null,c.a.createElement(V,null),c.a.createElement(ee,{value:o,setValue:function(e){return l(e.target.value)}})),c.a.createElement(ke,{certs:m,updateCert:n})))},ze=function(){return c.a.createElement(k,{title:"Demo | "+p.a},c.a.createElement(D,null),c.a.createElement(Ie,null))};ze.getInitialProps=Object(o.default)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common","demo"]});case 1:case"end":return e.stop()}},e)}));t.default=ze},v5Dd:function(e,t,n){var r=n("NsO/"),a=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(e,t){return a(r(e),t)}})}},[["9uAx","5d41","9da1"]]]);