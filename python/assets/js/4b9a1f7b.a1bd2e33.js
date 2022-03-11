"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9325],{1505:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return g},toc:function(){return u},default:function(){return m}});var t=n(7462),l=n(3366),o=(n(7294),n(3905)),r=n(6396),p=n(8215),s=["components"],i={id:"verification",title:"Verification"},c=void 0,g={unversionedId:"verification",id:"version-1.19/verification",isDocsHomePage:!1,title:"Verification",description:"- Console logs",source:"@site/versioned_docs/version-1.19/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/python/docs/verification",tags:[],version:"1.19",frontMatter:{id:"verification",title:"Verification"},sidebar:"version-1.19/docs",previous:{title:"Selectors",permalink:"/python/docs/selectors"},next:{title:"Videos",permalink:"/python/docs/videos"}},u=[{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Page events",id:"page-events",children:[{value:"<code>&quot;requestfailed&quot;</code>",id:"requestfailed",children:[],level:4},{value:"<code>&quot;dialog&quot;</code> - handle alert, confirm, prompt",id:"dialog---handle-alert-confirm-prompt",children:[],level:4},{value:"<code>&quot;popup&quot;</code> - handle popup windows",id:"popup---handle-popup-windows",children:[],level:4},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2}],d={toc:u};function m(e){var a=e.components,n=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,o.kt)("h2",{id:"console-logs"},"Console logs"),(0,o.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Listen for all console logs\npage.on("console", lambda msg: print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nwith page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = msg_info.value\n\n# Deconstruct print arguments\nmsg.args[0].json_value() # hello\nmsg.args[1].json_value() # 42\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Listen for all console logs\npage.on("console", lambda msg: print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nasync with page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    await page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = await msg_info.value\n\n# Deconstruct print arguments\nawait msg.args[0].json_value() # hello\nawait msg.args[1].json_value() # 42\n')))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-event-console"},'page.on("console")'))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-errors"},"Page errors"),(0,o.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,o.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Log all uncaught errors to the terminal\npage.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))\n\n# Navigate to a page with an exception.\npage.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Log all uncaught errors to the terminal\npage.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))\n\n# Navigate to a page with an exception.\nawait page.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n')))),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-event-page-error"},'page.on("pageerror")'))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-events"},"Page events"),(0,o.kt)("h4",{id:"requestfailed"},(0,o.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("requestfailed", lambda request: print(request.url + " " + request.failure.error_text))\n')),(0,o.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,o.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: dialog.accept())\n')),(0,o.kt)("h4",{id:"popup---handle-popup-windows"},(0,o.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n')))),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-event-request-failed"},'page.on("requestfailed")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-event-dialog"},'page.on("dialog")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-event-popup"},'page.on("popup")'))))}m.isMDXComponent=!0}}]);