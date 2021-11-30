"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4018],{63933:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),l=t(26396),o=t(58215),p=["components"],c={id:"pom",title:"Page Object Models"},i=void 0,u={unversionedId:"pom",id:"version-1.14/pom",isDocsHomePage:!1,title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.",source:"@site/versioned_docs/version-1.14/pom.mdx",sourceDirName:".",slug:"/pom",permalink:"/python/docs/1.14/pom",tags:[],version:"1.14",frontMatter:{id:"pom",title:"Page Object Models"},sidebar:"version-1.14/docs",previous:{title:"Network",permalink:"/python/docs/1.14/network"},next:{title:"Screenshots",permalink:"/python/docs/1.14/screenshots"}},m=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Implementation",id:"implementation",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],g={toc:m};function d(e){var a=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#implementation"},"Implementation"))),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models."),(0,s.kt)("p",null,"Page objects ",(0,s.kt)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits your application."),(0,s.kt)("p",null,"Page objects ",(0,s.kt)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place and create reusable code to avoid repetition."),(0,s.kt)("h2",{id:"implementation"},"Implementation"),(0,s.kt)("p",null,"Page object models wrap over a Playwright ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-page",title:"Page"},"Page"),"."),(0,s.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# models/search.py\nclass SearchPage:\n    def __init__(self, page):\n        self.page = page\n\n    def navigate(self):\n        self.page.goto("https://bing.com")\n\n    def search(self, text):\n        self.page.fill(\'[aria-label="Enter your search term"]\', text)\n        self.page.press(\'[aria-label="Enter your search term"]\', "Enter")\n'))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# models/search.py\nclass SearchPage:\n    def __init__(self, page):\n        self.page = page\n\n    async def navigate(self):\n        await self.page.goto("https://bing.com")\n\n    async def search(self, text):\n        await self.page.fill(\'[aria-label="Enter your search term"]\', text)\n        await self.page.press(\'[aria-label="Enter your search term"]\', "Enter")\n')))),(0,s.kt)("p",null,"Page objects can then be used inside a test."),(0,s.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# test_search.py\nfrom models.search import SearchPage\n\n# in the test\npage = browser.new_page()\nsearch_page = SearchPage(page)\nsearch_page.navigate()\nsearch_page.search("search query")\n'))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'# test_search.py\nfrom models.search import SearchPage\n\n# in the test\npage = await browser.new_page()\nsearch_page = SearchPage(page)\nawait search_page.navigate()\nawait search_page.search("search query")\n')))),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page",title:"Page"},"Page"))))}d.isMDXComponent=!0}}]);