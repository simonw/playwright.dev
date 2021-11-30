"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[21637],{22977:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return n},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var a=i(87462),l=i(63366),r=(i(67294),i(3905)),o=(i(26396),i(58215),["components"]),s={id:"class-filechooser",title:"FileChooser"},n=void 0,c={unversionedId:"api/class-filechooser",id:"version-1.14/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [page.on('filechooser') event.",source:"@site/versioned_docs/version-1.14/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/docs/1.14/api/class-filechooser",tags:[],version:"1.14",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.14/api",previous:{title:"ElementHandle",permalink:"/docs/1.14/api/class-elementhandle"},next:{title:"Frame",permalink:"/docs/1.14/api/class-frame"}},p=[{value:"fileChooser.element()",id:"file-chooser-element",children:[],level:2},{value:"fileChooser.isMultiple()",id:"file-chooser-is-multiple",children:[],level:2},{value:"fileChooser.page()",id:"file-chooser-page",children:[],level:2},{value:"fileChooser.setFiles(files, options)",id:"file-chooser-set-files",children:[],level:2}],h={toc:p};function f(e){var t=e.components,i=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-page#page-event-file-chooser"},"page.on('filechooser')")," event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const [fileChooser] = await Promise.all([\n  page.waitForEvent('filechooser'),\n  page.click('upload')\n]);\nawait fileChooser.setFiles('myfile.pdf');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-filechooser#file-chooser-element"},"fileChooser.element()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-filechooser#file-chooser-is-multiple"},"fileChooser.isMultiple()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-filechooser#file-chooser-page"},"fileChooser.page()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-filechooser#file-chooser-set-files"},"fileChooser.setFiles(files[, options])"))),(0,r.kt)("h2",{id:"file-chooser-element"},"fileChooser.element()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">",(0,r.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns input element associated with this file chooser."),(0,r.kt)("h2",{id:"file-chooser-is-multiple"},"fileChooser.isMultiple()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,r.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,r.kt)("h2",{id:"file-chooser-page"},"fileChooser.page()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-page",title:"Page"},"Page"),">",(0,r.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns page this file chooser belongs to."),(0,r.kt)("h2",{id:"file-chooser-set-files"},"fileChooser.setFiles(files","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"files"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,r.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mimeType")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buffer")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," File content"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"noWaitAfter"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".",(0,r.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browsercontext#browser-context-set-default-timeout"},"browserContext.setDefaultTimeout(timeout)")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-page#page-set-default-timeout"},"page.setDefaultTimeout(timeout)")," methods.",(0,r.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,r.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,r.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}f.isMDXComponent=!0}}]);