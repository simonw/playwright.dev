"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[76837],{75271:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return h},default:function(){return d}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),o=a(26396),p=a(58215),l=["components"],i={id:"test-snapshots",title:"Visual comparisons"},c=void 0,u={unversionedId:"test-snapshots",id:"version-1.15/test-snapshots",isDocsHomePage:!1,title:"Visual comparisons",description:"Playwright Test includes the ability to produce and visually compare screenshots using expect(value).toMatchSnapshot(snapshotName). On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.",source:"@site/versioned_docs/version-1.15/test-snapshots.mdx",sourceDirName:".",slug:"/test-snapshots",permalink:"/docs/1.15/test-snapshots",tags:[],version:"1.15",frontMatter:{id:"test-snapshots",title:"Visual comparisons"},sidebar:"version-1.15/docs",previous:{title:"Test retry",permalink:"/docs/1.15/test-retries"},next:{title:"Advanced: configuration",permalink:"/docs/1.15/test-advanced"}},h=[],m={toc:h};function d(e){var t=e.components,a=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright Test includes the ability to produce and visually compare screenshots using ",(0,r.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)"),". On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('landing.png');\n});\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('landing.png');\n});\n")))),(0,r.kt)("p",null,"When you run above for the first time, test runner will say:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error: example.spec.ts-snapshots/landing-chromium-darwin.png is missing in snapshots, writing actual.\n")),(0,r.kt)("p",null,"That's because there was no golden file for your ",(0,r.kt)("inlineCode",{parentName:"p"},"landing.png")," snapshot. It is now created and is ready to be added to the repository. The name of the folder with the golden expectations starts with the name of your test file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"drwxr-xr-x  5 user  group  160 Jun  4 11:46 .\ndrwxr-xr-x  6 user  group  192 Jun  4 11:45 ..\n-rw-r--r--  1 user  group  231 Jun  4 11:16 example.spec.ts\ndrwxr-xr-x  3 user  group   96 Jun  4 11:46 example.spec.ts-snapshots\n")),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"chromium-darwin")," in the generated snapshot file name - it contains the browser name and the platform. Screenshots differ between browsers and platforms due to different rendering, fonts and more, so you will need different snapshots for them. If you use multiple projects in your ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.15/test-configuration"},"configuration file"),", project name will be used instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"chromium"),"."),(0,r.kt)("p",null,"If you are not on the same operating system as your CI system, you can use Docker to generate/update the screenshots:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.12.3-focal /bin/bash\nnpm install\nnpx playwright test --update-snapshots\n")),(0,r.kt)("p",null,"Sometimes you need to update the reference screenshot, for example when the page has changed. Do this with the  ",(0,r.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --update-snapshots\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshotName")," is ",(0,r.kt)("em",{parentName:"p"},"not a path")," relative to the test file, so don't try to use it like ",(0,r.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot('../../test-snapshots/snapshot.png')"),"."),(0,r.kt)("p",null,"Playwright Test uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapbox/pixelmatch"},"pixelmatch")," library. You can pass comparison ",(0,r.kt)("inlineCode",{parentName:"p"},"threshold")," as an option."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });\n});\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });\n});\n")))),(0,r.kt)("p",null,"If you'd like to share the default value among all the tests in the project, you can specify it in the playwright config, either globally or per project:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  expect: {\n    toMatchSnapshot: { threshold: 0.1 },\n  },\n};\nexport default config;\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  expect: {\n    toMatchSnapshot: { threshold: 0.1 },\n  },\n};\n")))),(0,r.kt)("p",null,"Apart from screenshots, ",(0,r.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)")," can also be used to compare text, png and jpeg images, or arbitrary binary data. Playwright Test auto-detects the content type and uses the appropriate comparison algorithm."),(0,r.kt)("p",null,"Here we compare text content against the reference."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n"))),(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n")))),(0,r.kt)("p",null,"Snapshots are stored next to the test file, in a separate directory. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"my.spec.ts")," file will produce and store snapshots in the ",(0,r.kt)("inlineCode",{parentName:"p"},"my.spec.ts-snapshots")," directory. You should commit this directory to your version control (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"), and review any changes to it."))}d.isMDXComponent=!0}}]);