"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[75],{6117:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=(t(6396),t(8215),["components"]),c={id:"pom",title:"Page Object Models"},s=void 0,l={unversionedId:"pom",id:"version-1.19/pom",isDocsHomePage:!1,title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.",source:"@site/versioned_docs/version-1.19/pom.mdx",sourceDirName:".",slug:"/pom",permalink:"/java/docs/pom",tags:[],version:"1.19",frontMatter:{id:"pom",title:"Page Object Models"},sidebar:"version-1.19/docs",previous:{title:"Pages",permalink:"/java/docs/pages"},next:{title:"Screenshots",permalink:"/java/docs/screenshots"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Implementation",id:"implementation",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],u={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#implementation"},"Implementation"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models."),(0,o.kt)("p",null,"Page objects ",(0,o.kt)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits your application."),(0,o.kt)("p",null,"Page objects ",(0,o.kt)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place and create reusable code to avoid repetition."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Page object models wrap over a Playwright ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-page",title:"Page"},"Page"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// models/SearchPage.java\npackage models;\n\nimport com.microsoft.playwright;\n\npublic class SearchPage {\n  private final Page page;\n\n  public SearchPage(Page page) {\n    this.page = page;\n  }\n\n  public void navigate() {\n    page.navigate("https://bing.com");\n  }\n\n  public void search(String text) {\n    page.fill("[aria-label=\'Enter your search term\']", text);\n    page.press("[aria-label=\'Enter your search term\']", "Enter");\n  }\n}\n')),(0,o.kt)("p",null,"Page objects can then be used inside a test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import models.SearchPage;\nimport com.microsoft.playwright.*;\n...\n\n// In the test\nPage page = browser.newPage();\nSearchPage searchPage = new SearchPage(page);\nsearchPage.navigate();\nsearchPage.search("search query");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-page",title:"Page"},"Page"))))}m.isMDXComponent=!0}}]);