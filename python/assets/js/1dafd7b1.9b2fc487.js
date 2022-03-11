"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1852],{1945:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return g}});var n=a(7462),o=a(3366),s=(a(7294),a(3905)),i=a(6396),r=a(8215),l=["components"],c={id:"auth",title:"Authentication"},p=void 0,u={unversionedId:"auth",id:"version-1.18/auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.18/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/python/docs/1.18/auth",tags:[],version:"1.18",frontMatter:{id:"auth",title:"Authentication"},sidebar:"version-1.18/docs",previous:{title:"Assertions",permalink:"/python/docs/1.18/assertions"},next:{title:"Browsers",permalink:"/python/docs/1.18/browsers"}},d=[{value:"Automate logging in",id:"automate-logging-in",children:[],level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"Code generation",id:"code-generation",children:[],level:3},{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Session storage",id:"session-storage",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[],level:3},{value:"Lifecycle",id:"lifecycle",children:[],level:3},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2}],h={toc:d};function g(e){var t=e.components,a=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,s.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/browser-contexts"},"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication")," use ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"),".")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#automate-logging-in"},"Automate logging in")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#reuse-authentication-state"},"Reuse authentication state")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#session-storage"},"Session storage")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#multi-factor-authentication"},"Multi-factor authentication"))),(0,s.kt)("h2",{id:"automate-logging-in"},"Automate logging in"),(0,s.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/input"},"Input guide")," for more details."),(0,s.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"page = context.new_page()\npage.goto('https://github.com/login')\n\n# Interact with login form\npage.click('text=Login')\npage.fill('input[name=\"login\"]', USERNAME)\npage.fill('input[name=\"password\"]', PASSWORD)\npage.click('text=Submit')\n# Verify app is logged in\n"))),(0,s.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"page = await context.new_page()\nawait page.goto('https://github.com/login')\n\n# Interact with login form\nawait page.click('text=Login')\nawait page.fill('input[name=\"login\"]', USERNAME)\nawait page.fill('input[name=\"password\"]', PASSWORD)\nawait page.click('text=Submit')\n# Verify app is logged in\n")))),(0,s.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,s.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,s.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," or in ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"},"local storage"),". Playwright provides ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,s.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,s.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# Save storage state into the file.\nstorage = context.storage_state(path="state.json")\n\n# Create a new context with the saved storage state.\ncontext = browser.new_context(storage_state="state.json")\n'))),(0,s.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# Save storage state into the file.\nstorage = await context.storage_state(path="state.json")\n\n# Create a new context with the saved storage state.\ncontext = await browser.new_context(storage_state="state.json")\n')))),(0,s.kt)("h3",{id:"code-generation"},"Code generation"),(0,s.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,s.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,s.kt)("inlineCode",{parentName:"li"},"npm run test"),")."),(0,s.kt)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"In Jest, this can be executed in ",(0,s.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},(0,s.kt)("inlineCode",{parentName:"a"},"globalSetup")),"."))),(0,s.kt)("li",{parentName:"ol"},"In each test, load authentication state in ",(0,s.kt)("inlineCode",{parentName:"li"},"beforeEach")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"beforeAll")," step.")),(0,s.kt)("p",null,"This approach will also ",(0,s.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"))),(0,s.kt)("h2",{id:"session-storage"},"Session storage"),(0,s.kt)("p",null,"Rarely, ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import os\n# Get session storage and store as env variable\nsession_storage = page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\ncontext.add_init_script("""(storage => {\n  if (window.location.hostname === \'example.com\') {\n    const entries = JSON.parse(storage)\n    for (const [key, value] of Object.entries(entries)) {\n      window.sessionStorage.setItem(key, key)\n    }\n  }\n})(\'""" + session_storage + "\')")\n'))),(0,s.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'import os\n# Get session storage and store as env variable\nsession_storage = await page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\nawait context.add_init_script("""(storage => {\n  if (window.location.hostname === \'example.com\') {\n    const entries = JSON.parse(storage)\n    for (const [key, value] of Object.entries(entries)) {\n      window.sessionStorage.setItem(key, key)\n    }\n  }\n})(\'""" + session_storage + "\')")\n')))),(0,s.kt)("h3",{id:"api-reference-1"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browsercontext#browser-context-add-init-script"},"browser_context.add_init_script(**kwargs)"))),(0,s.kt)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),(0,s.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,s.kt)("h3",{id:"persistent-authentication"},"Persistent authentication"),(0,s.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,s.kt)("p",null,"User data directories can be used with the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.18/api/class-browsertype#browser-type-launch-persistent-context"},"browser_type.launch_persistent_context(user_data_dir, **kwargs)")," API."),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    user_data_dir = '/path/to/directory'\n    browser = p.chromium.launch_persistent_context(user_data_dir, headless=False)\n    # Execute login steps manually in the browser window\n"))),(0,s.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        user_data_dir = '/path/to/directory'\n        browser = await p.chromium.launch_persistent_context(user_data_dir, headless=False)\n        # Execute login steps manually in the browser window\n\nasyncio.run(main())\n")))),(0,s.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a user data directory on disk."),(0,s.kt)("li",{parentName:"ol"},"Launch a persistent context with the user data directory and login the MFA account."),(0,s.kt)("li",{parentName:"ol"},"Reuse user data directory to run automation scenarios.")),(0,s.kt)("h3",{id:"api-reference-2"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.18/api/class-browsertype#browser-type-launch-persistent-context"},"browser_type.launch_persistent_context(user_data_dir, **kwargs)"))))}g.isMDXComponent=!0}}]);