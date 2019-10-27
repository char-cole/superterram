(this["webpackJsonpthings-in-space-new"]=this["webpackJsonpthings-in-space-new"]||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(7),c=n.n(r),i=n(6),l=n(4),s=n(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(14),g=n(15),h=n(20),d=n(16),p=n(21),v=n(0),m=n(18),f=function(e,t,n,o){var a=n.width,r=n.height;switch(e){case"geoOrthographic":var c=o?o[0]:t?t[0]:0;return Object(v.n)().scale(200).translate([a/2,r/2]).rotate([-1*c||0]);case"geoNaturalEarth1":return Object(v.m)().scale(150).translate([a/2,r/2]);case"geoAzimuthalEqualArea":return Object(v.a)().scale(110).translate([a/2,r/2]).rotate([0,-90]);case"geoHill":return Object(m.a)().scale(150).translate([a/2,r/2]);case"geoMercator":return Object(v.l)().scale(75).translate([a/2,r/2]);case"geoConicEqualArea":return Object(v.g)().scale(125).translate([a/2,r/2]);default:return null}},E=function(e){var t=e.circleProps,n=e.currentLocation,o=e.position,r=e.selectedProjection,c=e.svgSize;if(o.loaded){var i=f(r.geo,o.longLat,{width:c[0],height:c[1]},!!n&&n.longLat);return a.a.createElement("circle",{cx:i(o.longLat)[0],cy:i(o.longLat)[1],r:t.radius,fill:t.fill,stroke:t.stroke,className:"marker"})}return null},y=function(e){var t=e.connectedSettings,n=t.current,o=t.selectedProjection,r=t.svgSize;return a.a.createElement(E,{circleProps:{radius:5,fill:"rgba(50, 250, 250, .3)",stroke:"#212121"},position:n,selectedProjection:o,svgSize:r})},j=function(e){var t=e.connectedSettings,n=e.i,o=e.longLat,r={radius:1,fill:"rgba(200, 250, 250, ".concat(function(){var e=n/10,t=e>1?e:1;return console.log("opacity",n,1/t),1/t}(),")")};return a.a.createElement(E,{circleProps:r,position:{loaded:!0,longLat:o},selectedProjection:t.selectedProjection,svgSize:t.svgSize,currentLocation:t.current})},b=n(19),O=n(17),w=n.n(O);var L=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).height=.8*window.innerHeight,n.calcWidth=1.78*n.height,n.width=n.calcWidth,n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.setSize([this.width,this.height]),this.props.getMap(),this.props.loadCurrent(),setInterval(this.props.loadCurrent,5e3)}},{key:"render",value:function(){var e=this.props,t=e.current,n=e.pastLocations,o=e.selectedProjection,r=e.svgSize,c=e.worldData;return a.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("svg",{width:r[0],height:r[1],viewBox:"0 0 ".concat(r[0]," ").concat(r[1])},a.a.createElement("g",{className:"countries"},c.map((function(e,n){var c=function(e){return n%e===0};return a.a.createElement("path",{key:"path_".concat(n),d:Object(v.o)().projection(f(o.geo,t.longLat,{width:r[0],height:r[1]}))(e),className:"country",fill:"rgb(".concat(250,", ").concat(c(2)?c(12)?c(9)?c(5)?200:250:100:c(10)?255:c(4)?150+n/2:225-.75*n:c(5)?170+n/3:c(3)?5*n:c(7)?70:150,", ").concat(c(2)?c(3)?200-n/2:c(12)?c(9)?100:50:c(10)?100:c(4)?n+n/2:30+n:100+n/2,")"),stroke:"#212121",strokeWidth:.5})}))),a.a.createElement("g",{className:"markers"},n.map((function(e,n){return a.a.createElement(j,{key:n,i:n,longLat:e,connectedSettings:{current:t,selectedProjection:o,svgSize:r}})})),a.a.createElement(y,{connectedSettings:{current:t,selectedProjection:o,svgSize:r}}))))}}]),t}(o.Component),D={getMap:function(){return function(e){fetch("https://unpkg.com/world-atlas@1/world/110m.json").then((function(t){200===t.status?t.json().then((function(t){e({type:"MAP_LOADED",value:Object(b.a)(t,t.objects.countries).features})})):console.log("There was a problem: ".concat(t.status))})).catch((function(e){return console.error("Caught error: ",e)}))}},setSize:function(e){return{type:"SIZE_LOADED",value:e}},loadCurrent:function(){return function(e){w()("http://api.open-notify.org/iss-now.json").then((function(t){console.log("jsonp",t),t.ok?t.json().then((function(t){var n={loaded:!0,longLat:[parseFloat(t.iss_position.longitude),parseFloat(t.iss_position.latitude)]};e({type:"CURRENT_LOADED",value:n})})):console.log("Response not OK.",t)})).catch((function(e){return console.error("Caught error: ",e)}))}}},P=Object(i.b)((function(e){return{current:e.current,pastLocations:e.pastLocations,selectedProjection:e.selectedProjection,svgSize:e.svgSize,worldData:e.worldData}}),D)(L),S=Object(i.b)((function(e){return{selectedProjection:e.selectedProjection,allProjections:e.allProjections}}),(function(e){return{changeProjection:function(t){e(function(e){return{type:"PROJECTION_CHANGED",value:e}}(t))}}}))((function(e){var t=e.allProjections.map((function(e,t){return a.a.createElement("option",{key:t,value:e.geo+","+e.name},e.name," Projection")}));return a.a.createElement("select",{onChange:function(t){var n=t.target.value.split(",");return e.changeProjection({geo:n[0],name:n[1]})}},t)}));var z=function(){return a.a.createElement("main",{style:{width:"100vw",height:"100vh"}},a.a.createElement(P,null),a.a.createElement("div",{style:{position:"absolute",top:"2rem",left:"2rem"}},a.a.createElement("h1",{style:{fontSize:"1.2rem"}},a.a.createElement("i",null,"Res Superterram")," - Things above the Earth"),a.a.createElement("div",{style:{maxWidth:"15rem"}},a.a.createElement("p",{style:{fontSize:".8rem",borderRadius:".25rem",border:"1px solid #f7322e",backgroundColor:"rgba(247, 50, 46, .25",padding:".25rem",display:"flex",justifyContent:"center"}},a.a.createElement("span",{role:"img","aria-label":"construction sign"},"\ud83d\udea7"),a.a.createElement("code",null,"\xa0app under construction!\xa0"),a.a.createElement("span",{role:"img","aria-label":"construction sign"},"\ud83d\udea7")),a.a.createElement("p",null,"This map displays the current location of the International Space Station in real time, thanks to\xa0",a.a.createElement("a",{href:"http://open-notify.org/",target:"_blank",rel:"noopener noreferrer"},"Open Notify"),"."),a.a.createElement("p",null,"The location is updated every 5 seconds. Watch long enough and you'll see the orbital path of the ISS drawn across the map! Try viewing different projections to see how the path appears to change."),a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement(S,null)))))};var A=Object(l.c)({allProjections:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]},buttons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"BUTTONS_LOADED"===t.type?t.value:e},cities:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]},current:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"CURRENT_LOADED"===t.type?t.value:e},flyover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"FLYOVER_LOADED"===t.type?t.value:e},inputLat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"LAT_UPDATED"===t.type?t.value:e},inputLong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"LONG_UPDATED"===t.type?t.value:e},pastLocations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CURRENT_LOADED"===t.type&&e.unshift(t.value.longLat),e},selectedProjection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"PROJECTION_CHANGED"===t.type?t.value:e},svgSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[800,450],t=arguments.length>1?arguments[1]:void 0;return"SIZE_LOADED"===t.type?t.value:e},worldData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"MAP_LOADED"===t.type?t.value:e}}),k=(n(32),Object(l.a)(s.a)),C=Object(l.d)(k),N=Object(l.e)(A,{current:{},pastLocations:[],worldData:[],svgSize:[800,450],selectedProjection:{geo:"geoMercator",name:"Mercator",desc:""},allProjections:[{geo:"geoMercator",name:"Mercator",desc:""},{geo:"geoNaturalEarth1",name:"Natural Earth",desc:""},{geo:"geoHill",name:"Hill Eucyclic",desc:""},{geo:"geoAzimuthalEqualArea",name:"Azimuthal",desc:""},{geo:"geoOrthographic",name:"Orthographic",desc:""},{geo:"geoConicEqualArea",name:"Conic",desc:""}],flyover:{},inputLat:"",inputLong:"",buttons:[{name:"S\xe3o Paulo",timezone:-2,lat:-23.55,long:-46.633333,country:"Brazil"},{name:"Lagos",timezone:1,lat:6.455027,long:3.384082,country:"Nigeria"},{name:"Dhaka",timezone:6,lat:23.7,long:90.366667,country:"Bangladesh"},{name:"Beijing",timezone:8,lat:39.916667,long:116.383333,country:"China"},{name:"New York",timezone:-5,lat:40.7127,long:-74.0059,country:"USA"},{name:"Moscow",timezone:3,lat:55.75,long:37.616667,country:"Russia"}]},C);c.a.render(a.a.createElement(i.a,{store:N},a.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.738d3a4d.chunk.js.map