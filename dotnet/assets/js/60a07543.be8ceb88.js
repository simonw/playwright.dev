"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1874],{3539:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),l=(t(6396),t(8215),["components"]),r={id:"navigations",title:"Navigations"},s=void 0,p={unversionedId:"navigations",id:"version-1.17/navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.17/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/dotnet/docs/navigations",tags:[],version:"1.17",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"version-1.17/docs",previous:{title:"Input",permalink:"/dotnet/docs/input"},next:{title:"Network",permalink:"/dotnet/docs/network"}},c=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[],level:2},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[],level:3},{value:"Custom wait",id:"custom-wait",children:[],level:3},{value:"Wait for element",id:"wait-for-element",children:[],level:3},{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[],level:3},{value:"Custom wait",id:"custom-wait-1",children:[],level:3},{value:"Wait for element",id:"wait-for-element-1",children:[],level:3},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[],level:3},{value:"Multiple navigations",id:"multiple-navigations",children:[],level:3},{value:"Loading a popup",id:"loading-a-popup",children:[],level:3},{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2}],d={toc:c};function g(e){var a=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#navigation-lifecycle"},"Navigation lifecycle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#advanced-patterns"},"Advanced patterns"))),(0,o.kt)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),(0,o.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,o.kt)("strong",{parentName:"p"},"navigation")," and ",(0,o.kt)("strong",{parentName:"p"},"loading"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigation starts")," by changing the page URL or by interacting with the page (e.g., clicking a link). The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigation is committed")," when the response headers have been parsed and session history is updated. Only after the navigation succeeds (is committed), the page starts ",(0,o.kt)("strong",{parentName:"p"},"loading")," the document."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-url"},"Page.Url")," is set to the new url"),(0,o.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-event-dom-content-loaded"},"event Page.DOMContentLoaded")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-event-load"},"event Page.Load")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,o.kt)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),(0,o.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,o.kt)("h3",{id:"auto-wait"},"Auto-wait"),(0,o.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-goto"},"Page.GotoAsync(url, options)")," will auto-wait for the redirected page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate the page\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"custom-wait"},"Custom wait"),(0,o.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate and wait until network is idle\nawait page.GotoAsync("https://example.com", new PageGotoOptions { WaitUntil = WaitUntilState.NetworkIdle });\n')),(0,o.kt)("h3",{id:"wait-for-element"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-locator#locator-wait-for"},"Locator.WaitForAsync(options)"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate and wait for element\nawait page.GotoAsync("https://example.com");\nawait page.Locator("text=Example Domain").WaitForAsync();\n\n// Navigate and click element\n// Click will auto-wait for the element\nawait page.GotoAsync("https://example.com");\nawait page.ClickAsync("text=Example Domain");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-goto"},"Page.GotoAsync(url, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-reload"},"Page.ReloadAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-go-back"},"Page.GoBackAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-go-forward"},"Page.GoForwardAsync(options)"))),(0,o.kt)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),(0,o.kt)("p",null,"In the scenarios below, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," initiates a navigation and then waits for the navigation to complete."),(0,o.kt)("h3",{id:"auto-wait-1"},"Auto-wait"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Click will auto-wait for navigation to complete\nawait page.ClickAsync("text=Login");\n\n// Fill will auto-wait for element on navigated page\nawait page.FillAsync("#username", "John Doe");\n')),(0,o.kt)("h3",{id:"custom-wait-1"},"Custom wait"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")," to wait for a loading event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.ClickAsync("button"); // Click triggers navigation\nawait page.WaitForLoadStateAsync(LoadState.NetworkIdle); // This resolves after "networkidle"\n')),(0,o.kt)("h3",{id:"wait-for-element-1"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-locator#locator-wait-for"},"Locator.WaitForAsync(options)"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Click will auto-wait for the element and trigger navigation\nawait page.ClickAsync("text=Login");\n// Wait for the element\nawait page.Locator("#username").WaitForAsync();\n\n// Click triggers navigation\nawait page.ClickAsync("text=Login");\n// Fill will auto-wait for element\nawait page.FillAsync("#username", "John Doe");\n')),(0,o.kt)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),(0,o.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)"),". For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,o.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Using waitForNavigation with a callback prevents a race condition\n// between clicking and waiting for a navigation.\nawait page.RunAndWaitForNavigationAsync(async () =>\n{\n    // Triggers a navigation after a timeout\n    await page.ClickAsync("div.delayed-navigation");\n});\n')),(0,o.kt)("h3",{id:"multiple-navigations"},"Multiple navigations"),(0,o.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)")," to a specific url. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,o.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,o.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Running action in the callback of waitForNavigation prevents a race\n// condition between clicking and waiting for a navigation.\nawait page.RunAndWaitForNavigationAsync(async () =>\n{\n    // Triggers a navigation with a script redirect.\n    await page.ClickAsync("a");\n}, new PageWaitForNavigationOptions\n{\n    UrlString = "**/login"\n});\n')),(0,o.kt)("h3",{id:"loading-a-popup"},"Loading a popup"),(0,o.kt)("p",null,"When popup is opened, explicitly calling ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")," ensures that popup is loaded to the desired state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync(\"a[target='_blank']\"); // Opens popup\n});\npopup.WaitForLoadStateAsync(LoadState.Load);\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-click"},"Page.ClickAsync(selector, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)"))),(0,o.kt)("h2",{id:"advanced-patterns"},"Advanced patterns"),(0,o.kt)("p",null,"For pages that have complicated loading patterns, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)")," is a powerful and extensible approach to define a custom wait criteria."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.GotoAsync("http://example.com");\nawait page.WaitForFunctionAsync("() => window.amILoadedYet()");\n// Ready to take a screenshot, according to the page itself.\nawait page.ScreenshotAsync();\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)"))))}g.isMDXComponent=!0}}]);