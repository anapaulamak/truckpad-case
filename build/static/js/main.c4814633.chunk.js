(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,r,t){e.exports=t.p+"static/media/pencil.d37d9400.svg"},function(e,r,t){e.exports=t.p+"static/media/rubbish.5866c2c6.svg"},,,,,function(e,r,t){e.exports=t(31)},,,,,function(e,r,t){},,function(e,r,t){},,function(e,r,t){},,function(e,r,t){},,function(e,r,t){},,function(e,r,t){},,function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),i=t(4),d=t.n(i),l=t(5),v=t(6),c=t(12),m=t(7),u=t(13),o=(t(19),t(10)),h=t(2),p=t(1),s=t(11),C=(t(21),t(8)),E=t.n(C),f=t(9),g=t.n(f),N=function(e){return n.a.createElement("table",{className:"table-list-drivers"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Nome"),n.a.createElement("th",null,"Telefone"),n.a.createElement("th",null,"Data de nascimento"),n.a.createElement("th",null,"CPF"),n.a.createElement("th",null,"CNH"),n.a.createElement("th",null,"Tipo de CNH"))),n.a.createElement("tbody",null,e.driverItems.length>0?e.driverItems.map(function(r){return n.a.createElement("tr",{key:r.id},n.a.createElement("td",null,r.driverName),n.a.createElement("td",null,r.driverPhone),n.a.createElement("td",null,r.driverBirth),n.a.createElement("td",null,r.driverCpf),n.a.createElement("td",null,r.driverCnh),n.a.createElement("td",null,r.driverCnhType),n.a.createElement("td",{className:"table-list-drivers-actions"},n.a.createElement("button",{className:"btn-action",onClick:function(){return e.editDriver(r)}},n.a.createElement("img",{src:E.a,alt:"Editar"})),n.a.createElement("button",{className:"btn-action",onClick:function(){return e.deleteDriver(r.id)}},n.a.createElement("img",{src:g.a,alt:"Deletar"}))))}):n.a.createElement("tr",null,n.a.createElement("td",null,"N\xe3o h\xe1 motoristas cadastrados"))))},b=(t(23),function(e){return n.a.createElement("form",{onSubmit:e.addDriver,className:"form-add-driver"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nome"),n.a.createElement("input",{type:"text",name:"driverName",value:e.driverName,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Telefone"),n.a.createElement("input",{type:"text",name:"driverPhone",value:e.driverPhone,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Data de Nascimento"),n.a.createElement("input",{type:"date",name:"driverBirth",value:e.driverBirth,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"CNH"),n.a.createElement("input",{type:"text",name:"driverCnh",value:e.driverCnh,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Tipo de CNH"),n.a.createElement("input",{type:"text",name:"driverCnhType",value:e.driverCnhType,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"CPF"),n.a.createElement("input",{type:"text",name:"driverCpf",value:e.driverCpf,onChange:e.handleInputChange})),n.a.createElement("button",{className:"btn-action"}," Adicionar "))}),y=(t(25),function(e){return n.a.createElement("form",{className:"form-edit-driver"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nome"),n.a.createElement("input",{type:"text",name:"driverName",value:e.driverName,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Telefone"),n.a.createElement("input",{type:"text",name:"driverPhone",value:e.driverPhone,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Data de Nascimento"),n.a.createElement("input",{type:"date",name:"driverBirth",value:e.driverBirth,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"CNH"),n.a.createElement("input",{type:"text",name:"driverCnh",value:e.driverCnh,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Tipo de CNH"),n.a.createElement("input",{type:"text",name:"driverCnhType",value:e.driverCnhType,onChange:e.handleInputChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"CPF"),n.a.createElement("input",{type:"text",name:"driverCpf",value:e.driverCpf,onChange:e.handleInputChange})),n.a.createElement("div",null,n.a.createElement("button",{className:"btn-action",onClick:e.updateDriver}," Atualizar "),n.a.createElement("button",{className:"btn-action",onClick:e.cancelEditing}," Cancelar ")))});t(27);var I=function(e){var r=Object(a.useState)({id:null,driverId:1,driverName:"",driverPhone:"",driverBirth:"",driverCnh:"",driverCnhType:"",driverCpf:"",status:!1,driverItem:{},driverItems:[{id:"1",driverId:"1",driverName:"Pouca Tripa",driverPhone:"11999999999",driverBirth:"1976-09-22",driverCpf:"11111111111",driverCnh:"22222222222",driverCnhType:"B"},{id:"2",driverId:"2",driverName:"Jo\xe3o de Barro",driverPhone:"11888888888",driverBirth:"1980-03-10",driverCpf:"22222222222",driverCnh:"33333333333",driverCnhType:"A,B"},{id:"3",driverId:"3",driverName:"Maria de Silva",driverPhone:"11777777777",driverBirth:"1985-07-17",driverCpf:"44444444444",driverCnh:"33333333333",driverCnhType:"A,B,C"},{id:"4",driverId:"4",driverName:"Joana Alves",driverPhone:"11666666666",driverBirth:"1988-01-03",driverCpf:"5555555555",driverCnh:"44444444444",driverCnhType:"D"}],editing:!1,page:0}),t=Object(s.a)(r,2),i=t[0],d=t[1],l=function(e){d(Object(p.a)({},i,Object(h.a)({},e.target.name,e.target.value)))},v=function(e){if(e.preventDefault(),i.driverName){var r={id:i.driverItems.length+1,driverId:i.driverItems.length+1,driverName:i.driverName,driverPhone:i.driverPhone,driverBirth:i.driverBirth,driverCnh:i.driverCnh,driverCnhType:i.driverCnhType,driverCpf:i.driverCpf,status:i.status};d(Object(p.a)({},i,{driverName:"",driverPhone:"",driverBirth:"",driverCnh:"",driverCnhType:"",driverCpf:"",driverItem:r,driverItems:[].concat(Object(o.a)(i.driverItems),[r]),page:1}))}},c=function(e){var r=i.driverItems.filter(function(r){return r.driverId!==e});d(Object(p.a)({},i,{driverItems:r}))},m=function(e){d(Object(p.a)({},i,{driverName:e.driverName,driverPhone:e.driverPhone,driverBirth:e.driverBirth,driverCnh:e.driverCnh,driverCnhType:e.driverCnhType,driverCpf:e.driverCpf,driverItem:e,page:0,editing:!0}))},u=function(e){d(Object(p.a)({},i,{driverName:"",driverPhone:"",driverBirth:"",driverCnh:"",driverCnhType:"",driverCpf:"",editing:!1}))},C=function(e){e.preventDefault();var r=i.driverName,t=i.driverPhone,a=i.driverBirth,n=i.driverCnh,l=i.driverCnhType,v=i.driverCpf,c=Object.assign({},i.driverItem,{driverName:r,driverPhone:t,driverBirth:a,driverCnh:n,driverCnhType:l,driverCpf:v}),m=i.driverItems.map(function(e){return e.id===i.driverItem.id?c:e});d(Object(p.a)({},i,{driverName:"",driverPhone:"",driverBirth:"",driverCnh:"",driverCnhType:"",driverCpf:"",driverItems:m,page:1}))},E=function(e){return function(r){d(Object(p.a)({},i,{page:e}))}};return n.a.createElement("div",{className:"RegisterPage"},n.a.createElement("div",{className:"RegisterPage-nav"},n.a.createElement("ul",null,n.a.createElement("li",{className:0===i.page?"link-active":"",onClick:E(0)},"Cadastro"),n.a.createElement("li",{className:1===i.page?"link-active":"",onClick:E(1)},"Lista"))),n.a.createElement("div",{className:"RegisterPage-content"},function(){switch(i.page){case 0:return n.a.createElement("div",{className:"App-main"},i.editing?n.a.createElement(y,{driverName:i.driverName,driverPhone:i.driverPhone,driverBirth:i.driverBirth,driverCnh:i.driverCnh,driverCnhType:i.driverCnhType,driverCpf:i.driverCpf,handleInputChange:l,cancelEditing:u,updateDriver:C}):n.a.createElement(b,{driverName:i.driverName,driverPhone:i.driverPhone,driverBirth:i.driverBirth,driverCnh:i.driverCnh,driverCnhType:i.driverCnhType,driverCpf:i.driverCpf,handleInputChange:l,addDriver:v}));case 1:return n.a.createElement("div",{className:"App-main"},n.a.createElement(N,{driverItems:i.driverItems,deleteDriver:c,editDriver:m}))}}()))},P=function(e){function r(){return Object(l.a)(this,r),Object(c.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(u.a)(r,e),Object(v.a)(r,[{key:"render",value:function(){return n.a.createElement(I,null)}}]),r}(n.a.Component);t(29);d.a.render(n.a.createElement(P,null),document.getElementById("root"))}],[[14,2,1]]]);
//# sourceMappingURL=main.c4814633.chunk.js.map