"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6886],{1958:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(6396),r(8215),["components"]),s={id:"class-timeouterror",title:"TimeoutError"},c=void 0,u={unversionedId:"api/class-timeouterror",id:"api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [Error]",source:"@site/docs/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/dotnet/docs/next/api/class-timeouterror",tags:[],version:"current",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"api",previous:{title:"Selectors",permalink:"/dotnet/docs/next/api/class-selectors"},next:{title:"Touchscreen",permalink:"/dotnet/docs/next/api/class-touchscreen"}},l=[],p={toc:l};function m(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extends: ","[Error]")),(0,a.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-locator#locator-wait-for"},"Locator.WaitForAsync(options)")," or ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-browsertype#browser-type-launch"},"BrowserType.LaunchAsync(options)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing Microsoft.Playwright;\nusing System;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        try\n        {\n            await page.ClickAsync("text=Example", new() { Timeout = 100 });\n        }\n        catch (TimeoutException)\n        {\n            Console.WriteLine("Timeout!");\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);