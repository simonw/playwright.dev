"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6412],{9704:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return n},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return w}});var r=t(87462),l=t(63366),i=(t(67294),t(3905)),s=(t(26396),t(58215),["components"]),n={id:"class-playwright",title:"Playwright"},o=void 0,p={unversionedId:"api/class-playwright",id:"version-1.19/api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.19/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/java/docs/api/class-playwright",tags:[],version:"1.19",frontMatter:{id:"class-playwright",title:"Playwright"},sidebar:"version-1.19/api",next:{title:"APIRequest",permalink:"/java/docs/api/class-apirequest"}},c=[{value:"Playwright.close()",id:"playwright-close",children:[],level:2},{value:"Playwright.create(options)",id:"playwright-create",children:[],level:2},{value:"Playwright.chromium()",id:"playwright-chromium",children:[],level:2},{value:"Playwright.firefox()",id:"playwright-firefox",children:[],level:2},{value:"Playwright.request()",id:"playwright-request",children:[],level:2},{value:"Playwright.selectors()",id:"playwright-selectors",children:[],level:2},{value:"Playwright.webkit()",id:"playwright-webkit",children:[],level:2}],h={toc:c};function w(e){var a=e.components,t=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.navigate("http://example.com");\n      // other actions...\n      browser.close();\n    }\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwright#playwright-close"},"Playwright.close()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwright#playwright-create"},"Playwright.create([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwright#playwright-chromium"},"Playwright.chromium()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwright#playwright-firefox"},"Playwright.firefox()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwright#playwright-request"},"Playwright.request()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwright#playwright-selectors"},"Playwright.selectors()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwright#playwright-webkit"},"Playwright.webkit()"))),(0,i.kt)("h2",{id:"playwright-close"},"Playwright.close()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-close-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#playwright-close-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Terminates this instance of Playwright, will also close all created browsers if they are still running."),(0,i.kt)("h2",{id:"playwright-create"},"Playwright.create(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Playwright.CreateOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setEnv"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-create-option-env"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">"," Additional environment variables that will be passed to the driver process. By default driver process inherits environment variables of the Playwright process.",(0,i.kt)("a",{href:"#playwright-create-option-env",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-create-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwright",title:"Playwright"},"Playwright"),">",(0,i.kt)("a",{href:"#playwright-create-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Launches new Playwright driver process and connects to it. ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-playwright#playwright-close"},"Playwright.close()")," should be called when the instance is no longer needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Playwright playwright = Playwright.create()) {\nBrowser browser = playwright.webkit().launch();\nPage page = browser.newPage();\npage.navigate("https://www.w3.org/");\nplaywright.close();\n')),(0,i.kt)("h2",{id:"playwright-chromium"},"Playwright.chromium()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-firefox"},"Playwright.firefox()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-request"},"Playwright.request()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-apirequest",title:"APIRequest"},"APIRequest"),">")),(0,i.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,i.kt)("h2",{id:"playwright-selectors"},"Playwright.selectors()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-selectors",title:"Selectors"},"Selectors"),">")),(0,i.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/selectors"},"Working with selectors")," for more information."),(0,i.kt)("h2",{id:"playwright-webkit"},"Playwright.webkit()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browser",title:"Browser"},"Browser"),"."))}w.isMDXComponent=!0}}]);