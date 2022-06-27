"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[77487],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),g=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=g(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=g(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return t?a.createElement(m,i(i({ref:r},c),{},{components:t})):a.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10900:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return h}});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(o)for(var t of o(r))g.call(r,t)&&c(e,t,r[t]);return e};const u={id:"class-logger",title:"Logger"},d=void 0,m={unversionedId:"api/class-logger",id:"version-1.22/api/class-logger",title:"Logger",description:"Playwright generates a lot of logs and they are accessible via the pluggable logger sink.",source:"@site/versioned_docs/version-1.22/api/class-logger.mdx",sourceDirName:"api",slug:"/api/class-logger",permalink:"/docs/1.22/api/class-logger",tags:[],version:"1.22",frontMatter:{id:"class-logger",title:"Logger"},sidebar:"api",previous:{title:"Locator",permalink:"/docs/1.22/api/class-locator"},next:{title:"Mouse",permalink:"/docs/1.22/api/class-mouse"}},f={},h=[{value:"logger.isEnabled(name, severity)",id:"logger-is-enabled",level:2},{value:"logger.log(name, severity, message, args, hints)",id:"logger-log",level:2}],b={toc:h};function k(e){var r,t=e,{components:n}=t,c=((e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))r.indexOf(a)<0&&g.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(r=p(p({},b),c),l(r,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright generates a lot of logs and they are accessible via the pluggable logger sink."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch({\n    logger: {\n      isEnabled: (name, severity) => name === 'browser',\n      log: (name, severity, message, args) => console.log(`${name} ${message}`)\n    }\n  });\n  ...\n})();\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"/docs/1.22/api/class-logger#logger-is-enabled"}),"logger.isEnabled(name, severity)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"/docs/1.22/api/class-logger#logger-log"}),"logger.log(name, severity, message, args, hints)"))),(0,a.kt)("h2",p({},{id:"logger-is-enabled"}),"logger.isEnabled(name, severity)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-option-name"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," logger name",(0,a.kt)("a",{href:"#logger-is-enabled-option-name",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"severity"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-option-severity"})," ","<",'"verbose"|"info"|"warning"|"error"',">",(0,a.kt)("a",{href:"#logger-is-enabled-option-severity",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-return"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,a.kt)("a",{href:"#logger-is-enabled-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Determines whether sink is interested in the logger with the given name and severity."),(0,a.kt)("h2",p({},{id:"logger-log"}),"logger.log(name, severity, message, args, hints)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-name"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," logger name",(0,a.kt)("a",{href:"#logger-log-option-name",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"severity"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-severity"})," ","<",'"verbose"|"info"|"warning"|"error"',">",(0,a.kt)("a",{href:"#logger-log-option-severity",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-message"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,a.kt)("a",p({parentName:"li"},{href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"}),"Error"),">"," log message format",(0,a.kt)("a",{href:"#logger-log-option-message",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-args"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">"," message arguments",(0,a.kt)("a",{href:"#logger-log-option-args",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hints"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-hints"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," optional formatting hints",(0,a.kt)("a",{href:"#logger-log-option-hints",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"color?")," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Optional preferred logger color."))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-return"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,a.kt)("a",{href:"#logger-log-return",class:"list-anchor"},"#"))))}k.isMDXComponent=!0}}]);