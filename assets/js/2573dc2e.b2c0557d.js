"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[24042],{38141:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),s=a(26396),i=a(58215),o=["components"],p={id:"test-parallel",title:"Parallelism and sharding"},u=void 0,m={unversionedId:"test-parallel",id:"version-1.17/test-parallel",isDocsHomePage:!1,title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time.",source:"@site/versioned_docs/version-1.17/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/docs/test-parallel",tags:[],version:"1.17",frontMatter:{id:"test-parallel",title:"Parallelism and sharding"},sidebar:"version-1.17/docs",previous:{title:"Page Object Model",permalink:"/docs/test-pom"},next:{title:"Parameterize tests",permalink:"/docs/test-parameterize"}},d=[{value:"Worker processes",id:"worker-processes",children:[],level:2},{value:"Limit workers",id:"limit-workers",children:[],level:2},{value:"Disable parallelism",id:"disable-parallelism",children:[],level:2},{value:"Parallelize tests in a single file",id:"parallelize-tests-in-a-single-file",children:[],level:2},{value:"Shard tests between multiple machines",id:"shard-tests-between-multiple-machines",children:[],level:2},{value:"Limit failures and fail fast",id:"limit-failures-and-fail-fast",children:[],level:2},{value:"Worker index and parallel index",id:"worker-index-and-parallel-index",children:[],level:2}],c={toc:d};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, ",(0,r.kt)("strong",{parentName:"li"},"test files")," are run in parallel. Tests in a single file are run in order, in the same worker process."),(0,r.kt)("li",{parentName:"ul"},"Group tests with ",(0,r.kt)("a",{parentName:"li",href:"#parallelize-tests-in-a-single-file"},(0,r.kt)("inlineCode",{parentName:"a"},"test.describe.parallel"))," to run ",(0,r.kt)("strong",{parentName:"li"},"tests in a single file")," in parallel."),(0,r.kt)("li",{parentName:"ul"},"To ",(0,r.kt)("strong",{parentName:"li"},"disable")," parallelism limit the number of ",(0,r.kt)("a",{parentName:"li",href:"#disable-parallelism"},"workers to one"),".")),(0,r.kt)("p",null,"You can control the number of ",(0,r.kt)("a",{parentName:"p",href:"#limit-workers"},"parallel worker processes")," and ",(0,r.kt)("a",{parentName:"p",href:"#limit-failures-and-fail-fast"},"limit the number of failures")," in the whole test suite for efficiency."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#worker-processes"},"Worker processes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#limit-workers"},"Limit workers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disable-parallelism"},"Disable parallelism")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#parallelize-tests-in-a-single-file"},"Parallelize tests in a single file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shard-tests-between-multiple-machines"},"Shard tests between multiple machines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#limit-failures-and-fail-fast"},"Limit failures and fail fast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#worker-index-and-parallel-index"},"Worker index and parallel index"))),(0,r.kt)("h2",{id:"worker-processes"},"Worker processes"),(0,r.kt)("p",null,"All tests run in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,r.kt)("p",null,"You can't communicate between the workers. Playwright Test reuses a single worker as much as it can to make testing faster, so multiple test files are usually run in a single worker one after another."),(0,r.kt)("p",null,"Workers are always shutdown after a ",(0,r.kt)("a",{parentName:"p",href:"/docs/test-retries#failures"},"test failure")," to guarantee pristine environment for following tests."),(0,r.kt)("h2",{id:"limit-workers"},"Limit workers"),(0,r.kt)("p",null,"You can control the maximum number of parallel worker processes via ",(0,r.kt)("a",{parentName:"p",href:"/docs/test-cli"},"command line")," or in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration file"),"."),(0,r.kt)("p",null,"From the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers 4\n")),(0,r.kt)("p",null,"In the configuration file:"),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",{id:"disable-parallelism"},"Disable parallelism"),(0,r.kt)("p",null,"You can disable any parallelism by allowing just a single worker at any time. Either set ",(0,r.kt)("inlineCode",{parentName:"p"},"workers: 1")," option in the configuration file or pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--workers=1")," to the command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers=1\n")),(0,r.kt)("h2",{id:"parallelize-tests-in-a-single-file"},"Parallelize tests in a single file"),(0,r.kt)("p",null,"By default, tests in a single file are run in order. If you have many independent tests in a single file, you might want to run them in parallel with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-describe-parallel"},"test.describe.parallel(title, callback)"),"."),(0,r.kt)("p",null,"Note that parallel tests are executed in separate worker processes and cannot share any state or global variables. Each test executes all relevant hooks just for itself, including ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"afterAll"),"."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe.parallel('suite', () => {\n  test('runs in parallel 1', async ({ page }) => { /* ... */ });\n  test('runs in parallel 2', async ({ page }) => { /* ... */ });\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe.parallel('suite', () => {\n  test('runs in parallel 1', async ({ page }) => { /* ... */ });\n  test('runs in parallel 2', async ({ page }) => { /* ... */ });\n});\n")))),(0,r.kt)("h2",{id:"shard-tests-between-multiple-machines"},"Shard tests between multiple machines"),(0,r.kt)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")),(0,r.kt)("p",null,"That way your test suite completes 3 times faster."),(0,r.kt)("h2",{id:"limit-failures-and-fail-fast"},"Limit failures and fail fast"),(0,r.kt)("p",null,"You can limit the number of failed tests in the whole test suite by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"maxFailures")," config option or passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-failures")," command line flag."),(0,r.kt)("p",null,'When running with "max failures" set, Playwright Test will stop after reaching this number of failed tests and skip any tests that were not executed yet. This is useful to avoid wasting resources on broken test suites.'),(0,r.kt)("p",null,"Passing command line option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --max-failures=10\n")),(0,r.kt)("p",null,"Setting in the configuration file:"),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\nexport default config;\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",{id:"worker-index-and-parallel-index"},"Worker index and parallel index"),(0,r.kt)("p",null,"Each worker process is assigned two ids: a unique worker index that starts with 1, and a parallel index that is between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"workers - 1"),". When a worker is restarted, for example after a failure, the new worker process has the same ",(0,r.kt)("inlineCode",{parentName:"p"},"parallelIndex")," and a new ",(0,r.kt)("inlineCode",{parentName:"p"},"workerIndex"),"."),(0,r.kt)("p",null,"You can read an index from environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.TEST_PARALLEL_INDEX"),", or access them through ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-worker-index"},"testInfo.workerIndex")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-parallel-index"},"testInfo.parallelIndex"),"."))}k.isMDXComponent=!0}}]);