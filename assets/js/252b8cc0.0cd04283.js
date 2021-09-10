"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9482],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(67294),n=r(79443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,u=e.values,m=e.groupId,d=e.className,g=i(),f=g.tabGroupChoices,k=g.setTabGroupChoices,h=(0,a.useState)(n),y=h[0],N=h[1],w=a.Children.toArray(e.children),b=[];if(null!=m){var v=f[m];null!=v&&v!==y&&u.some((function(e){return e.value===v}))&&N(v)}var P=function(e){var t=e.currentTarget,r=b.indexOf(t),a=u[r].value;N(a),null!=m&&(k(m,a),setTimeout((function(){var e,r,a,n,i,o,l,p;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,o=window,l=o.innerHeight,p=o.innerWidth,r>=0&&i<=p&&n<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case c:var a=b.indexOf(e.target)+1;r=b[a]||b[0];break;case p:var n=b.indexOf(e.target)-1;r=b[n]||b[b.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},u.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:P,onClick:P},r)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},38578:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o=(r(55064),r(58215),{id:"protractor-js",title:"Migrating from Protractor"}),l=void 0,s={unversionedId:"protractor-js",id:"protractor-js",isDocsHomePage:!1,title:"Migrating from Protractor",description:"- Migration Principes",source:"@site/docs/protractor.mdx",sourceDirName:".",slug:"/protractor-js",permalink:"/docs/next/protractor-js",version:"current",frontMatter:{id:"protractor-js",title:"Migrating from Protractor"},sidebar:"docs",previous:{title:"Videos",permalink:"/docs/next/videos"},next:{title:"Playwright Library",permalink:"/docs/next/library"}},p=[{value:"Migration Principes",id:"migration-principes",children:[]},{value:"Cheat Sheet",id:"cheat-sheet",children:[]},{value:"Example",id:"example",children:[]},{value:"Polyfilling <code>waitForAngular</code>",id:"polyfilling-waitforangular",children:[]},{value:"Playwright Test Super Powers",id:"playwright-test-super-powers",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],c={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#migration-principes"},"Migration Principes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cheat-sheet"},"Cheat Sheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#example"},"Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#polyfilling-waitforangular"},"Polyfilling ",(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#playwright-test-super-powers"},"Playwright Test Super Powers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-reading"},"Further Reading"))),(0,i.kt)("h2",{id:"migration-principes"},"Migration Principes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'No need for "webdriver-manager" / Selenium.'),(0,i.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://www.protractortest.org/#/api?view=ElementFinder"},"ElementFinder")," \u21c4 ",(0,i.kt)("a",{parentName:"li",href:"./api/class-locator"},"Playwright Test Locator")),(0,i.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"},(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," \u21c4 Playwright Test ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/actionability"},"auto-waiting")),(0,i.kt)("li",{parentName:"ul"},"Don\u2019t forget to await in Playwright Test")),(0,i.kt)("h2",{id:"cheat-sheet"},"Cheat Sheet"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Protractor"),(0,i.kt)("th",{parentName:"tr",align:null},"Playwright Test"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.model('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-model=\"...\"]')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.css('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('...')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.repeater('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-repeat=\"...\"]')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.cssContainingText('..1..', '..2..'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('..1.. >> text=\"..2..\"')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element.all")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"browser.get(url)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await page.goto(url)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"browser.getCurrentUrl()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.url()"))))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Protractor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('angularjs homepage todo list', function() {\n  it('should add a todo', function() {\n    browser.get('https://angularjs.org');\n\n    element(by.model('todoList.todoText')).sendKeys('first test');\n    element(by.css('[value=\"add\"]')).click();\n\n    var todoList = element.all(by.repeater('todo in todoList.todos'));\n    expect(todoList.count()).toEqual(3);\n    expect(todoList.get(2).getText()).toEqual('first test');\n\n    // You wrote your first test, cross it off the list\n    todoList.get(2).element(by.css('input')).click();\n    var completedAmount = element.all(by.css('.done-true'));\n    expect(completedAmount.count()).toEqual(2);\n  });\n});\n")),(0,i.kt)("p",null,"Line-by-line migration to Playwright Test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test'); // 1\n\ntest.describe('angularjs homepage todo list', function() {\n  test('should add a todo', async function({page}) { // 2, 3\n    await page.goto('https://angularjs.org'); // 4\n\n    await page.locator('[ng-model=\"todoList.todoText\"]').fill('first test');\n    await page.locator('[value=\"add\"]').click();\n\n    var todoList = page.locator('[ng-repeat=\"todo in todoList.todos\"]'); // 5\n    await expect(todoList).toHaveCount(3);\n    await expect(todoList.nth(2)).toHaveText('first test', {\n      useInnerText: true,\n    });\n\n    // You wrote your first test, cross it off the list\n    await todoList.nth(2).locator('input').click();\n    var completedAmount = page.locator('.done-true');\n    await expect(completedAmount).toHaveCount(2);\n  });\n}\n")),(0,i.kt)("p",null,"Migration highlights (see inline comments in the Playwright Test code snippet):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Each Playwright Test file has explicit import of the ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"expect")," functions 2. Test function is marked with ",(0,i.kt)("inlineCode",{parentName:"li"},"async")," 3. Playwright Test is given a ",(0,i.kt)("inlineCode",{parentName:"li"},"page")," as one of its parameters. This is one of the many ",(0,i.kt)("a",{parentName:"li",href:"./api/class-fixtures"},"useful fixtures")," in Playwright Test. 4. Almost all Playwright calls are prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"await")," 5. Locator creation with ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-locator"},"page.locator(selector)")," is one of the few methods that is sync.")),(0,i.kt)("h2",{id:"polyfilling-waitforangular"},"Polyfilling ",(0,i.kt)("inlineCode",{parentName:"h2"},"waitForAngular")),(0,i.kt)("p",null,"Playwright Test has built-in ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/actionability"},"auto-waiting")," that makes protractor's ",(0,i.kt)("a",{parentName:"p",href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"},(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," unneeded in general case."),(0,i.kt)("p",null,"However, it might come handy in some edge cases. Here's how to polyfill ",(0,i.kt)("inlineCode",{parentName:"p"},"waitForAngular")," function in Playwright Test:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure you have protractor installed in your package.json 2. Polyfill function"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function waitForAngular(page) {\n\u200bconst clientSideScripts = require('protractor/built/clientsidescripts.js');\n\n\u200basync function executeScriptAsync(page, script, ...scriptArgs) {\n  \u200bawait page.evaluate(`\n    \u200bnew Promise((resolve, reject) => {\n      \u200bconst callback = (errMessage) => {\n        \u200bif (errMessage)\n          \u200breject(new Error(errMessage));\n        \u200belse\n          \u200bresolve();\n      \u200b};\n      \u200b(function() {${script}}).apply(null, [...${JSON.stringify(scriptArgs)}, callback]);\n    \u200b})\n  \u200b`);\n\u200b}\n\n\u200bawait executeScriptAsync(page, clientSideScripts.waitForAngular, '');\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Polyfill usage"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const page = await context.newPage();\nawait page.goto('https://example.org');\nawait waitForAngular(page);\n")),(0,i.kt)("h2",{id:"playwright-test-super-powers"},"Playwright Test Super Powers"),(0,i.kt)("p",null,"Once you're on Playwright Test, you get a lot!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Full zero-configuration TypeScript support"),(0,i.kt)("li",{parentName:"ul"},"Run tests across ",(0,i.kt)("strong",{parentName:"li"},"all web engines")," (Chrome, Firefox, Safari) on ",(0,i.kt)("strong",{parentName:"li"},"any popular operating system")," (Windows, MacOS, Ubuntu)"),(0,i.kt)("li",{parentName:"ul"},"Full support for multiple origins, ",(0,i.kt)("a",{parentName:"li",href:"./api/class-frame"},"(i)frames"),", ",(0,i.kt)("a",{parentName:"li",href:"./multi-pages"},"tabs and contexts")),(0,i.kt)("li",{parentName:"ul"},"Run tests in parallel across multiple browsers"),(0,i.kt)("li",{parentName:"ul"},"Built-in test artifact collection: ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#record-video"},"video recording"),", ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#automatic-screenshots"},"screenshots")," and ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#record-test-trace"},"playwright traces"))),(0,i.kt)("p",null,"Also you get all these \u2728 awesome tools \u2728 that come bundled with Playwright Test:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./inspector"},"Playwright Inspector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./auth#code-generation"},"Playwright Test Code generation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./trace-viewer"},"Playwright Tracing")," for post-mortem debugging")),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"Learn more about Playwright Test runner:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./intro"},"Getting Started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./test-fixtures"},"Fixtures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./api/class-locator"},"Locators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./selectors"},"Selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./test-assertions"},"Assertions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./actionability"},"Auto-waiting"))))}u.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);