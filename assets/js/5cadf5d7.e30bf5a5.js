"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[72807],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61929:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return N}});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&m(e,a,t[a]);return e};const c={id:"test-cli",title:"Command line"},d=void 0,k={unversionedId:"test-cli",id:"version-1.23/test-cli",title:"Command line",description:"- Examples",source:"@site/versioned_docs/version-1.23/test-cli.mdx",sourceDirName:".",slug:"/test-cli",permalink:"/docs/test-cli",tags:[],version:"1.23",frontMatter:{id:"test-cli",title:"Command line"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/test-auth"},next:{title:"Configuration",permalink:"/docs/test-configuration"}},f={},N=[{value:"Examples",id:"examples",level:2},{value:"Reference",id:"reference",level:2}],h={toc:N};function g(e){var t,a=e,{components:r}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},h),m),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#examples"}),"Examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#reference"}),"Reference"))),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Here are the most common options available in the command line."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run all the tests"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run a single test file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test tests/todo-page.spec.ts\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run a set of test files"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test tests/todo-page/ tests/landing-page/\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run files that have ",(0,n.kt)("inlineCode",{parentName:"p"},"my-spec")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"my-spec-2")," in the file name"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test my-spec my-spec-2\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run files that are in line 42 in my-spec.ts"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test my-spec.ts:42\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run the test with the title"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'npx playwright test -g "add a todo item"\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run tests in headed browsers"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test --headed\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run all the tests against a specific project"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test --project=chromium\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disable ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/test-parallel"}),"parallelization")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test --workers=1\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose a ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/test-reporters"}),"reporter")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=dot\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run in debug mode with ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/inspector"}),"Playwright Inspector")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test --debug\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ask for help"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright test --help\n")))),(0,n.kt)("h2",u({},{id:"reference"}),"Reference"),(0,n.kt)("p",null,"Complete set of Playwright Test options is available in the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/test-advanced"}),"configuration file"),". Following options can be passed to a command line and take a priority over the configuration file:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--headed"),": Run tests in headed browsers. Useful for debugging."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--browser"),": Run test in a specific browser. Available options are  ",(0,n.kt)("inlineCode",{parentName:"li"},'"chromium"'),", ",(0,n.kt)("inlineCode",{parentName:"li"},'"firefox"'),", ",(0,n.kt)("inlineCode",{parentName:"li"},'"webkit"')," or ",(0,n.kt)("inlineCode",{parentName:"li"},'"all"')," to run tests in all three browsers at the same time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--debug"),": Run tests with Playwright Inspector. Shortcut for ",(0,n.kt)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable and ",(0,n.kt)("inlineCode",{parentName:"li"},"--timeout=0 --maxFailures=1 --headed --workers=1")," options."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-c <file>")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"--config <file>"),": Configuration file. If not passed, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"playwright.config.ts")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"playwright.config.js")," in the current directory."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-c <dir>")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"--config <dir>"),": Directory with the tests to run without configuration file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--forbid-only"),": Whether to disallow ",(0,n.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-g <grep>")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"--grep <grep>"),": Only run tests matching this regular expression. For example, this will run ",(0,n.kt)("inlineCode",{parentName:"li"},"'should add to cart'")," when passed ",(0,n.kt)("inlineCode",{parentName:"li"},'-g "add to cart"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--grep-invert <grep>"),": Only run tests ",(0,n.kt)("strong",{parentName:"li"},"not")," matching this regular expression. The opposite of ",(0,n.kt)("inlineCode",{parentName:"li"},"--grep"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--global-timeout <number>"),": Total timeout for the whole test run in milliseconds. By default, there is no global timeout. Learn more about ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/test-timeouts"}),"various timeouts"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--list"),": List all the tests, but do not run them."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--max-failures <N>")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"-x"),": Stop after the first ",(0,n.kt)("inlineCode",{parentName:"li"},"N")," test failures. Passing ",(0,n.kt)("inlineCode",{parentName:"li"},"-x")," stops after the first failure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--output <dir>"),": Directory for artifacts produced by tests, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"test-results"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--project <name>"),": Only run tests from one of the specified ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/test-advanced#projects"}),"projects"),". Defaults to running all projects defined in the configuration file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--quiet"),": Whether to suppress stdout and stderr from the tests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--repeat-each <N>"),": Run each test ",(0,n.kt)("inlineCode",{parentName:"li"},"N")," times, defaults to one."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--reporter <reporter>"),": Choose a reporter: minimalist ",(0,n.kt)("inlineCode",{parentName:"li"},"dot"),", concise ",(0,n.kt)("inlineCode",{parentName:"li"},"line")," or detailed ",(0,n.kt)("inlineCode",{parentName:"li"},"list"),". See ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/test-reporters"}),"reporters")," for more information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--retries <number>"),": The maximum number of ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/test-retries#retries"}),"retries")," for flaky tests, defaults to zero (no retries)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--shard <shard>"),": ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/test-parallel#shard-tests-between-multiple-machines"}),"Shard")," tests and execute only selected shard, specified in the form ",(0,n.kt)("inlineCode",{parentName:"li"},"current/all"),", 1-based, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"3/5"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--timeout <number>"),": Maximum timeout in milliseconds for each test, defaults to 30 seconds. Learn more about ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/test-timeouts"}),"various timeouts"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--update-snapshots")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"-u"),": Whether to update ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/test-snapshots"}),"snapshots")," with actual results instead of comparing them. Use this when snapshot expectations have changed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--workers <number>")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"-j <number>"),": The maximum number of concurrent worker processes that run in ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/test-parallel"}),"parallel"),".")))}g.isMDXComponent=!0}}]);