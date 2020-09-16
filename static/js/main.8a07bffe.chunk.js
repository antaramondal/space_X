(this.webpackJsonpspace=this.webpackJsonpspace||[]).push([[0],{15:function(e,a,t){e.exports=t(39)},20:function(e,a,t){},21:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),s=(t(20),t(2));t(21);var i=function(){return c.a.createElement("div",{className:"filter-header"},"Filters")},o=t(3),u=t.n(o);var m=function(e){var a=["True","False"],t=[],l="",r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],u=i[1];"year"==e.type?(t=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],l="Launch Year"):"launch"==e.type?(t=a,l="Successful Launch"):(t=a,l="Successful Landing");var m=function(a){a.preventDefault(),"year"==e.type?(u(a.target.value),e.getAPIData(e.type,a.target.value)):(e.type,u(a.target.value),e.getAPIData(e.type,a.target.value.toLowerCase()))};return c.a.createElement("div",{className:"filter-div"},c.a.createElement("div",null,l),c.a.createElement("hr",null),t.map((function(e,a){return c.a.createElement("button",{className:"filter-button",key:a,onClick:m,value:e,style:{backgroundColor:o==e&&"#82f108fc"}},e)})))};var d=function(e){var a=Object(n.useState)(0),t=Object(s.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)(""),d=Object(s.a)(o,2),p=d[0],v=d[1],E=Object(n.useState)(""),h=Object(s.a)(E,2),g=h[0],f=h[1],b=function(e,a){"year"==e?r(a):"launch"==e?v(a):f(a)};return Object(n.useEffect)((function(){0==l&&""==g&&""==p||u.a.get("https://api.spacexdata.com/v3/launches?limit=100&launch_success=".concat(p,"&land_success=").concat(g,"&launch_year=").concat(l)).then((function(a){return e.updateSearchData(a.data)}))}),[l,p,g]),c.a.createElement("div",{className:"isDesktopOrLaptop"===e.device?"filter-tab-desktop":"filter-tab"},c.a.createElement(i,null),c.a.createElement(m,{type:"year",getAPIData:b}),c.a.createElement(m,{type:"launch",getAPIData:b}),c.a.createElement(m,{type:"landing",getAPIData:b}))};var p=function(e){var a=e.result;return console.log(a),c.a.createElement("div",{className:"isDesktopOrLaptop"===e.device?"item-card-desktop":"item-card"},c.a.createElement("div",{className:"img-div"},c.a.createElement("img",{src:a.links.mission_patch_small,className:"img-tag"})),c.a.createElement("div",{className:"data-div"},c.a.createElement("span",{className:"data-name"},a.mission_name," #",a.flight_number),c.a.createElement("span",null,c.a.createElement("b",null," Mission Ids: "),a.mission_id.length>1&&c.a.createElement("ul",null,a.mission_id.map((function(e,a){return c.a.createElement("li",{key:a},e)})))),c.a.createElement("span",null,c.a.createElement("b",null,"Launch Year: ")," ",a.launch_year),c.a.createElement("span",null,c.a.createElement("b",null,"Successful Launch: ")," ",String(a.launch_success)),c.a.createElement("span",null,c.a.createElement("b",null,"Successful Landing : ")," ",null==a.rocket.first_stage.cores[0].land_success?"N/A":String(a.rocket.first_stage.cores[0].land_success))))};var v=function(e){var a=Object(n.useState)(e.data),t=Object(s.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){r(e.data)}),[e.data]),c.a.createElement("div",{className:"isDesktopOrLaptop"===e.device?"main-body-desktop":"isTablet"===e.device?"main-body-tablet":"main-body"},l.map((function(a,t){return c.a.createElement(p,{device:e.device,key:t,result:a})})))},E=t(4);var h=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],m=i[1],p=Object(n.useState)(!1),h=Object(s.a)(p,2),g=h[0],f=h[1],b=Object(E.useMediaQuery)({query:"(min-device-width: 1024px)"}),y=Object(E.useMediaQuery)({maxDeviceWidth:"1024px",minDeviceWidth:"701px"}),O=Object(E.useMediaQuery)({query:"(max-device-width: 700px)"});Object(n.useEffect)((function(){u.a.get("https://api.spacexdata.com/v3/launches?limit=100").then((function(e){l(e.data),m(!0)})).catch((function(e){return f(!0)}))}),[]);var k=function(e){l(e)};return c.a.createElement("div",{className:"body"},b&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header-desktop"},"SpaceX Launch Programs"),c.a.createElement("div",{className:"nav-search-desktop"},c.a.createElement(d,{device:"isDesktopOrLaptop",updateSearchData:k}),o?g?c.a.createElement("span",null,"Something went wrong"):0===t.length?c.a.createElement("span",null," No Record Found "):c.a.createElement(v,{device:"isDesktopOrLaptop",data:t}):c.a.createElement("span",null," Loading... ")),c.a.createElement("div",{className:"footer-desktop"},"Developed by: Antara Mondal")),y&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header-desktop"},"SpaceX Launch Programs"),c.a.createElement("div",{className:"nav-search-desktop"},c.a.createElement(d,{device:"isDesktopOrLaptop",updateSearchData:k}),o?g?c.a.createElement("span",null,"Something went wrong"):0===t.length?c.a.createElement("span",null," No Record Found "):c.a.createElement(v,{device:"isTablet",data:t}):c.a.createElement("span",null," Loading... ")),c.a.createElement("div",{className:"footer-desktop"},"Developed by: Antara Mondal")),O&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},"SpaceX Launch Programs"),c.a.createElement("div",{className:"nav-search"},c.a.createElement(d,{device:"isMobileDevice",updateSearchData:k}),o?g?c.a.createElement("span",null,"Something went wrong"):0===t.length?c.a.createElement("span",null," No Record Found "):c.a.createElement(v,{data:t}):c.a.createElement("span",null," Loading... ")),c.a.createElement("div",{className:"footer"},"Developed by: Antara Mondal")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.8a07bffe.chunk.js.map