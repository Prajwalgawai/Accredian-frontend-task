(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t(23),c=t.n(l),r=t(20),n=t(6),o=t(19),i=t.n(o),d=t(2);var j=()=>{const[e,a]=Object(s.useState)(!1),t=Object(n.o)();i.a.defaults.withCredentials=!0,Object(s.useEffect)((()=>{(async()=>{try{!0===(await i.a.get("http://localhost:8000/login")).data.login?a(!0):a(!1)}catch(e){console.error("Error checking login:",e)}})()}),[t]),Object(s.useEffect)((()=>{localStorage.getItem("Profile")&&a(!0)}),[t]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg",style:{background:"rgb(42 101 206)"},children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(r.c,{className:"navbar-brand text-white",to:"/",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto ",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(r.c,{to:"/",className:"nav-link text-white",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item active",children:!1===e?Object(d.jsx)(r.c,{to:"/login",className:"nav-link text-white",children:"Login"}):Object(d.jsx)(r.b,{className:"nav-link text-white",onClick:()=>{(async()=>{try{"logOut"===(await i.a.get("http://localhost:8000/logout")).data&&(localStorage.clear(),a(!1),t("/login"))}catch(e){console.error("Error during logout:",e)}})()},children:"LogOut"})})]})})]})})})};var b=()=>{const e=Object(n.o)();return Object(s.useEffect)((()=>{(async()=>{let a=await i.a.get("http://localhost:8000/login");console.log(a),a.data.user&&e("/Profile")})()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{style:{width:"100%",height:"85vh"},children:Object(d.jsx)("div",{className:"box",style:{color:"black"},children:Object(d.jsx)("h1",{children:"Hii Accredian \ud83d\udc4b"})})})})},m=t(132),h=t(133);t(43);var u=()=>{const[e,a]=Object(s.useState)({email:"",password:""}),[t,l]=Object(s.useState)(!1),[c,o]=Object(s.useState)(""),j=Object(n.o)();Object(s.useEffect)((()=>{t&&(j("/profile"),localStorage.setItem("Profile","loggedIn"))}),[t]),i.a.defaults.withCredentials=!0,Object(s.useEffect)((()=>{(async()=>{let e=await i.a.get("http://localhost:8000/login");console.log(e),e.data.user&&j("/Profile")})()}),[]);const b=e=>{const{name:t,value:s}=e.target;a((e=>({...e,[t]:s})))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",id:"formm",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-lg-6 col-md-8 col-12 mx-auto",children:[c?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{class:"alert alert-danger alert-dismissible",children:[Object(d.jsx)(h.a,{variant:"contained",type:"button",class:"close","data-dismiss":"alert",children:"\xd7"}),Object(d.jsx)("strong",{children:"ERROR!"})," ",c]})}):null,Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:async a=>{a.preventDefault();let t=await i.a.post("http://localhost:8000/login",e);console.log(t),l(t.data.login),t.data.msg&&(o(t.data.msg),localStorage.setItem("Profile","LogIn"))},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsx)(m.a,{id:"outlined-basic",label:"Email",variant:"outlined",type:"email",className:"form-control",placeholder:"Enter email",name:"email",value:e.email,onChange:b,required:!0})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)(m.a,{id:"outlined-basic",label:"Password",variant:"outlined",type:"password",className:"form-control",placeholder:"Enter password",name:"password",value:e.password,onChange:b,required:!0})}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(d.jsx)("br",{}),Object(d.jsx)(r.c,{to:"/register",children:"create a account "})]})})})})};var O=()=>{const[e,a]=Object(s.useState)({userName:"",email:"",password:"",confirmPassword:""}),[t,l]=Object(s.useState)(""),c=Object(n.o)();i.a.defaults.withCredentials=!0;Object(s.useEffect)((()=>{(async()=>{(await i.a.get("http://localhost:8000/login")).data.user&&c("/profile")})()}),[]);const r=e=>{const{name:t,value:s}=e.target;a((e=>({...e,[t]:s})))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",id:"formm",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-lg-6 col-md-8 col-12 mx-auto",children:[t?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{class:"alert alert-danger alert-dismissible",children:[Object(d.jsx)("button",{type:"button",class:"close","data-dismiss":"alert",children:"\xd7"}),Object(d.jsx)("strong",{children:"ERROR!"})," ",t]})}):null,Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),(null===e||void 0===e?void 0:e.password)!==(null===e||void 0===e?void 0:e.confirmPassword))l("both password must matched");else{let a=await i.a.post("http://localhost:8000/register",e);a.data.msg?l(a.data.msg):c("/login")}},children:[Object(d.jsx)("h2",{children:"Register"}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)(m.a,{id:"outlined-basic",label:"Username",variant:"outlined",type:"text",className:"form-control",placeholder:"Enter Username",name:"userName",value:e.userName,onChange:r,required:!0})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)(m.a,{id:"outlined-basic",label:"Email address",variant:"outlined",type:"email",className:"form-control",placeholder:"Enter email",name:"email",value:e.email,onChange:r,required:!0})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)(m.a,{id:"outlined-basic",label:"Password",variant:"outlined",type:"password",className:"form-control",placeholder:"Enter password",name:"password",value:e.password,onChange:r,required:!0})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)(m.a,{id:"outlined-basic",label:"Confirm Password",variant:"outlined",type:"password",className:"form-control",placeholder:"Enter confirmed password",name:"confirmPassword",value:e.confirmPassword,onChange:r,required:!0})}),Object(d.jsx)(h.a,{variant:"contained",type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})})})};var g=()=>{const[e,a]=Object(s.useState)(""),[t,l]=Object(s.useState)(!1),c=Object(n.o)();return i.a.defaults.withCredentials=!0,Object(s.useEffect)((()=>{(async()=>{let e=await i.a.get("http://localhost:8000/login");l(e.data.login),e.data.user?a(e.data.user[0].email):c("/login")})()}),[t]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{style:{backgroundColor:"royalblue",width:"100%",height:"90vh"},children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{children:"WELCOME Accredian"}),Object(d.jsx)("p",{children:null===localStorage.getItem("Profile")||""===localStorage.getItem("Profile")?e:null})]})})})};var x=()=>Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(n.c,{children:[Object(d.jsx)(n.a,{path:"/",element:Object(d.jsx)(b,{})}),Object(d.jsx)(n.a,{path:"/login",element:Object(d.jsx)(u,{})}),Object(d.jsx)(n.a,{path:"/register",element:Object(d.jsx)(O,{})}),Object(d.jsx)(n.a,{path:"/profile",element:Object(d.jsx)(g,{})})]})]});c.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.c4a74a0b.chunk.js.map