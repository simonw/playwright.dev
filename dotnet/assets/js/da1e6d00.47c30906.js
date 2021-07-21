(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[233],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),o=n(9443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2727:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=(n(1395),n(8215),{id:"class-selectors",title:"Selectors"}),s={unversionedId:"api/class-selectors",id:"version-1.12.0/api/class-selectors",isDocsHomePage:!1,title:"Selectors",description:"Selectors can be used to install custom selector engines. See Working with selectors for more information.",source:"@site/versioned_docs/version-1.12.0/api/class-selectors.mdx",sourceDirName:"api",slug:"/api/class-selectors",permalink:"/dotnet/docs/1.12.0/api/class-selectors",version:"1.12.0",frontMatter:{id:"class-selectors",title:"Selectors"},sidebar:"version-1.12.0/api",previous:{title:"Route",permalink:"/dotnet/docs/1.12.0/api/class-route"},next:{title:"TimeoutError",permalink:"/dotnet/docs/1.12.0/api/class-timeouterror"}},l=[{value:"Selectors.RegisterAsync(name, options)",id:"selectors-register",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/selectors"},"Working with selectors")," for more information."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-selectors#selectors-register"},"Selectors.RegisterAsync(name, options)"))),(0,a.kt)("h2",{id:"selectors-register"},"Selectors.RegisterAsync(name, options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name that is used in selectors as a prefix, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"{name: 'foo'}")," enables ",(0,a.kt)("inlineCode",{parentName:"li"},"foo=myselectorbody")," selectors. May only contain ",(0,a.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]")," characters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"SelectorsRegisterOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ContentScript")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"?",">"," Whether to run this selector engine in isolated JavaScript environment. This environment has access to the same DOM, but not any JavaScript objects from the frame's scripts. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),". Note that running as a content script is not guaranteed when this engine is used together with other registered engines."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Path")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">"," Script that evaluates to a selector engine instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Script")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">"," Script that evaluates to a selector engine instance."))),(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,a.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using var playwright = await Playwright.CreateAsync();\n// Script that evaluates to a selector engine instance.\nawait playwright.Selectors.RegisterAsync("tag", @"{\n// Returns the first element matching given selector in the root\'s subtree.\nquery(root, selector) {\n    return root.querySelector(selector);\n  },\n  // Returns all elements matching given selector in the root\'s subtree.\n  queryAll(root, selector) {\n    return Array.from(root.querySelectorAll(selector));\n  }\n}");\n\nawait using var browser = await playwright.Chromium.LaunchAsync();\nvar page = await browser.NewPageAsync();\nawait page.SetContentAsync("<div><button>Click me</button></div>");\n// Use the selector prefixed with its name.\nvar button = await page.QuerySelectorAsync("tag=button");\n// Combine it with other selector engines.\nawait page.ClickAsync("tag=div >> text=\\"Click me\\"");\n// Can use it in any methods supporting selectors.\nint buttonCount = await page.EvalOnSelectorAllAsync<int>("tag=button", "buttons => buttons.length");\n')))}u.isMDXComponent=!0}}]);