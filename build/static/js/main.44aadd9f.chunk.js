(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__25_cr"}},11:function(t,e,n){t.exports={filter:"Filter_filter__3cykb"}},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),s=n(12),i=n(2),u=n(3),l=n(5),h=n(4),b=n(0),j=function(t){var e=t.children;return Object(b.jsx)("div",{children:e})};j.defaultProps={children:[]};var d=j,m=n(9),f=n(21),p=n(10),O=n.n(p),v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(f.a)(),t.numberInputId=Object(f.a)(),t.handleChange=function(e){var n=e.currentTarget.name;t.setState(Object(m.a)({},n,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault();var n=Object(f.a)();t.props.onSubmit(t.state,n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:O.a.form,children:[Object(b.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(b.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(b.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=n(11),C=n.n(x),g=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:C.a.filter,children:["Filter",Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})},y=n(7),S=n.n(y),I=function(t){var e=t.contactList,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:S.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsxs)("li",{className:S.a.contact,children:[Object(b.jsxs)("span",{children:[a,": "]}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},e)}))})},_=(n(18),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContact=function(e,n){var a=e.name,c={id:n,name:a,number:e.number};t.state.contacts.map((function(t){return t.name})).includes(a)?alert(a+" is already in contacts"):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[c])}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(b.jsxs)(d,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(v,{onSubmit:this.addContact}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(g,{value:n,onChange:this.changeFilter}),Object(b.jsx)(I,{contactList:c,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contactList:"ContactList_contactList__kj6Vc",contact:"ContactList_contact__1BJZd"}}},[[19,1,2]]]);
//# sourceMappingURL=main.44aadd9f.chunk.js.map