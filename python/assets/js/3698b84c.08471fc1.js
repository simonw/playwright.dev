"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9045],{6103:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return h},toc:function(){return c},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=a(6396),l=a(8215),o=["components"],p={id:"intro",title:"Getting started"},d=void 0,h={unversionedId:"intro",id:"version-1.18/intro",isDocsHomePage:!1,title:"Getting started",description:"- Installation",source:"@site/versioned_docs/version-1.18/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/python/docs/1.18/intro",tags:[],version:"1.18",frontMatter:{id:"intro",title:"Getting started"},sidebar:"version-1.18/docs",next:{title:"Inspector",permalink:"/python/docs/1.18/inspector"}},c=[{value:"Installation",id:"installation",children:[{value:"Pip",id:"pip",children:[],level:3},{value:"Conda",id:"conda",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"First script",id:"first-script",children:[],level:2},{value:"Record scripts",id:"record-scripts",children:[],level:2},{value:"With Pytest",id:"with-pytest",children:[],level:2},{value:"Interactive mode (REPL)",id:"interactive-mode-repl",children:[],level:2},{value:"Pyinstaller",id:"pyinstaller",children:[],level:2},{value:"Known issues",id:"known-issues",children:[{value:"<code>time.sleep()</code> leads to outdated state",id:"timesleep-leads-to-outdated-state",children:[],level:3},{value:"incompatible with <code>SelectorEventLoop</code> of <code>asyncio</code> on Windows",id:"incompatible-with-selectoreventloop-of-asyncio-on-windows",children:[],level:3},{value:"Threading",id:"threading",children:[],level:3}],level:2},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[],level:3},{value:"macOS",id:"macos",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#first-script"},"First script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#record-scripts"},"Record scripts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#with-pytest"},"With Pytest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#interactive-mode-repl"},"Interactive mode (REPL)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pyinstaller"},"Pyinstaller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#known-issues"},"Known issues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.18/release-notes"},"Release notes"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#system-requirements"},"system requirements"),"."),(0,r.kt)("h3",{id:"pip"},"Pip"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/playwright/"},(0,r.kt)("img",{parentName:"a",src:"https://badge.fury.io/py/playwright.svg",alt:"PyPI version"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade pip\npip install playwright\nplaywright install\n")),(0,r.kt)("h3",{id:"conda"},"Conda"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://anaconda.org/Microsoft/playwright"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/conda/v/microsoft/playwright",alt:"Anaconda version"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"conda config --add channels conda-forge\nconda config --add channels microsoft\nconda install playwright\nplaywright install\n")),(0,r.kt)("p",null,"These commands download the Playwright package and install browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.18/browsers#installing-browsers"},"installation parameters"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Once installed, you can ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," Playwright in a Python script, and launch any of the 3 browsers (",(0,r.kt)("inlineCode",{parentName:"p"},"chromium"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"webkit"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://playwright.dev")\n    print(page.title())\n    browser.close()\n')),(0,r.kt)("p",null,"Playwright supports two variations of the API: synchronous and asynchronous. If your modern project uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},"asyncio"),", you should use async API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        browser = await p.chromium.launch()\n        page = await browser.new_page()\n        await page.goto("http://playwright.dev")\n        print(await page.title())\n        await browser.close()\n\nasyncio.run(main())\n')),(0,r.kt)("h2",{id:"first-script"},"First script"),(0,r.kt)("p",null,"In our first script, we will navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.webkit.launch()\n    page = browser.new_page()\n    page.goto("http://whatsmyuseragent.org/")\n    page.screenshot(path="example.png")\n    browser.close()\n')),(0,r.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"headless=False")," flag while launching the browser. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"slow_mo")," to slow down execution. Learn more in the debugging tools ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.18/debug"},"section"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"firefox.launch(headless=False, slow_mo=50)\n")),(0,r.kt)("h2",{id:"record-scripts"},"Record scripts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.18/cli"},"Command line tools")," can be used to record user interactions and generate Python code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"playwright codegen wikipedia.org\n")),(0,r.kt)("h2",{id:"with-pytest"},"With Pytest"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.18/test-runners"},"here")," for Pytest instructions and examples."),(0,r.kt)("h2",{id:"interactive-mode-repl"},"Interactive mode (REPL)"),(0,r.kt)("p",null,"Blocking REPL, as in CLI via Python directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'>>> from playwright.sync_api import sync_playwright\n>>> playwright = sync_playwright().start()\n# Use playwright.chromium, playwright.firefox or playwright.webkit\n# Pass headless=False to launch() to see the browser UI\n>>> browser = playwright.chromium.launch()\n>>> page = browser.new_page()\n>>> page.goto("http://whatsmyuseragent.org/")\n>>> page.screenshot(path="example.png")\n>>> browser.close()\n>>> playwright.stop()\n')),(0,r.kt)("p",null,"Async REPL such as ",(0,r.kt)("inlineCode",{parentName:"p"},"asyncio")," REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -m asyncio\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'>>> from playwright.async_api import async_playwright\n>>> playwright = await async_playwright().start()\n>>> browser = await playwright.chromium.launch()\n>>> page = await browser.new_page()\n>>> await page.goto("http://whatsmyuseragent.org/")\n>>> await page.screenshot(path="example.png")\n>>> await browser.close()\n>>> await playwright.stop()\n')),(0,r.kt)("h2",{id:"pyinstaller"},"Pyinstaller"),(0,r.kt)("p",null,"You can use Playwright with ",(0,r.kt)("a",{parentName:"p",href:"https://www.pyinstaller.org/"},"Pyinstaller")," to create standalone executables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# main.py\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://whatsmyuseragent.org/")\n    page.screenshot(path="example.png")\n    browser.close()\n')),(0,r.kt)("p",null,"If you want to bundle browsers with the executables:"),(0,r.kt)(s.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_BROWSERS_PATH=0 playwright install chromium\npyinstaller -F main.py\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_BROWSERS_PATH="0"\nplaywright install chromium\npyinstaller -F main.py\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_BROWSERS_PATH=0\nplaywright install chromium\npyinstaller -F main.py\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Bundling the browsers with the executables will generate bigger binaries. It is recommended to only bundle the browsers you use."))),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("h3",{id:"timesleep-leads-to-outdated-state"},(0,r.kt)("inlineCode",{parentName:"h3"},"time.sleep()")," leads to outdated state"),(0,r.kt)("p",null,"You should use ",(0,r.kt)("inlineCode",{parentName:"p"},"page.wait_for_timeout(5000)")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"time.sleep(5)")," and it is better to not wait for a timeout at all, but sometimes it is useful for debugging. In these cases, use our wait method instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," module. This is because we internally rely on asynchronous operations and when using ",(0,r.kt)("inlineCode",{parentName:"p"},"time.sleep(5)")," they can't get processed correctly."),(0,r.kt)("h3",{id:"incompatible-with-selectoreventloop-of-asyncio-on-windows"},"incompatible with ",(0,r.kt)("inlineCode",{parentName:"h3"},"SelectorEventLoop")," of ",(0,r.kt)("inlineCode",{parentName:"h3"},"asyncio")," on Windows"),(0,r.kt)("p",null,"Playwright runs the driver in a subprocess, so it requires ",(0,r.kt)("inlineCode",{parentName:"p"},"ProactorEventLoop")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"asyncio")," on Windows because ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectorEventLoop")," does not supports async subprocesses."),(0,r.kt)("p",null,"On Windows Python 3.7, Playwright sets the default event loop to ",(0,r.kt)("inlineCode",{parentName:"p"},"ProactorEventLoop")," as it is default on Python 3.8+."),(0,r.kt)("h3",{id:"threading"},"Threading"),(0,r.kt)("p",null,"Playwright's API is not thread-safe. If you are using Playwright in a multi-threaded environment, you should create a playwright instance per thread. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-python/issues/623"},"threading issue")," for more details."),(0,r.kt)("h2",{id:"system-requirements"},"System requirements"),(0,r.kt)("p",null,"Playwright requires Python 3.7 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,r.kt)("p",null,"See also in the ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.18/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}u.isMDXComponent=!0}}]);