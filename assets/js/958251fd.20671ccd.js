"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[41542],{5775:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return n},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var a=i(87462),s=i(63366),l=(i(67294),i(3905)),r=(i(26396),i(58215),["components"]),n={id:"class-suite",title:"Suite"},u=void 0,o={unversionedId:"api/class-suite",id:"version-1.19/api/class-suite",isDocsHomePage:!1,title:"Suite",description:"Suite is a group of tests. All tests in Playwright Test form the following hierarchy:",source:"@site/versioned_docs/version-1.19/api/class-suite.mdx",sourceDirName:"api",slug:"/api/class-suite",permalink:"/docs/api/class-suite",tags:[],version:"1.19",frontMatter:{id:"class-suite",title:"Suite"},sidebar:"version-1.19/api",previous:{title:"Reporter",permalink:"/docs/api/class-reporter"},next:{title:"TestCase",permalink:"/docs/api/class-testcase"}},p=[{value:"suite.allTests()",id:"suite-all-tests",children:[],level:2},{value:"suite.project()",id:"suite-project",children:[],level:2},{value:"suite.titlePath()",id:"suite-title-path",children:[],level:2},{value:"suite.location",id:"suite-location",children:[],level:2},{value:"suite.parent",id:"suite-parent",children:[],level:2},{value:"suite.suites",id:"suite-suites",children:[],level:2},{value:"suite.tests",id:"suite-tests",children:[],level:2},{value:"suite.title",id:"suite-title",children:[],level:2}],c={toc:p};function d(e){var t=e.components,i=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Suite")," is a group of tests. All tests in Playwright Test form the following hierarchy:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Root suite has a child suite for each ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject",title:"TestProject"},"TestProject"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Project suite #1. Has a child suite for each test file in the project.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"File suite #1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," #1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," #2"),(0,l.kt)("li",{parentName:"ul"},"Suite corresponding to a ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-test#test-describe"},"test.describe(title, callback)")," group",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," #1 in a group"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," #2 in a group"))),(0,l.kt)("li",{parentName:"ul"},"< more test cases ... >"))),(0,l.kt)("li",{parentName:"ul"},"File suite #2"),(0,l.kt)("li",{parentName:"ul"},"< more file suites ... >"))),(0,l.kt)("li",{parentName:"ul"},"Project suite #2"),(0,l.kt)("li",{parentName:"ul"},"< more project suites ... >")))),(0,l.kt)("p",null,"Reporter is given a root suite in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-reporter#reporter-on-begin"},"reporter.onBegin(config, suite)")," method."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-all-tests"},"suite.allTests()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-project"},"suite.project()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-title-path"},"suite.titlePath()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-location"},"suite.location")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-parent"},"suite.parent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-suites"},"suite.suites")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-tests"},"suite.tests")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-title"},"suite.title"))),(0,l.kt)("h2",{id:"suite-all-tests"},"suite.allTests()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"suite-all-tests-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase"),">",">",(0,l.kt)("a",{href:"#suite-all-tests-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns the list of all test cases in this suite and its descendants, as opposite to ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-suite#suite-tests"},"suite.tests"),"."),(0,l.kt)("h2",{id:"suite-project"},"suite.project()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"suite-project-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject",title:"TestProject"},"TestProject"),">",(0,l.kt)("a",{href:"#suite-project-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Configuration of the project this suite belongs to, or ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void")," for the root suite."),(0,l.kt)("h2",{id:"suite-title-path"},"suite.titlePath()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"suite-title-path-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,l.kt)("a",{href:"#suite-title-path-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns a list of titles from the root down to this suite."),(0,l.kt)("h2",{id:"suite-location"},"suite.location"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-location",title:"Location"},"Location"),">")),(0,l.kt)("p",null,"Location in the source where the suite is defined. Missing for root and project suites."),(0,l.kt)("h2",{id:"suite-parent"},"suite.parent"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite",title:"Suite"},"Suite"),">")),(0,l.kt)("p",null,"Parent suite or ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void")," for the root suite."),(0,l.kt)("h2",{id:"suite-suites"},"suite.suites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-suite",title:"Suite"},"Suite"),">",">")),(0,l.kt)("p",null,"Child suites. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-suite",title:"Suite"},"Suite")," for the hierarchy of suites."),(0,l.kt)("h2",{id:"suite-tests"},"suite.tests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase"),">",">")),(0,l.kt)("p",null,"Test cases in the suite. Note that only test cases defined directly in this suite are in the list. Any test cases defined in nested ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-describe"},"test.describe(title, callback)")," groups are listed in the child ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-suite#suite-suites"},"suite.suites"),"."),(0,l.kt)("h2",{id:"suite-title"},"suite.title"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,l.kt)("p",null,"Suite title."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Empty for root suite."),(0,l.kt)("li",{parentName:"ul"},"Project name for project suite."),(0,l.kt)("li",{parentName:"ul"},"File path for file suite."),(0,l.kt)("li",{parentName:"ul"},"Title passed to ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-test#test-describe"},"test.describe(title, callback)")," for a group suite.")))}d.isMDXComponent=!0}}]);