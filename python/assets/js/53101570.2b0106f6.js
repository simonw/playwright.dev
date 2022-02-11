"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6830],{40313:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return d},default:function(){return u}});var a=s(87462),i=s(63366),n=(s(67294),s(3905)),r=s(26396),o=s(58215),p=["components"],l={id:"class-playwrightassertions",title:"PlaywrightAssertions"},c=void 0,h={unversionedId:"api/class-playwrightassertions",id:"api/class-playwrightassertions",isDocsHomePage:!1,title:"PlaywrightAssertions",description:"The [PlaywrightAssertions] class provides convenience methods for creating assertions that will wait until the expected condition is met.",source:"@site/docs/api/class-playwrightassertions.mdx",sourceDirName:"api",slug:"/api/class-playwrightassertions",permalink:"/python/docs/next/api/class-playwrightassertions",tags:[],version:"current",frontMatter:{id:"class-playwrightassertions",title:"PlaywrightAssertions"},sidebar:"api",previous:{title:"PageAssertions",permalink:"/python/docs/next/api/class-pageassertions"},next:{title:"Request",permalink:"/python/docs/next/api/class-request"}},d=[{value:"playwright_assertions.expect(response)",id:"playwright-assertions-expect-api-response",children:[],level:2},{value:"playwright_assertions.expect(locator)",id:"playwright-assertions-expect-locator",children:[],level:2},{value:"playwright_assertions.expect(page)",id:"playwright-assertions-expect-page",children:[],level:2}],g={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,p);return(0,n.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-playwrightassertions",title:"PlaywrightAssertions"},"PlaywrightAssertions")," class provides convenience methods for creating assertions that will wait until the expected condition is met."),(0,n.kt)("p",null,"Consider the following example:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import Page, expect\n\ndef test_status_becomes_submitted(page: Page) -> None:\n    # ..\n    page.click("#submit-button")\n    expect(page.locator(".status")).to_have_text("Submitted")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.async_api import Page, expect\n\nasync def test_status_becomes_submitted(page: Page) -> None:\n    # ..\n    await page.click("#submit-button")\n    await expect(page.locator(".status")).to_have_text("Submitted")\n')))),(0,n.kt)("p",null,"Playwright will be re-testing the node with the selector ",(0,n.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,n.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option."),(0,n.kt)("p",null,"By default, the timeout for assertions is set to 5 seconds."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-playwrightassertions#playwright-assertions-expect-api-response"},"playwright_assertions.expect(response)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-playwrightassertions#playwright-assertions-expect-locator"},"playwright_assertions.expect(locator)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-playwrightassertions#playwright-assertions-expect-page"},"playwright_assertions.expect(page)"))),(0,n.kt)("h2",{id:"playwright-assertions-expect-api-response"},"playwright_assertions.expect(response)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"response"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-api-response-option-response"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse",title:"APIResponse"},"APIResponse"),">"," ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse",title:"APIResponse"},"APIResponse")," object to use for assertions.",(0,n.kt)("a",{href:"#playwright-assertions-expect-api-response-option-response",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-api-response-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions"),">",(0,n.kt)("a",{href:"#playwright-assertions-expect-api-response-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Creates a ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions")," object for the given ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-apiresponse",title:"APIResponse"},"APIResponse"),"."),(0,n.kt)("h2",{id:"playwright-assertions-expect-locator"},"playwright_assertions.expect(locator)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"locator"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-option-locator"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-locator",title:"Locator"},"Locator"),">"," ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-locator",title:"Locator"},"Locator")," object to use for assertions.",(0,n.kt)("a",{href:"#playwright-assertions-expect-locator-option-locator",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),">",(0,n.kt)("a",{href:"#playwright-assertions-expect-locator-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Creates a ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," object for the given ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-locator",title:"Locator"},"Locator"),"."),(0,n.kt)("h2",{id:"playwright-assertions-expect-page"},"playwright_assertions.expect(page)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"page"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-option-page"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page",title:"Page"},"Page"),">"," ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page",title:"Page"},"Page")," object to use for assertions.",(0,n.kt)("a",{href:"#playwright-assertions-expect-page-option-page",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-pageassertions",title:"PageAssertions"},"PageAssertions"),">",(0,n.kt)("a",{href:"#playwright-assertions-expect-page-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Creates a ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," object for the given ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page",title:"Page"},"Page"),"."))}u.isMDXComponent=!0}}]);