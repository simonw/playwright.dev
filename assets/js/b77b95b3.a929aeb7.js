"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5627],{64955:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return g},default:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),s=r(26396),o=r(58215),p=["components"],i={id:"test-reporters",title:"Reporters"},u=void 0,c={unversionedId:"test-reporters",id:"version-1.18/test-reporters",isDocsHomePage:!1,title:"Reporters",description:"- Using reporters",source:"@site/versioned_docs/version-1.18/test-reporters.mdx",sourceDirName:".",slug:"/test-reporters",permalink:"/docs/1.18/test-reporters",tags:[],version:"1.18",frontMatter:{id:"test-reporters",title:"Reporters"},sidebar:"version-1.18/docs",previous:{title:"Parametrize tests",permalink:"/docs/1.18/test-parameterize"},next:{title:"Test retry",permalink:"/docs/1.18/test-retries"}},g=[{value:"Using reporters",id:"using-reporters",children:[{value:"Multiple reporters",id:"multiple-reporters",children:[],level:3},{value:"Reporters on CI",id:"reporters-on-ci",children:[],level:3}],level:2},{value:"Built-in reporters",id:"built-in-reporters",children:[{value:"List reporter",id:"list-reporter",children:[],level:3},{value:"Line reporter",id:"line-reporter",children:[],level:3},{value:"Dot reporter",id:"dot-reporter",children:[],level:3},{value:"HTML reporter",id:"html-reporter",children:[],level:3},{value:"JSON reporter",id:"json-reporter",children:[],level:3},{value:"JUnit reporter",id:"junit-reporter",children:[],level:3},{value:"GitHub Actions annotations",id:"github-actions-annotations",children:[],level:3}],level:2},{value:"Custom reporters",id:"custom-reporters",children:[],level:2},{value:"Third party showcase",id:"third-party-showcase",children:[],level:2}],m={toc:g};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-reporters"},"Using reporters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#built-in-reporters"},"Built-in reporters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-reporters"},"Custom reporters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#third-party-showcase"},"Third party showcase"))),(0,l.kt)("h2",{id:"using-reporters"},"Using reporters"),(0,l.kt)("p",null,"Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters. The easiest way to try out built-in reporters is to pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.18/test-cli"},"command line option"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\n")),(0,l.kt)("p",null,"For more control, you can specify reporters programmatically in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.18/test-configuration"},"configuration file"),"."),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'line',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h3",{id:"multiple-reporters"},"Multiple reporters"),(0,l.kt)("p",null,"You can use multiple reporters at the same time. For example  you can use",(0,l.kt)("inlineCode",{parentName:"p"},"'list'")," for nice terminal output and ",(0,l.kt)("inlineCode",{parentName:"p"},"'json'")," to get a comprehensive json file with the test results."),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [\n    ['list'],\n    ['json', {  outputFile: 'test-results.json' }]\n  ],\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [\n    ['list'],\n    ['json', {  outputFile: 'test-results.json' }]\n  ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h3",{id:"reporters-on-ci"},"Reporters on CI"),(0,l.kt)("p",null,"You can use different reporters locally and on CI. For example, using concise ",(0,l.kt)("inlineCode",{parentName:"p"},"'dot'")," reporter avoids too much output. This is the default on CI."),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Concise 'dot' for CI, default 'list' when running locally\n  reporter: process.env.CI ? 'dot' : 'list',\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Concise 'dot' for CI, default 'list' when running locally\n  reporter: process.env.CI ? 'dot' : 'list',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"built-in-reporters"},"Built-in reporters"),(0,l.kt)("p",null,"All built-in reporters show detailed information about failures, and mostly differ in verbosity for successful runs."),(0,l.kt)("h3",{id:"list-reporter"},"List reporter"),(0,l.kt)("p",null,"List reporter is default (except on CI where the ",(0,l.kt)("inlineCode",{parentName:"p"},"dot")," reporter is default). It prints a line for each test being run."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=list\n")),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'list',\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'list',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=list\nRunning 124 tests using 6 workers\n\n  \u2713 should access error in env (438ms)\n  \u2713 handle long test names (515ms)\n  x 1) render expected (691ms)\n  \u2713 should timeout (932ms)\n    should repeat each:\n  \u2713 should respect enclosing .gitignore (569ms)\n    should teardown env after timeout:\n    should respect excluded tests:\n  \u2713 should handle env beforeEach error (638ms)\n    should respect enclosing .gitignore:\n")),(0,l.kt)("h3",{id:"line-reporter"},"Line reporter"),(0,l.kt)("p",null,"Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\n")),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'line',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"Here is an example output in the middle of a test run. Failures are reported inline."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\nRunning 124 tests using 6 workers\n  1) dot-reporter.spec.ts:20:1 \u203a render expected ===================================================\n\n    Error: expect(received).toBe(expected) // Object.is equality\n\n    Expected: 1\n    Received: 0\n\n[23/124] gitignore.spec.ts - should respect nested .gitignore\n")),(0,l.kt)("h3",{id:"dot-reporter"},"Dot reporter"),(0,l.kt)("p",null,"Dot reporter is very concise - it only produces a single character per successful test run. It is the default on CI and useful where you don't want a lot of output."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\n")),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'dot',\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'dot',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\nRunning 124 tests using 6 workers\n\xb7\xb7\xb7\xb7\xb7\xb7F\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n")),(0,l.kt)("h3",{id:"html-reporter"},"HTML reporter"),(0,l.kt)("p",null,"HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=html\n")),(0,l.kt)("p",null,"By default, HTML report is opened automatically if some of the tests failed. You can control this behavior via the ",(0,l.kt)("inlineCode",{parentName:"p"},"open")," property in the Playwright config. The possible values for that property are ",(0,l.kt)("inlineCode",{parentName:"p"},"always"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"never")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"on-failure")," (default)."),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['html', { open: 'never' }] ],\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['html', { open: 'never' }] ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"By default, report is written into the ",(0,l.kt)("inlineCode",{parentName:"p"},"playwright-report")," folder in the current working directory. One can override that location using the ",(0,l.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_HTML_REPORT")," environment variable or a reporter configuration."),(0,l.kt)("p",null,"In configuration file, pass options directly:"),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['html', { outputFolder: 'my-report' }] ],\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['html', { outputFolder: 'my-report' }] ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"A quick way of opening the last test run report is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright show-report\n")),(0,l.kt)("p",null,"Or if there is a custom folder name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright show-report my-report\n")),(0,l.kt)("h3",{id:"json-reporter"},"JSON reporter"),(0,l.kt)("p",null,"JSON reporter produces an object with all information about the test run."),(0,l.kt)("p",null,"Most likely you want to write the JSON to a file. When running with ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=json"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JSON_OUTPUT_NAME")," environment variable:"),(0,l.kt)(s.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json\n"))),(0,l.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_JSON_OUTPUT_NAME="results.json"\nnpx playwright test --reporter=json\n'))),(0,l.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_JSON_OUTPUT_NAME=results.json\nnpx playwright test --reporter=json\n")))),(0,l.kt)("p",null,"In configuration file, pass options directly:"),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['json', { outputFile: 'results.json' }] ],\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['json', { outputFile: 'results.json' }] ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h3",{id:"junit-reporter"},"JUnit reporter"),(0,l.kt)("p",null,"JUnit reporter produces a JUnit-style xml report."),(0,l.kt)("p",null,"Most likely you want to write the report to an xml file. When running with ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=junit"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME")," environment variable:"),(0,l.kt)(s.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit\n"))),(0,l.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_JUNIT_OUTPUT_NAME="results.xml"\nnpx playwright test --reporter=junit\n'))),(0,l.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml\nnpx playwright test --reporter=junit\n")))),(0,l.kt)("p",null,"In configuration file, pass options directly:"),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['junit', { outputFile: 'results.xml' }] ],\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['junit', { outputFile: 'results.xml' }] ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h3",{id:"github-actions-annotations"},"GitHub Actions annotations"),(0,l.kt)("p",null,"You can use the built in ",(0,l.kt)("inlineCode",{parentName:"p"},"github")," reporter to get automatic failure annotations when running in GitHub actions."),(0,l.kt)("p",null,"Note that all other reporters work on GitHub Actions as well, but do not provide annotations."),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'\n  // default 'list' when running locally\n  reporter: process.env.CI ? 'github' : 'list',\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'\n  // default 'list' when running locally\n  reporter: process.env.CI ? 'github' : 'list',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"custom-reporters"},"Custom reporters"),(0,l.kt)("p",null,"You can create a custom reporter by implementing a class with some of the reporter methods. Learn more about the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-reporter",title:"Reporter"},"Reporter")," API."),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// my-awesome-reporter.ts\nimport { Reporter } from '@playwright/test/reporter';\n\nclass MyReporter implements Reporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\nexport default MyReporter;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// my-awesome-reporter.js\n// @ts-check\n\n/** @implements {import('@playwright/test/reporter').Reporter} */\nclass MyReporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\n\nmodule.exports = MyReporter;\n")))),(0,l.kt)("p",null,"Now use this reporter with ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-testconfig#test-config-reporter"},"testConfig.reporter"),"."),(0,l.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: './my-awesome-reporter.ts',\n};\nexport default config;\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: './my-awesome-reporter.js',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"third-party-showcase"},"Third party showcase"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Allure reporter"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install\nnpm i -D allure-playwright\n\n# Run tests\nnpx playwright test --reporter=line,allure-playwright\n\n# Generate report\nallure generate ./allure-results --clean && allure open ./allure-report\n")))))}d.isMDXComponent=!0}}]);