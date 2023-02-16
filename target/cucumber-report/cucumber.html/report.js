$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search",
  "description": "\r\nAs a User I want to check Job Search Result Using Different DataSet",
  "id": "job-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should search job and navigate to result page successfully",
  "description": "",
  "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter Job title in \"\u003cJobTitle\u003e\" field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Location in \"\u003cLocation\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance in\"\u003cdistance\u003e\" dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary Minimum in \"\u003csalaryMin\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary Maximum in \"\u003csalaryMax\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"\u003csalaryType\u003e\" dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"\u003cjobType\u003e\" dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the \"\u003cresult\u003e\" and user is on result page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;",
  "rows": [
    {
      "cells": [
        "JobTitle",
        "Location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 20,
      "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;1"
    },
    {
      "cells": [
        "Automation Tester",
        "Harrow on the Hill",
        "up to 25 miles",
        "35000",
        "45000",
        "annum",
        "Permanent",
        "Permanent Automation Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;2"
    },
    {
      "cells": [
        "Automation Tester",
        "London",
        "up to 50 miles",
        "35000",
        "55000",
        "annum",
        "Permanent",
        "Permanent Automation Tester jobs in London"
      ],
      "line": 22,
      "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11967874900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should search job and navigate to result page successfully",
  "description": "",
  "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter Job title in \"Automation Tester\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Location in \"Harrow on the Hill\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance in\"up to 25 miles\" dropdown menu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary Minimum in \"35000\" field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary Maximum in \"45000\" field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"annum\" dropdown menu",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Permanent\" dropdown menu",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the \"Permanent Automation Tester jobs in Harrow on the Hill\" and user is on result page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchStep.userIsOnHomePage()"
});
formatter.result({
  "duration": 85794100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 22
    }
  ],
  "location": "JobSearchStep.iEnterJobTitleInField(String)"
});
formatter.result({
  "duration": 105551400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchStep.iEnterLocationInField(String)"
});
formatter.result({
  "duration": 97879400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 21
    }
  ],
  "location": "JobSearchStep.iSelectDistanceInDropdownMenu(String)"
});
formatter.result({
  "duration": 88712300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 57628800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 27
    }
  ],
  "location": "JobSearchStep.iEnterSalaryMinimumInField(String)"
});
formatter.result({
  "duration": 207414800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 27
    }
  ],
  "location": "JobSearchStep.iEnterSalaryMaximumInField(String)"
});
formatter.result({
  "duration": 56064500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchStep.iSelectSalaryTypeDropdownMenu(String)"
});
formatter.result({
  "duration": 54495800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchStep.iSelectJobTypeDropdownMenu(String)"
});
formatter.result({
  "duration": 68959800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 70074000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Tester jobs in Harrow on the Hill",
      "offset": 15
    }
  ],
  "location": "JobSearchStep.iCanSeeTheAndUserIsOnResultPage(String)"
});
formatter.result({
  "duration": 3474864700,
  "status": "passed"
});
formatter.after({
  "duration": 633101500,
  "status": "passed"
});
formatter.before({
  "duration": 5659846000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should search job and navigate to result page successfully",
  "description": "",
  "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter Job title in \"Automation Tester\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Location in \"London\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance in\"up to 50 miles\" dropdown menu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary Minimum in \"35000\" field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary Maximum in \"55000\" field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"annum\" dropdown menu",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Permanent\" dropdown menu",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the \"Permanent Automation Tester jobs in London\" and user is on result page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchStep.userIsOnHomePage()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 22
    }
  ],
  "location": "JobSearchStep.iEnterJobTitleInField(String)"
});
formatter.result({
  "duration": 89513900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 21
    }
  ],
  "location": "JobSearchStep.iEnterLocationInField(String)"
});
formatter.result({
  "duration": 62324500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 50 miles",
      "offset": 21
    }
  ],
  "location": "JobSearchStep.iSelectDistanceInDropdownMenu(String)"
});
formatter.result({
  "duration": 99899100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 67376800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 27
    }
  ],
  "location": "JobSearchStep.iEnterSalaryMinimumInField(String)"
});
formatter.result({
  "duration": 211795900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55000",
      "offset": 27
    }
  ],
  "location": "JobSearchStep.iEnterSalaryMaximumInField(String)"
});
formatter.result({
  "duration": 66999400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchStep.iSelectSalaryTypeDropdownMenu(String)"
});
formatter.result({
  "duration": 50737900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchStep.iSelectJobTypeDropdownMenu(String)"
});
formatter.result({
  "duration": 81042500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStep.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 81158500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Tester jobs in London",
      "offset": 15
    }
  ],
  "location": "JobSearchStep.iCanSeeTheAndUserIsOnResultPage(String)"
});
formatter.result({
  "duration": 2487754000,
  "status": "passed"
});
formatter.after({
  "duration": 620584100,
  "status": "passed"
});
});