"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4848],{34914:function(a,t,e){e.r(t),e.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var r=e(87462),n=e(63366),i=(e(67294),e(3905)),o=(e(26396),e(58215),["components"]),l={id:"class-formdata",title:"FormData"},s=void 0,m={unversionedId:"api/class-formdata",id:"version-1.18/api/class-formdata",isDocsHomePage:!1,title:"FormData",description:"The [FormData] is used create form data that is sent via [APIRequestContext].",source:"@site/versioned_docs/version-1.18/api/class-formdata.mdx",sourceDirName:"api",slug:"/api/class-formdata",permalink:"/java/docs/1.18/api/class-formdata",tags:[],version:"1.18",frontMatter:{id:"class-formdata",title:"FormData"}},c=[{value:"FormData.create()",id:"form-data-create",children:[],level:2},{value:"FormData.set(name, name)",id:"form-data-set",children:[],level:2}],d={toc:c};function p(a){var t=a.components,e=(0,n.Z)(a,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-formdata",title:"FormData"},"FormData")," is used create form data that is sent via ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.options.FormData;\n...\nFormData form = FormData.create()\n    .set("firstName", "John")\n    .set("lastName", "Doe")\n    .set("age", 30);\npage.request().post("http://localhost/submit", RequestOptions.create().setForm(form));\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-formdata#form-data-create"},"FormData.create()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-formdata#form-data-set"},"FormData.set(name, name)"))),(0,i.kt)("h2",{id:"form-data-create"},"FormData.create()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"form-data-create-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-formdata",title:"FormData"},"FormData"),">",(0,i.kt)("a",{href:"#form-data-create-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Creates new instance of ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-formdata",title:"FormData"},"FormData"),"."),(0,i.kt)("h2",{id:"form-data-set"},"FormData.set(name, name)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"form-data-set-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Field name.",(0,i.kt)("a",{href:"#form-data-set-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"form-data-set-option-value"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),"|",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),"|",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),"|Name",">"," Field value.",(0,i.kt)("a",{href:"#form-data-set-option-value",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setName")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," File name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setMimeType")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," File type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setBuffer")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">"," File content"))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"form-data-set-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-formdata",title:"FormData"},"FormData"),">",(0,i.kt)("a",{href:"#form-data-set-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Sets a field on the form. File values can be passed either as ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," or as ",(0,i.kt)("inlineCode",{parentName:"p"},"FilePayload"),"."))}p.isMDXComponent=!0}}]);