"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1276],{2433:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return c},toc:function(){return f},default:function(){return u}});var l=i(7462),a=i(3366),s=(i(7294),i(3905)),o=i(6396),r=i(8215),n=["components"],p={id:"class-filechooser",title:"FileChooser"},h=void 0,c={unversionedId:"api/class-filechooser",id:"version-1.19/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:'FileChooser] objects are dispatched by the page in the [page.on("filechooser") event.',source:"@site/versioned_docs/version-1.19/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/python/docs/api/class-filechooser",tags:[],version:"1.19",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.19/api",previous:{title:"Error",permalink:"/python/docs/api/class-error"},next:{title:"Frame",permalink:"/python/docs/api/class-frame"}},f=[{value:"file_chooser.element",id:"file-chooser-element",children:[],level:2},{value:"file_chooser.is_multiple()",id:"file-chooser-is-multiple",children:[],level:2},{value:"file_chooser.page",id:"file-chooser-page",children:[],level:2},{value:"file_chooser.set_files(files, **kwargs)",id:"file-chooser-set-files",children:[],level:2}],d={toc:f};function u(e){var t=e.components,i=(0,a.Z)(e,n);return(0,s.kt)("wrapper",(0,l.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-event-file-chooser"},'page.on("filechooser")')," event."),(0,s.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_file_chooser() as fc_info:\n    page.click("upload")\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),(0,s.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_file_chooser() as fc_info:\n    await page.click("upload")\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-filechooser#file-chooser-element"},"file_chooser.element")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-filechooser#file-chooser-is-multiple"},"file_chooser.is_multiple()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-filechooser#file-chooser-page"},"file_chooser.page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-filechooser#file-chooser-set-files"},"file_chooser.set_files(files, **kwargs)"))),(0,s.kt)("h2",{id:"file-chooser-element"},"file_chooser.element"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">",(0,s.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns input element associated with this file chooser."),(0,s.kt)("h2",{id:"file-chooser-is-multiple"},"file_chooser.is_multiple()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">",(0,s.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,s.kt)("h2",{id:"file-chooser-page"},"file_chooser.page"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-page",title:"Page"},"Page"),">",(0,s.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns page this file chooser belongs to."),(0,s.kt)("h2",{id:"file-chooser-set-files"},"file_chooser.set_files(files, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"files"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,s.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]","|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,s.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]","]","|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,s.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," File name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"mimeType")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," File type"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"buffer")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," File content"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"no_wait_after"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"false"),".",(0,s.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-set-default-timeout"},"browser_context.set_default_timeout(timeout)")," or ",(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-set-default-timeout"},"page.set_default_timeout(timeout)")," methods.",(0,s.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,s.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}u.isMDXComponent=!0}}]);