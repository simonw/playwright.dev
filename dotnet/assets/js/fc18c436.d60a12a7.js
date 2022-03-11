"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7548],{6107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=(n(6396),n(8215),["components"]),s={id:"evaluating",title:"Evaluating JavaScript"},l=void 0,u={unversionedId:"evaluating",id:"version-1.18/evaluating",isDocsHomePage:!1,title:"Evaluating JavaScript",description:"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers.",source:"@site/versioned_docs/version-1.18/evaluating.mdx",sourceDirName:".",slug:"/evaluating",permalink:"/dotnet/docs/1.18/evaluating",tags:[],version:"1.18",frontMatter:{id:"evaluating",title:"Evaluating JavaScript"},sidebar:"version-1.18/docs",previous:{title:"Emulation",permalink:"/dotnet/docs/1.18/emulation"},next:{title:"Events",permalink:"/dotnet/docs/1.18/events"}},c=[{value:"Evaluation Argument",id:"evaluation-argument",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var href = await page.EvaluateAsync<string>("document.location.href");\n')),(0,i.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'int status = await page.EvaluateAsync<int>(@"async () => {\n  const response = await fetch(location.href);\n  return response.status;\n}");\n')),(0,i.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,i.kt)("p",null,"Playwright evaluation methods like ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")," take a single optional argument. This argument can be a mix of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.18/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// A primitive value.\nawait page.EvaluateAsync<int>("num => num", 42);\n\n// An array.\nawait page.EvaluateAsync<int[]>("array => array.length", new[] { 1, 2, 3 });\n\n// An object.\nawait page.EvaluateAsync<object>("object => object.foo", new { foo = "bar" });\n\n// A single handle.\nvar button = await page.EvaluateAsync("window.button");\nawait page.EvaluateAsync<IJSHandle>("button => button.textContent", button);\n\n// Alternative notation using elementHandle.EvaluateAsync.\nawait button.EvaluateAsync<string>("(button, from) => button.textContent.substring(from)", 5);\n\n// Object with multiple handles.\nvar button1 = await page.EvaluateAsync("window.button1");\nvar button2 = await page.EvaluateAsync("window.button2");\nawait page.EvaluateAsync("o => o.button1.textContent + o.button2.textContent", new { button1, button2 });\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nawait page.EvaluateAsync("({ button1, button2 }) => button1.textContent + button2.textContent", new { button1, button2 });\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\nawait page.EvaluateAsync("([b1, b2]) => b1.textContent + b2.textContent", new[] { button1, button2 });\n\n// Any non-cyclic mix of serializables and handles works.\nawait page.EvaluateAsync("x => x.button1.textContent + x.list[0].textContent + String(x.foo)", new { button1, list = new[] { button2 }, foo = null as object });\n')),(0,i.kt)("p",null,"Right:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var data = new { text = "some data", value = 1};\n// Pass data as a parameter\nvar result = await page.EvaluateAsync("data => { window.myApp.use(data); }", data);\n')),(0,i.kt)("p",null,"Wrong:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var data = new { text = "some data", value = 1};\n// Pass data as a parameter\nvar result = await page.EvaluateAsync(@"data => {\n  // There is no |data| in the web page.\n  window.myApp.use(data); \n}");\n')))}d.isMDXComponent=!0}}]);