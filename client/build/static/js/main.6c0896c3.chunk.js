(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},170:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(34),o=a.n(s),c=(a(104),a(10)),i=a(11),l=a(14),u=a(12),p=a(15),m=a(57),h=a.n(m),d=a(47),g=a(22),f=a(81),b=a.n(f),v=Object(g.createMuiTheme)({palette:{primary:b.a},typography:{useNextVariants:!0}}),E=(a(170),a(24)),w=a.n(E),j=a(28),k=a(97),y=a(239),O=a(236),x=a(238),C=a(31),S=Object(C.a)();var N=function(e){return S.push("/secret"),null},T=a(36),B=a.n(T),P=a(32),I=a.n(P),A=a(21),D=a.n(A),R=a(82),L=a.n(R),z=a(83),M=a.n(z),_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L.a,{position:"static"},r.a.createElement(M.a,null,r.a.createElement(D.a,{variant:"h5",color:"inherit"},"Natangelo's Coupon Composium"))))}}]),t}(n.Component),J=a(35),W=a(29),F=a.n(W),q=a(84),V=a.n(q),$=a(85),G=a.n($),H=a(87),K=a.n(H),Q=a(86),U=a.n(Q),X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={redeemed:!1,revealClicked:0},a.handleButtonClick=a.handleButtonClick.bind(Object(J.a)(Object(J.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleButtonClick",value:function(){this.setState({revealClicked:this.state.revealClicked+1}),this.state.revealClicked>=1&&this.setState({redeemed:!0})}},{key:"generateButtonText",value:function(){switch(this.state.revealClicked){case 0:return"Redeem Coupon";case 1:return"Press to Confirm";default:return"Redeemed"}}},{key:"_renderButton",value:function(e){return this.state.redeemed?r.a.createElement(F.a,{onClick:this.handleButtonClick,className:e.claimButton,variant:"contained",size:"small",color:"primary",disabled:!0},this.generateButtonText()):r.a.createElement(F.a,{onClick:this.handleButtonClick,className:e.claimButton,variant:"contained",size:"small",color:"primary"},this.generateButtonText())}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.title,n=e.description;return r.a.createElement(V.a,{className:t.card},r.a.createElement(G.a,{title:a}),r.a.createElement(U.a,{className:t.content},r.a.createElement(D.a,{component:"p"},n)),r.a.createElement(K.a,{className:t.actions},this._renderButton(t)))}}]),t}(n.Component),Y=Object(g.withStyles)(function(e){return{card:{marginTop:24,padding:12},content:{},media:{padding:20,objectFit:"cover"},actions:{marginTop:50},claimButton:{width:"100%",height:50}}})(X),Z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={coupons:null},a.fetchCoupons=Object(j.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/coupons");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=9;break}throw console.log("throwing error"),Error(a.message);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchCoupons().then(function(t){e.setState({coupons:t.coupons})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement("div",{className:e.root},r.a.createElement(D.a,null,"Our state: ".concat(this.state.coupons)),r.a.createElement(I.a,{className:e.grid,container:!0,spacing:16},r.a.createElement(I.a,{item:!0,xs:12,sm:6,className:e.gridItemRight},r.a.createElement(Y,{title:"bob",description:"awpeofjawepf"})),r.a.createElement(I.a,{item:!0,xs:12,sm:6,className:e.gridItemLeft},r.a.createElement(Y,null)),r.a.createElement(I.a,{item:!0,xs:12,sm:6,className:e.gridItemRight},r.a.createElement(Y,null)),r.a.createElement(I.a,{item:!0,xl:12,className:e.gridItemLeft},r.a.createElement(Y,null)))))}}]),t}(n.Component),ee=Object(g.withTheme)()(Object(g.withStyles)(function(e){return{root:{spacing:24,padding:"0 ".concat(3*e.spacing.unit,"px")},grid:{width:"100%",direction:"row",alignItems:"center",justify:"flex-end"},gridItemRight:{},gridItemLeft:{}}})(Z)),te=a(88),ae=a(90),ne=a.n(ae),re=a(89),se=a.n(re),oe=a(93),ce=a.n(oe),ie=a(96),le=a.n(ie),ue=a(95),pe=a.n(ue),me=a(94),he=a.n(me),de=a(92),ge=a.n(de),fe=a(91),be=a.n(fe),ve=a(44),Ee=a.n(ve),we=a(6),je=a.n(we),ke=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={password:"",loading:!1,success:!1,error:""},a.componentDidMount=function(e){a.props.authed&&e.onAuthSuccess("")},a.onSubmitClicked=function(e){e.preventDefault(),a.state.loading||a.setState({loading:!0}),""!==a.state.password&&a.authenticate(a.state.password).then(function(e){var t="ok"===e.message;a.setState({loading:!1,success:t,error:e.errorMsg||""}),t?a.props.onAuthSuccess(e.sessionToken):a.setState({password:""})}).catch(function(e){console.log(e),a.setState({loading:!1})})},a.authenticate=function(){var e=Object(j.a)(w.a.mark(function e(t){var a,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/authenticate",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({password:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onPasswordTextChanged=function(e){a.setState({password:e.target.value})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.success;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,null),r.a.createElement("main",{className:this.props.classes.layout},r.a.createElement(Ee.a,{className:this.props.classes.paper},r.a.createElement("div",{className:this.props.classes.wrapper},r.a.createElement(ne.a,{className:this.props.classes.avatar},a?r.a.createElement(be.a,null):r.a.createElement(ge.a,null)),t&&r.a.createElement(B.a,{size:50,className:this.props.classes.fabProgress})),r.a.createElement("form",{onSubmit:this.onSubmitClicked,className:this.props.classes.form},r.a.createElement(ce.a,{margin:"normal",error:""!==this.state.error,required:!0,fullWidth:!0},r.a.createElement(he.a,{htmlFor:"password"},"Password"),r.a.createElement(pe.a,{onChange:this.onPasswordTextChanged,name:"password",type:"password",id:"password",autoComplete:"current-password",value:this.state.password}),r.a.createElement(le.a,{id:"component-error-text"},this.state.error&&"* ".concat(this.state.error))),r.a.createElement(D.a,null),r.a.createElement("div",{className:this.props.classes.wrapper},r.a.createElement(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:this.props.classes.submit,disabled:t},"Enter"),t&&r.a.createElement(B.a,{size:24,className:this.props.classes.buttonProgress}))))))}}]),t}(n.Component),ye=je()(function(e){return{layout:Object(te.a)({width:"auto",display:"block",marginTop:12*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%"},submit:{marginTop:3*e.spacing.unit},fabProgress:{position:"absolute",top:3,left:3,zIndex:1},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:0,marginLeft:-12},wrapper:{margin:e.spacing.unit,position:"relative"}}})(ke);function Oe(e){var t=e.component,a=e.authed,n=Object(k.a)(e,["component","authed"]),s=n.componentExtraProps;return r.a.createElement(y.a,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,Object.assign({},e,s)):r.a.createElement(O.a,{to:{pathname:"/secret",state:{from:e.location}}})}}))}var xe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authed:!1,loading:!0},a.verifyTokenStatus=function(){var e=Object(j.a)(w.a.mark(function e(t){var a,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/verifyToken",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({userToken:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=9;break}throw console.log("throwing error"),Error(n.message);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a._onAuthSuccessCallback=function(e){if(""!==e){var t=a.props.cookies;a.setState({authed:!0});var n=new Date;n.setDate(n.getDate()+1),t.set("sessionToken",e,{path:"/",expires:n})}S.push("/home"),a.setState({loading:!1})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.cookies.get("sessionToken");void 0!==t?this.verifyTokenStatus(t).then(function(t){e.setState({authed:"ok"===t.message}),e._onAuthSuccessCallback("")}).catch(function(e){return console.log(e)}):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.props.classes;return!0===this.state.loading?r.a.createElement("div",{className:t.root},r.a.createElement(B.a,{className:t.spinner}),r.a.createElement(D.a,{className:t.loadingText,variant:"subtitle1"},"loading...")):r.a.createElement(x.a,null,r.a.createElement(y.a,{path:"/secret",render:function(){return r.a.createElement(ye,{authed:e.state.authed,onAuthSuccess:e._onAuthSuccessCallback})}}),r.a.createElement(Oe,{authed:this.state.authed,path:"/home",componentExtraProps:{cookies:this.props.cookies},component:ee}),r.a.createElement(y.a,{component:N}))}}]),t}(n.Component),Ce=Object(g.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:24*e.spacing.unit},spinner:{marginBottom:3*e.spacing.unit},loadingText:{color:"#BBBBBB"}}})(Object(d.b)(xe)),Se=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{theme:v},r.a.createElement(Ce,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne=a(237);o.a.render(r.a.createElement(Ne.a,{history:S},r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){e.exports=a(235)}},[[99,2,1]]]);
//# sourceMappingURL=main.6c0896c3.chunk.js.map