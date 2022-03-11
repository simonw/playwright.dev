"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9368],{39140:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var o=t(87462),s=t(63366),a=(t(67294),t(3905)),i=(t(26396),t(58215),["components"]),r={id:"chrome-extensions",title:"Chrome Extensions"},c=void 0,m={unversionedId:"chrome-extensions",id:"version-1.19/chrome-extensions",isDocsHomePage:!1,title:"Chrome Extensions",description:"Extensions only work in Chrome / Chromium in non-headless mode.",source:"@site/versioned_docs/version-1.19/chrome-extensions.mdx",sourceDirName:".",slug:"/chrome-extensions",permalink:"/docs/chrome-extensions",tags:[],version:"1.19",frontMatter:{id:"chrome-extensions",title:"Chrome Extensions"},sidebar:"version-1.19/docs",previous:{title:"Browser Contexts",permalink:"/docs/browser-contexts"},next:{title:"Command line tools",permalink:"/docs/cli"}},d=[],l={toc:d};function p(e){var n=e.components,t=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Extensions only work in Chrome / Chromium in non-headless mode."))),(0,a.kt)("p",null,"The following is code for getting a handle to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/extensions/background_pages"},"background page")," of an extension whose source is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n(async () => {\n  const pathToExtension = require('path').join(__dirname, 'my-extension');\n  const userDataDir = '/tmp/test-user-data-dir';\n  const browserContext = await chromium.launchPersistentContext(userDataDir,{\n    headless: false,\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`\n    ]\n  });\n  const backgroundPage = browserContext.backgroundPages()[0];\n  // Test the background page as you would any other page.\n  await browserContext.close();\n})();\n")))}p.isMDXComponent=!0}}]);