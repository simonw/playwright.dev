"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9289],{9602:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return v}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),s=(a(6396),a(8215),["components"]),i={id:"videos",title:"Videos"},c=void 0,l={unversionedId:"videos",id:"version-1.18/videos",isDocsHomePage:!1,title:"Videos",description:"Playwright can record videos for all pages in a browser context. Videos are saved upon context closure, so make sure to await BrowserContext.close().",source:"@site/versioned_docs/version-1.18/videos.mdx",sourceDirName:".",slug:"/videos",permalink:"/java/docs/1.18/videos",tags:[],version:"1.18",frontMatter:{id:"videos",title:"Videos"},sidebar:"version-1.18/docs",previous:{title:"Verification",permalink:"/java/docs/1.18/verification"},next:{title:"Docker",permalink:"/java/docs/1.18/docker"}},d=[{value:"API reference",id:"api-reference",children:[],level:3}],p={toc:d};function v(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Playwright can record videos for all pages in a ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.18/browser-contexts"},"browser context"),". Videos are saved upon context closure, so make sure to await ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-browsercontext#browser-context-close"},"BrowserContext.close()"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'context = browser.newContext(new Browser.NewContextOptions().setRecordVideoDir(Paths.get("videos/")));\n// Make sure to close, so that videos are saved.\ncontext.close();\n')),(0,n.kt)("p",null,"You can also specify video size, it defaults to viewport size scaled down to fit 800x800."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setRecordVideoDir(Paths.get("videos/"))\n  .setRecordVideoSize(640, 480));\n')),(0,n.kt)("p",null,"Saved video files will appear in the specified folder. They all have generated unique names. For the multi-page scenarios, you can access the video file associated with the page via the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page#page-video"},"Page.video()"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"path = page.video().path();\n")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Note that the video is only available after the page or browser context is closed."))),(0,n.kt)("h3",{id:"api-reference"},"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browser#browser-new-page"},"Browser.newPage([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browsercontext#browser-context-close"},"BrowserContext.close()"))))}v.isMDXComponent=!0}}]);