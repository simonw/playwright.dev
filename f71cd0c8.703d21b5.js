(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{370:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(393)),c=(r(396),r(397),{id:"videos",title:"Videos"}),i={unversionedId:"videos",id:"version-1.10.0/videos",isDocsHomePage:!1,title:"Videos",description:"Playwright can record videos for all pages in a browser context. Videos are saved upon context closure, so make sure to await browserContext.close().",source:"@site/versioned_docs/version-1.10.0/videos.mdx",slug:"/videos",permalink:"/docs/1.10.0/videos",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Verification",permalink:"/docs/1.10.0/verification"},next:{title:"Test Runners",permalink:"/docs/1.10.0/test-runners"}},s=[{value:"API reference",id:"api-reference",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Playwright can record videos for all pages in a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/core-concepts#browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-browsercontext#browsercontextclose"}),"browserContext.close()"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait context.close();\n")),Object(a.b)("p",null,"You can also specify video size, it defaults to viewport size scaled down to fit 800x800."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  recordVideo: {\n    dir: 'videos/',\n    size: { width: 1024, height: 768 },\n  }\n});\n")),Object(a.b)("p",null,"Saved video files will appear in the specified folder. They all have generated unique names. For the multi-page scenarios, you can access the video file associated with the page via the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page#pagevideo"}),"page.video()"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const path = await page.video().path();\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Note that the video is only available after the page or browser context is closed."))),Object(a.b)("h3",{id:"api-reference"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-browsercontext#browsercontextclose"}),"browserContext.close()"))))}p.isMDXComponent=!0},392:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";var n=r(0),o=r(395);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},396:function(e,t,r){"use strict";r(0),r(394),r(392),r(55)},397:function(e,t,r){"use strict";r(3),r(0)}}]);