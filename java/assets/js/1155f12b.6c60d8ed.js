"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6071],{88725:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var s=e(87462),r=e(63366),i=(e(67294),e(3905)),o=(e(26396),e(58215),["components"]),n={id:"class-playwrightassertions",title:"PlaywrightAssertions"},l=void 0,p={unversionedId:"api/class-playwrightassertions",id:"version-1.17/api/class-playwrightassertions",isDocsHomePage:!1,title:"PlaywrightAssertions",description:"The [PlaywrightAssertions] class provides convenience methods for creating assertions that will wait until the expected condition is met.",source:"@site/versioned_docs/version-1.17/api/class-playwrightassertions.mdx",sourceDirName:"api",slug:"/api/class-playwrightassertions",permalink:"/java/docs/1.17/api/class-playwrightassertions",tags:[],version:"1.17",frontMatter:{id:"class-playwrightassertions",title:"PlaywrightAssertions"},sidebar:"version-1.17/api",previous:{title:"PageAssertions",permalink:"/java/docs/1.17/api/class-pageassertions"},next:{title:"PlaywrightException",permalink:"/java/docs/1.17/api/class-playwrightexception"}},c=[{value:"PlaywrightAssertions.assertThat(locator)",id:"playwright-assertions-assert-that-locator",children:[],level:2},{value:"PlaywrightAssertions.assertThat(page)",id:"playwright-assertions-assert-that-page",children:[],level:2}],h={toc:c};function g(t){var a=t.components,e=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,s.Z)({},h,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-playwrightassertions",title:"PlaywrightAssertions"},"PlaywrightAssertions")," class provides convenience methods for creating assertions that will wait until the expected condition is met."),(0,i.kt)("p",null,"Consider the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'...\nimport static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;\n\npublic class TestExample {\n  ...\n  @Test\n  void statusBecomesSubmitted() {\n    ...\n    page.click("#submit-button");\n    assertThat(page.locator(".status")).hasText("Submitted");\n  }\n}\n')),(0,i.kt)("p",null,"Playwright will be re-testing the node with the selector ",(0,i.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,i.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option."),(0,i.kt)("p",null,"By default, the timeout for assertions is set to 5 seconds."),(0,i.kt)("p",null,"To use Playwright assertions add the following dependency into the ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," of your Maven project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.microsoft.playwright</groupId>\n  <artifactId>assertions</artifactId>\n  <version>1.17.0</version>\n</dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-playwrightassertions#playwright-assertions-assert-that-locator"},"PlaywrightAssertions.assertThat(locator)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-playwrightassertions#playwright-assertions-assert-that-page"},"PlaywrightAssertions.assertThat(page)"))),(0,i.kt)("h2",{id:"playwright-assertions-assert-that-locator"},"PlaywrightAssertions.assertThat(locator)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"locator"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-assert-that-locator-option-locator"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-locator",title:"Locator"},"Locator"),">"," ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-locator",title:"Locator"},"Locator")," object to use for assertions.",(0,i.kt)("a",{href:"#playwright-assertions-assert-that-locator-option-locator",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-assert-that-locator-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),">",(0,i.kt)("a",{href:"#playwright-assertions-assert-that-locator-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," object for the given ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-locator",title:"Locator"},"Locator"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"PlaywrightAssertions.assertThat(locator).isVisible();\n")),(0,i.kt)("h2",{id:"playwright-assertions-assert-that-page"},"PlaywrightAssertions.assertThat(page)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"page"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-assert-that-page-option-page"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page",title:"Page"},"Page"),">"," ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-page",title:"Page"},"Page")," object to use for assertions.",(0,i.kt)("a",{href:"#playwright-assertions-assert-that-page-option-page",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-assert-that-page-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.17/api/class-pageassertions",title:"PageAssertions"},"PageAssertions"),">",(0,i.kt)("a",{href:"#playwright-assertions-assert-that-page-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," object for the given ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page",title:"Page"},"Page"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'PlaywrightAssertions.assertThat(page).hasTitle("News");\n')))}g.isMDXComponent=!0}}]);