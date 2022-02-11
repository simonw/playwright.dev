"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7587],{64121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return w},default:function(){return u}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=(n(26396),n(58215),["components"]),i={id:"browser-contexts",title:"Browser Contexts"},c=void 0,l={unversionedId:"browser-contexts",id:"browser-contexts",isDocsHomePage:!1,title:"Browser Contexts",description:"- Browser context",source:"@site/docs/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/java/docs/next/browser-contexts",tags:[],version:"current",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"docs",previous:{title:"Browsers",permalink:"/java/docs/next/browsers"},next:{title:"Command line tools",permalink:"/java/docs/next/cli"}},w=[{value:"Browser context",id:"browser-context",children:[],level:2},{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],p={toc:w};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#browser-context"},"Browser context")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts"))),(0,s.kt)("h2",{id:"browser-context"},"Browser context"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/intro"},"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\nPage page = context.newPage();\n")),(0,s.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'// FIXME\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType devices = playwright.devices();\n      BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n        .setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1")\n        .setViewportSize(375, 812)\n        .setDeviceScaleFactor(3)\n        .setIsMobile(true)\n        .setHasTouch(true)\n        .setPermissions(Arrays.asList("geolocation"))\n        .setGeolocation(52.52, 13.39)\n        .setColorScheme(ColorScheme.DARK)\n        .setLocale("de-DE"));\n      Page page = context.newPage();\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Create a Chromium browser instance\n      Browser browser = chromium.launch();\n      // Create two isolated browser contexts\n      BrowserContext userContext = browser.newContext();\n      BrowserContext adminContext = browser.newContext();\n      // Create pages and interact with contexts independently\n    }\n  }\n}\n")),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-browsercontext#browser-context-add-cookies"},"BrowserContext.addCookies(cookies)"))))}u.isMDXComponent=!0}}]);