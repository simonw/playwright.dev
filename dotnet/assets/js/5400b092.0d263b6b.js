"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5103],{9406:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=(a(6396),a(8215),["components"]),s={id:"verification",title:"Verification"},o=void 0,c={unversionedId:"verification",id:"verification",isDocsHomePage:!1,title:"Verification",description:"We recommend Web-First Assertions that automatically retry until the expected condition is met instead. This helps reducing the flakiness of the tests.",source:"@site/docs/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/dotnet/docs/next/verification",tags:[],version:"current",frontMatter:{id:"verification",title:"Verification"}},p=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Attribute value",id:"attribute-value",children:[],level:2},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Text content",id:"text-content-1",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2},{value:"Custom assertions",id:"custom-assertions",children:[],level:2},{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference-7",children:[],level:3}],level:2},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-8",children:[],level:3}],level:2},{value:"Page events",id:"page-events",children:[{value:"<code>&quot;requestfailed&quot;</code>",id:"requestfailed",children:[],level:4},{value:"<code>&quot;dialog&quot;</code> - handle alert, confirm, prompt",id:"dialog---handle-alert-confirm-prompt",children:[],level:4},{value:"<code>&quot;popup&quot;</code> - handle popup windows",id:"popup---handle-popup-windows",children:[],level:4},{value:"API reference",id:"api-reference-9",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We recommend ",(0,r.kt)("a",{parentName:"p",href:"./test-assertions"},"Web-First Assertions")," that automatically retry until the expected condition is met instead. This helps reducing the flakiness of the tests."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,r.kt)("h2",{id:"text-content"},"Text content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.Locator("nav:first-child").TextContentAsync();\nAssert.AreEqual("home", content);\n')),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-text-content"},"Page.TextContentAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-text-content"},"ElementHandle.TextContentAsync()"))),(0,r.kt)("h2",{id:"inner-text"},"Inner text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.Locator(".selected").InnerTextAsync();\nAssert.AreEqual("value", content);\n')),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-inner-text"},"Page.InnerTextAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.InnerTextAsync()"))),(0,r.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var value = await page.Locator("input").GetAttributeAsync("alt");\nAssert.AreEqual("Text", value);\n')),(0,r.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var checked = await page.Locator("input").IsCheckedAsync();\nAssert.True(checked);\n')),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-checked"},"Page.IsCheckedAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.IsCheckedAsync()"))),(0,r.kt)("h2",{id:"text-content-1"},"Text content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.locator("nav:first-child").TextContentAsync();\nAssert.AreEqual("home", content);\n')),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-eval-on-selector"},"Page.EvalOnSelectorAsync(selector, expression, arg, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-jshandle#js-handle-evaluate"},"JsHandle.EvaluateAsync(expression, arg)"))),(0,r.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var html = await page.Locator("div.result").InnerHTMLAsync();\nAssert.AreEqual("<p>Result</p>", html);\n')),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-inner-html"},"Page.InnerHTMLAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.InnerHTMLAsync()"))),(0,r.kt)("h2",{id:"visibility"},"Visibility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var visibility = await page.Locator("input").IsVisibleAsync();\nAssert.True(visibility);\n')),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-visible"},"Page.IsVisibleAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-visible"},"ElementHandle.IsVisibleAsync()"))),(0,r.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var enabled = await page.Locator("input").IsEnabledAsync();\nAssert.True(enabled);\n')),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-enabled"},"Page.IsEnabledAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-enabled"},"ElementHandle.IsEnabledAsync()"))),(0,r.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,r.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Assert local storage value\nvar userId = await page.EvaluateAsync<string>("() => window.localStorage.getItem(\'userId\')");\nAssert.NotNull(userId);\n\n// Assert value for input element\nvar value = await page.Locator("#search").InputValueAsync();\nAssert.AreEqual("query", value);\n\n// Assert computed style\nvar fontSize = await page.Locator("div").EvalOnSelectorAsync<string>("el => window.getComputedStyle(el).fontSize");\nAssert.AreEqual("16px", fontSize);\n\n// Assert list length\nvar length = await page.Locator("li.selected").CountAsync();\nAssert.AreEqual(3, length);\n')),(0,r.kt)("h2",{id:"console-logs"},"Console logs"),(0,r.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Listen for all System.out.printlns\npage.Console += (_, msg) => Console.WriteLine(msg.Text);\n\n// Listen for all console events and handle errors\npage.Console += (_, msg) =>\n{\n    if ("error".Equals(msg.Type))\n        Console.WriteLine("Error text: " + msg.Text);\n};\n\n// Get the next System.out.println\nvar waitForMessageTask = page.WaitForConsoleMessageAsync();\nawait page.EvaluateAsync("console.log(\'hello\', 42, { foo: \'bar\' });");\nvar message = await waitForMessageTask;\n// Deconstruct console.log arguments\nawait message.Args.ElementAt(0).JsonValueAsync<string>(); // hello\nawait message.Args.ElementAt(1).JsonValueAsync<int>(); // 42\n')),(0,r.kt)("h3",{id:"api-reference-7"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-console"},"event Page.Console"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"page-errors"},"Page errors"),(0,r.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,r.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Log all uncaught errors to the terminal\npage.PageError += (_, exception) =>\n{\n  Console.WriteLine("Uncaught exception: " + exception);\n};\n')),(0,r.kt)("h3",{id:"api-reference-8"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-page-error"},"event Page.PageError"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"page-events"},"Page events"),(0,r.kt)("h4",{id:"requestfailed"},(0,r.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,r.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,r.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'page.RequestFailed += (_, request) =>\n{\n    Console.WriteLine(request.Url + " " + request.Failure);\n};\n')),(0,r.kt)("h4",{id:"popup---handle-popup-windows"},(0,r.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync("#open");\n});\n')),(0,r.kt)("h3",{id:"api-reference-9"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-request-failed"},"event Page.RequestFailed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-dialog"},"event Page.Dialog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-event-popup"},"event Page.Popup"))))}u.isMDXComponent=!0}}]);