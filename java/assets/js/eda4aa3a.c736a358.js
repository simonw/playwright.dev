"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7789],{1508:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(7462),l=t(3366),s=(t(7294),t(3905)),r=(t(6396),t(8215),["components"]),o={id:"cli",title:"Command line tools"},i=void 0,c={unversionedId:"cli",id:"version-1.19/cli",isDocsHomePage:!1,title:"Command line tools",description:"Playwright comes with the command line tools.",source:"@site/versioned_docs/version-1.19/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/java/docs/cli",tags:[],version:"1.19",frontMatter:{id:"cli",title:"Command line tools"},sidebar:"version-1.19/docs",previous:{title:"Browser Contexts",permalink:"/java/docs/browser-contexts"},next:{title:"Dialogs",permalink:"/java/docs/dialogs"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Install browsers",id:"install-browsers",children:[],level:2},{value:"Generate code",id:"generate-code",children:[{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[],level:3},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",children:[],level:3}],level:2},{value:"Open pages",id:"open-pages",children:[{value:"Emulate devices",id:"emulate-devices",children:[],level:3},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[],level:3},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[],level:3}],level:2},{value:"Inspect selectors",id:"inspect-selectors",children:[{value:"playwright.$(selector)",id:"playwrightselector",children:[],level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",children:[],level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",children:[],level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",children:[],level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",children:[],level:4}],level:2},{value:"Take screenshot",id:"take-screenshot",children:[],level:2},{value:"Generate PDF",id:"generate-pdf",children:[],level:2},{value:"Install system dependencies",id:"install-system-dependencies",children:[],level:2}],m={toc:p};function d(e){var a=e.components,t=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright comes with the command line tools."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#install-browsers"},"Install browsers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#generate-code"},"Generate code")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#open-pages"},"Open pages")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#inspect-selectors"},"Inspect selectors")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#take-screenshot"},"Take screenshot")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#generate-pdf"},"Generate PDF")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#install-system-dependencies"},"Install system dependencies"))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI\n")),(0,s.kt)("h2",{id:"install-browsers"},"Install browsers"),(0,s.kt)("p",null,"Playwright can install supported browsers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Running without arguments will install default browsers\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install"\n')),(0,s.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Install WebKit\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install webkit"\n')),(0,s.kt)("p",null,"See all supported browsers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install --help"\n')),(0,s.kt)("h2",{id:"generate-code"},"Generate code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,s.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,s.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,s.kt)("h3",{id:"preserve-authenticated-state"},"Preserve authenticated state"),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen  --save-storage=auth.json"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,s.kt)("p",null,"Run with ",(0,s.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --load-storage=auth.json my.web.app"\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --load-storage=auth.json my.web.app"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,s.kt)("h3",{id:"codegen-with-custom-setup"},"Codegen with custom setup"),(0,s.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext#browser-context-route"},"BrowserContext.route(url, handler[, options])"),"), it is possible to call ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-pause"},"Page.pause()")," that will open a separate window with codegen controls."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Make sure to run headed.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      // Setup context however you like.\n      BrowserContext context = browser.newContext(/* pass any options */);\n      context.route("**/*", route -> route.resume());\n      // Pause the page, and start recording manually.\n      Page page = context.newPage();\n      page.pause();\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"open-pages"},"Open pages"),(0,s.kt)("p",null,"With ",(0,s.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Open page in Chromium\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open example.com"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Open page in WebKit\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="wk example.com"\n')),(0,s.kt)("h3",{id:"emulate-devices"},"Emulate devices"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"},(0,s.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Emulate iPhone 11.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='open --device=\"iPhone 11\" wikipedia.org'\n")),(0,s.kt)("h3",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate screen size and color scheme.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --viewport-size=800,600 --color-scheme=dark twitter.com"\n')),(0,s.kt)("h3",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args=\'open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\'\n')),(0,s.kt)("h2",{id:"inspect-selectors"},"Inspect selectors"),(0,s.kt)("p",null,"During ",(0,s.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,s.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,s.kt)("h4",{id:"playwrightselector"},"playwright.$(selector)"),(0,s.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,s.kt)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),(0,s.kt)("p",null,"Same as ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,s.kt)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),(0,s.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,s.kt)("h4",{id:"playwrightlocatorselector"},"playwright.locator(selector)"),(0,s.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,s.kt)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),(0,s.kt)("p",null,"Generates selector for the given element."),(0,s.kt)("h2",{id:"take-screenshot"},"Take screenshot"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# See command help\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="screenshot --help"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='screenshot --device=\"iPhone 11\" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone.png'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Capture a full page screenshot\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='screenshot --full-page en.wikipedia.org wiki-full.png'\n")),(0,s.kt)("h2",{id:"generate-pdf"},"Generate PDF"),(0,s.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# See command help\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="pdf https://en.wikipedia.org/wiki/PDF wiki.pdf"\n')),(0,s.kt)("h2",{id:"install-system-dependencies"},"Install system dependencies"),(0,s.kt)("p",null,"Ubuntu 18.04 and Ubuntu 20.04 system dependencies can get installed automatically. This is useful for CI environments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# See command help\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install-deps"\n')),(0,s.kt)("p",null,"You can also install the dependencies for a single browser only by passing it as an argument:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install-deps chromium"\n')))}d.isMDXComponent=!0}}]);