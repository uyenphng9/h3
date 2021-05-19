(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),l=t(7),r=(t(0),t(156)),o=t(160),c=t(161),i={id:"indexing",title:"Indexing functions",sidebar_label:"Indexing",slug:"/api/indexing"},u={unversionedId:"api/indexing",id:"api/indexing",isDocsHomePage:!1,title:"Indexing functions",description:"These function are used for finding the H3 cell index containing coordinates, and for finding the center and boundary of H3 indexes.",source:"@site/docs/api/indexing.mdx",sourceDirName:"api",slug:"/api/indexing",permalink:"/docs/next/api/indexing",editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/indexing.mdx",version:"current",sidebar_label:"Indexing",frontMatter:{id:"indexing",title:"Indexing functions",sidebar_label:"Indexing",slug:"/api/indexing"},sidebar:"someSidebar",previous:{title:"Table of Cell Areas for H3 Resolutions",permalink:"/docs/next/core-library/restable"},next:{title:"Index inspection functions",permalink:"/docs/next/api/inspection"}},s=[{value:"pointToCell",id:"pointtocell",children:[]},{value:"cellToPoint",id:"celltopoint",children:[]},{value:"cellToBoundary",id:"celltoboundary",children:[]}],b={toc:s};function p(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"These function are used for finding the H3 cell index containing coordinates, and for finding the center and boundary of H3 indexes."),Object(r.b)("h2",{id:"pointtocell"},"pointToCell"),Object(r.b)(o.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"H3Error pointToCell(const GeoPoint *g, int res, H3Index *out);\n"))),Object(r.b)(c.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"h3.point_to_cell(lat, lng, resolution)\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"long pointToCell(double lat, double lng, int res);\nString pointToCellAddress(double lat, double lng, int res);\n"))),Object(r.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"h3.pointToCell(lat, lng, res)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const lat = 45;\n  const lng = 40;\n  const res = 2;\n  return h3.pointToCell(lat, lng, res);\n}\n")))),Object(r.b)("p",null,"Indexes the location at the specified resolution, returning the index of the cell containing the location."),Object(r.b)("p",null,"Returns 0 (",Object(r.b)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),Object(r.b)("h2",{id:"celltopoint"},"cellToPoint"),Object(r.b)(o.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"H3Error cellToPoint(H3Index cell, GeoPoint *g);\n"))),Object(r.b)(c.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_point(cell)\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"GeoPoint cellToPoint(long cell);\nGeoPoint cellToPoint(String cellAddress);\n"))),Object(r.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"h3.cellToPoint(cell)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToPoint(cell);\n}\n")))),Object(r.b)("p",null,"Finds the centroid of the cell."),Object(r.b)("p",null,"Returns 0 (",Object(r.b)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),Object(r.b)("h2",{id:"celltoboundary"},"cellToBoundary"),Object(r.b)(o.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"H3Error cellToBoundary(H3Index cell, CellBoundary *bndry);\n"))),Object(r.b)(c.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_boundary(cell, geo_json=False)\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"List<GeoPoint> cellToBoundary(long cell);\nList<GeoPoint> cellToBoundary(String cellAddress);\n"))),Object(r.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"h3.cellToBoundary(cell, [formatAsGeoJson])\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToBoundary(cell);\n}\n")))),Object(r.b)("p",null,"Finds the boundary of the cell."),Object(r.b)("p",null,"Returns 0 (",Object(r.b)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."))}p.isMDXComponent=!0},156:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=l.a.createContext({}),s=function(e){var n=l.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return l.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||r;return t?l.a.createElement(m,c(c({ref:n},u),{},{components:t})):l.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<r;u++)o[u]=t[u];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},157:function(e,n,t){"use strict";function a(e){var n,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(l&&(l+=" "),l+=t);else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}n.a=function(){for(var e,n,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(l&&(l+=" "),l+=n);return l}},158:function(e,n,t){"use strict";var a=t(0),l=t(159);n.a=function(){var e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},159:function(e,n,t){"use strict";var a=t(0),l=Object(a.createContext)(void 0);n.a=l},160:function(e,n,t){"use strict";var a=t(0),l=t.n(a),r=t(158),o=t(157),c=t(54),i=t.n(c);var u=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(r.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,g=Object(a.useState)(c),j=g[0],O=g[1],y=a.Children.toArray(e.children),h=[];if(null!=p){var x=f[p];null!=x&&x!==j&&b.some((function(e){return e.value===x}))&&O(x)}var T=function(e){var n=e.currentTarget,t=h.indexOf(n),a=b[t].value;O(a),null!=p&&(v(p,a),setTimeout((function(){var e,t,a,l,r,o,c,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,l=e.bottom,r=e.right,o=window,c=o.innerHeight,u=o.innerWidth,t>=0&&r<=u&&l<=c&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i.a.tabItemActive),setTimeout((function(){return n.classList.remove(i.a.tabItemActive)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case s:var a=h.indexOf(e.target)+1;t=h[a]||h[0];break;case u:var l=h.indexOf(e.target)-1;t=h[l]||h[h.length-1]}null===(n=t)||void 0===n||n.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var n=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===n}),key:n,ref:function(e){return h.push(e)},onKeyDown:N,onFocus:T,onClick:T},t)}))),n?Object(a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},161:function(e,n,t){"use strict";var a=t(0),l=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);