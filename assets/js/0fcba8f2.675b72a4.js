"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[84666],{16782:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=a(87462),n=a(63366),s=(a(67294),a(3905)),r=(a(26396),a(58215),["components"]),o={id:"class-pageassertions",title:"PageAssertions"},l=void 0,p={unversionedId:"api/class-pageassertions",id:"api/class-pageassertions",isDocsHomePage:!1,title:"PageAssertions",description:"The PageAssertions] class provides assertion methods that can be used to make assertions about the [Page] state in the tests. A new instance of [PageAssertions] is created by calling [expect(page):",source:"@site/docs/api/class-pageassertions.mdx",sourceDirName:"api",slug:"/api/class-pageassertions",permalink:"/docs/next/api/class-pageassertions",tags:[],version:"current",frontMatter:{id:"class-pageassertions",title:"PageAssertions"},sidebar:"api",previous:{title:"Page",permalink:"/docs/next/api/class-page"},next:{title:"PlaywrightAssertions",permalink:"/docs/next/api/class-playwrightassertions"}},c=[{value:"expect(page).toHaveScreenshot(options)",id:"page-assertions-to-have-screenshot",children:[],level:2},{value:"expect(page).toHaveTitle(titleOrRegExp, options)",id:"page-assertions-to-have-title",children:[],level:2},{value:"expect(page).toHaveURL(urlOrRegExp, options)",id:"page-assertions-to-have-url",children:[],level:2},{value:"expect(page).not",id:"page-assertions-not",children:[],level:2}],h={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," state in the tests. A new instance of ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," is created by calling ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-playwrightassertions#playwright-assertions-expect-page"},"expect(page)"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\n\ntest('navigates to login', async ({ page }) => {\n  // ...\n  await page.click('#login');\n  await expect(page).toHaveURL(/.*\\/login/);\n});\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-pageassertions#page-assertions-to-have-screenshot"},"expect(page).toHaveScreenshot([options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-pageassertions#page-assertions-to-have-title"},"expect(page).toHaveTitle(titleOrRegExp[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-pageassertions#page-assertions-to-have-url"},"expect(page).toHaveURL(urlOrRegExp[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-pageassertions#page-assertions-not"},"expect(page).not"))),(0,s.kt)("h2",{id:"page-assertions-to-have-screenshot"},"expect(page).toHaveScreenshot(","[options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"animations"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-animations"})," ","<",'"disabled"',">"," When set to ",(0,s.kt)("inlineCode",{parentName:"li"},'"disabled"'),", stops CSS animations, CSS transitions and Web Animations. Animations get different treatment depending on their duration:",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-animations",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"finite animations are fast-forwarded to completion, so they'll fire ",(0,s.kt)("inlineCode",{parentName:"li"},"transitionend")," event."),(0,s.kt)("li",{parentName:"ul"},"infinite animations are canceled to initial state, and then played over after the screenshot."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"clip"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-clip"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," An object which specifies clipping of the resulting image. Should have the following fields:",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-clip",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," x-coordinate of top-left corner of clip area"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," y-coordinate of top-left corner of clip area"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"width")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," width of clipping area"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"height")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," height of clipping area"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"fullPage"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-full-page"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," When true, takes a screenshot of the full scrollable page, instead of the currently visible viewport. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"false"),".",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-full-page",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"mask"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-mask"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locator",title:"Locator"},"Locator"),">",">"," Specify locators that should be masked when the screenshot is taken. Masked elements will be overlayed with a pink box ",(0,s.kt)("inlineCode",{parentName:"li"},"#FF00FF")," that completely covers its bounding box.",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-mask",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"maxDiffPixelRatio"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-max-diff-pixel-ratio"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," An acceptable ratio of pixels that are different to the total amount of pixels, between ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"1"),". Default is configurable with ",(0,s.kt)("inlineCode",{parentName:"li"},"TestConfig.expect"),". Unset by default.",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-max-diff-pixel-ratio",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"maxDiffPixels"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-max-diff-pixels"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," An acceptable amount of pixels that could be different, default is configurable with ",(0,s.kt)("inlineCode",{parentName:"li"},"TestConfig.expect"),". Default is configurable with ",(0,s.kt)("inlineCode",{parentName:"li"},"TestConfig.expect"),". Unset by default.",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-max-diff-pixels",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"omitBackground"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-omit-background"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Hides default white background and allows capturing screenshots with transparency. Not applicable to ",(0,s.kt)("inlineCode",{parentName:"li"},"jpeg")," images. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"false"),".",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-omit-background",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"threshold"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-threshold"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," An acceptable perceived color difference in the ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/YIQ"},"YIQ color space")," between the same pixel in compared images, between zero (strict) and one (lax), default is configurable with ",(0,s.kt)("inlineCode",{parentName:"li"},"TestConfig.expect"),". Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"0.2"),".",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-threshold",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time to retry the assertion for. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"TestConfig.expect"),".",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-option-timeout",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-screenshot-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,s.kt)("a",{href:"#page-assertions-to-have-screenshot-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures that the page resolves to a given screenshot. This function will re-take screenshots until it matches with the saved expectation."),(0,s.kt)("p",null,"If there's no expectation yet, it will wait until two consecutive screenshots yield the same result, and save the last one as an expectation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).toHaveScreenshot();\n")),(0,s.kt)("h2",{id:"page-assertions-to-have-title"},"expect(page).toHaveTitle(titleOrRegExp","[, options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"titleOrRegExp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-title-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Expected title or RegExp.",(0,s.kt)("a",{href:"#page-assertions-to-have-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time to retry the assertion for. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"TestConfig.expect"),".",(0,s.kt)("a",{href:"#page-assertions-to-have-title-option-timeout",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,s.kt)("a",{href:"#page-assertions-to-have-title-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the page has the given title."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).toHaveTitle(/.*checkout/);\n")),(0,s.kt)("h2",{id:"page-assertions-to-have-url"},"expect(page).toHaveURL(urlOrRegExp","[, options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"urlOrRegExp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-url-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Expected substring or RegExp.",(0,s.kt)("a",{href:"#page-assertions-to-have-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time to retry the assertion for. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"TestConfig.expect"),".",(0,s.kt)("a",{href:"#page-assertions-to-have-url-option-timeout",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,s.kt)("a",{href:"#page-assertions-to-have-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the page is navigated to the given URL."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).toHaveURL(/.*checkout/);\n")),(0,s.kt)("h2",{id:"page-assertions-not"},"expect(page).not"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-pageassertions",title:"PageAssertions"},"PageAssertions"),">")),(0,s.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the page URL doesn't contain ",(0,s.kt)("inlineCode",{parentName:"p"},'"error"'),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).not.toHaveURL('error');\n")))}d.isMDXComponent=!0}}]);