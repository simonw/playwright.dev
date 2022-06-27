"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[79790],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||s;return a?i.createElement(m,l(l({ref:t},p),{},{components:a})):i.createElement(m,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:r,l[1]=n;for(var u=2;u<s;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58703:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return h}});var i=a(3905),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&p(e,a,t[a]);if(n)for(var a of n(t))u.call(t,a)&&p(e,a,t[a]);return e};const d={id:"class-suite",title:"Suite"},f=void 0,m={unversionedId:"api/class-suite",id:"version-1.23/api/class-suite",title:"Suite",description:"Suite is a group of tests. All tests in Playwright Test form the following hierarchy:",source:"@site/versioned_docs/version-1.23/api/class-suite.mdx",sourceDirName:"api",slug:"/api/class-suite",permalink:"/docs/api/class-suite",tags:[],version:"1.23",frontMatter:{id:"class-suite",title:"Suite"},sidebar:"api",previous:{title:"Reporter",permalink:"/docs/api/class-reporter"},next:{title:"TestCase",permalink:"/docs/api/class-testcase"}},k={},h=[{value:"suite.allTests()",id:"suite-all-tests",level:2},{value:"suite.project()",id:"suite-project",level:2},{value:"suite.titlePath()",id:"suite-title-path",level:2},{value:"suite.location",id:"suite-location",level:2},{value:"suite.parent",id:"suite-parent",level:2},{value:"suite.suites",id:"suite-suites",level:2},{value:"suite.tests",id:"suite-tests",level:2},{value:"suite.title",id:"suite-title",level:2}],N={toc:h};function y(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var i in e)o.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&n)for(var i of n(e))t.indexOf(i)<0&&u.call(e,i)&&(a[i]=e[i]);return a})(a,["components"]);return(0,i.kt)("wrapper",(t=c(c({},N),p),s(t,l({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Suite")," is a group of tests. All tests in Playwright Test form the following hierarchy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Root suite has a child suite for each ",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-testproject",title:"TestProject"}),"TestProject"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Project suite #1. Has a child suite for each test file in the project.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"File suite #1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-testcase",title:"TestCase"}),"TestCase")," #1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-testcase",title:"TestCase"}),"TestCase")," #2"),(0,i.kt)("li",{parentName:"ul"},"Suite corresponding to a ",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-test#test-describe"}),"test.describe(title, callback)")," group",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-testcase",title:"TestCase"}),"TestCase")," #1 in a group"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-testcase",title:"TestCase"}),"TestCase")," #2 in a group"))),(0,i.kt)("li",{parentName:"ul"},"< more test cases ... >"))),(0,i.kt)("li",{parentName:"ul"},"File suite #2"),(0,i.kt)("li",{parentName:"ul"},"< more file suites ... >"))),(0,i.kt)("li",{parentName:"ul"},"Project suite #2"),(0,i.kt)("li",{parentName:"ul"},"< more project suites ... >")))),(0,i.kt)("p",null,"Reporter is given a root suite in the ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/api/class-reporter#reporter-on-begin"}),"reporter.onBegin(config, suite)")," method."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite#suite-all-tests"}),"suite.allTests()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite#suite-project"}),"suite.project()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite#suite-title-path"}),"suite.titlePath()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite#suite-location"}),"suite.location")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite#suite-parent"}),"suite.parent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite#suite-suites"}),"suite.suites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite#suite-tests"}),"suite.tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite#suite-title"}),"suite.title"))),(0,i.kt)("h2",c({},{id:"suite-all-tests"}),"suite.allTests()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"suite-all-tests-return"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-testcase",title:"TestCase"}),"TestCase"),">",">",(0,i.kt)("a",{href:"#suite-all-tests-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns the list of all test cases in this suite and its descendants, as opposite to ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/api/class-suite#suite-tests"}),"suite.tests"),"."),(0,i.kt)("h2",c({},{id:"suite-project"}),"suite.project()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"suite-project-return"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-testproject",title:"TestProject"}),"TestProject"),">",(0,i.kt)("a",{href:"#suite-project-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Configuration of the project this suite belongs to, or ",(0,i.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void")," for the root suite."),(0,i.kt)("h2",c({},{id:"suite-title-path"}),"suite.titlePath()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"suite-title-path-return"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">",(0,i.kt)("a",{href:"#suite-title-path-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns a list of titles from the root down to this suite."),(0,i.kt)("h2",c({},{id:"suite-location"}),"suite.location"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-location",title:"Location"}),"Location"),">")),(0,i.kt)("p",null,"Location in the source where the suite is defined. Missing for root and project suites."),(0,i.kt)("h2",c({},{id:"suite-parent"}),"suite.parent"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite",title:"Suite"}),"Suite"),">")),(0,i.kt)("p",null,"Parent suite, missing for the root suite."),(0,i.kt)("h2",c({},{id:"suite-suites"}),"suite.suites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-suite",title:"Suite"}),"Suite"),">",">")),(0,i.kt)("p",null,"Child suites. See ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/api/class-suite",title:"Suite"}),"Suite")," for the hierarchy of suites."),(0,i.kt)("h2",c({},{id:"suite-tests"}),"suite.tests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-testcase",title:"TestCase"}),"TestCase"),">",">")),(0,i.kt)("p",null,"Test cases in the suite. Note that only test cases defined directly in this suite are in the list. Any test cases defined in nested ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/api/class-test#test-describe"}),"test.describe(title, callback)")," groups are listed in the child ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/api/class-suite#suite-suites"}),"suite.suites"),"."),(0,i.kt)("h2",c({},{id:"suite-title"}),"suite.title"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),(0,i.kt)("p",null,"Suite title."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Empty for root suite."),(0,i.kt)("li",{parentName:"ul"},"Project name for project suite."),(0,i.kt)("li",{parentName:"ul"},"File path for file suite."),(0,i.kt)("li",{parentName:"ul"},"Title passed to ",(0,i.kt)("a",c({parentName:"li"},{href:"/docs/api/class-test#test-describe"}),"test.describe(title, callback)")," for a group suite.")))}y.isMDXComponent=!0}}]);