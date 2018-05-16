Browser("MakeMyTrip - #1 Travel").Page("MakeMyTrip - #1 Travel").Link("hotels").Click
Browser("MakeMyTrip - #1 Travel").Page("Online Hotel Booking for").WebEdit("WebEdit").Set "Goa, India"
Browser("MakeMyTrip - #1 Travel").Page("Online Hotel Booking for").WebButton("Search").Click
Browser("MakeMyTrip - #1 Travel").Close
