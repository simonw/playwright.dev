"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5506],{47578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var s=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(26396),l=n(58215),r=["components"],c={id:"class-cdpsession",title:"CDPSession"},p=void 0,d={unversionedId:"api/class-cdpsession",id:"version-1.17/api/class-cdpsession",isDocsHomePage:!1,title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/versioned_docs/version-1.17/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/python/docs/1.17/api/class-cdpsession",tags:[],version:"1.17",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"version-1.17/api",previous:{title:"BrowserType",permalink:"/python/docs/1.17/api/class-browsertype"},next:{title:"ConsoleMessage",permalink:"/python/docs/1.17/api/class-consolemessage"}},m=[{value:"cdp_session.detach()",id:"cdp-session-detach",children:[],level:2},{value:"cdp_session.send(method, **kwargs)",id:"cdp-session-send",children:[],level:2}],h={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"extends: ",(0,i.kt)("a",{parentName:"li",href:"https://pyee.readthedocs.io/en/latest/#pyee.BaseEventEmitter",title:"EventEmitter"},"EventEmitter"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"protocol methods can be called with ",(0,i.kt)("inlineCode",{parentName:"li"},"session.send")," method."),(0,i.kt)("li",{parentName:"ul"},"protocol events can be subscribed to with ",(0,i.kt)("inlineCode",{parentName:"li"},"session.on")," method.")),(0,i.kt)("p",null,"Useful links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",(0,i.kt)("a",{parentName:"li",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer"),"."),(0,i.kt)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"},"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),(0,i.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'client = page.context.new_cdp_session(page)\nclient.send("Animation.enable")\nclient.on("Animation.animationCreated", lambda: print("animation created!"))\nresponse = client.send("Animation.getPlaybackRate")\nprint("playback rate is " + str(response["playbackRate"]))\nclient.send("Animation.setPlaybackRate", {\n    playbackRate: response["playbackRate"] / 2\n})\n'))),(0,i.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'client = await page.context.new_cdp_session(page)\nawait client.send("Animation.enable")\nclient.on("Animation.animationCreated", lambda: print("animation created!"))\nresponse = await client.send("Animation.getPlaybackRate")\nprint("playback rate is " + str(response["playbackRate"]))\nawait client.send("Animation.setPlaybackRate", {\n    playbackRate: response["playbackRate"] / 2\n})\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-cdpsession#cdp-session-detach"},"cdp_session.detach()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.17/api/class-cdpsession#cdp-session-send"},"cdp_session.send(method, **kwargs)"))),(0,i.kt)("h2",{id:"cdp-session-detach"},"cdp_session.detach()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-detach-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#cdp-session-detach-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),(0,i.kt)("h2",{id:"cdp-session-send"},"cdp_session.send(method, **kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-method"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," protocol method name",(0,i.kt)("a",{href:"#cdp-session-send-option-method",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-params"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Optional method parameters",(0,i.kt)("a",{href:"#cdp-session-send-option-params",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,i.kt)("a",{href:"#cdp-session-send-return",class:"list-anchor"},"#"))))}u.isMDXComponent=!0}}]);