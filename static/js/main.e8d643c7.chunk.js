(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__25DlI",modal:"ErrorModal_modal__1OogE",header:"ErrorModal_header__1KmK7",content:"ErrorModal_content__gy7rc",actions:"ErrorModal_actions__2gnUZ"}},,,,,function(e,t,n){e.exports={card:"Card_card__1KDE3"}},function(e,t,n){e.exports={button:"Button_button__1JzIC"}},function(e,t,n){e.exports={input:"AddUser_input__3gtPY"}},function(e,t,n){e.exports={users:"UsersList_users__2twDL"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),r=n.n(a),s=(n(17),n(12)),i=n(2),o=n(8),l=n.n(o),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(d.jsx)("button",{className:b.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},h=n(10),O=n.n(h),x=n(3),p=n.n(x),f=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:p.a.backdrop,onClick:e.onConfirm}),Object(d.jsxs)(u,{className:p.a.modal,children:[Object(d.jsx)("header",{className:p.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:p.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:p.a.actions,children:Object(d.jsx)(m,{onClick:e.onConfirm,children:"Okay"})})]})]})},g=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(),h=Object(i.a)(b,2),x=h[0],p=h[1];return Object(d.jsxs)("div",{children:[x&&Object(d.jsx)(f,{title:x.title,message:x.message,onConfirm:function(){p(null)}}),Object(d.jsx)(u,{className:O.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==a.trim().length&&0!==l.trim().lenght?+l<1?p({title:"Invalid age",message:"Please enter a valid fucking age (> 0)"}):(e.onAddUser(a,l),r(""),j("")):p({title:"Invalid input",message:"Please enter a valid fucking name and age(non-empty values.)"})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",value:a,onChange:function(e){r(e.target.value)}}),Object(d.jsx)("label",{children:"Age(Years)"}),Object(d.jsx)("input",{htmlFor:"age",type:"number",value:l,onChange:function(e){j(e.target.value)}}),Object(d.jsx)(m,{type:"submit",children:"Add user"})," "]})})]})},_=n(11),v=n.n(_),k=function(e){return Object(d.jsx)(u,{className:v.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{onAddUser:function(e,t){a((function(n){return[].concat(Object(s.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(k,{users:n})]})};r.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e8d643c7.chunk.js.map