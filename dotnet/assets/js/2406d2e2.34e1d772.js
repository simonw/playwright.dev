"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4442],{1962:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return w},default:function(){return p}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=(n(6396),n(8215),["components"]),i={id:"browser-contexts",title:"Browser Contexts"},c=void 0,l={unversionedId:"browser-contexts",id:"version-1.17/browser-contexts",isDocsHomePage:!1,title:"Browser Contexts",description:"- Browser context",source:"@site/versioned_docs/version-1.17/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/dotnet/docs/browser-contexts",tags:[],version:"1.17",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"version-1.17/docs",previous:{title:"Browsers",permalink:"/dotnet/docs/browsers"},next:{title:"Command line tools",permalink:"/dotnet/docs/cli"}},w=[{value:"Browser context",id:"browser-context",children:[],level:2},{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],u={toc:w};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#browser-context"},"Browser context")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts"))),(0,s.kt)("h2",{id:"browser-context"},"Browser context"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/intro"},"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"await using var browser = playwright.Chromium.LaunchAsync();\nvar context = await browser.NewContextAsync();\nvar page = await context.NewPageAsync();\n")),(0,s.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Webkit.LaunchAsync();\n        var options = new BrowserNewContextOptions(playwright.Devices["iPhone 11 Pro"])\n        {\n            Geolocation = new() { Longitude = 12.492507f, Latitude = 41.889938f },\n            Permissions = new[] { "geolocation" },\n            Locale = "de-DE"\n        };\n\n        await using var context = await browser.NewContextAsync(options);\n        var page = await browser.NewPageAsync();\n    }\n}\n')),(0,s.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        // Create a Chromium browser instance\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        await using var userContext = await browser.NewContextAsync();\n        await using var adminContext = await browser.NewContextAsync();\n        // Create pages and interact with contexts independently.\n    }\n}\n")),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsercontext#browser-context-add-cookies"},"BrowserContext.AddCookiesAsync(cookies)"))))}p.isMDXComponent=!0}}]);