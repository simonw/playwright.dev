(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7563],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),o=n(80944),r=n(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,d=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,u=e.groupId,m=e.className,f=(0,o.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,w=(0,a.useState)(c),y=w[0],g=w[1],k=a.Children.toArray(e.children),b=[];if(null!=u){var N=h[u];null!=N&&N!==y&&p.some((function(e){return e.value===N}))&&g(N)}var x=function(e){var t=e.currentTarget,n=b.indexOf(t),a=p[n].value;g(a),null!=u&&(v(u,a),setTimeout((function(){var e,n,a,o,r,l,s,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,l=window,s=l.innerHeight,d=l.innerWidth,n>=0&&r<=d&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case d:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case s:var o=b.indexOf(e.target)-1;n=b[o]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),o=n(79443);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},73695:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),l=n(41395),i=n(58215),s={id:"downloads",title:"Downloads"},d={unversionedId:"downloads",id:"version-1.10.0/downloads",isDocsHomePage:!1,title:"Downloads",description:"For uploading files, see the uploading files section.",source:"@site/versioned_docs/version-1.10.0/downloads.mdx",sourceDirName:".",slug:"/downloads",permalink:"/python/docs/1.10.0/downloads",version:"1.10.0",frontMatter:{id:"downloads",title:"Downloads"},sidebar:"version-1.10.0/docs",previous:{title:"Dialogs",permalink:"/python/docs/1.10.0/dialogs"},next:{title:"Element selectors",permalink:"/python/docs/1.10.0/selectors"}},c=[{value:"API reference",id:"api-reference",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For uploading files, see the ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/input#upload-files"},"uploading files")," section."))),(0,r.kt)("p",null,"For every attachment downloaded by the page, ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-page#pageondownload"},'page.on("download")')," event is emitted. If you create a browser context with the ",(0,r.kt)("inlineCode",{parentName:"p"},"accept_downloads")," set, all these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-download",title:"Download"},"Download")," object from the event."),(0,r.kt)("p",null,"You can specify where to persist downloaded files using the ",(0,r.kt)("inlineCode",{parentName:"p"},"downloads_path")," option in ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-browsertype#browser_typelaunchkwargs"},"browser_type.launch(**kwargs)"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unless ",(0,r.kt)("inlineCode",{parentName:"p"},"downloads_path")," is set, downloaded files are deleted when the browser context that produced them is closed."))),(0,r.kt)("p",null,"Here is the simplest way to handle the file download:"),(0,r.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Start waiting for the download\nwith page.expect_download() as download_info:\n    # Perform the action that initiates download\n    page.click("button#delayed-download")\ndownload = download_info.value\n# Wait for the download process to complete\npath = download.path()\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Start waiting for the download\nasync with page.expect_download() as download_info:\n    # Perform the action that initiates download\n    await page.click("button#delayed-download")\ndownload = await download_info.value\n# Wait for the download process to complete\npath = await download.path()\n')))),(0,r.kt)("h4",{id:"variations"},"Variations"),(0,r.kt)("p",null,"If you have no idea what initiates the download, you can still handle the event:"),(0,r.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'page.on("download", lambda download: print(download.path()))\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'async def handle_download(download):\n    print(await download.path())\npage.on("download", handle_download)\n')))),(0,r.kt)("p",null,"Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve."),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-download",title:"Download"},"Download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-page#pageondownload"},'page.on("download")'))))}u.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);