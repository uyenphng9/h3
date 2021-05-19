(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),g=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=g(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=g(n),h=r,u=b["".concat(o,".").concat(h)]||b[h]||p[h]||i;return n?a.a.createElement(u,l(l({ref:t},c),{},{components:n})):a.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return g}));var r=n(3),a=n(7),i=(n(0),n(156)),o={id:"aggregation",title:"Aggregation",sidebar_label:"Aggregation",slug:"/highlights/aggregation"},l={unversionedId:"highlights/aggregation",id:"version-3.x/highlights/aggregation",isDocsHomePage:!1,title:"Aggregation",description:"Analysis of location data, such as locations of cars in a city, can be done by bucketing locations. (Sahr et al., 2003) Using a regular grid provides smooth gradients and the ability to measure differences between cells.",source:"@site/versioned_docs/version-3.x/highlights/aggregation.md",sourceDirName:"highlights",slug:"/highlights/aggregation",permalink:"/docs/highlights/aggregation",editUrl:"https://github.com/uber/h3/edit/master/website/docs/highlights/aggregation.md",version:"3.x",sidebar_label:"Aggregation",frontMatter:{id:"aggregation",title:"Aggregation",sidebar_label:"Aggregation",slug:"/highlights/aggregation"},sidebar:"version-3.x/someSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Joining",permalink:"/docs/highlights/joining"}},s=[{value:"References",id:"references",children:[]}],c={toc:s};function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Analysis of location data, such as locations of cars in a city, can be done by bucketing locations. (",Object(i.b)("a",{parentName:"p",href:"http://webpages.sou.edu/~sahrk/sqspc/pubs/gdggs03.pdf"},"Sahr et al., 2003"),") Using a regular grid provides smooth gradients and the ability to measure differences between cells."),Object(i.b)("p",null,"The cell shape of that grid system is an important consideration. For simplicity, it should be a polygon that tiles regularly: the triangle, the square, or the hexagon. Of these, triangles and squares have neighbors with different distances. Triangles have three different distances, and squares have two different distances. For hexagons, all neighbors are equidistant."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Triangle"),Object(i.b)("th",{parentName:"tr",align:null},"Square"),Object(i.b)("th",{parentName:"tr",align:null},"Hexagon"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("img",{src:"/images/neighbors-triangle.png",style:{width:"400px"}})),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("img",{src:"/images/neighbors-square.png",style:{width:"400px"}})),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("img",{src:"/images/neighbors-hexagon.png",style:{width:"400px"}}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Triangles have 12 neighbors"),Object(i.b)("td",{parentName:"tr",align:null},"Squares have 8 neighbors"),Object(i.b)("td",{parentName:"tr",align:null},"Hexagons have 6 neighbors")))),Object(i.b)("p",null,"This property allows for simpler analysis of movement. Hexagons have the property of expanding rings of neighbors approximating circles:"),Object(i.b)("div",{align:"center"},Object(i.b)("img",{src:"/images/neighbors.png",style:{width:"400px"}}),Object(i.b)("br",null),Object(i.b)("i",null,"All six neighbors of a hexagon (ring 1)")),Object(i.b)("p",null,"Hexagons are also optimally space-filling. On average, a polygon may be filled with hexagon tiles with a smaller margin of error than would be present with square tiles."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use case: ",Object(i.b)("a",{parentName:"li",href:"https://eng.uber.com/h3/"},"H3: Uber\u2019s Hexagonal Hierarchical Spatial Index ")),Object(i.b)("li",{parentName:"ul"},"Observable notebook example: ",Object(i.b)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-tutorial-the-h3-js-library?collection=@nrabinowitz/h3-tutorial"},"Intro to h3-js")),Object(i.b)("li",{parentName:"ul"},"Jupyter notebook example: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/uber/h3-py-notebooks/blob/master/notebooks/usage.ipynb"},"H3 Python API"))))}g.isMDXComponent=!0}}]);