# QA Knowledge Checklist

## Basic
 - Understanding
	* [Testing in the software lifecycle](https://msdn.microsoft.com/zh-cn/library/jj159342.aspx) 
	* [Testing lifecycle](http://www.softwaretestingmentor.com/stlc/software-test-life-cycle)
	* [Methodology of test cases design](http://people.cs.aau.dk/~bnielsen/TOV07/lektioner/blackbox-07.pdf)
	   * Equivalence partitioning
	   * Boundary-Value analysis
	   * Cause-Effect graphing
	   * Error guessing
	* [Test planning](http://www.epmo.scio.nc.gov/library/docs/TESTPLAN.doc)
	* [Test report](http://www.softwaretestinghelp.com/test-summary-report-template-download-sample/)
 - Tools
	* Bug tracking system
		* Bugzilla
		* Jira
		* Trac
		* Redmine
		* GitHub/GitLab ticket
	* Test case management system, Testlink or others
 - Further reading
	* [Agile & testing](http://testobsessed.com/wp-content/uploads/2011/04/AgileTestingOverview.pdf)
	* [User-centered design](http://www.userfocus.co.uk/consultancy/ucd.html)

## Manual
 - Common
	* [Black/White/Gray box testing](http://extremesoftwaretesting.com/Articles/WorldofGrayBoxTesting.html)
	* [Positive & Negative testing](http://www.softwaretestinghelp.com/what-is-negative-testing)
	* [Boundary testing and and equivalence partitioning](https://www.youtube.com/watch?v=uydAyjqTSiw)
	* [Decision table testing](https://www.youtube.com/watch?v=ED2iJXkdhCQ)
	* [Compatibility testing](http://www.guru99.com/compatibility-testing.html)
	* [Usability testing](http://www.uxmatters.com/mt/archives/2015/01/17-usability-testing-myths-and-misconceptions.php)
	* [API testing](https://blog.udemy.com/api-testing)
	* Logging analysis ability
	* Data capture tool, like Wireshark, Fiddler, TCPdump
 - Web
	* Browser develop tool
		* Chrome develop tool
		* Firebug
		* IE develop tool
 - Mobile
	* [Android and iOS OS characters](http://www.stuq.org/ppt/show/186/e316304f9750ed6254147e466f6cdbcb)
	* Monitoring memory, battery and mobile data usage 
	* Android: common commands of [adb](http://developer.android.com/tools/help/adb.html), usage of [logcat](https://www.youtube.com/watch?v=2AHJsRKa_J8) and [ddms](http://developer.android.com/tools/debugging/ddms.html)
	* iOS: [instrument](http://www.raywenderlich.com/23037/how-to-use-instruments-in-xcode)
	* [The difference between test on simulator and devices](https://51degrees.com/Portals/0/Documentation/Real%20handsets%20vs%20simulators.pdf)

## Automation
 - Test tools
	* Web
		* [Selenium & Selenium Grid](http://www.seleniumhq.org/docs)
	* Mobile
		* [Appium](http://appium.io)
		* Hierarchy Viewer
	* [TestNG](http://testng.org/doc/documentation-main.html)
	* [SoapUI](http://www.soapui.org)
 - Test approaches
	* [Page object pattern](http://docs.seleniumhq.org/docs/06_test_design_considerations.jsp#page-object-design-pattern)
 - Further reading
	* [Page factory](http://www.toolsqa.com/selenium-webdriver/page-object-pattern-model-page-factory)

## Security
 - Basic knowledge
	* [Web Security](https://www.owasp.org)
	* [Mobile Application Security](http://en.wikipedia.org/wiki/Application_security)
		* [Android Security](http://www.droidsec.cn/android-security-basic/) 
		* [iOS Security](http://www.droidsec.cn/ios%E5%AE%89%E5%85%A8%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99%E6%B1%87%E6%80%BB/) 
	* [Database Security](http://en.wikipedia.org/wiki/Database_security)
 - Major threats/attacks
	* SQL injection
	* User authentication
	* User authorization
	* Exceptions handling
	* Sensitive data protecting
	* Secure server configuration
	* XSS
	* DDoS
	* Session hijacking
	* Parameter manipulation
	* Auditing and logging
 - Methodology
	* Knowing your threats
	* Securing the network, host and application
	* [Incorporating security into software development process](http://www.microsoft.com/en-us/SDL/Default.aspx)
 - Test tools
	* [Websecurify](www.websecurify.com)
	* [Netsparker](https://www.netsparker.com/communityedition)
	* [Drozer](https://www.mwrinfosecurity.com/products/drozer/#downloads)
	* [idb](https://github.com/dmayer/idb)
 - Refer
	* [WebGoat](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)

## Performance
 - Basic knowledge
	* [Load testing](http://www.testingperformance.org/definitions/what-is-load-testing)
	* [Stress testing](http://www.testingperformance.org/definitions/what-is-stress-testing)
	* [Endurance testing(Soak testing)](http://www.testingperformance.org/definitions/what-is-soak-testing)
	* [Spike testing](http://www.testingperformance.org/definitions/what-is-spike-testing)
 - KPI
	* Concurrency/Throughput
	* Server/Front-end response time
	* CPU usage
	* Memory usage
	* Disk I/O
	* Network
	* Slow queries in DB
 - [Methodology](http://en.wikipedia.org/wiki/Software_performance_testing)
	* Identify performance acceptance criteria
	* Identify test environment
 	* Plan and design test
	* Configure the test environment
	* Implement the test design
	* Execute the test
	* Analyse results, tune, and retest.
 - Test tools
	* Web/API: LoadRunner
	* Web: [yslow](https://addons.mozilla.org/en-us/firefox/addon/yslow)
	* App(android front-end):	 Hierarchy Viewer
	* API: [Apache benchmark](http://httpd.apache.org/docs/current/programs/ab.html)
	* API: [JMeter](http://jmeter.apache.org)
	* API: [SoapUI](http://www.soapui.org) 

## SQA
 - Basic
	* [Responsibility](https://www.sokanu.com/careers/software-quality-assurance-engineer/)
	* [Audit](http://www.slideshare.net/SMajumder/software-quality-assurance-1443185)
 - Standard
	* [IEEE730](http://davidiheimann.com/wp-content/uploads/2014/08/an-introduction-to-the-new-ieee-730-standard-on-software-quality-assurance.pdf)
	* [ISO/IEC 25010:2011(older version: ISO/IEC 9126)](http://en.wikipedia.org/wiki/ISO/IEC_9126)
		* Functionality
		* Reliability
		* Usability
		* Efficiency
		* Maintainability
		* Portability
	* [CMMI](http://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration)
		* Maturity Level 1 - Initial
		* Maturity Level 2 - Managed
		* Maturity Level 3 - Defined
		* Maturity Level 4 - Quantitatively Managed
		* Maturity Level 5 - Optimizing
 - Resources
	* [Handbook of software quality assurance](http://www.slideshare.net/suresh461/handbook-ofsoftwarequalityassurance978159693186235996)

## Misc
 - [Accessibility](http://www.w3.org/wiki/Accessibility_testing)
 - Usability
	* Further reading
		* Book - Don't make me think
		* Book - The design of everything
		* Book - The User Is Always Right			   

## Resources
 - [TesterHome](http://testerhome.com)
 - [Jayway](http://www.jayway.com/category/testing)
 - [Guru99](http://www.guru99.com)
 - Book - software testing
 - Book - the art of software testing
