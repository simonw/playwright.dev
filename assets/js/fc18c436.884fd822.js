"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7548],{56107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=(n(26396),n(58215),["components"]),l={id:"evaluating",title:"Evaluating JavaScript"},u=void 0,s={unversionedId:"evaluating",id:"version-1.18/evaluating",isDocsHomePage:!1,title:"Evaluating JavaScript",description:"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers.",source:"@site/versioned_docs/version-1.18/evaluating.mdx",sourceDirName:".",slug:"/evaluating",permalink:"/docs/1.18/evaluating",tags:[],version:"1.18",frontMatter:{id:"evaluating",title:"Evaluating JavaScript"},sidebar:"version-1.18/docs",previous:{title:"Emulation",permalink:"/docs/1.18/emulation"},next:{title:"Events",permalink:"/docs/1.18/events"}},p=[{value:"Evaluation Argument",id:"evaluation-argument",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const href = await page.evaluate(() => document.location.href);\n")),(0,i.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const status = await page.evaluate(async () => {\n  const response = await fetch(location.href);\n  return response.status;\n});\n")),(0,i.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,i.kt)("p",null,"Playwright evaluation methods like ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")," take a single optional argument. This argument can be a mix of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.18/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// A primitive value.\nawait page.evaluate(num => num, 42);\n\n// An array.\nawait page.evaluate(array => array.length, [1, 2, 3]);\n\n// An object.\nawait page.evaluate(object => object.foo, { foo: 'bar' });\n\n// A single handle.\nconst button = await page.evaluate('window.button');\nawait page.evaluate(button => button.textContent, button);\n\n// Alternative notation using elementHandle.evaluate.\nawait button.evaluate((button, from) => button.textContent.substring(from), 5);\n\n// Object with multiple handles.\nconst button1 = await page.evaluate('window.button1');\nconst button2 = await page.evaluate('window.button2');\nawait page.evaluate(\n    o => o.button1.textContent + o.button2.textContent,\n    { button1, button2 });\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nawait page.evaluate(\n    ({ button1, button2 }) => button1.textContent + button2.textContent,\n    { button1, button2 });\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\nawait page.evaluate(\n    ([b1, b2]) => b1.textContent + b2.textContent,\n    [button1, button2]);\n\n// Any non-cyclic mix of serializables and handles works.\nawait page.evaluate(\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo),\n    { button1, list: [button2], foo: null });\n")),(0,i.kt)("p",null,"Right:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = { text: 'some data', value: 1 };\n// Pass |data| as a parameter.\nconst result = await page.evaluate(data => {\n  window.myApp.use(data);\n}, data);\n")),(0,i.kt)("p",null,"Wrong:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = { text: 'some data', value: 1 };\nconst result = await page.evaluate(() => {\n  // There is no |data| in the web page.\n  window.myApp.use(data);\n});\n")))}d.isMDXComponent=!0}}]);