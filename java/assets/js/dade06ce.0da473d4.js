"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1188],{1100:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var s=a(7462),i=a(3366),o=(a(7294),a(3905)),r=(a(6396),a(8215),["components"]),n={id:"class-requestoptions",title:"RequestOptions"},l=void 0,p={unversionedId:"api/class-requestoptions",id:"version-1.18/api/class-requestoptions",isDocsHomePage:!1,title:"RequestOptions",description:"The [RequestOptions] allows to create form data to be sent via [APIRequestContext].",source:"@site/versioned_docs/version-1.18/api/class-requestoptions.mdx",sourceDirName:"api",slug:"/api/class-requestoptions",permalink:"/java/docs/1.18/api/class-requestoptions",tags:[],version:"1.18",frontMatter:{id:"class-requestoptions",title:"RequestOptions"}},u=[{value:"RequestOptions.create()",id:"request-options-create",children:[],level:2},{value:"RequestOptions.setData(data)",id:"request-options-set-data",children:[],level:2},{value:"RequestOptions.setFailOnStatusCode(failOnStatusCode)",id:"request-options-set-fail-on-status-code",children:[],level:2},{value:"RequestOptions.setForm(form)",id:"request-options-set-form",children:[],level:2},{value:"RequestOptions.setHeader(name, value)",id:"request-options-set-header",children:[],level:2},{value:"RequestOptions.setIgnoreHTTPSErrors(ignoreHTTPSErrors)",id:"request-options-set-ignore-https-errors",children:[],level:2},{value:"RequestOptions.setMethod(method)",id:"request-options-set-method",children:[],level:2},{value:"RequestOptions.setMultipart(form)",id:"request-options-set-multipart",children:[],level:2},{value:"RequestOptions.setQueryParam(name, value)",id:"request-options-set-query-param",children:[],level:2},{value:"RequestOptions.setTimeout(timeout)",id:"request-options-set-timeout",children:[],level:2}],d={toc:u};function c(t){var e=t.components,a=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,s.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions")," allows to create form data to be sent via ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'context.request().post(\n  "https://example.com/submit",\n  RequestOptions.create()\n    .setQueryParam("page", 1)\n    .setData("My data"));\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-create"},"RequestOptions.create()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-data"},"RequestOptions.setData(data)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-fail-on-status-code"},"RequestOptions.setFailOnStatusCode(failOnStatusCode)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-form"},"RequestOptions.setForm(form)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-header"},"RequestOptions.setHeader(name, value)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-ignore-https-errors"},"RequestOptions.setIgnoreHTTPSErrors(ignoreHTTPSErrors)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-method"},"RequestOptions.setMethod(method)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-multipart"},"RequestOptions.setMultipart(form)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-query-param"},"RequestOptions.setQueryParam(name, value)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions#request-options-set-timeout"},"RequestOptions.setTimeout(timeout)"))),(0,o.kt)("h2",{id:"request-options-create"},"RequestOptions.create()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-create-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-create-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Creates new instance of ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),"."),(0,o.kt)("h2",{id:"request-options-set-data"},"RequestOptions.setData(data)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-data-option-data"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"},"Object"),">"," Allows to set post data of the request. If the data parameter is an object, it will be serialized to json string and ",(0,o.kt)("inlineCode",{parentName:"li"},"content-type")," header will be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json")," if not explicitly set. Otherwise the ",(0,o.kt)("inlineCode",{parentName:"li"},"content-type")," header will be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"application/octet-stream")," if not explicitly set.",(0,o.kt)("a",{href:"#request-options-set-data-option-data",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-data-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-data-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Sets the request's post data."),(0,o.kt)("h2",{id:"request-options-set-fail-on-status-code"},"RequestOptions.setFailOnStatusCode(failOnStatusCode)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"failOnStatusCode"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-fail-on-status-code-option-fail-on-status-code"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to throw on response codes other than 2xx and 3xx. By default response object is returned for all status codes.",(0,o.kt)("a",{href:"#request-options-set-fail-on-status-code-option-fail-on-status-code",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-fail-on-status-code-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-fail-on-status-code-return",class:"list-anchor"},"#"))),(0,o.kt)("h2",{id:"request-options-set-form"},"RequestOptions.setForm(form)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"form"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-form-option-form"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-formdata",title:"FormData"},"FormData"),">"," Form data to be serialized as html form using ",(0,o.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")," encoding and sent as this request body.",(0,o.kt)("a",{href:"#request-options-set-form-option-form",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-form-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-form-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Provides ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-formdata",title:"FormData"},"FormData")," object that will be serialized as html form using ",(0,o.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," encoding and sent as this request body. If this parameter is specified ",(0,o.kt)("inlineCode",{parentName:"p"},"content-type")," header will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," unless explicitly provided."),(0,o.kt)("h2",{id:"request-options-set-header"},"RequestOptions.setHeader(name, value)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-header-option-name"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Header name.",(0,o.kt)("a",{href:"#request-options-set-header-option-name",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-header-option-value"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Header value.",(0,o.kt)("a",{href:"#request-options-set-header-option-value",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-header-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-header-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Sets an HTTP header to the request."),(0,o.kt)("h2",{id:"request-options-set-ignore-https-errors"},"RequestOptions.setIgnoreHTTPSErrors(ignoreHTTPSErrors)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-ignore-https-errors-option-ignore-https-errors"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to ignore HTTPS errors when sending network requests.",(0,o.kt)("a",{href:"#request-options-set-ignore-https-errors-option-ignore-https-errors",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-ignore-https-errors-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-ignore-https-errors-return",class:"list-anchor"},"#"))),(0,o.kt)("h2",{id:"request-options-set-method"},"RequestOptions.setMethod(method)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-method-option-method"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Request method, e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"},"POST"),".",(0,o.kt)("a",{href:"#request-options-set-method-option-method",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-method-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-method-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Changes the request method (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT"},"PUT")," or ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"},"POST"),")."),(0,o.kt)("h2",{id:"request-options-set-multipart"},"RequestOptions.setMultipart(form)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"form"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-multipart-option-form"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-formdata",title:"FormData"},"FormData"),">"," Form data to be serialized as html form using ",(0,o.kt)("inlineCode",{parentName:"li"},"multipart/form-data")," encoding and sent as this request body.",(0,o.kt)("a",{href:"#request-options-set-multipart-option-form",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-multipart-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-multipart-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Provides ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-formdata",title:"FormData"},"FormData")," object that will be serialized as html form using ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," encoding and sent as this request body. If this parameter is specified ",(0,o.kt)("inlineCode",{parentName:"p"},"content-type")," header will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," unless explicitly provided."),(0,o.kt)("h2",{id:"request-options-set-query-param"},"RequestOptions.setQueryParam(name, value)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-query-param-option-name"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Parameter name.",(0,o.kt)("a",{href:"#request-options-set-query-param-option-name",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-query-param-option-value"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," Parameter value.",(0,o.kt)("a",{href:"#request-options-set-query-param-option-value",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-query-param-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-query-param-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Adds a query parameter to the request URL."),(0,o.kt)("h2",{id:"request-options-set-timeout"},"RequestOptions.setTimeout(timeout)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-timeout-option-timeout"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Request timeout in milliseconds.",(0,o.kt)("a",{href:"#request-options-set-timeout-option-timeout",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-options-set-timeout-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-requestoptions",title:"RequestOptions"},"RequestOptions"),">",(0,o.kt)("a",{href:"#request-options-set-timeout-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Sets request timeout in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout."))}c.isMDXComponent=!0}}]);