"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7395],{64201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=(n(26396),n(58215),["components"]),o={id:"test-runners",title:"Test Runners"},l=void 0,c={unversionedId:"test-runners",id:"version-1.17/test-runners",isDocsHomePage:!1,title:"Test Runners",description:"With a few lines of code, you can hook up Playwright to your favorite Java test runner.",source:"@site/versioned_docs/version-1.17/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/java/docs/1.17/test-runners",tags:[],version:"1.17",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"version-1.17/docs",previous:{title:"Release notes",permalink:"/java/docs/1.17/release-notes"},next:{title:"Auto-waiting",permalink:"/java/docs/1.17/actionability"}},u=[{value:"JUnit",id:"junit",children:[{value:"Running Tests in Parallel",id:"running-tests-in-parallel",children:[],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"With a few lines of code, you can hook up Playwright to your favorite Java test runner."),(0,s.kt)("p",null,"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#junit"},"JUnit"))),(0,s.kt)("h2",{id:"junit"},"JUnit"),(0,s.kt)("p",null,"In JUnit you can initialize ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-playwright",title:"Playwright"},"Playwright")," and ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-browser",title:"Browser"},"Browser")," in ",(0,s.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/BeforeAll.html"},"@BeforeAll")," method and destroy them in ",(0,s.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/AfterAll.html"},"@AfterAll"),". In the example below all three test methods use the same ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-browser",title:"Browser"},"Browser"),". Each test uses its own ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," and ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-page",title:"Page"},"Page"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.Browser;\nimport com.microsoft.playwright.BrowserContext;\nimport com.microsoft.playwright.Page;\nimport com.microsoft.playwright.Playwright;\nimport org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\npublic class TestExample {\n  // Shared between all tests in this class.\n  static Playwright playwright;\n  static Browser browser;\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeAll\n  static void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  static void closeBrowser() {\n    playwright.close();\n  }\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.click("button");\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.check("input");\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.click("input[name=\\"search\\"]");\n    page.fill("input[name=\\"search\\"]", "playwright");\n    page.press("input[name=\\"search\\"]", "Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n')),(0,s.kt)("h3",{id:"running-tests-in-parallel"},"Running Tests in Parallel"),(0,s.kt)("p",null,"By default JUnit will run all tests sequentially on a single thread. Since JUnit 5.3 you can change this behavior to run tests in parallel to speed up execution (see ",(0,s.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/snapshot/user-guide/index.html#writing-tests-parallel-execution"},"this page"),"). Since it is not safe to use same Playwright objects from multiple threads without extra synchronization we recommend you create Playwright instance per thread and use it on that thread exclusively. Here is an example how to run multiple test classes in parallel."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/TestInstance.html"},(0,s.kt)("inlineCode",{parentName:"a"},"@TestInstance(TestInstance.Lifecycle.PER_CLASS)"))," annotation to make JUnit create one instance of a class for all test methods within that class (by default each JUnit will create a new instance of the class for each test method). Store ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-playwright",title:"Playwright"},"Playwright")," and ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/1.17/api/class-browser",title:"Browser"},"Browser")," objects in instance fields. They will be shared between tests. Each instace of the class will use its own copy of Playwright."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'// Subclasses will inherit PER_CLASS behavior.\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\nclass TestFixtures {\n  // Shared between all tests in the class.\n  Playwright playwright;\n  Browser browser;\n\n  @BeforeAll\n  void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  void closeBrowser() {\n    playwright.close();\n  }\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n}\n\nclass Test1 extends TestFixtures {\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.click("button");\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.check("input");\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.click("input[name=\\"search\\"]");\n    page.fill("input[name=\\"search\\"]", "playwright");\n    page.press("input[name=\\"search\\"]", "Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n\nclass Test2 extends TestFixtures {\n  @Test\n  void shouldReturnInnerHTML() {\n    page.setContent("<div>hello</div>");\n    assertEquals("hello", page.innerHTML("css=div"));\n  }\n\n  @Test\n  void shouldClickButton() {\n    Page popup = page.waitForPopup(() -> {\n      page.evaluate("window.open(\'about:blank\');");\n    });\n    assertEquals("about:blank", popup.url());\n  }\n}\n')),(0,s.kt)("p",null,"Configure JUnit to run tests in each class sequentially and run multiple classes on parallel threads (with max number of thread equal to 1/2 of the number of CPU cores):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"junit.jupiter.execution.parallel.enabled = true\njunit.jupiter.execution.parallel.mode.default = same_thread\njunit.jupiter.execution.parallel.mode.classes.default = concurrent\njunit.jupiter.execution.parallel.config.strategy=dynamic\njunit.jupiter.execution.parallel.config.dynamic.factor=0.5\n")))}h.isMDXComponent=!0}}]);