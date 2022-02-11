"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5140],{25638:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=(t(26396),t(58215),["components"]),s={id:"selenium-grid",title:"Selenium Grid"},l=void 0,u={unversionedId:"selenium-grid",id:"version-1.19/selenium-grid",isDocsHomePage:!1,title:"Selenium Grid",description:"Playwright can connect to Selenium Grid Hub that runs Selenium 4 to launch Chrome browser, instead of running browser on the local machine. To enable this mode, set SELENIUMREMOTEURL environment variable pointing to your Selenium Grid Hub.",source:"@site/versioned_docs/version-1.19/selenium-grid.mdx",sourceDirName:".",slug:"/selenium-grid",permalink:"/java/docs/selenium-grid",tags:[],version:"1.19",frontMatter:{id:"selenium-grid",title:"Selenium Grid"},sidebar:"version-1.19/docs",previous:{title:"Continuous Integration",permalink:"/java/docs/ci"},next:{title:"Supported languages",permalink:"/java/docs/languages"}},d=[],c={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can connect to ",(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/"},"Selenium Grid Hub")," that runs ",(0,o.kt)("strong",{parentName:"p"},"Selenium 4")," to launch ",(0,o.kt)("strong",{parentName:"p"},"Chrome")," browser, instead of running browser on the local machine. To enable this mode, set ",(0,o.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_URL")," environment variable pointing to your Selenium Grid Hub."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub mvn test\n")),(0,o.kt)("p",null,"You don't have to change your code, just use ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])")," as usual."),(0,o.kt)("p",null,"When using Selenium Grid Hub, you can ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/browsers#skip-browser-downloads"},"skip browser downloads"),"."),(0,o.kt)("p",null,"If your grid requires additional capabilities to be set (for example, you use an external service), you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_CAPABILITIES")," environment variable to provide JSON-serialized capabilities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub SELENIUM_REMOTE_CAPABILITIES=\"{'mygrid:options':{os:'windows',username:'John',password:'secure'}}\" mvn test\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Internally, Playwright connects to the browser using ",(0,o.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"Chrome DevTools Protocol")," websocket. Selenium 4 hub exposes this capability.  Selenium 3 is supported in a best-effort manner. Grid nodes must be directly accessible from the machine that runs Playwright."))))}m.isMDXComponent=!0}}]);