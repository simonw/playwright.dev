"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6844],{92202:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return c},default:function(){return w}});var n=t(87462),o=t(63366),l=(t(67294),t(3905)),d=t(26396),s=t(58215),i=["components"],r={id:"class-download",title:"Download"},p=void 0,h={unversionedId:"api/class-download",id:"version-1.15/api/class-download",isDocsHomePage:!1,title:"Download",description:'Download] objects are dispatched by page via the [page.on("download") event.',source:"@site/versioned_docs/version-1.15/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/python/docs/1.15/api/class-download",tags:[],version:"1.15",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.15/api",previous:{title:"Dialog",permalink:"/python/docs/1.15/api/class-dialog"},next:{title:"ElementHandle",permalink:"/python/docs/1.15/api/class-elementhandle"}},c=[{value:"download.cancel()",id:"download-cancel",children:[],level:2},{value:"download.delete()",id:"download-delete",children:[],level:2},{value:"download.failure()",id:"download-failure",children:[],level:2},{value:"download.page",id:"download-page",children:[],level:2},{value:"download.path()",id:"download-path",children:[],level:2},{value:"download.save_as(path)",id:"download-save-as",children:[],level:2},{value:"download.suggested_filename",id:"download-suggested-filename",children:[],level:2},{value:"download.url",id:"download-url",children:[],level:2}],u={toc:c};function w(e){var a=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-download",title:"Download"},"Download")," objects are dispatched by page via the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-page#page-event-download"},'page.on("download")')," event."),(0,l.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed."),(0,l.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,l.kt)(d.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_download() as download_info:\n    page.click("a")\ndownload = download_info.value\n# wait for download to complete\npath = download.path()\n'))),(0,l.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_download() as download_info:\n    await page.click("a")\ndownload = await download_info.value\n# waits for download to complete\npath = await download.path()\n')))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Browser context ",(0,l.kt)("strong",{parentName:"p"},"must")," be created with the ",(0,l.kt)("inlineCode",{parentName:"p"},"accept_downloads")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",(0,l.kt)("inlineCode",{parentName:"p"},"accept_downloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-download#download-cancel"},"download.cancel()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-download#download-delete"},"download.delete()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-download#download-failure"},"download.failure()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-download#download-page"},"download.page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-download#download-path"},"download.path()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-download#download-save-as"},"download.save_as(path)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-download#download-suggested-filename"},"download.suggested_filename")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-download#download-url"},"download.url"))),(0,l.kt)("h2",{id:"download-cancel"},"download.cancel()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-cancel-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#download-cancel-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,l.kt)("inlineCode",{parentName:"p"},"download.failure()")," would resolve to ",(0,l.kt)("inlineCode",{parentName:"p"},"'canceled'"),"."),(0,l.kt)("h2",{id:"download-delete"},"download.delete()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-delete-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#download-delete-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-failure"},"download.failure()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-failure-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#download-failure-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-page"},"download.page"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-page-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page",title:"Page"},"Page"),">",(0,l.kt)("a",{href:"#download-page-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Get the page that the download belongs to."),(0,l.kt)("h2",{id:"download-path"},"download.path()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-path-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,l.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),">",(0,l.kt)("a",{href:"#download-path-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,l.kt)("p",null,"Note that the download's file name is a random GUID, use ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.15/api/class-download#download-suggested-filename"},"download.suggested_filename")," to get suggested file name."),(0,l.kt)("h2",{id:"download-save-as"},"download.save_as(path)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Path where the download should be copied.",(0,l.kt)("a",{href:"#download-save-as-option-path",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#download-save-as-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-suggested-filename"},"download.suggested_filename"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#download-suggested-filename-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,l.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#downloading-resources"},"whatwg"),". Different browsers can use different logic for computing it."),(0,l.kt)("h2",{id:"download-url"},"download.url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-url-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#download-url-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns downloaded url."))}w.isMDXComponent=!0}}]);