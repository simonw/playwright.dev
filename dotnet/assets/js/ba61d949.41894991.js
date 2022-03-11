"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7041],{3298:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),l=a(3366),s=(a(7294),a(3905)),r=(a(6396),a(8215),["components"]),i={id:"cli",title:"Command line tools"},o=void 0,p={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"Command line tools",description:"Playwright comes with the command line tools.",source:"@site/docs/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/dotnet/docs/next/cli",tags:[],version:"current",frontMatter:{id:"cli",title:"Command line tools"},sidebar:"docs",previous:{title:"Browser Contexts",permalink:"/dotnet/docs/next/browser-contexts"},next:{title:"Dialogs",permalink:"/dotnet/docs/next/dialogs"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Install browsers",id:"install-browsers",children:[],level:2},{value:"Generate code",id:"generate-code",children:[{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[],level:3},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",children:[],level:3}],level:2},{value:"Open pages",id:"open-pages",children:[{value:"Emulate devices",id:"emulate-devices",children:[],level:3},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[],level:3},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[],level:3}],level:2},{value:"Inspect selectors",id:"inspect-selectors",children:[{value:"playwright.$(selector)",id:"playwrightselector",children:[],level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",children:[],level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",children:[],level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",children:[],level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",children:[],level:4}],level:2},{value:"Take screenshot",id:"take-screenshot",children:[],level:2},{value:"Generate PDF",id:"generate-pdf",children:[],level:2},{value:"Install system dependencies",id:"install-system-dependencies",children:[],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright comes with the command line tools."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#install-browsers"},"Install browsers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#generate-code"},"Generate code")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#open-pages"},"Open pages")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#inspect-selectors"},"Inspect selectors")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#take-screenshot"},"Take screenshot")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#generate-pdf"},"Generate PDF")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#install-system-dependencies"},"Install system dependencies"))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Use the tools.\npwsh bin\\Debug\\netX\\playwright.ps1 --help\n")),(0,s.kt)("h2",{id:"install-browsers"},"Install browsers"),(0,s.kt)("p",null,"Playwright can install supported browsers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Running without arguments will install default browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,s.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Install WebKit\npwsh bin\\Debug\\netX\\playwright.ps1 install webkit\n")),(0,s.kt)("p",null,"See all supported browsers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 install --help\n")),(0,s.kt)("h2",{id:"generate-code"},"Generate code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 codegen wikipedia.org\n")),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,s.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,s.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,s.kt)("h3",{id:"preserve-authenticated-state"},"Preserve authenticated state"),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 codegen --save-storage=auth.json\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),(0,s.kt)("p",null,"Run with ",(0,s.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 open --load-storage=auth.json my.web.app\npwsh bin\\Debug\\netX\\playwright.ps1 codegen --load-storage=auth.json my.web.app\n# Perform actions in authenticated state.\n")),(0,s.kt)("h3",{id:"codegen-with-custom-setup"},"Codegen with custom setup"),(0,s.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler, options)"),"), it is possible to call ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-pause"},"Page.PauseAsync()")," that will open a separate window with codegen controls."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        var chromium = playwright.Chromium;\n        // Make sure to run headed.\n        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });\n\n        // Setup context however you like.\n        var context = await browser.NewContextAsync(); // Pass any options\n        await context.RouteAsync('**/*', route => route.ContinueAsync());\n\n        // Pause the page, and start recording manually.\n        var page = await context.NewPageAsync();\n        await page.PauseAsync();\n    }\n}\n")),(0,s.kt)("h2",{id:"open-pages"},"Open pages"),(0,s.kt)("p",null,"With ",(0,s.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Open page in Chromium\npwsh bin\\Debug\\netX\\playwright.ps1 open example.com\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Open page in WebKit\npwsh bin\\Debug\\netX\\playwright.ps1 wk example.com\n")),(0,s.kt)("h3",{id:"emulate-devices"},"Emulate devices"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"},(0,s.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate iPhone 11.\npwsh bin\\Debug\\netX\\playwright.ps1 open --device="iPhone 11" wikipedia.org\n')),(0,s.kt)("h3",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Emulate screen size and color scheme.\npwsh bin\\Debug\\netX\\playwright.ps1 open --viewport-size=800,600 --color-scheme=dark twitter.com\n")),(0,s.kt)("h3",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\npwsh bin\\Debug\\netX\\playwright.ps1 open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\n')),(0,s.kt)("h2",{id:"inspect-selectors"},"Inspect selectors"),(0,s.kt)("p",null,"During ",(0,s.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,s.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,s.kt)("h4",{id:"playwrightselector"},"playwright.$(selector)"),(0,s.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,s.kt)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),(0,s.kt)("p",null,"Same as ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,s.kt)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),(0,s.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,s.kt)("h4",{id:"playwrightlocatorselector"},"playwright.locator(selector)"),(0,s.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,s.kt)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),(0,s.kt)("p",null,"Generates selector for the given element."),(0,s.kt)("h2",{id:"take-screenshot"},"Take screenshot"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\npwsh bin\\Debug\\netX\\playwright.ps1 screenshot \\\n    --device=\"iPhone 11\" \\\n    --color-scheme=dark \\\n    --wait-for-timeout=3000 \\\n    twitter.com twitter-iphone.png\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Capture a full page screenshot\npwsh bin\\Debug\\netX\\playwright.ps1 screenshot --full-page en.wikipedia.org wiki-full.png\n")),(0,s.kt)("h2",{id:"generate-pdf"},"Generate PDF"),(0,s.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# See command help\npwsh bin\\Debug\\netX\\playwright.ps1 pdf https://en.wikipedia.org/wiki/PDF wiki.pdf\n")),(0,s.kt)("h2",{id:"install-system-dependencies"},"Install system dependencies"),(0,s.kt)("p",null,"Ubuntu 18.04 and Ubuntu 20.04 system dependencies can get installed automatically. This is useful for CI environments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# See command help\npwsh bin\\Debug\\netX\\playwright.ps1 install-deps\n")),(0,s.kt)("p",null,"You can also install the dependencies for a single browser only by passing it as an argument:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 install-deps chromium\n")),(0,s.kt)("p",null,"It's also possible to combine ",(0,s.kt)("inlineCode",{parentName:"p"},"install-deps")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"install")," and install by that the browsers and OS dependencies with a single command. This would do both for Chromium, but you can also leave it out."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 install --with-deps chromium\n")))}d.isMDXComponent=!0}}]);