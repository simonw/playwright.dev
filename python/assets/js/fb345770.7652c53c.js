(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2268],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),r=n(80944),o=n(86010),s="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,d=e.groupId,h=e.className,m=(0,r.Z)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,y=(0,a.useState)(u),w=y[0],k=y[1],b=a.Children.toArray(e.children),v=[];if(null!=d){var x=g[d];null!=x&&x!==w&&p.some((function(e){return e.value===x}))&&k(x)}var N=function(e){var t=e.currentTarget,n=v.indexOf(t),a=p[n].value;k(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,o,s,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,s=window,l=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},_=function(e){var t,n;switch(e.keyCode){case c:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case l:var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:_,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6340:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s=n(41395),i=n(58215),l={id:"auth",title:"Authentication"},c={unversionedId:"auth",id:"auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/docs/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/python/docs/next/auth",version:"current",frontMatter:{id:"auth",title:"Authentication"},sidebar:"docs",previous:{title:"Assertions",permalink:"/python/docs/next/assertions"},next:{title:"Browsers",permalink:"/python/docs/next/browsers"}},u=[{value:"Automate logging in",id:"automate-logging-in",children:[]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"Code generation",id:"code-generation",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Session storage",id:"session-storage",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"API reference",id:"api-reference-2",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,o.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/core-concepts#browser-contexts"},"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication")," use ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#automate-logging-in"},"Automate logging in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reuse-authentication-state"},"Reuse authentication state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#session-storage"},"Session storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multi-factor-authentication"},"Multi-factor authentication"))),(0,o.kt)("h2",{id:"automate-logging-in"},"Automate logging in"),(0,o.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/input"},"Input guide")," for more details."),(0,o.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"page = context.new_page()\npage.goto('https://github.com/login')\n\n# Interact with login form\npage.click('text=Login')\npage.fill('input[name=\"login\"]', USERNAME)\npage.fill('input[name=\"password\"]', PASSWORD)\npage.click('text=Submit')\n# Verify app is logged in\n"))),(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"page = await context.new_page()\nawait page.goto('https://github.com/login')\n\n# Interact with login form\nawait page.click('text=Login')\nawait page.fill('input[name=\"login\"]', USERNAME)\nawait page.fill('input[name=\"password\"]', PASSWORD)\nawait page.click('text=Submit')\n# Verify app is logged in\n")))),(0,o.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,o.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,o.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," or in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"},"local storage"),". Playwright provides ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,o.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,o.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Save storage state into the file.\nstorage = context.storage_state(path="state.json")\n\n# Create a new context with the saved storage state.\ncontext = browser.new_context(storage_state="state.json")\n'))),(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Save storage state into the file.\nstorage = await context.storage_state(path="state.json")\n\n# Create a new context with the saved storage state.\ncontext = await browser.new_context(storage_state="state.json")\n')))),(0,o.kt)("h3",{id:"code-generation"},"Code generation"),(0,o.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,o.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test"),")."),(0,o.kt)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In Jest, this can be executed in ",(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},(0,o.kt)("inlineCode",{parentName:"a"},"globalSetup")),"."))),(0,o.kt)("li",{parentName:"ol"},"In each test, load authentication state in ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeEach")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeAll")," step.")),(0,o.kt)("p",null,"This approach will also ",(0,o.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"))),(0,o.kt)("h2",{id:"session-storage"},"Session storage"),(0,o.kt)("p",null,"Rarely, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import os\n# Get session storage and store as env variable\nsession_storage = page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\ncontext.add_init_script("""storage => {\n  if (window.location.hostname == \'example.com\') {\n    entries = JSON.parse(storage)\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key])\n    })\n  }\n}""", session_storage)\n'))),(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import os\n# Get session storage and store as env variable\nsession_storage = await page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\nawait context.add_init_script("""storage => {\n  if (window.location.hostname == \'example.com\') {\n    entries = JSON.parse(storage)\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key])\n    })\n  }\n}""", session_storage)\n')))),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-add-init-script"},"browser_context.add_init_script(**kwargs)"))),(0,o.kt)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),(0,o.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,o.kt)("h3",{id:"persistent-authentication"},"Persistent authentication"),(0,o.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,o.kt)("p",null,"User data directories can be used with the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsertype#browser-type-launch-persistent-context"},"browser_type.launch_persistent_context(user_data_dir, **kwargs)")," API."),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    user_data_dir = '/path/to/directory'\n    browser = p.chromium.launch_persistent_context(user_data_dir, headless=False)\n    # Execute login steps manually in the browser window\n"))),(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        user_data_dir = '/path/to/directory'\n        browser = await p.chromium.launch_persistent_context(user_data_dir, headless=False)\n        # Execute login steps manually in the browser window\n\nasyncio.run(main())\n")))),(0,o.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a user data directory on disk 2. Launch a persistent context with the user data directory and login the MFA account. 3. Reuse user data directory to run automation scenarios.")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsertype#browser-type-launch-persistent-context"},"browser_type.launch_persistent_context(user_data_dir, **kwargs)"))))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);