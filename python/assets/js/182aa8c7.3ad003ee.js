"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6886],{71958:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return w}});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),i=t(26396),s=t(58215),p=["components"],c={id:"class-timeouterror",title:"TimeoutError"},l=void 0,u={unversionedId:"api/class-timeouterror",id:"api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [Error]",source:"@site/docs/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/python/docs/next/api/class-timeouterror",tags:[],version:"current",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"api",previous:{title:"Selectors",permalink:"/python/docs/next/api/class-selectors"},next:{title:"Touchscreen",permalink:"/python/docs/next/api/class-touchscreen"}},m=[],y={toc:m};function w(e){var r=e.components,t=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-error",title:"Error"},"Error"))),(0,o.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-locator#locator-wait-for"},"locator.wait_for(**kwargs)")," or ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),"."),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    try:\n      page.click("text=Example", timeout=100)\n    except PlaywrightTimeoutError:\n      print("Timeout!")\n    browser.close()\n'))),(0,o.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright, TimeoutError as PlaywrightTimeoutError\n\nasync def run(playwright):\n    browser = await playwright.chromium.launch()\n    page = await browser.new_page()\n    try:\n      await page.click("text=Example", timeout=100)\n    except PlaywrightTimeoutError:\n      print("Timeout!")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\n\nasyncio.run(main())\n')))))}w.isMDXComponent=!0}}]);