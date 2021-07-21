(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6093],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,w=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return n?a.createElement(w,o(o({ref:t},c),{},{components:n})):a.createElement(w,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6141:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"multi-pages",title:"Multi-page scenarios"}),l={unversionedId:"multi-pages",id:"version-1.12.0/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/versioned_docs/version-1.12.0/multi-pages.mdx",sourceDirName:".",slug:"/multi-pages",permalink:"/dotnet/docs/1.12.0/multi-pages",version:"1.12.0",frontMatter:{id:"multi-pages",title:"Multi-page scenarios"},sidebar:"version-1.12.0/docs",previous:{title:"Installation",permalink:"/dotnet/docs/1.12.0/installation"},next:{title:"Navigations",permalink:"/dotnet/docs/1.12.0/navigations"}},s=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,i.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/core-concepts#browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        // Create a Chromium browser instance\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        await using var userContext = await browser.NewContextAsync();\n        await using var adminContext = await browser.NewContextAsync();\n        // Create pages and interact with contexts independently.\n    }\n}\n")),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-browsercontext#browser-context-add-cookies"},"BrowserContext.AddCookiesAsync(cookies)"))),(0,i.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,i.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,i.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Create two pages\nvar pageOne = await context.NewPageAsync();\nvar pageTwo = await context.NewPageAsync();\n\n// Get pages of a brower context\nvar allPages = context.Pages;\n")),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-page",title:"Page"},"Page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-browsercontext#browser-context-new-page"},"BrowserContext.NewPageAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-browsercontext#browser-context-pages"},"BrowserContext.Pages"))),(0,i.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,i.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get page after a specific action (e.g. clicking a link)\nvar newPage = await context.RunAndWaitForPageAsync(async () =>\n{\n    await page.ClickAsync(\"a[target='_blank']\");\n});\nawait newPage.WaitForLoadStateAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n")),(0,i.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get all new pages (including popups) in the context\ncontext.Page += async  (_, page) => {\n    await page.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n")),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-browsercontext#browser-context-event-page"},"event BrowserContext.Page"))),(0,i.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,i.kt)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the ",(0,i.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,i.kt)("p",null,"This event is emitted in addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Get popup after a specific action (e.g., click)\nvar newPage = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync("#open");\n});\nawait newPage.WaitForLoadStateAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n')),(0,i.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get all popups when they open\npage.Popup += async  (_, popup) => {\n    await popup.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n")),(0,i.kt)("h3",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12.0/api/class-page#page-event-popup"},"event Page.Popup"))))}c.isMDXComponent=!0}}]);