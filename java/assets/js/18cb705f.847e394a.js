(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6852],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return w}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),w=a,m=d["".concat(s,".").concat(w)]||d[w]||u[w]||i;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function w(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(7294),a=t(944),i=t(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var n=e.lazy,t=e.block,p=e.defaultValue,u=e.values,d=e.groupId,w=e.className,m=(0,a.Z)(),h=m.tabGroupChoices,b=m.setTabGroupChoices,f=(0,r.useState)(p),g=f[0],y=f[1],v=r.Children.toArray(e.children),k=[];if(null!=d){var O=h[d];null!=O&&O!==g&&u.some((function(e){return e.value===O}))&&y(O)}var P=function(e){var n=e.currentTarget,t=k.indexOf(n),r=u[t].value;y(r),null!=d&&(b(d,r),setTimeout((function(){var e,t,r,a,i,l,s,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,l=window,s=l.innerHeight,c=l.innerWidth,t>=0&&i<=c&&a<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(o),setTimeout((function(){return n.classList.remove(o)}),2e3))}),150))},T=function(e){var n,t;switch(e.keyCode){case c:var r=k.indexOf(e.target)+1;t=k[r]||k[0];break;case s:var a=k.indexOf(e.target)-1;t=k[a]||k[k.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},w)},u.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:P,onClick:P},t)}))),n?(0,r.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},944:function(e,n,t){"use strict";var r=t(7294),a=t(9443);n.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8898:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),l=(t(1395),t(8215),{id:"test-install",title:"Advanced: installing browsers"}),o={unversionedId:"test-install",id:"version-1.13.0/test-install",isDocsHomePage:!1,title:"Advanced: installing browsers",description:"- Installing browser binaries",source:"@site/versioned_docs/version-1.13.0/test-install.mdx",sourceDirName:".",slug:"/test-install",permalink:"/java/docs/test-install",version:"1.13.0",frontMatter:{id:"test-install",title:"Advanced: installing browsers"}},s=[{value:"Installing browser binaries",id:"installing-browser-binaries",children:[]},{value:"Installing a single browser binary",id:"installing-a-single-browser-binary",children:[]},{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Stale browser removal",id:"stale-browser-removal",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installing-browser-binaries"},"Installing browser binaries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installing-a-single-browser-binary"},"Installing a single browser binary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#managing-browser-binaries"},"Managing browser binaries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#download-from-artifact-repository"},"Download from artifact repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#stale-browser-removal"},"Stale browser removal"))),(0,i.kt)("h2",{id:"installing-browser-binaries"},"Installing browser binaries"),(0,i.kt)("p",null,"Each version of Playwright Test needs specific versions of browser binaries to operate. Playwright Test includes ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/cli"},"Command Line Interface")," that can download these binaries. By default, Playwright Test downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Add dependency\nnpm i -D @playwright/test\n# Download browser binaries\nnpx playwright install\n")),(0,i.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,i.kt)("h2",{id:"installing-a-single-browser-binary"},"Installing a single browser binary"),(0,i.kt)("p",null,"Playwright Test downloads Chromium, Firefox and WebKit browsers by default. To install a specific browser, pass it as an argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright install webkit\n")),(0,i.kt)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),(0,i.kt)("p",null,"You can override default installation behavior using environment variables. When installing browsers, ask Playwright Test to download them into a specific location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\nnpx playwright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\nnpx playwright install\n')),(0,i.kt)("p",null,"When running tests, ask it to search for browsers in a shared location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright test\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\nnpx playwright test\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\nnpx playwright test\n')),(0,i.kt)("p",null,"Or you can opt into the hermetic install and place binaries in the local folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux/macOS\n# Places binaries to node_modules/@playwright/test\nPLAYWRIGHT_BROWSERS_PATH=0 npx playwright install\n\n# Windows with cmd.exe\n# Places binaries to node_modules\\@playwright\\test\nset PLAYWRIGHT_BROWSERS_PATH=0\nnpx playwright install\n\n# Windows with PowerShell\n# Places binaries to node_modules\\@playwright\\test\n$env:PLAYWRIGHT_BROWSERS_PATH=0\nnpx playwright install\n")),(0,i.kt)("p",null,"Playwright Test keeps track of packages that need those browsers and will garbage collect them as you update Playwright Test to the newer versions."),(0,i.kt)("h2",{id:"install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy"),(0,i.kt)("p",null,"By default, Playwright Test downloads browsers from Microsoft CDN."),(0,i.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nHTTPS_PROXY=https://192.0.2.1 npx playwright install\n\n# Windows with cmd.exe\nset HTTPS_PROXY=https://192.0.2.1\nnpx playwright install\n\n# Windows with PowerShell\n$env:HTTPS_PROXY="https://192.0.2.1"\nnpx playwright install\n')),(0,i.kt)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),(0,i.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,i.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npx playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpx playwright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\nnpx playwright install\n')),(0,i.kt)("p",null,"It is also possible to choose a per-browser download host using ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,i.kt)("h2",{id:"stale-browser-removal"},"Stale browser removal"),(0,i.kt)("p",null,"Playwright Test keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright Test instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,i.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}p.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);