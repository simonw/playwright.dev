"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1804],{2043:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return r},metadata:function(){return n},toc:function(){return h},default:function(){return v}});var i=a(7462),o=a(3366),s=(a(7294),a(3905)),l=(a(6396),a(8215),["components"]),d={id:"class-video",title:"Video"},r=void 0,n={unversionedId:"api/class-video",id:"version-1.18/api/class-video",isDocsHomePage:!1,title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.18/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/java/docs/1.18/api/class-video",tags:[],version:"1.18",frontMatter:{id:"class-video",title:"Video"},sidebar:"version-1.18/api",previous:{title:"Tracing",permalink:"/java/docs/1.18/api/class-tracing"},next:{title:"WebSocket",permalink:"/java/docs/1.18/api/class-websocket"}},h=[{value:"Video.delete()",id:"video-delete",children:[],level:2},{value:"Video.path()",id:"video-path",children:[],level:2},{value:"Video.saveAs(path)",id:"video-save-as",children:[],level:2}],c={toc:h};function v(e){var t=e.components,a=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When browser context is created with the ",(0,s.kt)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(page.video().path());\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-video#video-delete"},"Video.delete()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-video#video-path"},"Video.path()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-video#video-save-as"},"Video.saveAs(path)"))),(0,s.kt)("h2",{id:"video-delete"},"Video.delete()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-delete-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,s.kt)("a",{href:"#video-delete-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),(0,s.kt)("h2",{id:"video-path"},"Video.path()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-path-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">",(0,s.kt)("a",{href:"#video-path-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),(0,s.kt)("h2",{id:"video-save-as"},"Video.saveAs(path)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-option-path"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," Path where the video should be saved.",(0,s.kt)("a",{href:"#video-save-as-option-path",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,s.kt)("a",{href:"#video-save-as-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}v.isMDXComponent=!0}}]);