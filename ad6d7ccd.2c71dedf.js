(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{437:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return o}));var a=r(3),s=r(7),n=(r(0),r(601)),i={id:"class-request",title:"class: Request"},l={unversionedId:"api/class-request",id:"version-1.6.0/api/class-request",isDocsHomePage:!1,title:"class: Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.6.0/api/class-request.md",slug:"/api/class-request",permalink:"/docs/1.6.0/api/class-request",version:"1.6.0",sidebar:"version-1.6.0/api",previous:{title:"class: Touchscreen",permalink:"/docs/1.6.0/api/class-touchscreen"},next:{title:"class: Response",permalink:"/docs/1.6.0/api/class-response"}},c=[{value:"request.failure()",id:"requestfailure",children:[]},{value:"request.frame()",id:"requestframe",children:[]},{value:"request.headers()",id:"requestheaders",children:[]},{value:"request.isNavigationRequest()",id:"requestisnavigationrequest",children:[]},{value:"request.method()",id:"requestmethod",children:[]},{value:"request.postData()",id:"requestpostdata",children:[]},{value:"request.postDataBuffer()",id:"requestpostdatabuffer",children:[]},{value:"request.postDataJSON()",id:"requestpostdatajson",children:[]},{value:"request.redirectedFrom()",id:"requestredirectedfrom",children:[]},{value:"request.redirectedTo()",id:"requestredirectedto",children:[]},{value:"request.resourceType()",id:"requestresourcetype",children:[]},{value:"request.response()",id:"requestresponse",children:[]},{value:"request.timing()",id:"requesttiming",children:[]},{value:"request.url()",id:"requesturl",children:[]}],b={toc:c};function o(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.6.0/api/class-page#class-page",title:"Page"}),"Page"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-page#event-request"}),Object(n.b)("inlineCode",{parentName:"a"},"'request'"))," emitted when the request is issued by the page."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-page#event-response"}),Object(n.b)("inlineCode",{parentName:"a"},"'response'"))," emitted when/if the response status and headers are received for the request."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-page#event-requestfinished"}),Object(n.b)("inlineCode",{parentName:"a"},"'requestfinished'"))," emitted when the response body is downloaded and the request is complete.")),Object(n.b)("p",null,"If request fails at some point, then instead of ",Object(n.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.6.0/api/class-page#event-requestfailed"}),Object(n.b)("inlineCode",{parentName:"a"},"'requestfailed'"))," event is emitted."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE")," HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",Object(n.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event.")),Object(n.b)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestfailure"}),"request.failure()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestframe"}),"request.frame()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestheaders"}),"request.headers()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestisnavigationrequest"}),"request.isNavigationRequest()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestmethod"}),"request.method()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestpostdata"}),"request.postData()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestpostdatabuffer"}),"request.postDataBuffer()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestpostdatajson"}),"request.postDataJSON()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestredirectedfrom"}),"request.redirectedFrom()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestredirectedto"}),"request.redirectedTo()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestresourcetype"}),"request.resourceType()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requestresponse"}),"request.response()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requesttiming"}),"request.timing()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#requesturl"}),"request.url()"))),Object(n.b)("h2",{id:"requestfailure"},"request.failure()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Object describing request failure, if any",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"errorText")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Human-readable error message, e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),Object(n.b)("p",null,"The method returns ",Object(n.b)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by\n",Object(n.b)("inlineCode",{parentName:"p"},"requestfailed")," event."),Object(n.b)("p",null,"Example of logging of all the failed requests:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),Object(n.b)("h2",{id:"requestframe"},"request.frame()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-frame#class-frame",title:"Frame"}),"Frame"),"> A ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-frame#class-frame",title:"Frame"}),"Frame")," that initiated this request.")),Object(n.b)("h2",{id:"requestheaders"},"request.headers()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),", ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> An object with HTTP headers associated with the request. All header names are lower-case.")),Object(n.b)("h2",{id:"requestisnavigationrequest"},"request.isNavigationRequest()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(n.b)("p",null,"Whether this request is driving frame's navigation."),Object(n.b)("h2",{id:"requestmethod"},"request.method()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Request's method (GET, POST, etc.)")),Object(n.b)("h2",{id:"requestpostdata"},"request.postData()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Request's post body, if any.")),Object(n.b)("h2",{id:"requestpostdatabuffer"},"request.postDataBuffer()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.md#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> Request's post body in a binary form, if any.")),Object(n.b)("h2",{id:"requestpostdatajson"},"request.postDataJSON()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Parsed request's body for ",Object(n.b)("inlineCode",{parentName:"li"},"form-urlencoded")," and JSON as a fallback if any.")),Object(n.b)("p",null,"When the response is ",Object(n.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),Object(n.b)("h2",{id:"requestredirectedfrom"},"request.redirectedFrom()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#class-request",title:"Request"}),"Request"),"> Request that was redirected by the server to this one, if any.")),Object(n.b)("p",null,"When the server responds with a redirect, Playwright creates a new ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.6.0/api/class-request#class-request",title:"Request"}),"Request")," object. The two requests are connected by ",Object(n.b)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",Object(n.b)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",Object(n.b)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),Object(n.b)("p",null,"For example, if the website ",Object(n.b)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",Object(n.b)("inlineCode",{parentName:"p"},"https://example.com"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),Object(n.b)("p",null,"If the website ",Object(n.b)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),Object(n.b)("h2",{id:"requestredirectedto"},"request.redirectedTo()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-request#class-request",title:"Request"}),"Request"),"> New request issued by the browser if the server responded with redirect.")),Object(n.b)("p",null,"This method is the opposite of ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"#requestredirectedfrom"}),"request.redirectedFrom()"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),Object(n.b)("h2",{id:"requestresourcetype"},"request.resourceType()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(n.b)("p",null,"Contains the request's resource type as it was perceived by the rendering engine.\nResourceType will be one of the following: ",Object(n.b)("inlineCode",{parentName:"p"},"document"),", ",Object(n.b)("inlineCode",{parentName:"p"},"stylesheet"),", ",Object(n.b)("inlineCode",{parentName:"p"},"image"),", ",Object(n.b)("inlineCode",{parentName:"p"},"media"),", ",Object(n.b)("inlineCode",{parentName:"p"},"font"),", ",Object(n.b)("inlineCode",{parentName:"p"},"script"),", ",Object(n.b)("inlineCode",{parentName:"p"},"texttrack"),", ",Object(n.b)("inlineCode",{parentName:"p"},"xhr"),", ",Object(n.b)("inlineCode",{parentName:"p"},"fetch"),", ",Object(n.b)("inlineCode",{parentName:"p"},"eventsource"),", ",Object(n.b)("inlineCode",{parentName:"p"},"websocket"),", ",Object(n.b)("inlineCode",{parentName:"p"},"manifest"),", ",Object(n.b)("inlineCode",{parentName:"p"},"other"),"."),Object(n.b)("h2",{id:"requestresponse"},"request.response()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-response#class-response",title:"Response"}),"Response"),">> A matching ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-response#class-response",title:"Response"}),"Response")," object, or ",Object(n.b)("inlineCode",{parentName:"li"},"null")," if the response was not received due to error.")),Object(n.b)("h2",{id:"requesttiming"},"request.timing()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"startTime")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"domainLookupStart")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(n.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"domainLookupEnd")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(n.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"connectStart")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(n.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"secureConnectionStart")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",Object(n.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"connectEnd")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(n.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"requestStart")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(n.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"responseStart")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(n.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"responseEnd")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",Object(n.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.\n};")))),Object(n.b)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",Object(n.b)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing API"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [request] = await Promise.all([\n  page.waitForEvent('requestfinished'),\n  page.goto(httpsServer.EMPTY_PAGE)\n]);\nconsole.log(request.timing());\n")),Object(n.b)("h2",{id:"requesturl"},"request.url()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> URL of the request.")))}o.isMDXComponent=!0},601:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),s=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var b=s.a.createContext({}),o=function(e){var t=s.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return s.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||n;return r?s.a.createElement(d,l(l({ref:t},b),{},{components:r})):s.a.createElement(d,l({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<n;b++)i[b]=r[b];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);