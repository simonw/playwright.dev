"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[73798],{8514:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return h}});var o=a(87462),i=a(63366),n=(a(67294),a(3905)),s=a(26396),r=a(58215),l=["components"],p={id:"class-testoptions",title:"TestOptions"},c=void 0,u={unversionedId:"api/class-testoptions",id:"version-1.16/api/class-testoptions",isDocsHomePage:!1,title:"TestOptions",description:"Playwright Test provides many options to configure test environment, [Browser], [BrowserContext] and more.",source:"@site/versioned_docs/version-1.16/api/class-testoptions.mdx",sourceDirName:"api",slug:"/api/class-testoptions",permalink:"/docs/1.16/api/class-testoptions",tags:[],version:"1.16",frontMatter:{id:"class-testoptions",title:"TestOptions"},sidebar:"version-1.16/api",previous:{title:"TestInfo",permalink:"/docs/1.16/api/class-testinfo"},next:{title:"TestProject",permalink:"/docs/1.16/api/class-testproject"}},m=[{value:"testOptions.acceptDownloads",id:"test-options-accept-downloads",children:[],level:2},{value:"testOptions.actionTimeout",id:"test-options-action-timeout",children:[],level:2},{value:"testOptions.baseURL",id:"test-options-base-url",children:[],level:2},{value:"testOptions.browserName",id:"test-options-browser-name",children:[],level:2},{value:"testOptions.bypassCSP",id:"test-options-bypass-csp",children:[],level:2},{value:"testOptions.channel",id:"test-options-channel",children:[],level:2},{value:"testOptions.colorScheme",id:"test-options-color-scheme",children:[],level:2},{value:"testOptions.contextOptions",id:"test-options-context-options",children:[],level:2},{value:"testOptions.deviceScaleFactor",id:"test-options-device-scale-factor",children:[],level:2},{value:"testOptions.extraHTTPHeaders",id:"test-options-extra-http-headers",children:[],level:2},{value:"testOptions.geolocation",id:"test-options-geolocation",children:[],level:2},{value:"testOptions.hasTouch",id:"test-options-has-touch",children:[],level:2},{value:"testOptions.headless",id:"test-options-headless",children:[],level:2},{value:"testOptions.httpCredentials",id:"test-options-http-credentials",children:[],level:2},{value:"testOptions.ignoreHTTPSErrors",id:"test-options-ignore-https-errors",children:[],level:2},{value:"testOptions.isMobile",id:"test-options-is-mobile",children:[],level:2},{value:"testOptions.javaScriptEnabled",id:"test-options-java-script-enabled",children:[],level:2},{value:"testOptions.launchOptions",id:"test-options-launch-options",children:[],level:2},{value:"testOptions.locale",id:"test-options-locale",children:[],level:2},{value:"testOptions.navigationTimeout",id:"test-options-navigation-timeout",children:[],level:2},{value:"testOptions.offline",id:"test-options-offline",children:[],level:2},{value:"testOptions.permissions",id:"test-options-permissions",children:[],level:2},{value:"testOptions.proxy",id:"test-options-proxy",children:[],level:2},{value:"testOptions.screenshot",id:"test-options-screenshot",children:[],level:2},{value:"testOptions.storageState",id:"test-options-storage-state",children:[],level:2},{value:"testOptions.timezoneId",id:"test-options-timezone-id",children:[],level:2},{value:"testOptions.trace",id:"test-options-trace",children:[],level:2},{value:"testOptions.userAgent",id:"test-options-user-agent",children:[],level:2},{value:"testOptions.video",id:"test-options-video",children:[],level:2},{value:"testOptions.viewport",id:"test-options-viewport",children:[],level:2}],d={toc:m};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Playwright Test provides many options to configure test environment, ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-browser",title:"Browser"},"Browser"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," and more."),(0,n.kt)("p",null,"These options are usually provided in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/test-configuration"},"configuration file")," through ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-testconfig#test-config-use"},"testConfig.use")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-testproject#test-project-use"},"testProject.use"),"."),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    headless: false,\n    viewport: { width: 1280, height: 720 },\n    ignoreHTTPSErrors: true,\n    video: 'on-first-retry',\n  },\n};\nexport default config;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    headless: false,\n    viewport: { width: 1280, height: 720 },\n    ignoreHTTPSErrors: true,\n    video: 'on-first-retry',\n  },\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"Alternatively, with ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-test#test-use"},"test.use(options)")," you can override some options for a file."),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\n// Run tests in this file with portrait-like viewport.\ntest.use({ viewport: { width: 600, height: 900 } });\n\ntest('my portrait test', async ({ page }) => {\n  // ...\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\n// Run tests in this file with portrait-like viewport.\ntest.use({ viewport: { width: 600, height: 900 } });\n\ntest('my portrait test', async ({ page }) => {\n  // ...\n});\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-accept-downloads"},"testOptions.acceptDownloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-action-timeout"},"testOptions.actionTimeout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-base-url"},"testOptions.baseURL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-browser-name"},"testOptions.browserName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-bypass-csp"},"testOptions.bypassCSP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-channel"},"testOptions.channel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-color-scheme"},"testOptions.colorScheme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-context-options"},"testOptions.contextOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-device-scale-factor"},"testOptions.deviceScaleFactor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-extra-http-headers"},"testOptions.extraHTTPHeaders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-geolocation"},"testOptions.geolocation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-has-touch"},"testOptions.hasTouch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-headless"},"testOptions.headless")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-http-credentials"},"testOptions.httpCredentials")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-ignore-https-errors"},"testOptions.ignoreHTTPSErrors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-is-mobile"},"testOptions.isMobile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-java-script-enabled"},"testOptions.javaScriptEnabled")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-launch-options"},"testOptions.launchOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-locale"},"testOptions.locale")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-navigation-timeout"},"testOptions.navigationTimeout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-offline"},"testOptions.offline")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-permissions"},"testOptions.permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-proxy"},"testOptions.proxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-screenshot"},"testOptions.screenshot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-storage-state"},"testOptions.storageState")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-timezone-id"},"testOptions.timezoneId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-trace"},"testOptions.trace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-user-agent"},"testOptions.userAgent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-video"},"testOptions.video")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.16/api/class-testoptions#test-options-viewport"},"testOptions.viewport"))),(0,n.kt)("h2",{id:"test-options-accept-downloads"},"testOptions.acceptDownloads"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Whether to automatically download all the attachments. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," where all the downloads are canceled."),(0,n.kt)("h2",{id:"test-options-action-timeout"},"testOptions.actionTimeout"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,n.kt)("p",null,"Default timeout for each Playwright action in milliseconds, defaults to 0 (no timeout)."),(0,n.kt)("p",null,"This is a default timeout for all Playwright actions, same as configured via ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-page#page-set-default-timeout"},"page.setDefaultTimeout(timeout)"),"."),(0,n.kt)("h2",{id:"test-options-base-url"},"testOptions.baseURL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,n.kt)("p",null,"When using ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-page#page-goto"},"page.goto(url[, options])"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-page#page-route"},"page.route(url, handler[, options])"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-page#page-wait-for-url"},"page.waitForURL(url[, options])"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-page#page-wait-for-request"},"page.waitForRequest(urlOrPredicate[, options])"),", or ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-page#page-wait-for-response"},"page.waitForResponse(urlOrPredicate[, options])")," it takes the base URL in consideration by using the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"},(0,n.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and navigating to ",(0,n.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and navigating to ",(0,n.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html"))),(0,n.kt)("h2",{id:"test-options-browser-name"},"testOptions.browserName"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",'"chromium"|"firefox"|"webkit"',">")),(0,n.kt)("p",null,"Name of the browser that runs tests. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"'chromium'"),". Most of the time you should set ",(0,n.kt)("inlineCode",{parentName:"p"},"browserName")," in your ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-testconfig",title:"TestConfig"},"TestConfig"),":"),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    browserName: 'firefox',\n  },\n};\nexport default config;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    browserName: 'firefox',\n  },\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("h2",{id:"test-options-bypass-csp"},"testOptions.bypassCSP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Toggles bypassing page's Content-Security-Policy."),(0,n.kt)("h2",{id:"test-options-channel"},"testOptions.channel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,n.kt)("p",null,'Browser distribution channel.  Supported values are "chrome", "chrome-beta", "chrome-dev", "chrome-canary", "msedge", "msedge-beta", "msedge-dev", "msedge-canary". Read more about using ',(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/browsers#google-chrome--microsoft-edge"},"Google Chrome and Microsoft Edge"),"."),(0,n.kt)("h2",{id:"test-options-color-scheme"},"testOptions.colorScheme"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",'"light"|"dark"|"no-preference"',">")),(0,n.kt)("p",null,"Emulates ",(0,n.kt)("inlineCode",{parentName:"p"},"'prefers-colors-scheme'")," media feature, supported values are ",(0,n.kt)("inlineCode",{parentName:"p"},"'light'"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"'dark'"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"'no-preference'"),". See ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-page#page-emulate-media"},"page.emulateMedia([options])")," for more details. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"'light'"),"."),(0,n.kt)("h2",{id:"test-options-context-options"},"testOptions.contextOptions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,n.kt)("p",null,"Options used to create the context, as passed to ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-browser#browser-new-context"},"browser.newContext([options])"),". Specific options like ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-testoptions#test-options-viewport"},"testOptions.viewport")," take priority over this."),(0,n.kt)("h2",{id:"test-options-device-scale-factor"},"testOptions.deviceScaleFactor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,n.kt)("p",null,"Specify device scale factor (can be thought of as dpr). Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,n.kt)("h2",{id:"test-options-extra-http-headers"},"testOptions.extraHTTPHeaders"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">")),(0,n.kt)("p",null,"An object containing additional HTTP headers to be sent with every request."),(0,n.kt)("h2",{id:"test-options-geolocation"},"testOptions.geolocation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"latitude")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Latitude between -90 and 90."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"longitude")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Longitude between -180 and 180."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"accuracy")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Non-negative accuracy value. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"0"),".")))),(0,n.kt)("h2",{id:"test-options-has-touch"},"testOptions.hasTouch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Specifies if viewport supports touch events. Defaults to false."),(0,n.kt)("h2",{id:"test-options-headless"},"testOptions.headless"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Whether to run browser in headless mode. More details for ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"Chromium")," and ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode"},"Firefox"),". Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," unless the ",(0,n.kt)("inlineCode",{parentName:"p"},"devtools")," option is ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("h2",{id:"test-options-http-credentials"},"testOptions.httpCredentials"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")))),(0,n.kt)("p",null,"Credentials for ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication"),"."),(0,n.kt)("h2",{id:"test-options-ignore-https-errors"},"testOptions.ignoreHTTPSErrors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h2",{id:"test-options-is-mobile"},"testOptions.isMobile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Whether the ",(0,n.kt)("inlineCode",{parentName:"p"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". Not supported in Firefox."),(0,n.kt)("h2",{id:"test-options-java-script-enabled"},"testOptions.javaScriptEnabled"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Whether or not to enable JavaScript in the context. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("h2",{id:"test-options-launch-options"},"testOptions.launchOptions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,n.kt)("p",null,"Options used to launch the browser, as passed to ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-browsertype#browser-type-launch"},"browserType.launch([options])"),". Specific options ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-testoptions#test-options-headless"},"testOptions.headless")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-testoptions#test-options-channel"},"testOptions.channel")," take priority over this."),(0,n.kt)("h2",{id:"test-options-locale"},"testOptions.locale"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,n.kt)("p",null,"Specify user locale, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"en-GB"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"de-DE"),", etc. Locale will affect ",(0,n.kt)("inlineCode",{parentName:"p"},"navigator.language")," value, ",(0,n.kt)("inlineCode",{parentName:"p"},"Accept-Language")," request header value as well as number and date formatting rules."),(0,n.kt)("h2",{id:"test-options-navigation-timeout"},"testOptions.navigationTimeout"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,n.kt)("p",null,"Timeout for each navigation action in milliseconds. Defaults to 0 (no timeout)."),(0,n.kt)("p",null,"This is a default navigation timeout, same as configured via ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-page#page-set-default-navigation-timeout"},"page.setDefaultNavigationTimeout(timeout)"),"."),(0,n.kt)("h2",{id:"test-options-offline"},"testOptions.offline"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Whether to emulate network being offline. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h2",{id:"test-options-permissions"},"testOptions.permissions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">")),(0,n.kt)("p",null,"A list of permissions to grant to all pages in this context. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-browsercontext#browser-context-grant-permissions"},"browserContext.grantPermissions(permissions[, options])")," for more details."),(0,n.kt)("h2",{id:"test-options-proxy"},"testOptions.proxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"server")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,n.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bypass")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional comma-separated domains to bypass proxy, for example ",(0,n.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional username to use if HTTP proxy requires authentication."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional password to use if HTTP proxy requires authentication.")))),(0,n.kt)("p",null,"Network proxy settings."),(0,n.kt)("h2",{id:"test-options-screenshot"},"testOptions.screenshot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",'"off"|"on"|"only-on-failure"',">")),(0,n.kt)("p",null,"Whether to automatically capture a screenshot after each test. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"'off'"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'off'"),": Do not capture screenshots."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'on'"),": Capture screenshot after each test."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'only-on-failure'"),": Capture screenshot after each test failure.")),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/test-configuration#automatic-screenshots"},"automatic screenshots"),"."),(0,n.kt)("h2",{id:"test-options-storage-state"},"testOptions.storageState"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cookies")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">"," cookies to set for context",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domain")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," domain and path are required"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," domain and path are required"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expires")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Unix time in seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"httpOnly")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secure")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sameSite")," ","<",'"Strict"|"Lax"|"None"',">"," sameSite flag"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"origins")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">"," localStorage to set for context",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"origin")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"localStorage")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")))))))),(0,n.kt)("p",null,"Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-browsercontext#browser-context-storage-state"},"browserContext.storageState([options])"),". Either a path to the file with saved storage, or an object with the following fields:"),(0,n.kt)("h2",{id:"test-options-timezone-id"},"testOptions.timezoneId"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,n.kt)("p",null,"Changes the timezone of the context. See ",(0,n.kt)("a",{parentName:"p",href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"},"ICU's metaZones.txt")," for a list of supported timezone IDs."),(0,n.kt)("h2",{id:"test-options-trace"},"testOptions.trace"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",'"off"|"on"|"retain-on-failure"|"on-first-retry"',">")),(0,n.kt)("p",null,"Whether to record a trace for each test. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"'off'"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'off'"),": Do not record a trace."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'on'"),": Record a trace for each test."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'"),": Record a trace for each test, but remove it from successful test runs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'on-first-retry'"),": Record a trace only when retrying a test for the first time.")),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/test-configuration#record-test-trace"},"recording trace"),"."),(0,n.kt)("h2",{id:"test-options-user-agent"},"testOptions.userAgent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,n.kt)("p",null,"Specific user agent to use in this context."),(0,n.kt)("h2",{id:"test-options-video"},"testOptions.video"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),'|"off"|"on"|"retain-on-failure"|"on-first-retry"',">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mode")," ","<",'"off"|"on"|"retain-on-failure"|"on-first-retry"',">"," Video recording mode."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"size")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Size of the recorded video.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"width")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"height")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")))))),(0,n.kt)("p",null,"Whether to record video for each test. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"'off'"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'off'"),": Do not record video."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'on'"),": Record video for each test."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'"),": Record video for each test, but remove all videos from successful test runs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'on-first-retry'"),": Record video only when retrying a test for the first time.")),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.16/test-configuration#record-video"},"recording video"),"."),(0,n.kt)("h2",{id:"test-options-viewport"},"testOptions.viewport"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"width")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," page width in pixels."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"height")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," page height in pixels.")))),(0,n.kt)("p",null,"Emulates consistent viewport for each page. Defaults to an 1280x720 viewport. ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," disables the default viewport."))}h.isMDXComponent=!0}}]);