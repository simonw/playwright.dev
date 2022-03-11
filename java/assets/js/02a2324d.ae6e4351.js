"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6323],{9773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var s=n(7462),a=n(3366),i=(n(7294),n(3905)),r=(n(6396),n(8215),["components"]),o={id:"api-testing",title:"API testing"},l=void 0,u={unversionedId:"api-testing",id:"version-1.19/api-testing",isDocsHomePage:!1,title:"API testing",description:"Playwright can be used to get access to the REST API of your application.",source:"@site/versioned_docs/version-1.19/api-testing.mdx",sourceDirName:".",slug:"/api-testing",permalink:"/java/docs/api-testing",tags:[],version:"1.19",frontMatter:{id:"api-testing",title:"API testing"},sidebar:"version-1.19/docs",previous:{title:"Auto-waiting",permalink:"/java/docs/actionability"},next:{title:"Assertions",permalink:"/java/docs/assertions"}},p=[{value:"Writing API Test",id:"writing-api-test",children:[{value:"Configure",id:"configure",children:[],level:3},{value:"Write tests",id:"write-tests",children:[],level:3},{value:"Setup and teardown",id:"setup-and-teardown",children:[],level:3},{value:"Complete test example",id:"complete-test-example",children:[],level:3}],level:2},{value:"Prepare server state via API calls",id:"prepare-server-state-via-api-calls",children:[],level:2},{value:"Check the server state after running user actions",id:"check-the-server-state-after-running-user-actions",children:[],level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[],level:2}],c={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright can be used to get access to the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")," API of your application."),(0,i.kt)("p",null,"Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few examples where it may come in handy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Test your server API."),(0,i.kt)("li",{parentName:"ul"},"Prepare server side state before visiting the web application in a test."),(0,i.kt)("li",{parentName:"ul"},"Validate server side post-conditions after running some actions in the browser.")),(0,i.kt)("p",null,"All of that could be achieved via ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," methods."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#writing-api-test"},"Writing API Test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prepare-server-state-via-api-calls"},"Prepare server state via API calls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#check-the-server-state-after-running-user-actions"},"Check the server state after running user actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reuse-authentication-state"},"Reuse authentication state"))),(0,i.kt)("h2",{id:"writing-api-test"},"Writing API Test"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," can send all kinds of HTTP(S) requests over network."),(0,i.kt)("p",null,"The following example demonstrates how to use Playwright to test issues creation via ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest"},"GitHub API"),". The test suite will do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new repository before running tests."),(0,i.kt)("li",{parentName:"ul"},"Create a few issues and validate server state."),(0,i.kt)("li",{parentName:"ul"},"Delete the repository after running tests.")),(0,i.kt)("h3",{id:"configure"},"Configure"),(0,i.kt)("p",null,"GitHub API requires authorization, so we'll configure the token once for all tests. While at it, we'll also set the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseURL")," to simplify the tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.APIRequest;\nimport com.microsoft.playwright.APIRequestContext;\nimport com.microsoft.playwright.Playwright;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.TestInstance;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\npublic class TestGitHubAPI {\n  private static final String API_TOKEN = System.getenv("GITHUB_API_TOKEN");\n\n  private Playwright playwright;\n  private APIRequestContext request;\n\n  void createPlaywright() {\n    playwright = Playwright.create();\n  }\n\n  void createAPIRequestContext() {\n    Map<String, String> headers = new HashMap<>();\n    // We set this header per GitHub guidelines.\n    headers.put("Accept", "application/vnd.github.v3+json");\n    // Add authorization token to all requests.\n    // Assuming personal access token available in the environment.\n    headers.put("Authorization", "token " + API_TOKEN);\n\n    request = playwright.request().newContext(new APIRequest.NewContextOptions()\n      // All requests we send go to this API endpoint.\n      .setBaseURL("https://api.github.com")\n      .setExtraHTTPHeaders(headers));\n  }\n\n  @BeforeAll\n  void beforeAll() {\n    createPlaywright();\n    createAPIRequestContext();\n  }\n\n  void disposeAPIRequestContext() {\n    if (request != null) {\n      request.dispose();\n      request = null;\n    }\n  }\n\n  void closePlaywright() {\n    if (playwright != null) {\n      playwright.close();\n      playwright = null;\n    }\n  }\n\n  @AfterAll\n  void afterAll() {\n    disposeAPIRequestContext();\n    closePlaywright();\n  }\n}\n')),(0,i.kt)("h3",{id:"write-tests"},"Write tests"),(0,i.kt)("p",null,"Now that we initialized request object we can add a few tests that will create new issues in the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.google.gson.Gson;\nimport com.google.gson.JsonArray;\nimport com.google.gson.JsonElement;\nimport com.google.gson.JsonObject;\nimport com.microsoft.playwright.APIRequest;\nimport com.microsoft.playwright.APIRequestContext;\nimport com.microsoft.playwright.APIResponse;\nimport com.microsoft.playwright.Playwright;\nimport com.microsoft.playwright.options.RequestOptions;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.TestInstance;\n\nimport java.util.Collections;\nimport java.util.HashMap;\nimport java.util.Map;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\npublic class TestGitHubAPI {\n  private static final String REPO = "test-repo-2";\n  private static final String USER = System.getenv("GITHUB_USER");\n  private static final String API_TOKEN = System.getenv("GITHUB_API_TOKEN");\n\n  private Playwright playwright;\n  private APIRequestContext request;\n\n  // ...\n\n  @Test\n  void shouldCreateBugReport() {\n    Map<String, String> data = new HashMap<>();\n    data.put("title", "[Bug] report 1");\n    data.put("body", "Bug description");\n    APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n      RequestOptions.create().setData(data));\n    assertTrue(newIssue.ok());\n\n    APIResponse issues = request.get("/repos/" + USER + "/" + REPO + "/issues");\n    assertTrue(issues.ok());\n    JsonArray json = new Gson().fromJson(issues.text(), JsonArray.class);\n    JsonObject issue = null;\n    for (JsonElement item : json) {\n      JsonObject itemObj = item.getAsJsonObject();\n      if (!itemObj.has("title")) {\n        continue;\n      }\n      if ("[Bug] report 1".equals(itemObj.get("title").getAsString())) {\n        issue = itemObj;\n        break;\n      }\n    }\n    assertNotNull(issue);\n    assertEquals("Bug description", issue.get("body").getAsString(), issue.toString());\n  }\n\n  @Test\n  void shouldCreateFeatureRequest() {\n    Map<String, String> data = new HashMap<>();\n    data.put("title", "[Feature] request 1");\n    data.put("body", "Feature description");\n    APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n      RequestOptions.create().setData(data));\n    assertTrue(newIssue.ok());\n\n    APIResponse issues = request.get("/repos/" + USER + "/" + REPO + "/issues");\n    assertTrue(issues.ok());\n    JsonArray json = new Gson().fromJson(issues.text(), JsonArray.class);\n    JsonObject issue = null;\n    for (JsonElement item : json) {\n      JsonObject itemObj = item.getAsJsonObject();\n      if (!itemObj.has("title")) {\n        continue;\n      }\n      if ("[Feature] request 1".equals(itemObj.get("title").getAsString())) {\n        issue = itemObj;\n        break;\n      }\n    }\n    assertNotNull(issue);\n    assertEquals("Feature description", issue.get("body").getAsString(), issue.toString());\n  }\n}\n\n')),(0,i.kt)("h3",{id:"setup-and-teardown"},"Setup and teardown"),(0,i.kt)("p",null,"These tests assume that repository exists. You probably want to create a new one before running tests and delete it afterwards. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"@BeforeAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@AfterAll")," hooks for that."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'  // ...\n\n  void createTestRepository() {\n    APIResponse newRepo = request.post("/user/repos",\n      RequestOptions.create().setData(Collections.singletonMap("name", REPO)));\n    assertTrue(newRepo.ok(), newRepo.text());\n  }\n\n  @BeforeAll\n  void beforeAll() {\n    createPlaywright();\n    createAPIRequestContext();\n    createTestRepository();\n  }\n\n  void deleteTestRepository() {\n    if (request != null) {\n      APIResponse deletedRepo = request.delete("/repos/" + USER + "/" + REPO);\n      assertTrue(deletedRepo.ok());\n    }\n  }\n  // ...\n\n  @AfterAll\n  void afterAll() {\n    deleteTestRepository();\n    disposeAPIRequestContext();\n    closePlaywright();\n  }\n')),(0,i.kt)("h3",{id:"complete-test-example"},"Complete test example"),(0,i.kt)("p",null,"Here is the complete example of an API test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.google.gson.Gson;\nimport com.google.gson.JsonArray;\nimport com.google.gson.JsonElement;\nimport com.google.gson.JsonObject;\nimport com.microsoft.playwright.APIRequest;\nimport com.microsoft.playwright.APIRequestContext;\nimport com.microsoft.playwright.APIResponse;\nimport com.microsoft.playwright.Playwright;\nimport com.microsoft.playwright.options.RequestOptions;\nimport org.junit.jupiter.api.*;\n\nimport java.util.Collections;\nimport java.util.HashMap;\nimport java.util.Map;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\npublic class TestGitHubAPI {\n  private static final String REPO = "test-repo-2";\n  private static final String USER = System.getenv("GITHUB_USER");\n  private static final String API_TOKEN = System.getenv("GITHUB_API_TOKEN");\n\n  private Playwright playwright;\n  private APIRequestContext request;\n\n  void createPlaywright() {\n    playwright = Playwright.create();\n  }\n\n  void createAPIRequestContext() {\n    Map<String, String> headers = new HashMap<>();\n    // We set this header per GitHub guidelines.\n    headers.put("Accept", "application/vnd.github.v3+json");\n    // Add authorization token to all requests.\n    // Assuming personal access token available in the environment.\n    headers.put("Authorization", "token " + API_TOKEN);\n\n    request = playwright.request().newContext(new APIRequest.NewContextOptions()\n      // All requests we send go to this API endpoint.\n      .setBaseURL("https://api.github.com")\n      .setExtraHTTPHeaders(headers));\n  }\n\n  void createTestRepository() {\n    APIResponse newRepo = request.post("/user/repos",\n      RequestOptions.create().setData(Collections.singletonMap("name", REPO)));\n    assertTrue(newRepo.ok(), newRepo.text());\n  }\n\n  @BeforeAll\n  void beforeAll() {\n    createPlaywright();\n    createAPIRequestContext();\n    createTestRepository();\n  }\n\n  void deleteTestRepository() {\n    if (request != null) {\n      APIResponse deletedRepo = request.delete("/repos/" + USER + "/" + REPO);\n      assertTrue(deletedRepo.ok());\n    }\n  }\n\n  void disposeAPIRequestContext() {\n    if (request != null) {\n      request.dispose();\n      request = null;\n    }\n  }\n\n  void closePlaywright() {\n    if (playwright != null) {\n      playwright.close();\n      playwright = null;\n    }\n  }\n\n  @AfterAll\n  void afterAll() {\n    deleteTestRepository();\n    disposeAPIRequestContext();\n    closePlaywright();\n  }\n\n  @Test\n  void shouldCreateBugReport() {\n    Map<String, String> data = new HashMap<>();\n    data.put("title", "[Bug] report 1");\n    data.put("body", "Bug description");\n    APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n      RequestOptions.create().setData(data));\n    assertTrue(newIssue.ok());\n\n    APIResponse issues = request.get("/repos/" + USER + "/" + REPO + "/issues");\n    assertTrue(issues.ok());\n    JsonArray json = new Gson().fromJson(issues.text(), JsonArray.class);\n    JsonObject issue = null;\n    for (JsonElement item : json) {\n      JsonObject itemObj = item.getAsJsonObject();\n      if (!itemObj.has("title")) {\n        continue;\n      }\n      if ("[Bug] report 1".equals(itemObj.get("title").getAsString())) {\n        issue = itemObj;\n        break;\n      }\n    }\n    assertNotNull(issue);\n    assertEquals("Bug description", issue.get("body").getAsString(), issue.toString());\n  }\n\n  @Test\n  void shouldCreateFeatureRequest() {\n    Map<String, String> data = new HashMap<>();\n    data.put("title", "[Feature] request 1");\n    data.put("body", "Feature description");\n    APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n      RequestOptions.create().setData(data));\n    assertTrue(newIssue.ok());\n\n    APIResponse issues = request.get("/repos/" + USER + "/" + REPO + "/issues");\n    assertTrue(issues.ok());\n    JsonArray json = new Gson().fromJson(issues.text(), JsonArray.class);\n    JsonObject issue = null;\n    for (JsonElement item : json) {\n      JsonObject itemObj = item.getAsJsonObject();\n      if (!itemObj.has("title")) {\n        continue;\n      }\n      if ("[Feature] request 1".equals(itemObj.get("title").getAsString())) {\n        issue = itemObj;\n        break;\n      }\n    }\n    assertNotNull(issue);\n    assertEquals("Feature description", issue.get("body").getAsString(), issue.toString());\n  }\n}\n')),(0,i.kt)("h2",{id:"prepare-server-state-via-api-calls"},"Prepare server state via API calls"),(0,i.kt)("p",null,"The following test creates a new issue via API and then navigates to the list of all issues in the project to check that it appears at the top of the list. The check is performed using ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Test\nvoid lastCreatedIssueShouldBeFirstInTheList() {\n  Map<String, String> data = new HashMap<>();\n  data.put("title", "[Feature] request 1");\n  data.put("body", "Feature description");\n  APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n    RequestOptions.create().setData(data));\n  assertTrue(newIssue.ok());\n\n  page.navigate("https://github.com/" + USER + "/" + REPO + "/issues");\n  Locator firstIssue = page.locator("a[data-hovercard-type=\'issue\']").first();\n  assertThat(firstIssue).hasText("[Feature] request 1");\n}\n')),(0,i.kt)("h2",{id:"check-the-server-state-after-running-user-actions"},"Check the server state after running user actions"),(0,i.kt)("p",null,"The following test creates a new issue via user interface in the browser and then checks via API if it was created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Test\nvoid lastCreatedIssueShouldBeOnTheServer() {\n  page.navigate("https://github.com/" + USER + "/" + REPO + "/issues");\n  page.click("text=New Issue");\n  page.fill("[aria-label=\'Title\']", "Bug report 1");\n  page.fill("[aria-label=\'Comment body\']", "Bug description");\n  page.click("text=Submit new issue");\n  String issueId = page.url().substring(page.url().lastIndexOf(\'/\'));\n\n  APIResponse newIssue = request.get("https://github.com/" + USER + "/" + REPO + "/issues/" + issueId);\n  assertThat(newIssue).isOK();\n  assertTrue(newIssue.text().contains("Bug report 1"));\n}\n')),(0,i.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,i.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies"),". Playwright provides ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-apirequestcontext#api-request-context-storage-state"},"APIRequestContext.storageState([options])")," method that can be used to retrieve storage state from an authenticated context and then create new contexts with that state."),(0,i.kt)("p",null,"Storage state is interchangeable between ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),". You can use it to log in via API calls and then create a new context with cookies already there. The following code snippet retrieves state from an authenticated ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," and creates a new ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," with that state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'APIRequestContext requestContext = playwright.request().newContext(\n  new APIRequest.NewContextOptions().setHttpCredentials("user", "passwd"));\nrequestContext.get("https://api.example.com/login");\n// Save storage state into a variable.\nString state = requestContext.storageState();\n\n// Create a new context with the saved storage state.\nBrowserContext context = browser.newContext(new Browser.NewContextOptions().setStorageState(state));\n')))}g.isMDXComponent=!0}}]);