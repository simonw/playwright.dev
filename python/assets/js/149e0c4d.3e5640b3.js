(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[117],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,y=d["".concat(p,".").concat(m)]||d[m]||i[m]||o;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(67294),r=a(80944),o=a(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,i=e.values,d=e.groupId,m=e.className,y=(0,r.Z)(),h=y.tabGroupChoices,k=y.setTabGroupChoices,f=(0,n.useState)(c),b=f[0],g=f[1],v=n.Children.toArray(e.children),w=[];if(null!=d){var x=h[d];null!=x&&x!==b&&i.some((function(e){return e.value===x}))&&g(x)}var N=function(e){var t=e.currentTarget,a=w.indexOf(t),n=i[a].value;g(n),null!=d&&(k(d,n),setTimeout((function(){var e,a,n,r,o,s,p,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,s=window,p=s.innerHeight,u=s.innerWidth,a>=0&&o<=u&&r<=p&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case p:var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},i.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:N,onClick:N},a)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},48641:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),s=a(41395),l=a(58215),p={id:"network",title:"Network"},u={unversionedId:"network",id:"version-1.12.0/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.12.0/network.mdx",sourceDirName:".",slug:"/network",permalink:"/python/docs/1.12.0/network",version:"1.12.0",frontMatter:{id:"network",title:"Network"},sidebar:"version-1.12.0/docs",previous:{title:"Navigations",permalink:"/python/docs/1.12.0/navigations"},next:{title:"Page Object Models",permalink:"/python/docs/1.12.0/pom"}},c=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"HTTP Proxy",id:"http-proxy",children:[]},{value:"Network events",id:"network-events",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handle requests",id:"handle-requests",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Modify requests",id:"modify-requests",children:[]},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"WebSockets",id:"websockets",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],i={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright provides APIs to ",(0,o.kt)("strong",{parentName:"p"},"monitor")," and ",(0,o.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XHRs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," requests, can be tracked, modified and handled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-authentication"},"HTTP Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-proxy"},"HTTP Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-events"},"Network events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handle-requests"},"Handle requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#modify-requests"},"Modify requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#abort-requests"},"Abort requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#websockets"},"WebSockets"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"http-authentication"},"HTTP Authentication"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'context = browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = context.new_page()\npage.goto("https://example.com")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'context = await browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = await context.new_page()\nawait page.goto("https://example.com")\n')))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"))),(0,o.kt)("h2",{id:"http-proxy"},"HTTP Proxy"),(0,o.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,o.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,o.kt)("p",null,"Here is an example of a global proxy:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "username": "usr",\n  "password": "pwd"\n})\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "username": "usr",\n  "password": "pwd"\n})\n')))),(0,o.kt)("p",null,"When specifying proxy for each context individually, you need to give Playwright a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch(proxy={"server": "per-context"})\ncontext = browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch(proxy={"server": "per-context"})\ncontext = await browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n')))),(0,o.kt)("h2",{id:"network-events"},"Network events"),(0,o.kt)("p",null,"You can monitor all the requests and responses:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    page.goto("https://example.com")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    await page.goto("https://example.com")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,o.kt)("p",null,"Or wait for a network response after the button click:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Use a glob url pattern\nwith page.expect_response("**/api/fetch_data") as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Use a glob url pattern\nasync with page.expect_response("**/api/fetch_data") as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),(0,o.kt)("h4",{id:"variations"},"Variations"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Use a regular expression\nwith page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n\n# Use a predicate taking a response object\nwith page.expect_response(lambda response: token in response.url) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Use a regular expression\nasync with page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n\n# Use a predicate taking a response object\nasync with page.expect_response(lambda response: token in response.url) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-request",title:"Request"},"Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-response",title:"Response"},"Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-event-request"},'page.on("request")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-event-response"},'page.on("response")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-wait-for-request"},"page.expect_request(url_or_predicate, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-wait-for-response"},"page.expect_response(url_or_predicate, **kwargs)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"handle-requests"},"Handle requests"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\npage.goto("https://example.com")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\nawait page.goto("https://example.com")\n')))),(0,o.kt)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),(0,o.kt)("h4",{id:"variations-1"},"Variations"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\ncontext.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\npage.goto("https://example.com")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\nawait context.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\nawait page.goto("https://example.com")\n')))),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-browsercontext#browser-context-route"},"browser_context.route(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-browsercontext#browser-context-unroute"},"browser_context.unroute(url, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-route"},"page.route(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-unroute"},"page.unroute(url, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-route",title:"Route"},"Route"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"modify-requests"},"Modify requests"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Delete header\ndef handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\npage.route("**/*", handle_route)\n\n# Continue requests as POST.\npage.route("**/*", lambda route: route.continue_(method="POST"))\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Delete header\nasync def handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\nawait page.route("**/*", handle_route)\n\n# Continue requests as POST.\nawait page.route("**/*", lambda route: route.continue_(method="POST"))\n')))),(0,o.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,o.kt)("h2",{id:"abort-requests"},"Abort requests"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\npage.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\nawait page.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n')))),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-route"},"page.route(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-browsercontext#browser-context-route"},"browser_context.route(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-route#route-abort"},"route.abort(**kwargs)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-event-web-socket"},'page.on("websocket")')," event is fired. This event contains the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-websocket",title:"WebSocket"},"WebSocket")," instance for further web socket frames inspection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'def on_web_socket(ws):\n    print(f"WebSocket opened: {ws.url}")\n    ws.on("framesent", lambda payload: print(payload))\n    ws.on("framereceived", lambda payload: print(payload))\n    ws.on("close", lambda payload: print("WebSocket closed"))\n\npage.on("websocket", on_web_socket)\n')),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-websocket",title:"WebSocket"},"WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-event-web-socket"},'page.on("websocket")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-websocket#web-socket-event-frame-sent"},'web_socket.on("framesent")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-websocket#web-socket-event-frame-received"},'web_socket.on("framereceived")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-websocket#web-socket-event-close"},'web_socket.on("close")'))),(0,o.kt)("br",null))}d.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);