(this["webpackJsonpone-retro"]=this["webpackJsonpone-retro"]||[]).push([[0],{24:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(16),r=c(3),i=c(0),s=c(8),a=c.n(s),o=c(32),j=c(33),d=c(34),h=c.p+"static/media/logo.e7601552.png";c(24),c(25);function l(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(b,{})}),Object(r.jsxs)("div",{className:"page-content",children:[Object(r.jsx)("h3",{children:"My Boards"}),Object(r.jsx)("hr",{}),Object(r.jsx)(u,{})]})]})}function b(){return Object(r.jsx)("div",{children:Object(r.jsx)(o.a,{bg:"dark",variant:"dark",children:Object(r.jsxs)(o.a.Brand,{href:"#home",children:[Object(r.jsx)("img",{alt:"",src:h,width:"35",height:"35",className:"d-inline-block align-top"})," ","OneRetro"]})})})}function u(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(i.useEffect)((function(){fetch("https://duyquangtruong-oneretro.herokuapp.com/boards",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){console.log(e)}))}),[]);var a=c.map((function(e){return Object(r.jsx)("div",{className:"boardItems",children:Object(r.jsx)(j.a,{style:{width:"18rem"},children:Object(r.jsxs)(j.a.Body,{children:[Object(r.jsx)(j.a.Title,{children:e.name}),Object(r.jsx)(j.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(r.jsx)(d.a,{variant:"primary",children:"Detail"})]})})})}));return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"boardList",children:a})})}a.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cfa23027.chunk.js.map