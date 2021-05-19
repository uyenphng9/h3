(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(a,".").concat(u)]||p[u]||b[u]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(156)),a={id:"geoToH3desc",title:"Conversion from latitude/longitude to containing H3 cell index",sidebar_label:"Conversion from latitude/longitude to containing H3 cell index",slug:"/core-library/geoToH3desc"},c={unversionedId:"core-library/geoToH3desc",id:"core-library/geoToH3desc",isDocsHomePage:!1,title:"Conversion from latitude/longitude to containing H3 cell index",description:"This operation is performed by function geoToH3. See the comments in the function for more detail.",source:"@site/docs/core-library/geoToH3desc.md",sourceDirName:"core-library",slug:"/core-library/geoToH3desc",permalink:"/docs/next/core-library/geoToH3desc",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/geoToH3desc.md",version:"current",sidebar_label:"Conversion from latitude/longitude to containing H3 cell index",frontMatter:{id:"geoToH3desc",title:"Conversion from latitude/longitude to containing H3 cell index",sidebar_label:"Conversion from latitude/longitude to containing H3 cell index",slug:"/core-library/geoToH3desc"},sidebar:"someSidebar",previous:{title:"Unix-style Filters for H3",permalink:"/docs/next/core-library/filters"},next:{title:"Determine the latitude/longitude coordinates of the center point of an H3Index cell",permalink:"/docs/next/core-library/h3ToGeoDesc"}},l=[],s={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This operation is performed by function ",Object(i.b)("inlineCode",{parentName:"p"},"geoToH3"),". See the comments in the function for more detail."),Object(i.b)("p",null,"The conversion is performed as a series of coordinate system conversions described below. See the page ",Object(i.b)("a",{parentName:"p",href:"/docs/core-library/coordsystems"},"Coordinate Systems used by the H3 Core Library")," for more information on each of these coordinate systems."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The input latitude/longitude coordinate is first converted into the containing icosahedron face and a ",Object(i.b)("em",{parentName:"p"},"Hex2d")," coordinate on that face using function ",Object(i.b)("inlineCode",{parentName:"p"},"_geoToHex2d"),", which determines the correct face and then performs a face-centered gnomonic projection into face-centered polar coordinates. These polar coordinates are then scaled appropriately to a ",Object(i.b)("em",{parentName:"p"},"Hex2d")," coordinate on the input grid resolution ",Object(i.b)("em",{parentName:"p"},"r"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("em",{parentName:"p"},"Hex2d")," coordinate is converted into resolution ",Object(i.b)("em",{parentName:"p"},"r")," normalized ",Object(i.b)("em",{parentName:"p"},"ijk")," coordinates using function ",Object(i.b)("inlineCode",{parentName:"p"},"_hex2dToCoordIJK"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The face and face-centered ",Object(i.b)("em",{parentName:"p"},"ijk")," coordinates are then converted into an ",Object(i.b)("inlineCode",{parentName:"p"},"H3Index")," representation using the following steps:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"the H3 index digits are calculated from resolution ",Object(i.b)("em",{parentName:"li"},"r")," up to 0, adjusting the ",Object(i.b)("em",{parentName:"li"},"ijk")," coordinates at each successively coarser resolution."),Object(i.b)("li",{parentName:"ul"},"when resolution 0 is reached, if the remaining ",Object(i.b)("em",{parentName:"li"},"ijk")," coordinates are (0,0,0) then the base cell centered on the face is chosen for the index"),Object(i.b)("li",{parentName:"ul"},"if the remaining resolution 0 ",Object(i.b)("em",{parentName:"li"},"ijk")," coordinates are not (0,0,0), then a lookup operation is performed to find the appropriate base cell and the required rotation (if any) to orient the cell in that base cell's coordinate system. The index is then translated and rotated into the coordinate system centered on the new base cell.")))))}d.isMDXComponent=!0}}]);