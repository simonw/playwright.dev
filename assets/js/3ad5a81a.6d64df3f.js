"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[10521],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),o=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&l(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),o=a(54939),r=a(5882),s=a(86010),i="tabItem_LplD",l=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))g.call(t,a)&&m(e,a,t[a]);return e};function h(e){var t,a,o;const{lazy:l,block:c,defaultValue:d,values:g,groupId:m,className:h}=e,w=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),x=null!=g?g:w.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,r.lx)(x,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:null!=(o=null!=d?d:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(a=w[0])?void 0:a.props.value;if(null!==k&&!x.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${x.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,r.UB)(),[T,N]=(0,n.useState)(k),P=[],{blockElementScrollPositionUntilNextRender:j}=(0,r.o5)();if(null!=m){const e=v[m];null!=e&&e!==T&&x.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,a=P.indexOf(t),n=x[a].value;n!==T&&(j(t),N(n),null!=m&&b(m,n))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;t=P[a]||P[P.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},x.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(o=f({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>P.push(e),onKeyDown:O,onFocus:I,onClick:I},a),r={className:(0,s.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":T===e})},u(o,p(r))),null!=t?t:e);var o,r}))),l?(0,n.cloneElement)(w.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function w(e){const t=(0,o.Z)();return n.createElement(h,f({key:String(t)},e))}},75590:function(e,t,a){a.r(t),a.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return x}});var n=a(3905),o=a(73824),r=a(73811),s=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&d(e,a,t[a]);return e};const m={id:"test-fixtures",title:"Advanced: fixtures"},f=void 0,h={unversionedId:"test-fixtures",id:"test-fixtures",title:"Advanced: fixtures",description:"- Introduction to fixtures",source:"@site/docs/test-fixtures.mdx",sourceDirName:".",slug:"/test-fixtures",permalink:"/docs/next/test-fixtures",tags:[],version:"current",frontMatter:{id:"test-fixtures",title:"Advanced: fixtures"},sidebar:"docs",previous:{title:"Advanced: configuration",permalink:"/docs/next/test-advanced"},next:{title:"Advanced: TypeScript",permalink:"/docs/next/test-typescript"}},w={},x=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",level:2},{value:"Built-in fixtures",id:"built-in-fixtures",level:3},{value:"Without fixtures",id:"without-fixtures",level:3},{value:"With fixtures",id:"with-fixtures",level:3},{value:"Creating a fixture",id:"creating-a-fixture",level:2},{value:"Using a fixture",id:"using-a-fixture",level:2},{value:"Overriding fixtures",id:"overriding-fixtures",level:2},{value:"Worker-scoped fixtures",id:"worker-scoped-fixtures",level:2},{value:"Automatic fixtures",id:"automatic-fixtures",level:2},{value:"Fixture timeout",id:"fixture-timeout",level:2},{value:"Fixtures-options",id:"fixtures-options",level:2}],y={toc:x};function k(e){var t,a=e,{components:s}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=g(g({},y),d),i(t,l({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#introduction-to-fixtures"}),"Introduction to fixtures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#creating-a-fixture"}),"Creating a fixture")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#using-a-fixture"}),"Using a fixture")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#overriding-fixtures"}),"Overriding fixtures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#worker-scoped-fixtures"}),"Worker-scoped fixtures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#automatic-fixtures"}),"Automatic fixtures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#fixture-timeout"}),"Fixture timeout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#fixtures-options"}),"Fixtures-options"))),(0,n.kt)("h2",g({},{id:"introduction-to-fixtures"}),"Introduction to fixtures"),(0,n.kt)("p",null,"Playwright Test is based on the concept of test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. With fixtures, you can group tests based on their meaning, instead of their common setup."),(0,n.kt)("h3",g({},{id:"built-in-fixtures"}),"Built-in fixtures"),(0,n.kt)("p",null,"You have already used test fixtures in your first test."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n")))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"{ page }")," argument tells Playwright Test to setup the ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," fixture and provide it to your test function."),(0,n.kt)("p",null,"Here is a list of the pre-defined fixtures that you are likely to use most of the time:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"left"}),"Fixture"),(0,n.kt)("th",g({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",g({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),"page"),(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),(0,n.kt)("a",g({parentName:"td"},{href:"/docs/next/api/class-page",title:"Page"}),"Page")),(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),"Isolated page for this test run.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),"context"),(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),(0,n.kt)("a",g({parentName:"td"},{href:"/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),"Isolated context for this test run. The ",(0,n.kt)("inlineCode",{parentName:"td"},"page")," fixture belongs to this context as well. Learn how to ",(0,n.kt)("a",g({parentName:"td"},{href:"/docs/next/test-configuration"}),"configure context"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),"browser"),(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),(0,n.kt)("a",g({parentName:"td"},{href:"/docs/next/api/class-browser",title:"Browser"}),"Browser")),(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),"Browsers are shared across tests to optimize resources. Learn how to ",(0,n.kt)("a",g({parentName:"td"},{href:"/docs/next/test-configuration"}),"configure browser"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),"browserName"),(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),(0,n.kt)("a",g({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string")),(0,n.kt)("td",g({parentName:"tr"},{align:"left"}),"The name of the browser currently running the test. Either ",(0,n.kt)("inlineCode",{parentName:"td"},"chromium"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"firefox")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"webkit"),".")))),(0,n.kt)("h3",g({},{id:"without-fixtures"}),"Without fixtures"),(0,n.kt)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one."),(0,n.kt)("p",null,"We assume a ",(0,n.kt)("inlineCode",{parentName:"p"},"TodoPage"),' class that helps interacting with a "todo list" page of the web app, following the ',(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/test-pom"}),"Page Object Model")," pattern. It uses Playwright's ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," internally."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// todo.spec.js\nconst { test } = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\ntest.describe('todo tests', () => {\n  let todoPage;\n\n  test.beforeEach(async ({ page }) => {\n    todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n  });\n\n  test.afterEach(async () => {\n    await todoPage.removeAll();\n  });\n\n  test('should add an item', async () => {\n    await todoPage.addToDo('my item');\n    // ...\n  });\n\n  test('should remove an item', async () => {\n    await todoPage.remove('item1');\n    // ...\n  });\n});\n")),(0,n.kt)("h3",g({},{id:"with-fixtures"}),"With fixtures"),(0,n.kt)("p",null,"Fixtures have a number of advantages over before/after hooks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixtures ",(0,n.kt)("strong",{parentName:"li"},"encapsulate")," setup and teardown in the same place so it is easier to write."),(0,n.kt)("li",{parentName:"ul"},"Fixtures are ",(0,n.kt)("strong",{parentName:"li"},"reusable")," between test files - you can define them once and use in all your tests. That's how Playwright's built-in ",(0,n.kt)("inlineCode",{parentName:"li"},"page")," fixture works."),(0,n.kt)("li",{parentName:"ul"},"Fixtures are ",(0,n.kt)("strong",{parentName:"li"},"on-demand")," - you can define as many fixtures as you'd like, and Playwright Test will setup only the ones needed by your test and nothing else."),(0,n.kt)("li",{parentName:"ul"},"Fixtures are ",(0,n.kt)("strong",{parentName:"li"},"composable")," - they can depend on each other to provide complex behaviors."),(0,n.kt)("li",{parentName:"ul"},"Fixtures are ",(0,n.kt)("strong",{parentName:"li"},"flexible"),". Tests can use any combinations of the fixtures to tailor precise environment they need, without affecting other tests."),(0,n.kt)("li",{parentName:"ul"},"Fixtures simplify ",(0,n.kt)("strong",{parentName:"li"},"grouping"),". You no longer need to wrap tests in ",(0,n.kt)("inlineCode",{parentName:"li"},"describe"),"s that set up environment, and are free to group your tests by their meaning instead.")),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test as base } from '@playwright/test';\nimport { TodoPage } from './todo-page';\n\n// Extend basic test by providing a \"todoPage\" fixture.\nconst test = base.extend<{ todoPage: TodoPage }>({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// todo.spec.js\nconst base = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\n// Extend basic test by providing a \"todoPage\" fixture.\nconst test = base.test.extend({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n")))),(0,n.kt)("h2",g({},{id:"creating-a-fixture"}),"Creating a fixture"),(0,n.kt)("p",null,"To create your own fixture, use ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-test#test-extend"}),"test.extend(fixtures)")," to create a new ",(0,n.kt)("inlineCode",{parentName:"p"},"test")," object that will include it."),(0,n.kt)("p",null,"Below we create two fixtures ",(0,n.kt)("inlineCode",{parentName:"p"},"todoPage")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"settingsPage")," that follow the ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/test-pom"}),"Page Object Model")," pattern."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport { TodoPage } from './todo-page';\nimport { SettingsPage } from './settings-page';\n\n// Declare the types of your fixtures.\ntype MyFixtures = {\n  todoPage: TodoPage;\n  settingsPage: SettingsPage;\n};\n\n// Extend base test by providing \"todoPage\" and \"settingsPage\".\n// This new \"test\" can be used in multiple test files, and each of them will get the fixtures.\nexport const test = base.extend<MyFixtures>({\n  todoPage: async ({ page }, use) => {\n    // Set up the fixture.\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n\n    // Use the fixture value in the test.\n    await use(todoPage);\n\n    // Clean up the fixture.\n    await todoPage.removeAll();\n  },\n\n  settingsPage: async ({ page }, use) => {\n    await use(new SettingsPage(page));\n  },\n});\nexport { expect } from '@playwright/test';\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// my-test.js\nconst base = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\nconst { SettingsPage } = require('./settings-page');\n\n// Extend base test by providing \"todoPage\" and \"settingsPage\".\n// This new \"test\" can be used in multiple test files, and each of them will get the fixtures.\nexports.test = base.test.extend({\n  todoPage: async ({ page }, use) => {\n    // Set up the fixture.\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n\n    // Use the fixture value in the test.\n    await use(todoPage);\n\n    // Clean up the fixture.\n    await todoPage.removeAll();\n  },\n\n  settingsPage: async ({ page }, use) => {\n    await use(new SettingsPage(page));\n  },\n});\nexports.expect = base.expect;\n")))),(0,n.kt)("h2",g({},{id:"using-a-fixture"}),"Using a fixture"),(0,n.kt)("p",null,"Just mention fixture in your test function argument, and test runner will take care of it. Fixtures are also available in hooks and other fixtures. If you use TypeScript, fixtures will have the right type."),(0,n.kt)("p",null,"Below we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"todoPage")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"settingsPage")," fixtures defined above."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from './my-test';\n\ntest.beforeEach(async ({ settingsPage }) => {\n  await settingsPage.switchToDarkMode();\n});\n\ntest('basic test', async ({ todoPage, page }) => {\n  await todoPage.addToDo('something nice');\n  await expect(page.locator('.todo-item')).toContainText(['something nice']);\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('./my-test');\n\ntest.beforeEach(async ({ settingsPage }) => {\n  await settingsPage.switchToDarkMode();\n});\n\ntest('basic test', async ({ todoPage, page }) => {\n  await todoPage.addToDo('something nice');\n  await expect(page.locator('.todo-item')).toContainText(['something nice']);\n});\n")))),(0,n.kt)("h2",g({},{id:"overriding-fixtures"}),"Overriding fixtures"),(0,n.kt)("p",null,"In addition to creating your own fixtures, you can also override existing fixtures to fit your needs. Consider the following example which overrides the ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," fixture by automatically navigating to some ",(0,n.kt)("inlineCode",{parentName:"p"},"baseURL"),":"),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"import { test as base } from '@playwright/test';\n\nexport const test = base.extend({\n  page: async ({ baseURL, page }, use) => {\n    await page.goto(baseURL);\n    await use(page);\n  },\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"const base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  page: async ({ baseURL, page }, use) => {\n    await page.goto(baseURL);\n    await use(page);\n  },\n});\n")))),(0,n.kt)("p",null,"Notice that in this example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," fixture is able to depend on other built-in fixtures such as ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-testoptions#test-options-base-url"}),"testOptions.baseURL"),". We can now configure ",(0,n.kt)("inlineCode",{parentName:"p"},"baseURL")," in the configuration file, or locally in the test file with ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-test#test-use"}),"test.use(options)"),"."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\n\ntest.use({ baseURL: 'https://playwright.dev' });\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// example.spec.js\n\ntest.use({ baseURL: 'https://playwright.dev' });\n")))),(0,n.kt)("p",null,"Fixtures can also be overridden where the base fixture is completely replaced with something different. For example, we could override the ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-testoptions#test-options-storage-state"}),"testOptions.storageState")," fixture to provide our own data."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"import { test as base } from '@playwright/test';\n\nexport const test = base.extend({\n  storageState: async ({}, use) => {\n    const cookie = await getAuthCookie();\n    await use({ cookies: [cookie] });\n  },\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"const base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  storageState: async ({}, use) => {\n    const cookie = await getAuthCookie();\n    await use({ cookies: [cookie] });\n  },\n});\n")))),(0,n.kt)("h2",g({},{id:"worker-scoped-fixtures"}),"Worker-scoped fixtures"),(0,n.kt)("p",null,"Playwright Test uses ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/test-parallel"}),"worker processes")," to run test files. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),(0,n.kt)("p",null,"Below we'll create an ",(0,n.kt)("inlineCode",{parentName:"p"},"account")," fixture that will be shared by all tests in the same worker, and override the ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," fixture to login into this account for each test. To generate unique accounts, we'll use the ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-workerinfo#worker-info-worker-index"}),"workerInfo.workerIndex")," that is available to any test or fixture. Note the tuple-like syntax for the worker fixture - we have to pass ",(0,n.kt)("inlineCode",{parentName:"p"},"{scope: 'worker'}")," so that test runner sets up this fixture once per worker."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"// my-test.ts\nimport { test as base } from '@playwright/test';\n\ntype Account = {\n  username: string;\n  password: string;\n};\n\n// Note that we pass worker fixture types as a second template parameter.\nexport const test = base.extend<{}, { account: Account }>({\n  account: [async ({ browser }, use, workerInfo) => {\n    // Unique username.\n    const username = 'user' + workerInfo.workerIndex;\n    const password = 'verysecure';\n\n    // Create the account with Playwright.\n    const page = await browser.newPage();\n    await page.goto('/signup');\n    await page.locator('#username').fill(username);\n    await page.locator('#password').fill(password);\n    await page.locator('text=Sign up').click();\n    // Make sure everything is ok.\n    await expect(page.locator('#result')).toHaveText('Success');\n    // Do not forget to cleanup.\n    await page.close();\n\n    // Use the account value.\n    await use({ username, password });\n  }, { scope: 'worker' }],\n\n  page: async ({ page, account }, use) => {\n    // Sign in with our account.\n    await page.goto('/signin');\n    await page.locator('#username').fill(username);\n    await page.locator('#password').fill(password);\n    await page.locator('text=Sign in').click();\n    await expect(page.locator('#userinfo')).toHaveText(username);\n\n    // Use signed-in page in the test.\n    await use(page);\n  },\n});\nexport { expect } from '@playwright/test';\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// my-test.js\nconst base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  account: [async ({ browser }, use, workerInfo) => {\n    // Unique username.\n    const username = 'user' + workerInfo.workerIndex;\n    const password = 'verysecure';\n\n    // Create the account with Playwright.\n    const page = await browser.newPage();\n    await page.goto('/signup');\n    await page.locator('#username').fill(username);\n    await page.locator('#password').fill(password);\n    await page.locator('text=Sign up').click();\n    // Make sure everything is ok.\n    await expect(page.locator('#result')).toHaveText('Success');\n    // Do not forget to cleanup.\n    await page.close();\n\n    // Use the account value.\n    await use({ username, password });\n  }, { scope: 'worker' }],\n\n  page: async ({ page, account }, use) => {\n    // Sign in with our account.\n    await page.goto('/signin');\n    await page.locator('#username').fill(username);\n    await page.locator('#password').fill(password);\n    await page.locator('text=Sign in').click();\n    await expect(page.locator('#userinfo')).toHaveText(username);\n\n    // Use signed-in page in the test.\n    await use(page);\n  },\n});\nexports.expect = base.expect;\n")))),(0,n.kt)("h2",g({},{id:"automatic-fixtures"}),"Automatic fixtures"),(0,n.kt)("p",null,"Automatic fixtures are set up for each test/worker, even when the test does not list them directly. To create an automatic fixture, use the tuple syntax and pass ",(0,n.kt)("inlineCode",{parentName:"p"},"{ auto: true }"),"."),(0,n.kt)("p",null,"Here is an example fixture that automatically attaches debug logs when the test fails, so we can later review the logs in the reporter. Note how it uses ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-testinfo",title:"TestInfo"}),"TestInfo")," object that is available in each test/fixture to retrieve metadata about the test being run."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"// my-test.ts\nimport * as debug from 'debug';\nimport * as fs from 'fs';\nimport { test as base } from '@playwright/test';\n\nexport const test = base.extend<{ saveLogs: void }>({\n  saveLogs: [async ({}, use, testInfo) => {\n    // Collecting logs during the test.\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('myserver');\n\n    await use();\n\n    // After the test we can check whether the test passed or failed.\n    if (testInfo.status !== testInfo.expectedStatus) {\n      // outputPath() API guarantees a unique file name.\n      const logFile = testInfo.outputPath('logs.txt');\n      await fs.promises.writeFile(logFile, logs.join('\\n'), 'utf8');\n      testInfo.attachments.push({ name: 'logs', contentType: 'text/plain', path: logFile });\n    }\n  }, { auto: true }],\n});\nexport { expect } from '@playwright/test';\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// my-test.js\nconst debug = require('debug');\nconst fs = require('fs');\nconst base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  saveLogs: [async ({}, use, testInfo) => {\n    // Collecting logs during the test.\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('myserver');\n\n    await use();\n\n    // After the test we can check whether the test passed or failed.\n    if (testInfo.status !== testInfo.expectedStatus) {\n      // outputPath() API guarantees a unique file name.\n      const logFile = testInfo.outputPath('logs.txt');\n      await fs.promises.writeFile(logFile, logs.join('\\n'), 'utf8');\n      testInfo.attachments.push({ name: 'logs', contentType: 'text/plain', path: logFile });\n    }\n  }, { auto: true }],\n});\n")))),(0,n.kt)("h2",g({},{id:"fixture-timeout"}),"Fixture timeout"),(0,n.kt)("p",null,"By default, fixture shares timeout with the test. However, for slow fixtures, especially ",(0,n.kt)("a",g({parentName:"p"},{href:"#worker-scoped-fixtures"}),"worker-scoped")," ones, it is convenient to have a separate timeout. This way you can keep the overall test timeout small, and give the slow fixture more time."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"import { test as base, expect } from '@playwright/test';\n\nconst test = base.extend<{ slowFixture: string }>({\n  slowFixture: [async ({}, use) => {\n    // ... perform a slow operation ...\n    await use('hello');\n  }, { timeout: 60000 }]\n});\n\ntest('example test', async ({ slowFixture }) => {\n  // ...\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"const { test: base, expect } = require('@playwright/test');\n\nconst test = base.extend({\n  slowFixture: [async ({}, use) => {\n    // ... perform a slow operation ...\n    await use('hello');\n  }, { timeout: 60000 }]\n});\n\ntest('example test', async ({ slowFixture }) => {\n  // ...\n});\n")))),(0,n.kt)("h2",g({},{id:"fixtures-options"}),"Fixtures-options"),(0,n.kt)("div",g({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Overriding custom fixtures in the config file has changed in version 1.18. ",(0,n.kt)("a",g({parentName:"p"},{href:"./release-notes#breaking-change-custom-config-options"}),"Learn more"),"."))),(0,n.kt)("p",null,'Playwright Test supports running multiple test projects that can be separately configured. You can use "option" fixtures to make your configuration options declarative and type-checked. Learn more about ',(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/test-parameterize"}),"parametrizing tests"),"."),(0,n.kt)("p",null,"Below we'll create a ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultItem")," option in addition to the ",(0,n.kt)("inlineCode",{parentName:"p"},"todoPage")," fixture from other examples. This option will be set in configuration file. Note the tuple syntax and ",(0,n.kt)("inlineCode",{parentName:"p"},"{ option: true }")," argument."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport { TodoPage } from './todo-page';\n\n// Declare your options to type-check your configuration.\nexport type MyOptions = {\n  defaultItem: string;\n};\ntype MyFixtures = {\n  todoPage: TodoPage;\n};\n\n// Specify both option and fixture types.\nexport const test = base.extend<MyOptions & MyFixtures>({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  defaultItem: ['Something nice', { option: true }],\n\n  // Our \"todoPage\" fixture depends on the option.\n  todoPage: async ({ page, defaultItem }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo(defaultItem);\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\nexport { expect } from '@playwright/test';\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// my-test.js\nconst base = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\nexports.test = base.test.extend({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  defaultItem: ['Something nice', { option: true }],\n\n  // Our \"todoPage\" fixture depends on the option.\n  todoPage: async ({ page, defaultItem }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo(defaultItem);\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\nexports.expect = base.expect;\n")))),(0,n.kt)("p",null,"We can now use ",(0,n.kt)("inlineCode",{parentName:"p"},"todoPage")," fixture as usual, and set the ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultItem")," option in the config file."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nimport { MyOptions } from './my-test';\n\nconst config: PlaywrightTestConfig<MyOptions> = {\n  projects: [\n    {\n      name: 'shopping',\n      use: { defaultItem: 'Buy milk' },\n    },\n    {\n      name: 'wellbeing',\n      use: { defaultItem: 'Exercise!' },\n    },\n  ]\n};\nexport default config;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig<{ defaultItem: string }>} */\nconst config = {\n  projects: [\n    {\n      name: 'shopping',\n      use: { defaultItem: 'Buy milk' },\n    },\n    {\n      name: 'wellbeing',\n      use: { defaultItem: 'Exercise!' },\n    },\n  ]\n};\n\nmodule.exports = config;\n")))))}k.isMDXComponent=!0}}]);