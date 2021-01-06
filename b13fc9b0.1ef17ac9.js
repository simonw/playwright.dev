(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{444:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),o=r(7),i=(r(0),r(601)),n={id:"playwright-module",title:"Playwright module"},c={unversionedId:"api/playwright-module",id:"version-1.3.0/api/playwright-module",isDocsHomePage:!1,title:"Playwright module",description:"Playwright module provides a method to launch a browser instance.",source:"@site/versioned_docs/version-1.3.0/api/playwright-module.md",slug:"/api/playwright-module",permalink:"/docs/1.3.0/api/playwright-module",version:"1.3.0",sidebar:"version-1.3.0/api",next:{title:"class: Browser",permalink:"/docs/1.3.0/api/class-browser"}},l=[{value:"playwright.chromium",id:"playwrightchromium",children:[]},{value:"playwright.devices",id:"playwrightdevices",children:[]},{value:"playwright.errors",id:"playwrighterrors",children:[]},{value:"playwright.firefox",id:"playwrightfirefox",children:[]},{value:"playwright.selectors",id:"playwrightselectors",children:[]},{value:"playwright.webkit",id:"playwrightwebkit",children:[]}],s={toc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright module provides a method to launch a browser instance.\nThe following is a typical example of using Playwright to drive automation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(i.b)("p",null,"By default, the ",Object(i.b)("inlineCode",{parentName:"p"},"playwright")," NPM package automatically downloads browser executables during installation. The ",Object(i.b)("inlineCode",{parentName:"p"},"playwright-core")," NPM package can be used to skip automatic downloads."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/playwright-module#playwrightchromium"}),"playwright.chromium")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/playwright-module#playwrightdevices"}),"playwright.devices")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/playwright-module#playwrighterrors"}),"playwright.errors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/playwright-module#playwrightfirefox"}),"playwright.firefox")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/playwright-module#playwrightselectors"}),"playwright.selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/playwright-module#playwrightwebkit"}),"playwright.webkit"))),Object(i.b)("h2",{id:"playwrightchromium"},"playwright.chromium"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-browsertype#class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-chromiumbrowser#class-chromiumbrowser",title:"ChromiumBrowser"}),"ChromiumBrowser"),"."),Object(i.b)("h2",{id:"playwrightdevices"},"playwright.devices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">")),Object(i.b)("p",null,"Returns a list of devices to be used with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-browser#browsernewcontextoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"browser.newContext([options])"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-browser#browsernewpageoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"browser.newPage([options])")),". Actual list of devices can be found in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/playwright/blob/master/src/deviceDescriptors.ts"}),"src/deviceDescriptors.ts"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(i.b)("h2",{id:"playwrighterrors"},"playwright.errors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TimeoutError")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"> A class of ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-timeouterror#class-timeouterror",title:"TimeoutError"}),"TimeoutError"),".")))),Object(i.b)("p",null,"Playwright methods might throw errors if they are unable to fulfill a request. For example, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])"),"\nmight fail if the selector doesn't match any nodes during the given timeframe."),Object(i.b)("p",null,"For certain types of errors Playwright uses specific error classes.\nThese classes are available via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#playwrighterrors"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright.errors")),"."),Object(i.b)("p",null,"An example of handling a timeout error:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")),Object(i.b)("h2",{id:"playwrightfirefox"},"playwright.firefox"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-browsertype#class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-firefoxbrowser#class-firefoxbrowser",title:"FirefoxBrowser"}),"FirefoxBrowser"),"."),Object(i.b)("h2",{id:"playwrightselectors"},"playwright.selectors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-selectors#class-selectors",title:"Selectors"}),"Selectors"),">")),Object(i.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api/working-with-selectors"}),"Working with selectors"),") for more information."),Object(i.b)("h2",{id:"playwrightwebkit"},"playwright.webkit"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-browsertype#class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-webkitbrowser#class-webkitbrowser",title:"WebKitBrowser"}),"WebKitBrowser"),"."))}b.isMDXComponent=!0},601:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return w}));var a=r(0),o=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,n=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),h=a,w=p["".concat(n,".").concat(h)]||p[h]||u[h]||i;return r?o.a.createElement(w,c(c({ref:t},s),{},{components:r})):o.a.createElement(w,c({ref:t},s))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,n[1]=c;for(var s=2;s<i;s++)n[s]=r[s];return o.a.createElement.apply(null,n)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);