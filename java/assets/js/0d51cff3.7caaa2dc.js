"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[573],{4508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=(n(6396),n(8215),["components"]),o={id:"events",title:"Events"},l=void 0,p={unversionedId:"events",id:"version-1.18/events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/versioned_docs/version-1.18/events.mdx",sourceDirName:".",slug:"/events",permalink:"/java/docs/1.18/events",tags:[],version:"1.18",frontMatter:{id:"events",title:"Events"},sidebar:"version-1.18/docs",previous:{title:"Evaluating JavaScript",permalink:"/java/docs/1.18/evaluating"},next:{title:"Extensibility",permalink:"/java/docs/1.18/extensibility"}},d=[{value:"Waiting for event",id:"waiting-for-event",children:[],level:2},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[],level:2},{value:"Adding one-off listeners",id:"adding-one-off-listeners",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#waiting-for-event"},"Waiting for event")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#addingremoving-event-listener"},"Adding/removing event listener")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-one-off-listeners"},"Adding one-off listeners"))),(0,r.kt)("h2",{id:"waiting-for-event"},"Waiting for event"),(0,r.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,r.kt)("p",null,"Wait for a request with the specified url:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// The callback lambda defines scope of the code that is expected to\n// trigger request.\nRequest request = page.waitForRequest("**/*logo*.png", () -> {\n  page.navigate("https://wikipedia.org");\n});\nSystem.out.println(request.url());\n')),(0,r.kt)("p",null,"Wait for popup window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// The callback lambda defines scope of the code that is expected to\n// create popup window.\nPage popup = page.waitForPopup(() -> {\n  page.evaluate("window.open()");\n});\npopup.navigate("https://wikipedia.org");\n')),(0,r.kt)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),(0,r.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'page.onRequest(request -> System.out.println("Request sent: " + request.url()));\nConsumer<Request> listener = request -> System.out.println("Request finished: " + request.url());\npage.onRequestFinished(listener);\npage.navigate("https://wikipedia.org");\n\n// Remove previously added listener, each on* method has corresponding off*\npage.offRequestFinished(listener);\npage.navigate("https://www.openstreetmap.org/");\n')),(0,r.kt)("h2",{id:"adding-one-off-listeners"},"Adding one-off listeners"),(0,r.kt)("p",null,"If certain event needs to be handled once, there is a convenience API for that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'page.onceDialog(dialog -> dialog.accept("2021"));\npage.evaluate("prompt(\'Enter a number:\')");\n')),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browser",title:"Browser"},"Browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.18/api/class-worker",title:"Worker"},"Worker"))))}c.isMDXComponent=!0}}]);