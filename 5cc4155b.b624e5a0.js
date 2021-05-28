(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),o=(a(0),a(393)),c=(a(396),a(397),{id:"class-electronapplication",title:"ElectronApplication"}),r={unversionedId:"api/class-electronapplication",id:"version-1.11.0/api/class-electronapplication",isDocsHomePage:!1,title:"ElectronApplication",description:"Electron application representation. You can use electron.launch([options]) to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:",source:"@site/versioned_docs/version-1.11.0/api/class-electronapplication.mdx",slug:"/api/class-electronapplication",permalink:"/docs/api/class-electronapplication",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"Electron",permalink:"/docs/api/class-electron"}},l=[{value:"electronApplication.on(&#39;close&#39;)",id:"electronapplicationonclose",children:[]},{value:"electronApplication.on(&#39;window&#39;)",id:"electronapplicationonwindow",children:[]},{value:"electronApplication.browserWindow(page)",id:"electronapplicationbrowserwindowpage",children:[]},{value:"electronApplication.close()",id:"electronapplicationclose",children:[]},{value:"electronApplication.context()",id:"electronapplicationcontext",children:[]},{value:"electronApplication.evaluate(pageFunction, arg)",id:"electronapplicationevaluatepagefunction-arg",children:[]},{value:"electronApplication.evaluateHandle(pageFunction, arg)",id:"electronapplicationevaluatehandlepagefunction-arg",children:[]},{value:"electronApplication.firstWindow()",id:"electronapplicationfirstwindow",children:[]},{value:"electronApplication.waitForEvent(event, optionsOrPredicate)",id:"electronapplicationwaitforeventevent-optionsorpredicate",children:[]},{value:"electronApplication.windows()",id:"electronapplicationwindows",children:[]}],p={toc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Electron application representation. You can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electron#electronlaunchoptions"}),"electron.launch([options])")," to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { _electron: electron } = require('playwright');\n\n(async () => {\n  // Launch Electron app.\n  const electronApp = await electron.launch({ args: ['main.js'] });\n\n  // Evaluation expression in the Electron context.\n  const appPath = await electronApp.evaluate(async ({ app }) => {\n    // This runs in the main Electron process, parameter here is always\n    // the result of the require('electron') in the main app script.\n    return app.getAppPath();\n  });\n  console.log(appPath);\n\n  // Get the first window that the app opens, wait if necessary.\n  const window = await electronApp.firstWindow();\n  // Print the title.\n  console.log(await window.title());\n  // Capture a screenshot.\n  await window.screenshot({ path: 'intro.png' });\n  // Direct Electron console to Node terminal.\n  window.on('console', console.log);\n  // Click button.\n  await window.click('text=Click me');\n  // Exit app.\n  await electronApp.close();\n})();\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationonclose"}),"electronApplication.on('close')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationonwindow"}),"electronApplication.on('window')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationbrowserwindowpage"}),"electronApplication.browserWindow(page)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationclose"}),"electronApplication.close()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationcontext"}),"electronApplication.context()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationfirstwindow"}),"electronApplication.firstWindow()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationwaitforeventevent-optionsorpredicate"}),"electronApplication.waitForEvent(event[, optionsOrPredicate])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electronapplication#electronapplicationwindows"}),"electronApplication.windows()"))),Object(o.b)("h2",{id:"electronapplicationonclose"},"electronApplication.on('close')"),Object(o.b)("p",null,"This event is issued when the application closes."),Object(o.b)("h2",{id:"electronapplicationonwindow"},"electronApplication.on('window')"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-page",title:"Page"}),"Page"),">")),Object(o.b)("p",null,"This event is issued for every window that is created ",Object(o.b)("strong",{parentName:"p"},"and loaded")," in Electron. It contains a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page",title:"Page"}),"Page")," that can be used for Playwright automation."),Object(o.b)("h2",{id:"electronapplicationbrowserwindowpage"},"electronApplication.browserWindow(page)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"page")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-page",title:"Page"}),"Page"),"> Page to retrieve the window for."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(o.b)("p",null,"Returns the BrowserWindow object that corresponds to the given Playwright page."),Object(o.b)("h2",{id:"electronapplicationclose"},"electronApplication.close()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(o.b)("p",null,"Closes Electron application."),Object(o.b)("h2",{id:"electronapplicationcontext"},"electronApplication.context()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">")),Object(o.b)("p",null,"This method returns browser context that can be used for setting up context-wide routing, etc."),Object(o.b)("h2",{id:"electronapplicationevaluatepagefunction-arg"},"electronApplication.evaluate(pageFunction","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electron",title:"Electron"}),"Electron"),"> Function to be evaluated in the worker context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">>")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," returns a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," returns a non-",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),"."),Object(o.b)("h2",{id:"electronapplicationevaluatehandlepagefunction-arg"},"electronApplication.evaluateHandle(pageFunction, arg)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-electron",title:"Electron"}),"Electron"),"> Function to be evaluated in the worker context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"pageFunction")," as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"The only difference between ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")," is that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")," returns ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")," returns a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")," would wait for the promise to resolve and return its value."),Object(o.b)("h2",{id:"electronapplicationfirstwindow"},"electronApplication.firstWindow()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-page",title:"Page"}),"Page"),">>")),Object(o.b)("p",null,"Convenience method that waits for the first application window to be opened. Typically your script will start with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const electronApp = await electron.launch({\n    args: ['main.js']\n  });\n  const window = await electronApp.firstWindow();\n  // ...\n")),Object(o.b)("h2",{id:"electronapplicationwaitforeventevent-optionsorpredicate"},"electronApplication.waitForEvent(event","[, optionsOrPredicate]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Event name, same one typically passed into ",Object(o.b)("inlineCode",{parentName:"li"},"*.on(event)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"optionsOrPredicate")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Either a predicate that receives an event or an options object. Optional.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"predicate")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"> receives the event data and resolves to truthy value when the waiting should resolve."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> maximum time to wait for in milliseconds. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(o.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)"),"."))),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>")),Object(o.b)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the application is closed before the event is fired. Returns the event data value."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [window] = await Promise.all([\n  electronApp.waitForEvent('window'),\n  mainWindow.click('button')\n]);\n")),Object(o.b)("h2",{id:"electronapplicationwindows"},"electronApplication.windows()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-page",title:"Page"}),"Page"),">>")),Object(o.b)("p",null,"Convenience method that returns all the opened windows."))}s.isMDXComponent=!0},392:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return O}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,O=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return a?i.a.createElement(O,r(r({ref:t},p),{},{components:a})):i.a.createElement(O,r({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var p=2;p<o;p++)c[p]=a[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},394:function(e,t,a){"use strict";var n=a(0),i=a(395);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},396:function(e,t,a){"use strict";a(0),a(394),a(392),a(55)},397:function(e,t,a){"use strict";a(3),a(0)}}]);