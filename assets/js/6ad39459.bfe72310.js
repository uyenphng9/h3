(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(3),i=n(7),o=(n(0),n(156)),a={id:"usage",title:"Public API",sidebar_label:"Public API",slug:"/core-library/usage"},c={unversionedId:"core-library/usage",id:"version-3.x/core-library/usage",isDocsHomePage:!1,title:"Public API",description:"API Versioning",source:"@site/versioned_docs/version-3.x/core-library/usage.md",sourceDirName:"core-library",slug:"/core-library/usage",permalink:"/docs/core-library/usage",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/usage.md",version:"3.x",sidebar_label:"Public API",frontMatter:{id:"usage",title:"Public API",sidebar_label:"Public API",slug:"/core-library/usage"},sidebar:"version-3.x/someSidebar",previous:{title:"Memory allocation",permalink:"/docs/core-library/custom-alloc"},next:{title:"Unix-style Filters for H3",permalink:"/docs/core-library/filters"}},l=[{value:"API Versioning",id:"api-versioning",children:[]},{value:"API Preconditions",id:"api-preconditions",children:[]}],u={toc:l};function s(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"api-versioning"},"API Versioning"),Object(o.b)("p",null,"The public API of the H3 Core Library is defined in the file ",Object(o.b)("inlineCode",{parentName:"p"},"h3api.h"),". The functions defined in h3api.h adhere to ",Object(o.b)("a",{parentName:"p",href:"http://semver.org/"},"Semantic Versioning"),"."),Object(o.b)("h2",{id:"api-preconditions"},"API Preconditions"),Object(o.b)("p",null,"The H3 API expects valid input. Behavior of the library may be undefined when given invalid input. Indexes should be validated with ",Object(o.b)("inlineCode",{parentName:"p"},"h3IsValid")," or ",Object(o.b)("inlineCode",{parentName:"p"},"h3UnidirectionalEdgeIsValid")," as appropriate."))}s.isMDXComponent=!0},156:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var r=i.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=s(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=t,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(f,c(c({ref:r},u),{},{components:n})):i.a.createElement(f,c({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);