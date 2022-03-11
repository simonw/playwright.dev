"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3720],{6005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=(n(6396),n(8215),["components"]),l={id:"extensibility",title:"Extensibility"},s=void 0,c={unversionedId:"extensibility",id:"version-1.19/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.19/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/java/docs/extensibility",tags:[],version:"1.19",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"version-1.19/docs",previous:{title:"Events",permalink:"/java/docs/events"},next:{title:"Frames",permalink:"/java/docs/frames"}},u=[{value:"Custom selector engines",id:"custom-selector-engines",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-selector-engines"},"Custom selector engines"))),(0,o.kt)("h2",{id:"custom-selector-engines"},"Custom selector engines"),(0,o.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-selectors#selectors-register"},"Selectors.register(name, script[, options])"),"."),(0,o.kt)("p",null,"Selector engine should have the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,o.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,o.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,o.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,o.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,o.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,o.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Must be a script that evaluates to a selector engine instance.\nString createTagNameEngine = "{\\n" +\n  "  // Returns the first element matching given selector in the root\'s subtree.\\n" +\n  "  query(root, selector) {\\n" +\n  "    return root.querySelector(selector);\\n" +\n  "  },\\n" +\n  "\\n" +\n  "  // Returns all elements matching given selector in the root\'s subtree.\\n" +\n  "  queryAll(root, selector) {\\n" +\n  "    return Array.from(root.querySelectorAll(selector));\\n" +\n  "  }\\n" +\n  "}";\n\n// Register the engine. Selectors will be prefixed with "tag=".\nplaywright.selectors().register("tag", createTagNameEngine);\n\n// Now we can use "tag=" selectors.\nLocator button = page.locator("tag=button");\nbutton.click();\n\n// We can combine it with other selector engines using ">>" combinator.\npage.click("tag=div >> span >> \\"Click me\\"");\n\n// We can use it in any methods supporting selectors.\nint buttonCount = (int) page.locator("tag=button").count();\n')))}m.isMDXComponent=!0}}]);