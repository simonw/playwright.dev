"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1804],{52043:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=i(87462),s=i(63366),o=(i(67294),i(3905)),n=(i(26396),i(58215),["components"]),r={id:"class-video",title:"Video"},d=void 0,l={unversionedId:"api/class-video",id:"version-1.18/api/class-video",isDocsHomePage:!1,title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.18/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/dotnet/docs/1.18/api/class-video",tags:[],version:"1.18",frontMatter:{id:"class-video",title:"Video"},sidebar:"version-1.18/api",previous:{title:"Tracing",permalink:"/dotnet/docs/1.18/api/class-tracing"},next:{title:"WebSocket",permalink:"/dotnet/docs/1.18/api/class-websocket"}},c=[{value:"Video.DeleteAsync()",id:"video-delete",children:[],level:2},{value:"Video.PathAsync()",id:"video-path",children:[],level:2},{value:"Video.SaveAsAsync(path)",id:"video-save-as",children:[],level:2}],h={toc:c};function p(e){var t=e.components,i=(0,s.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When browser context is created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"Console.WriteLine(await page.Video.GetPathAsync());\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-video#video-delete"},"Video.DeleteAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-video#video-path"},"Video.PathAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.18/api/class-video#video-save-as"},"Video.SaveAsAsync(path)"))),(0,o.kt)("h2",{id:"video-delete"},"Video.DeleteAsync()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-delete-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,o.kt)("a",{href:"#video-delete-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),(0,o.kt)("h2",{id:"video-path"},"Video.PathAsync()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-path-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,o.kt)("a",{href:"#video-path-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),(0,o.kt)("h2",{id:"video-save-as"},"Video.SaveAsAsync(path)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-option-path"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," Path where the video should be saved.",(0,o.kt)("a",{href:"#video-save-as-option-path",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,o.kt)("a",{href:"#video-save-as-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}p.isMDXComponent=!0}}]);