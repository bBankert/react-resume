(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],{10:function(e,a,t){e.exports=t(23)},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),o=t.n(r),c=(t(15),t(3)),i=(t(16),t(1)),d=t.n(i),m=function(e){return l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",onClick:function(e){return function(e){e.preventDefault();var a=e.target.href.indexOf("#"),t=e.target.href.substring(a,e.target.href.length);d()("html,body").stop().animate({scrollTop:d()(t).offset().top-25},"slow","swing")}(e)},href:"#"+e.link.replace(" ","-").toLocaleLowerCase()},e.link))},s=function(e){return l.a.createElement("nav",{id:"navigation",className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},e.data.map((function(e,a){return l.a.createElement(m,{key:"link-"+a,link:e})})),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Contact"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("a",{className:"dropdown-item",href:window.location+"documents/Resume.pdf",download:!0},"Download Resume"),l.a.createElement("a",{className:"dropdown-item",href:"http://www.github.com/bBankert"},"GitHub"),l.a.createElement("a",{className:"dropdown-item",href:"mailto:bankert.brandon@gmail.com"},"Contact Me"))))))},u=function(e){return l.a.createElement("div",{id:"header"},e.header&&e.header.length>0?l.a.createElement(s,{data:e.header}):l.a.createElement("p",null,"Loading"))},v=(t(17),function(e){return l.a.createElement("div",{id:"introduction",className:"my-4"},l.a.createElement("div",{className:"col-12"},l.a.createElement("img",{src:e.introduction.Image,alt:"broken link"})),l.a.createElement("div",{className:"col-12"},l.a.createElement("h1",{className:"name"},e.introduction.Name),l.a.createElement("h2",{className:"title text-muted"},e.introduction.Title)))}),E=function(e){return l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},l.a.createElement("h4",null,e.content.Subheading),l.a.createElement("ul",null,e.content.Details.map((function(a,t){return l.a.createElement("li",{key:e.content.Subheading+"-detail-"+t},a)})),e.content.Link?l.a.createElement("a",{href:e.content.Link},l.a.createElement("li",null,"Live Link")):"")))},f=function(e){return l.a.createElement("div",{id:e.card.Header.replace(" ","-").toLocaleLowerCase(),className:"my-4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header bg-info"},l.a.createElement("h3",null,e.card.Header)),l.a.createElement("div",{className:"card-body"},e.card.Subsections.map((function(a,t){return l.a.createElement(E,{key:e.card.Header+"-subsection-"+t,content:a})})))))},g=function(e){return l.a.createElement("div",null,e.content.map((function(e,a){return l.a.createElement(f,{key:"card-"+a,card:e})})))},p=function(e){return l.a.createElement("div",{className:"offset-md-3 col-md-6 col-sm-12"},l.a.createElement(v,{introduction:e.data.Introduction}),e.data&&Object.keys(e.data.Content).length>0?l.a.createElement(g,{content:e.data.Content}):l.a.createElement("p",null,"Loading..."))},b=t(6),h=t(7),N=t(9),w=t(8),k=(t(18),function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){d()("#loadingModal").modal("show")}},{key:"componentWillUnmount",value:function(){d()("#loadingModal").modal("hide")}},{key:"render",value:function(){return l.a.createElement("div",{id:"loading",className:"col-md-6 offset-md-3 col-sm-12"},l.a.createElement("div",{className:"modal",id:"loadingModal",tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"loader"}),l.a.createElement("p",null,"Loading, Please Wait..."))))))}}]),t}(l.a.Component)),y=function(){var e=Object(n.useState)(1),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({Navigation:[],Introduction:{},Content:{}}),i=Object(c.a)(o,2),d=i[0],m=i[1];return Object(n.useEffect)((function(){fetch(window.location+"/data/data.json").then((function(e){return e.json()})).then((function(e){m((function(){return{Navigation:e.Navigation,Introduction:e.Introduction,Content:e.Content}})),r(0)}))}),[t]),l.a.createElement("div",null,1===t?l.a.createElement(k,null):l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{header:d.Navigation}),l.a.createElement(p,{data:d})),l.a.createElement(k,null))};t(19),t(21),t(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b7a2d1c8.chunk.js.map