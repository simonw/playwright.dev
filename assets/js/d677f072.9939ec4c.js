(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2568],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(80944),o=a(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,p=e.values,d=e.groupId,h=e.className,g=(0,r.Z)(),m=g.tabGroupChoices,f=g.setTabGroupChoices,w=(0,n.useState)(u),k=w[0],b=w[1],v=n.Children.toArray(e.children),y=[];if(null!=d){var x=m[d];null!=x&&x!==k&&p.some((function(e){return e.value===x}))&&b(x)}var N=function(e){var t=e.currentTarget,a=y.indexOf(t),n=p[a].value;b(n),null!=d&&(f(d,n),setTimeout((function(){var e,a,n,r,o,i,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,a>=0&&o<=c&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,a;switch(e.keyCode){case c:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case l:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:S,onFocus:N,onClick:N},a)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},65720:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i=a(41395),s=a(58215),l={id:"auth",title:"Authentication"},c={unversionedId:"auth",id:"version-1.12.0/auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.12.0/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/docs/1.12.0/auth",version:"1.12.0",frontMatter:{id:"auth",title:"Authentication"},sidebar:"version-1.12.0/docs",previous:{title:"Assertions",permalink:"/docs/1.12.0/assertions"},next:{title:"Browsers",permalink:"/docs/1.12.0/browsers"}},u=[{value:"Automate logging in",id:"automate-logging-in",children:[]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"Code generation",id:"code-generation",children:[]},{value:"Reuse authentication in Playwright Test",id:"reuse-authentication-in-playwright-test",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Session storage",id:"session-storage",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"API reference",id:"api-reference-2",children:[]}]}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,o.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/core-concepts#browser-contexts"},"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication")," use ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-browser#browser-new-context"},"browser.newContext([options])"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#automate-logging-in"},"Automate logging in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reuse-authentication-state"},"Reuse authentication state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#session-storage"},"Session storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multi-factor-authentication"},"Multi-factor authentication"))),(0,o.kt)("h2",{id:"automate-logging-in"},"Automate logging in"),(0,o.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/input"},"Input guide")," for more details."),(0,o.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const page = await context.newPage();\nawait page.goto('https://github.com/login');\n\n// Interact with login form\nawait page.click('text=Login');\nawait page.fill('input[name=\"login\"]', USERNAME);\nawait page.fill('input[name=\"password\"]', PASSWORD);\nawait page.click('text=Submit');\n// Verify app is logged in\n")),(0,o.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,o.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,o.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," or in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"},"local storage"),". Playwright provides ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-browsercontext#browser-context-storage-state"},"browserContext.storageState([options])")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,o.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,o.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Save storage state into the file.\nawait context.storageState({ path: 'state.json' });\n\n// Create a new context with the saved storage state.\nconst context = await browser.newContext({ storageState: 'state.json' });\n")),(0,o.kt)("h3",{id:"code-generation"},"Code generation"),(0,o.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,o.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test"),")."),(0,o.kt)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In Jest, this can be executed in ",(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},(0,o.kt)("inlineCode",{parentName:"a"},"globalSetup")),"."))),(0,o.kt)("li",{parentName:"ol"},"In each test, load authentication state in ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeEach")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeAll")," step.")),(0,o.kt)("p",null,"This approach will also ",(0,o.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,o.kt)("h3",{id:"reuse-authentication-in-playwright-test"},"Reuse authentication in Playwright Test"),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/test-intro"},"Playwright Test"),", you can log in once in the global setup and then reuse authentication state in tests. That way all your tests are completely isolated, yet you only waste time logging in once for the entire test suite run."),(0,o.kt)("p",null,"First, introduce the global setup that would log in once."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.ts\nimport { chromium } from '@playwright/test';\n\nasync function globalSetup() {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('http://localhost:5000/');\n  await page.click('text=login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('input:has-text(\"login\")');\n  await page.context().storageState({ path: 'state.json' });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('http://localhost:5000/');\n  await page.click('text=login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('input:has-text(\"login\")');\n  await page.context().storageState({ path: 'state.json' });\n  await browser.close();\n};\n")))),(0,o.kt)("p",null,"Then reuse saved authentication state in your tests."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { test } from '@playwright/test';\n\ntest.use({ storageState: 'state.json' });\n\ntest('test', async ({ page }) => {\n  await page.goto('http://localhost:5000/');\n  // You are logged in!\n});\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.use({ storageState: 'state.json' });\n\ntest('test', async ({ page }) => {\n  await page.goto('http://localhost:5000/');\n  // You are logged in!\n});\n")))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browsercontext#browser-context-storage-state"},"browserContext.storageState([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browser#browser-new-context"},"browser.newContext([options])"))),(0,o.kt)("h2",{id:"session-storage"},"Session storage"),(0,o.kt)("p",null,"Rarely, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get session storage and store as env variable\nconst sessionStorage = await page.evaluate(() => JSON.stringify(sessionStorage));\nprocess.env.SESSION_STORAGE = sessionStorage;\n\n// Set session storage in a new context\nconst sessionStorage = process.env.SESSION_STORAGE;\nawait context.addInitScript(storage => {\n  if (window.location.hostname === 'example.com') {\n    const entries = JSON.parse(storage);\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key]);\n    });\n  }\n}, sessionStorage);\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browsercontext#browser-context-storage-state"},"browserContext.storageState([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browser#browser-new-context"},"browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browsercontext#browser-context-add-init-script"},"browserContext.addInitScript(script[, arg])"))),(0,o.kt)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),(0,o.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,o.kt)("h3",{id:"persistent-authentication"},"Persistent authentication"),(0,o.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,o.kt)("p",null,"User data directories can be used with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-browsertype#browser-type-launch-persistent-context"},"browserType.launchPersistentContext(userDataDir[, options])")," API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\nconst userDataDir = '/path/to/directory';\nconst context = await chromium.launchPersistentContext(userDataDir, { headless: false });\n// Execute login steps manually in the browser window\n")),(0,o.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a user data directory on disk 2. Launch a persistent context with the user data directory and login the MFA account. 3. Reuse user data directory to run automation scenarios.")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browsertype#browser-type-launch-persistent-context"},"browserType.launchPersistentContext(userDataDir[, options])"))))}d.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);