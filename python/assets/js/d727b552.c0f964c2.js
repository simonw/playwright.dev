"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8992],{5489:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=(n(6396),n(8215),["components"]),o={id:"test-runners",title:"Pytest plugin"},l=void 0,p={unversionedId:"test-runners",id:"version-1.19/test-runners",isDocsHomePage:!1,title:"Pytest plugin",description:"Write end-to-end tests for your web apps with Pytest.",source:"@site/versioned_docs/version-1.19/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/python/docs/test-runners",tags:[],version:"1.19",frontMatter:{id:"test-runners",title:"Pytest plugin"},sidebar:"version-1.19/docs",previous:{title:"Release notes",permalink:"/python/docs/release-notes"},next:{title:"Auto-waiting",permalink:"/python/docs/actionability"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"CLI arguments",id:"cli-arguments",children:[],level:2},{value:"Fixtures",id:"fixtures",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Configure Mypy typings for auto-completion",id:"configure-mypy-typings-for-auto-completion",children:[],level:3},{value:"Configure slow mo",id:"configure-slow-mo",children:[],level:3},{value:"Skip test by browser",id:"skip-test-by-browser",children:[],level:3},{value:"Run on a specific browser",id:"run-on-a-specific-browser",children:[],level:3},{value:"Run with a custom browser channel like Google Chrome or Microsoft Edge",id:"run-with-a-custom-browser-channel-like-google-chrome-or-microsoft-edge",children:[],level:3},{value:"Configure base-url",id:"configure-base-url",children:[],level:3},{value:"Ignore HTTPS errors",id:"ignore-https-errors",children:[],level:3},{value:"Use custom viewport size",id:"use-custom-viewport-size",children:[],level:3},{value:"Device emulation",id:"device-emulation",children:[],level:3},{value:"Persistent context",id:"persistent-context",children:[],level:3},{value:"Using with <code>unittest.TestCase</code>",id:"using-with-unittesttestcase",children:[],level:3}],level:2},{value:"Debugging",id:"debugging",children:[{value:"Use with pdb",id:"use-with-pdb",children:[],level:3}],level:2},{value:"Deploy to CI",id:"deploy-to-ci",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Write end-to-end tests for your web apps with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/stable/"},"Pytest"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cli-arguments"},"CLI arguments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fixtures"},"Fixtures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#debugging"},"Debugging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#deploy-to-ci"},"Deploy to CI"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pytest-playwright\n")),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," fixture to write a basic test. See ",(0,i.kt)("a",{parentName:"p",href:"#examples"},"more examples"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# test_my_application.py\ndef test_example_is_working(page):\n    page.goto(\"https://example.com\")\n    assert page.inner_text('h1') == 'Example Domain'\n    page.click(\"text=More information\")\n")),(0,i.kt)("p",null,"To run your tests, use pytest CLI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Run tests (Chromium and headless by default)\npytest\n\n# Run tests in headed mode\npytest --headed\n\n# Run tests in a different browser (chromium, firefox, webkit)\npytest --browser firefox\n\n# Run tests in multiple browsers\npytest --browser chromium --browser webkit\n")),(0,i.kt)("p",null,"If you want to add the CLI arguments automatically without specifying them, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/stable/reference.html#ini-options-ref"},"pytest.ini")," file:"),(0,i.kt)("h2",{id:"cli-arguments"},"CLI arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--headed"),": Run tests in headed mode (default: headless)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--browser"),": Run tests in a different browser ",(0,i.kt)("inlineCode",{parentName:"li"},"chromium"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"firefox"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"webkit"),". It can be specified multiple times (default: all browsers)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--browser-channel")," ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/browsers"},"Browser channel")," to be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--slowmo")," Run tests with slow mo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--device")," ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/emulation"},"Device")," to be emulated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--output")," Directory for artifacts produced by tests (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"test-results"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--tracing")," Whether to record a ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/trace-viewer"},"trace")," for each test. ",(0,i.kt)("inlineCode",{parentName:"li"},"on"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"retain-on-failure")," (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--video")," Whether to record video for each test. ",(0,i.kt)("inlineCode",{parentName:"li"},"on"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"retain-on-failure")," (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--screenshot")," Whether to automatically capture a screenshot after each test. ",(0,i.kt)("inlineCode",{parentName:"li"},"on"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"only-on-failure")," (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),").")),(0,i.kt)("h2",{id:"fixtures"},"Fixtures"),(0,i.kt)("p",null,"This plugin configures Playwright-specific ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/latest/fixture.html"},"fixtures for pytest"),". To use these fixtures, use the fixture name as an argument to the test function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def test_my_app_is_working(fixture_name):\n    # Test using fixture_name\n    # ...\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Function scope"),": These fixtures are created when requested in a test function and destroyed when the test ends."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context"),": New ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/browser-contexts"},"browser context")," for a test."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"page"),": New ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/pages"},"browser page")," for a test.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Session scope"),": These fixtures are created when requested in a test function and destroyed when all tests end."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"playwright"),": ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-playwright"},"Playwright")," instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"browser_type"),": ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-browsertype"},"BrowserType")," instance of the current browser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"browser"),": ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-browser"},"Browser")," instance launched by Playwright."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"browser_name"),": Browser name as string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"browser_channel"),": Browser channel as string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_chromium"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"is_webkit"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"is_firefox"),": Booleans for the respective browser types.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Customizing fixture options"),": For ",(0,i.kt)("inlineCode",{parentName:"p"},"browser")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," fixtures, use the the following fixtures to define custom launch options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"browser_type_launch_args"),": Override launch arguments for ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),". It should return a Dict."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"browser_context_args"),": Override the options for ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"),". It should return a Dict.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"configure-mypy-typings-for-auto-completion"},"Configure Mypy typings for auto-completion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# test_my_application.py\nfrom playwright.sync_api import Page\n\ndef test_visit_admin_dashboard(page: Page):\n    page.goto("/admin")\n    # ...\n')),(0,i.kt)("h3",{id:"configure-slow-mo"},"Configure slow mo"),(0,i.kt)("p",null,"Run tests with slow mo with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--slowmo")," argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pytest --slowmo 100\n")),(0,i.kt)("h3",{id:"skip-test-by-browser"},"Skip test by browser"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# test_my_application.py\nimport pytest\n\n@pytest.mark.skip_browser("firefox")\ndef test_visit_example(page):\n    page.goto("https://example.com")\n    # ...\n')),(0,i.kt)("h3",{id:"run-on-a-specific-browser"},"Run on a specific browser"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nimport pytest\n\n@pytest.mark.only_browser("chromium")\ndef test_visit_example(page):\n    page.goto("https://example.com")\n    # ...\n')),(0,i.kt)("h3",{id:"run-with-a-custom-browser-channel-like-google-chrome-or-microsoft-edge"},"Run with a custom browser channel like Google Chrome or Microsoft Edge"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pytest --browser-channel chrome\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# test_my_application.py\ndef test_example(page):\n    page.goto("https://example.com")\n')),(0,i.kt)("h3",{id:"configure-base-url"},"Configure base-url"),(0,i.kt)("p",null,"Start Pytest with the ",(0,i.kt)("inlineCode",{parentName:"p"},"base-url")," argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pytest --base-url http://localhost:8080\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# test_my_application.py\ndef test_visit_example(page):\n    page.goto("/admin")\n    # -> Will result in http://localhost:8080/admin\n')),(0,i.kt)("h3",{id:"ignore-https-errors"},"Ignore HTTPS errors"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nimport pytest\n\n@pytest.fixture(scope="session")\ndef browser_context_args(browser_context_args):\n    return {\n        **browser_context_args,\n        "ignore_https_errors": True\n    }\n')),(0,i.kt)("h3",{id:"use-custom-viewport-size"},"Use custom viewport size"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nimport pytest\n\n@pytest.fixture(scope="session")\ndef browser_context_args(browser_context_args):\n    return {\n        **browser_context_args,\n        "viewport": {\n            "width": 1920,\n            "height": 1080,\n        }\n    }\n')),(0,i.kt)("h3",{id:"device-emulation"},"Device emulation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# conftest.py\nimport pytest\n\n@pytest.fixture(scope=\"session\")\ndef browser_context_args(browser_context_args, playwright):\n    iphone_11 = playwright.devices['iPhone 11 Pro']\n    return {\n        **browser_context_args,\n        **iphone_11,\n    }\n")),(0,i.kt)("p",null,"Or via the CLI ",(0,i.kt)("inlineCode",{parentName:"p"},'--device="iPhone 11 Pro"')),(0,i.kt)("h3",{id:"persistent-context"},"Persistent context"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nimport pytest\nfrom playwright.sync_api import BrowserType\nfrom typing import Dict\n\n@pytest.fixture(scope="session")\ndef context(\n    browser_type: BrowserType,\n    browser_type_launch_args: Dict,\n    browser_context_args: Dict\n):\n    context = browser_type.launch_persistent_context("./foobar", **{\n        **browser_type_launch_args,\n        **browser_context_args,\n        "locale": "de-DE",\n    })\n    yield context\n    context.close()\n')),(0,i.kt)("p",null,"When using that all pages inside your test are created from the persistent context."),(0,i.kt)("h3",{id:"using-with-unittesttestcase"},"Using with ",(0,i.kt)("inlineCode",{parentName:"h3"},"unittest.TestCase")),(0,i.kt)("p",null,"See the following example for using it with ",(0,i.kt)("inlineCode",{parentName:"p"},"unittest.TestCase"),". This has a limitation, that only a single browser can be specified and no matrix of multiple browsers gets generated when specifying multiple."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import pytest\nimport unittest\n\nfrom playwright.sync_api import Page\n\n\nclass MyTest(unittest.TestCase):\n    @pytest.fixture(autouse=True)\n    def setup(self, page: Page):\n        self.page = page\n\n    def test_foobar(self):\n        self.page.goto("https://microsoft.com")\n        self.page.click("#foobar")\n        assert self.page.evaluate("1 + 1") == 2\n')),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("h3",{id:"use-with-pdb"},"Use with pdb"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"breakpoint()")," statement in your test code to pause execution and get a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/pdb.html"},"pdb")," REPL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'def test_bing_is_working(page):\n    page.goto("https://bing.com")\n    breakpoint()\n    # ...\n')),(0,i.kt)("h2",{id:"deploy-to-ci"},"Deploy to CI"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/ci"},"guides for CI providers")," to deploy your tests to CI/CD."))}m.isMDXComponent=!0}}]);