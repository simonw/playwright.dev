"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[291],{86939:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return g},toc:function(){return h},default:function(){return d}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),o=a(26396),r=a(58215),p=["components"],l={id:"test-pom",title:"Page Object Model"},c=void 0,g={unversionedId:"test-pom",id:"version-1.18/test-pom",isDocsHomePage:!1,title:"Page Object Model",description:"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example.",source:"@site/versioned_docs/version-1.18/test-pom.mdx",sourceDirName:".",slug:"/test-pom",permalink:"/docs/1.18/test-pom",tags:[],version:"1.18",frontMatter:{id:"test-pom",title:"Page Object Model"},sidebar:"version-1.18/docs",previous:{title:"Configuration",permalink:"/docs/1.18/test-configuration"},next:{title:"Parallelism and sharding",permalink:"/docs/1.18/test-parallel"}},h=[],w={toc:h};function d(t){var e=t.components,a=(0,i.Z)(t,p);return(0,s.kt)("wrapper",(0,n.Z)({},w,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example."),(0,s.kt)("p",null,"We will create a ",(0,s.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," helper class to encapsulate common operations on the ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.dev")," page. Internally, it will use the ",(0,s.kt)("inlineCode",{parentName:"p"},"page")," object."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright-dev-page.ts\nimport { expect, Locator, Page } from '@playwright/test';\n\nexport class PlaywrightDevPage {\n  readonly page: Page;\n  readonly getStartedLink: Locator;\n  readonly coreConceptsLink: Locator;\n  readonly tocList: Locator;\n\n  constructor(page: Page) {\n    this.page = page;\n    this.getStartedLink = page.locator('text=Get started');\n    this.coreConceptsLink = page.locator('text=Core concepts');\n    this.tocList = page.locator('article ul > li > a');\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async getStarted() {\n    await this.getStartedLink.first().click();\n    await expect(this.coreConceptsLink).toBeVisible();\n  }\n\n  async coreConcepts() {\n    await this.getStarted();\n    await this.page.click('text=Guides');\n    await this.coreConceptsLink.click();\n    await expect(this.page.locator('h1').locator(\"text=Core concepts\")).toBeVisible();\n  }\n}\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright-dev-page.js\nconst { expect } = require('@playwright/test');\n\nexports.PlaywrightDevPage = class PlaywrightDevPage {\n\n  /**\n   * @param {import('@playwright/test').Page} page\n   */\n  constructor(page) {\n    this.page = page;\n    this.getStartedLink = page.locator('text=Get started');\n    this.coreConceptsLink = page.locator('text=Core concepts');\n    this.tocList = page.locator('article ul > li > a');\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async getStarted() {\n    await this.getStartedLink.first().click();\n    await expect(this.coreConceptsLink).toBeVisible();\n  }\n\n  async coreConcepts() {\n    await this.getStarted();\n    await this.page.click('text=Guides');\n    await this.coreConceptsLink.click();\n    await expect(this.page.locator('h1').locator(\"text=Core concepts\")).toBeVisible();\n  }\n}\n")))),(0,s.kt)("p",null,"Now we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," class in our tests."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\nimport { PlaywrightDevPage } from './playwright-dev-page';\n\ntest('Get Started table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  await expect(playwrightDev.tocList).toHaveText([\n    'Installation',\n    'First test',\n    'Writing assertions',\n    'Using test fixtures',\n    'Using test hooks',\n    'Learning the command line',\n    'Creating a configuration file',\n    'Release notes',\n  ]);\n});\n\ntest('Core Concepts table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.coreConcepts();\n  await expect(playwrightDev.tocList.first()).toHaveText('Browser');\n});\n"))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\nconst { PlaywrightDevPage } = require('./playwright-dev-page');\n\ntest('Get Started table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  await expect(playwrightDev.tocList).toHaveText([\n    'Installation',\n    'First test',\n    'Writing assertions',\n    'Using test fixtures',\n    'Using test hooks',\n    'Learning the command line',\n    'Creating a configuration file',\n    'Release notes',\n  ]);\n});\n\ntest('Core Concepts table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.coreConcepts();\n  await expect(playwrightDev.tocList.first()).toHaveText('Browser');\n});\n")))))}d.isMDXComponent=!0}}]);