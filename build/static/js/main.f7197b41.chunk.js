(this.webpackJsonppuhluet=this.webpackJsonppuhluet||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(2),u=t(13),r=t.n(u),c=t(0),o=t.n(c),l=t(3),i=t.n(l),m="/api/persons",s=function(){return i.a.get(m).then((function(e){return e.data}))},f=s,d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(m,"/").concat(e)),s()},b=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},v=(t(36),function(e){var n=e.message;return null===n?null:o.a.createElement("p",{className:"message"},n)}),p=function(e){var n=e.message;return null===n?null:o.a.createElement("p",{className:"error"},n)},E=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],u=n[1],r=Object(c.useState)(""),l=Object(a.a)(r,2),i=l[0],m=l[1],s=Object(c.useState)(""),E=Object(a.a)(s,2),w=E[0],O=E[1],N=Object(c.useState)(!1),C=Object(a.a)(N,1)[0],S=Object(c.useState)(""),T=Object(a.a)(S,2),y=T[0],k=T[1],P=Object(c.useState)(null),D=Object(a.a)(P,2),J=D[0],L=D[1],x=Object(c.useState)(null),B=Object(a.a)(x,2),I=B[0],U=B[1];Object(c.useEffect)((function(){f().then((function(e){u(e)}))}),[]);var q=C?t:t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(p,{message:I}),o.a.createElement(v,{message:J}),o.a.createElement("div",null,"filter shown with: ",o.a.createElement("input",{value:y,onChange:function(e){console.log(e.target.value),k(e.target.value)}})),o.a.createElement("h2",null,"add a new"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:i,number:w};if(t.some((function(e){return e.name===n.name}))){if(window.confirm("Update number for ".concat(i,"?"))){var a=t.find((function(e){return e.name===i}));b(a.id,n).then((function(e){u(t.map((function(n){return n.id!==a.id?n:e}))),m(""),O("")})).catch((function(e){L(null),U("".concat(i," has already been removed from server")),setTimeout((function(){U(null)}),5e3)}))}}else d(n).then((function(e){u(t.concat(e)),m(""),O("")})).catch((function(e){L(null),U("Name minimum length 3 and number minimum length 8"),setTimeout((function(){U(null)}),5e3)})),L("".concat(i," added.")),setTimeout((function(){L(null)}),5e3)}},o.a.createElement(j,{newName:i,handleNameChange:function(e){console.log(e.target.value),m(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),O(e.target.value)}})),o.a.createElement("h2",null,"Numbers"),o.a.createElement(g,{personsToShow:q,removePerson:function(e){window.confirm("Delete ".concat(e.name," ?"))&&(h(e.id).then((function(n){u(t.filter((function(n){return n.id!==e.id})))})).catch((function(n){L(null),U("".concat(e.name," has already been removed from server")),setTimeout((function(){U(null)}),5e3)})).then((function(n){u(t.filter((function(n){return n.id!==e.id})))})),L("".concat(e.name," removed succesfully.")),setTimeout((function(){L(null)}),5e3))}}))},g=function(e){return o.a.createElement("div",null,e.personsToShow.map((function(n){return o.a.createElement(w,{key:n.name,person:n,removePerson:function(){return e.removePerson(n)}})})))},w=function(e){var n=e.person,t=e.removePerson;return o.a.createElement("p",null,n.name," ",n.number,o.a.createElement("button",{onClick:t},"delete"))},j=function(e){return o.a.createElement("div",null,o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),o.a.createElement("button",{type:"submit"},"add"))};n.default=E;r.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f7197b41.chunk.js.map