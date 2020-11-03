(this["webpackJsonpled-matrix"]=this["webpackJsonpled-matrix"]||[]).push([[0],{45:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(3),r=a.n(c),i=a(32),o=a.n(i),l=(a(45),a(71),a(72),a(84)),s=a(65),u=a(30);var O=function(){var e,t=Object(c.useState)("./music/128-waterfall.m4a"),a=Object(u.a)(t,2),r=a[0],i=a[1];function o(e){e.preventDefault(),e.persist(),i(e.target.href),console.log(e.target.parentElement.parentElement.parentElement.firstChild.play),console.log(e.target.href)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("audio",{src:r,controls:!0,autoPlay:!0,ref:function(t){return e=t},onClick:function(){console.log(e)}}),Object(n.jsxs)("ul",{id:"playlist",children:[Object(n.jsx)("li",{className:"current-song",children:Object(n.jsx)("a",{href:"./music/128-waterfall.m4a",onClick:o,children:"1"})}),Object(n.jsx)("li",{className:"",children:Object(n.jsx)("a",{href:"./music/Faxing-Zagreb.m4a",onClick:o,children:"2"})})]})]})},d=a(29),j=function(e){return{type:"PRESET_SWITCH",payload:e}},b=function(){var e=Object(d.c)((function(e){return e.ledChange}));console.log(e);e.alpha,e.isAnimating;var t=e.presetName,a=e.animationDurationState,r=(e.animationDelay,Object(d.b)()),i=Object(c.useState)(0),o=Object(u.a)(i,2),l=o[0],s=o[1];var O=Object(c.useState)(0),b=Object(u.a)(O,2),m=b[0],p=b[1];Object(c.useEffect)((function(){}),[a]);var h=[];var N=[];return function(){for(var e=1;e<33;e++)h.push({ledNumber:e,ledRowNumber:33-e})}(),function(e){for(var t=1;t<e;t++)N.push({rowNumber:t})}(33),Object(n.jsxs)("main",{className:"box-style",children:[Object(n.jsxs)("div",{className:"slidecontainer",children:[Object(n.jsx)("input",{type:"range",min:"0",max:"100",value:l,className:"slider",id:"myRange",onChange:function(e){s(e.target.value),r({type:"ANIMATION_DELAY_CHANGE",payload:(e.target.value/100).toString()})}}),Object(n.jsxs)("p",{style:{color:"white"},children:["animation delay: ",l]}),Object(n.jsx)("input",{type:"range",min:"0",max:"100",value:m,className:"slider",id:"myRange",onChange:function(e){p(e.target.value),r({type:"ANIMATION_DURATION_CHANGE",payload:(e.target.value/100).toString()})}}),Object(n.jsxs)("p",{style:{color:"white"},children:["animation speed: ",m]})]}),Object(n.jsx)("button",{onClick:function(){r(j(""))},children:"rainbowTest"}),Object(n.jsx)("button",{onClick:function(){r(j("V2"))},children:"rainbowV2"}),N.map((function(e,c){return Object(n.jsx)("div",{className:"row".concat(c+1),children:h.map((function(c,r){return Object(n.jsx)("div",{className:"led".concat(r+1,"-").concat(e.rowNumber).concat(t),style:{animationDuration:"".concat(a)}},"led".concat(c.ledNumber,"-").concat(r+1))}))},"row".concat(c+1))}))]})},m=new s.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"}),p=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(l.ApolloProvider,{client:m,children:[Object(n.jsx)(O,{}),Object(n.jsx)(b,{})]})})},h=a(23),N=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return!0;case"LOGOUT":return!1;default:return e}},f=a(10),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alpha:1,presetName:"",animationDurationState:"4s",animationDelayState:".5s"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USER_SPLASH_CONFIG":var a={alpha:t.payload.alpha,presetName:t.payload.presetName,animationDurationState:t.payload.animationDuration,animationDelayState:t.payload.animationDelay};return Object(f.a)(Object(f.a)({},e),{},{newState:a});case"PRESET_SWITCH":return Object(f.a)(Object(f.a)({},e),{},{presetName:t.payload});case"ANIMATION_DELAY_CHANGE":return Object(f.a)(Object(f.a)({},e),{},{animationDelayState:t.payload});case"ANIMATION_DURATION_CHANGE":return Object(f.a)(Object(f.a)({},e),{},{animationDurationState:t.payload});case"STOP_ANIMATING":return Object(f.a)(Object(f.a)({},e),{},{isAnimating:t.payload});case"ALPHA_FADER_CHANGE":return Object(f.a)(Object(f.a)({},e),{},{alpha:t.payload});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SKETCH_ONE_ON":return Object(f.a)(Object(f.a)({},e),{},{isOn:t.payload});default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SKETCH_TWO_ON":return Object(f.a)(Object(f.a)({},e),{},{isOn:t.payload});default:return e}},_=Object(h.b)({isLoggedIn:N,ledChange:g,sketchOne:y,sketchTwo:v}),x=Object(h.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log(x),o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d.a,{store:x,children:Object(n.jsx)(p,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.d1a2b404.chunk.js.map