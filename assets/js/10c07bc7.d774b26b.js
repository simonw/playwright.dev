"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[40741],{56846:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),l=a(26396),s=a(58215),r=["components"],u={id:"test-timeouts",title:"Timeouts"},p=void 0,m={unversionedId:"test-timeouts",id:"version-1.19/test-timeouts",isDocsHomePage:!1,title:"Timeouts",description:"- Overview",source:"@site/versioned_docs/version-1.19/test-timeouts.mdx",sourceDirName:".",slug:"/test-timeouts",permalink:"/docs/test-timeouts",tags:[],version:"1.19",frontMatter:{id:"test-timeouts",title:"Timeouts"},sidebar:"version-1.19/docs",previous:{title:"Test retry",permalink:"/docs/test-retries"},next:{title:"Visual comparisons",permalink:"/docs/test-snapshots"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Test timeout",id:"test-timeout",children:[{value:"Set test timeout in the config",id:"set-test-timeout-in-the-config",children:[],level:3},{value:"Set timeout for a single test",id:"set-timeout-for-a-single-test",children:[],level:3},{value:"Change timeout from a hook or fixture",id:"change-timeout-from-a-hook-or-fixture",children:[],level:3}],level:2},{value:"Expect timeout",id:"expect-timeout",children:[{value:"Set expect timeout in the config",id:"set-expect-timeout-in-the-config",children:[],level:3},{value:"Set timeout for a single assertion",id:"set-timeout-for-a-single-assertion",children:[],level:3}],level:2},{value:"Action and navigation timeouts",id:"action-and-navigation-timeouts",children:[{value:"Set action and navigation timeouts in the config",id:"set-action-and-navigation-timeouts-in-the-config",children:[],level:3},{value:"Set timeout for a single action",id:"set-timeout-for-a-single-action",children:[],level:3}],level:2},{value:"Global timeout",id:"global-timeout",children:[],level:2}],g={toc:c};function d(t){var e=t.components,a=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-timeout"},"Test timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#expect-timeout"},"Expect timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#action-and-navigation-timeouts"},"Action and navigation timeouts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#global-timeout"},"Global timeout"))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Playwright Test has multiple configurable timeouts for various tasks."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Timeout"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Test timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"30000 ms"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Timeout for each test, includes test, hooks and fixtures:",(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,i.kt)("br",null),(0,i.kt)("code",null,"config = { timeout: 60000 }"),(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,i.kt)("br",null),(0,i.kt)("code",null,"{",(0,i.kt)("inlineCode",{parentName:"td"},"test.setTimeout(120000)"),"}`"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Expect timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5000 ms"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Timeout for each assertion:",(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,i.kt)("br",null),(0,i.kt)("code",null,"config = { expect: { timeout: 10000 } }"),(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,i.kt)("br",null),(0,i.kt)("code",null,"{",(0,i.kt)("inlineCode",{parentName:"td"},"expect(locator).toBeVisible({ timeout: 10000 })"),"}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Action timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Timeout for each action:",(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,i.kt)("br",null),(0,i.kt)("code",null,"config = { use: { actionTimeout: 10000 } }"),(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,i.kt)("br",null),(0,i.kt)("code",null,"{",(0,i.kt)("inlineCode",{parentName:"td"},"locator.click({ timeout: 10000 })"),"}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Navigation timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Timeout for each navigation action:",(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,i.kt)("br",null),(0,i.kt)("code",null,"config = { use: { navigationTimeout: 30000 } }"),(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,i.kt)("br",null),(0,i.kt)("code",null,"{",(0,i.kt)("inlineCode",{parentName:"td"},"page.goto('/', { timeout: 30000 })"),"}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Global timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Global timeout for the whole test run:",(0,i.kt)("br",null),(0,i.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set in config"),(0,i.kt)("br",null),(0,i.kt)("code",null,"{",(0,i.kt)("inlineCode",{parentName:"td"},"config = { globalTimeout: 60*60*1000 }"),"}"),(0,i.kt)("br",null))))),(0,i.kt)("h2",{id:"test-timeout"},"Test timeout"),(0,i.kt)("p",null,"Playwright Test enforces a timeout for each test, 30 seconds by default. Time spent by the test function, fixtures, ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"afterEach")," hooks is included in the test timeout."),(0,i.kt)("p",null,"Timed out test produces the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"example.spec.ts:3:1 \u203a basic test ===========================\n\nTimeout of 30000ms exceeded.\n")),(0,i.kt)("p",null,"The same test timeout also applies to ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks."),(0,i.kt)("h3",{id:"set-test-timeout-in-the-config"},"Set test timeout in the config"),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  timeout: 5 * 60 * 1000,\n};\nexport default config;\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 5 * 60 * 1000,\n};\n\nmodule.exports = config;\n")))),(0,i.kt)("p",null,"API reference: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-testconfig#test-config-timeout"},"testConfig.timeout"),"."),(0,i.kt)("h3",{id:"set-timeout-for-a-single-test"},"Set timeout for a single test"),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('slow test', async ({ page }) => {\n  test.slow(); // Easy way to triple the default timeout\n  // ...\n});\n\ntest('very slow test', async ({ page }) => {\n  test.setTimeout(120000);\n  // ...\n});\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('slow test', async ({ page }) => {\n  test.slow(); // Easy way to triple the default timeout\n  // ...\n});\n\ntest('very slow test', async ({ page }) => {\n  test.setTimeout(120000);\n  // ...\n});\n")))),(0,i.kt)("p",null,"API reference: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-set-timeout"},"test.setTimeout(timeout)")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-slow"},"test.slow([condition, description])"),"."),(0,i.kt)("h3",{id:"change-timeout-from-a-hook-or-fixture"},"Change timeout from a hook or fixture"),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest.beforeEach(async ({ page }, testInfo) => {\n  // Extend timeout for all tests running this hook by 30 seconds.\n  testInfo.setTimeout(testInfo.timeout + 30000);\n});\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest.beforeEach(async ({ page }, testInfo) => {\n  // Extend timeout for all tests running this hook by 30 seconds.\n  testInfo.setTimeout(testInfo.timeout + 30000);\n});\n")))),(0,i.kt)("p",null,"API reference: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-set-timeout"},"testInfo.setTimeout(timeout)"),"."),(0,i.kt)("h2",{id:"expect-timeout"},"Expect timeout"),(0,i.kt)("p",null,"Web-first assertions like ",(0,i.kt)("inlineCode",{parentName:"p"},"expect(locator).toHaveText()")," have a separate timeout, 5 seconds by default. Assertion timeout is unrelated to the test timeout. It produces the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'example.spec.ts:3:1 \u203a basic test ===========================\n\nError: expect(received).toHaveText(expected)\n\nExpected string: "my text"\nReceived string: ""\nCall log:\n  - expect.toHaveText with timeout 5000ms\n  - waiting for selector "button"\n')),(0,i.kt)("h3",{id:"set-expect-timeout-in-the-config"},"Set expect timeout in the config"),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  expect: {\n    timeout: 10 * 1000,\n  },\n};\nexport default config;\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  expect: {\n    timeout: 10 * 1000,\n  },\n};\n\nmodule.exports = config;\n")))),(0,i.kt)("p",null,"API reference: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-testconfig#test-config-expect"},"testConfig.expect"),"."),(0,i.kt)("h3",{id:"set-timeout-for-a-single-assertion"},"Set timeout for a single assertion"),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await expect(page.locator('button')).toHaveText('Sign in', { timeout: 10000 });\n});\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await expect(page.locator('button')).toHaveText('Sign in', { timeout: 10000 });\n});\n")))),(0,i.kt)("h2",{id:"action-and-navigation-timeouts"},"Action and navigation timeouts"),(0,i.kt)("p",null,"Test usually performs some actions by calling Playwright APIs, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"locator.click()"),". These actions do not have a timeout by default, but you can set one. Action that timed out produces the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'example.spec.ts:3:1 \u203a basic test ===========================\n\nlocator.click: Timeout 1000ms exceeded.\n=========================== logs ===========================\nwaiting for selector "button"\n============================================================\n')),(0,i.kt)("p",null,"Playwright also allows to set a separate timeout for navigation actions like ",(0,i.kt)("inlineCode",{parentName:"p"},"page.goto()")," because loading a page is usually slower."),(0,i.kt)("h3",{id:"set-action-and-navigation-timeouts-in-the-config"},"Set action and navigation timeouts in the config"),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    actionTimeout: 10 * 1000,\n    navigationTimeout: 30 * 1000,\n  },\n};\nexport default config;\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    actionTimeout: 10 * 1000,\n    navigationTimeout: 30 * 1000,\n  },\n};\n\nmodule.exports = config;\n")))),(0,i.kt)("p",null,"API reference: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-testoptions#test-options-action-timeout"},"testOptions.actionTimeout")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-testoptions#test-options-navigation-timeout"},"testOptions.navigationTimeout"),"."),(0,i.kt)("h3",{id:"set-timeout-for-a-single-action"},"Set timeout for a single action"),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev', { timeout: 30000 });\n  await page.locator('text=Get Started').click({ timeout: 10000 });\n});\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev', { timeout: 30000 });\n  await page.locator('text=Get Started').click({ timeout: 10000 });\n});\n")))),(0,i.kt)("h2",{id:"global-timeout"},"Global timeout"),(0,i.kt)("p",null,"Playwright Test supports a timeout for the whole test run. This prevents excess resource usage when everything went wrong. There is no default global timeout, but you can set a reasonable one in the config, for example one hour. Global timeout produces the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Running 1000 tests using 10 workers\n\n  514 skipped\n  486 passed\n  Timed out waiting 3600s for the entire test run\n")),(0,i.kt)("p",null,"You can set global timeout in the config."),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalTimeout: 60 * 60 * 1000,\n};\nexport default config;\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalTimeout: 60 * 60 * 1000,\n};\n\nmodule.exports = config;\n")))),(0,i.kt)("p",null,"API reference: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-testconfig#test-config-global-timeout"},"testConfig.globalTimeout"),"."))}d.isMDXComponent=!0}}]);