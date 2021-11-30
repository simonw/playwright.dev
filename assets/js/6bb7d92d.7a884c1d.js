"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[48406],{89694:function(t,e,s){s.r(e),s.d(e,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=s(87462),l=s(63366),i=(s(67294),s(3905)),n=(s(26396),s(58215),["components"]),r={id:"class-testcase",title:"TestCase"},o=void 0,c={unversionedId:"api/class-testcase",id:"api/class-testcase",isDocsHomePage:!1,title:"TestCase",description:"TestCase corresponds to every test(title, testFunction) call in a test file. When a single test(title, testFunction) is running in multiple projects or repeated multiple times, it will have multiple TestCase objects in corresponding projects' suites.",source:"@site/docs/api/class-testcase.mdx",sourceDirName:"api",slug:"/api/class-testcase",permalink:"/docs/next/api/class-testcase",tags:[],version:"current",frontMatter:{id:"class-testcase",title:"TestCase"},sidebar:"api",previous:{title:"Suite",permalink:"/docs/next/api/class-suite"},next:{title:"TestResult",permalink:"/docs/next/api/class-testresult"}},p=[{value:"testCase.ok()",id:"test-case-ok",children:[],level:2},{value:"testCase.outcome()",id:"test-case-outcome",children:[],level:2},{value:"testCase.titlePath()",id:"test-case-title-path",children:[],level:2},{value:"testCase.annotations",id:"test-case-annotations",children:[],level:2},{value:"testCase.expectedStatus",id:"test-case-expected-status",children:[],level:2},{value:"testCase.location",id:"test-case-location",children:[],level:2},{value:"testCase.results",id:"test-case-results",children:[],level:2},{value:"testCase.retries",id:"test-case-retries",children:[],level:2},{value:"testCase.suite",id:"test-case-suite",children:[],level:2},{value:"testCase.timeout",id:"test-case-timeout",children:[],level:2},{value:"testCase.title",id:"test-case-title",children:[],level:2}],u={toc:p};function d(t){var e=t.components,s=(0,l.Z)(t,n);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TestCase")," corresponds to every ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," call in a test file. When a single ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," is running in multiple projects or repeated multiple times, it will have multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"TestCase")," objects in corresponding projects' suites."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-ok"},"testCase.ok()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-outcome"},"testCase.outcome()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-title-path"},"testCase.titlePath()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-annotations"},"testCase.annotations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-expected-status"},"testCase.expectedStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-location"},"testCase.location")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-results"},"testCase.results")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-retries"},"testCase.retries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-suite"},"testCase.suite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-timeout"},"testCase.timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-title"},"testCase.title"))),(0,i.kt)("h2",{id:"test-case-ok"},"testCase.ok()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-ok-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,i.kt)("a",{href:"#test-case-ok-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Whether the test is considered running fine. Non-ok tests fail the test run with non-zero exit code."),(0,i.kt)("h2",{id:"test-case-outcome"},"testCase.outcome()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-outcome-return"})," ","<",'"skipped"|"expected"|"unexpected"|"flaky"',">",(0,i.kt)("a",{href:"#test-case-outcome-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Testing outcome for this test. Note that outcome is not the same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-testresult#test-result-status"},"testResult.status"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Test that is expected to fail and actually fails is ",(0,i.kt)("inlineCode",{parentName:"li"},"'expected'"),"."),(0,i.kt)("li",{parentName:"ul"},"Test that passes on a second retry is ",(0,i.kt)("inlineCode",{parentName:"li"},"'flaky'"),".")),(0,i.kt)("h2",{id:"test-case-title-path"},"testCase.titlePath()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-title-path-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,i.kt)("a",{href:"#test-case-title-path-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns a list of titles from the root down to this test."),(0,i.kt)("h2",{id:"test-case-annotations"},"testCase.annotations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Annotation type, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"'skip'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'fail'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional description.")))),(0,i.kt)("p",null,"The list of annotations applicable to the current test. Includes annotations from the test, annotations from all ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-describe"},"test.describe(title, callback)")," groups the test belongs to and file-level annotations for the test file."),(0,i.kt)("p",null,"Annotations are available during test execution through ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-annotations"},"testInfo.annotations"),"."),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/test-annotations"},"test annotations"),"."),(0,i.kt)("h2",{id:"test-case-expected-status"},"testCase.expectedStatus"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",'"passed"|"failed"|"timedOut"|"skipped"',">")),(0,i.kt)("p",null,"Expected test status."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tests marked as ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-skip-1"},"test.skip(title, testFunction)")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-fixme-1"},"test.fixme(title, testFunction)")," are expected to be ",(0,i.kt)("inlineCode",{parentName:"li"},"'skipped'"),"."),(0,i.kt)("li",{parentName:"ul"},"Tests marked as ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-fail"},"test.fail([condition, description])")," are expected to be ",(0,i.kt)("inlineCode",{parentName:"li"},"'failed'"),"."),(0,i.kt)("li",{parentName:"ul"},"Other tests are expected to be ",(0,i.kt)("inlineCode",{parentName:"li"},"'passed'"),".")),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-testresult#test-result-status"},"testResult.status")," for the actual status."),(0,i.kt)("h2",{id:"test-case-location"},"testCase.location"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-location",title:"Location"},"Location"),">")),(0,i.kt)("p",null,"Location in the source where the test is defined."),(0,i.kt)("h2",{id:"test-case-results"},"testCase.results"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">",">")),(0,i.kt)("p",null,"Results for each run of this test."),(0,i.kt)("h2",{id:"test-case-retries"},"testCase.retries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"The maximum number of retries given to this test in the configuration."),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/test-retries#retries"},"test retries"),"."),(0,i.kt)("h2",{id:"test-case-suite"},"testCase.suite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-suite",title:"Suite"},"Suite"),">")),(0,i.kt)("p",null,"Suite this test case belongs to."),(0,i.kt)("h2",{id:"test-case-timeout"},"testCase.timeout"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"The timeout given to the test. Affected by ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-testconfig#test-config-timeout"},"testConfig.timeout"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-testproject#test-project-timeout"},"testProject.timeout"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-set-timeout"},"test.setTimeout(timeout)"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-slow"},"test.slow([condition, description])")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-set-timeout"},"testInfo.setTimeout(timeout)"),"."),(0,i.kt)("h2",{id:"test-case-title"},"testCase.title"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"Test title as passed to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," call."))}d.isMDXComponent=!0}}]);