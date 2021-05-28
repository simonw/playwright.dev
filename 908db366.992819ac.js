(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{251:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),l=(t(0),t(393)),i=(t(396),t(397),{id:"class-jshandle",title:"JSHandle"}),c={unversionedId:"api/class-jshandle",id:"version-1.11.0/api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle(pageFunction[, arg]) method.",source:"@site/versioned_docs/version-1.11.0/api/class-jshandle.mdx",slug:"/api/class-jshandle",permalink:"/docs/api/class-jshandle",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"Frame",permalink:"/docs/api/class-frame"},next:{title:"Keyboard",permalink:"/docs/api/class-keyboard"}},o=[{value:"jsHandle.asElement()",id:"jshandleaselement",children:[]},{value:"jsHandle.dispose()",id:"jshandledispose",children:[]},{value:"jsHandle.evaluate(pageFunction, arg)",id:"jshandleevaluatepagefunction-arg",children:[]},{value:"jsHandle.evaluateHandle(pageFunction, arg)",id:"jshandleevaluatehandlepagefunction-arg",children:[]},{value:"jsHandle.getProperties()",id:"jshandlegetproperties",children:[]},{value:"jsHandle.getProperty(propertyName)",id:"jshandlegetpropertypropertyname",children:[]},{value:"jsHandle.jsonValue()",id:"jshandlejsonvalue",children:[]}],s={toc:o};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle(pageFunction[, arg])")," method."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const windowHandle = await page.evaluateHandle(() => window);\n// ...\n")),Object(l.b)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-jshandle#jshandledispose"}),"jsHandle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),Object(l.b)("p",null,"JSHandle instances can be used as an argument in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page#pageevalselector-pagefunction-arg"}),"page.$eval(selector, pageFunction[, arg])"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle(pageFunction[, arg])")," methods."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandleaselement"}),"jsHandle.asElement()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandledispose"}),"jsHandle.dispose()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandleevaluatepagefunction-arg"}),"jsHandle.evaluate(pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandleevaluatehandlepagefunction-arg"}),"jsHandle.evaluateHandle(pageFunction[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandlegetproperties"}),"jsHandle.getProperties()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandlegetpropertypropertyname"}),"jsHandle.getProperty(propertyName)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandlejsonvalue"}),"jsHandle.jsonValue()"))),Object(l.b)("h2",{id:"jshandleaselement"},"jsHandle.asElement()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(l.b)("p",null,"Returns either ",Object(l.b)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"."),Object(l.b)("h2",{id:"jshandledispose"},"jsHandle.dispose()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),Object(l.b)("h2",{id:"jshandleevaluatepagefunction-arg"},"jsHandle.evaluate(pageFunction","[, arg]",")"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Function to be evaluated in the page context."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arg")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(l.b)("inlineCode",{parentName:"li"},"pageFunction"),"."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">>")),Object(l.b)("p",null,"Returns the return value of ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),Object(l.b)("p",null,"Examples:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const tweetHandle = await page.$('.tweet .retweets');\nexpect(await tweetHandle.evaluate(node => node.innerText)).toBe('10 retweets');\n")),Object(l.b)("h2",{id:"jshandleevaluatehandlepagefunction-arg"},"jsHandle.evaluateHandle(pageFunction","[, arg]",")"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Function to be evaluated in the page context."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arg")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(l.b)("inlineCode",{parentName:"li"},"pageFunction"),"."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(l.b)("p",null,"Returns the return value of ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction")," as a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(l.b)("p",null,"The only difference between ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("p",null,"If the function passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle(pageFunction[, arg])")," for more details."),Object(l.b)("h2",{id:"jshandlegetproperties"},"jsHandle.getProperties()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"}),"Map"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>>")),Object(l.b)("p",null,"The method returns a map with ",Object(l.b)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const handle = await page.evaluateHandle(() => ({window, document}));\nconst properties = await handle.getProperties();\nconst windowHandle = properties.get('window');\nconst documentHandle = properties.get('document');\nawait handle.dispose();\n")),Object(l.b)("h2",{id:"jshandlegetpropertypropertyname"},"jsHandle.getProperty(propertyName)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"propertyName")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> property to get"),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(l.b)("p",null,"Fetches a single property from the referenced object."),Object(l.b)("h2",{id:"jshandlejsonvalue"},"jsHandle.jsonValue()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">>")),Object(l.b)("p",null,"Returns a JSON representation of the object. If the object has a ",Object(l.b)("inlineCode",{parentName:"p"},"toJSON")," function, it ",Object(l.b)("strong",{parentName:"p"},"will not be called"),"."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}p.isMDXComponent=!0},392:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},393:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},j=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(t),j=n,u=b["".concat(i,".").concat(j)]||b[j]||d[j]||l;return t?r.a.createElement(u,c(c({ref:a},s),{},{components:t})):r.a.createElement(u,c({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=j;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},394:function(e,a,t){"use strict";var n=t(0),r=t(395);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},396:function(e,a,t){"use strict";t(0),t(394),t(392),t(55)},397:function(e,a,t){"use strict";t(3),t(0)}}]);