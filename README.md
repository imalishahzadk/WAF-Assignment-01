Web Application Frameworks
CS457
Fall 2022
Assignment # 1
Deadline: 7th November 2022 before 15:00
Note: This is an individual assignment. Name your zip file as WAF-A1-YourName.zip/rar. Submit your
assignment in fs folder “WAF- F22-A1”. Cheating will be penalized. There is zero tolerance for cheating. Please
follow the deadline. Submit it before the deadline. The deadline will not be extended. Please start from day 1.
Part-1 (Client Server Communication – NodeJS)
Create a NodeJS-based application that helps you explore different universities in the world.
 You can explore the following link for an API that provides universities’ data.
https://github.com/Hipo/university-domains-list-api
 Put http://universities.hipolabs.com/search?country=Pakistan in the browser and hit
enter. What you will see in the browser window would be a JSON response from the
API. Your task is to receive such JSON objects in NodeJS the environment and process
them programmatically.
 Your task is to create a NodeJS-based application that will allow a user to:
o Input a country name and see the list of the universities’ names and universities
count in the country.
o Input a university name and see the university’s web page address on the
console.
o Design simple html forms for both above given parts (I & II). Your html code
should be in .html files which should be sent to the client (browser) against route
paths “/see_country_universities” and “/search_university” respectively.
 You can display raw JSON responses on the browser window for both
parts.
Part-2 (Using 3rd party APIs – NodeJS)
Create a NodeJS-based weather notification system (expected temperature of a day and
possibility of rain). The system should send you an update after every 24 hours via SMS and
email. The following steps should be carried out to complete the assignment.
 Collect the weather information from any of the publicly available weather APIs. The
following are two recommendations:
http://www.7timer.info/doc.php?lang=en
https://m3o.com/weather
 Make sure you get a JSON response against the API request. Process the data to extract
information of your interest i.e., temperature and possibility of rain.
 Use some Email and SMS API to generate the alert. Following are two
recommendations.
https://rapidapi.com/sendgrid/api/sendgrid/
https://rapidapi.com/d7admin/api/d7sms/
 Configuring API tokens can be a little bit tricky. Make sure that you register with the
API provider wherever required. They provide free tries for testing purposes which you
can use to accomplish your assignment.
Note: For each of the parts (part-1 & part-2), do proper logging for whatever happens on
runtime (e.g., errors, info messages). Your logs should display on the console as well as should
be entered in log.txt file on the server side.
