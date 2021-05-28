(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{314:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return h}));var o=r(3),n=r(7),a=(r(0),r(347)),i=r(350),s=r(351),c={id:"browsers",title:"Browsers"},l={unversionedId:"browsers",id:"version-1.10.0/browsers",isDocsHomePage:!1,title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment.",source:"@site/versioned_docs/version-1.10.0/browsers.mdx",slug:"/browsers",permalink:"/python/docs/1.10.0/browsers",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Authentication",permalink:"/python/docs/1.10.0/auth"},next:{title:"Dialogs",permalink:"/python/docs/1.10.0/dialogs"}},u=[{value:"Chromium",id:"chromium",children:[]},{value:"Firefox",id:"firefox",children:[]},{value:"WebKit",id:"webkit",children:[]},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",children:[{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",children:[]}]}],b={toc:u};function h(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#chromium"}),"Chromium")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#firefox"}),"Firefox")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#webkit"}),"WebKit")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge"))),Object(a.b)("h2",{id:"chromium"},"Chromium"),Object(a.b)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. These builds match the current ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://support.google.com/chrome/a/answer/9027636?hl=en"}),"Chrome Dev Channel")," at the time of each Playwright release, i.e. it is new with every Playwright update. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome 89, Playwright already supports Chromium 91 that will hit Google Chrome and Microsoft Edge if a few weeks."),Object(a.b)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge section below.")," section below."),Object(a.b)("h2",{id:"firefox"},"Firefox"),Object(a.b)("p",null,"Playwright's Firefox version matches the recent ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.mozilla.org/en-US/firefox/channel/desktop/"}),"Firefox Beta")," build."),Object(a.b)("h2",{id:"webkit"},"WebKit"),Object(a.b)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues. We are also working on a dedicated support for builds that would match Apple Safari Technology Preview."),Object(a.b)("h2",{id:"google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"),Object(a.b)("p",null,"While Playwright will download and use the recent Chromium build by default, it can operate against the stock Google Chrome and Microsoft Edge browsers. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),Object(a.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),'# Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\nbrowser = playwright.chromium.launch(channel="chrome")\n'))),Object(a.b)(s.a,{value:"async",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),'# Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\nbrowser = await playwright.chromium.launch(channel="chrome")\n')))),Object(a.b)("h3",{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"},"When to use Google Chrome & Microsoft Edge and when not to?"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Defaults")),Object(a.b)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Regression testing")),Object(a.b)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",Object(a.b)("inlineCode",{parentName:"p"},'"chrome"')," or ",Object(a.b)("inlineCode",{parentName:"p"},'"msedge"'),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Media codecs")),Object(a.b)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Enterprise policy")),Object(a.b)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."))}h.isMDXComponent=!0},346:function(e,t,r){"use strict";function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=o,p=b["".concat(i,".").concat(d)]||b[d]||h[d]||a;return r?n.a.createElement(p,s(s({ref:t},l),{},{components:r})):n.a.createElement(p,s({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},348:function(e,t,r){"use strict";var o=r(0),n=r(349);t.a=function(){var e=Object(o.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},349:function(e,t,r){"use strict";var o=r(0),n=Object(o.createContext)(void 0);t.a=n},350:function(e,t,r){"use strict";var o=r(0),n=r.n(o),a=r(348),i=r(346),s=r(53),c=r.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,b=e.values,h=e.groupId,d=e.className,p=Object(a.a)(),f=p.tabGroupChoices,m=p.setTabGroupChoices,g=Object(o.useState)(s),w=g[0],y=g[1],O=o.Children.toArray(e.children);if(null!=h){var v=f[h];null!=v&&v!==w&&b.some((function(e){return e.value===v}))&&y(v)}var j=function(e){y(e),null!=h&&m(h,e)},C=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},d)},b.map((function(e){var t=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},r)}))),t?Object(o.cloneElement)(O.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},351:function(e,t,r){"use strict";var o=r(3),n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:r,className:n}),t)}}}]);