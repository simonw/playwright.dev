"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9363],{6096:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),s=(a(6396),a(8215),["components"]),l={id:"class-playwright",title:"Playwright"},o=void 0,c={unversionedId:"api/class-playwright",id:"version-1.18/api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.18/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/dotnet/docs/1.18/api/class-playwright",tags:[],version:"1.18",frontMatter:{id:"class-playwright",title:"Playwright"},sidebar:"version-1.18/api",next:{title:"Browser",permalink:"/dotnet/docs/1.18/api/class-browser"}},p=[{value:"Playwright.Chromium",id:"playwright-chromium",children:[],level:2},{value:"Playwright.Devices",id:"playwright-devices",children:[],level:2},{value:"Playwright.Firefox",id:"playwright-firefox",children:[],level:2},{value:"Playwright.Selectors",id:"playwright-selectors",children:[],level:2},{value:"Playwright.Webkit",id:"playwright-webkit",children:[],level:2}],w={toc:p};function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n\n        await page.GotoAsync("https://www.microsoft.com");\n        // other actions...\n    }\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-playwright#playwright-chromium"},"Playwright.Chromium")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-playwright#playwright-devices"},"Playwright.Devices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-playwright#playwright-firefox"},"Playwright.Firefox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-playwright#playwright-selectors"},"Playwright.Selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-playwright#playwright-webkit"},"Playwright.Webkit"))),(0,n.kt)("h2",{id:"playwright-chromium"},"Playwright.Chromium"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,n.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-browser",title:"Browser"},"Browser"),"."),(0,n.kt)("h2",{id:"playwright-devices"},"Playwright.Devices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ireadonlydictionary-2",title:"IReadOnlyDictionary"},"IReadOnlyDictionary"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),", ","[BrowserNewContextOptions]",">",">")),(0,n.kt)("p",null,"Returns a dictionary of devices to be used with ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," or ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-browser#browser-new-page"},"Browser.NewPageAsync(options)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Webkit.LaunchAsync();\n        await using var context = await browser.NewContextAsync(playwright.Devices["iPhone 6"]);\n\n        var page = await context.NewPageAsync();\n        await page.GotoAsync("https://www.theverge.com");\n        // other actions...\n    }\n}\n')),(0,n.kt)("h2",{id:"playwright-firefox"},"Playwright.Firefox"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,n.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-browser",title:"Browser"},"Browser"),"."),(0,n.kt)("h2",{id:"playwright-selectors"},"Playwright.Selectors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-selectors",title:"Selectors"},"Selectors"),">")),(0,n.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/selectors"},"Working with selectors")," for more information."),(0,n.kt)("h2",{id:"playwright-webkit"},"Playwright.Webkit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,n.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-browser",title:"Browser"},"Browser"),"."))}h.isMDXComponent=!0}}]);