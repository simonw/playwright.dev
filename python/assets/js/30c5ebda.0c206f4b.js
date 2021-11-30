"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3443],{34816:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=a(26396),i=a(58215),c=["components"],l={id:"videos",title:"Videos"},d=void 0,p={unversionedId:"videos",id:"videos",isDocsHomePage:!1,title:"Videos",description:"Playwright can record videos for all pages in a browser context. Videos are saved upon context closure, so make sure to await browser_context.close().",source:"@site/docs/videos.mdx",sourceDirName:".",slug:"/videos",permalink:"/python/docs/next/videos",tags:[],version:"current",frontMatter:{id:"videos",title:"Videos"},sidebar:"docs",previous:{title:"Verification",permalink:"/python/docs/next/verification"},next:{title:"Docker",permalink:"/python/docs/next/docker"}},u=[{value:"API reference",id:"api-reference",children:[],level:3}],v={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright can record videos for all pages in a ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/next/browser-contexts"},"browser context"),". Videos are saved upon context closure, so make sure to await ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext#browser-context-close"},"browser_context.close()"),"."),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'context = browser.new_context(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\ncontext.close()\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'context = await browser.new_context(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait context.close()\n')))),(0,r.kt)("p",null,"You can also specify video size, it defaults to viewport size scaled down to fit 800x800."),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'context = browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 640, "height": 480}\n)\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'context = await browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 640, "height": 480}\n)\n')))),(0,r.kt)("p",null,"Saved video files will appear in the specified folder. They all have generated unique names. For the multi-page scenarios, you can access the video file associated with the page via the ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-video"},"page.video"),"."),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"path = page.video.path()\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"path = await page.video.path()\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the video is only available after the page or browser context is closed."))),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browser#browser-new-page"},"browser.new_page(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-close"},"browser_context.close()"))))}m.isMDXComponent=!0}}]);