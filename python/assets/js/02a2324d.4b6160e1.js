"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6323],{9773:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=s(7462),a=s(3366),r=(s(7294),s(3905)),i=(s(6396),s(8215),["components"]),o={id:"api-testing",title:"API testing"},u=void 0,p={unversionedId:"api-testing",id:"version-1.19/api-testing",isDocsHomePage:!1,title:"API testing",description:"Playwright can be used to get access to the REST API of your application.",source:"@site/versioned_docs/version-1.19/api-testing.mdx",sourceDirName:".",slug:"/api-testing",permalink:"/python/docs/api-testing",tags:[],version:"1.19",frontMatter:{id:"api-testing",title:"API testing"},sidebar:"version-1.19/docs",previous:{title:"Auto-waiting",permalink:"/python/docs/actionability"},next:{title:"Assertions",permalink:"/python/docs/assertions"}},l=[{value:"Writing API Test",id:"writing-api-test",children:[{value:"Configure",id:"configure",children:[],level:3},{value:"Write tests",id:"write-tests",children:[],level:3},{value:"Setup and teardown",id:"setup-and-teardown",children:[],level:3},{value:"Complete test example",id:"complete-test-example",children:[],level:3}],level:2},{value:"Prepare server state via API calls",id:"prepare-server-state-via-api-calls",children:[],level:2},{value:"Check the server state after running user actions",id:"check-the-server-state-after-running-user-actions",children:[],level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[],level:2}],c={toc:l};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright can be used to get access to the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")," API of your application."),(0,r.kt)("p",null,"Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few examples where it may come in handy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test your server API."),(0,r.kt)("li",{parentName:"ul"},"Prepare server side state before visiting the web application in a test."),(0,r.kt)("li",{parentName:"ul"},"Validate server side post-conditions after running some actions in the browser.")),(0,r.kt)("p",null,"All of that could be achieved via ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," methods."),(0,r.kt)("p",null,"The following examples rely on the ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/test-runners"},(0,r.kt)("inlineCode",{parentName:"a"},"pytest-playwright"))," package which add Playwright fixtures to the Pytest test-runner."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#writing-api-test"},"Writing API Test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prepare-server-state-via-api-calls"},"Prepare server state via API calls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#check-the-server-state-after-running-user-actions"},"Check the server state after running user actions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reuse-authentication-state"},"Reuse authentication state"))),(0,r.kt)("h2",{id:"writing-api-test"},"Writing API Test"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," can send all kinds of HTTP(S) requests over network."),(0,r.kt)("p",null,"The following example demonstrates how to use Playwright to test issues creation via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest"},"GitHub API"),". The test suite will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new repository before running tests."),(0,r.kt)("li",{parentName:"ul"},"Create a few issues and validate server state."),(0,r.kt)("li",{parentName:"ul"},"Delete the repository after running tests.")),(0,r.kt)("h3",{id:"configure"},"Configure"),(0,r.kt)("p",null,"GitHub API requires authorization, so we'll configure the token once for all tests. While at it, we'll also set the ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," to simplify the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import os\nfrom typing import Generator\n\nimport pytest\nfrom playwright.sync_api import Playwright, APIRequestContext\n\nGITHUB_API_TOKEN = os.getenv("GITHUB_API_TOKEN")\nassert GITHUB_API_TOKEN, "GITHUB_API_TOKEN is not set"\n\n\n@pytest.fixture(scope="session")\ndef api_request_context(\n    playwright: Playwright,\n) -> Generator[APIRequestContext, None, None]:\n    headers = {\n        # We set this header per GitHub guidelines.\n        "Accept": "application/vnd.github.v3+json",\n        # Add authorization token to all requests.\n        # Assuming personal access token available in the environment.\n        "Authorization": f"token {GITHUB_API_TOKEN}",\n    }\n    request_context = playwright.request.new_context(\n        base_url="https://api.github.com", extra_http_headers=headers\n    )\n    yield request_context\n    request_context.dispose()\n\n')),(0,r.kt)("h3",{id:"write-tests"},"Write tests"),(0,r.kt)("p",null,"Now that we initialized request object we can add a few tests that will create new issues in the repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import os\nfrom typing import Generator\n\nimport pytest\nfrom playwright.sync_api import Playwright, APIRequestContext\n\nGITHUB_API_TOKEN = os.getenv("GITHUB_API_TOKEN")\nassert GITHUB_API_TOKEN, "GITHUB_API_TOKEN is not set"\n\nGITHUB_USER = os.getenv("GITHUB_USER")\nassert GITHUB_USER, "GITHUB_USER is not set"\n\nGITHUB_REPO = "test"\n\n# ...\n\ndef test_should_create_bug_report(api_request_context: APIRequestContext) -> None:\n    data = {\n        "title": "[Bug] report 1",\n        "body": "Bug description",\n    }\n    new_issue = api_request_context.post(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data)\n    assert new_issue.ok\n\n    issues = api_request_context.get(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    assert issues.ok\n    issues_response = issues.json()\n    issue = list(filter(lambda issue: issue["title"] == "[Bug] report 1", issues_response))[0]\n    assert issue\n    assert issue["body"] == "Bug description"\n\ndef test_should_create_feature_request(api_request_context: APIRequestContext) -> None:\n    data = {\n        "title": "[Feature] request 1",\n        "body": "Feature description",\n    }\n    new_issue = api_request_context.post(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data)\n    assert new_issue.ok\n\n    issues = api_request_context.get(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    assert issues.ok\n    issues_response = issues.json()\n    issue = list(filter(lambda issue: issue["title"] == "[Feature] request 1", issues_response))[0]\n    assert issue\n    assert issue["body"] == "Feature description"\n')),(0,r.kt)("h3",{id:"setup-and-teardown"},"Setup and teardown"),(0,r.kt)("p",null,"These tests assume that repository exists. You probably want to create a new one before running tests and delete it afterwards. Use a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/6.2.x/fixture.html#fixture-scopes"},"session fixture")," for that. The part before ",(0,r.kt)("inlineCode",{parentName:"p"},"yield")," is the before all and after is the after all."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# ...\n@pytest.fixture(scope="session", autouse=True)\ndef create_test_repository(\n    api_request_context: APIRequestContext,\n) -> Generator[None, None, None]:\n    # Before all\n    new_repo = api_request_context.post("/user/repos", data={"name": GITHUB_REPO})\n    assert new_repo.ok\n    yield\n    # After all\n    deleted_repo = api_request_context.delete(f"/repos/{GITHUB_USER}/{GITHUB_REPO}")\n    assert deleted_repo.ok\n')),(0,r.kt)("h3",{id:"complete-test-example"},"Complete test example"),(0,r.kt)("p",null,"Here is the complete example of an API test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from enum import auto\nimport os\nfrom typing import Generator\n\nimport pytest\nfrom playwright.sync_api import Playwright, Page, APIRequestContext, expect\n\nGITHUB_API_TOKEN = os.getenv("GITHUB_API_TOKEN")\nassert GITHUB_API_TOKEN, "GITHUB_API_TOKEN is not set"\n\nGITHUB_USER = os.getenv("GITHUB_USER")\nassert GITHUB_USER, "GITHUB_USER is not set"\n\nGITHUB_REPO = "test"\n\n\n@pytest.fixture(scope="session")\ndef api_request_context(\n    playwright: Playwright,\n) -> Generator[APIRequestContext, None, None]:\n    headers = {\n        # We set this header per GitHub guidelines.\n        "Accept": "application/vnd.github.v3+json",\n        # Add authorization token to all requests.\n        # Assuming personal access token available in the environment.\n        "Authorization": f"token {GITHUB_API_TOKEN}",\n    }\n    request_context = playwright.request.new_context(\n        base_url="https://api.github.com", extra_http_headers=headers\n    )\n    yield request_context\n    request_context.dispose()\n\n\n@pytest.fixture(scope="session", autouse=True)\ndef create_test_repository(\n    api_request_context: APIRequestContext,\n) -> Generator[None, None, None]:\n    # Before all\n    new_repo = api_request_context.post("/user/repos", data={"name": GITHUB_REPO})\n    assert new_repo.ok\n    yield\n    # After all\n    deleted_repo = api_request_context.delete(f"/repos/{GITHUB_USER}/{GITHUB_REPO}")\n    assert deleted_repo.ok\n\n\ndef test_should_create_bug_report(api_request_context: APIRequestContext) -> None:\n    data = {\n        "title": "[Bug] report 1",\n        "body": "Bug description",\n    }\n    new_issue = api_request_context.post(\n        f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data\n    )\n    assert new_issue.ok\n\n    issues = api_request_context.get(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    assert issues.ok\n    issues_response = issues.json()\n    issue = list(\n        filter(lambda issue: issue["title"] == "[Bug] report 1", issues_response)\n    )[0]\n    assert issue\n    assert issue["body"] == "Bug description"\n\n\ndef test_should_create_feature_request(api_request_context: APIRequestContext) -> None:\n    data = {\n        "title": "[Feature] request 1",\n        "body": "Feature description",\n    }\n    new_issue = api_request_context.post(\n        f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data\n    )\n    assert new_issue.ok\n\n    issues = api_request_context.get(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    assert issues.ok\n    issues_response = issues.json()\n    issue = list(\n        filter(lambda issue: issue["title"] == "[Feature] request 1", issues_response)\n    )[0]\n    assert issue\n    assert issue["body"] == "Feature description"\n')),(0,r.kt)("h2",{id:"prepare-server-state-via-api-calls"},"Prepare server state via API calls"),(0,r.kt)("p",null,"The following test creates a new issue via API and then navigates to the list of all issues in the project to check that it appears at the top of the list. The check is performed using ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def test_last_created_issue_should_be_first_in_the_list(api_request_context: APIRequestContext, page: Page) -> None:\n    def create_issue(title: str) -> None:\n        data = {\n            "title": title,\n            "body": "Feature description",\n        }\n        new_issue = api_request_context.post(\n            f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data\n        )\n        assert new_issue.ok\n    create_issue("[Feature] request 1")\n    create_issue("[Feature] request 2")\n    page.goto(f"https://github.com/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    first_issue = page.locator("a[data-hovercard-type=\'issue\']").first\n    expect(first_issue).to_have_text("[Feature] request 2")\n')),(0,r.kt)("h2",{id:"check-the-server-state-after-running-user-actions"},"Check the server state after running user actions"),(0,r.kt)("p",null,"The following test creates a new issue via user interface in the browser and then checks via API if it was created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def test_last_created_issue_should_be_on_the_server(api_request_context: APIRequestContext, page: Page) -> None:\n    page.goto(f"https://github.com/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    page.click("text=New issue")\n    page.fill("[aria-label=\'Title\']", "Bug report 1")\n    page.fill("[aria-label=\'Comment body\']", "Bug description")\n    page.click("text=Submit new issue")\n    issue_id = page.url.split("/")[-1]\n\n    new_issue = api_request_context.get(f"https://github.com/{GITHUB_USER}/{GITHUB_REPO}/issues/{issue_id}")\n    assert new_issue.ok\n    assert new_issue.json()["title"] == "[Bug] report 1"\n    assert new_issue.json()["body"] == "Bug description"\n')),(0,r.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,r.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies"),". Playwright provides ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-apirequestcontext#api-request-context-storage-state"},"api_request_context.storage_state(**kwargs)")," method that can be used to retrieve storage state from an authenticated context and then create new contexts with that state."),(0,r.kt)("p",null,"Storage state is interchangeable between ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," and ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),". You can use it to log in via API calls and then create a new context with cookies already there. The following code snippet retrieves state from an authenticated ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," and creates a new ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," with that state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'request_context = playwright.request.new_context(http_credentials={"username": "test", "password": "test"})\nrequest_context.get("https://api.example.com/login")\n# Save storage state into a variable.\nstate = request_context.storage_state()\n\n# Create a new context with the saved storage state.\ncontext = browser.new_context(storage_state=state)\n')))}d.isMDXComponent=!0}}]);