Browser("Outlook.com - Microsoft").Page("Outlook.com - Microsoft").WebButton("Sign in").Click
Browser("Outlook.com - Microsoft").Page("Sign in to your Microsoft").Sync @@ script infofile_;_ZIP::ssf1.xml_;_
reporter.ReportEvent micFail,"Condition is fail","Fail the test"
Browser("Outlook.com - Microsoft").Close
