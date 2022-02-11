"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3720],{76005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return g},default:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(26396),a=n(58215),s=["components"],c={id:"extensibility",title:"Extensibility"},u=void 0,p={unversionedId:"extensibility",id:"version-1.19/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.19/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/python/docs/extensibility",tags:[],version:"1.19",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"version-1.19/docs",previous:{title:"Events",permalink:"/python/docs/events"},next:{title:"Frames",permalink:"/python/docs/frames"}},g=[{value:"Custom selector engines",id:"custom-selector-engines",children:[],level:2}],m={toc:g};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-selector-engines"},"Custom selector engines"))),(0,o.kt)("h2",{id:"custom-selector-engines"},"Custom selector engines"),(0,o.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-selectors#selectors-register"},"selectors.register(name, **kwargs)"),"."),(0,o.kt)("p",null,"Selector engine should have the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,o.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,o.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,o.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,o.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,o.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,o.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,o.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'tag_selector = """\n    // Must evaluate to a selector engine instance.\n    {\n      // Returns the first element matching given selector in the root\'s subtree.\n      query(root, selector) {\n        return root.querySelector(selector);\n      },\n\n      // Returns all elements matching given selector in the root\'s subtree.\n      queryAll(root, selector) {\n        return Array.from(root.querySelectorAll(selector));\n      }\n    }"""\n\n# register the engine. selectors will be prefixed with "tag=".\nplaywright.selectors.register("tag", tag_selector)\n\n# now we can use "tag=" selectors.\nbutton = page.locator("tag=button")\nbutton.click()\n\n# we can combine it with other selector engines using `>>` combinator.\npage.click("tag=div >> span >> "click me"")\n\n# we can use it in any methods supporting selectors.\nbutton_count = page.locator("tag=button").count()\n'))),(0,o.kt)(a.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'tag_selector = """\n    // Must evaluate to a selector engine instance.\n    {\n      // Returns the first element matching given selector in the root\'s subtree.\n      query(root, selector) {\n        return root.querySelector(selector);\n      },\n\n      // Returns all elements matching given selector in the root\'s subtree.\n      queryAll(root, selector) {\n        return Array.from(root.querySelectorAll(selector));\n      }\n    }"""\n\n# register the engine. selectors will be prefixed with "tag=".\nawait playwright.selectors.register("tag", tag_selector)\n\n# now we can use "tag=" selectors.\nbutton = page.locator("tag=button")\nawait button.click()\n\n# we can combine it with other selector engines using `>>` combinator.\nawait page.click("tag=div >> span >> "click me"")\n\n# we can use it in any methods supporting selectors.\nbutton_count = await page.locator("tag=button").count()\n')))))}d.isMDXComponent=!0}}]);