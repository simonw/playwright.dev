"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[910],{5506:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return k},default:function(){return d}});var n=a(7462),o=a(3366),s=(a(7294),a(3905)),i=(a(6396),a(8215),["components"]),r={id:"class-websocket",title:"WebSocket"},l=void 0,c={unversionedId:"api/class-websocket",id:"api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/docs/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/python/docs/next/api/class-websocket",tags:[],version:"current",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"api",previous:{title:"Video",permalink:"/python/docs/next/api/class-video"},next:{title:"Worker",permalink:"/python/docs/next/api/class-worker"}},k=[{value:"web_socket.on(&quot;close&quot;)",id:"web-socket-event-close",children:[],level:2},{value:"web_socket.on(&quot;framereceived&quot;)",id:"web-socket-event-frame-received",children:[],level:2},{value:"web_socket.on(&quot;framesent&quot;)",id:"web-socket-event-frame-sent",children:[],level:2},{value:"web_socket.on(&quot;socketerror&quot;)",id:"web-socket-event-socket-error",children:[],level:2},{value:"web_socket.expect_event(event, **kwargs)",id:"web-socket-wait-for-event",children:[],level:2},{value:"web_socket.is_closed()",id:"web-socket-is-closed",children:[],level:2},{value:"web_socket.url",id:"web-socket-url",children:[],level:2},{value:"web_socket.wait_for_event(event, **kwargs)",id:"web-socket-wait-for-event-2",children:[],level:2}],p={toc:k};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-websocket",title:"WebSocket"},"WebSocket")," class represents websocket connections in the page."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-event-close"},'web_socket.on("close")')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-event-frame-received"},'web_socket.on("framereceived")')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-event-frame-sent"},'web_socket.on("framesent")')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-event-socket-error"},'web_socket.on("socketerror")')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-wait-for-event"},"web_socket.expect_event(event, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-is-closed"},"web_socket.is_closed()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-url"},"web_socket.url")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket#web-socket-wait-for-event-2"},"web_socket.wait_for_event(event, **kwargs)"))),(0,s.kt)("h2",{id:"web-socket-event-close"},'web_socket.on("close")'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-websocket",title:"WebSocket"},"WebSocket"),">")),(0,s.kt)("p",null,"Fired when the websocket closes."),(0,s.kt)("h2",{id:"web-socket-event-frame-received"},'web_socket.on("framereceived")'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"payload")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," frame payload")))),(0,s.kt)("p",null,"Fired when the websocket receives a frame."),(0,s.kt)("h2",{id:"web-socket-event-frame-sent"},'web_socket.on("framesent")'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"payload")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," frame payload")))),(0,s.kt)("p",null,"Fired when the websocket sends a frame."),(0,s.kt)("h2",{id:"web-socket-event-socket-error"},'web_socket.on("socketerror")'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<","[String]",">")),(0,s.kt)("p",null,"Fired when the websocket has an error."),(0,s.kt)("h2",{id:"web-socket-wait-for-event"},"web_socket.expect_event(event, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"event"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-event"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Event name, same one would pass into ",(0,s.kt)("inlineCode",{parentName:"li"},"webSocket.on(event)"),".",(0,s.kt)("a",{href:"#web-socket-wait-for-event-option-event",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"predicate"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-predicate"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"},"Callable"),">"," Receives the event data and resolves to truthy value when the waiting should resolve.",(0,s.kt)("a",{href:"#web-socket-wait-for-event-option-predicate",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-set-default-timeout"},"browser_context.set_default_timeout(timeout)"),".",(0,s.kt)("a",{href:"#web-socket-wait-for-event-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/reference/datamodel.html#context-managers",title:"Event context manager"},"EventContextManager"),">",(0,s.kt)("a",{href:"#web-socket-wait-for-event-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."),(0,s.kt)("h2",{id:"web-socket-is-closed"},"web_socket.is_closed()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">",(0,s.kt)("a",{href:"#web-socket-is-closed-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Indicates that the web socket has been closed."),(0,s.kt)("h2",{id:"web-socket-url"},"web_socket.url"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#web-socket-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the URL of the WebSocket."),(0,s.kt)("h2",{id:"web-socket-wait-for-event-2"},"web_socket.wait_for_event(event, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"event"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-event"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Event name, same one typically passed into ",(0,s.kt)("inlineCode",{parentName:"li"},"*.on(event)"),".",(0,s.kt)("a",{href:"#web-socket-wait-for-event-2-option-event",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"predicate"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-predicate"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"},"Callable"),">"," Receives the event data and resolves to truthy value when the waiting should resolve.",(0,s.kt)("a",{href:"#web-socket-wait-for-event-2-option-predicate",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-set-default-timeout"},"browser_context.set_default_timeout(timeout)"),".",(0,s.kt)("a",{href:"#web-socket-wait-for-event-2-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any"},"Any"),">",(0,s.kt)("a",{href:"#web-socket-wait-for-event-2-return",class:"list-anchor"},"#"))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In most cases, you should use ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-websocket#web-socket-wait-for-event"},"web_socket.expect_event(event, **kwargs)"),"."))),(0,s.kt)("p",null,"Waits for given ",(0,s.kt)("inlineCode",{parentName:"p"},"event")," to fire. If predicate is provided, it passes event's value into the ",(0,s.kt)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",(0,s.kt)("inlineCode",{parentName:"p"},"predicate(event)")," to return a truthy value. Will throw an error if the socket is closed before the ",(0,s.kt)("inlineCode",{parentName:"p"},"event")," is fired."))}d.isMDXComponent=!0}}]);