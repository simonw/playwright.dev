(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[858],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),a=n(80944),i=n(86010),o="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,h=e.groupId,d=e.className,m=(0,a.Z)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,b=(0,r.useState)(u),v=b[0],k=b[1],y=r.Children.toArray(e.children),w=[];if(null!=h){var N=g[h];null!=N&&N!==v&&p.some((function(e){return e.value===N}))&&k(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;k(r),null!=h&&(f(h,r),setTimeout((function(){var e,n,r,a,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case s:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},23022:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(41395),c=n(58215),l={id:"trace-viewer",title:"Trace Viewer"},s={unversionedId:"trace-viewer",id:"trace-viewer",isDocsHomePage:!1,title:"Trace Viewer",description:"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran.",source:"@site/docs/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/python/docs/next/trace-viewer",version:"current",frontMatter:{id:"trace-viewer",title:"Trace Viewer"},sidebar:"docs",previous:{title:"Screenshots",permalink:"/python/docs/next/screenshots"},next:{title:"Verification",permalink:"/python/docs/next/verification"}},u=[{value:"Recording a trace",id:"recording-a-trace",children:[]},{value:"Viewing the trace",id:"viewing-the-trace",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Snapshots",id:"snapshots",children:[]}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran."),(0,i.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#recording-a-trace"},"Recording a trace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#viewing-the-trace"},"Viewing the trace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#actions"},"Actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#screenshots"},"Screenshots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#snapshots"},"Snapshots"))),(0,i.kt)("h2",{id:"recording-a-trace"},"Recording a trace"),(0,i.kt)("p",null,"Traces can be recorded using the ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext#browser-context-tracing"},"browser_context.tracing")," API as follows:"),(0,i.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch()\ncontext = browser.new_context()\n\n# Start tracing before creating / navigating a page.\ncontext.tracing.start(screenshots=True, snapshots=True)\n\npage.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,i.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch()\ncontext = await browser.new_context()\n\n# Start tracing before creating / navigating a page.\nawait context.tracing.start(screenshots=True, snapshots=True)\n\nawait page.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,i.kt)("p",null,"This will record the trace and place it into the file named ",(0,i.kt)("inlineCode",{parentName:"p"},"trace.zip"),"."),(0,i.kt)("h2",{id:"viewing-the-trace"},"Viewing the trace"),(0,i.kt)("p",null,"You can open the saved trace using Playwright CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"playwright show-trace trace.zip\n")),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,"Once trace is opened, you will see the list of actions Playwright performed on the left hand side:"),(0,i.kt)("img",{width:"301",alt:"Actions",src:"https://user-images.githubusercontent.com/883973/120588303-d39dd800-c3eb-11eb-9e8b-bfea8b775354.png"}),(0,i.kt)("p",null,"Selecting each action reveals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"action snapshots,"),(0,i.kt)("li",{parentName:"ul"},"action log,"),(0,i.kt)("li",{parentName:"ul"},"source code location,"),(0,i.kt)("li",{parentName:"ul"},"network log for this action")),(0,i.kt)("p",null,"in the properties pane. You will also see rendered DOM snapshots associated with each action."),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,"When tracing with the ",(0,i.kt)("inlineCode",{parentName:"p"},"screenshots")," option turned on, each trace records screencast and renders it as a film strip:"),(0,i.kt)("img",{width:"353",alt:"Film strip",src:"https://user-images.githubusercontent.com/883973/120588069-5d997100-c3eb-11eb-97a3-acbd5e0eb358.png"}),(0,i.kt)("p",null,"You can hover over the film strip to see a magnified image:"),(0,i.kt)("img",{width:"617",alt:"Magnify",src:"https://user-images.githubusercontent.com/883973/120588147-8f123c80-c3eb-11eb-864b-19d800619234.png"}),(0,i.kt)("p",null,"That helps locating the action of interest very quickly."),(0,i.kt)("h2",{id:"snapshots"},"Snapshots"),(0,i.kt)("p",null,"When tracing with the ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshots")," option turned on, Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Before"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot at the time action is called.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Action"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"After"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot after the action.")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Here is what the typical Action snapshot looks like:"),(0,i.kt)("img",{width:"682",alt:"Snapshots",src:"https://user-images.githubusercontent.com/883973/120588728-879f6300-c3ec-11eb-85d6-e67b0e92e4e3.png"}),(0,i.kt)("p",null,"Notice how it highlights both, the DOM Node as well as the exact click position."))}h.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);