(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{264:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var a=t(3),n=t(7),o=(t(0),t(393)),c=(t(396),t(397),{id:"class-worker",title:"Worker"}),i={unversionedId:"api/class-worker",id:"version-1.9.0/api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.9.0/api/class-worker.mdx",slug:"/api/class-worker",permalink:"/docs/1.9.0/api/class-worker",version:"1.9.0",sidebar:"version-1.9.0/api",previous:{title:"WebSocket",permalink:"/docs/1.9.0/api/class-websocket"},next:{title:"Android",permalink:"/docs/1.9.0/api/class-android"}},l=[{value:"worker.on(&#39;close&#39;)",id:"workeronclose",children:[]},{value:"worker.evaluate(pageFunction, arg)",id:"workerevaluatepagefunction-arg",children:[]},{value:"worker.evaluateHandle(pageFunction, arg)",id:"workerevaluatehandlepagefunction-arg",children:[]},{value:"worker.url()",id:"workerurl",children:[]}],p={toc:l};function s(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Worker class represents a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),". ",Object(o.b)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",Object(o.b)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"page.on('worker', worker => {\n  console.log('Worker created: ' + worker.url());\n  worker.on('close', worker => console.log('Worker destroyed: ' + worker.url()));\n});\n\nconsole.log('Current workers:');\nfor (const worker of page.workers())\n  console.log('  ' + worker.url());\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-worker#workeronclose"}),"worker.on('close')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-worker#workerurl"}),"worker.url()"))),Object(o.b)("h2",{id:"workeronclose"},"worker.on('close')"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-worker",title:"Worker"}),"Worker"),">")),Object(o.b)("p",null,"Emitted when this dedicated ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),Object(o.b)("h2",{id:"workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Function to be evaluated in the worker context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">>")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," returns a non-",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some  additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),"."),Object(o.b)("h2",{id:"workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Function to be evaluated in the worker context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"pageFunction")," as a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"The only difference between ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")," is that ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")," returns ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),Object(o.b)("h2",{id:"workerurl"},"worker.url()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")))}s.isMDXComponent=!0},392:function(e,r,t){"use strict";function a(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=a(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}r.a=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=a(e))&&(n&&(n+=" "),n+=r);return n}},393:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return O}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),s=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=s(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,O=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return t?n.a.createElement(O,i(i({ref:r},p),{},{components:t})):n.a.createElement(O,i({ref:r},p))}));function O(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},394:function(e,r,t){"use strict";var a=t(0),n=t(395);r.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,r,t){"use strict";var a=t(0),n=Object(a.createContext)(void 0);r.a=n},396:function(e,r,t){"use strict";t(0),t(394),t(392),t(55)},397:function(e,r,t){"use strict";t(3),t(0)}}]);