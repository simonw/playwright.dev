"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8249],{77489:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return f},default:function(){return d}});var r=t(87462),o=t(63366),l=(t(67294),t(3905)),n=t(26396),c=t(58215),s=["components"],i={id:"class-framelocator",title:"FrameLocator"},m=void 0,p={unversionedId:"api/class-framelocator",id:"version-1.18/api/class-framelocator",isDocsHomePage:!1,title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either page.framelocator(selector) or locator.framelocator(selector) method.",source:"@site/versioned_docs/version-1.18/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/python/docs/1.18/api/class-framelocator",tags:[],version:"1.18",frontMatter:{id:"class-framelocator",title:"FrameLocator"},sidebar:"version-1.18/api",previous:{title:"Frame",permalink:"/python/docs/1.18/api/class-frame"},next:{title:"JSHandle",permalink:"/python/docs/1.18/api/class-jshandle"}},f=[{value:"frame_locator.first",id:"frame-locator-first",children:[],level:2},{value:"frame_locator.frame_locator(selector)",id:"frame-locator-frame-locator",children:[],level:2},{value:"frame_locator.last",id:"frame-locator-last",children:[],level:2},{value:"frame_locator.locator(selector, **kwargs)",id:"frame-locator-locator",children:[],level:2},{value:"frame_locator.nth(index)",id:"frame-locator-nth",children:[],level:2}],h={toc:f};function d(e){var a=e.components,t=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"FrameLocator represents a view to the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-page#page-frame-locator"},"page.frame_locator(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-locator#locator-frame-locator"},"locator.frame_locator(selector)")," method."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.frame_locator("my-frame").locator("text=Submit")\nlocator.click()\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.frame_locator("#my-frame").locator("text=Submit")\nawait locator.click()\n')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strictness")),(0,l.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Throws if there are several frames in DOM:\npage.frame_locator('.result-frame').locator('button').click()\n\n# Works because we explicitly tell locator to pick the first frame:\npage.frame_locator('.result-frame').first.locator('button').click()\n"))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Throws if there are several frames in DOM:\nawait page.frame_locator('.result-frame').locator('button').click()\n\n# Works because we explicitly tell locator to pick the first frame:\nawait page.frame_locator('.result-frame').first.locator('button').click()\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Converting Locator to FrameLocator")),(0,l.kt)("p",null,"If you have a ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-locator",title:"Locator"},"Locator")," object pointing to an ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," it can be converted to ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-framelocator",title:"FrameLocator"},"FrameLocator")," using ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"},(0,l.kt)("inlineCode",{parentName:"a"},":scope"))," CSS selector:"),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'frameLocator = locator.frame_locator(":scope");\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'frameLocator = locator.frame_locator(":scope");\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator#frame-locator-first"},"frame_locator.first")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator#frame-locator-frame-locator"},"frame_locator.frame_locator(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator#frame-locator-last"},"frame_locator.last")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator#frame-locator-locator"},"frame_locator.locator(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator#frame-locator-nth"},"frame_locator.nth(index)"))),(0,l.kt)("h2",{id:"frame-locator-first"},"frame_locator.first"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the first matching frame."),(0,l.kt)("h2",{id:"frame-locator-frame-locator"},"frame_locator.frame_locator(selector)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A selector to use when resolving DOM element. See ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/selectors"},"working with selectors")," for more details.",(0,l.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,l.kt)("h2",{id:"frame-locator-last"},"frame_locator.last"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the last matching frame."),(0,l.kt)("h2",{id:"frame-locator-locator"},"frame_locator.locator(selector, **kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A selector to use when resolving DOM element. See ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/selectors"},"working with selectors")," for more details.",(0,l.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"has_text"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has-text"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},'"Playwright"')," matches ",(0,l.kt)("inlineCode",{parentName:"li"},"<article><div>Playwright</div></article>"),".",(0,l.kt)("a",{href:"#frame-locator-locator-option-has-text",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-locator",title:"Locator"},"Locator"),">",(0,l.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,l.kt)("h2",{id:"frame-locator-nth"},"frame_locator.nth(index)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">",(0,l.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the n-th matching frame."))}d.isMDXComponent=!0}}]);