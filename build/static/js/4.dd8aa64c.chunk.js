(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{134:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(36);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},218:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return I}));var r,a=n(0),c=n(9),o=n(134),u=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var b=function(t){return"string"===typeof t&&s.test(t)},l=[],f=0;f<256;++f)l.push((f+256).toString(16).substr(1));var m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!b(n))throw TypeError("Stringified UUID is invalid");return n};var j=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return m(r)},p=n(26),d=n.n(p),h=n(18),v=n.n(h),O=n(23),y=n(19),x=n.n(y),g=n(11),w=function(t){var e=t.name,n=t.number;return function(){var t=Object(O.a)(v.a.mark((function t(r){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={name:e,number:n},r(Object(g.b)()),x.a.post("/contacts",a).then((function(t){var e=t.data;return r(Object(g.c)(e))})).catch((function(t){return r(Object(g.a)(t))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(t){return function(){var e=Object(O.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(g.e)()),x.a.delete("/contacts/".concat(t)).then((function(){return n(Object(g.f)(t))})).catch((function(t){return n(Object(g.d)(t))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var t=Object(O.a)(v.a.mark((function t(e){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(g.h)()),t.prev=1,t.next=4,x.a.get("/contacts");case 4:n=t.sent,r=n.data,e(Object(g.i)(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(g.g)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},A=n(1);function S(){var t=Object(c.b)(),e=Object(a.useState)(""),n=Object(o.a)(e,2),r=n[0],u=n[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),b=s[0],l=s[1],f=j(),m=j(),p=function(t){var e=t.currentTarget,n=e.value,r=e.name;if("number"===r){if(isNaN(n))return;u(n)}if("name"===r){if(!n.match(/^[a-zA-Z ]+(?:\s[a-zA-Z]+)?$/)&&n.length>0)return;l(n)}};return Object(A.jsxs)("form",{className:d.a.form,onSubmit:function(e){return e.preventDefault(),0===r?alert("Write your name"):b.match(/^\d{10}$/)?(t(w({name:r,number:b})),l(""),void u("")):alert("An invalid number")},children:[Object(A.jsx)("label",{htmlFor:f,className:d.a.label,children:"Name"}),Object(A.jsx)("input",{type:"text",id:f,className:d.a.input,name:"name",value:r,onChange:p,placeholder:"your name"}),Object(A.jsx)("br",{}),Object(A.jsx)("label",{htmlFor:m,className:d.a.label,children:"Number"}),Object(A.jsx)("input",{type:"text",id:m,className:d.a.input,name:"number",value:b,onChange:p,placeholder:"1234567890"}),Object(A.jsx)("br",{}),Object(A.jsx)("button",{type:"submit",className:d.a.button,children:"Add contact"})]})}function k(t){var e=t.id,n=t.name,r=t.number,a=t.onDeleteContact,c=t.s;return Object(A.jsxs)("li",{className:"contact",children:[n," ",r,Object(A.jsx)("button",{type:"button",onClick:a,className:c.button,children:"delete"})]},e)}var D=n(29),R=function(t){return t.contactsApp.loading},V=Object(D.a)([function(t){return t.contactsApp.filter},function(t){return t.contactsApp.contacts}],(function(t,e){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)||e.number.includes(t)}))}));function E(){var t=Object(c.c)(V),e=Object(c.c)(R),n=Object(c.b)();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("label",{htmlFor:"filter",children:"Search contact by number or name"}),e&&Object(A.jsx)("h2",{children:"LOADING..."}),Object(A.jsx)("br",{}),Object(A.jsx)("input",{type:"text",name:"filter",id:"filter",onChange:function(t){return e=t.currentTarget.value,n(g.j(e));var e}}),Object(A.jsx)("ul",{className:d.a.form,children:t.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(A.jsx)(k,{id:e,name:r,number:a,onDeleteContact:function(){!function(t){n(N(t))}(e)},s:d.a},j())}))})]})}var F=n(28);function I(){var t=Object(c.b)();return Object(a.useEffect)((function(){t(C())}),[t]),Object(A.jsxs)(F.a,{className:d.a.form__container,title:"Phonebook",children:[Object(A.jsx)(S,{}),Object(A.jsx)(F.a,{className:d.a.list__container,title:"Contacts",children:Object(A.jsx)(E,{})})]})}}}]);
//# sourceMappingURL=4.dd8aa64c.chunk.js.map