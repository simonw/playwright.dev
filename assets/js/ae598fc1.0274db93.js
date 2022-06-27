"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[92049],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return w}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(r),w=i,y=h["".concat(s,".").concat(w)]||h[w]||u[w]||l;return r?a.createElement(y,n(n({ref:t},c),{},{components:r})):a.createElement(y,n({ref:t},c))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,n=new Array(l);n[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var p=2;p<l;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},93461:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return w},default:function(){return d},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return m}});var a=r(3905),i=Object.defineProperty,l=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e};const h={id:"class-playwright",title:"Playwright Library"},w=void 0,y={unversionedId:"api/class-playwright",id:"version-1.23/api/class-playwright",title:"Playwright Library",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.23/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/docs/api/class-playwright",tags:[],version:"1.23",frontMatter:{id:"class-playwright",title:"Playwright Library"},sidebar:"api",previous:{title:"Playwright Test",permalink:"/docs/api/class-test"},next:{title:"APIRequest",permalink:"/docs/api/class-apirequest"}},f={},m=[{value:"playwright.chromium",id:"playwright-chromium",level:2},{value:"playwright.devices",id:"playwright-devices",level:2},{value:"playwright.errors",id:"playwright-errors",level:2},{value:"playwright.firefox",id:"playwright-firefox",level:2},{value:"playwright.request",id:"playwright-request",level:2},{value:"playwright.selectors",id:"playwright-selectors",level:2},{value:"playwright.webkit",id:"playwright-webkit",level:2}],g={toc:m};function d(e){var t,r=e,{components:i}=r,c=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),c),l(t,n({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-playwright#playwright-chromium"}),"playwright.chromium")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-playwright#playwright-devices"}),"playwright.devices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-playwright#playwright-errors"}),"playwright.errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-playwright#playwright-firefox"}),"playwright.firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-playwright#playwright-request"}),"playwright.request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-playwright#playwright-selectors"}),"playwright.selectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-playwright#playwright-webkit"}),"playwright.webkit"))),(0,a.kt)("h2",u({},{id:"playwright-chromium"}),"playwright.chromium"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/class-browser",title:"Browser"}),"Browser"),"."),(0,a.kt)("h2",u({},{id:"playwright-devices"}),"playwright.devices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">")),(0,a.kt)("p",null,"Returns a dictionary of devices to be used with ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/class-browser#browser-new-context"}),"browser.newContext([options])")," or ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/class-browser#browser-new-page"}),"browser.newPage([options])"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,a.kt)("h2",u({},{id:"playwright-errors"}),"playwright.errors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TimeoutError")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),">"," A class of ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-timeouterror",title:"TimeoutError"}),"TimeoutError"),".")))),(0,a.kt)("p",null,"Playwright methods might throw errors if they are unable to fulfill a request. For example, ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/class-locator#locator-wait-for"}),"locator.waitFor([options])")," might fail if the selector doesn't match any nodes during the given timeframe."),(0,a.kt)("p",null,"For certain types of errors Playwright uses specific error classes. These classes are available via ",(0,a.kt)("a",u({parentName:"p"},{href:"#playwrighterrors"}),(0,a.kt)("inlineCode",{parentName:"a"},"playwright.errors")),"."),(0,a.kt)("p",null,"An example of handling a timeout error:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"try {\n  await page.locator('.foo').waitFor();\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")),(0,a.kt)("h2",u({},{id:"playwright-firefox"}),"playwright.firefox"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/class-browser",title:"Browser"}),"Browser"),"."),(0,a.kt)("h2",u({},{id:"playwright-request"}),"playwright.request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-apirequest",title:"APIRequest"}),"APIRequest"),">")),(0,a.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,a.kt)("h2",u({},{id:"playwright-selectors"}),"playwright.selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-selectors",title:"Selectors"}),"Selectors"),">")),(0,a.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/selectors"}),"Working with selectors")," for more information."),(0,a.kt)("h2",u({},{id:"playwright-webkit"}),"playwright.webkit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/class-browser",title:"Browser"}),"Browser"),"."))}d.isMDXComponent=!0}}]);