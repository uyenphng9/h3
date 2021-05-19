(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(156)),o={id:"admin",title:"Admin Boundaries",sidebar_label:"Admin Boundaries",slug:"/comparisons/admin"},s={unversionedId:"comparisons/admin",id:"comparisons/admin",isDocsHomePage:!1,title:"Admin Boundaries",description:"Administrative boundaries, such as ZIP Codes and Census Blocks in the United States, can be used for aggregating and analyzing data. These boundaries have a number of drawbacks for aggregating data, primarily related to not having a comparable spatial unit of analysis, being unable to spatially relate data, being unrelated to the data being analyzed.",source:"@site/docs/comparisons/admin.md",sourceDirName:"comparisons",slug:"/comparisons/admin",permalink:"/docs/next/comparisons/admin",editUrl:"https://github.com/uber/h3/edit/master/website/docs/comparisons/admin.md",version:"current",sidebar_label:"Admin Boundaries",frontMatter:{id:"admin",title:"Admin Boundaries",sidebar_label:"Admin Boundaries",slug:"/comparisons/admin"},sidebar:"someSidebar",previous:{title:"Hexbin",permalink:"/docs/next/comparisons/hexbin"},next:{title:"Placekey",permalink:"/docs/next/comparisons/placekey"}},c=[{value:"ZIP Codes",id:"zip-codes",children:[]},{value:"Use case specific partitioning",id:"use-case-specific-partitioning",children:[]},{value:"ZIP Codes vs H3 comparison",id:"zip-codes-vs-h3-comparison",children:[]}],d={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Administrative boundaries, such as ZIP Codes and Census Blocks in the United States, can be used for aggregating and analyzing data. These boundaries have a number of drawbacks for aggregating data, primarily related to not having a comparable spatial unit of analysis, being unable to spatially relate data, being unrelated to the data being analyzed."),Object(i.b)("h2",{id:"zip-codes"},"ZIP Codes"),Object(i.b)("p",null,"The article ",Object(i.b)("a",{parentName:"p",href:"https://towardsdatascience.com/stop-using-zip-codes-for-geospatial-analysis-ceacb6e80c38"},"Stop Using Zip Codes for Geospatial Analysis")," summarizes a number of problems with using ZIP Codes. In short, ZIP Codes do not represent areas themselves rather mail delivery routes, vary greatly in spatial size when rendered as ZIP Code Tabulation Areas, and ",Object(i.b)("a",{parentName:"p",href:"https://fas.org/sgp/crs/misc/RL33488.pdf"},"change for unrelated reasons"),"."),Object(i.b)("h2",{id:"use-case-specific-partitioning"},"Use case specific partitioning"),Object(i.b)("p",null,"When using manually drawn partitions, there is usually no spatial unit of analysis which can be compared. Edges of partitions may exhibit boundary effects due to not taking into account neighboring partitions."),Object(i.b)("p",null,"Manually drawn partitions can better incorporate human knowledge, but can require updating as that knowledge changes. It can take a significant amount of time and effort to define and update partitions manually."),Object(i.b)("p",null,"The varying size of partitions means the center of a partition may be unrelated to the center of the data points."),Object(i.b)("h2",{id:"zip-codes-vs-h3-comparison"},"ZIP Codes vs H3 comparison"),Object(i.b)("iframe",{width:"100%",height:"500px",src:"https://studio.unfolded.ai/public/72504bc0-184e-4ba0-b10b-72fdf61e2c33/embed",frameborder:"0",allowfullscreen:!0}),Object(i.b)("p",null,"ZIP Codes on the left, H3 on the right. Data: ",Object(i.b)("a",{parentName:"p",href:"https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/uvpi-gqnh"},"New York City 2015 Street Tree Census")))}l.isMDXComponent=!0},156:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return t?r.a.createElement(m,s(s({ref:n},d),{},{components:t})):r.a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);