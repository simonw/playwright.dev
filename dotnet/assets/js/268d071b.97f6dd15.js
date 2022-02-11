"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1055],{26014:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var o=a(87462),i=a(63366),n=(a(67294),a(3905)),s=(a(26396),a(58215),["components"]),l={id:"class-mouse",title:"Mouse"},r=void 0,u={unversionedId:"api/class-mouse",id:"version-1.19/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.19/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/dotnet/docs/api/class-mouse",tags:[],version:"1.19",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.19/api",previous:{title:"Locator",permalink:"/dotnet/docs/api/class-locator"},next:{title:"Page",permalink:"/dotnet/docs/api/class-page"}},d=[{value:"Mouse.ClickAsync(x, y, options)",id:"mouse-click",children:[],level:2},{value:"Mouse.DblClickAsync(x, y, options)",id:"mouse-dblclick",children:[],level:2},{value:"Mouse.DownAsync(options)",id:"mouse-down",children:[],level:2},{value:"Mouse.MoveAsync(x, y, options)",id:"mouse-move",children:[],level:2},{value:"Mouse.UpAsync(options)",id:"mouse-up",children:[],level:2},{value:"Mouse.WheelAsync(deltaX, deltaY)",id:"mouse-wheel",children:[],level:2}],c={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,n.kt)("p",null,"Every ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-mouse"},"Page.Mouse"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"await Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.DownAsync();\nawait Page.Mouse.MoveAsync(0, 100);\nawait Page.Mouse.MoveAsync(100, 100);\nawait Page.Mouse.MoveAsync(100, 0);\nawait Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.UpAsync();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-mouse#mouse-click"},"Mouse.ClickAsync(x, y, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-mouse#mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-mouse#mouse-wheel"},"Mouse.WheelAsync(deltaX, deltaY)"))),(0,n.kt)("h2",{id:"mouse-click"},"Mouse.ClickAsync(x, y, options)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">",(0,n.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">",(0,n.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"MouseClickOptions?"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Button"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"enum MouseButton { Left, Right, Middle }?"),">"," Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),".",(0,n.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),"?",">"," defaults to 1. See ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,n.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),"?",">"," Time to wait between ",(0,n.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,n.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,n.kt)("h2",{id:"mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">",(0,n.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">",(0,n.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"MouseDblClickOptions?"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Button"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"enum MouseButton { Left, Right, Middle }?"),">"," Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),".",(0,n.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),"?",">"," Time to wait between ",(0,n.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,n.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),", ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")," and ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,n.kt)("h2",{id:"mouse-down"},"Mouse.DownAsync(options)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"MouseDownOptions?"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Button"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"enum MouseButton { Left, Right, Middle }?"),">"," Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),".",(0,n.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),"?",">"," defaults to 1. See ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,n.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,n.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,n.kt)("h2",{id:"mouse-move"},"Mouse.MoveAsync(x, y, options)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">",(0,n.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">",(0,n.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"MouseMoveOptions?"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Steps"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),"?",">"," defaults to 1. Sends intermediate ",(0,n.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,n.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,n.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,n.kt)("h2",{id:"mouse-up"},"Mouse.UpAsync(options)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"MouseUpOptions?"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Button"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"enum MouseButton { Left, Right, Middle }?"),">"," Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),".",(0,n.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"},"int"),"?",">"," defaults to 1. See ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,n.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,n.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"mouseup")," event."),(0,n.kt)("h2",{id:"mouse-wheel"},"Mouse.WheelAsync(deltaX, deltaY)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"deltaX"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-x"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Pixels to scroll horizontally.",(0,n.kt)("a",{href:"#mouse-wheel-option-delta-x",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"deltaY"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-y"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),">"," Pixels to scroll vertically.",(0,n.kt)("a",{href:"#mouse-wheel-option-delta-y",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,n.kt)("a",{href:"#mouse-wheel-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"wheel")," event."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Wheel events may cause scrolling if they are not handled, and this method does not wait for the scrolling to finish before returning."))))}p.isMDXComponent=!0}}]);