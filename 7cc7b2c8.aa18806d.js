(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var o=a(3),n=a(7),r=(a(0),a(393)),i=(a(396),a(397),{id:"class-mouse",title:"Mouse"}),l={unversionedId:"api/class-mouse",id:"api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.mdx",slug:"/api/class-mouse",permalink:"/docs/next/api/class-mouse",version:"current",sidebar:"api",previous:{title:"Logger",permalink:"/docs/next/api/class-logger"},next:{title:"Page",permalink:"/docs/next/api/class-page"}},c=[{value:"mouse.click(x, y, options)",id:"mouseclickx-y-options",children:[]},{value:"mouse.dblclick(x, y, options)",id:"mousedblclickx-y-options",children:[]},{value:"mouse.down(options)",id:"mousedownoptions",children:[]},{value:"mouse.move(x, y, options)",id:"mousemovex-y-options",children:[]},{value:"mouse.up(options)",id:"mouseupoptions",children:[]}],b={toc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),Object(r.b)("p",null,"Every ",Object(r.b)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-page#pagemouse"}),"page.mouse"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/next/api/class-mouse#mouseclickx-y-options"}),"mouse.click(x, y[, options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/next/api/class-mouse#mousedblclickx-y-options"}),"mouse.dblclick(x, y[, options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/next/api/class-mouse#mousedownoptions"}),"mouse.down([options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/next/api/class-mouse#mousemovex-y-options"}),"mouse.move(x, y[, options])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/next/api/class-mouse#mouseupoptions"}),"mouse.up([options])"))),Object(r.b)("h2",{id:"mouseclickx-y-options"},"mouse.click(x, y","[, options]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"y")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(r.b)("inlineCode",{parentName:"li"},"left"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clickCount")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> defaults to 1. See ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"delay")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time to wait between ",Object(r.b)("inlineCode",{parentName:"li"},"mousedown")," and ",Object(r.b)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(r.b)("p",null,"Shortcut for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-mouse#mousemovex-y-options"}),"mouse.move(x, y[, options])"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-mouse#mousedownoptions"}),"mouse.down([options])"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-mouse#mouseupoptions"}),"mouse.up([options])"),"."),Object(r.b)("h2",{id:"mousedblclickx-y-options"},"mouse.dblclick(x, y","[, options]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"y")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(r.b)("inlineCode",{parentName:"li"},"left"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"delay")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time to wait between ",Object(r.b)("inlineCode",{parentName:"li"},"mousedown")," and ",Object(r.b)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(r.b)("p",null,"Shortcut for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-mouse#mousemovex-y-options"}),"mouse.move(x, y[, options])"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-mouse#mousedownoptions"}),"mouse.down([options])"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-mouse#mouseupoptions"}),"mouse.up([options])"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-mouse#mousedownoptions"}),"mouse.down([options])")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/next/api/class-mouse#mouseupoptions"}),"mouse.up([options])"),"."),Object(r.b)("h2",{id:"mousedownoptions"},"mouse.down(","[options]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(r.b)("inlineCode",{parentName:"li"},"left"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clickCount")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> defaults to 1. See ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),"."))),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(r.b)("p",null,"Dispatches a ",Object(r.b)("inlineCode",{parentName:"p"},"mousedown")," event."),Object(r.b)("h2",{id:"mousemovex-y-options"},"mouse.move(x, y","[, options]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"y")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"steps")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> defaults to 1. Sends intermediate ",Object(r.b)("inlineCode",{parentName:"li"},"mousemove")," events."))),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(r.b)("p",null,"Dispatches a ",Object(r.b)("inlineCode",{parentName:"p"},"mousemove")," event."),Object(r.b)("h2",{id:"mouseupoptions"},"mouse.up(","[options]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(r.b)("inlineCode",{parentName:"li"},"left"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clickCount")," <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> defaults to 1. See ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),"."))),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(r.b)("p",null,"Dispatches a ",Object(r.b)("inlineCode",{parentName:"p"},"mouseup")," event."))}s.isMDXComponent=!0},392:function(e,t,a){"use strict";function o(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=o(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=o,O=p["".concat(i,".").concat(u)]||p[u]||m[u]||r;return a?n.a.createElement(O,l(l({ref:t},b),{},{components:a})):n.a.createElement(O,l({ref:t},b))}));function O(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var b=2;b<r;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},394:function(e,t,a){"use strict";var o=a(0),n=a(395);t.a=function(){var e=Object(o.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,a){"use strict";var o=a(0),n=Object(o.createContext)(void 0);t.a=n},396:function(e,t,a){"use strict";a(0),a(394),a(392),a(55)},397:function(e,t,a){"use strict";a(3),a(0)}}]);