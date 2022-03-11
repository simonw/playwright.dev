"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9244],{41347:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var s=a(87462),n=a(63366),r=(a(67294),a(3905)),o=a(26396),p=a(58215),l=["components"],i={id:"test-snapshots",title:"Visual comparisons"},c=void 0,u={unversionedId:"test-snapshots",id:"test-snapshots",isDocsHomePage:!1,title:"Visual comparisons",description:"Playwright Test includes the ability to produce and visually compare screenshots using await expect(pageOrLocator).toHaveScreenshot(). On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.",source:"@site/docs/test-snapshots.mdx",sourceDirName:".",slug:"/test-snapshots",permalink:"/docs/next/test-snapshots",tags:[],version:"current",frontMatter:{id:"test-snapshots",title:"Visual comparisons"},sidebar:"docs",previous:{title:"Timeouts",permalink:"/docs/next/test-timeouts"},next:{title:"Advanced: configuration",permalink:"/docs/next/test-advanced"}},m=[],h={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright Test includes the ability to produce and visually compare screenshots using ",(0,r.kt)("inlineCode",{parentName:"p"},"await expect(pageOrLocator).toHaveScreenshot()"),". On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  await expect(page).toHaveScreenshot();\n});\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  await expect(page).toHaveScreenshot();\n});\n")))),(0,r.kt)("p",null,"When you run above for the first time, test runner will say:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error: example.spec.ts-snapshots/example-test-1-chromium-darwin.png is missing in snapshots, writing actual.\n")),(0,r.kt)("p",null,"That's because there was no golden file yet. This method took a bunch of screenshots until two consecutive screenshots matched, and saved the last screenshot to file system. It is now ready to be added to the repository."),(0,r.kt)("p",null,"The name of the folder with the golden expectations starts with the name of your test file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"drwxr-xr-x  5 user  group  160 Jun  4 11:46 .\ndrwxr-xr-x  6 user  group  192 Jun  4 11:45 ..\n-rw-r--r--  1 user  group  231 Jun  4 11:16 example.spec.ts\ndrwxr-xr-x  3 user  group   96 Jun  4 11:46 example.spec.ts-snapshots\n")),(0,r.kt)("p",null,"The snapshot name ",(0,r.kt)("inlineCode",{parentName:"p"},"example-test-1-chromium-darwin.png")," consists of a few parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"example-test-1.png")," - an auto-generated name of the snapshot. Alternatively you can specify snapshot name as the first argument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"toMatchSnapshot()")," method:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await expect(page).toHaveScreenshot('landing.png');\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).toHaveScreenshot('landing.png');\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"chromium-darwin")," - the browser name and the platform. Screenshots differ between browsers and platforms due to different rendering, fonts and more, so you will need different snapshots for them. If you use multiple projects in your ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configuration file"),", project name will be used instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"chromium"),"."))),(0,r.kt)("p",null,"If you are not on the same operating system as your CI system, you can use Docker to generate/update the screenshots:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.20.0-focal /bin/bash\nnpm install\nnpx playwright test --update-snapshots\n")),(0,r.kt)("p",null,"Sometimes you need to update the reference screenshot, for example when the page has changed. Do this with the  ",(0,r.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --update-snapshots\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshotName")," also accepts an array of path segments to the snapshot file such as ",(0,r.kt)("inlineCode",{parentName:"p"},"await expect(page).toHaveScreenshot(['relative', 'path', 'to', 'snapshot.png'])"),".\nHowever, this path must stay within the snapshots directory for each test file (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"a.spec.js-snapshots"),"), otherwise it will throw.")),(0,r.kt)("p",null,"Playwright Test uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapbox/pixelmatch"},"pixelmatch")," library. You can ",(0,r.kt)("a",{parentName:"p",href:"./test-assertions#expectpageorlocatortohavescreenshot-options"},"pass various options")," to modify its behavior:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });\n});\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });\n});\n")))),(0,r.kt)("p",null,"If you'd like to share the default value among all the tests in the project, you can specify it in the playwright config, either globally or per project:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  expect: {\n    toHaveScreenshot: { maxDiffPixels: 100 },\n  },\n};\nexport default config;\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  expect: {\n    toHaveScreenshot: { maxDiffPixels: 100 },\n  },\n};\n")))),(0,r.kt)("p",null,"Apart from screenshots, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)")," to compare text or arbitrary binary data. Playwright Test auto-detects the content type and uses the appropriate comparison algorithm."),(0,r.kt)("p",null,"Here we compare text content against the reference."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n")))),(0,r.kt)("p",null,"Snapshots are stored next to the test file, in a separate directory. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"my.spec.ts")," file will produce and store snapshots in the ",(0,r.kt)("inlineCode",{parentName:"p"},"my.spec.ts-snapshots")," directory. You should commit this directory to your version control (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"), and review any changes to it."))}d.isMDXComponent=!0}}]);