(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3490],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,r(r({ref:t},s),{},{components:a})):n.createElement(h,r({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(67294),i=a(80944),l=a(86010),r="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,p=39;var s=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=(0,i.Z)(),f=h.tabGroupChoices,v=h.setTabGroupChoices,k=(0,n.useState)(s),w=k[0],g=k[1],b=n.Children.toArray(e.children),N=[];if(null!=d){var y=f[d];null!=y&&y!==w&&u.some((function(e){return e.value===y}))&&g(y)}var O=function(e){var t=e.currentTarget,a=N.indexOf(t),n=u[a].value;g(n),null!=d&&(v(d,n),setTimeout((function(){var e,a,n,i,l,r,c,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,l=e.right,r=window,c=r.innerHeight,p=r.innerWidth,a>=0&&l<=p&&i<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},P=function(e){var t,a;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,l.Z)("tabs__item",r,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:O,onClick:O},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),i=a(79443);t.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},92630:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return o},toc:function(){return c},default:function(){return s}});var n=a(22122),i=a(19756),l=(a(67294),a(3905)),r=(a(41395),a(58215),{id:"class-electronapplication",title:"ElectronApplication"}),o={unversionedId:"api/class-electronapplication",id:"version-1.12.0/api/class-electronapplication",isDocsHomePage:!1,title:"ElectronApplication",description:"Electron application representation. You can use electron.launch([options]) to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:",source:"@site/versioned_docs/version-1.12.0/api/class-electronapplication.mdx",sourceDirName:"api",slug:"/api/class-electronapplication",permalink:"/docs/1.12.0/api/class-electronapplication",version:"1.12.0",frontMatter:{id:"class-electronapplication",title:"ElectronApplication"},sidebar:"version-1.12.0/api",previous:{title:"Electron",permalink:"/docs/1.12.0/api/class-electron"}},c=[{value:"electronApplication.on(&#39;close&#39;)",id:"electron-application-event-close",children:[]},{value:"electronApplication.on(&#39;window&#39;)",id:"electron-application-event-window",children:[]},{value:"electronApplication.browserWindow(page)",id:"electron-application-browser-window",children:[]},{value:"electronApplication.close()",id:"electron-application-close",children:[]},{value:"electronApplication.context()",id:"electron-application-context",children:[]},{value:"electronApplication.evaluate(pageFunction, arg)",id:"electron-application-evaluate",children:[]},{value:"electronApplication.evaluateHandle(pageFunction, arg)",id:"electron-application-evaluate-handle",children:[]},{value:"electronApplication.firstWindow()",id:"electron-application-first-window",children:[]},{value:"electronApplication.waitForEvent(event, optionsOrPredicate)",id:"electron-application-wait-for-event",children:[]},{value:"electronApplication.windows()",id:"electron-application-windows",children:[]}],p={toc:c};function s(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Electron application representation. You can use ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electron#electron-launch"},"electron.launch([options])")," to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { _electron: electron } = require('playwright');\n\n(async () => {\n  // Launch Electron app.\n  const electronApp = await electron.launch({ args: ['main.js'] });\n\n  // Evaluation expression in the Electron context.\n  const appPath = await electronApp.evaluate(async ({ app }) => {\n    // This runs in the main Electron process, parameter here is always\n    // the result of the require('electron') in the main app script.\n    return app.getAppPath();\n  });\n  console.log(appPath);\n\n  // Get the first window that the app opens, wait if necessary.\n  const window = await electronApp.firstWindow();\n  // Print the title.\n  console.log(await window.title());\n  // Capture a screenshot.\n  await window.screenshot({ path: 'intro.png' });\n  // Direct Electron console to Node terminal.\n  window.on('console', console.log);\n  // Click button.\n  await window.click('text=Click me');\n  // Exit app.\n  await electronApp.close();\n})();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-event-close"},"electronApplication.on('close')")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-event-window"},"electronApplication.on('window')")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-browser-window"},"electronApplication.browserWindow(page)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-close"},"electronApplication.close()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-context"},"electronApplication.context()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-first-window"},"electronApplication.firstWindow()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-wait-for-event"},"electronApplication.waitForEvent(event[, optionsOrPredicate])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electronapplication#electron-application-windows"},"electronApplication.windows()"))),(0,l.kt)("h2",{id:"electron-application-event-close"},"electronApplication.on('close')"),(0,l.kt)("p",null,"This event is issued when the application closes."),(0,l.kt)("h2",{id:"electron-application-event-window"},"electronApplication.on('window')"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page",title:"Page"},"Page"),">")),(0,l.kt)("p",null,"This event is issued for every window that is created ",(0,l.kt)("strong",{parentName:"p"},"and loaded")," in Electron. It contains a ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-page",title:"Page"},"Page")," that can be used for Playwright automation."),(0,l.kt)("h2",{id:"electron-application-browser-window"},"electronApplication.browserWindow(page)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"page")," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page",title:"Page"},"Page"),">"," Page to retrieve the window for."),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">")),(0,l.kt)("p",null,"Returns the BrowserWindow object that corresponds to the given Playwright page."),(0,l.kt)("h2",{id:"electron-application-close"},"electronApplication.close()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">")),(0,l.kt)("p",null,"Closes Electron application."),(0,l.kt)("h2",{id:"electron-application-context"},"electronApplication.context()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),">")),(0,l.kt)("p",null,"This method returns browser context that can be used for setting up context-wide routing, etc."),(0,l.kt)("h2",{id:"electron-application-evaluate"},"electronApplication.evaluate(pageFunction","[, arg]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electron",title:"Electron"},"Electron"),">"," Function to be evaluated in the worker context."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns a non-",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,l.kt)("h2",{id:"electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pageFunction")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-electron",title:"Electron"},"Electron"),">"," Function to be evaluated in the worker context."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"The only difference between ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," is that ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," returns ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," would wait for the promise to resolve and return its value."),(0,l.kt)("h2",{id:"electron-application-first-window"},"electronApplication.firstWindow()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page",title:"Page"},"Page"),">",">")),(0,l.kt)("p",null,"Convenience method that waits for the first application window to be opened. Typically your script will start with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const electronApp = await electron.launch({\n    args: ['main.js']\n  });\n  const window = await electronApp.firstWindow();\n  // ...\n")),(0,l.kt)("h2",{id:"electron-application-wait-for-event"},"electronApplication.waitForEvent(event","[, optionsOrPredicate]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Event name, same one typically passed into ",(0,l.kt)("inlineCode",{parentName:"li"},"*.on(event)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"optionsOrPredicate")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Either a predicate that receives an event or an options object. Optional.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"predicate")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),">"," receives the event data and resolves to truthy value when the waiting should resolve."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," maximum time to wait for in milliseconds. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browsercontext#browser-context-set-default-timeout"},"browserContext.setDefaultTimeout(timeout)"),"."))),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">")),(0,l.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the application is closed before the event is fired. Returns the event data value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const [window] = await Promise.all([\n  electronApp.waitForEvent('window'),\n  mainWindow.click('button')\n]);\n")),(0,l.kt)("h2",{id:"electron-application-windows"},"electronApplication.windows()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page",title:"Page"},"Page"),">",">")),(0,l.kt)("p",null,"Convenience method that returns all the opened windows."))}s.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);