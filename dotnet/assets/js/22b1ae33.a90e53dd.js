"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5909],{3266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),s=(n(6396),n(8215),["components"]),a={id:"selenium-grid",title:"Selenium Grid"},l=void 0,u={unversionedId:"selenium-grid",id:"selenium-grid",isDocsHomePage:!1,title:"Selenium Grid",description:"Selenium 4",source:"@site/docs/selenium-grid.mdx",sourceDirName:".",slug:"/selenium-grid",permalink:"/dotnet/docs/next/selenium-grid",tags:[],version:"current",frontMatter:{id:"selenium-grid",title:"Selenium Grid"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/dotnet/docs/next/ci"},next:{title:"Supported languages",permalink:"/dotnet/docs/next/languages"}},d=[{value:"Selenium 4",id:"selenium-4",children:[],level:2},{value:"Selenium 3",id:"selenium-3",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"selenium-4"},"Selenium 4"),(0,o.kt)("p",null,"Playwright can connect to ",(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/"},"Selenium Grid Hub")," that runs Selenium 4 to launch ",(0,o.kt)("strong",{parentName:"p"},"Chrome")," or ",(0,o.kt)("strong",{parentName:"p"},"Microsoft Edge")," browser, instead of running browser on the local machine. To enable this mode, set ",(0,o.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_URL")," environment variable pointing to your Selenium Grid Hub."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub dotnet test\n")),(0,o.kt)("p",null,"You don't have to change your code, just use ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-browsertype#browser-type-launch"},"BrowserType.LaunchAsync(options)")," as usual."),(0,o.kt)("p",null,"When using Selenium Grid Hub, you can ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/browsers#skip-browser-downloads"},"skip browser downloads"),"."),(0,o.kt)("p",null,"If your grid requires additional capabilities to be set (for example, you use an external service), you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_CAPABILITIES")," environment variable to provide JSON-serialized capabilities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub SELENIUM_REMOTE_CAPABILITIES=\"{'mygrid:options':{os:'windows',username:'John',password:'secure'}}\" dotnet test\n")),(0,o.kt)("h2",{id:"selenium-3"},"Selenium 3"),(0,o.kt)("p",null,"Internally, Playwright connects to the browser using ",(0,o.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"Chrome DevTools Protocol")," websocket. Selenium 4 hub exposes this capability, while Selenium 3 does not."),(0,o.kt)("p",null,"This means that Selenium 3 is supported in a best-effort manner, where Playwright tries to connect to the grid node directly. Grid nodes must be directly accessible from the machine that runs Playwright."))}c.isMDXComponent=!0}}]);