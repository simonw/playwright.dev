"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5266],{3296:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=t(7462),l=t(3366),n=(t(7294),t(3905)),o=t(6396),s=t(8215),i=["components"],p={id:"browsers",title:"Browsers"},h=void 0,u={unversionedId:"browsers",id:"browsers",isDocsHomePage:!1,title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use Playwright CLI to install these browsers.",source:"@site/docs/browsers.mdx",sourceDirName:".",slug:"/browsers",permalink:"/dotnet/docs/next/browsers",tags:[],version:"current",frontMatter:{id:"browsers",title:"Browsers"},sidebar:"docs",previous:{title:"Authentication",permalink:"/dotnet/docs/next/auth"},next:{title:"Browser Contexts",permalink:"/dotnet/docs/next/browser-contexts"}},d=[{value:"Chromium",id:"chromium",children:[],level:2},{value:"Firefox",id:"firefox",children:[],level:2},{value:"WebKit",id:"webkit",children:[],level:2},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",children:[{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",children:[],level:3}],level:2},{value:"Installing browsers",id:"installing-browsers",children:[{value:"Prerequisites for .NET",id:"prerequisites-for-net",children:[],level:3}],level:2},{value:"Managing browser binaries",id:"managing-browser-binaries",children:[],level:2},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",children:[],level:2},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[],level:2},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[],level:2},{value:"Stale browser removal",id:"stale-browser-removal",children:[],level:2}],c={toc:d};function m(e){var a=e.components,t=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use ",(0,n.kt)("a",{parentName:"p",href:"/dotnet/docs/next/cli"},"Playwright CLI")," to install these browsers."),(0,n.kt)("p",null,"With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update playwright, you might need to re-run the ",(0,n.kt)("inlineCode",{parentName:"p"},"install")," CLI command."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#chromium"},"Chromium")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#firefox"},"Firefox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#webkit"},"WebKit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#installing-browsers"},"Installing browsers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#managing-browser-binaries"},"Managing browser binaries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#download-from-artifact-repository"},"Download from artifact repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#skip-browser-downloads"},"Skip browser downloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#stale-browser-removal"},"Stale browser removal"))),(0,n.kt)("h2",{id:"chromium"},"Chromium"),(0,n.kt)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome N, Playwright already supports Chromium N+1 that will be released in Google Chrome and Microsoft Edge in a few weeks."),(0,n.kt)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",(0,n.kt)("a",{parentName:"p",href:"#google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge")," section below."),(0,n.kt)("h2",{id:"firefox"},"Firefox"),(0,n.kt)("p",null,"Playwright's Firefox version matches the recent ",(0,n.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox Stable")," build."),(0,n.kt)("h2",{id:"webkit"},"WebKit"),(0,n.kt)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues."),(0,n.kt)("h2",{id:"google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"),(0,n.kt)("p",null,"While Playwright can download and use the recent Chromium build, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        var chromium = playwright.Chromium;\n        // Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\n        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Channel = "chrome" });\n    }\n}\n')),(0,n.kt)("h3",{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"},"When to use Google Chrome & Microsoft Edge and when not to?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Defaults")),(0,n.kt)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Regression testing")),(0,n.kt)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",(0,n.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'"msedge"'),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Media codecs")),(0,n.kt)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enterprise policy")),(0,n.kt)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."),(0,n.kt)("h2",{id:"installing-browsers"},"Installing browsers"),(0,n.kt)("h3",{id:"prerequisites-for-net"},"Prerequisites for .NET"),(0,n.kt)("p",null,"To invoke Playwright CLI commands, you need to invoke a PowerShell script:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 --help\n")),(0,n.kt)("p",null,"Playwright can install supported browsers by means of the CLI tool."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Running without arguments will install all browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,n.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Install WebKit\npwsh bin\\Debug\\netX\\playwright.ps1 install webkit\n")),(0,n.kt)("p",null,"See all supported browsers:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pwsh bin\\Debug\\netX\\playwright.ps1 install --help\n")),(0,n.kt)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),(0,n.kt)("p",null,"Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,n.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,n.kt)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers \npwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,n.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\npwsh bin\\Debug\\netX\\playwright.ps1 install\n'))),(0,n.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,n.kt)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers dotnet test\n"))),(0,n.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\ndotnet test\n'))),(0,n.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\ndotnet test\n")))),(0,n.kt)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",(0,n.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,n.kt)("h2",{id:"install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy"),(0,n.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,n.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"HTTPS_PROXY=https://192.0.2.1 pwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,n.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:HTTPS_PROXY="https://192.0.2.1"\npwsh bin\\Debug\\netX\\playwright.ps1 install\n'))),(0,n.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set HTTPS_PROXY=https://192.0.2.1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,n.kt)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),(0,n.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,n.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 pwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,n.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\npwsh bin\\Debug\\netX\\playwright.ps1 install\n'))),(0,n.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,n.kt)("p",null,"It is also possible to use a per-browser download hosts using ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 pwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,n.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\n$env:PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST="203.0.113.3"\npwsh bin\\Debug\\netX\\playwright.ps1 install\n'))),(0,n.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,n.kt)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),(0,n.kt)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),(0,n.kt)("p",null,"This can be done by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),(0,n.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 pwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,n.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,n.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,n.kt)("h2",{id:"stale-browser-removal"},"Stale browser removal"),(0,n.kt)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,n.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,n.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}m.isMDXComponent=!0}}]);