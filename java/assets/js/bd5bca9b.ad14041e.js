"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4321],{98146:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var n=t(87462),l=t(63366),s=(t(67294),t(3905)),r=(t(26396),t(58215),["components"]),i={id:"class-jshandle",title:"JSHandle"},d=void 0,o={unversionedId:"api/class-jshandle",id:"api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the Page.evaluateHandle(expression[, arg]) method.",source:"@site/docs/api/class-jshandle.mdx",sourceDirName:"api",slug:"/api/class-jshandle",permalink:"/java/docs/next/api/class-jshandle",tags:[],version:"current",frontMatter:{id:"class-jshandle",title:"JSHandle"},sidebar:"api",previous:{title:"FrameLocator",permalink:"/java/docs/next/api/class-framelocator"},next:{title:"Keyboard",permalink:"/java/docs/next/api/class-keyboard"}},p=[{value:"JSHandle.asElement()",id:"js-handle-as-element",children:[],level:2},{value:"JSHandle.dispose()",id:"js-handle-dispose",children:[],level:2},{value:"JSHandle.evaluate(expression, arg)",id:"js-handle-evaluate",children:[],level:2},{value:"JSHandle.evaluateHandle(expression, arg)",id:"js-handle-evaluate-handle",children:[],level:2},{value:"JSHandle.getProperties()",id:"js-handle-get-properties",children:[],level:2},{value:"JSHandle.getProperty(propertyName)",id:"js-handle-get-property",children:[],level:2},{value:"JSHandle.jsonValue()",id:"js-handle-json-value",children:[],level:2}],h={toc:p};function c(e){var a=e.components,t=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-evaluate-handle"},"Page.evaluateHandle(expression[, arg])")," method."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'JSHandle windowHandle = page.evaluateHandle("() => window");\n// ...\n')),(0,s.kt)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-jshandle#js-handle-dispose"},"JSHandle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,s.kt)("p",null,"JSHandle instances can be used as an argument in ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-eval-on-selector"},"Page.evalOnSelector(selector, expression[, arg, options])"),", ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," and ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-evaluate-handle"},"Page.evaluateHandle(expression[, arg])")," methods."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-as-element"},"JSHandle.asElement()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-dispose"},"JSHandle.dispose()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-evaluate"},"JSHandle.evaluate(expression[, arg])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-evaluate-handle"},"JSHandle.evaluateHandle(expression[, arg])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-get-properties"},"JSHandle.getProperties()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-get-property"},"JSHandle.getProperty(propertyName)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle#js-handle-json-value"},"JSHandle.jsonValue()"))),(0,s.kt)("h2",{id:"js-handle-as-element"},"JSHandle.asElement()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-as-element-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">",(0,s.kt)("a",{href:"#js-handle-as-element-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns either ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),"."),(0,s.kt)("h2",{id:"js-handle-dispose"},"JSHandle.dispose()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-dispose-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,s.kt)("a",{href:"#js-handle-dispose-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),(0,s.kt)("h2",{id:"js-handle-evaluate"},"JSHandle.evaluate(expression","[, arg]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expression"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-option-expression"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,s.kt)("a",{href:"#js-handle-evaluate-option-expression",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"arg"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-option-arg"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/evaluating#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,s.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,s.kt)("a",{href:"#js-handle-evaluate-option-arg",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"},"Object"),">",(0,s.kt)("a",{href:"#js-handle-evaluate-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the return value of ",(0,s.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,s.kt)("p",null,"This method passes this handle as the first argument to ",(0,s.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,s.kt)("p",null,"If ",(0,s.kt)("inlineCode",{parentName:"p"},"expression")," returns a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,s.kt)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),(0,s.kt)("p",null,"Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'ElementHandle tweetHandle = page.querySelector(".tweet .retweets");\nassertEquals("10 retweets", tweetHandle.evaluate("node => node.innerText"));\n')),(0,s.kt)("h2",{id:"js-handle-evaluate-handle"},"JSHandle.evaluateHandle(expression","[, arg]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expression"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-option-expression"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,s.kt)("a",{href:"#js-handle-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"arg"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-option-arg"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/evaluating#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,s.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,s.kt)("a",{href:"#js-handle-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",(0,s.kt)("a",{href:"#js-handle-evaluate-handle-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the return value of ",(0,s.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,s.kt)("p",null,"This method passes this handle as the first argument to ",(0,s.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,s.kt)("p",null,"The only difference between ",(0,s.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,s.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,s.kt)("p",null,"If the function passed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,s.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-evaluate-handle"},"Page.evaluateHandle(expression[, arg])")," for more details."),(0,s.kt)("h2",{id:"js-handle-get-properties"},"JSHandle.getProperties()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-properties-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">",(0,s.kt)("a",{href:"#js-handle-get-properties-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The method returns a map with ",(0,s.kt)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'JSHandle handle = page.evaluateHandle("() => ({window, document}"););\nMap<String, JSHandle> properties = handle.getProperties();\nJSHandle windowHandle = properties.get("window");\nJSHandle documentHandle = properties.get("document");\nhandle.dispose();\n')),(0,s.kt)("h2",{id:"js-handle-get-property"},"JSHandle.getProperty(propertyName)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"propertyName"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-property-option-property-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," property to get",(0,s.kt)("a",{href:"#js-handle-get-property-option-property-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-property-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",(0,s.kt)("a",{href:"#js-handle-get-property-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Fetches a single property from the referenced object."),(0,s.kt)("h2",{id:"js-handle-json-value"},"JSHandle.jsonValue()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-json-value-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"},"Object"),">",(0,s.kt)("a",{href:"#js-handle-json-value-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns a JSON representation of the object. If the object has a ",(0,s.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it ",(0,s.kt)("strong",{parentName:"p"},"will not be called"),"."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}c.isMDXComponent=!0}}]);