(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,u=b["".concat(o,".").concat(d)]||b[d]||h[d]||a;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(156)),o={id:"indexing",title:"Indexing",sidebar_label:"Indexing",slug:"/highlights/indexing"},l={unversionedId:"highlights/indexing",id:"highlights/indexing",isDocsHomePage:!1,title:"Indexing",description:"H3 is a hierarchical geospatial index. H3 indexes refer to cells by the spatial hierarchy. Every hexagonal cell, up to the maximum resolution supported by H3, has seven child cells below it in this hierarchy. This subdivision is referred to as aperture 7.",source:"@site/docs/highlights/indexing.md",sourceDirName:"highlights",slug:"/highlights/indexing",permalink:"/docs/next/highlights/indexing",editUrl:"https://github.com/uber/h3/edit/master/website/docs/highlights/indexing.md",version:"current",sidebar_label:"Indexing",frontMatter:{id:"indexing",title:"Indexing",sidebar_label:"Indexing",slug:"/highlights/indexing"},sidebar:"someSidebar",previous:{title:"Machine Learning",permalink:"/docs/next/highlights/ml"},next:{title:"S2",permalink:"/docs/next/comparisons/s2"}},c=[{value:"Links",id:"links",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"H3 is a hierarchical geospatial index. H3 indexes refer to cells by the spatial hierarchy. Every hexagonal cell, up to the maximum resolution supported by H3, has seven child cells below it in this hierarchy. This subdivision is referred to as ",Object(a.b)("em",{parentName:"p"},"aperture 7"),"."),Object(a.b)("p",null,"Hexagons do not cleanly subdivide into seven finer hexagons. However, by alternating the orientation of grids a subdivision into seven cells can be approximated. This makes it possible to truncate the precision within a fixed margin of error of an H3 index. It is also possible to determine all the children of a parent H3 index. Approximate containment only applies when truncating the precision of an H3 index. The borders of hexagons indexed at a specific resolution are not approximate."),Object(a.b)("p",null,"This approximation allows for efficiently relating datasets indexed at different resolutions of the H3 grid. The functions for changing precision (",Object(a.b)("inlineCode",{parentName:"p"},"h3ToParent"),", ",Object(a.b)("inlineCode",{parentName:"p"},"h3ToChildren"),") are implemented with only a few bitwise operations, making them very fast. The structure of the H3 index means that geographically close locations will tend to have numerically close indexes."),Object(a.b)("p",null,"The hierachical structure can also be used in analysis, when the precision or uncertainty for a location needs to be encoded in the spatial index. As examples, a point from a GPS receiver could be indexed at a coarser resolution when the precision of the signal is lower, or some cells could be aggregated to a parent cell when there are too few data points in each of the finer cells."),Object(a.b)("div",{align:"center"},Object(a.b)("img",{src:"/images/parent-child.png",style:{width:"400px"}}),Object(a.b)("br",null),Object(a.b)("i",null,"A parent hexagon approximately contains seven children")),Object(a.b)("p",null,'Hierarchical containment allows for use cases like making contiguous sets of cells "compact" with ',Object(a.b)("inlineCode",{parentName:"p"},"compactCells"),". It is then possible to ",Object(a.b)("inlineCode",{parentName:"p"},"uncompactCells")," to the same input set of cells."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Uncompacted (dense)"),Object(a.b)("th",{parentName:"tr",align:null},"Compacted (sparse)"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("img",{src:"/images/ca_uncompact_6_10633.png",style:{width:"500px"}})),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("img",{src:"/images/ca_compact_6_901.png",style:{width:"500px"}}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"California represented by 10633 uncompacted cells"),Object(a.b)("td",{parentName:"tr",align:null},"California represented by 901 compacted cells")))),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Observable notebook example: ",Object(a.b)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-hierarchical-non-containment?collection=@nrabinowitz/h3"},"H3 Hierarchical (Non)Containment")),Object(a.b)("li",{parentName:"ul"},"Observable notebook example: ",Object(a.b)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/shape-simplification-with-h3?collection=@nrabinowitz/h3"},"Shape simplification with H3"))))}p.isMDXComponent=!0}}]);