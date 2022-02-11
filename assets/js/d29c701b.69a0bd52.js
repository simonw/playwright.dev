"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[25382],{3197:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return g},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),o=a(26396),l=a(58215),r=["components"],p={id:"test-auth",title:"Authentication"},g=void 0,u={unversionedId:"test-auth",id:"version-1.19/test-auth",isDocsHomePage:!1,title:"Authentication",description:"Tests written with Playwright execute in isolated clean-slate environments called browser contexts. Each test gets a brand new page created in a brand new context. This isolation model improves reproducibility and prevents cascading test failures.",source:"@site/versioned_docs/version-1.19/test-auth.mdx",sourceDirName:".",slug:"/test-auth",permalink:"/docs/test-auth",tags:[],version:"1.19",frontMatter:{id:"test-auth",title:"Authentication"},sidebar:"version-1.19/docs",previous:{title:"Assertions",permalink:"/docs/test-assertions"},next:{title:"Command line",permalink:"/docs/test-cli"}},c=[{value:"Sign in with beforeEach",id:"sign-in-with-beforeeach",children:[],level:2},{value:"Reuse signed in state",id:"reuse-signed-in-state",children:[{value:"Sign in via API request",id:"sign-in-via-api-request",children:[],level:3}],level:2},{value:"Multiple signed in roles",id:"multiple-signed-in-roles",children:[],level:2},{value:"Reuse the signed in page in multiple tests",id:"reuse-the-signed-in-page-in-multiple-tests",children:[],level:2}],d={toc:c};function m(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,i.kt)("a",{parentName:"p",href:"/docs/browser-contexts"},"browser contexts"),". Each test gets a brand new page created in a brand new context. This isolation model improves reproducibility and prevents cascading test failures."),(0,i.kt)("p",null,"Below are the typical strategies for implementing the signed-in scenarios."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sign-in-with-beforeeach"},"Sign in with beforeEach")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reuse-signed-in-state"},"Reuse signed in state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multiple-signed-in-roles"},"Multiple signed in roles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reuse-the-signed-in-page-in-multiple-tests"},"Reuse the signed in page in multiple tests"))),(0,i.kt)("h2",{id:"sign-in-with-beforeeach"},"Sign in with beforeEach"),(0,i.kt)("p",null,"This is the simplest way where each test signs in inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach")," hook. It also is the least efficient one in case the log in process has high latencies."),(0,i.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.beforeEach(async ({ page }) => {\n  // Runs before each test and signs in each page.\n  await page.goto('https://github.com/login');\n  await page.click('text=Login');\n  await page.fill('input[name=\"login\"]', 'username');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Submit');\n});\n\ntest('first', async ({ page }) => {\n  // page is signed in.\n});\n\ntest('second', async ({ page }) => {\n  // page is signed in.\n});\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.beforeEach(async ({ page }) => {\n  // Runs before each test and signs in each page.\n  await page.goto('https://github.com/login');\n  await page.click('text=Login');\n  await page.fill('input[name=\"login\"]', 'username');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Submit');\n});\n\ntest('first', async ({ page }) => {\n  // page is signed in.\n});\n\ntest('second', async ({ page }) => {\n  // page is signed in.\n});\n")))),(0,i.kt)("p",null,"Redoing login for every test can slow down test execution. To mitigate that, reuse existing authentication state instead."),(0,i.kt)("h2",{id:"reuse-signed-in-state"},"Reuse signed in state"),(0,i.kt)("p",null,"Playwright provides a way to reuse the signed-in state in the tests. That way you can log in only once and then skip the log in step for all of the tests."),(0,i.kt)("p",null,"Create a new global setup script:"),(0,i.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// global-setup.ts\nimport { chromium, FullConfig } from '@playwright/test';\n\nasync function globalSetup(config: FullConfig) {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  // Save signed-in state to 'storageState.json'.\n  await page.context().storageState({ path: 'storageState.json' });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async config => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  // Save signed-in state to 'storageState.json'.\n  await page.context().storageState({ path: 'storageState.json' });\n  await browser.close();\n};\n")))),(0,i.kt)("p",null,"Register global setup script in the Playwright configuration file:"),(0,i.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    // Tell all tests to load signed-in state from 'storageState.json'.\n    storageState: 'storageState.json'\n  }\n};\nexport default config;\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    // Tell all tests to load signed-in state from 'storageState.json'.\n    storageState: 'storageState.json'\n  }\n};\nmodule.exports = config;\n")))),(0,i.kt)("p",null,"Tests start already authenticated because we specify ",(0,i.kt)("inlineCode",{parentName:"p"},"storageState")," that was populated by global setup."),(0,i.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest('test', async ({ page }) => {\n  // page is signed in.\n});\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest('test', async ({ page }) => {\n  // page is signed in.\n});\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you can log in once and commit the ",(0,i.kt)("inlineCode",{parentName:"p"},"storageState.json")," into the repository, you won't need the global setup at all, just specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"storageState.json")," in Playwright Config as above and it'll be picked up."))),(0,i.kt)("h3",{id:"sign-in-via-api-request"},"Sign in via API request"),(0,i.kt)("p",null,"If your web application supports signing in via API, you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," to simplify sign in flow. Global setup script from the example above would change like this:"),(0,i.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// global-setup.ts\nimport { request } from '@playwright/test';\n\nasync function globalSetup() {\n  const requestContext = await request.newContext();\n  await requestContext.post('https://github.com/login', {\n    form: {\n      'user': 'user',\n      'password': 'password'\n    }\n  });\n  // Save signed-in state to 'storageState.json'.\n  await requestContext.storageState({ path: 'storageState.json' });\n  await requestContext.dispose();\n}\n\nexport default globalSetup;\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst { request } = require('@playwright/test');\n\nmodule.exports = async () => {\n  const requestContext = await request.newContext();\n  await requestContext.post('https://github.com/login', {\n    form: {\n      'user': 'user',\n      'password': 'password'\n    }\n  });\n  // Save signed-in state to 'storageState.json'.\n  await requestContext.storageState({ path: 'storageState.json' });\n  await requestContext.dispose();\n}\n\nexport default globalSetup;\n")))),(0,i.kt)("h2",{id:"multiple-signed-in-roles"},"Multiple signed in roles"),(0,i.kt)("p",null,"Sometimes you have more than one signed-in user in your end to end tests. You can achieve that via logging in for these users multiple times in globalSetup and saving that state into different files."),(0,i.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// global-setup.ts\nimport { chromium, FullConfig } from '@playwright/test';\n\nasync function globalSetup(config: FullConfig) {\n  const browser = await chromium.launch();\n  const adminPage = await browser.newPage();\n  // ... log in\n  await adminPage.context().storageState({ path: 'adminStorageState.json' });\n\n  const userPage = await browser.newPage();\n  // ... log in\n  await userPage.context().storageState({ path: 'userStorageState.json' });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async config => {\n  const browser = await chromium.launch();\n  const adminPage = await browser.newPage();\n  // ... log in\n  await adminPage.context().storageState({ path: 'adminStorageState.json' });\n\n  const userPage = await browser.newPage();\n  // ... log in\n  await userPage.context().storageState({ path: 'userStorageState.json' });\n  await browser.close();\n};\n")))),(0,i.kt)("p",null,"After that you can specify the user to use for each test file or each test group:"),(0,i.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.use({ storageState: 'adminStorageState.json' });\n\ntest('admin test', async ({ page }) => {\n  // page is signed in as admin.\n});\n\ntest.describe(() => {\n  test.use({ storageState: 'userStorageState.json' });\n\n  test('user test', async ({ page }) => {\n    // page is signed in as a user.\n  });\n});\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.use({ storageState: 'adminStorageState.json' });\n\ntest('admin test', async ({ page }) => {\n  // page is signed in as amin.\n});\n\ntest.describe(() => {\n  test.use({ storageState: 'userStorageState.json' });\n\n  test('user test', async ({ page }) => {\n    // page is signed in as a user.\n  });\n});\n")))),(0,i.kt)("h2",{id:"reuse-the-signed-in-page-in-multiple-tests"},"Reuse the signed in page in multiple tests"),(0,i.kt)("p",null,"Although discouraged, sometimes it is necessary to sacrifice the isolation and run a number of tests in the same page. In that case, you can log into that page once in ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAll")," and then use that same page in all the tests. Note that you need to run these tests serially using ",(0,i.kt)("inlineCode",{parentName:"p"},"test.describe.serial")," in order to achieve that:"),(0,i.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\ntest.describe.configure({ mode: 'serial' });\n\nlet page: Page;\n\ntest.beforeAll(async ({ browser }) => {\n  // Create page once and sign in.\n  page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('first test', async () => {\n  // page is signed in.\n});\n\ntest('second test', async () => {\n  // page is signed in.\n});\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\n/** @type {import('@playwright/test').Page} */\nlet page;\n\ntest.beforeAll(async ({ browser }) => {\n  // Create page yourself and sign in.\n  page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('first test', async () => {\n  // page is signed in.\n});\n\ntest('second test', async () => {\n  // page is signed in.\n});\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"storageState")," property when you are creating the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-browser#browser-new-page"},"browser.newPage([options])")," in order to pass it an existing logged in state."))))}m.isMDXComponent=!0}}]);