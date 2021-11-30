"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9354],{6870:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var s=a(7462),r=a(3366),i=(a(7294),a(3905)),n=(a(6396),a(8215),["components"]),l={id:"class-request",title:"Request"},o=void 0,u={unversionedId:"api/class-request",id:"version-1.16/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.16/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/dotnet/docs/1.16/api/class-request",tags:[],version:"1.16",frontMatter:{id:"class-request",title:"Request"},sidebar:"version-1.16/api",previous:{title:"Page",permalink:"/dotnet/docs/1.16/api/class-page"},next:{title:"Response",permalink:"/dotnet/docs/1.16/api/class-response"}},d=[{value:"Request.AllHeadersAsync()",id:"request-all-headers",children:[],level:2},{value:"Request.Failure",id:"request-failure",children:[],level:2},{value:"Request.Frame",id:"request-frame",children:[],level:2},{value:"Request.HeaderValueAsync(name)",id:"request-header-value",children:[],level:2},{value:"Request.Headers",id:"request-headers",children:[],level:2},{value:"Request.HeadersArrayAsync()",id:"request-headers-array",children:[],level:2},{value:"Request.IsNavigationRequest",id:"request-is-navigation-request",children:[],level:2},{value:"Request.Method",id:"request-method",children:[],level:2},{value:"Request.PostData",id:"request-post-data",children:[],level:2},{value:"Request.PostDataBuffer",id:"request-post-data-buffer",children:[],level:2},{value:"Request.PostDataJSON",id:"request-post-data-json",children:[],level:2},{value:"Request.RedirectedFrom",id:"request-redirected-from",children:[],level:2},{value:"Request.RedirectedTo",id:"request-redirected-to",children:[],level:2},{value:"Request.ResourceType",id:"request-resource-type",children:[],level:2},{value:"Request.ResponseAsync()",id:"request-response",children:[],level:2},{value:"Request.SizesAsync()",id:"request-sizes",children:[],level:2},{value:"Request.Timing",id:"request-timing",children:[],level:2},{value:"Request.Url",id:"request-url",children:[],level:2}],p={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page",title:"Page"},"Page"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-event-request"},"event Page.Request")," emitted when the request is issued by the page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-event-response"},"event Page.Response")," emitted when/if the response status and headers are received for the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-event-request-finished"},"event Page.RequestFinished")," emitted when the response body is downloaded and the request is complete.")),(0,i.kt)("p",null,"If request fails at some point, then instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-event-request-failed"},"event Page.RequestFailed")," event is emitted."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,i.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,i.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-all-headers"},"Request.AllHeadersAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-failure"},"Request.Failure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-frame"},"Request.Frame")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-headers"},"Request.Headers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-headers-array"},"Request.HeadersArrayAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-header-value"},"Request.HeaderValueAsync(name)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-is-navigation-request"},"Request.IsNavigationRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-method"},"Request.Method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-post-data"},"Request.PostData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-post-data-buffer"},"Request.PostDataBuffer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-post-data-json"},"Request.PostDataJSON")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-redirected-from"},"Request.RedirectedFrom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-redirected-to"},"Request.RedirectedTo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-resource-type"},"Request.ResourceType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-response"},"Request.ResponseAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-sizes"},"Request.SizesAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-timing"},"Request.Timing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request#request-url"},"Request.Url"))),(0,i.kt)("h2",{id:"request-all-headers"},"Request.AllHeadersAsync()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-all-headers-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary"},"IDictionary"),"<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",">",(0,i.kt)("a",{href:"#request-all-headers-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"An object with all the request HTTP headers associated with this request. The header names are lower-cased."),(0,i.kt)("h2",{id:"request-failure"},"Request.Failure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">",(0,i.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"The method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,i.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,i.kt)("p",null,"Example of logging of all the failed requests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"page.RequestFailed += (_, request) =>\n{\n    Console.WriteLine(request.Failure);\n};\n")),(0,i.kt)("h2",{id:"request-frame"},"Request.Frame"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-frame",title:"Frame"},"Frame"),">",(0,i.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-frame",title:"Frame"},"Frame")," that initiated this request."),(0,i.kt)("h2",{id:"request-header-value"},"Request.HeaderValueAsync(name)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," Name of the header.",(0,i.kt)("a",{href:"#request-header-value-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">",(0,i.kt)("a",{href:"#request-header-value-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive."),(0,i.kt)("h2",{id:"request-headers"},"Request.Headers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary"},"IDictionary"),"<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",">",(0,i.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-request#request-all-headers"},"Request.AllHeadersAsync()")," instead."),(0,i.kt)("h2",{id:"request-headers-array"},"Request.HeadersArrayAsync()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-array-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable"},"IEnumerable"),"<",(0,i.kt)("inlineCode",{parentName:"li"},"HttpHeader"),">",">",(0,i.kt)("a",{href:"#request-headers-array-return",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," Name of the header."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," Value of the header.")))),(0,i.kt)("p",null,"An array with all the request HTTP headers associated with this request. Unlike ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-request#request-all-headers"},"Request.AllHeadersAsync()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,i.kt)("h2",{id:"request-is-navigation-request"},"Request.IsNavigationRequest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),">",(0,i.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Whether this request is driving frame's navigation."),(0,i.kt)("h2",{id:"request-method"},"Request.Method"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,i.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,i.kt)("h2",{id:"request-post-data"},"Request.PostData"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">",(0,i.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Request's post body, if any."),(0,i.kt)("h2",{id:"request-post-data-buffer"},"Request.PostDataBuffer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"},"byte"),"[","]","?",">",(0,i.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Request's post body in a binary form, if any."),(0,i.kt)("h2",{id:"request-post-data-json"},"Request.PostDataJSON"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-json-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsonelement",title:"JsonElement"},"JsonElement"),"?",">",(0,i.kt)("a",{href:"#request-post-data-json-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns parsed request's body for ",(0,i.kt)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),(0,i.kt)("p",null,"When the response is ",(0,i.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,i.kt)("h2",{id:"request-redirected-from"},"Request.RedirectedFrom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request",title:"Request"},"Request"),"?",">",(0,i.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,i.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,i.kt)("p",null,"For example, if the website ",(0,i.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var response = await page.GotoAsync("http://www.microsoft.com");\nConsole.WriteLine(response.Request.RedirectedFrom?.Url); // http://www.microsoft.com\n')),(0,i.kt)("p",null,"If the website ",(0,i.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var response = await page.GotoAsync("https://www.google.com");\nConsole.WriteLine(response.Request.RedirectedFrom?.Url); // null\n')),(0,i.kt)("h2",{id:"request-redirected-to"},"Request.RedirectedTo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-request",title:"Request"},"Request"),"?",">",(0,i.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,i.kt)("p",null,"This method is the opposite of ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-request#request-redirected-from"},"Request.RedirectedFrom"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Console.WriteLine(request.RedirectedFrom?.RedirectedTo == request); // True\n")),(0,i.kt)("h2",{id:"request-resource-type"},"Request.ResourceType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,i.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,i.kt)("h2",{id:"request-response"},"Request.ResponseAsync()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-response",title:"Response"},"Response"),"?",">",(0,i.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns the matching ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-response",title:"Response"},"Response")," object, or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,i.kt)("h2",{id:"request-sizes"},"Request.SizesAsync()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-sizes-return"})," ","<","Sizes",">",(0,i.kt)("a",{href:"#request-sizes-return",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requestBodySize")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),">"," Size of the request body (POST data payload) in bytes. Set to 0 if there was no body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requestHeadersSize")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),">"," Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"responseBodySize")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),">"," Size of the received response body (encoded) in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"responseHeadersSize")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),">"," Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body.")))),(0,i.kt)("p",null,"Returns resource size information for given request."),(0,i.kt)("h2",{id:"request-timing"},"Request.Timing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<","Timing",">",(0,i.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,i.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,i.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var request = await page.RunAndWaitForRequestFinishedAsync(async () =>\n{\n    await page.GotoAsync("https://www.microsoft.com");\n});\nConsole.WriteLine(request.Timing.ResponseEnd);\n')),(0,i.kt)("h2",{id:"request-url"},"Request.Url"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,i.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"URL of the request."))}c.isMDXComponent=!0}}]);