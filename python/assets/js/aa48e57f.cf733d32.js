(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4627],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),a=n(80944),o=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,g=e.className,h=(0,a.Z)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,b=(0,r.useState)(c),k=b[0],v=b[1],y=r.Children.toArray(e.children),w=[];if(null!=d){var N=m[d];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&v(N)}var P=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;v(r),null!=d&&(f(d,r),setTimeout((function(){var e,n,r,a,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case s:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},g)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:P,onClick:P},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},53437:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(41395),l=n(58215),s={id:"debug",title:"Debugging tools"},u={unversionedId:"debug",id:"version-1.9.0/debug",isDocsHomePage:!1,title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation.",source:"@site/versioned_docs/version-1.9.0/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/python/docs/1.9.0/debug",version:"1.9.0",frontMatter:{id:"debug",title:"Debugging tools"},sidebar:"version-1.9.0/docs",previous:{title:"Core concepts",permalink:"/python/docs/1.9.0/core-concepts"},next:{title:"Supported languages",permalink:"/python/docs/1.9.0/languages"}},c=[{value:"Playwright Inspector",id:"playwright-inspector",children:[]},{value:"Run in headful mode",id:"run-in-headful-mode",children:[]},{value:"Visual Studio Code debugger (Node.JS)",id:"visual-studio-code-debugger-nodejs",children:[{value:"Use launch config",id:"use-launch-config",children:[]},{value:"Use the new JavaScript debugging terminal",id:"use-the-new-javascript-debugging-terminal",children:[]}]},{value:"Browser Developer Tools",id:"browser-developer-tools",children:[{value:"API for Chromium",id:"api-for-chromium",children:[]}]},{value:"Run in Debug Mode",id:"run-in-debug-mode",children:[{value:"Defaults",id:"defaults",children:[]},{value:"Debugging Selectors",id:"debugging-selectors",children:[]},{value:"Evaluate Source Maps",id:"evaluate-source-maps",children:[]}]},{value:"Verbose API logs",id:"verbose-api-logs",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#playwright-inspector"},"Playwright Inspector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run-in-headful-mode"},"Run in headful mode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.JS)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#browser-developer-tools"},"Browser Developer Tools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run-in-debug-mode"},"Run in Debug Mode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#verbose-api-logs"},"Verbose API logs"))),(0,o.kt)("h2",{id:"playwright-inspector"},"Playwright Inspector"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/inspector"},"Playwright Inspector")," is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),(0,o.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,o.kt)("h2",{id:"run-in-headful-mode"},"Run in headful mode"),(0,o.kt)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,o.kt)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"slow_mo")," option to slow down execution and follow along while debugging."),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"chromium.launch(headless=False, slow_mo=100) # or firefox, webkit\n\n"))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"await chromium.launch(headless=False, slow_mo=100) # or firefox, webkit\n\n")))),(0,o.kt)("h2",{id:"visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.JS)"),(0,o.kt)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright scripts with breakpoints. The debugger can be configured in two ways."),(0,o.kt)("h3",{id:"use-launch-config"},"Use launch config"),(0,o.kt)("p",null,"Setup ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},(0,o.kt)("inlineCode",{parentName:"a"},"launch.json")," configuration")," for your Node.js project. Once configured launch the scripts with F5 and use breakpoints."),(0,o.kt)("h3",{id:"use-the-new-javascript-debugging-terminal"},"Use the new JavaScript debugging terminal"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set a breakpoint in VS Code",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),(0,o.kt)("li",{parentName:"ol"},"Run your Node.js script from the terminal")),(0,o.kt)("h2",{id:"browser-developer-tools"},"Browser Developer Tools"),(0,o.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script. Developer tools help to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inspect the DOM tree and ",(0,o.kt)("strong",{parentName:"li"},"find element selectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/verification#console-logs"},"read logs via API"),")"),(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,o.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"For WebKit"),": Note that launching WebKit Inspector during the execution will prevent the Playwright script from executing any further.")),(0,o.kt)("h3",{id:"api-for-chromium"},"API for Chromium"),(0,o.kt)("p",null,"In Chromium, you can also open developer tools through a launch option."),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"chromium.launch(devtools=True)\n"))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"await chromium.launch(devtools=True)\n\n")))),(0,o.kt)("h2",{id:"run-in-debug-mode"},"Run in Debug Mode"),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures the browser for debugging."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Linux/macOS\n$ PWDEBUG=1 pytest -s\n\n# Windows\n$ set PWDEBUG=1\n$ pytest -s\n")),(0,o.kt)("h3",{id:"defaults"},"Defaults"),(0,o.kt)("p",null,"With PWDEBUG, the following defaults are configured for you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Run in headful"),": With PWDEBUG, browsers always launch in headful mode"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Disables timeout"),": PWDEBUG sets timeout to 0 (= no timeout)")),(0,o.kt)("h3",{id:"debugging-selectors"},"Debugging Selectors"),(0,o.kt)("p",null,"PWDEBUG configures a ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright")," object in the browser to highlight ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/selectors"},"Playwright selectors"),". This can be used to verify text or composite selectors. To use this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),(0,o.kt)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"playwright")," API",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",(0,o.kt)("inlineCode",{parentName:"li"},"page.$")," would see the page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",(0,o.kt)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights.")))),(0,o.kt)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),(0,o.kt)("h3",{id:"evaluate-source-maps"},"Evaluate Source Maps"),(0,o.kt)("p",null,"PWDEBUG also enables source maps for ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-page#pageevaluateexpression-kwargs"},"page.evaluate(expression, **kwargs)")," ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/core-concepts#evaluation"},"executions"),". This improves the debugging experience for JavaScript executions in the page context."),(0,o.kt)("a",{href:"https://user-images.githubusercontent.com/284612/86857568-a6c63100-c073-11ea-82a4-bfd531a4ec87.png"},(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/86857568-a6c63100-c073-11ea-82a4-bfd531a4ec87.png",width:"500",alt:"Highlight selectors"})),(0,o.kt)("h2",{id:"verbose-api-logs"},"Verbose API logs"),(0,o.kt)("p",null,"Playwright supports verbose logging with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Linux/macOS\n$ DEBUG=pw:api pytest -s\n\n# Windows\n$ set DEBUG=pw:api\n$ pytest -s\n")))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);