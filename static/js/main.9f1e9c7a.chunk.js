(this["webpackJsonpthings-in-space-new"]=this["webpackJsonpthings-in-space-new"]||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(7),c=n.n(a),l=n(4),i=n(5),u=n(18);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(8),g=n(9),h=n(11),d=n(10),m=n(12),p=n(0),f=n(19),v=function(e,t){switch(e){case"geoOrthographic":return Object(p.n)().scale(200).translate([400,225]).rotate(function(e){if(e[0]){if(e[0]<-45)return[90,0];if(e[0]>45&&e[0]<135)return[-90,0];if(e[0]>=135)return[-180,0]}return[0,0]}(t||[0,0]));case"geoNaturalEarth1":return Object(p.m)().scale(100).translate([400,225]);case"geoAzimuthalEqualArea":return Object(p.a)().scale(100).translate([400,225]).rotate([0,-90]);case"geoHill":return Object(f.a)().scale(100).translate([400,225]);case"geoMercator":return Object(p.l)().scale(100).translate([400,225]);case"geoConicEqualArea":return Object(p.g)().scale(100).translate([400,225]);default:return null}},j=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.current,n=e.selectedProjection;return t.loaded?r.a.createElement("circle",{cx:v(n.geo)(t.longLat)[0],cy:v(n.geo)(t.longLat)[1],r:5,fill:"#E91E63",className:"marker"}):null}}]),t}(o.Component),E=Object(l.b)((function(e){return{current:e.current,selectedProjection:e.selectedProjection}}))(j),O=n(20);var b=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.getMap(),this.props.loadCurrent()}},{key:"render",value:function(){var e=this.props,t=e.current,n=e.selectedProjection,o=e.worldData,a=e.loadCurrent;return r.a.createElement("div",{onClick:function(){return a()}},r.a.createElement("svg",{width:800,height:450,viewBox:"0 0 800 450"},r.a.createElement("g",{className:"countries"},o.map((function(e,a){return r.a.createElement("path",{key:"path-".concat(a),d:Object(p.o)().projection(v(n.geo,t.longLat))(e),className:"country",fill:"rgba(38,250,56,".concat(1/o.length*a+.1,")"),stroke:"#FFFFFF",strokeWidth:.5})}))),r.a.createElement("g",{className:"markers"},r.a.createElement(E,null))))}}]),t}(o.Component),y={getMap:function(){return function(e){fetch("https://unpkg.com/world-atlas@1/world/110m.json").then((function(t){200===t.status?t.json().then((function(t){e({type:"MAP_LOADED",value:Object(O.a)(t,t.objects.countries).features})})):console.log("There was a problem: ".concat(t.status))})).catch((function(e){return console.error("Caught error: ",e)}))}},loadCurrent:function(){return function(e){fetch("http://api.open-notify.org/iss-now.json").then((function(t){200===t.status?t.json().then((function(t){var n={loaded:!0,longLat:[parseFloat(t.iss_position.longitude),parseFloat(t.iss_position.latitude)]};console.log(n.longLat),e({type:"CURRENT_LOADED",value:n})})):console.log("There was a problem: ".concat(t.status))})).catch((function(e){return console.error("Caught error: ",e)}))}}},D=Object(l.b)((function(e){return{current:e.current,selectedProjection:e.selectedProjection,worldData:e.worldData}}),y)(b),P=Object(l.b)((function(e){return{selectedProjection:e.selectedProjection,allProjections:e.allProjections}}),(function(e){return{changeProjection:function(t){e(function(e){return{type:"PROJECTION_CHANGED",value:e}}(t))}}}))((function(e){var t=e.allProjections.map((function(t,n){return t.geo!==e.selectedProjection.geo?r.a.createElement("button",{key:n,onClick:function(){return e.changeProjection(t)}},t.name," Projection"):null}));return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},t)}));var w=function(){return r.a.createElement("main",{style:{maxWidth:"1200px",margin:"0 auto"}},r.a.createElement("p",null,"just a little lorem ipsum for you"),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(P,null),r.a.createElement(D,null)))};var A=Object(i.c)({flyover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"FLYOVER_LOADED"===t.type?t.value:e},inputLat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"LAT_UPDATED"===t.type?t.value:e},inputLong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"LONG_UPDATED"===t.type?t.value:e},buttons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"BUTTONS_LOADED"===t.type?t.value:e},worldData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"MAP_LOADED"===t.type?t.value:e},current:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"CURRENT_LOADED"===t.type?t.value:e},selectedProjection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"PROJECTION_CHANGED"===t.type?t.value:e},allProjections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return arguments.length>1&&arguments[1],e},cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return arguments.length>1&&arguments[1],e}}),C=(n(31),Object(i.a)(u.a)),L=Object(i.d)(C),k=Object(i.e)(A,{current:{},worldData:[],selectedProjection:{geo:"geoMercator",name:"Mercator",desc:""},allProjections:[{geo:"geoMercator",name:"Mercator",desc:""},{geo:"geoNaturalEarth1",name:"Natural Earth",desc:""},{geo:"geoHill",name:"Hill Eucyclic",desc:""},{geo:"geoAzimuthalEqualArea",name:"Azimuthal",desc:""},{geo:"geoOrthographic",name:"Orthographic",desc:""},{geo:"geoConicEqualArea",name:"Conic",desc:""}],flyover:{},inputLat:"",inputLong:"",buttons:[{name:"S\xe3o Paulo",timezone:-2,lat:-23.55,long:-46.633333,country:"Brazil"},{name:"Lagos",timezone:1,lat:6.455027,long:3.384082,country:"Nigeria"},{name:"Dhaka",timezone:6,lat:23.7,long:90.366667,country:"Bangladesh"},{name:"Beijing",timezone:8,lat:39.916667,long:116.383333,country:"China"},{name:"New York",timezone:-5,lat:40.7127,long:-74.0059,country:"USA"},{name:"Moscow",timezone:3,lat:55.75,long:37.616667,country:"Russia"}]},L);c.a.render(r.a.createElement(l.a,{store:k},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.9f1e9c7a.chunk.js.map