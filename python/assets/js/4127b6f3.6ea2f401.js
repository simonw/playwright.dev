(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3133],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),f=a,m=h["".concat(s,".").concat(f)]||h[f]||u[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58215:function(e,t,r){"use strict";var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},41395:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(67294),a=r(80944),i=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,r=e.block,p=e.defaultValue,u=e.values,h=e.groupId,f=e.className,m=(0,a.Z)(),d=m.tabGroupChoices,y=m.setTabGroupChoices,g=(0,n.useState)(p),k=g[0],b=g[1],v=n.Children.toArray(e.children),_=[];if(null!=h){var N=d[h];null!=N&&N!==k&&u.some((function(e){return e.value===N}))&&b(N)}var w=function(e){var t=e.currentTarget,r=_.indexOf(t),n=u[r].value;b(n),null!=h&&(y(h,n),setTimeout((function(){var e,r,n,a,i,l,s,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,s=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case c:var n=_.indexOf(e.target)+1;r=_[n]||_[0];break;case s:var a=_.indexOf(e.target)-1;r=_[a]||_[_.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:x,onFocus:w,onClick:w},r)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,r){"use strict";var n=(0,r(67294).createContext)(void 0);t.Z=n},80944:function(e,t,r){"use strict";var n=r(67294),a=r(79443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3907:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l=r(41395),o=r(58215),s={id:"class-filechooser",title:"FileChooser"},c={unversionedId:"api/class-filechooser",id:"version-1.9.0/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:'FileChooser] objects are dispatched by the page in the [page.on("filechooser") event.',source:"@site/versioned_docs/version-1.9.0/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/python/docs/1.9.0/api/class-filechooser",version:"1.9.0",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.9.0/api",previous:{title:"ElementHandle",permalink:"/python/docs/1.9.0/api/class-elementhandle"},next:{title:"Frame",permalink:"/python/docs/1.9.0/api/class-frame"}},p=[{value:"file_chooser.element",id:"file_chooserelement",children:[]},{value:"file_chooser.is_multiple()",id:"file_chooseris_multiple",children:[]},{value:"file_chooser.page",id:"file_chooserpage",children:[]},{value:"file_chooser.set_files(files, **kwargs)",id:"file_chooserset_filesfiles-kwargs",children:[]}],u={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-page#pageonfilechooser"},'page.on("filechooser")')," event."),(0,i.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_file_chooser() as fc_info:\n    page.click("upload")\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),(0,i.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_file_chooser() as fc_info:\n    await page.click("upload")\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-filechooser#file_chooserelement"},"file_chooser.element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-filechooser#file_chooseris_multiple"},"file_chooser.is_multiple()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-filechooser#file_chooserpage"},"file_chooser.page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-filechooser#file_chooserset_filesfiles-kwargs"},"file_chooser.set_files(files, **kwargs)"))),(0,i.kt)("h2",{id:"file_chooserelement"},"file_chooser.element"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,i.kt)("p",null,"Returns input element associated with this file chooser."),(0,i.kt)("h2",{id:"file_chooseris_multiple"},"file_chooser.is_multiple()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">")),(0,i.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,i.kt)("h2",{id:"file_chooserpage"},"file_chooser.page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-page",title:"Page"},"Page"),">")),(0,i.kt)("p",null,"Returns page this file chooser belongs to."),(0,i.kt)("h2",{id:"file_chooserset_filesfiles-kwargs"},"file_chooser.set_files(files, **kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"files")," <",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]","|",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]","]","|",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"|",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," <",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"> ","[File]"," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mimeType")," <",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"> ","[File]"," type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"buffer")," <","[Buffer]","> File content"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"no_wait_after")," <",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),"> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextset_default_timeouttimeout"},"browser_context.set_default_timeout(timeout)")," or ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-page#pageset_default_timeouttimeout"},"page.set_default_timeout(timeout)")," methods.")),(0,i.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,i.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}h.isMDXComponent=!0},86010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);