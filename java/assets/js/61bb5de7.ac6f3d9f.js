"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9744],{30663:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var s=a(87462),i=a(63366),r=(a(67294),a(3905)),n=(a(26396),a(58215),["components"]),o={id:"class-pageassertions",title:"PageAssertions"},l=void 0,p={unversionedId:"api/class-pageassertions",id:"version-1.17/api/class-pageassertions",isDocsHomePage:!1,title:"PageAssertions",description:"The PageAssertions] class provides assertion methods that can be used to make assertions about the [Page] state in the tests. A new instance of [LocatorAssertions] is created by calling [PlaywrightAssertions.assertThat(page):",source:"@site/versioned_docs/version-1.17/api/class-pageassertions.mdx",sourceDirName:"api",slug:"/api/class-pageassertions",permalink:"/java/docs/api/class-pageassertions",tags:[],version:"1.17",frontMatter:{id:"class-pageassertions",title:"PageAssertions"},sidebar:"version-1.17/api",previous:{title:"Page",permalink:"/java/docs/api/class-page"},next:{title:"PlaywrightAssertions",permalink:"/java/docs/api/class-playwrightassertions"}},c=[{value:"PageAssertions.hasTitle(titleOrRegExp, options)",id:"page-assertions-to-have-title",children:[],level:2},{value:"PageAssertions.hasURL(urlOrRegExp, options)",id:"page-assertions-to-have-url",children:[],level:2},{value:"PageAssertions.not()",id:"page-assertions-not",children:[],level:2}],h={toc:c};function g(e){var t=e.components,a=(0,i.Z)(e,n);return(0,r.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/api/class-page",title:"Page"},"Page")," state in the tests. A new instance of ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," is created by calling ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/api/class-playwrightassertions#playwright-assertions-assert-that-page"},"PlaywrightAssertions.assertThat(page)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'...\nimport static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;\n\npublic class TestPage {\n  ...\n  @Test\n  void navigatesToLoginPage() {\n    ...\n    page.click("#login");\n    assertThat(page).hasURL(Pattern.compile(".*/login"));\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-pageassertions#page-assertions-to-have-title"},"PageAssertions.hasTitle(titleOrRegExp[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-pageassertions#page-assertions-to-have-url"},"PageAssertions.hasURL(urlOrRegExp[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-pageassertions#page-assertions-not"},"PageAssertions.not()"))),(0,r.kt)("h2",{id:"page-assertions-to-have-title"},"PageAssertions.hasTitle(titleOrRegExp","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"titleOrRegExp"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-title-or-reg-exp"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html",title:"Pattern"},"Pattern"),">"," Expected title or RegExp.",(0,r.kt)("a",{href:"#page-assertions-to-have-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"PageAssertions.HasTitleOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-timeout"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to retry the assertion for.",(0,r.kt)("a",{href:"#page-assertions-to-have-title-option-timeout",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#page-assertions-to-have-title-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Ensures the page has the given title."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'assertThat(page).hasTitle("Playwright");\n')),(0,r.kt)("h2",{id:"page-assertions-to-have-url"},"PageAssertions.hasURL(urlOrRegExp","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"urlOrRegExp"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-url-or-reg-exp"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html",title:"Pattern"},"Pattern"),">"," Expected substring or RegExp.",(0,r.kt)("a",{href:"#page-assertions-to-have-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"PageAssertions.HasURLOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-timeout"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to retry the assertion for.",(0,r.kt)("a",{href:"#page-assertions-to-have-url-option-timeout",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#page-assertions-to-have-url-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Ensures the page is navigated to the given URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'assertThat(page).hasURL(".com");\n')),(0,r.kt)("h2",{id:"page-assertions-not"},"PageAssertions.not()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions"),">",(0,r.kt)("a",{href:"#page-assertions-not-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the page URL doesn't contain ",(0,r.kt)("inlineCode",{parentName:"p"},'"error"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'assertThat(page).not().hasURL("error");\n')))}g.isMDXComponent=!0}}]);