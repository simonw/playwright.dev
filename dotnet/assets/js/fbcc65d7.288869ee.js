"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5694],{23604:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return r},toc:function(){return g},default:function(){return u}});var n=t(87462),p=t(63366),i=(t(67294),t(3905)),l=(t(26396),t(58215),["components"]),o={id:"pages",title:"Pages"},s=void 0,r={unversionedId:"pages",id:"version-1.19/pages",isDocsHomePage:!1,title:"Pages",description:"- Pages",source:"@site/versioned_docs/version-1.19/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/dotnet/docs/pages",tags:[],version:"1.19",frontMatter:{id:"pages",title:"Pages"},sidebar:"version-1.19/docs",previous:{title:"Network",permalink:"/dotnet/docs/network"},next:{title:"Page Object Models",permalink:"/dotnet/docs/pom"}},g=[{value:"Pages",id:"pages",children:[],level:2},{value:"Multiple pages",id:"multiple-pages",children:[],level:2},{value:"Handling new pages",id:"handling-new-pages",children:[],level:2},{value:"Handling popups",id:"handling-popups",children:[],level:2}],c={toc:g};function u(e){var a=e.components,t=(0,p.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pages"},"Pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,i.kt)("h2",{id:"pages"},"Pages"),(0,i.kt)("p",null,"Each ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," can have multiple pages. A ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.GotoAsync("http://example.com");\n// Fill an input.\nawait page.Locator("#search").FillAsync("query");\n\n// Navigate implicitly by clicking a link.\nawait page.Locator("#submit").ClickAsync();\n// Expect a new url.\nConsole.WriteLine(page.Url);\n')),(0,i.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,i.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,i.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Create two pages\nvar pageOne = await context.NewPageAsync();\nvar pageTwo = await context.NewPageAsync();\n\n// Get pages of a browser context\nvar allPages = context.Pages;\n")),(0,i.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,i.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get page after a specific action (e.g. clicking a link)\nvar newPage = await context.RunAndWaitForPageAsync(async () =>\n{\n    await page.ClickAsync(\"a[target='_blank']\");\n});\nawait newPage.WaitForLoadStateAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n")),(0,i.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get all new pages (including popups) in the context\ncontext.Page += async  (_, page) => {\n    await page.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n")),(0,i.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,i.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,i.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,i.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,i.kt)("p",null,"This event is emitted in addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Get popup after a specific action (e.g., click)\nvar newPage = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync("#open");\n});\nawait newPage.WaitForLoadStateAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n')),(0,i.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get all popups when they open\npage.Popup += async  (_, popup) => {\n    await popup.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n")))}u.isMDXComponent=!0}}]);