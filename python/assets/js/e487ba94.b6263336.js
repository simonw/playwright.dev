"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7587],{64121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return w},toc:function(){return u},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=n(26396),c=n(58215),i=["components"],l={id:"browser-contexts",title:"Browser Contexts"},p=void 0,w={unversionedId:"browser-contexts",id:"browser-contexts",isDocsHomePage:!1,title:"Browser Contexts",description:"- Browser context",source:"@site/docs/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/python/docs/next/browser-contexts",tags:[],version:"current",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"docs",previous:{title:"Browsers",permalink:"/python/docs/next/browsers"},next:{title:"Chrome Extensions",permalink:"/python/docs/next/chrome-extensions"}},u=[{value:"Browser context",id:"browser-context",children:[],level:2},{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#browser-context"},"Browser context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts"))),(0,o.kt)("h2",{id:"browser-context"},"Browser context"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/intro"},"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"browser = playwright.chromium.launch()\ncontext = browser.new_context()\npage = context.new_page()\n"))),(0,o.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"browser = await playwright.chromium.launch()\ncontext = await browser.new_context()\npage = await context.new_page()\n")))),(0,o.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    iphone_11 = p.devices['iPhone 11 Pro']\n    browser = p.webkit.launch(headless=False)\n    context = browser.new_context(\n        **iphone_11,\n        locale='de-DE',\n        geolocation={ 'longitude': 12.492507, 'latitude': 41.889938 },\n        permissions=['geolocation']\n    )\n    page = context.new_page()\n    browser.close()\n"))),(0,o.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        iphone_11 = p.devices['iPhone 11 Pro']\n        browser = await p.chromium.launch()\n        context = await browser.new_context(\n            **iphone_11,\n            locale='de-DE',\n            geolocation={ 'longitude': 12.492507, 'latitude': 41.889938 },\n            permissions=['geolocation'],\n            color_scheme='dark',\n        )\n        page = await browser.new_page()\n        await browser.close()\n\nasyncio.run(main())\n")))),(0,o.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = browser.new_context()\n    admin_context = browser.new_context()\n\n    # create pages and interact with contexts independently\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"))),(0,o.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = await browser.new_context()\n    admin_context = await browser.new_context()\n\n    # create pages and interact with contexts independently\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-add-cookies"},"browser_context.add_cookies(cookies)"))))}h.isMDXComponent=!0}}]);