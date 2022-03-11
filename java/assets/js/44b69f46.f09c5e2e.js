"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4819],{1298:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=a(7462),n=a(3366),o=(a(7294),a(3905)),r=(a(6396),a(8215),["components"]),s={id:"class-apirequest",title:"APIRequest"},l=void 0,p={unversionedId:"api/class-apirequest",id:"version-1.19/api/class-apirequest",isDocsHomePage:!1,title:"APIRequest",description:"Exposes API that can be used for the Web API testing. Each Playwright browser context has a APIRequestContext instance attached which shares cookies with the page context. Its also possible to create a new APIRequestContext instance manually. For more information see here.",source:"@site/versioned_docs/version-1.19/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/java/docs/api/class-apirequest",tags:[],version:"1.19",frontMatter:{id:"class-apirequest",title:"APIRequest"},sidebar:"version-1.19/api",previous:{title:"Playwright",permalink:"/java/docs/api/class-playwright"},next:{title:"APIRequestContext",permalink:"/java/docs/api/class-apirequestcontext"}},c=[{value:"APIRequest.newContext(options)",id:"api-request-new-context",children:[],level:2}],h={toc:c};function d(t){var e=t.components,a=(0,n.Z)(t,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Exposes API that can be used for the Web API testing. Each Playwright browser context has a APIRequestContext instance attached which shares cookies with the page context. Its also possible to create a new APIRequestContext instance manually. For more information see ",(0,o.kt)("a",{parentName:"p",href:"./class-apirequestcontext"},"here"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-apirequest#api-request-new-context"},"APIRequest.newContext([options])"))),(0,o.kt)("h2",{id:"api-request-new-context"},"APIRequest.newContext(","[options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"ApiRequest.NewContextOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setBaseURL"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Methods like ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-apirequestcontext#api-request-context-get"},"APIRequestContext.get(url[, options])")," take the base URL into consideration by using the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"},(0,o.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:",(0,o.kt)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor"},"#"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"baseURL: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and sending request to ",(0,o.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,o.kt)("li",{parentName:"ul"},"baseURL: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and sending request to ",(0,o.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html")),(0,o.kt)("li",{parentName:"ul"},"baseURL: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo")," (without trailing slash) and navigating to ",(0,o.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setExtraHTTPHeaders"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">"," An object containing additional HTTP headers to be sent with every request.",(0,o.kt)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setHttpCredentials"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"})," ","<","HttpCredentials",">"," Credentials for ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication"),".",(0,o.kt)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor"},"#"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setUsername")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setPassword")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setIgnoreHTTPSErrors"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".",(0,o.kt)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setProxy"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"})," ","<","Proxy",">"," Network proxy settings.",(0,o.kt)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor"},"#"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setServer")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,o.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setBypass")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Optional comma-separated domains to bypass proxy, for example ",(0,o.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setUsername")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Optional username to use if HTTP proxy requires authentication."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setPassword")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Optional password to use if HTTP proxy requires authentication."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setStorageState"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.storageState([options])")," or ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-apirequestcontext#api-request-context-storage-state"},"APIRequestContext.storageState([options])"),". Either a path to the file with saved storage, or the value returned by one of ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.storageState([options])")," or ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-apirequestcontext#api-request-context-storage-state"},"APIRequestContext.storageState([options])")," methods.",(0,o.kt)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setStorageStatePath"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state-path"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.storageState([options])"),". Path to the file with saved storage state.",(0,o.kt)("a",{href:"#api-request-new-context-option-storage-state-path",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Maximum time in milliseconds to wait for the response. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout.",(0,o.kt)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setUserAgent"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Specific user agent to use in this context.",(0,o.kt)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),">",(0,o.kt)("a",{href:"#api-request-new-context-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Creates new instances of ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),"."))}d.isMDXComponent=!0}}]);