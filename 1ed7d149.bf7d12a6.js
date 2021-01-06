(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{145:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"toc",(function(){return b})),n.d(a,"default",(function(){return s}));var t=n(3),r=n(7),i=(n(0),n(601)),o={id:"installation",title:"Advanced installation"},l={unversionedId:"installation",id:"version-1.0.0/installation",isDocsHomePage:!1,title:"Advanced installation",description:"- Managing browser binaries",source:"@site/versioned_docs/version-1.0.0/installation.md",slug:"/installation",permalink:"/docs/1.0.0/installation",version:"1.0.0"},b=[{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[]},{value:"Download single browser binary",id:"download-single-browser-binary",children:[]}],c={toc:b};function s(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#managing-browser-binaries"}),"Managing browser binaries")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#download-from-artifact-repository"}),"Download from artifact repository")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#skip-browser-downloads"}),"Skip browser downloads")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#download-single-browser-binary"}),"Download single browser binary"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),Object(i.b)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm i playwright\n")),Object(i.b)("p",null,"These browsers will take few hundreds of megabytes of the disk space when installed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"du -hs ./Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M    firefox-XXXX\n180M    webkit-XXXX\n")),Object(i.b)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npm i playwright\n")),Object(i.b)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers node playwright-script.js\n")),Object(i.b)("p",null,"Or you can opt into the hermetic install and place binaries under the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/")," folder:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ PLAYWRIGHT_BROWSERS_PATH=0 node playwright-script.js\n")),Object(i.b)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),Object(i.b)("br",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")," Developers can opt-in in this mode via exporting ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",Object(i.b)("inlineCode",{parentName:"p"},".bashrc"),".")),Object(i.b)("br",null),Object(i.b)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),Object(i.b)("p",null,"By default, Playwright downloads browsers from Microsoft and Google public CDNs."),Object(i.b)("p",null,"Sometimes companies maintain an internal artifact repository to host browser\nbinaries. In this case, Playwright can be configured to download from a custom\nlocation using the ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 npm i playwright\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),Object(i.b)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because\nbrowser binaries are managed separately."),Object(i.b)("p",null,"This can be done by setting ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i playwright\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"download-single-browser-binary"},"Download single browser binary"),Object(i.b)("p",null,"Playwright ships three packages that bundle only a single browser:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-chromium"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-chromium"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-webkit"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-webkit"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-firefox"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-firefox")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")," All configuration environment variables also apply to these packages.")),Object(i.b)("p",null,"Using these packages is as easy as using a regular Playwright:"),Object(i.b)("p",null,"Install a specific package"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i playwright-webkit\n")),Object(i.b)("p",null,"Require package"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// Notice a proper package name in require\nconst { webkit } = require('playwright-webkit');\n\n(async () => {\n  const browser = await webkit.launch();\n  // ....\n})();\n")))}s.isMDXComponent=!0},601:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function b(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=s(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},O=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),O=t,d=p["".concat(o,".").concat(O)]||p[O]||u[O]||i;return n?r.a.createElement(d,l(l({ref:a},c),{},{components:n})):r.a.createElement(d,l({ref:a},c))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=O;var l={};for(var b in a)hasOwnProperty.call(a,b)&&(l[b]=a[b]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);