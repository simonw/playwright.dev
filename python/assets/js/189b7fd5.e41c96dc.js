(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1138],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(r),m=i,g=h["".concat(s,".").concat(m)]||h[m]||p[m]||n;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58215:function(e,t,r){"use strict";var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},41395:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(67294),i=r(80944),n=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,p=e.values,h=e.groupId,m=e.className,g=(0,i.Z)(),f=g.tabGroupChoices,d=g.setTabGroupChoices,y=(0,a.useState)(c),w=y[0],k=y[1],b=a.Children.toArray(e.children),N=[];if(null!=h){var v=f[h];null!=v&&v!==w&&p.some((function(e){return e.value===v}))&&k(v)}var P=function(e){var t=e.currentTarget,r=N.indexOf(t),a=p[r].value;k(a),null!=h&&(d(h,a),setTimeout((function(){var e,r,a,i,n,l,s,u;(e=t.getBoundingClientRect(),r=e.top,a=e.left,i=e.bottom,n=e.right,l=window,s=l.innerHeight,u=l.innerWidth,r>=0&&n<=u&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;r=N[a]||N[0];break;case s:var i=N.indexOf(e.target)-1;r=N[i]||N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,n.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:P,onClick:P},r)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,r){"use strict";var a=(0,r(67294).createContext)(void 0);t.Z=a},80944:function(e,t,r){"use strict";var a=r(67294),i=r(79443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},65047:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var a=r(22122),i=r(19756),n=(r(67294),r(3905)),l=(r(41395),r(58215),{id:"showcase",title:"Community Showcase"}),o={unversionedId:"showcase",id:"version-1.11.0/showcase",isDocsHomePage:!1,title:"Community Showcase",description:"Users",source:"@site/versioned_docs/version-1.11.0/showcase.mdx",sourceDirName:".",slug:"/showcase",permalink:"/python/docs/1.11.0/showcase",version:"1.11.0",frontMatter:{id:"showcase",title:"Community Showcase"}},s=[{value:"Users",id:"users",children:[]},{value:"Unofficial language ports",id:"unofficial-language-ports",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Frameworks",id:"frameworks",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Guides",id:"guides",children:[]},{value:"Contributing",id:"contributing",children:[]}],u={toc:s};function c(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"users"},"Users"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode"},"VS Code"),": Playwright is used to run cross-browser tests on their web builds"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript"},"TypeScript"),": Playwright is used test typescript.js across browsers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elastic/apm-agent-rum-js"},"Elastic APM JS agent"),": Playwright is used to run benchmark tests across browsers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/blockstack/ux"},"Blockstack"),": Playwright is used to run cross-browser UI tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fredericbonnet/instakittens-react-admin"},"Instakittens React admin"),": Playwright is used to run end-to-end test scenarios written with Cucumber"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xtermjs/xterm.js"},"xterm.js"),": Playwright is used to run cross-browser integration tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/accessibility-insights-web"},"Accessibility Insights for Web"),": Playwright is used with Jest and axe-core to run end-to-end functional and accessibility tests of a WebExtension-based browser extension")),(0,n.kt)("h2",{id:"unofficial-language-ports"},"Unofficial language ports"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Playwright for Go",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mxschmitt/playwright-go"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/mxschmitt/playwright-go?tab=doc"},"Documentation")))),(0,n.kt)("li",{parentName:"ul"},"Playwright for Crystal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naqvis/playwright-cr"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://naqvis.github.io/playwright-cr/"},"Documentation"))))),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://applitools.com"},"Applitools"),": Add AI-powered visual assertions and run your Playwright tests on all browser, device, and viewport combinations in parallel, without requiring any setup."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Codeception/CodeceptJS"},"CodeceptJS"),": Write scenario-driven Playwright tests with synchronous code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Xiphe/dom-to-playwright"},"dom-to-playwright")," to copy a JSDOM snapshot into a Playwright page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elaichenkov/expected-condition-playwright"},"expected-condition-playwright"),": Supplies a set of common expected conditions that can wait for certain states and conditions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://headlesstesting.com/support/start/playwright.html"},"Headless Testing"),": Run Playwright tests on browsers in the cloud"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JakePartusch/lumberjack"},"Lumberjack"),": Automated accessibility scanner to run checks on your entire website"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/HLTech/mockiavelli"},"mockiavelli")," Request mocking library for Playwright to test SPA in isolation from backend APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aerokube/moon"},"Moon"),": Run Playwright tests in parallel in Kubernetes cluster (free up to 4 parallel sessions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hugomrdias/playwright-test"},"playwright-test")," Run unit tests and benchmarks in browsers with Node's seamless experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qawolf/playwright-video"},"playwright-video"),": Capture a video while executing a Playwright script"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qawolf/qawolf"},"QA Wolf"),": Record and create Playwright tests and then run them in CI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/testimio/root-cause"},"Root Cause OSS"),": Capture screenshots on every step and display in a viewer with logs for easy troubleshooting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://saucelabs.com/platform/automation-tools/playwright"},"Sauce Labs"),": Run Playwright tests in parallel in the cloud or your own docker environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://seleniumbox.com"},"Selenium Box - Enterprise Test Grid"),": Execute Playwright tests securely inside your firewall at scale"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Xiphe/test-real-styles"},"test-real-styles"),": Utility to test real styling of virtual DOM elements in a browser"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.testim.io/playground/"},"Testim Playground"),": Record Playwright UI tests as code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://try.playwright.tech/"},"Try Playwright"),": Interactive playground for Playwright to run examples directly from your browser")),(0,n.kt)("h2",{id:"frameworks"},"Frameworks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mmarkelov/jest-playwright"},"jest-playwright"),": Jest preset to run Playwright tests with Jest"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Georgegriff/query-selector-shadow-dom"},"query-selector-shadow-dom"),": Custom selector engine to pierce shadow DOM roots"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hdorgeval/playwright-fluent"},"playwright-fluent"),": Fluent API around Playwright"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework-browser.org/"},"robotframework-browser")," Robotframework library that uses Playwright to achieve good development ergonomics.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/e2e-boilerplate?utf8=%E2%9C%93&q=playwright"},"e2e Boilerplates"),": Project boilerplates for using Playwright with TypeScript, Cucumber, Jest, and other libraries"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KyleADay/react-app-playwright"},"react-app-playwright"),": Using Playwright with a create-react-app project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/azemetre/playwright-react-typescript-jest-example"},"playwright-react-typescript-jest-example"),": Using Playwright + Jest with a custom webpack configuration for React + TypeScript project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/roggerfe/playwright-mocha"},"playwright-mocha"),": Using Playwright with Mocha and Chai"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apeckham/playwright-cljs"},"playwright-cljs"),": Playwright examples in ClojureScript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/arjun27/playwright-azure-functions"},"playwright-azure-functions"),": Playwright setup on Azure Functions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/austinkelleher/playwright-aws-lambda"},"playwright-aws-lambda"),": Playwright setup on AWS Lambda"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/d-shch/playwright-jest-circus-allure"},"playwright-jest-circus-allure"),": Example how to use allure-report and jest-circus with playwright"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mxschmitt/heroku-playwright-example"},"Heroku Playwright Example"),": Example using Playwright on Heroku"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/saucelabs/saucectl-playwright-example"},"Sauce Labs Playwright Example"),": Example using Playwright on Sauce Labs")),(0,n.kt)("h2",{id:"guides"},"Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://theheadless.dev"},"theheadless.dev"),": Practical guides and runnable examples on Playwright (and Puppeteer)")),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"Did we miss something in this list? Send us a PR!"))}c.isMDXComponent=!0},86010:function(e,t,r){"use strict";function a(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);