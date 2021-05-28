(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(393)),c=(a(396),a(397),{id:"core-concepts",title:"Core concepts"}),i={unversionedId:"core-concepts",id:"version-1.9.0/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/versioned_docs/version-1.9.0/core-concepts.mdx",slug:"/core-concepts",permalink:"/docs/1.9.0/core-concepts",version:"1.9.0",sidebar:"version-1.9.0/docs",previous:{title:"Getting Started",permalink:"/docs/1.9.0/intro"},next:{title:"Debugging tools",permalink:"/docs/1.9.0/debug"}},l=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Selectors",id:"selectors",children:[]},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[]},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),Object(o.b)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browser"}),"Browser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browser-contexts"}),"Browser contexts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#pages-and-frames"}),"Pages and frames")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#selectors"}),"Selectors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#auto-waiting"}),"Auto-waiting")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#execution-contexts-playwright-and-browser"}),"Execution contexts: Playwright and Browser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#evaluation-argument"}),"Evaluation Argument"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"browser"},"Browser"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-browser",title:"Browser"}),"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headful mode."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\nconst browser = await chromium.launch({ headless: false });\nawait browser.close();\n")),Object(o.b)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browser",title:"Browser"}),"Browser"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"browser-contexts"},"Browser contexts"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const browser = await chromium.launch();\nconst context = await browser.newContext();\n")),Object(o.b)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { devices } = require('playwright');\nconst iPhone = devices['iPhone 11 Pro'];\n\nconst context = await browser.newContext({\n  ...iPhone,\n  permissions: ['geolocation'],\n  geolocation: { latitude: 52.52, longitude: 13.39},\n  colorScheme: 'dark',\n  locale: 'de-DE'\n});\n")),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"pages-and-frames"},"Pages and frames"),Object(o.b)("p",null,"A Browser context can have multiple pages. A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page",title:"Page"}),"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Create a page.\nconst page = await context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com');\n// Fill an input.\nawait page.fill('#search', 'query');\n\n// Navigate implicitly by clicking a link.\nawait page.click('#submit');\n// Expect a new url.\nconsole.log(page.url());\n\n// Page can navigate from the script - this will be picked up by Playwright.\nwindow.location.href = 'https://example.com';\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Read more on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/navigations"}),"page navigation and loading"),".")),Object(o.b)("p",null,"A page can have one or more ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",Object(o.b)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),Object(o.b)("p",null,"A page can have additional frames attached with the ",Object(o.b)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get frame using the frame's name attribute\nconst frame = page.frame('frame-login');\n\n// Get frame using frame's URL\nconst frame = page.frame({ url: /.*domain.*/ });\n\n// Get frame using any other selector\nconst frameElementHandle = await page.$('.frame-class');\nconst frame = await frameElementHandle.contentFrame();\n\n// Interact with the frame\nawait frame.fill('#username-input', 'John');\n")),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-frame",title:"Frame"}),"Frame")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pageframeframeselector"}),"page.frame(frameSelector)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"selectors"},"Selectors"),Object(o.b)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",Object(o.b)("inlineCode",{parentName:"p"},"id"),", ",Object(o.b)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),Object(o.b)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),Object(o.b)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),Object(o.b)("p",null,"Learn more about selectors and selector engines ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/selectors"}),"here"),"."),Object(o.b)("p",null,"Some examples below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Using data-test-id= selector engine\nawait page.click('data-test-id=foo');\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// CSS and XPath selector engines are automatically detected\nawait page.click('div');\nawait page.click('//html/body/div');\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Find node by text substring\nawait page.click('text=Hello w');\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Explicit CSS and XPath notation\nawait page.click('css=div');\nawait page.click('xpath=//html/body/div');\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Only search light DOM, outside WebComponent shadow DOM:\nawait page.click('css:light=div');\n")),Object(o.b)("p",null,"Selectors using the same or different engines can be combined using the ",Object(o.b)("inlineCode",{parentName:"p"},">>")," separator. For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Click an element with text 'Sign Up' inside of a #free-month-promo.\nawait page.click('#free-month-promo >> text=Sign Up');\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Capture textContent of a section that contains an element with text 'Selectors'.\nconst sectionText = await page.$eval('*css=section >> text=Selectors', e => e.textContent);\n")),Object(o.b)("br",null),Object(o.b)("h2",{id:"auto-waiting"},"Auto-waiting"),Object(o.b)("p",null,"Actions like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagefillselector-value-options"}),"page.fill(selector, value[, options])")," auto-wait for the element to be visible and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/actionability"}),"actionable"),". For example, click will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),Object(o.b)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",Object(o.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(o.b)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),Object(o.b)("li",{parentName:"ul"},"scroll the element into view"),Object(o.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),Object(o.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Playwright waits for #search element to be in the DOM\nawait page.fill('#search', 'query');\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Playwright waits for element to stop animating\n// and accept clicks.\nawait page.click('#search');\n")),Object(o.b)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Wait for #search to appear in the DOM.\nawait page.waitForSelector('#search', { state: 'attached' });\n// Wait for #promo to become visible, for example with `visibility:visible`.\nawait page.waitForSelector('#promo');\n")),Object(o.b)("p",null,"... or to become hidden or detached"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Wait for #details to become hidden, for example with `display:none`.\nawait page.waitForSelector('#details', { state: 'hidden' });\n// Wait for #promo to be removed from the DOM.\nawait page.waitForSelector('#promo', { state: 'detached' });\n")),Object(o.b)("h3",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagefillselector-value-options"}),"page.fill(selector, value[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),Object(o.b)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",Object(o.b)("inlineCode",{parentName:"p"},"window")," and ",Object(o.b)("inlineCode",{parentName:"p"},"document")," can be used in ",Object(o.b)("inlineCode",{parentName:"p"},"evaluate"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const href = await page.evaluate(() => document.location.href);\n")),Object(o.b)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const status = await page.evaluate(async () => {\n  const response = await fetch(location.href);\n  return response.status;\n});\n")),Object(o.b)("h2",{id:"evaluation-argument"},"Evaluation Argument"),Object(o.b)("p",null,"Playwright evaluation methods like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")," take a single optional argument. This argument can be a mix of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," values and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," instances. Handles are automatically converted to the value they represent."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// A primitive value.\nawait page.evaluate(num => num, 42);\n\n// An array.\nawait page.evaluate(array => array.length, [1, 2, 3]);\n\n// An object.\nawait page.evaluate(object => object.foo, { foo: 'bar' });\n\n// A single handle.\nconst button = await page.$('button');\nawait page.evaluate(button => button.textContent, button);\n\n// Alternative notation using elementHandle.evaluate.\nawait button.evaluate((button, from) => button.textContent.substring(from), 5);\n\n// Object with multiple handles.\nconst button1 = await page.$('.button1');\nconst button2 = await page.$('.button2');\nawait page.evaluate(\n    o => o.button1.textContent + o.button2.textContent,\n    { button1, button2 });\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nawait page.evaluate(\n    ({ button1, button2 }) => button1.textContent + button2.textContent,\n    { button1, button2 });\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\nawait page.evaluate(\n    ([b1, b2]) => b1.textContent + b2.textContent,\n    [button1, button2]);\n\n// Any non-cyclic mix of serializables and handles works.\nawait page.evaluate(\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo),\n    { button1, list: [button2], foo: null });\n")),Object(o.b)("p",null,"Right:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const data = { text: 'some data', value: 1 };\n// Pass |data| as a parameter.\nconst result = await page.evaluate(data => {\n  window.myApp.use(data);\n}, data);\n")),Object(o.b)("p",null,"Wrong:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const data = { text: 'some data', value: 1 };\nconst result = await page.evaluate(() => {\n  // There is no |data| in the web page.\n  window.myApp.use(data);\n});\n")),Object(o.b)("h3",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-frame#frameevaluatepagefunction-arg"}),"frame.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},"[EvaluationArgument]")),Object(o.b)("br",null))}b.isMDXComponent=!0},392:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},394:function(e,t,a){"use strict";var n=a(0),r=a(395);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},396:function(e,t,a){"use strict";a(0),a(394),a(392),a(55)},397:function(e,t,a){"use strict";a(3),a(0)}}]);