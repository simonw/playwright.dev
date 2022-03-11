"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5446],{3686:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return h}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),n=(t(6396),t(8215),["components"]),i={id:"class-framelocator",title:"FrameLocator"},c=void 0,s={unversionedId:"api/class-framelocator",id:"version-1.19/api/class-framelocator",isDocsHomePage:!1,title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either Page.frameLocator(selector) or Locator.frameLocator(selector) method.",source:"@site/versioned_docs/version-1.19/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/java/docs/api/class-framelocator",tags:[],version:"1.19",frontMatter:{id:"class-framelocator",title:"FrameLocator"},sidebar:"version-1.19/api",previous:{title:"Frame",permalink:"/java/docs/api/class-frame"},next:{title:"JSHandle",permalink:"/java/docs/api/class-jshandle"}},m=[{value:"FrameLocator.first()",id:"frame-locator-first",children:[],level:2},{value:"FrameLocator.frameLocator(selector)",id:"frame-locator-frame-locator",children:[],level:2},{value:"FrameLocator.last()",id:"frame-locator-last",children:[],level:2},{value:"FrameLocator.locator(selector, options)",id:"frame-locator-locator",children:[],level:2},{value:"FrameLocator.nth(index)",id:"frame-locator-nth",children:[],level:2}],p={toc:m};function h(a){var e=a.components,t=(0,o.Z)(a,n);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"FrameLocator represents a view to the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-frame-locator"},"Page.frameLocator(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-locator#locator-frame-locator"},"Locator.frameLocator(selector)")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Locator locator = page.frameLocator("#my-frame").locator("text=Submit");\nlocator.click();\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strictness")),(0,l.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Throws if there are several frames in DOM:\npage.frame_locator(".result-frame").locator("button").click();\n\n// Works because we explicitly tell locator to pick the first frame:\npage.frame_locator(".result-frame").first().locator("button").click();\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Converting Locator to FrameLocator")),(0,l.kt)("p",null,"If you have a ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-locator",title:"Locator"},"Locator")," object pointing to an ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," it can be converted to ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator")," using ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"},(0,l.kt)("inlineCode",{parentName:"a"},":scope"))," CSS selector:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Locator frameLocator = locator.frameLocator(':scope');\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator#frame-locator-first"},"FrameLocator.first()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator#frame-locator-frame-locator"},"FrameLocator.frameLocator(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator#frame-locator-last"},"FrameLocator.last()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator#frame-locator-locator"},"FrameLocator.locator(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator#frame-locator-nth"},"FrameLocator.nth(index)"))),(0,l.kt)("h2",{id:"frame-locator-first"},"FrameLocator.first()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the first matching frame."),(0,l.kt)("h2",{id:"frame-locator-frame-locator"},"FrameLocator.frameLocator(selector)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," A selector to use when resolving DOM element. See ",(0,l.kt)("a",{parentName:"li",href:"/java/docs/selectors"},"working with selectors")," for more details.",(0,l.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,l.kt)("h2",{id:"frame-locator-last"},"FrameLocator.last()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the last matching frame."),(0,l.kt)("h2",{id:"frame-locator-locator"},"FrameLocator.locator(selector","[, options]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"selector"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," A selector to use when resolving DOM element. See ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/selectors"},"working with selectors")," for more details.",(0,l.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"options")," ","<",(0,l.kt)("inlineCode",{parentName:"p"},"FrameLocator.LocatorOptions"),">"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"setHas"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has"})," ","<",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-locator",title:"Locator"},"Locator"),">"," Matches elements containing an element that matches an inner locator. Inner locator is queried against the outer one. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"article")," that has ",(0,l.kt)("inlineCode",{parentName:"p"},"text=Playwright")," matches ",(0,l.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,l.kt)("a",{href:"#frame-locator-locator-option-has",class:"list-anchor"},"#")),(0,l.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),"s.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"setHasText"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has-text"})," ","<",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html",title:"Pattern"},"Pattern"),">"," Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'"Playwright"')," matches ",(0,l.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,l.kt)("a",{href:"#frame-locator-locator-option-has-text",class:"list-anchor"},"#"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,l.kt)("a",{parentName:"p",href:"/java/docs/api/class-locator",title:"Locator"},"Locator"),">",(0,l.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#")))),(0,l.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,l.kt)("h2",{id:"frame-locator-nth"},"FrameLocator.nth(index)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">",(0,l.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/java/docs/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the n-th matching frame."))}h.isMDXComponent=!0}}]);