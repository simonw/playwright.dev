"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8445],{2647:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return p},default:function(){return u}});var t=r(7462),n=r(3366),o=(r(7294),r(3905)),l=(r(6396),r(8215),["components"]),i={id:"class-worker",title:"Worker"},s=void 0,k={unversionedId:"api/class-worker",id:"api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/docs/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/java/docs/next/api/class-worker",tags:[],version:"current",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"api",previous:{title:"WebSocketFrame",permalink:"/java/docs/next/api/class-websocketframe"}},p=[{value:"Worker.onClose(handler)",id:"worker-event-close",children:[],level:2},{value:"Worker.evaluate(expression, arg)",id:"worker-evaluate",children:[],level:2},{value:"Worker.evaluateHandle(expression, arg)",id:"worker-evaluate-handle",children:[],level:2},{value:"Worker.url()",id:"worker-url",children:[],level:2},{value:"Worker.waitForClose(options, callback)",id:"worker-wait-for-close",children:[],level:2}],c={toc:p};function u(e){var a=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Worker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.onWorker(worker -> {\n  System.out.println("Worker created: " + worker.url());\n  worker.onClose(worker1 -> System.out.println("Worker destroyed: " + worker1.url()));\n});\nSystem.out.println("Current workers:");\nfor (Worker worker : page.workers())\n  System.out.println("  " + worker.url());\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-worker#worker-event-close"},"Worker.onClose(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-worker#worker-url"},"Worker.url()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-worker#worker-wait-for-close"},"Worker.waitForClose([options], callback)"))),(0,o.kt)("h2",{id:"worker-event-close"},"Worker.onClose(handler)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Emitted when this dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is terminated."),(0,o.kt)("h2",{id:"worker-evaluate"},"Worker.evaluate(expression","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,o.kt)("a",{href:"#worker-evaluate-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/evaluating#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,o.kt)("a",{href:"#worker-evaluate-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"},"Object"),">",(0,o.kt)("a",{href:"#worker-evaluate-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," returns a non-",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,o.kt)("h2",{id:"worker-evaluate-handle"},"Worker.evaluateHandle(expression","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/evaluating#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",(0,o.kt)("a",{href:"#worker-evaluate-handle-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"The only difference between ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," and ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")," is that ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")," returns ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("h2",{id:"worker-url"},"Worker.url()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-url-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,o.kt)("a",{href:"#worker-url-return",class:"list-anchor"},"#"))),(0,o.kt)("h2",{id:"worker-wait-for-close"},"Worker.waitForClose(","[options]",", callback)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"Worker.WaitForCloseOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-wait-for-close-option-timeout"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.setDefaultTimeout(timeout)"),".",(0,o.kt)("a",{href:"#worker-wait-for-close-option-timeout",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"callback"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-wait-for-close-option-callback"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"},"Runnable"),">"," Callback that performs the action triggering the event.",(0,o.kt)("a",{href:"#worker-wait-for-close-option-callback",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-wait-for-close-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-worker",title:"Worker"},"Worker"),">",(0,o.kt)("a",{href:"#worker-wait-for-close-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Performs action and waits for the Worker to close."))}u.isMDXComponent=!0}}]);