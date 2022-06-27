"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[15962],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,w=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(w,i(i({ref:t},p),{},{components:n})):r.createElement(w,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23336:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return w},toc:function(){return k}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={id:"emulation",title:"Emulation"},d=void 0,w={unversionedId:"emulation",id:"version-1.22/emulation",title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.22/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/docs/1.22/emulation",tags:[],version:"1.22",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"docs",previous:{title:"Downloads",permalink:"/docs/1.22/downloads"},next:{title:"Evaluating JavaScript",permalink:"/docs/1.22/evaluating"}},f={},k=[{value:"Devices",id:"devices",level:2},{value:"API reference",id:"api-reference",level:3},{value:"User agent",id:"user-agent",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Viewport",id:"viewport",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Locale &amp; timezone",id:"locale--timezone",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Permissions",id:"permissions",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Geolocation",id:"geolocation",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Color scheme and media",id:"color-scheme-and-media",level:2},{value:"API reference",id:"api-reference-6",level:3}],g={toc:k};function h(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,r.kt)("li",{parentName:"ul"},"locale, timezone"),(0,r.kt)("li",{parentName:"ul"},"color scheme"),(0,r.kt)("li",{parentName:"ul"},"geolocation")),(0,r.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#devices"}),"Devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#user-agent"}),"User agent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#viewport"}),"Viewport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#permissions"}),"Permissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#geolocation"}),"Geolocation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"devices"}),"Devices"),(0,r.kt)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { chromium, devices } = require('playwright');\nconst browser = await chromium.launch();\n\nconst pixel2 = devices['Pixel 2'];\nconst context = await browser.newContext({\n  ...pixel2,\n});\n")),(0,r.kt)("p",null,"All pages created in the context above will share the same device parameters."),(0,r.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-playwright#playwright-devices"}),"playwright.devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browser#browser-new-context"}),"browser.newContext([options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"user-agent"}),"User agent"),(0,r.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  userAgent: 'My user agent'\n});\n")),(0,r.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browser#browser-new-context"}),"browser.newContext([options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"viewport"}),"Viewport"),(0,r.kt)("p",null,"Create a context with custom viewport size:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Create context with given viewport\nconst context = await browser.newContext({\n  viewport: { width: 1280, height: 1024 }\n});\n\n// Resize viewport for individual page\nawait page.setViewportSize({ width: 1600, height: 1200 });\n\n// Emulate high-DPI\nconst context = await browser.newContext({\n  viewport: { width: 2560, height: 1440 },\n  deviceScaleFactor: 2,\n});\n")),(0,r.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browser#browser-new-context"}),"browser.newContext([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-page#page-set-viewport-size"}),"page.setViewportSize(viewportSize)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"locale--timezone"}),"Locale & timezone"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Emulate locale and time\nconst context = await browser.newContext({\n  locale: 'de-DE',\n  timezoneId: 'Europe/Berlin',\n});\n")),(0,r.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browser#browser-new-context"}),"browser.newContext([options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"permissions"}),"Permissions"),(0,r.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  permissions: ['notifications'],\n});\n")),(0,r.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await context.grantPermissions(['geolocation']);\n")),(0,r.kt)("p",null,"Grant notifications access from a specific domain:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await context.grantPermissions(['notifications'], {origin: 'https://skype.com'} );\n")),(0,r.kt)("p",null,"Revoke all permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await context.clearPermissions();\n")),(0,r.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browser#browser-new-context"}),"browser.newContext([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browsercontext#browser-context-grant-permissions"}),"browserContext.grantPermissions(permissions[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browsercontext#browser-context-clear-permissions"}),"browserContext.clearPermissions()"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"geolocation"}),"Geolocation"),(0,r.kt)("p",null,"Create a context with ",(0,r.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  geolocation: { longitude: 48.858455, latitude: 2.294474 },\n  permissions: ['geolocation']\n});\n")),(0,r.kt)("p",null,"Change the location later:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await context.setGeolocation({ longitude: 29.979097, latitude: 31.134256 });\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,r.kt)("h3",u({},{id:"api-reference-5"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browser#browser-new-context"}),"browser.newContext([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browsercontext#browser-context-set-geolocation"}),"browserContext.setGeolocation(geolocation)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"color-scheme-and-media"}),"Color scheme and media"),(0,r.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Create context with dark mode\nconst context = await browser.newContext({\n  colorScheme: 'dark' // or 'light'\n});\n\n// Create page with dark mode\nconst page = await browser.newPage({\n  colorScheme: 'dark' // or 'light'\n});\n\n// Change color scheme for the page\nawait page.emulateMedia({ colorScheme: 'dark' });\n\n// Change media for page\nawait page.emulateMedia({ media: 'print' });\n")),(0,r.kt)("h3",u({},{id:"api-reference-6"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-browser#browser-new-context"}),"browser.newContext([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.22/api/class-page#page-emulate-media"}),"page.emulateMedia([options])"))))}h.isMDXComponent=!0}}]);