(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9793],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),a=n(80944),s=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,d=e.values,u=e.groupId,m=e.className,f=(0,a.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,b=(0,r.useState)(p),k=b[0],g=b[1],y=r.Children.toArray(e.children),O=[];if(null!=u){var N=h[u];null!=N&&N!==k&&d.some((function(e){return e.value===N}))&&g(N)}var w=function(e){var t=e.currentTarget,n=O.indexOf(t),r=d[n].value;g(r),null!=u&&(v(u,r),setTimeout((function(){var e,n,r,a,s,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,s=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&s<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case c:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case l:var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},10351:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),o=(n(41395),n(58215),{id:"class-cdpsession",title:"CDPSession"}),i={unversionedId:"api/class-cdpsession",id:"version-1.13.0/api/class-cdpsession",isDocsHomePage:!1,title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/versioned_docs/version-1.13.0/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/docs/api/class-cdpsession",version:"1.13.0",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"version-1.13.0/api",previous:{title:"BrowserType",permalink:"/docs/api/class-browsertype"},next:{title:"ConsoleMessage",permalink:"/docs/api/class-consolemessage"}},l=[{value:"cdpSession.detach()",id:"cdp-session-detach",children:[]},{value:"cdpSession.send(method, params)",id:"cdp-session-send",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"extends: ",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/events.html#events_class_eventemitter",title:"EventEmitter"},"EventEmitter"))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"protocol methods can be called with ",(0,s.kt)("inlineCode",{parentName:"li"},"session.send")," method."),(0,s.kt)("li",{parentName:"ul"},"protocol events can be subscribed to with ",(0,s.kt)("inlineCode",{parentName:"li"},"session.on")," method.")),(0,s.kt)("p",null,"Useful links:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",(0,s.kt)("a",{parentName:"li",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer"),"."),(0,s.kt)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"},"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const client = await page.context().newCDPSession(page);\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () => console.log('Animation created!'));\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2\n});\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-cdpsession#cdp-session-detach"},"cdpSession.detach()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-cdpsession#cdp-session-send"},"cdpSession.send(method[, params])"))),(0,s.kt)("h2",{id:"cdp-session-detach"},"cdpSession.detach()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-detach-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,s.kt)("a",{href:"#cdp-session-detach-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),(0,s.kt)("h2",{id:"cdp-session-send"},"cdpSession.send(method","[, params]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"method"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-param-method"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," protocol method name",(0,s.kt)("a",{href:"#cdp-session-send-param-method",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"params"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-param-params"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Optional method parameters",(0,s.kt)("a",{href:"#cdp-session-send-param-params",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,s.kt)("a",{href:"#cdp-session-send-return",class:"list-anchor"},"#"))))}p.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);