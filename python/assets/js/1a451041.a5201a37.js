(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9683],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,k=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(67294),n=a(80944),i=a(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,m=e.groupId,h=e.className,k=(0,n.Z)(),d=k.tabGroupChoices,g=k.setTabGroupChoices,N=(0,r.useState)(c),f=N[0],w=N[1],b=r.Children.toArray(e.children),y=[];if(null!=m){var v=d[m];null!=v&&v!==f&&u.some((function(e){return e.value===v}))&&w(v)}var _=function(e){var t=e.currentTarget,a=y.indexOf(t),r=u[a].value;w(r),null!=m&&(g(m,r),setTimeout((function(){var e,a,r,n,i,l,s,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,i=e.right,l=window,s=l.innerHeight,p=l.innerWidth,a>=0&&i<=p&&n<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case p:var r=y.indexOf(e.target)+1;a=y[r]||y[0];break;case s:var n=y.indexOf(e.target)-1;a=y[n]||y[y.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:_,onClick:_},a)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,a){"use strict";var r=(0,a(67294).createContext)(void 0);t.Z=r},80944:function(e,t,a){"use strict";var r=a(67294),n=a(79443);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},13783:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l=(a(41395),a(58215),{id:"release-notes",title:"Release notes"}),o={unversionedId:"release-notes",id:"version-1.11.0/release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.11",source:"@site/versioned_docs/version-1.11.0/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/python/docs/1.11.0/release-notes",version:"1.11.0",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"version-1.11.0/docs",previous:{title:"Supported languages",permalink:"/python/docs/1.11.0/languages"},next:{title:"Auto-waiting",permalink:"/python/docs/1.11.0/actionability"}},s=[{value:"Version 1.11",id:"version-111",children:[]},{value:"Version 1.10",id:"version-110",children:[]},{value:"Version 1.9",id:"version-19",children:[]},{value:"Version 1.8",id:"version-18",children:[]},{value:"Version 1.7",id:"version-17",children:[]}],p={toc:s};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-111"},"Version 1.11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-110"},"Version 1.10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-19"},"Version 1.9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-18"},"Version 1.8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-17"},"Version 1.7"))),(0,i.kt)("h2",{id:"version-111"},"Version 1.11"),(0,i.kt)("p",null,"\ud83c\udfa5  New video: ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/_Jla6DyuEu4"},"Playwright: A New Test Automation Framework for the Modern Web")," (",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1xFhZIJrdHkVe2CuMKOrni92HoG2SWslo0DhJJQMR1DI/edit?usp=sharing"},"slides"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We talked about Playwright"),(0,i.kt)("li",{parentName:"ul"},"Showed engineering work behind the scenes"),(0,i.kt)("li",{parentName:"ul"},"Did live demos with new features \u2728"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Special thanks")," to ",(0,i.kt)("a",{parentName:"li",href:"http://applitools.com/"},"applitools")," for hosting the event and inviting us!")),(0,i.kt)("h4",{id:"browser-versions"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 92.0.4498.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0b6"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("h4",{id:"new-apis"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support for ",(0,i.kt)("strong",{parentName:"li"},"async predicates")," across the API in methods such as ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageexpect_requesturl_or_predicate-kwargs"},"page.expect_request(url_or_predicate, **kwargs)")," and others"),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("strong",{parentName:"li"},"emulation devices"),": Galaxy S8, Galaxy S9+, Galaxy Tab S4, Pixel 3, Pixel 4"),(0,i.kt)("li",{parentName:"ul"},"new methods:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pagewait_for_urlurl-kwargs"},"page.wait_for_url(url, **kwargs)")," to await navigations to URL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-video#videodelete"},"video.delete()")," and ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-video#videosave_aspath"},"video.save_as(path)")," to manage screen recording"))),(0,i.kt)("li",{parentName:"ul"},"new options:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screen")," option in the ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-browser#browsernew_contextkwargs"},"browser.new_context(**kwargs)")," method to emulate ",(0,i.kt)("inlineCode",{parentName:"li"},"window.screen")," dimensions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"position")," option in ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pagecheckselector-kwargs"},"page.check(selector, **kwargs)")," and ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageuncheckselector-kwargs"},"page.uncheck(selector, **kwargs)")," methods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trial")," option to dry-run actions in ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pagecheckselector-kwargs"},"page.check(selector, **kwargs)"),", ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageuncheckselector-kwargs"},"page.uncheck(selector, **kwargs)"),", ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageclickselector-kwargs"},"page.click(selector, **kwargs)"),", ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pagedblclickselector-kwargs"},"page.dblclick(selector, **kwargs)"),", ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pagehoverselector-kwargs"},"page.hover(selector, **kwargs)")," and ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pagetapselector-kwargs"},"page.tap(selector, **kwargs)"))))),(0,i.kt)("h2",{id:"version-110"},"Version 1.10"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java v1.10")," is ",(0,i.kt)("strong",{parentName:"li"},"now stable"),"!"),(0,i.kt)("li",{parentName:"ul"},"Run Playwright against ",(0,i.kt)("strong",{parentName:"li"},"Google Chrome")," and ",(0,i.kt)("strong",{parentName:"li"},"Microsoft Edge")," stable channels with the ",(0,i.kt)("a",{parentName:"li",href:"./browsers"},"new channels API"),"."),(0,i.kt)("li",{parentName:"ul"},"Chromium screenshots are ",(0,i.kt)("strong",{parentName:"li"},"fast")," on Mac & Windows.")),(0,i.kt)("h4",{id:"bundled-browser-versions"},"Bundled Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4430.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 87.0b10"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google Chrome 89"),(0,i.kt)("li",{parentName:"ul"},"Microsoft Edge 89")),(0,i.kt)("h4",{id:"new-apis-1"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./api/class-browsertype#browsertypelaunchoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"browserType.launch()"))," now accepts the new ",(0,i.kt)("inlineCode",{parentName:"li"},"'channel'")," option. Read more in ",(0,i.kt)("a",{parentName:"li",href:"./browsers"},"our documentation"),".")),(0,i.kt)("h2",{id:"version-19"},"Version 1.9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/inspector"},"Playwright Inspector")," is a ",(0,i.kt)("strong",{parentName:"li"},"new GUI tool")," to author and debug your tests.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Line-by-line debugging")," of your Playwright scripts, with play, pause and step-through."),(0,i.kt)("li",{parentName:"ul"},"Author new scripts by ",(0,i.kt)("strong",{parentName:"li"},"recording user actions"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Generate element selectors")," for your script by hovering over elements."),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable to launch the Inspector"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pause script execution")," with ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pagepause"},"page.pause()")," in headed mode. Pausing the page launches ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/inspector"},"Playwright Inspector")," for debugging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New has-text pseudo-class")," for CSS selectors. ",(0,i.kt)("inlineCode",{parentName:"li"},':has-text("example")')," matches any element containing ",(0,i.kt)("inlineCode",{parentName:"li"},'"example"')," somewhere inside, possibly in a child or a descendant element. See ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/selectors#text-selector"},"more examples"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Page dialogs are now auto-dismissed")," during execution, unless a listener for ",(0,i.kt)("inlineCode",{parentName:"li"},"dialog")," event is configured. ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/dialogs"},"Learn more")," about this."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Playwright for Python")," is ",(0,i.kt)("strong",{parentName:"li"},"now stable")," with an idiomatic snake case API and pre-built ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/docker"},"Docker image")," to run tests in CI/CD.")),(0,i.kt)("h4",{id:"browser-versions-1"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4421.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 86.0b10"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,i.kt)("h4",{id:"new-apis-2"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pagepause"},"page.pause()"),".")),(0,i.kt)("h2",{id:"version-18"},"Version 1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/selectors#selecting-elements-based-on-layout"},"Selecting elements based on layout")," with ",(0,i.kt)("inlineCode",{parentName:"p"},":left-of()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":right-of()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":above()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},":below()"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Playwright now includes ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/cli"},"command line interface"),", former playwright-cli."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ playwright --help\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-page#pageselect_optionselector-kwargs"},"page.select_option(selector, **kwargs)")," now waits for the options to be present.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New methods to ",(0,i.kt)("a",{parentName:"p",href:"./actionability#assertions"},"assert element state")," like ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-page#pageis_editableselector-kwargs"},"page.is_editable(selector, **kwargs)"),"."))),(0,i.kt)("h4",{id:"new-apis-3"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-elementhandle#element_handleis_checked"},"element_handle.is_checked()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-elementhandle#element_handleis_disabled"},"element_handle.is_disabled()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-elementhandle#element_handleis_editable"},"element_handle.is_editable()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-elementhandle#element_handleis_enabled"},"element_handle.is_enabled()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-elementhandle#element_handleis_hidden"},"element_handle.is_hidden()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-elementhandle#element_handleis_visible"},"element_handle.is_visible()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageis_checkedselector-kwargs"},"page.is_checked(selector, **kwargs)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageis_disabledselector-kwargs"},"page.is_disabled(selector, **kwargs)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageis_editableselector-kwargs"},"page.is_editable(selector, **kwargs)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageis_enabledselector-kwargs"},"page.is_enabled(selector, **kwargs)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageis_hiddenselector-kwargs"},"page.is_hidden(selector, **kwargs)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageis_visibleselector-kwargs"},"page.is_visible(selector, **kwargs)"),"."),(0,i.kt)("li",{parentName:"ul"},"New option ",(0,i.kt)("inlineCode",{parentName:"li"},"'editable'")," in ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-elementhandle#element_handlewait_for_element_statestate-kwargs"},"element_handle.wait_for_element_state(state, **kwargs)"),".")),(0,i.kt)("h4",{id:"browser-versions-2"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4392.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 85.0b5"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,i.kt)("h2",{id:"version-17"},"Version 1.7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New Java SDK"),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java")," is now on par with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"JavaScript"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Python")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-sharp"},"C# bindings"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browser storage API"),": New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New CSS selectors"),": We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/selectors"},"new CSS extensions")," and there's more coming soon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New website"),": The docs website at ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/"},"playwright.dev")," has been updated and is now built with ",(0,i.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/"},"Docusaurus"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support for Apple Silicon"),": Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.")),(0,i.kt)("h4",{id:"new-apis-4"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-browsercontext#browser_contextstorage_statekwargs"},"browser_context.storage_state(**kwargs)")," to get current state for later reuse."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storageState")," option in ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-browser#browsernew_contextkwargs"},"browser.new_context(**kwargs)")," and ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-browser#browsernew_pagekwargs"},"browser.new_page(**kwargs)")," to setup browser context state.")),(0,i.kt)("h4",{id:"browser-versions-3"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 89.0.4344.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 84.0b9"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")))}c.isMDXComponent=!0},86010:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);