"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[96874],{15562:function(e,s,t){t.r(s),t.d(s,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(26396),t(58215),["components"]),r={id:"class-apiresponseassertions",title:"APIResponseAssertions"},p=void 0,l={unversionedId:"api/class-apiresponseassertions",id:"version-1.19/api/class-apiresponseassertions",isDocsHomePage:!1,title:"APIResponseAssertions",description:"The APIResponseAssertions] class provides assertion methods that can be used to make assertions about the [APIResponse] in the tests. A new instance of [APIResponseAssertions] is created by calling [playwrightAssertions.expect(response):",source:"@site/versioned_docs/version-1.19/api/class-apiresponseassertions.mdx",sourceDirName:"api",slug:"/api/class-apiresponseassertions",permalink:"/docs/api/class-apiresponseassertions",tags:[],version:"1.19",frontMatter:{id:"class-apiresponseassertions",title:"APIResponseAssertions"},sidebar:"version-1.19/api",previous:{title:"APIResponse",permalink:"/docs/api/class-apiresponse"},next:{title:"Browser",permalink:"/docs/api/class-browser"}},c=[{value:"apiResponseAssertions.not()",id:"api-response-assertions-not",children:[],level:2},{value:"apiResponseAssertions.toBeOK()",id:"api-response-assertions-to-be-ok",children:[],level:2}],d={toc:c};function u(e){var s=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:s,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-apiresponse",title:"APIResponse"},"APIResponse")," in the tests. A new instance of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions")," is created by calling ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-playwrightassertions#playwright-assertions-expect-api-response"},"playwrightAssertions.expect(response)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\n\ntest('navigates to login', async ({ page }) => {\n  // ...\n  const response = await page.request.get('https://playwright.dev');\n  await expect(response).toBeOK();\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-apiresponseassertions#api-response-assertions-not"},"apiResponseAssertions.not()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok"},"apiResponseAssertions.toBeOK()"))),(0,o.kt)("h2",{id:"api-response-assertions-not"},"apiResponseAssertions.not()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-assertions-not-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions"),">",(0,o.kt)("a",{href:"#api-response-assertions-not-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the response status is not successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await expect(response).not.toBeOK();\n")),(0,o.kt)("h2",{id:"api-response-assertions-to-be-ok"},"apiResponseAssertions.toBeOK()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-assertions-to-be-ok-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#api-response-assertions-to-be-ok-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the response status code is within ","[200..299]"," range."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await expect(response).toBeOK();\n")))}u.isMDXComponent=!0}}]);