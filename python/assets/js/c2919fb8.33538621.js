(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6763],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),p=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return r?s.createElement(m,i(i({ref:t},u),{},{components:r})):s.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58215:function(e,t,r){"use strict";var s=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return s.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},41395:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(67294),n=r(80944),a=r(86010),i="tabItem_1uMI",o="tabItemActive_2DSg";var l=37,p=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,c=e.values,h=e.groupId,d=e.className,m=(0,n.Z)(),f=m.tabGroupChoices,k=m.setTabGroupChoices,y=(0,s.useState)(u),b=y[0],N=y[1],v=s.Children.toArray(e.children),x=[];if(null!=h){var g=f[h];null!=g&&g!==b&&c.some((function(e){return e.value===g}))&&N(g)}var O=function(e){var t=e.currentTarget,r=x.indexOf(t),s=c[r].value;N(s),null!=h&&(k(h,s),setTimeout((function(){var e,r,s,n,a,i,l,p;(e=t.getBoundingClientRect(),r=e.top,s=e.left,n=e.bottom,a=e.right,i=window,l=i.innerHeight,p=i.innerWidth,r>=0&&a<=p&&n<=l&&s>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,r;switch(e.keyCode){case p:var s=x.indexOf(e.target)+1;r=x[s]||x[0];break;case l:var n=x.indexOf(e.target)-1;r=x[n]||x[x.length-1]}null==(t=r)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},d)},c.map((function(e){var t=e.value,r=e.label;return s.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:O,onClick:O},r)}))),t?(0,s.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,r){"use strict";var s=(0,r(67294).createContext)(void 0);t.Z=s},80944:function(e,t,r){"use strict";var s=r(67294),n=r(79443);t.Z=function(){var e=(0,s.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},87206:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var s=r(22122),n=r(19756),a=(r(67294),r(3905)),i=(r(41395),r(58215),{id:"class-response",title:"Response"}),o={unversionedId:"api/class-response",id:"api/class-response",isDocsHomePage:!1,title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/docs/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/python/docs/next/api/class-response",version:"current",frontMatter:{id:"class-response",title:"Response"},sidebar:"api",previous:{title:"Request",permalink:"/python/docs/next/api/class-request"},next:{title:"Route",permalink:"/python/docs/next/api/class-route"}},l=[{value:"response.body()",id:"response-body",children:[]},{value:"response.finished()",id:"response-finished",children:[]},{value:"response.frame",id:"response-frame",children:[]},{value:"response.headers",id:"response-headers",children:[]},{value:"response.json()",id:"response-json",children:[]},{value:"response.ok",id:"response-ok",children:[]},{value:"response.request",id:"response-request",children:[]},{value:"response.security_details()",id:"response-security-details",children:[]},{value:"response.server_addr()",id:"response-server-addr",children:[]},{value:"response.status",id:"response-status",children:[]},{value:"response.status_text",id:"response-status-text",children:[]},{value:"response.text()",id:"response-text",children:[]},{value:"response.url",id:"response-url",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-response",title:"Response"},"Response")," class represents responses which are received by page."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-body"},"response.body()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-finished"},"response.finished()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-frame"},"response.frame")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-headers"},"response.headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-json"},"response.json()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-ok"},"response.ok")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-request"},"response.request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-security-details"},"response.security_details()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-server-addr"},"response.server_addr()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-status"},"response.status")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-status-text"},"response.status_text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-text"},"response.text()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response#response-url"},"response.url"))),(0,a.kt)("h2",{id:"response-body"},"response.body()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-body-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">",(0,a.kt)("a",{href:"#response-body-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the buffer with response body."),(0,a.kt)("h2",{id:"response-finished"},"response.finished()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-finished-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#response-finished-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Waits for this response to finish, returns failure error if request failed."),(0,a.kt)("h2",{id:"response-frame"},"response.frame"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-frame-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-frame",title:"Frame"},"Frame"),">",(0,a.kt)("a",{href:"#response-frame-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-frame",title:"Frame"},"Frame")," that initiated this response."),(0,a.kt)("h2",{id:"response-headers"},"response.headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">",(0,a.kt)("a",{href:"#response-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the object with HTTP headers associated with the response. All header names are lower-case."),(0,a.kt)("h2",{id:"response-json"},"response.json()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-json-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",(0,a.kt)("a",{href:"#response-json-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the JSON representation of response body."),(0,a.kt)("p",null,"This method will throw if the response body is not parsable via ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"."),(0,a.kt)("h2",{id:"response-ok"},"response.ok"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-ok-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">",(0,a.kt)("a",{href:"#response-ok-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,a.kt)("h2",{id:"response-request"},"response.request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-request-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request",title:"Request"},"Request"),">",(0,a.kt)("a",{href:"#response-request-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the matching ",(0,a.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-request",title:"Request"},"Request")," object."),(0,a.kt)("h2",{id:"response-security-details"},"response.security_details()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-security-details-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,a.kt)("a",{href:"#response-security-details-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"issuer")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Common Name component of the Issuer field. from the certificate. This should only be used for informational purposes. Optional."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protocol")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," The specific TLS protocol used. (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"TLS 1.3"),"). Optional."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subjectName")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Common Name component of the Subject field from the certificate. This should only be used for informational purposes. Optional."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validFrom")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Unix timestamp (in seconds) specifying when this cert becomes valid. Optional."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validTo")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Unix timestamp (in seconds) specifying when this cert becomes invalid. Optional.")))),(0,a.kt)("p",null,"Returns SSL and other security information."),(0,a.kt)("h2",{id:"response-server-addr"},"response.server_addr()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-server-addr-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,a.kt)("a",{href:"#response-server-addr-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ipAddress")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," IPv4 or IPV6 address of the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">")))),(0,a.kt)("p",null,"Returns the IP address and port of the server."),(0,a.kt)("h2",{id:"response-status"},"response.status"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">",(0,a.kt)("a",{href:"#response-status-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,a.kt)("h2",{id:"response-status-text"},"response.status_text"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-text-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#response-status-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,a.kt)("h2",{id:"response-text"},"response.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-text-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#response-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the text representation of response body."),(0,a.kt)("h2",{id:"response-url"},"response.url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-url-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#response-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the response."))}u.isMDXComponent=!0},86010:function(e,t,r){"use strict";function s(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);