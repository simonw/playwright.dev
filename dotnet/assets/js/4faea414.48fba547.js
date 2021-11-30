"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9366],{784:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=(a(6396),a(8215),["components"]),i={id:"network",title:"Network"},l=void 0,p={unversionedId:"network",id:"version-1.14/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.14/network.mdx",sourceDirName:".",slug:"/network",permalink:"/dotnet/docs/1.14/network",tags:[],version:"1.14",frontMatter:{id:"network",title:"Network"},sidebar:"version-1.14/docs",previous:{title:"Navigations",permalink:"/dotnet/docs/1.14/navigations"},next:{title:"Page Object Models",permalink:"/dotnet/docs/1.14/pom"}},c=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"HTTP Proxy",id:"http-proxy",children:[],level:2},{value:"Network events",id:"network-events",children:[{value:"Variations",id:"variations",children:[],level:4},{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Handle requests",id:"handle-requests",children:[{value:"Variations",id:"variations-1",children:[],level:4},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Modify requests",id:"modify-requests",children:[],level:2},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"WebSockets",id:"websockets",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright provides APIs to ",(0,o.kt)("strong",{parentName:"p"},"monitor")," and ",(0,o.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XHRs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," requests, can be tracked, modified and handled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-authentication"},"HTTP Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-proxy"},"HTTP Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-events"},"Network events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handle-requests"},"Handle requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#modify-requests"},"Modify requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#abort-requests"},"Abort requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#websockets"},"WebSockets"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"http-authentication"},"HTTP Authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    HttpCredentials = new HttpCredentials\n    {\n        Username = "bill",\n        Password = "pa55w0rd"\n    },\n});\nvar page = await context.NewPageAsync();\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"))),(0,o.kt)("h2",{id:"http-proxy"},"HTTP Proxy"),(0,o.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,o.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,o.kt)("p",null,"Here is an example of a global proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var proxy = new Proxy\n{\n    Server = "http://myproxy.com:3128",\n    Username = "user",\n    Password = "pwd"\n};\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    Proxy = proxy\n});\n')),(0,o.kt)("p",null,"When specifying proxy for each context individually, you need to give Playwright a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var proxy = new Proxy { Server = "per-context" };\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    Proxy = proxy\n});\nusing var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Proxy = new Proxy { Server = "http://myproxy.com:3128" })\n});\n')),(0,o.kt)("h2",{id:"network-events"},"Network events"),(0,o.kt)("p",null,"You can monitor all the requests and responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        page.Request += (_, request) => Console.WriteLine(">> " + request.Method + " " + request.Url);\n        page.Response += (_, response) => Console.WriteLine("<<" + response.Status + " " + response.Url);\n        await page.GotoAsync("https://example.com");\n    }\n}\n')),(0,o.kt)("p",null,"Or wait for a network response after the button click:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Use a glob URL pattern\nvar waitForResponseTask = page.WaitForResponseAsync("**/api/fetch_data");\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,o.kt)("h4",{id:"variations"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Use a regular expression\nvar waitForResponseTask = page.WaitForResponseAsync(new Regex("\\\\.jpeg$"));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n\n// Use a predicate taking a Response object\nvar waitForResponseTask = page.WaitForResponseAsync(r => r.Url.Contains(token));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-request",title:"Request"},"Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-response",title:"Response"},"Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-event-request"},"event Page.Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-event-response"},"event Page.Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-wait-for-request"},"Page.RunAndWaitForRequestAsync(action, urlOrPredicate, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-wait-for-response"},"Page.RunAndWaitForResponseAsync(action, urlOrPredicate, options)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"handle-requests"},"Handle requests"),(0,o.kt)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),(0,o.kt)("h4",{id:"variations-1"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/api/fetch_data", async route => {\n  await route.FulfillAsync(status: 200, body: testData);\n});\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browsercontext#browser-context-unroute"},"BrowserContext.UnrouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-route"},"Page.RouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-unroute"},"Page.UnrouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-route",title:"Route"},"Route"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"modify-requests"},"Modify requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Delete header\nawait page.RouteAsync("**/*", async route => {\n    var headers = new Dictionary<string, string>(route.Request.Headers.ToDictionary(x => x.Key, x => x.Value));\n    headers.Remove("X-Secret");\n    await route.ContinueAsync(new RouteContinueOptions { Headers = headers });\n});\n\n// Continue requests as POST.\nawait page.RouteAsync("**/*", async route => await route.ContinueAsync(method: "POST"));\n')),(0,o.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,o.kt)("h2",{id:"abort-requests"},"Abort requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/*.{png,jpg,jpeg}", route => route.AbortAsync());\n\n// Abort based on the request type\nawait page.RouteAsync("**/*", async route => {\nif ("image".Equals(route.Request.ResourceType))\n    await route.AbortAsync();\nelse\n    await route.ContinueAsync();\n});\n')),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-route"},"Page.RouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-route#route-abort"},"Route.AbortAsync(errorCode)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-page#page-event-web-socket"},"event Page.WebSocket")," event is fired. This event contains the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-websocket",title:"WebSocket"},"WebSocket")," instance for further web socket frames inspection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'page.WebSocket += (_, ws) =>\n{\n    Console.WriteLine("WebSocket opened: " + ws.Url);\n    ws.FrameSent += (_, f) => Console.WriteLine(f.Text);\n    ws.FrameReceived += (_, f) => Console.WriteLine(f.Text);\n    ws.Close += (_, ws1) => Console.WriteLine("WebSocket closed");\n};\n')),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-websocket",title:"WebSocket"},"WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-event-web-socket"},"event Page.WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-websocket#web-socket-event-frame-sent"},"event WebSocket.FrameSent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-websocket#web-socket-event-frame-received"},"event WebSocket.FrameReceived")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-websocket#web-socket-event-close"},"event WebSocket.Close"))),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);