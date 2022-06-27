"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3851],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8502:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&c(e,a,t[a]);return e};const d={id:"network",title:"Network"},h=void 0,m={unversionedId:"network",id:"version-1.23/network",title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.23/network.mdx",sourceDirName:".",slug:"/network",permalink:"/dotnet/docs/network",tags:[],version:"1.23",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Navigations",permalink:"/dotnet/docs/navigations"},next:{title:"Pages",permalink:"/dotnet/docs/pages"}},k={},f=[{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"API reference",id:"api-reference",level:3},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference-1",level:3},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"API reference",id:"api-reference-2",level:3},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Modify responses",id:"modify-responses",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Record and replay requests",id:"record-and-replay-requests",level:2},{value:"Recording HAR with CLI",id:"recording-har-with-cli",level:3},{value:"Recording HAR with a script",id:"recording-har-with-a-script",level:3},{value:"Replaying from HAR",id:"replaying-from-har",level:3},{value:"WebSockets",id:"websockets",level:2},{value:"API reference",id:"api-reference-5",level:3}],w={toc:f};function y(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},w),c),o(t,s({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright provides APIs to ",(0,r.kt)("strong",{parentName:"p"},"monitor")," and ",(0,r.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#network-events"}),"Network events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#modify-responses"}),"Modify responses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#record-and-replay-requests"}),"Record and replay requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#websockets"}),"WebSockets"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"http-authentication"}),"HTTP Authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    HttpCredentials = new HttpCredentials\n    {\n        Username = "bill",\n        Password = "pa55w0rd"\n    },\n});\nvar page = await context.NewPageAsync();\nawait page.GotoAsync("https://example.com");\n')),(0,r.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)"))),(0,r.kt)("h2",u({},{id:"http-proxy"}),"HTTP Proxy"),(0,r.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,r.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,r.kt)("p",null,"Here is an example of a global proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var proxy = new Proxy\n{\n    Server = "http://myproxy.com:3128",\n    Username = "user",\n    Password = "pwd"\n};\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    Proxy = proxy\n});\n')),(0,r.kt)("p",null,"When specifying proxy for each context individually, ",(0,r.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var proxy = new Proxy { Server = "per-context" };\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    // Browser proxy option is required for Chromium on Windows.\n    Proxy = proxy\n});\nusing var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Proxy = new Proxy { Server = "http://myproxy.com:3128" })\n});\n')),(0,r.kt)("h2",u({},{id:"network-events"}),"Network events"),(0,r.kt)("p",null,"You can monitor all the requests and responses:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\n\nusing var playwright = await Playwright.CreateAsync();\nawait using var browser = await playwright.Chromium.LaunchAsync();\nvar page = await browser.NewPageAsync();\npage.Request += (_, request) => Console.WriteLine(">> " + request.Method + " " + request.Url);\npage.Response += (_, response) => Console.WriteLine("<< " + response.Status + " " + response.Url);\nawait page.GotoAsync("https://example.com");\n')),(0,r.kt)("p",null,"Or wait for a network response after the button click:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Use a glob URL pattern\nvar waitForResponseTask = page.WaitForResponseAsync("**/api/fetch_data");\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,r.kt)("h4",u({},{id:"variations"}),"Variations"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Use a regular expression\nvar waitForResponseTask = page.WaitForResponseAsync(new Regex("\\\\.jpeg$"));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n\n// Use a predicate taking a Response object\nvar waitForResponseTask = page.WaitForResponseAsync(r => r.Url.Contains(token));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,r.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-request",title:"Request"}),"Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-response",title:"Response"}),"Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-event-request"}),"event Page.Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-event-response"}),"event Page.Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-wait-for-request"}),"Page.RunAndWaitForRequestAsync(action, urlOrPredicate, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-wait-for-response"}),"Page.RunAndWaitForResponseAsync(action, urlOrPredicate, options)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"handle-requests"}),"Handle requests"),(0,r.kt)("p",null,"You can mock API endpoints via handling the network requests in your Playwright script."),(0,r.kt)("h4",u({},{id:"variations-1"}),"Variations"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await page.RouteAsync("**/api/fetch_data", async route => {\n  await route.FulfillAsync(status: 200, body: testData);\n});\nawait page.GotoAsync("https://example.com");\n')),(0,r.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-route"}),"BrowserContext.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-unroute"}),"BrowserContext.UnrouteAsync(url, handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-route"}),"Page.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-unroute"}),"Page.UnrouteAsync(url, handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-route",title:"Route"}),"Route"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"modify-requests"}),"Modify requests"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Delete header\nawait page.RouteAsync("**/*", async route => {\n    var headers = new Dictionary<string, string>(route.Request.Headers.ToDictionary(x => x.Key, x => x.Value));\n    headers.Remove("X-Secret");\n    await route.ContinueAsync(new RouteContinueOptions { Headers = headers });\n});\n\n// Continue requests as POST.\nawait page.RouteAsync("**/*", async route => await route.ContinueAsync(method: "POST"));\n')),(0,r.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,r.kt)("h2",u({},{id:"abort-requests"}),"Abort requests"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await page.RouteAsync("**/*.{png,jpg,jpeg}", route => route.AbortAsync());\n\n// Abort based on the request type\nawait page.RouteAsync("**/*", async route => {\nif ("image".Equals(route.Request.ResourceType))\n    await route.AbortAsync();\nelse\n    await route.ContinueAsync();\n});\n')),(0,r.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-route"}),"Page.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-route"}),"BrowserContext.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-route#route-abort"}),"Route.AbortAsync(errorCode)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"modify-responses"}),"Modify responses"),(0,r.kt)("p",null,"To modify a response use ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," to get original response and then pass the response to ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-route#route-fulfill"}),"Route.FulfillAsync(options)"),". You can override individual fields on the response via options:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await Page.RouteAsync("**/title.html", async route =>\n{\n    // Fetch original response.\n    var response = await Page.APIRequest.FetchAsync(route.Request);\n    // Add a prefix to the title.\n    var body = await response.TextAsync();\n    body = body.Replace("<title>", "<title>My prefix:");\n\n    var headers = response.Headers;\n    headers.Add("Content-Type", "text/html");\n\n    await route.FulfillAsync(new()\n    {\n        // Pass all fields from the response.\n        Response = response,\n        // Override response body.\n        Body = body,\n        // Force content type to be html.\n        Headers = headers,\n    });\n});\n')),(0,r.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-route"}),"Page.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-route"}),"BrowserContext.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-playwright#playwright-request"}),"Playwright.APIRequest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-request"}),"BrowserContext.APIRequest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-request"}),"Page.APIRequest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-route#route-fulfill"}),"Route.FulfillAsync(options)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"record-and-replay-requests"}),"Record and replay requests"),(0,r.kt)("p",null,"You can record network activity as an HTTP Archive file (HAR). Later on, this archive can be used to mock responses to the network requests. You'll need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Record a HAR file."),(0,r.kt)("li",{parentName:"ol"},"Commit the HAR file alongside the tests."),(0,r.kt)("li",{parentName:"ol"},"Route requests using the saved HAR files in the tests.")),(0,r.kt)("h3",u({},{id:"recording-har-with-cli"}),"Recording HAR with CLI"),(0,r.kt)("p",null,"Open the browser with ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/cli"}),"Playwright CLI")," and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-har")," option to produce a HAR file. Optionally, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-har-glob")," to only save requests you are interested in, for example API endpoints. If the har file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", artifacts are written as separate files and are all compressed into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"zip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# Save API requests from example.com as "example.har" archive.\npwsh bin\\Debug\\netX\\playwright.ps1 open --save-har=example.har --save-har-glob="**/api/**" https://example.com\n')),(0,r.kt)("h3",u({},{id:"recording-har-with-a-script"}),"Recording HAR with a script"),(0,r.kt)("p",null,"Alternatively, instead of using the CLI, you can record HAR programmatically. Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"har")," option when creating a ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," with ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")," to create an archive. If the har file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", artifacts are written as separate files and are all compressed into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"zip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var context = await browser.NewContextAsync(new () {\n    RecordHarPath = "example.har",\n    RecordHarUrlFilter = "**/api/**",\n});\n\n// ... Perform actions ...\n\n// Close context to ensure HAR is saved to disk.\nawait context.CloseAsync();\n')),(0,r.kt)("h3",u({},{id:"replaying-from-har"}),"Replaying from HAR"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-route-from-har"}),"Page.RouteFromHARAsync(har, options)")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-route-from-har"}),"BrowserContext.RouteFromHARAsync(har, options)")," to serve matching responses from the ",(0,r.kt)("a",u({parentName:"p"},{href:"http://www.softwareishard.com/blog/har-12-spec/"}),"HAR")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Either use a matching response from the HAR,\n// or abort the request if nothing matches.\nawait context.RouteFromHARAsync("example.har");\n')),(0,r.kt)("p",null,"HAR replay matches URL and HTTP method strictly. For POST requests, it also matches POST payloads strictly. If multiple recordings match a request, the one with the most matching headers is picked. An entry resulting in a redirect will be followed automatically."),(0,r.kt)("p",null,"Similar to when recording, if given HAR file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", it is considered an archive containing the HAR file along with network payloads stored as separate entries. You can also extract this archive, edit payloads or HAR log manually and point to the extracted har file. All the payloads will be resolved relative to the extracted har file on the file system."),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"websockets"}),"WebSockets"),(0,r.kt)("p",null,"Playwright supports ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-web-socket"}),"event Page.WebSocket")," event is fired. This event contains the ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," instance for further web socket frames inspection:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'page.WebSocket += (_, ws) =>\n{\n    Console.WriteLine("WebSocket opened: " + ws.Url);\n    ws.FrameSent += (_, f) => Console.WriteLine(f.Text);\n    ws.FrameReceived += (_, f) => Console.WriteLine(f.Text);\n    ws.Close += (_, ws1) => Console.WriteLine("WebSocket closed");\n};\n')),(0,r.kt)("h3",u({},{id:"api-reference-5"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-event-web-socket"}),"event Page.WebSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocket#web-socket-event-frame-sent"}),"event WebSocket.FrameSent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocket#web-socket-event-frame-received"}),"event WebSocket.FrameReceived")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocket#web-socket-event-close"}),"event WebSocket.Close"))),(0,r.kt)("br",null))}y.isMDXComponent=!0}}]);