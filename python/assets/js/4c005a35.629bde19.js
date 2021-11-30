"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1321],{15059:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return h},default:function(){return m}});var t=n(87462),o=n(63366),d=(n(67294),n(3905)),l=n(26396),i=n(58215),s=["components"],r={id:"downloads",title:"Downloads"},p=void 0,c={unversionedId:"downloads",id:"version-1.14/downloads",isDocsHomePage:!1,title:"Downloads",description:"For uploading files, see the uploading files section.",source:"@site/versioned_docs/version-1.14/downloads.mdx",sourceDirName:".",slug:"/downloads",permalink:"/python/docs/1.14/downloads",tags:[],version:"1.14",frontMatter:{id:"downloads",title:"Downloads"},sidebar:"version-1.14/docs",previous:{title:"Dialogs",permalink:"/python/docs/1.14/dialogs"},next:{title:"Element selectors",permalink:"/python/docs/1.14/selectors"}},h=[{value:"Variations",id:"variations",children:[],level:4},{value:"API reference",id:"api-reference",children:[],level:3}],w={toc:h};function m(e){var a=e.components,n=(0,o.Z)(e,s);return(0,d.kt)("wrapper",(0,t.Z)({},w,n,{components:a,mdxType:"MDXLayout"}),(0,d.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,d.kt)("div",{parentName:"div",className:"admonition-heading"},(0,d.kt)("h5",{parentName:"div"},(0,d.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,d.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,d.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,d.kt)("div",{parentName:"div",className:"admonition-content"},(0,d.kt)("p",{parentName:"div"},"For uploading files, see the ",(0,d.kt)("a",{parentName:"p",href:"/python/docs/1.14/input#upload-files"},"uploading files")," section."))),(0,d.kt)("p",null,"For every attachment downloaded by the page, ",(0,d.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-page#page-event-download"},'page.on("download")')," event is emitted. If you create a browser context with the ",(0,d.kt)("inlineCode",{parentName:"p"},"accept_downloads")," set, all these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the ",(0,d.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-download",title:"Download"},"Download")," object from the event."),(0,d.kt)("p",null,"You can specify where to persist downloaded files using the ",(0,d.kt)("inlineCode",{parentName:"p"},"downloads_path")," option in ",(0,d.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),"."),(0,d.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,d.kt)("div",{parentName:"div",className:"admonition-heading"},(0,d.kt)("h5",{parentName:"div"},(0,d.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,d.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,d.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,d.kt)("div",{parentName:"div",className:"admonition-content"},(0,d.kt)("p",{parentName:"div"},"Downloaded files are deleted when the browser context that produced them is closed."))),(0,d.kt)("p",null,"Here is the simplest way to handle the file download:"),(0,d.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,d.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-py"},'# Start waiting for the download\nwith page.expect_download() as download_info:\n    # Perform the action that initiates download\n    page.click("button#delayed-download")\ndownload = download_info.value\n# Wait for the download process to complete\npath = download.path()\n'))),(0,d.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-py"},'# Start waiting for the download\nasync with page.expect_download() as download_info:\n    # Perform the action that initiates download\n    await page.click("button#delayed-download")\ndownload = await download_info.value\n# Wait for the download process to complete\npath = await download.path()\n')))),(0,d.kt)("h4",{id:"variations"},"Variations"),(0,d.kt)("p",null,"If you have no idea what initiates the download, you can still handle the event:"),(0,d.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,d.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-py"},'page.on("download", lambda download: print(download.path()))\n'))),(0,d.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-py"},'async def handle_download(download):\n    print(await download.path())\npage.on("download", handle_download)\n')))),(0,d.kt)("p",null,"Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve."),(0,d.kt)("h3",{id:"api-reference"},"API reference"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download",title:"Download"},"Download")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-event-download"},'page.on("download")'))))}m.isMDXComponent=!0}}]);