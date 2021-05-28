(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(393)),c=(n(396),n(397),{id:"inspector",title:"Inspector"}),o={unversionedId:"inspector",id:"version-1.9.0/inspector",isDocsHomePage:!1,title:"Inspector",description:"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts.",source:"@site/versioned_docs/version-1.9.0/inspector.mdx",slug:"/inspector",permalink:"/docs/1.9.0/inspector",version:"1.9.0",sidebar:"version-1.9.0/docs",previous:{title:"Input",permalink:"/docs/1.9.0/input"},next:{title:"Installation",permalink:"/docs/1.9.0/installation"}},s=[{value:"Open Playwright Inspector",id:"open-playwright-inspector",children:[]},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",children:[]},{value:"Debugging Selectors",id:"debugging-selectors",children:[]},{value:"Recording scripts",id:"recording-scripts",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts."),Object(a.b)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#open-playwright-inspector"}),"Open Playwright Inspector")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#stepping-through-the-playwright-script"}),"Stepping through the Playwright script")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#debugging-selectors"}),"Debugging Selectors")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#recording-scripts"}),"Recording scripts"))),Object(a.b)("h2",{id:"open-playwright-inspector"},"Open Playwright Inspector"),Object(a.b)("p",null,"There are several ways of opening Playwright Inspector:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Set the ",Object(a.b)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PWDEBUG=1 npm run test\n\n# Windows\n$ set PWDEBUG=1\n$ npm run test\n")),Object(a.b)("p",{parentName:"li"},"Additional useful defaults are configured when ",Object(a.b)("inlineCode",{parentName:"p"},"PWDEBUG")," is set:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Browsers launch in the headed mode"),Object(a.b)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Call ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagepause"}),"page.pause()")," method from your script when running in headed browser."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Pause on the following line.\nawait page.pause();\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use ",Object(a.b)("inlineCode",{parentName:"p"},"open")," or ",Object(a.b)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.9.0/cli"}),"CLI"),":"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright codegen wikipedia.org\n")))),Object(a.b)("h2",{id:"stepping-through-the-playwright-script"},"Stepping through the Playwright script"),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"PWDEBUG")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),Object(a.b)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),Object(a.b)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",Object(a.b)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),Object(a.b)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),Object(a.b)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),Object(a.b)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),Object(a.b)("p",null,"If actionability can't be reached, it'll show action as pending:"),Object(a.b)("img",{width:"712",alt:"Screen Shot 2021-02-20 at 7 36 06 PM",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),Object(a.b)("p",null,'You can step over each action using the "Step over" action or resume script without further pauses:'),Object(a.b)("center",null,Object(a.b)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),Object(a.b)("h2",{id:"debugging-selectors"},"Debugging Selectors"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),Object(a.b)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),Object(a.b)("img",{width:"602",alt:"Screen Shot 2021-02-20 at 7 27 20 PM",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),Object(a.b)("h2",{id:"recording-scripts"},"Recording scripts"),Object(a.b)("p",null,"At any moment, clicking Record action enables recorder (codegen) mode. Every action on the target page is turned into the generated script:"),Object(a.b)("img",{width:"712",alt:"Screen Shot 2021-02-20 at 7 40 02 PM",src:"https://user-images.githubusercontent.com/883973/108614897-85704600-73b3-11eb-8bcd-f2e129786c49.png"}),Object(a.b)("p",null,"You can copy entire generated script or clear it using toolbar actions."))}l.isMDXComponent=!0},392:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),g=r,h=b["".concat(c,".").concat(g)]||b[g]||u[g]||a;return n?i.a.createElement(h,o(o({ref:t},p),{},{components:n})):i.a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";var r=n(0),i=n(395);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},396:function(e,t,n){"use strict";n(0),n(394),n(392),n(55)},397:function(e,t,n){"use strict";n(3),n(0)}}]);