"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6874],{15562:function(e,s,t){t.r(s),t.d(s,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return k},default:function(){return h}});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),r=t(26396),p=t(58215),i=["components"],l={id:"class-apiresponseassertions",title:"APIResponseAssertions"},c=void 0,u={unversionedId:"api/class-apiresponseassertions",id:"version-1.19/api/class-apiresponseassertions",isDocsHomePage:!1,title:"APIResponseAssertions",description:"The APIResponseAssertions] class provides assertion methods that can be used to make assertions about the [APIResponse] in the tests. A new instance of [APIResponseAssertions] is created by calling [playwright_assertions.expect(response):",source:"@site/versioned_docs/version-1.19/api/class-apiresponseassertions.mdx",sourceDirName:"api",slug:"/api/class-apiresponseassertions",permalink:"/python/docs/api/class-apiresponseassertions",tags:[],version:"1.19",frontMatter:{id:"class-apiresponseassertions",title:"APIResponseAssertions"}},k=[{value:"api_response_assertions.not_to_be_ok()",id:"api-response-assertions-not-to-be-ok",children:[],level:2},{value:"api_response_assertions.to_be_ok()",id:"api-response-assertions-to-be-ok",children:[],level:2}],d={toc:k};function h(e){var s=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:s,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-apiresponse",title:"APIResponse"},"APIResponse")," in the tests. A new instance of ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-apiresponseassertions",title:"APIResponseAssertions"},"APIResponseAssertions")," is created by calling ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-playwrightassertions#playwright-assertions-expect-api-response"},"playwright_assertions.expect(response)"),":"),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import Page, expect\n\ndef test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    response = page.request.get('https://playwright.dev')\n    expect(response).to_be_ok()\n"))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.async_api import Page, expect\n\nasync def test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    response = await page.request.get('https://playwright.dev')\n    await expect(response).to_be_ok()\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-apiresponseassertions#api-response-assertions-not-to-be-ok"},"api_response_assertions.not_to_be_ok()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok"},"api_response_assertions.to_be_ok()"))),(0,o.kt)("h2",{id:"api-response-assertions-not-to-be-ok"},"api_response_assertions.not_to_be_ok()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-assertions-not-to-be-ok-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#api-response-assertions-not-to-be-ok-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"The opposite of ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok"},"api_response_assertions.to_be_ok()"),"."),(0,o.kt)("h2",{id:"api-response-assertions-to-be-ok"},"api_response_assertions.to_be_ok()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-assertions-to-be-ok-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#api-response-assertions-to-be-ok-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the response status code is within ","[200..299]"," range."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import re\nfrom playwright.sync_api import expect\n\n# ...\nexpect(response).to_be_ok()\n"))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.async_api import expect\n\n# ...\nawait expect(response).to_be_ok()\n")))))}h.isMDXComponent=!0}}]);