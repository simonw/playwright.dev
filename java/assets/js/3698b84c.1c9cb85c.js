"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9045],{96103:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),s=t(26396),o=t(58215),l=["components"],p={id:"intro",title:"Getting started"},c=void 0,d={unversionedId:"intro",id:"version-1.18/intro",isDocsHomePage:!1,title:"Getting started",description:"- Installation",source:"@site/versioned_docs/version-1.18/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/java/docs/1.18/intro",tags:[],version:"1.18",frontMatter:{id:"intro",title:"Getting started"},sidebar:"version-1.18/docs",next:{title:"Inspector",permalink:"/java/docs/1.18/inspector"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"First script",id:"first-script",children:[],level:2},{value:"Record scripts",id:"record-scripts",children:[],level:2},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[],level:3},{value:"macOS",id:"macos",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3}],level:2}],u={toc:m};function g(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-script"},"First script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#record-scripts"},"Record scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.18/release-notes"},"Release notes"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Playwright is distributed as a set of ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/what-is-maven.html"},"Maven")," modules. The easiest way to use it is to add one dependency to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," as described below. If you're not familiar with Maven please refer to its ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"},"documentation"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(s.Z,{defaultValue:"java",values:[{label:"Example.java",value:"java"},{label:"pom.xml",value:"pom"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.chromium().launch();\n      Page page = browser.newPage();\n      page.navigate("http://playwright.dev");\n      System.out.println(page.title());\n    }\n  }\n}\n'))),(0,i.kt)(o.Z,{value:"pom",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>org.example</groupId>\n  <artifactId>examples</artifactId>\n  <version>0.1-SNAPSHOT</version>\n  <name>Playwright Client Examples</name>\n  <properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>com.microsoft.playwright</groupId>\n      <artifactId>playwright</artifactId>\n      <version>1.17.1</version>\n    </dependency>\n  </dependencies>\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.1</version>\n        <configuration>\n          <source>1.8</source>\n          <target>1.8</target>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n')))),(0,i.kt)("p",null,"With the Example.java and pom.xml above, compile and execute your new program as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn compile exec:java -Dexec.mainClass="org.example.Example"\n')),(0,i.kt)("p",null,"Running it downloads the Playwright package and installs browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/browsers#installing-browsers"},"installation parameters"),"."),(0,i.kt)("h2",{id:"first-script"},"First script"),(0,i.kt)("p",null,"In our first script, we will navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\nimport java.nio.file.Paths;\n\npublic class WebKitScreenshot {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.webkit().launch();\n      Page page = browser.newPage();\n      page.navigate("http://whatsmyuseragent.org/");\n      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("example.png")));\n    }\n  }\n}\n')),(0,i.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless=false")," flag while launching the browser. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/debug"},"section"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"playwright.firefox().launch(new BrowserType.LaunchOptions().setHeadless(false).setSlowMo(50));\n")),(0,i.kt)("h2",{id:"record-scripts"},"Record scripts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/cli"},"Command line tools")," can be used to record user interactions and generate Java code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')),(0,i.kt)("h2",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"Playwright requires ",(0,i.kt)("strong",{parentName:"p"},"Java 8")," or newer. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,i.kt)("p",null,"See also in the ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.18/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}g.isMDXComponent=!0}}]);