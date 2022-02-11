"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9054],{73510:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(26396),n(58215),["components"]),l={id:"emulation",title:"Emulation"},s=void 0,c={unversionedId:"emulation",id:"version-1.17/emulation",isDocsHomePage:!1,title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.17/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/java/docs/1.17/emulation",tags:[],version:"1.17",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"version-1.17/docs",previous:{title:"Element selectors",permalink:"/java/docs/1.17/selectors"},next:{title:"Evaluating JavaScript",permalink:"/java/docs/1.17/evaluating"}},p=[{value:"User agent",id:"user-agent",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Viewport",id:"viewport",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Locale &amp; timezone",id:"locale--timezone",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Permissions",id:"permissions",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Geolocation",id:"geolocation",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Color scheme and media",id:"color-scheme-and-media",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,o.kt)("li",{parentName:"ul"},"locale, timezone"),(0,o.kt)("li",{parentName:"ul"},"color scheme"),(0,o.kt)("li",{parentName:"ul"},"geolocation")),(0,o.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#user-agent"},"User agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#viewport"},"Viewport")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#locale--timezone"},"Locale & timezone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#permissions"},"Permissions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#geolocation"},"Geolocation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#color-scheme-and-media"},"Color scheme and media"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"user-agent"},"User agent"),(0,o.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setUserAgent("My user agent"));\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browser#browser-new-context"},"Browser.newContext([options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"viewport"},"Viewport"),(0,o.kt)("p",null,"Create a context with custom viewport size:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Create context with given viewport\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(1280, 1024));\n\n// Resize viewport for individual page\npage.setViewportSize(1600, 1200);\n\n// Emulate high-DPI\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(2560, 1440)\n  .setDeviceScaleFactor(2);\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-set-viewport-size"},"Page.setViewportSize(width, height)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"locale--timezone"},"Locale & timezone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Emulate locale and time\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setLocale("de-DE")\n  .setTimezoneId("Europe/Berlin"));\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browser#browser-new-context"},"Browser.newContext([options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setPermissions(Arrays.asList("notifications"));\n')),(0,o.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'context.grantPermissions(Arrays.asList("geolocation"));\n')),(0,o.kt)("p",null,"Grant notifications access from a specific domain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'context.grantPermissions(Arrays.asList("notifications"),\n  new BrowserContext.GrantPermissionsOptions().setOrigin("https://skype.com"));\n')),(0,o.kt)("p",null,"Revoke all permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"context.clearPermissions();\n")),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browsercontext#browser-context-grant-permissions"},"BrowserContext.grantPermissions(permissions[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browsercontext#browser-context-clear-permissions"},"BrowserContext.clearPermissions()"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"geolocation"},"Geolocation"),(0,o.kt)("p",null,"Create a context with ",(0,o.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setGeolocation(48.858455, 2.294474)\n  .setPermissions(Arrays.asList("geolocation")));\n')),(0,o.kt)("p",null,"Change the location later:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"context.setGeolocation(new Geolocation(29.979097, 31.134256));\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browsercontext#browser-context-set-geolocation"},"BrowserContext.setGeolocation(geolocation)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),(0,o.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Create context with dark mode\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Create page with dark mode\nPage page = browser.newPage(new Browser.NewPageOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Change color scheme for the page\npage.emulateMedia(new Page.EmulateMediaOptions().setColorScheme(ColorScheme.DARK));\n\n// Change media for page\npage.emulateMedia(new Page.EmulateMediaOptions().setMedia(Media.PRINT));\n')),(0,o.kt)("h3",{id:"api-reference-5"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page#page-emulate-media"},"Page.emulateMedia([options])"))))}u.isMDXComponent=!0}}]);