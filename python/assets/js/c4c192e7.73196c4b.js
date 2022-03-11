"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2050],{5176:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),m=t(6396),l=t(8215),i=["components"],o={id:"frames",title:"Frames"},c=void 0,p={unversionedId:"frames",id:"version-1.18/frames",isDocsHomePage:!1,title:"Frames",description:"- Frames",source:"@site/versioned_docs/version-1.18/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/python/docs/1.18/frames",tags:[],version:"1.18",frontMatter:{id:"frames",title:"Frames"},sidebar:"version-1.18/docs",previous:{title:"Extensibility",permalink:"/python/docs/1.18/extensibility"},next:{title:"Handles",permalink:"/python/docs/1.18/handles"}},u=[{value:"Frames",id:"frames",children:[],level:2},{value:"Frame objects",id:"frame-objects",children:[],level:2}],f={toc:u};function d(e){var a=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#frames"},"Frames")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#frame-objects"},"Frame objects"))),(0,s.kt)("h2",{id:"frames"},"Frames"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page",title:"Page"},"Page")," can have one or more ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,s.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,s.kt)("p",null,"A page can have additional frames attached with the ",(0,s.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,s.kt)(m.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Locate element inside frame\n# Get frame using any other selector\nusername = page.frame_locator('.frame-class').locator('#username-input')\nusername.fill('John')\n"))),(0,s.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Locate element inside frame\nusername = await page.frame_locator('.frame-class').locator('#username-input')\nawait username.fill('John')\n")))),(0,s.kt)("h2",{id:"frame-objects"},"Frame objects"),(0,s.kt)("p",null,"One can access frame objects using the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-frame"},"page.frame(**kwargs)")," API:"),(0,s.kt)(m.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Interact with the frame\nframe.fill('#username-input', 'John')\n"))),(0,s.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Interact with the frame\nawait frame.fill('#username-input', 'John')\n")))))}d.isMDXComponent=!0}}]);