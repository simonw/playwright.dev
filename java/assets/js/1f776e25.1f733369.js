"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7947],{56669:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=(n(26396),n(58215),["components"]),l={id:"inspector",title:"Inspector"},s=void 0,p={unversionedId:"inspector",id:"version-1.15/inspector",isDocsHomePage:!1,title:"Inspector",description:"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts.",source:"@site/versioned_docs/version-1.15/inspector.mdx",sourceDirName:".",slug:"/inspector",permalink:"/java/docs/1.15/inspector",tags:[],version:"1.15",frontMatter:{id:"inspector",title:"Inspector"},sidebar:"version-1.15/docs",previous:{title:"Input",permalink:"/java/docs/1.15/input"},next:{title:"Multi-page scenarios",permalink:"/java/docs/1.15/multi-pages"}},c=[{value:"Open Playwright Inspector",id:"open-playwright-inspector",children:[],level:2},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",children:[],level:2},{value:"Using Browser Developer Tools",id:"using-browser-developer-tools",children:[],level:2},{value:"Debugging Selectors",id:"debugging-selectors",children:[{value:"playwright.$(selector)",id:"playwrightselector",children:[],level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",children:[],level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",children:[],level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",children:[],level:4}],level:2},{value:"Recording scripts",id:"recording-scripts",children:[],level:2}],h={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts."),(0,r.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#open-playwright-inspector"},"Open Playwright Inspector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#stepping-through-the-playwright-script"},"Stepping through the Playwright script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-browser-developer-tools"},"Using Browser Developer Tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#debugging-selectors"},"Debugging Selectors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#recording-scripts"},"Recording scripts"))),(0,r.kt)("h2",{id:"open-playwright-inspector"},"Open Playwright Inspector"),(0,r.kt)("p",null,"There are several ways of opening Playwright Inspector:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPWDEBUG=1 PLAYWRIGHT_JAVA_SRC=<java src root> mvn test\n\n# Windows with cmd.exe\nset PLAYWRIGHT_JAVA_SRC=<java src root>\nset PWDEBUG=1\nmvn test\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_JAVA_SRC="<java src root>"\n$env:PWDEBUG=1\nmvn test\n')),(0,r.kt)("p",{parentName:"li"},"Additional useful defaults are configured when ",(0,r.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Browsers launch in the headed mode"),(0,r.kt)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.15/api/class-page#page-pause"},"Page.pause()")," method from your script when running in headed browser."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Pause on the following line.\npage.pause();\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.15/cli"},"CLI"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')))),(0,r.kt)("h2",{id:"stepping-through-the-playwright-script"},"Stepping through the Playwright script"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),(0,r.kt)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),(0,r.kt)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",(0,r.kt)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),(0,r.kt)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),(0,r.kt)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),(0,r.kt)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),(0,r.kt)("p",null,"If actionability can't be reached, it'll show action as pending:"),(0,r.kt)("img",{width:"712",alt:"Pending action",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),(0,r.kt)("p",null,'You can step over each action using the "Step over" action or resume script without further pauses:'),(0,r.kt)("center",null,(0,r.kt)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),(0,r.kt)("h2",{id:"using-browser-developer-tools"},"Using Browser Developer Tools"),(0,r.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script, with or without Playwright inspector. Developer tools help to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inspect the DOM tree"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.15/verification#console-logs"},"read logs via API"),")"),(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,r.kt)("h2",{id:"debugging-selectors"},"Debugging Selectors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),(0,r.kt)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),(0,r.kt)("img",{width:"602",alt:"Selectors toolbar",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),(0,r.kt)("p",null,"You can also use the following API inside the Developer Tools Console of any browser."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,r.kt)("h4",{id:"playwrightselector"},"playwright.$(selector)"),(0,r.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,r.kt)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,r.kt)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),(0,r.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,r.kt)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),(0,r.kt)("p",null,"Generates selector for the given element."),(0,r.kt)("h2",{id:"recording-scripts"},"Recording scripts"),(0,r.kt)("p",null,"At any moment, clicking Record action enables ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.15/codegen"},"codegen mode"),". Every action on the target page is turned into the generated script:"),(0,r.kt)("img",{width:"712",alt:"Recorded script",src:"https://user-images.githubusercontent.com/883973/108614897-85704600-73b3-11eb-8bcd-f2e129786c49.png"}),(0,r.kt)("p",null,"You can copy entire generated script or clear it using toolbar actions."))}g.isMDXComponent=!0}}]);