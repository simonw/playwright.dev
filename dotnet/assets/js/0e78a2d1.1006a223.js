"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2174],{7602:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=(a(6396),a(8215),["components"]),s={id:"pom",title:"Page Object Models"},c=void 0,p={unversionedId:"pom",id:"pom",isDocsHomePage:!1,title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.",source:"@site/docs/pom.mdx",sourceDirName:".",slug:"/pom",permalink:"/dotnet/docs/next/pom",tags:[],version:"current",frontMatter:{id:"pom",title:"Page Object Models"},sidebar:"docs",previous:{title:"Pages",permalink:"/dotnet/docs/next/pages"},next:{title:"Screenshots",permalink:"/dotnet/docs/next/screenshots"}},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Implementation",id:"implementation",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],u={toc:l};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#implementation"},"Implementation"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models."),(0,o.kt)("p",null,"Page objects ",(0,o.kt)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits your application."),(0,o.kt)("p",null,"Page objects ",(0,o.kt)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place and create reusable code to avoid repetition."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Page object models wrap over a Playwright ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing Microsoft.Playwright;\n\nnamespace BigEcommerceApp.Tests.Models\n{\n  public class SearchPage\n  {\n    private readonly IPage _page;\n    private readonly ILocator _searchTermInput;\n\n    public SearchPage(IPage page)\n    {\n      _page = page;\n      _searchTermInput = page.Locator("[aria-label=\'Enter your search term\']");\n    }\n\n    public async Task Goto()\n    {\n      await _page.GotoAsync("https://bing.com");\n    }\n\n    public async Task Search(string text)\n    {\n      await _searchTermInput.FillAsync(text);\n      await _searchTermInput.PressAsync("Enter");\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Page objects can then be used inside a test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using BigEcommerceApp.Tests.Models;\n\n// in the test\nvar page = new SearchPage(await browser.NewPageAsync());\nawait page.Goto();\nawait page.Search("search query");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page"))))}m.isMDXComponent=!0}}]);