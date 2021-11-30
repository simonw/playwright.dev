"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3957],{39361:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=r(87462),a=r(63366),i=(r(67294),r(3905)),n=(r(26396),r(58215),["components"]),s={id:"class-timeouterror",title:"TimeoutError"},c=void 0,l={unversionedId:"api/class-timeouterror",id:"version-1.17/api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [PlaywrightException]",source:"@site/versioned_docs/version-1.17/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/java/docs/api/class-timeouterror",tags:[],version:"1.17",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"version-1.17/api",previous:{title:"Selectors",permalink:"/java/docs/api/class-selectors"},next:{title:"Touchscreen",permalink:"/java/docs/api/class-touchscreen"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"extends: ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwrightexception",title:"PlaywrightException"},"PlaywrightException"))),(0,i.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-locator#locator-wait-for"},"Locator.waitFor([options])")," or ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.*;\n\npublic class TimeoutErrorExample {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.firefox().launch();\n      BrowserContext context = browser.newContext();\n      Page page = context.newPage();\n      try {\n        page.click("text=Example", new Page.ClickOptions().setTimeout(100));\n      } catch (TimeoutError e) {\n        System.out.println("Timeout!");\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);