"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[609],{6109:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=(n(6396),n(8215),["components"]),s={id:"class-route",title:"Route"},l=void 0,u={unversionedId:"api/class-route",id:"api/class-route",isDocsHomePage:!1,title:"Route",description:"Whenever a network route is set up with Page.RouteAsync(url, handler, options) or BrowserContext.RouteAsync(url, handler, options), the Route object allows to handle the route.",source:"@site/docs/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/dotnet/docs/next/api/class-route",tags:[],version:"current",frontMatter:{id:"class-route",title:"Route"},sidebar:"api",previous:{title:"Response",permalink:"/dotnet/docs/next/api/class-response"},next:{title:"Selectors",permalink:"/dotnet/docs/next/api/class-selectors"}},c=[{value:"Route.AbortAsync(errorCode)",id:"route-abort",children:[],level:2},{value:"Route.ContinueAsync(options)",id:"route-continue",children:[],level:2},{value:"Route.FulfillAsync(options)",id:"route-fulfill",children:[],level:2},{value:"Route.Request",id:"route-request",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Whenever a network route is set up with ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-route"},"Page.RouteAsync(url, handler, options)")," or ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler, options)"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-route#route-abort"},"Route.AbortAsync(errorCode)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-route#route-continue"},"Route.ContinueAsync(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-route#route-fulfill"},"Route.FulfillAsync(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-route#route-request"},"Route.Request"))),(0,a.kt)("h2",{id:"route-abort"},"Route.AbortAsync(errorCode)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"errorCode"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-option-error-code"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Optional error code. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,a.kt)("a",{href:"#route-abort-option-error-code",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,a.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Aborts the route's request."),(0,a.kt)("h2",{id:"route-continue"},"Route.ContinueAsync(options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"RouteContinueOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Headers"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary"},"IDictionary"),"?<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),", ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,a.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Method"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," If set changes the request method (e.g. GET or POST)",(0,a.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PostData"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?|",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"},"byte"),"[","]","?",">"," If set changes the post data of request",(0,a.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Url"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," If set changes the request URL. New URL must have same protocol as original one.",(0,a.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,a.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Continues route's request with optional overrides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/*", route =>\n{\n    var headers = new Dictionary<string, string>(route.Request.Headers) { { "foo", "bar" } };\n    headers.Remove("origin");\n    route.ContinueAsync(headers);\n});\n')),(0,a.kt)("h2",{id:"route-fulfill"},"Route.FulfillAsync(options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"RouteFulfillOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Body"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Optional response body as text.",(0,a.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BodyBytes"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body-bytes"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"},"byte"),"[","]","?",">"," Optional response body as raw bytes.",(0,a.kt)("a",{href:"#route-fulfill-option-body-bytes",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ContentType"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," If set, equals to setting ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,a.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Headers"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary"},"IDictionary"),"?<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),", ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",">"," Response headers. Header values will be converted to a string.",(0,a.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Path"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," File path to respond with. The content type will be inferred from file extension. If ",(0,a.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,a.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Status"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),"?",">"," Response status code, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"200"),".",(0,a.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,a.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Fulfills route's request with given response."),(0,a.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/*", route => route.FulfillAsync(\n    status: 404,\n    contentType: "text/plain", \n    body: "Not Found!"));\n')),(0,a.kt)("p",null,"An example of serving static file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/xhr_endpoint", route => route.FulfillAsync(new RouteFulfillOptions { Path = "mock_data.json" }));\n')),(0,a.kt)("h2",{id:"route-request"},"Route.Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-request",title:"Request"},"Request"),">",(0,a.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"A request to be routed."))}p.isMDXComponent=!0}}]);