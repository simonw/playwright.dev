"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3370],{27822:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var n=t(87462),l=t(63366),s=(t(67294),t(3905)),r=(t(26396),t(58215),["components"]),i={id:"handles",title:"Handles"},o=void 0,d={unversionedId:"handles",id:"version-1.16/handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.16/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/dotnet/docs/1.16/handles",tags:[],version:"1.16",frontMatter:{id:"handles",title:"Handles"},sidebar:"version-1.16/docs",previous:{title:"Extensibility",permalink:"/dotnet/docs/1.16/extensibility"},next:{title:"Input",permalink:"/dotnet/docs/1.16/input"}},c=[{value:"API reference",id:"api-reference",children:[],level:3},{value:"Element Handles",id:"element-handles",children:[],level:2},{value:"Handles as parameters",id:"handles-as-parameters",children:[],level:2},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2}],p={toc:c};function h(e){var a=e.components,t=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,s.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,s.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,s.kt)("p",null,"Here is the easiest way to obtain a ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var jsHandle = await page.EvaluateHandleAsync("window");\n//  Use jsHandle for evaluations.\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var ulElementHandle = await page.WaitForSelectorAsync("ul");\n//  Use ulElementHandle for actions and evaluation.\n')),(0,s.kt)("h2",{id:"element-handles"},"Element Handles"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," rather than using the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),(0,s.kt)("p",null,"When ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-selector"},"Page.WaitForSelectorAsync(selector, options)")," or ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-frame#frame-wait-for-selector"},"Frame.WaitForSelectorAsync(selector, options)")," methods. These APIs wait for the element to be attached and visible."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'// Get the element handle\nvar jsHandle = await page.WaitForSelectorAsync("#box");\nvar elementHandle = jsHandle as ElementHandle;\n\n// Assert bounding box for the element\nvar boundingBox = await elementHandle.BoundingBoxAsync();\nAssert.Equal(100, boundingBox.Width);\n\n// Assert attribute for the element\nvar classNames = await elementHandle.GetAttributeAsync("class");\nAssert.True(classNames.Contains("highlighted"));\n')),(0,s.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,s.kt)("p",null,"Handles can be passed into the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create new array in page.\nvar myArrayHandle = await page.EvaluateHandleAsync(@"() => {\n    window.myArray = [1];\n    return myArray;\n}");\n\n// Get the length of the array.\nvar length = await page.EvaluateAsync<int>("a => a.length", myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.EvaluateAsync("arg => arg.myArray.add(arg.newElement)",\n    new { myArray = myArrayHandle, newElement = 2 });\n\n// Release the object when it is no longer needed.\nawait myArrayHandle.DisposeAsync();\n')),(0,s.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,s.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-evaluate-handle"},"Page.EvaluateHandleAsync(expression, arg)"),", ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-query-selector"},"Page.QuerySelectorAsync(selector, options)")," or ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-query-selector-all"},"Page.QuerySelectorAllAsync(selector)")," or their frame counterparts ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-frame#frame-evaluate-handle"},"Frame.EvaluateHandleAsync(expression, arg)"),", ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-frame#frame-query-selector"},"Frame.QuerySelectorAsync(selector, options)")," or ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-frame#frame-query-selector-all"},"Frame.QuerySelectorAllAsync(selector)"),". Once created, handles will retain object from ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-jshandle#js-handle-dispose"},"JsHandle.DisposeAsync()")," method."),(0,s.kt)("h3",{id:"api-reference-1"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle#element-handle-bounding-box"},"ElementHandle.BoundingBoxAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle#element-handle-get-attribute"},"ElementHandle.GetAttributeAsync(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.InnerTextAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.InnerHTMLAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle#element-handle-text-content"},"ElementHandle.TextContentAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-jshandle#js-handle-evaluate"},"JsHandle.EvaluateAsync(expression, arg)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-evaluate-handle"},"Page.EvaluateHandleAsync(expression, arg)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-query-selector"},"Page.QuerySelectorAsync(selector, options)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-query-selector-all"},"Page.QuerySelectorAllAsync(selector)"))))}h.isMDXComponent=!0}}]);