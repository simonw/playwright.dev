(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8746],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),r=n(80944),s=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var i=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=(0,r.Z)(),g=f.tabGroupChoices,h=f.setTabGroupChoices,y=(0,a.useState)(p),k=y[0],v=y[1],b=a.Children.toArray(e.children),N=[];if(null!=m){var x=g[m];null!=x&&x!==k&&u.some((function(e){return e.value===x}))&&v(x)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;v(a),null!=m&&(h(m,a),setTimeout((function(){var e,n,a,r,s,o,i,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,o=window,i=o.innerHeight,c=o.innerWidth,n>=0&&s<=c&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case i:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},91387:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return p}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),o=(n(41395),n(58215),{id:"class-consolemessage",title:"ConsoleMessage"}),l={unversionedId:"api/class-consolemessage",id:"api/class-consolemessage",isDocsHomePage:!1,title:"ConsoleMessage",description:'ConsoleMessage] objects are dispatched by page via the [page.on("console") event.',source:"@site/docs/api/class-consolemessage.mdx",sourceDirName:"api",slug:"/api/class-consolemessage",permalink:"/python/docs/next/api/class-consolemessage",version:"current",frontMatter:{id:"class-consolemessage",title:"ConsoleMessage"},sidebar:"api",previous:{title:"CDPSession",permalink:"/python/docs/next/api/class-cdpsession"},next:{title:"Dialog",permalink:"/python/docs/next/api/class-dialog"}},i=[{value:"console_message.args",id:"console-message-args",children:[]},{value:"console_message.location",id:"console-message-location",children:[]},{value:"console_message.text",id:"console-message-text",children:[]},{value:"console_message.type",id:"console-message-type",children:[]}],c={toc:i};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")," objects are dispatched by page via the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-event-console"},'page.on("console")')," event."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-consolemessage#console-message-args"},"console_message.args")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-consolemessage#console-message-location"},"console_message.location")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-consolemessage#console-message-text"},"console_message.text")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-consolemessage#console-message-type"},"console_message.type"))),(0,s.kt)("h2",{id:"console-message-args"},"console_message.args"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-args-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"]",">",(0,s.kt)("a",{href:"#console-message-args-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"List of arguments passed to a ",(0,s.kt)("inlineCode",{parentName:"p"},"console")," function call. See also ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-event-console"},'page.on("console")'),"."),(0,s.kt)("h2",{id:"console-message-location"},"console_message.location"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-location-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,s.kt)("a",{href:"#console-message-location-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"url")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," URL of the resource."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"lineNumber")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," 0-based line number in the resource."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"columnNumber")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," 0-based column number in the resource.")))),(0,s.kt)("h2",{id:"console-message-text"},"console_message.text"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-text-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#console-message-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The text of the console message."),(0,s.kt)("h2",{id:"console-message-type"},"console_message.type"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-type-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#console-message-type-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"One of the following values: ",(0,s.kt)("inlineCode",{parentName:"p"},"'log'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'debug'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'info'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'error'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'warning'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'dir'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'dirxml'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'table'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'trace'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'clear'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'startGroup'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'endGroup'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'assert'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'profile'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'count'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}p.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);