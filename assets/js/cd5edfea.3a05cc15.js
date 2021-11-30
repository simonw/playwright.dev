"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[33476],{69734:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return h}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),s=(t(26396),t(58215),["components"]),i={id:"handles",title:"Handles"},d=void 0,o={unversionedId:"handles",id:"handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/docs/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/docs/next/handles",tags:[],version:"current",frontMatter:{id:"handles",title:"Handles"},sidebar:"docs",previous:{title:"Pages and frames",permalink:"/docs/next/frames"},next:{title:"Input",permalink:"/docs/next/input"}},p=[{value:"API reference",id:"api-reference",children:[],level:3},{value:"Element Handles",id:"element-handles",children:[],level:2},{value:"Handles as parameters",id:"handles-as-parameters",children:[],level:2},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2}],c={toc:p};function h(e){var a=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,r.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,r.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,r.kt)("p",null,"Here is the easiest way to obtain a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const jsHandle = await page.evaluateHandle('window');\n//  Use jsHandle for evaluations.\n")),(0,r.kt)("h2",{id:"element-handles"},"Element Handles"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Discouraged")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The use of ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is discouraged, use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," objects and web-first assertions instead."))),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-wait-for-selector"},"page.waitForSelector(selector[, options])")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-frame#frame-wait-for-selector"},"frame.waitForSelector(selector[, options])")," methods. These APIs wait for the element to be attached and visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Get the element handle\nconst elementHandle = page.waitForSelector('#box');\n\n// Assert bounding box for the element\nconst boundingBox = await elementHandle.boundingBox();\nexpect(boundingBox.width).toBe(100);\n\n// Assert attribute for the element\nconst classNames = await elementHandle.getAttribute('class');\nexpect(classNames.includes('highlighted')).toBeTruthy();\n")),(0,r.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,r.kt)("p",null,"Handles can be passed into the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-evaluate"},"page.evaluate(pageFunction[, arg])")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Create new array in page.\nconst myArrayHandle = await page.evaluateHandle(() => {\n  window.myArray = [1];\n  return myArray;\n});\n\n// Get the length of the array.\nconst length = await page.evaluate(a => a.length, myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.evaluate(arg => arg.myArray.push(arg.newElement), {\n  myArray: myArrayHandle,\n  newElement: 2\n});\n\n// Release the object when it's no longer needed.\nawait myArrayHandle.dispose();\n")),(0,r.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,r.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-evaluate-handle"},"page.evaluateHandle(pageFunction[, arg])"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-query-selector"},"page.$(selector[, options])")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-query-selector-all"},"page.$$(selector)")," or their frame counterparts ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-frame#frame-evaluate-handle"},"frame.evaluateHandle(pageFunction[, arg])"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-frame#frame-query-selector"},"frame.$(selector[, options])")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-frame#frame-query-selector-all"},"frame.$$(selector)"),". Once created, handles will retain object from ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle#js-handle-dispose"},"jsHandle.dispose()")," method."),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-bounding-box"},"elementHandle.boundingBox()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-get-attribute"},"elementHandle.getAttribute(name)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-inner-text"},"elementHandle.innerText()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-inner-html"},"elementHandle.innerHTML()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-text-content"},"elementHandle.textContent()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-evaluate"},"jsHandle.evaluate(pageFunction[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-evaluate-handle"},"page.evaluateHandle(pageFunction[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-query-selector"},"page.$(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-query-selector-all"},"page.$$(selector)"))))}h.isMDXComponent=!0}}]);