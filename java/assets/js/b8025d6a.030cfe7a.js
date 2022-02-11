"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7614],{22870:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=(a(26396),a(58215),["components"]),i={id:"codegen",title:"Test Generator"},l=void 0,c={unversionedId:"codegen",id:"version-1.19/codegen",isDocsHomePage:!1,title:"Test Generator",description:"Playwright comes with the ability to generate tests out of the box.",source:"@site/versioned_docs/version-1.19/codegen.mdx",sourceDirName:".",slug:"/codegen",permalink:"/java/docs/codegen",tags:[],version:"1.19",frontMatter:{id:"codegen",title:"Test Generator"},sidebar:"version-1.19/docs",previous:{title:"Trace Viewer",permalink:"/java/docs/trace-viewer"},next:{title:"Debugging tools",permalink:"/java/docs/debug"}},u=[{value:"Generate tests",id:"generate-tests",children:[],level:2},{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[],level:2},{value:"Record using custom setup",id:"record-using-custom-setup",children:[],level:2},{value:"Emulate devices",id:"emulate-devices",children:[],level:2},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[],level:2},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[],level:2}],p={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright comes with the ability to generate tests out of the box."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generate-tests"},"Generate tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preserve-authenticated-state"},"Preserve authenticated state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#record-using-custom-setup"},"Record using custom setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#emulate-devices"},"Emulate devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"))),(0,r.kt)("h2",{id:"generate-tests"},"Generate tests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright will generate the code for the user interactions. ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,r.kt)("h2",{id:"preserve-authenticated-state"},"Preserve authenticated state"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," at the end of the session. This is useful to separately record authentication step and reuse it later in the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen  --save-storage=auth.json"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,r.kt)("p",null,"Run with ",(0,r.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --load-storage=auth.json my.web.app"\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --load-storage=auth.json my.web.app"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,r.kt)("h2",{id:"record-using-custom-setup"},"Record using custom setup"),(0,r.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext#browser-context-route"},"BrowserContext.route(url, handler[, options])"),"), it is possible to call ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-pause"},"Page.pause()")," that will open a separate window with codegen controls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Make sure to run headed.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      // Setup context however you like.\n      BrowserContext context = browser.newContext(/* pass any options */);\n      context.route("**/*", route -> route.resume());\n      // Pause the page, and start recording manually.\n      Page page = context.newPage();\n      page.pause();\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"emulate-devices"},"Emulate devices"),(0,r.kt)("p",null,"You can record scripts and tests while emulating a device."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Emulate iPhone 11.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='codegen --device=\"iPhone 11\" wikipedia.org'\n")),(0,r.kt)("h2",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),(0,r.kt)("p",null,"You can also record scripts and tests while emulating various browser properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate screen size and color scheme.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --viewport-size=800,600 --color-scheme=dark twitter.com"\n')),(0,r.kt)("h2",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args=\'codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\'\n')))}m.isMDXComponent=!0}}]);