"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[28619],{6805:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=i(87462),n=i(63366),o=(i(67294),i(3905)),r=(i(26396),i(58215),["components"]),l={id:"class-android",title:"Android"},d=void 0,s={unversionedId:"api/class-android",id:"version-1.15/api/class-android",isDocsHomePage:!1,title:"Android",description:"Playwright has experimental support for Android automation. This includes Chrome for Android and Android WebView.",source:"@site/versioned_docs/version-1.15/api/class-android.mdx",sourceDirName:"api",slug:"/api/class-android",permalink:"/docs/1.15/api/class-android",tags:[],version:"1.15",frontMatter:{id:"class-android",title:"Android"},sidebar:"version-1.15/api",previous:{title:"TestStep",permalink:"/docs/1.15/api/class-teststep"},next:{title:"AndroidDevice",permalink:"/docs/1.15/api/class-androiddevice"}},c=[{value:"android.devices()",id:"android-devices",children:[],level:2},{value:"android.setDefaultTimeout(timeout)",id:"android-set-default-timeout",children:[],level:2}],u={toc:c};function p(e){var t=e.components,i=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright has ",(0,o.kt)("strong",{parentName:"p"},"experimental")," support for Android automation. This includes Chrome for Android and Android WebView."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Requirements")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android device or AVD Emulator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb"},"ADB daemon")," running and authenticated with your device. Typically running ",(0,o.kt)("inlineCode",{parentName:"li"},"adb devices")," is all you need to do."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.android.chrome"},(0,o.kt)("inlineCode",{parentName:"a"},"Chrome 87"))," or newer installed on the device"),(0,o.kt)("li",{parentName:"ul"},'"Enable command line on non-rooted devices" enabled in ',(0,o.kt)("inlineCode",{parentName:"li"},"chrome://flags"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Known limitations")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Raw USB operation is not yet supported, so you need ADB."),(0,o.kt)("li",{parentName:"ul"},'Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.'),(0,o.kt)("li",{parentName:"ul"},"We didn't run all the tests against the device, so not everything works.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"How to run")),(0,o.kt)("p",null,"An example of the Android automation script would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { _android: android } = require('playwright');\n\n(async () => {\n  // Connect to the device.\n  const [device] = await android.devices();\n  console.log(`Model: ${device.model()}`);\n  console.log(`Serial: ${device.serial()}`);\n  // Take screenshot of the whole device.\n  await device.screenshot({ path: 'device.png' });\n\n  {\n    // --------------------- WebView -----------------------\n\n    // Launch an application with WebView.\n    await device.shell('am force-stop org.chromium.webview_shell');\n    await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');\n    // Get the WebView.\n    const webview = await device.webView({ pkg: 'org.chromium.webview_shell' });\n\n    // Fill the input box.\n    await device.fill({ res: 'org.chromium.webview_shell:id/url_field' }, 'github.com/microsoft/playwright');\n    await device.press({ res: 'org.chromium.webview_shell:id/url_field' }, 'Enter');\n\n    // Work with WebView's page as usual.\n    const page = await webview.page();\n    await page.waitForNavigation({ url: /.*microsoft\\/playwright.*/ });\n    console.log(await page.title());\n  }\n\n  {\n    // --------------------- Browser -----------------------\n\n    // Launch Chrome browser.\n    await device.shell('am force-stop com.android.chrome');\n    const context = await device.launchBrowser();\n\n    // Use BrowserContext as usual.\n    const page = await context.newPage();\n    await page.goto('https://webkit.org/');\n    console.log(await page.evaluate(() => window.location.href));\n    await page.screenshot({ path: 'page.png' });\n\n    await context.close();\n  }\n\n  // Close the device.\n  await device.close();\n})();\n")),(0,o.kt)("p",null,"Note that since you don't need Playwright to install web browsers when testing Android, you can omit browser download via setting the following environment variable when installing Playwright:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-android#android-devices"},"android.devices()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-android#android-set-default-timeout"},"android.setDefaultTimeout(timeout)"))),(0,o.kt)("h2",{id:"android-devices"},"android.devices()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-devices-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-androiddevice",title:"AndroidDevice"},"AndroidDevice"),">>",">",(0,o.kt)("a",{href:"#android-devices-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the list of detected Android devices."),(0,o.kt)("h2",{id:"android-set-default-timeout"},"android.setDefaultTimeout(timeout)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-set-default-timeout-option-timeout"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Maximum time in milliseconds",(0,o.kt)("a",{href:"#android-set-default-timeout-option-timeout",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-set-default-timeout-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,o.kt)("a",{href:"#android-set-default-timeout-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"This setting will change the default maximum time for all the methods accepting ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," option."))}p.isMDXComponent=!0}}]);