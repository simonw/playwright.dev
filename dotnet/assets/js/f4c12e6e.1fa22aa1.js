"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7747],{19306:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=t(87462),r=t(63366),l=(t(67294),t(3905)),o=(t(26396),t(58215),["components"]),i={id:"verification",title:"Verification"},s=void 0,p={unversionedId:"verification",id:"version-1.17/verification",isDocsHomePage:!1,title:"Verification",description:"- Console logs",source:"@site/versioned_docs/version-1.17/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/dotnet/docs/1.17/verification",tags:[],version:"1.17",frontMatter:{id:"verification",title:"Verification"},sidebar:"version-1.17/docs",previous:{title:"Screenshots",permalink:"/dotnet/docs/1.17/screenshots"},next:{title:"Videos",permalink:"/dotnet/docs/1.17/videos"}},c=[{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Page events",id:"page-events",children:[{value:"<code>&quot;requestfailed&quot;</code>",id:"requestfailed",children:[],level:4},{value:"<code>&quot;dialog&quot;</code> - handle alert, confirm, prompt",id:"dialog---handle-alert-confirm-prompt",children:[],level:4},{value:"<code>&quot;popup&quot;</code> - handle popup windows",id:"popup---handle-popup-windows",children:[],level:4},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2}],d={toc:c};function u(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,l.kt)("h2",{id:"console-logs"},"Console logs"),(0,l.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Listen for all System.out.printlns\npage.Console += (_, msg) => Console.WriteLine(msg.Text);\n\n// Listen for all console events and handle errors\npage.Console += (_, msg) =>\n{\n    if ("error".Equals(msg.Type))\n        Console.WriteLine("Error text: " + msg.Text);\n};\n\n// Get the next System.out.println\nvar waitForMessageTask = page.WaitForConsoleMessageAsync();\nawait page.EvaluateAsync("console.log(\'hello\', 42, { foo: \'bar\' });");\nvar message = await waitForMessageTask;\n// Deconstruct console.log arguments\nawait message.Args.ElementAt(0).JsonValueAsync<string>(); // hello\nawait message.Args.ElementAt(1).JsonValueAsync<int>(); // 42\n')),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page#page-event-console"},"event Page.Console"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"page-errors"},"Page errors"),(0,l.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,l.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Log all uncaught errors to the terminal\npage.PageError += (_, exception) =>\n{\n  Console.WriteLine("Uncaught exception: " + exception);\n};\n')),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page#page-event-page-error"},"event Page.PageError"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"page-events"},"Page events"),(0,l.kt)("h4",{id:"requestfailed"},(0,l.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,l.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,l.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'page.RequestFailed += (_, request) =>\n{\n    Console.WriteLine(request.Url + " " + request.Failure);\n};\n')),(0,l.kt)("h4",{id:"popup---handle-popup-windows"},(0,l.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync("#open");\n});\n')),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page#page-event-request-failed"},"event Page.RequestFailed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page#page-event-dialog"},"event Page.Dialog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.17/api/class-page#page-event-popup"},"event Page.Popup"))))}u.isMDXComponent=!0}}]);