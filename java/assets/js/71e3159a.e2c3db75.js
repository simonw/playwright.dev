"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7547],{52510:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=(a(26396),a(58215),["components"]),s={id:"assertions",title:"Assertions"},o=void 0,c={unversionedId:"assertions",id:"version-1.19/assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.19/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/java/docs/assertions",tags:[],version:"1.19",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.19/docs",previous:{title:"API testing",permalink:"/java/docs/api-testing"},next:{title:"Authentication",permalink:"/java/docs/auth"}},p=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Attribute value",id:"attribute-value",children:[],level:2},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2},{value:"Custom assertions",id:"custom-assertions",children:[],level:2}],u={toc:p};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,r.kt)("h2",{id:"text-content"},"Text content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String content = page.textContent("nav:first-child");\nassertEquals("home", content);\n')),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-text-content"},"Page.textContent(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-text-content"},"ElementHandle.textContent()"))),(0,r.kt)("h2",{id:"inner-text"},"Inner text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String text = page.innerText(".selected");\nassertEquals("value", text);\n')),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-inner-text"},"Page.innerText(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.innerText()"))),(0,r.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String alt = page.getAttribute("input", "alt");\nassertEquals("Text", alt);\n')),(0,r.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean checked = page.isChecked("input");\nassertTrue(checked);\n')),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-is-checked"},"Page.isChecked(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.isChecked()"))),(0,r.kt)("h2",{id:"js-expression"},"JS expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Object content = page.locator("nav:first-child").textContent();\nassertEquals("home", content);\n')),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-eval-on-selector"},"Page.evalOnSelector(selector, expression[, arg, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-jshandle#js-handle-evaluate"},"JSHandle.evaluate(expression[, arg])"))),(0,r.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String html = page.innerHTML("div.result");\nassertEquals("<p>Result</p>", html);\n')),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-inner-html"},"Page.innerHTML(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.innerHTML()"))),(0,r.kt)("h2",{id:"visibility"},"Visibility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean visible = page.isVisible("input");\nassertTrue(visible);\n')),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-is-visible"},"Page.isVisible(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-is-visible"},"ElementHandle.isVisible()"))),(0,r.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean enabled = page.isEnabled("input");\nassertTrue(enabled);\n')),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-is-enabled"},"Page.isEnabled(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-is-enabled"},"ElementHandle.isEnabled()"))),(0,r.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,r.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Assert local storage value\nObject userId = page.evaluate("() => window.localStorage.getItem(\'userId\')");\nassertNotNull(userId);\n\n// Assert value for input element\nObject value = page.locator("#search").inputValue();\nassertEquals("query", value);\n\n// Assert computed style\nObject fontSize = page.locator("div").evaluate("el => window.getComputedStyle(el).fontSize");\nassertEquals("16px", fontSize);\n\n// Assert list length\nObject length = page.locator("li.selected").count();\nassertEquals(3, length);\n')))}d.isMDXComponent=!0}}]);