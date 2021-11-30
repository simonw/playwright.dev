"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4235],{8188:function(t,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var e=a(7462),i=a(3366),r=(a(7294),a(3905)),s=(a(6396),a(8215),["components"]),o={id:"class-tracing",title:"Tracing"},c=void 0,l={unversionedId:"api/class-tracing",id:"version-1.17/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/versioned_docs/version-1.17/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/dotnet/docs/api/class-tracing",tags:[],version:"1.17",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.17/api",previous:{title:"Touchscreen",permalink:"/dotnet/docs/api/class-touchscreen"},next:{title:"Video",permalink:"/dotnet/docs/api/class-video"}},p=[{value:"Tracing.StartAsync(options)",id:"tracing-start",children:[],level:2},{value:"Tracing.StartChunkAsync(options)",id:"tracing-start-chunk",children:[],level:2},{value:"Tracing.StopAsync(options)",id:"tracing-stop",children:[],level:2},{value:"Tracing.StopChunkAsync(options)",id:"tracing-stop-chunk",children:[],level:2}],h={toc:p};function u(t){var n=t.components,a=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,e.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/trace-viewer"},"Trace Viewer")," after Playwright script runs."),(0,r.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-start"},"Tracing.StartAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-stop"},"Tracing.StopAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-stop-chunk"},"Tracing.StopChunkAsync(options)"))),(0,r.kt)("h2",{id:"tracing-start"},"Tracing.StartAsync(options)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"TracingStartOptions?"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsertype#browser-type-launch"},"BrowserType.LaunchAsync(options)"),".",(0,r.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Screenshots"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),"?",">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,r.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Snapshots"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),"?",">"," Whether to capture DOM snapshot on every action.",(0,r.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Title"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Trace name to be shown in the Trace Viewer.",(0,r.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Start tracing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,r.kt)("h2",{id:"tracing-start-chunk"},"Tracing.StartChunkAsync(options)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"TracingStartChunkOptions?"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Title"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Trace name to be shown in the Trace Viewer.",(0,r.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", use ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-tracing#tracing-start"},"Tracing.StartAsync(options)")," once, and then create multiple trace chunks with ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync(options)")," and ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-tracing#tracing-stop-chunk"},"Tracing.StopChunkAsync(options)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\n\nawait context.Tracing.StartChunkAsync();\nawait page.ClickAsync("text=Get Started");\n// Everything between StartChunkAsync and StopChunkAsync will be recorded in the trace.\nawait context.Tracing.StopChunkAsync(new TracingStopChunkOptions\n{\n  Path: "trace1.zip"\n});\n\nawait context.Tracing.StartChunkAsync();\nawait page.GotoAsync("http://example.com");\n// Save a second trace file with different actions.\nawait context.Tracing.StopChunkAsync(new TracingStopChunkOptions\n{\n  Path: "trace2.zip"\n});\n')),(0,r.kt)("h2",{id:"tracing-stop"},"Tracing.StopAsync(options)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"TracingStopOptions?"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Path"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Export trace into the file with the given path.",(0,r.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Stop tracing."),(0,r.kt)("h2",{id:"tracing-stop-chunk"},"Tracing.StopChunkAsync(options)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"TracingStopChunkOptions?"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Path"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Export trace collected since the last ",(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync(options)")," call into the file with the given path.",(0,r.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Stop the trace chunk. See ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync(options)")," for more details about multiple trace chunks."))}u.isMDXComponent=!0}}]);