(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(3),c=t.n(r),o=(t(13),t(1));t(15);function m(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch","aria-checked":"true",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function s(e){var a=Object(l.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"rgb(80 80 177)":"white",color:"dark"===e.mode?"white":"black"},value:r,onChange:function(e){c(e.target.value)},id:"myBox",rows:"6"})),n.a.createElement("button",{className:"btn btn-primary my-2 me-2",onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("success","Converted to Uppercase")}},"To UpperCase"),n.a.createElement("button",{className:"btn btn-primary my-2 me-2",onClick:function(){var a=r.toLowerCase();c(a),e.showAlert("success","Converted to Lowercase")}},"To LowerCase"),n.a.createElement("button",{className:"btn btn-primary my-2 me-2",onClick:function(){c(""),e.showAlert("success","Text Cleared")}},"Clear Text"),n.a.createElement("button",{className:"btn btn-primary my-2 me-2",onClick:function(){var a=r.split(/[ ]+/);c(a.join(" ").trim()),e.showAlert("success","Extra space removed")}},"Remove Extra Spaces"),n.a.createElement("button",{type:"button",className:"btn btn-primary me-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo"},"Replace Text"),n.a.createElement("div",null,n.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Replace Words"),n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),n.a.createElement("div",{className:"modal-body"},n.a.createElement("form",null,n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"recipient-name",className:"col-form-label"},"Replace For: "),n.a.createElement("input",{type:"text",className:"form-control",id:"for_word"})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"message-text",className:"col-form-label"},"Replace With: "),n.a.createElement("input",{type:"text",className:"form-control",id:"replace_word"})))),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),n.a.createElement("button",{type:"button",onClick:function(){var a=document.getElementById("for_word").value,t=document.getElementById("replace_word").value,l=r.replace(a,t);c(l),e.showAlert("success","Text Replaced")},className:"btn btn-primary","data-bs-dismiss":"modal"},"Replace"))))))),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h3",null,"Your words Summary"),n.a.createElement("p",null,r.length>0?r.split(" ").length:0," words and ",r.length," characters"),n.a.createElement("p",null,"It will take ",.008*r.length,"mins to read"),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,r.length>0?r:"Enter text in textbox to preview")))}function i(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a[0].toUpperCase()+a.slice(1)}(e.alert.type),": "),e.alert.msg)}var d=function(){var e=Object(l.useState)("light"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(null),d=Object(o.a)(c,2),u=d[0],b=d[1],p=function(e,a){b({msg:a,type:e}),setTimeout(function(){b(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{title:"TextUtils",abtTitle:"About Us",mode:t,toggleMode:function(){"light"===t?(r("dark"),document.body.style.backgroundColor="#262664",p("success","Dark Mode enabled"),document.title="TextUtils - Dark Mode"):(r("light"),document.body.style.backgroundColor="white",p("success","Light Mode enabled"),document.title="TextUtils - Light Mode")}}),n.a.createElement(i,{alert:u}),n.a.createElement("div",null,n.a.createElement(s,{heading:"Enter your text below to transform",mode:t,showAlert:p}),">"))},u=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null))),u()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.c81ffa6e.chunk.js.map