"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5347],{42965:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return m}});var i=a(87462),r=a(63366),n=(a(67294),a(3905)),s=(a(26396),a(58215),["components"]),o={id:"class-apirequest",title:"APIRequest"},l=void 0,p={unversionedId:"api/class-apirequest",id:"version-1.17/api/class-apirequest",isDocsHomePage:!1,title:"APIRequest",description:"Exposes API that can be used for the Web API testing.",source:"@site/versioned_docs/version-1.17/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/python/docs/1.17/api/class-apirequest",tags:[],version:"1.17",frontMatter:{id:"class-apirequest",title:"APIRequest"},sidebar:"version-1.17/api",previous:{title:"Playwright",permalink:"/python/docs/1.17/api/class-playwright"},next:{title:"APIRequestContext",permalink:"/python/docs/1.17/api/class-apirequestcontext"}},h=[{value:"api_request.new_context(**kwargs)",id:"api-request-new-context",children:[],level:2}],c={toc:h};function m(t){var e=t.components,a=(0,r.Z)(t,s);return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-apirequest#api-request-new-context"},"api_request.new_context(**kwargs)"))),(0,n.kt)("h2",{id:"api-request-new-context"},"api_request.new_context(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"base_url"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Methods like ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-apirequestcontext#api-request-context-get"},"api_request_context.get(url, **kwargs)")," take the base URL into consideration by using the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"},(0,n.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:",(0,n.kt)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and sending request to ",(0,n.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and sending request to ",(0,n.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extra_http_headers"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">"," An object containing additional HTTP headers to be sent with every request.",(0,n.kt)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"http_credentials"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Credentials for ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication"),".",(0,n.kt)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ignore_https_errors"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".",(0,n.kt)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"proxy"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Network proxy settings.",(0,n.kt)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"server")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,n.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bypass")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional comma-separated domains to bypass proxy, for example ",(0,n.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional username to use if HTTP proxy requires authentication."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional password to use if HTTP proxy requires authentication."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"storage_state"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,n.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]","|",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," or ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-apirequestcontext#api-request-context-storage-state"},"api_request_context.storage_state(**kwargs)"),". Either a path to the file with saved storage, or the value returned by one of ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," or ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-apirequestcontext#api-request-context-storage-state"},"api_request_context.storage_state(**kwargs)")," methods.",(0,n.kt)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cookies")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domain")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expires")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Unix time in seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"httpOnly")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secure")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sameSite")," ","<",'"Strict"|"Lax"|"None"',">"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"origins")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"origin")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"localStorage")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Maximum time in milliseconds to wait for the response. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout.",(0,n.kt)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"user_agent"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Specific user agent to use in this context.",(0,n.kt)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),">",(0,n.kt)("a",{href:"#api-request-new-context-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Creates new instances of ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/1.17/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),"."))}m.isMDXComponent=!0}}]);