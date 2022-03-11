"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1804],{52043:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return n},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var a=i(87462),o=i(63366),s=(i(67294),i(3905)),r=(i(26396),i(58215),["components"]),l={id:"class-video",title:"Video"},n=void 0,d={unversionedId:"api/class-video",id:"version-1.18/api/class-video",isDocsHomePage:!1,title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.18/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/docs/1.18/api/class-video",tags:[],version:"1.18",frontMatter:{id:"class-video",title:"Video"},sidebar:"version-1.18/api",previous:{title:"Tracing",permalink:"/docs/1.18/api/class-tracing"},next:{title:"WebSocket",permalink:"/docs/1.18/api/class-websocket"}},c=[{value:"video.delete()",id:"video-delete",children:[],level:2},{value:"video.path()",id:"video-path",children:[],level:2},{value:"video.saveAs(path)",id:"video-save-as",children:[],level:2}],p={toc:c};function h(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When browser context is created with the ",(0,s.kt)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"console.log(await page.video().path());\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-video#video-delete"},"video.delete()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-video#video-path"},"video.path()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.18/api/class-video#video-save-as"},"video.saveAs(path)"))),(0,s.kt)("h2",{id:"video-delete"},"video.delete()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-delete-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,s.kt)("a",{href:"#video-delete-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),(0,s.kt)("h2",{id:"video-path"},"video.path()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-path-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,s.kt)("a",{href:"#video-path-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),(0,s.kt)("h2",{id:"video-save-as"},"video.saveAs(path)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-option-path"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Path where the video should be saved.",(0,s.kt)("a",{href:"#video-save-as-option-path",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,s.kt)("a",{href:"#video-save-as-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}h.isMDXComponent=!0}}]);