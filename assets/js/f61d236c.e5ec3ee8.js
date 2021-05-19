(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),i=(a(0),a(156)),r=a(160),l=a(161),c={id:"regions",title:"Region functions",sidebar_label:"Regions",slug:"/api/regions"},s={unversionedId:"api/regions",id:"version-3.x/api/regions",isDocsHomePage:!1,title:"Region functions",description:"These functions convert H3 indexes to and from polygonal areas.",source:"@site/versioned_docs/version-3.x/api/regions.mdx",sourceDirName:"api",slug:"/api/regions",permalink:"/docs/api/regions",editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/regions.mdx",version:"3.x",sidebar_label:"Regions",frontMatter:{id:"regions",title:"Region functions",sidebar_label:"Regions",slug:"/api/regions"},sidebar:"version-3.x/someSidebar",previous:{title:"Hierarchical grid functions",permalink:"/docs/api/hierarchy"},next:{title:"Unidirectional edge functions",permalink:"/docs/api/uniedge"}},b=[{value:"polyfill",id:"polyfill",children:[{value:"maxPolyfillSize",id:"maxpolyfillsize",children:[]}]},{value:"h3SetToLinkedGeo / h3SetToMultiPolygon",id:"h3settolinkedgeo--h3settomultipolygon",children:[]},{value:"destroyLinkedPolygon",id:"destroylinkedpolygon",children:[]}],d={toc:b};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"These functions convert H3 indexes to and from polygonal areas."),Object(i.b)("h2",{id:"polyfill"},"polyfill"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"void polyfill(const GeoPolygon* geoPolygon, int res, H3Index* out);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.polyfill(polygons, res, geo_json_conformant=False)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<Long> polyfill(List<GeoCoord> points, List<List<GeoCoord>> holes, int res);\nList<String> polyfillAddress(List<GeoCoord> points, List<List<GeoCoord>> holes, int res);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.polyfill(polygon, res, isGeoJson)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n    const polygon = [\n        [37.813318999983238, -122.4089866999972145],\n        [37.7198061999978478, -122.3544736999993603],\n        [37.8151571999998453, -122.4798767000009008]\n    ];\n    const res = 7;\n    return h3.polyfill(polygon, res);\n}\n")))),Object(i.b)("p",null,"polyfill takes a given GeoJSON-like data structure and preallocated,\nzeroed memory, and fills it with the hexagons that are contained by\nthe GeoJSON-like data structure."),Object(i.b)("p",null,"Containment is determined by the cells' centroids. A partioning\nusing the GeoJSON-like data structure, where polygons cover an area\nwithout overlap, will result in a partitioning in the H3 grid, where\ncells cover the same area without overlap."),Object(i.b)("h3",{id:"maxpolyfillsize"},"maxPolyfillSize"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int maxPolyfillSize(const GeoPolygon* geoPolygon, int res);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed."))))),Object(i.b)("p",null,"maxPolyfillSize returns the number of hexagons to allocate space for when\nperforming a polyfill on the given GeoJSON-like data structure."),Object(i.b)("h2",{id:"h3settolinkedgeo--h3settomultipolygon"},"h3SetToLinkedGeo / h3SetToMultiPolygon"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"void h3SetToLinkedGeo(const H3Index* h3Set, const int numHexes, LinkedGeoPolygon* out);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_set_to_multi_polygon(hexes, geo_json=False)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<List<List<GeoCoord>>> h3SetToMultiPolygon(Collection<Long> h3, boolean geoJson);\nList<List<List<GeoCoord>>> h3AddressSetToMultiPolygon(Collection<String> h3Addresses, boolean geoJson);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.h3SetToMultiPolygon(polygon, geoJson)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n    const hexagons = ['872830828ffffff', '87283082effffff'];\n    return h3.h3SetToMultiPolygon(hexagons, true);\n}\n")))),Object(i.b)("p",null,"Create a LinkedGeoPolygon describing the outline(s) of a set of  hexagons.\nPolygon outlines will follow GeoJSON MultiPolygon order: Each polygon will\nhave one outer loop, which is first in the list, followed by any holes."),Object(i.b)("p",null,"It is the responsibility of the caller to call destroyLinkedPolygon on the\npopulated linked geo structure, or the memory for that structure will\nnot be freed."),Object(i.b)("p",null,"It is expected that all hexagons in the set have the same resolution and\nthat the set contains no duplicates. Behavior is undefined if duplicates\nor multiple resolutions are present, and the algorithm may produce\nunexpected or invalid output."),Object(i.b)("h2",{id:"destroylinkedpolygon"},"destroyLinkedPolygon"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"void destroyLinkedPolygon(LinkedGeoPolygon* polygon);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed."))))),Object(i.b)("p",null,"Free all allocated memory for a linked geo structure. The caller is\nresponsible for freeing memory allocated to the input polygon struct."))}p.isMDXComponent=!0},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||i;return a?o.a.createElement(m,l(l({ref:t},s),{},{components:a})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},157:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},158:function(e,t,a){"use strict";var n=a(0),o=a(159);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},159:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},160:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(158),r=a(157),l=a(54),c=a.n(l);var s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(i.a)(),v=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(n.useState)(l),f=h[0],y=h[1],j=n.Children.toArray(e.children),O=[];if(null!=p){var N=v[p];null!=N&&N!==f&&d.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var t=e.currentTarget,a=O.indexOf(t),n=d[a].value;y(n),null!=p&&(g(p,n),setTimeout((function(){var e,a,n,o,i,r,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,i=e.right,r=window,l=r.innerHeight,s=r.innerWidth,a>=0&&i<=s&&o<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case b:var n=O.indexOf(e.target)+1;a=O[n]||O[0];break;case s:var o=O.indexOf(e.target)-1;a=O[o]||O[O.length-1]}null===(t=a)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:w,onFocus:x,onClick:x},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},161:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);