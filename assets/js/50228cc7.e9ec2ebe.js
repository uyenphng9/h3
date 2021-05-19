(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(156)),o={id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/library/terminology"},l={unversionedId:"library/terminology",id:"library/terminology",isDocsHomePage:!1,title:"Terminology",description:"The following are technical terms used by H3.",source:"@site/docs/library/terminology.md",sourceDirName:"library",slug:"/library/terminology",permalink:"/docs/next/library/terminology",editUrl:"https://github.com/uber/h3/edit/master/website/docs/library/terminology.md",version:"current",sidebar_label:"Terminology",frontMatter:{id:"terminology",title:"Terminology",sidebar_label:"Terminology",slug:"/library/terminology"},sidebar:"someSidebar",previous:{title:"Function name changes",permalink:"/docs/next/library/migration-3.x/functions"},next:{title:"Error handling",permalink:"/docs/next/library/errors"}},b=[{value:"Use of &quot;hex&quot;, &quot;hexagon&quot;, &quot;cell&quot;, &quot;pentagon&quot;, etc.",id:"use-of-hex-hexagon-cell-pentagon-etc",children:[]},{value:"References",id:"references",children:[]}],c={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following are technical terms used by H3."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"H3Index"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"an unsigned 64-bit integer representing ",Object(i.b)("em",{parentName:"li"},"any")," H3 object (hexagon, pentagon, directed edge ...)"),Object(i.b)("li",{parentName:"ul"},"often represented as a 15-character (or 16-character) hexadecimal string, like ",Object(i.b)("inlineCode",{parentName:"li"},"'8928308280fffff'")),Object(i.b)("li",{parentName:"ul"},'the full term "H3 index" should be used to avoid confusion with other common uses of "index";\nwhen a "traditional" index is needed, prefer using "number", "pos", or another term to avoid confusion'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"mode"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"an integer describing the type of object being represented by an H3 index"),Object(i.b)("li",{parentName:"ul"},"this integer is encoded in the ",Object(i.b)("inlineCode",{parentName:"li"},"H3Index")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cell")," or ",Object(i.b)("strong",{parentName:"li"},"H3 cell"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a geometric/geographic unit polygon in the H3 grid, corresponding to an ",Object(i.b)("inlineCode",{parentName:"li"},"H3Index")," of ",Object(i.b)("inlineCode",{parentName:"li"},"mode 1")," (hexagon or pentagon)"),Object(i.b)("li",{parentName:"ul"},'for functions that can handle either hexagons or pentagons, the more general term "cell" should be used whenever possible'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hexagon"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"an H3 ",Object(i.b)("strong",{parentName:"li"},"cell")," that is a ",Object(i.b)("strong",{parentName:"li"},"topological")," hexagon"),Object(i.b)("li",{parentName:"ul"},"below, we explain that functions that ",Object(i.b)("em",{parentName:"li"},"only")," work with ",Object(i.b)("strong",{parentName:"li"},"hexagons")," have an ",Object(i.b)("inlineCode",{parentName:"li"},"Unsafe")," suffix;\nthese functions are paired with ones having a ",Object(i.b)("inlineCode",{parentName:"li"},"Safe")," suffix, meaning they can handle ",Object(i.b)("strong",{parentName:"li"},"pentagons"),", but are slower"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"pentagon"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"an H3 ",Object(i.b)("strong",{parentName:"li"},"cell")," that is a ",Object(i.b)("strong",{parentName:"li"},"topological")," pentagon"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"directed edge"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"represents a traversal from an origin ",Object(i.b)("strong",{parentName:"li"},"cell")," to an adjacent destination ",Object(i.b)("strong",{parentName:"li"},"cell")),Object(i.b)("li",{parentName:"ul"},"corresponds to an ",Object(i.b)("inlineCode",{parentName:"li"},"H3Index")," of ",Object(i.b)("inlineCode",{parentName:"li"},"mode 2")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"grid"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"the graph with nodes corresponding to H3 cells, and edges given by pairs of adjacent cells"),Object(i.b)("li",{parentName:"ul"},"for example, ",Object(i.b)("inlineCode",{parentName:"li"},"gridDistance")," is the minimal number of edges in a graph path connecting two cells"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"point"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a representation of a geographic point in terms of a latitude/longitude pair"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"topological"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"H3 cells are ",Object(i.b)("strong",{parentName:"li"},"topological")," pentagons or hexagons, in the sense that they have 5 or 6 neighbors, respectively, in the H3 ",Object(i.b)("strong",{parentName:"li"},"grid")),Object(i.b)("li",{parentName:"ul"},"the majority of ",Object(i.b)("strong",{parentName:"li"},"hexagons")," are also ",Object(i.b)("strong",{parentName:"li"},"geometric")," hexagons (similarly with ",Object(i.b)("strong",{parentName:"li"},"pentagons"),"), in that they have 6 edges and vertices when represented as polygons of lat/lng points"),Object(i.b)("li",{parentName:"ul"},"a small number of ",Object(i.b)("strong",{parentName:"li"},"hexagons")," are not ",Object(i.b)("strong",{parentName:"li"},"geometric")," hexagons (similarly with ",Object(i.b)("strong",{parentName:"li"},"pentagons"),"), in that they have extra vertices and edges due to distortion around icosahedron boundaries"),Object(i.b)("li",{parentName:"ul"},"for more details, see this ",Object(i.b)("a",{parentName:"li",href:"https://github.com/uber/h3-js/issues/53"},"h3-js issue")," or this ",Object(i.b)("a",{parentName:"li",href:"https://observablehq.com/@fil/h3-oddities"},"Observable post")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"base cell"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"one of the 122 H3 ",Object(i.b)("strong",{parentName:"li"},"cells")," (110 hexagons and 12 pentagons) of resolution ",Object(i.b)("inlineCode",{parentName:"li"},"0")),Object(i.b)("li",{parentName:"ul"},"every other cell in H3 is a child of a base cell"),Object(i.b)("li",{parentName:"ul"},'each base cell has a "base cell number" (0--121), which is encoded into the ',Object(i.b)("inlineCode",{parentName:"li"},"H3Index")," representation of every H3 cell"),Object(i.b)("li",{parentName:"ul"},'there is a one-to-one correspondence between the "base cell number" and the ',Object(i.b)("inlineCode",{parentName:"li"},"H3Index")," representation of resolution ",Object(i.b)("inlineCode",{parentName:"li"},"0")," cells",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"e.g., base cell 0 has ",Object(i.b)("inlineCode",{parentName:"li"},"H3Index")," hexadecimal representation ",Object(i.b)("inlineCode",{parentName:"li"},"'8001fffffffffff'")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"boundary"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"all or part of the list of geometric points that enclose an H3 cell"),Object(i.b)("li",{parentName:"ul"},"may include more than 6 points in the case that a cell is not a geometric hexagon, such as when a hexagon crosses an icosahedron boundary"),Object(i.b)("li",{parentName:"ul"},"may also be used to describe the boundary between two geometric cells, as in the case of an edge"),Object(i.b)("li",{parentName:"ul"},"represented in the H3 codebase with the ",Object(i.b)("inlineCode",{parentName:"li"},"CellBoundary")," struct (previously ",Object(i.b)("inlineCode",{parentName:"li"},"GeoBoundary")," before v4.0)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"H3_NULL"),";",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"equivalent to ",Object(i.b)("inlineCode",{parentName:"li"},"0")," and guaranteed to never be a valid ",Object(i.b)("inlineCode",{parentName:"li"},"H3Index")," (even after any future H3 ",Object(i.b)("strong",{parentName:"li"},"modes")," are added)"),Object(i.b)("li",{parentName:"ul"},"returned by functions to denote an error, or to denote missing data in arrays of ",Object(i.b)("inlineCode",{parentName:"li"},"H3Index")),Object(i.b)("li",{parentName:"ul"},"analogous to ",Object(i.b)("inlineCode",{parentName:"li"},"NaN")," in floating point")))),Object(i.b)("h3",{id:"use-of-hex-hexagon-cell-pentagon-etc"},'Use of "hex", "hexagon", "cell", "pentagon", etc.'),Object(i.b)("p",null,'We realize that "hex" or "hexagon" will still be used informally to refer to the concept of "cell" (As the development team, we do it ourselves!).\nThis should be expected in casual, informal discussions of H3.\nHowever, when ',Object(i.b)("em",{parentName:"p"},"precision"),' is required, we advise the use of strict technical terms like "index", "cell", "hexagon", "pentagon", etc.\nIn the codebase and in the documentation, strictly correct terminology should ',Object(i.b)("em",{parentName:"p"},"always")," be used, as many functions and algorithms distinguish between hexagons and pentagons."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/uber/h3/blob/master/dev-docs/RFCs/v4.0.0/names_for_concepts_types_functions.md"},"Technical RFC for naming concepts"))))}s.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);