"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8903],{67428:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),o=n(63366),u=(n(67294),n(3905)),l=n(26396),r=n(58215),s=["components"],i={id:"evaluating",title:"Evaluating JavaScript"},p=void 0,c={unversionedId:"evaluating",id:"version-1.19/evaluating",isDocsHomePage:!1,title:"Evaluating JavaScript",description:"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers.",source:"@site/versioned_docs/version-1.19/evaluating.mdx",sourceDirName:".",slug:"/evaluating",permalink:"/python/docs/evaluating",tags:[],version:"1.19",frontMatter:{id:"evaluating",title:"Evaluating JavaScript"},sidebar:"version-1.19/docs",previous:{title:"Emulation",permalink:"/python/docs/emulation"},next:{title:"Events",permalink:"/python/docs/events"}},d=[{value:"Evaluation Argument",id:"evaluation-argument",children:[],level:2}],b={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,u.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,u.kt)("p",null,"The ",(0,u.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,u.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,u.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,u.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},"href = page.evaluate('() => document.location.href')\n"))),(0,u.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},"href = await page.evaluate('() => document.location.href')\n")))),(0,u.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,u.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},'status = page.evaluate("""async () => {\n  response = fetch(location.href)\n  return response.status\n}""")\n'))),(0,u.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},'status = await page.evaluate("""async () => {\n  response = await fetch(location.href)\n  return response.status\n}""")\n')))),(0,u.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,u.kt)("p",null,"Playwright evaluation methods like ",(0,u.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")," take a single optional argument. This argument can be a mix of ",(0,u.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,u.kt)("a",{parentName:"p",href:"/python/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,u.kt)("a",{parentName:"p",href:"/python/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,u.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},"# A primitive value.\npage.evaluate('num => num', 42)\n\n# An array.\npage.evaluate('array => array.length', [1, 2, 3])\n\n# An object.\npage.evaluate('object => object.foo', { 'foo': 'bar' })\n\n# A single handle.\nbutton = page.evaluate('window.button')\npage.evaluate('button => button.textContent', button)\n\n# Alternative notation using elementHandle.evaluate.\nbutton.evaluate('(button, from) => button.textContent.substring(from)', 5)\n\n# Object with multiple handles.\nbutton1 = page.evaluate('window.button1')\nbutton2 = page.evaluate('.button2')\npage.evaluate(\"\"\"o => o.button1.textContent + o.button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Object destructuring works. Note that property names must match\n# between the destructured object and the argument.\n# Also note the required parenthesis.\npage.evaluate(\"\"\"\n    ({ button1, button2 }) => button1.textContent + button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Array works as well. Arbitrary names can be used for destructuring.\n# Note the required parenthesis.\npage.evaluate(\"\"\"\n    ([b1, b2]) => b1.textContent + b2.textContent\"\"\",\n    [button1, button2])\n\n# Any non-cyclic mix of serializables and handles works.\npage.evaluate(\"\"\"\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo)\"\"\",\n    { 'button1': button1, 'list': [button2], 'foo': None })\n"))),(0,u.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},"# A primitive value.\nawait page.evaluate('num => num', 42)\n\n# An array.\nawait page.evaluate('array => array.length', [1, 2, 3])\n\n# An object.\nawait page.evaluate('object => object.foo', { 'foo': 'bar' })\n\n# A single handle.\nbutton = await page.evaluate('button')\nawait page.evaluate('button => button.textContent', button)\n\n# Alternative notation using elementHandle.evaluate.\nawait button.evaluate('(button, from) => button.textContent.substring(from)', 5)\n\n# Object with multiple handles.\nbutton1 = await page.query_selector('window.button1')\nbutton2 = await page.query_selector('window.button2')\nawait page.evaluate(\"\"\"\n    o => o.button1.textContent + o.button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Object destructuring works. Note that property names must match\n# between the destructured object and the argument.\n# Also note the required parenthesis.\nawait page.evaluate(\"\"\"\n    ({ button1, button2 }) => button1.textContent + button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Array works as well. Arbitrary names can be used for destructuring.\n# Note the required parenthesis.\nawait page.evaluate(\"\"\"\n    ([b1, b2]) => b1.textContent + b2.textContent\"\"\",\n    [button1, button2])\n\n# Any non-cyclic mix of serializables and handles works.\nawait page.evaluate(\"\"\"\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo)\"\"\",\n    { 'button1': button1, 'list': [button2], 'foo': None })\n")))),(0,u.kt)("p",null,"Right:"),(0,u.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},"data = { 'text': 'some data', 'value': 1 }\n# Pass |data| as a parameter.\nresult = page.evaluate(\"\"\"data => {\n  window.myApp.use(data)\n}\"\"\", data)\n"))),(0,u.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},"data = { 'text': 'some data', 'value': 1 }\n# Pass |data| as a parameter.\nresult = await page.evaluate(\"\"\"data => {\n  window.myApp.use(data)\n}\"\"\", data)\n")))),(0,u.kt)("p",null,"Wrong:"),(0,u.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,u.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},"data = { 'text': 'some data', 'value': 1 }\nresult = page.evaluate(\"\"\"() => {\n  # There is no |data| in the web page.\n  window.myApp.use(data)\n}\"\"\")\n"))),(0,u.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-py"},"data = { 'text': 'some data', 'value': 1 }\nresult = await page.evaluate(\"\"\"() => {\n  # There is no |data| in the web page.\n  window.myApp.use(data)\n}\"\"\")\n")))))}m.isMDXComponent=!0}}]);