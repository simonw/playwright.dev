"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3415],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(4939),l=a(9670),o=a(6010),s="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&h(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&h(e,a,t[a]);return e};function y(e){var t,a,r;const{lazy:i,block:u,defaultValue:d,values:m,groupId:h,className:y}=e,w=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:w.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,l.lx)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:null!=(r=null!=d?d:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=w[0])?void 0:a.props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,l.UB)(),[O,P]=(0,n.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=h){const e=v[h];null!=e&&e!==O&&b.some((t=>t.value===e))&&P(e)}const T=e=>{const t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==O&&(E(t),P(n),null!=h&&N(h,n))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},y)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=g({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:j,onFocus:T,onClick:T},a),l={className:(0,o.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":O===e})},p(r,c(l))),null!=t?t:e);var r,l}))),i?(0,n.cloneElement)(w.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function w(e){const t=(0,r.Z)();return n.createElement(y,g({key:String(t)},e))}},376:function(e,t,a){a.r(t),a.d(t,{assets:function(){return w},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return b}});var n=a(3905),r=a(3824),l=a(3811),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&d(e,a,t[a]);return e};const h={id:"cli",title:"Command line tools"},g=void 0,y={unversionedId:"cli",id:"version-1.23/cli",title:"Command line tools",description:"Playwright comes with the command line tools.",source:"@site/versioned_docs/version-1.23/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/python/docs/cli",tags:[],version:"1.23",frontMatter:{id:"cli",title:"Command line tools"},sidebar:"docs",previous:{title:"Chrome Extensions",permalink:"/python/docs/chrome-extensions"},next:{title:"Dialogs",permalink:"/python/docs/dialogs"}},w={},b=[{value:"Usage",id:"usage",level:2},{value:"Install browsers",id:"install-browsers",level:2},{value:"Install system dependencies",id:"install-system-dependencies",level:2},{value:"Generate code",id:"generate-code",level:2},{value:"Preserve authenticated state",id:"preserve-authenticated-state",level:3},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",level:3},{value:"Open pages",id:"open-pages",level:2},{value:"Emulate devices",id:"emulate-devices",level:3},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",level:3},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",level:3},{value:"Inspect selectors",id:"inspect-selectors",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:4},{value:"Take screenshot",id:"take-screenshot",level:2},{value:"Generate PDF",id:"generate-pdf",level:2}],k={toc:b};function f(e){var t,a=e,{components:o}=a,d=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),d),s(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright comes with the command line tools."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#usage"}),"Usage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#install-browsers"}),"Install browsers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#install-system-dependencies"}),"Install system dependencies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#generate-code"}),"Generate code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#open-pages"}),"Open pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#inspect-selectors"}),"Inspect selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#take-screenshot"}),"Take screenshot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#generate-pdf"}),"Generate PDF"))),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright\n")),(0,n.kt)("h2",m({},{id:"install-browsers"}),"Install browsers"),(0,n.kt)("p",null,"Playwright can install supported browsers."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Running without arguments will install default browsers\nplaywright install\n")),(0,n.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Install WebKit\nplaywright install webkit\n")),(0,n.kt)("p",null,"See all supported browsers:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright install --help\n")),(0,n.kt)("h2",m({},{id:"install-system-dependencies"}),"Install system dependencies"),(0,n.kt)("p",null,"System dependencies can get installed automatically. This is useful for CI environments."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# See command help\nplaywright install-deps\n")),(0,n.kt)("p",null,"You can also install the dependencies for a single browser only by passing it as an argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright install-deps chromium\n")),(0,n.kt)("p",null,"It's also possible to combine ",(0,n.kt)("inlineCode",{parentName:"p"},"install-deps")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"install")," and install by that the browsers and OS dependencies with a single command. This would do both for Chromium, but you can also leave it out."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright install --with-deps chromium\n")),(0,n.kt)("h2",m({},{id:"generate-code"}),"Generate code"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright codegen wikipedia.org\n")),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,n.kt)("h3",m({},{id:"preserve-authenticated-state"}),"Preserve authenticated state"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright codegen --save-storage=auth.json\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),(0,n.kt)("p",null,"Run with ",(0,n.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright open --load-storage=auth.json my.web.app\nplaywright codegen --load-storage=auth.json my.web.app\n# Perform actions in authenticated state.\n")),(0,n.kt)("h3",m({},{id:"codegen-with-custom-setup"}),"Codegen with custom setup"),(0,n.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)"),"), it is possible to call ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/api/class-page#page-pause"}),"page.pause()")," that will open a separate window with codegen controls."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    # Make sure to run headed.\n    browser = p.chromium.launch(headless=False)\n\n    # Setup context however you like.\n    context = browser.new_context() # Pass any options\n    context.route('**/*', lambda route: route.continue_())\n\n    # Pause the page, and start recording manually.\n    page = context.new_page()\n    page.pause()\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        # Make sure to run headed.\n        browser = await p.chromium.launch(headless=False)\n\n        # Setup context however you like.\n        context = await browser.new_context() # Pass any options\n        await context.route('**/*', lambda route: route.continue_())\n\n        # Pause the page, and start recording manually.\n        page = await context.new_page()\n        await page.pause()\n\nasyncio.run(main())\n")))),(0,n.kt)("h2",m({},{id:"open-pages"}),"Open pages"),(0,n.kt)("p",null,"With ",(0,n.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Open page in Chromium\nplaywright open example.com\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Open page in WebKit\nplaywright wk example.com\n")),(0,n.kt)("h3",m({},{id:"emulate-devices"}),"Emulate devices"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"}),(0,n.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# Emulate iPhone 11.\nplaywright open --device="iPhone 11" wikipedia.org\n')),(0,n.kt)("h3",m({},{id:"emulate-color-scheme-and-viewport-size"}),"Emulate color scheme and viewport size"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Emulate screen size and color scheme.\nplaywright open --viewport-size=800,600 --color-scheme=dark twitter.com\n")),(0,n.kt)("h3",m({},{id:"emulate-geolocation-language-and-timezone"}),"Emulate geolocation, language and timezone"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\nplaywright open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\n')),(0,n.kt)("h2",m({},{id:"inspect-selectors"}),"Inspect selectors"),(0,n.kt)("p",null,"During ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,n.kt)("h4",m({},{id:"playwrightselector"}),"playwright.$(selector)"),(0,n.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,n.kt)("h4",m({},{id:"playwrightselector-1"}),"playwright.$$(selector)"),(0,n.kt)("p",null,"Same as ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,n.kt)("h4",m({},{id:"playwrightinspectselector"}),"playwright.inspect(selector)"),(0,n.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,n.kt)("h4",m({},{id:"playwrightlocatorselector"}),"playwright.locator(selector)"),(0,n.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,n.kt)("h4",m({},{id:"playwrightselectorelement"}),"playwright.selector(element)"),(0,n.kt)("p",null,"Generates selector for the given element."),(0,n.kt)("h2",m({},{id:"take-screenshot"}),"Take screenshot"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# See command help\nplaywright screenshot --help\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\nplaywright screenshot \\\n    --device=\"iPhone 11\" \\\n    --color-scheme=dark \\\n    --wait-for-timeout=3000 \\\n    twitter.com twitter-iphone.png\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Capture a full page screenshot\nplaywright screenshot --full-page en.wikipedia.org wiki-full.png\n")),(0,n.kt)("h2",m({},{id:"generate-pdf"}),"Generate PDF"),(0,n.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# See command help\nplaywright pdf https://en.wikipedia.org/wiki/PDF wiki.pdf\n")))}f.isMDXComponent=!0}}]);