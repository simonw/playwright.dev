(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1209],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return r?o.createElement(p,a(a({ref:t},u),{},{components:r})):o.createElement(p,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var o=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var o=r(7294),n=r(944),i=r(6010),a="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,h=e.values,d=e.groupId,m=e.className,p=(0,n.Z)(),f=p.tabGroupChoices,g=p.setTabGroupChoices,b=(0,o.useState)(u),w=b[0],v=b[1],y=o.Children.toArray(e.children),k=[];if(null!=d){var C=f[d];null!=C&&C!==w&&h.some((function(e){return e.value===C}))&&v(C)}var N=function(e){var t=e.currentTarget,r=k.indexOf(t),o=h[r].value;v(o),null!=d&&(g(d,o),setTimeout((function(){var e,r,o,n,i,a,l,c;(e=t.getBoundingClientRect(),r=e.top,o=e.left,n=e.bottom,i=e.right,a=window,l=a.innerHeight,c=a.innerWidth,r>=0&&i<=c&&n<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},E=function(e){var t,r;switch(e.keyCode){case c:var o=k.indexOf(e.target)+1;r=k[o]||k[0];break;case l:var n=k.indexOf(e.target)-1;r=k[n]||k[k.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},h.map((function(e){var t=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":w===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:E,onFocus:N,onClick:N},r)}))),t?(0,o.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,r){"use strict";var o=(0,r(7294).createContext)(void 0);t.Z=o},944:function(e,t,r){"use strict";var o=r(7294),n=r(9443);t.Z=function(){var e=(0,o.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9277:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var o=r(2122),n=r(9756),i=(r(7294),r(3905)),a=(r(1395),r(8215),{id:"browsers",title:"Browsers"}),s={unversionedId:"browsers",id:"version-1.12.0/browsers",isDocsHomePage:!1,title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment.",source:"@site/versioned_docs/version-1.12.0/browsers.mdx",sourceDirName:".",slug:"/browsers",permalink:"/java/docs/1.12.0/browsers",version:"1.12.0",frontMatter:{id:"browsers",title:"Browsers"},sidebar:"version-1.12.0/docs",previous:{title:"Authentication",permalink:"/java/docs/1.12.0/auth"},next:{title:"Dialogs",permalink:"/java/docs/1.12.0/dialogs"}},l=[{value:"Chromium",id:"chromium",children:[]},{value:"Firefox",id:"firefox",children:[]},{value:"WebKit",id:"webkit",children:[]},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",children:[{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",children:[]}]}],c={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#chromium"},"Chromium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#firefox"},"Firefox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#webkit"},"WebKit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"))),(0,i.kt)("h2",{id:"chromium"},"Chromium"),(0,i.kt)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome 89, Playwright already supports Chromium 91 that will hit Google Chrome and Microsoft Edge if a few weeks."),(0,i.kt)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",(0,i.kt)("a",{parentName:"p",href:"#google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge")," section below."),(0,i.kt)("h2",{id:"firefox"},"Firefox"),(0,i.kt)("p",null,"Playwright's Firefox version matches the recent ",(0,i.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox Stable")," build."),(0,i.kt)("h2",{id:"webkit"},"WebKit"),(0,i.kt)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues. We are also working on a dedicated support for builds that would match Apple Safari Technology Preview."),(0,i.kt)("h2",{id:"google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"),(0,i.kt)("p",null,"While Playwright will download and use the recent Chromium build by default, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setChannel("chrome"));\n    }\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Playwright bundles a recent Chromium build, but not Google Chrome or Microsoft Edge browsers - these should be installed manually before use."))),(0,i.kt)("h3",{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"},"When to use Google Chrome & Microsoft Edge and when not to?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Defaults")),(0,i.kt)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Regression testing")),(0,i.kt)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",(0,i.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"msedge"'),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Media codecs")),(0,i.kt)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enterprise policy")),(0,i.kt)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."))}u.isMDXComponent=!0},6010:function(e,t,r){"use strict";function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);