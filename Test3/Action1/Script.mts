Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebEdit("originAirport").Set "PHX"
Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebEdit("destinationAirport").Set "HOU"
Browser("Southwest Airlines | Book").Page("Southwest Airlines | Book").WebButton("Search").Click
Browser("Southwest Airlines | Book").Close
