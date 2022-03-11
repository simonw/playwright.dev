"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5127],{6678:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var s=a(7462),i=a(3366),r=(a(7294),a(3905)),n=(a(6396),a(8215),["components"]),o={id:"class-playwrightassertions",title:"PlaywrightAssertions"},l=void 0,p={unversionedId:"api/class-playwrightassertions",id:"version-1.18/api/class-playwrightassertions",isDocsHomePage:!1,title:"PlaywrightAssertions",description:"The [PlaywrightAssertions] class provides convenience methods for creating assertions that will wait until the expected condition is met.",source:"@site/versioned_docs/version-1.18/api/class-playwrightassertions.mdx",sourceDirName:"api",slug:"/api/class-playwrightassertions",permalink:"/java/docs/1.18/api/class-playwrightassertions",tags:[],version:"1.18",frontMatter:{id:"class-playwrightassertions",title:"PlaywrightAssertions"},sidebar:"version-1.18/api",previous:{title:"PageAssertions",permalink:"/java/docs/1.18/api/class-pageassertions"},next:{title:"PlaywrightException",permalink:"/java/docs/1.18/api/class-playwrightexception"}},c=[{value:"PlaywrightAssertions.assertThat(response)",id:"playwright-assertions-expect-api-response",children:[],level:2},{value:"PlaywrightAssertions.assertThat(locator)",id:"playwright-assertions-expect-locator",children:[],level:2},{value:"PlaywrightAssertions.assertThat(page)",id:"playwright-assertions-expect-page",children:[],level:2}],h={toc:c};function g(e){var t=e.components,a=(0,i.Z)(e,n);return(0,r.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-playwrightassertions",title:"PlaywrightAssertions"},"PlaywrightAssertions")," class provides convenience methods for creating assertions that will wait until the expected condition is met."),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'...\nimport static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;\n\npublic class TestExample {\n  ...\n  @Test\n  void statusBecomesSubmitted() {\n    ...\n    page.click("#submit-button");\n    assertThat(page.locator(".status")).hasText("Submitted");\n  }\n}\n')),(0,r.kt)("p",null,"Playwright will be re-testing the node with the selector ",(0,r.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option."),(0,r.kt)("p",null,"By default, the timeout for assertions is set to 5 seconds."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-api-response"},"PlaywrightAssertions.assertThat(response)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-locator"},"PlaywrightAssertions.assertThat(locator)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-page"},"PlaywrightAssertions.assertThat(page)"))),(0,r.kt)("h2",{id:"playwright-assertions-expect-api-response"},"PlaywrightAssertions.assertThat(response)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"response"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-api-response-option-response"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-apiresponse",title:"APIResponse"},"APIResponse"),">"," ",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-apiresponse",title:"APIResponse"},"APIResponse")," object to use for assertions.",(0,r.kt)("a",{href:"#playwright-assertions-expect-api-response-option-response",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-api-response-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions"),">",(0,r.kt)("a",{href:"#playwright-assertions-expect-api-response-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions")," object for the given ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-apiresponse",title:"APIResponse"},"APIResponse"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"PlaywrightAssertions.assertThat(response).isOK();\n")),(0,r.kt)("h2",{id:"playwright-assertions-expect-locator"},"PlaywrightAssertions.assertThat(locator)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locator"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-option-locator"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-locator",title:"Locator"},"Locator"),">"," ",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-locator",title:"Locator"},"Locator")," object to use for assertions.",(0,r.kt)("a",{href:"#playwright-assertions-expect-locator-option-locator",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),">",(0,r.kt)("a",{href:"#playwright-assertions-expect-locator-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," object for the given ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-locator",title:"Locator"},"Locator"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"PlaywrightAssertions.assertThat(locator).isVisible();\n")),(0,r.kt)("h2",{id:"playwright-assertions-expect-page"},"PlaywrightAssertions.assertThat(page)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-option-page"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page",title:"Page"},"Page"),">"," ",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page",title:"Page"},"Page")," object to use for assertions.",(0,r.kt)("a",{href:"#playwright-assertions-expect-page-option-page",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-pageassertions",title:"PageAssertions"},"PageAssertions"),">",(0,r.kt)("a",{href:"#playwright-assertions-expect-page-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," object for the given ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.18/api/class-page",title:"Page"},"Page"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PlaywrightAssertions.assertThat(page).hasTitle("News");\n')))}g.isMDXComponent=!0}}]);