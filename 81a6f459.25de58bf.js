(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),i=a(7),n=(a(0),a(393)),o=(a(396),a(397),{id:"class-dialog",title:"Dialog"}),l={unversionedId:"api/class-dialog",id:"version-1.11.0/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [page.on('dialog') event.",source:"@site/versioned_docs/version-1.11.0/api/class-dialog.mdx",slug:"/api/class-dialog",permalink:"/docs/api/class-dialog",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"Coverage",permalink:"/docs/api/class-coverage"},next:{title:"Download",permalink:"/docs/api/class-download"}},c=[{value:"dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message()",id:"dialogmessage",children:[]},{value:"dialog.type()",id:"dialogtype",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/class-page#pageondialog"}),"page.on('dialog')")," event."),Object(n.b)("p",null,"An example of using ",Object(n.b)("inlineCode",{parentName:"p"},"Dialog")," class:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n  });\n  await page.evaluate(() => alert('1'));\n  await browser.close();\n})();\n")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/class-page#pageondialog"}),"page.on('dialog')")," listener. When listener is present, it ",Object(n.b)("strong",{parentName:"p"},"must")," either ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/class-dialog#dialogacceptprompttext"}),"dialog.accept([promptText])")," or ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")," the dialog - otherwise the page will ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"}),"freeze")," waiting for the dialog, and actions like click will never finish."))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogacceptprompttext"}),"dialog.accept([promptText])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogdefaultvalue"}),"dialog.defaultValue()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogmessage"}),"dialog.message()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogtype"}),"dialog.type()"))),Object(n.b)("h2",{id:"dialogacceptprompttext"},"dialog.accept(","[promptText]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"promptText")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",Object(n.b)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional."),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(n.b)("p",null,"Returns when the dialog has been accepted."),Object(n.b)("h2",{id:"dialogdefaultvalue"},"dialog.defaultValue()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(n.b)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),Object(n.b)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(n.b)("p",null,"Returns when the dialog has been dismissed."),Object(n.b)("h2",{id:"dialogmessage"},"dialog.message()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(n.b)("p",null,"A message displayed in the dialog."),Object(n.b)("h2",{id:"dialogtype"},"dialog.type()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(n.b)("p",null,"Returns dialog's type, can be one of ",Object(n.b)("inlineCode",{parentName:"p"},"alert"),", ",Object(n.b)("inlineCode",{parentName:"p"},"beforeunload"),", ",Object(n.b)("inlineCode",{parentName:"p"},"confirm")," or ",Object(n.b)("inlineCode",{parentName:"p"},"prompt"),"."))}p.isMDXComponent=!0},392:function(e,t,a){"use strict";function r(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=r,g=b["".concat(o,".").concat(u)]||b[u]||d[u]||n;return a?i.a.createElement(g,l(l({ref:t},s),{},{components:a})):i.a.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},394:function(e,t,a){"use strict";var r=a(0),i=a(395);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,a){"use strict";var r=a(0),i=Object(r.createContext)(void 0);t.a=i},396:function(e,t,a){"use strict";a(0),a(394),a(392),a(55)},397:function(e,t,a){"use strict";a(3),a(0)}}]);