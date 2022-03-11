"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8356],{5178:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=(a(6396),a(8215),["components"]),l={id:"network",title:"Network"},i=void 0,p={unversionedId:"network",id:"version-1.18/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.18/network.mdx",sourceDirName:".",slug:"/network",permalink:"/java/docs/1.18/network",tags:[],version:"1.18",frontMatter:{id:"network",title:"Network"},sidebar:"version-1.18/docs",previous:{title:"Navigations",permalink:"/java/docs/1.18/navigations"},next:{title:"Pages",permalink:"/java/docs/1.18/pages"}},u=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"HTTP Proxy",id:"http-proxy",children:[],level:2},{value:"Network events",id:"network-events",children:[{value:"Variations",id:"variations",children:[],level:4},{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Handle requests",id:"handle-requests",children:[{value:"Variations",id:"variations-1",children:[],level:4},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Modify requests",id:"modify-requests",children:[],level:2},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"WebSockets",id:"websockets",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright provides APIs to ",(0,o.kt)("strong",{parentName:"p"},"monitor")," and ",(0,o.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XHRs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," requests, can be tracked, modified and handled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-authentication"},"HTTP Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-proxy"},"HTTP Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-events"},"Network events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handle-requests"},"Handle requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#modify-requests"},"Modify requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#abort-requests"},"Abort requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#websockets"},"WebSockets"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"http-authentication"},"HTTP Authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setHttpCredentials("bill", "pa55w0rd"));\nPage page = context.newPage();\npage.navigate("https://example.com");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browser#browser-new-context"},"Browser.newContext([options])"))),(0,o.kt)("h2",{id:"http-proxy"},"HTTP Proxy"),(0,o.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,o.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,o.kt)("p",null,"Here is an example of a global proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  .setProxy(new Proxy(\"http://myproxy.com:3128\")\n  .setUsername('usr')\n  .setPassword('pwd'));\n")),(0,o.kt)("p",null,"When specifying proxy for each context individually, ",(0,o.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  // Browser proxy option is required for Chromium on Windows.\n  .setProxy(new Proxy("per-context"));\nBrowserContext context = chromium.launch(new Browser.NewContextOptions()\n  .setProxy(new Proxy("http://myproxy.com:3128"));\n')),(0,o.kt)("h2",{id:"network-events"},"Network events"),(0,o.kt)("p",null,"You can monitor all the requests and responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onRequest(request -> System.out.println(">> " + request.method() + " " + request.url()));\n      page.onResponse(response -> System.out.println("<<" + response.status() + " " + response.url()));\n      page.navigate("https://example.com");\n      browser.close();\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Or wait for a network response after the button click:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Use a glob URL pattern\nResponse response = page.waitForResponse("**/api/fetch_data", () -> {\n  page.click("button#update");\n});\n')),(0,o.kt)("h4",{id:"variations"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Use a RegExp\nResponse response = page.waitForResponse(Pattern.compile("\\\\.jpeg$"), () -> {\n  page.click("button#update");\n});\n\n// Use a predicate taking a Response object\nResponse response = page.waitForResponse(r -> r.url().contains(token), () -> {\n  page.click("button#update");\n});\n')),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-request",title:"Request"},"Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-response",title:"Response"},"Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-event-request"},"Page.onRequest(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-event-response"},"Page.onResponse(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-wait-for-request"},"Page.waitForRequest(urlOrPredicate[, options], callback)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-wait-for-response"},"Page.waitForResponse(urlOrPredicate[, options], callback)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"handle-requests"},"Handle requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.route("**/api/fetch_data", route -> route.fulfill(new Route.FulfillOptions()\n  .setStatus(200)\n  .setBody(testData)));\npage.navigate("https://example.com");\n')),(0,o.kt)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),(0,o.kt)("h4",{id:"variations-1"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'browserContext.route("**/api/login", route -> route.fulfill(new Route.FulfillOptions()\n  .setStatus(200)\n  .setBody("accept")));\npage.navigate("https://example.com");\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browsercontext#browser-context-route"},"BrowserContext.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browsercontext#browser-context-unroute"},"BrowserContext.unroute(url[, handler])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-route"},"Page.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-unroute"},"Page.unroute(url[, handler])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-route",title:"Route"},"Route"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"modify-requests"},"Modify requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Delete header\npage.route("**/*", route -> {\n  Map<String, String> headers = new HashMap<>(route.request().headers());\n  headers.remove("X-Secret");\n    route.resume(new Route.ResumeOptions().setHeaders(headers));\n});\n\n// Continue requests as POST.\npage.route("**/*", route -> route.resume(new Route.ResumeOptions().setMethod("POST")));\n')),(0,o.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,o.kt)("h2",{id:"abort-requests"},"Abort requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.route("**/*.{png,jpg,jpeg}", route -> route.abort());\n\n// Abort based on the request type\npage.route("**/*", route -> {\n  if ("image".equals(route.request().resourceType()))\n    route.abort();\n  else\n    route.resume();\n});\n')),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-route"},"Page.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browsercontext#browser-context-route"},"BrowserContext.route(url, handler[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-route#route-abort"},"Route.abort([errorCode])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page#page-event-web-socket"},"Page.onWebSocket(handler)")," event is fired. This event contains the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-websocket",title:"WebSocket"},"WebSocket")," instance for further web socket frames inspection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.onWebSocket(ws -> {\n  log("WebSocket opened: " + ws.url());\n  ws.onFrameSent(frameData -> log(frameData.text()));\n  ws.onFrameReceived(frameData -> log(frameData.text()));\n  ws.onClose(ws1 -> log("WebSocket closed"));\n});\n')),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-websocket",title:"WebSocket"},"WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page#page-event-web-socket"},"Page.onWebSocket(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-websocket#web-socket-event-frame-sent"},"WebSocket.onFrameSent(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-websocket#web-socket-event-frame-received"},"WebSocket.onFrameReceived(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-websocket#web-socket-event-close"},"WebSocket.onClose(handler)"))),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);