"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9101],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=o,u=m["".concat(s,".").concat(g)]||m[g]||d[g]||r;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4975:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return h}});var n=a(3905),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&c(e,a,t[a]);return e};const m={id:"dialogs",title:"Dialogs"},g=void 0,u={unversionedId:"dialogs",id:"version-1.23/dialogs",title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/versioned_docs/version-1.23/dialogs.mdx",sourceDirName:".",slug:"/dialogs",permalink:"/dotnet/docs/dialogs",tags:[],version:"1.23",frontMatter:{id:"dialogs",title:"Dialogs"},sidebar:"docs",previous:{title:"Command line tools",permalink:"/dotnet/docs/cli"},next:{title:"Downloads",permalink:"/dotnet/docs/downloads"}},f={},h=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",level:2},{value:"API reference",id:"api-reference",level:3},{value:"beforeunload dialog",id:"beforeunload-dialog",level:2}],v={toc:h};function k(e){var t,a=e,{components:o}=a,c=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),c),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can interact with the web page dialogs such as ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"}),(0,n.kt)("inlineCode",{parentName:"a"},"alert")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"}),(0,n.kt)("inlineCode",{parentName:"a"},"confirm")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"}),(0,n.kt)("inlineCode",{parentName:"a"},"prompt"))," as well as ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"}),(0,n.kt)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#alert-confirm-prompt-dialogs"}),"alert(), confirm(), prompt() dialogs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#beforeunload-dialog"}),"beforeunload dialog"))),(0,n.kt)("h2",d({},{id:"alert-confirm-prompt-dialogs"}),"alert(), confirm(), prompt() dialogs"),(0,n.kt)("p",null,"By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-csharp"}),'page.Dialog += (_, dialog) => dialog.AcceptAsync();\nawait page.ClickAsync("button");\n')),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-dialog"}),"event Page.Dialog")," listener ",(0,n.kt)("strong",{parentName:"p"},"must handle")," the dialog. Otherwise your action will stall, be it ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-click"}),"Page.ClickAsync(selector, options)"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-evaluate"}),"Page.EvaluateAsync(expression, arg)")," or any other. That's because dialogs in Web are modal and block further page execution until they are handled."))),(0,n.kt)("p",null,"As a result, following snippet will never resolve:"),(0,n.kt)("div",d({},{className:"admonition admonition-warning alert alert--danger"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"WRONG!"))),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-csharp"}),'page.Dialog += (_, dialog) => Console.WriteLine(dialog.Message);\nawait page.ClickAsync("button"); // Will hang here\n')),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"If there is no listener for ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-dialog"}),"event Page.Dialog"),", all dialogs are automatically dismissed."))),(0,n.kt)("h3",d({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-dialog",title:"Dialog"}),"Dialog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-dialog#dialog-accept"}),"Dialog.AcceptAsync(promptText)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-dialog#dialog-dismiss"}),"Dialog.DismissAsync()"))),(0,n.kt)("h2",d({},{id:"beforeunload-dialog"}),"beforeunload dialog"),(0,n.kt)("p",null,"When ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-close"}),"Page.CloseAsync(options)")," is invoked with the truthy ",(0,n.kt)("inlineCode",{parentName:"p"},"runBeforeUnload")," value, it page runs its unload handlers. This is the only case when ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-close"}),"Page.CloseAsync(options)")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),(0,n.kt)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-csharp"}),'page.Dialog += (_, dialog) =>\n{\n    Assert.AreEqual("beforeunload", dialog.Type);\n    dialog.DismissAsync();\n};\nawait page.CloseAsync(runBeforeUnload: true);\n')))}k.isMDXComponent=!0}}]);