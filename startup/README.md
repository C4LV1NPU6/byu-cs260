# README for Startup Web Application assignment, made by pair programmers Calvin Pugmire (C4LV1NPU6) and Tachiinii Ranger (rokketranger):

# This is the short unofficial README. For the full official README see the README directory.



## 1/23/23 (C4LV1NPU6):

This is the directory for the startup web application.

Access in VS code has been achieved.
Access in GitHub has been achieved.
Merge change part #1.
Merge change part #2.

GitHub notes: GitHub is a great way to backup my code. Pulling and pushing changes seem to be limited to the console on my computer. The console seems to be the best way for me to deal with the backup/syncing aspect of coding in this class.



## 1/26/23 (C4LV1NPU6+rokketranger):

Start up deliverable - specification:

Have you ever wanted to take part in a lightbike battle from the hit movie "Tron: Legacy", or wondered which of your friends you could beat in a head-to-head? The Tron Lightbike Battle application makes it so you and your friends can live out your Grid dreams. Any player can fight any other player in decisive 1v1s. Additionally, each player can easily keep track of their wins, losses, and position on the world-wide scoreboard!

![Illustration_sans_titre](https://user-images.githubusercontent.com/89880125/215221594-4fe18c7e-f147-41ed-9923-c7dba0f9fe23.jpg)

Key features:
-Secure login over HTTPS.
-Ability to play the Tron Lightbike Battle game with any other user.
-Ability to see personal match history and number of wins and losses.
-Ability to see total wins and losses from all users displayed in realtime on a world-wide scoreboard.
-Personal match history, wins, and losses for all users are persistently stored.



## 1/27/23 (C4LV1NPU6):

Set up a web server with AWS.

I found it interesting that it costs you the same amount regardless of whether your server is running or not running (at least when using an elastic IP address).

Browser address: http://3.15.70.3

Remote shell command: ssh -i ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/production.pem ubuntu@3.15.70.3



## 1/30/23 (C4LV1NPU6):

Set up domain name with AWS.

I found it interesting that my preferred domain name wasn't taken yet.

Domain name: http://startup.lightbikebattle.click/



## 2/2/23 (C4LV1NPU6):

Secured web server communication by configuring Caddy to request a certificate from Let's Encrypt for the domain name.

I found it interesting that we didn't start with https.

Host name: https://startup.lightbikebattle.click/



## 2/6/23 (C4LV1NPU6):

Set up official HTML website.

I found it interesting that I had to change my startup URL from cs260game.lightbikebattle.click to startup.lightbikebattle.click.

Site name: https://lightbikebattle.click/

Website deploy command: ./deployWebsite.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/production.pem -h lightbikebattle.click



## 2/6/23 (C4LV1NPU6):

Set up Simon HTML sub-website.

I learned how to implement the Simon Game web application using only HTML. This included the layout and functions for the about, home, play, and scores pages. It was a lot of information but I studied it and copied it perfectly.

Sub-site name: https://simon.lightbikebattle.click/

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/production.pem -h lightbikebattle.click -s simon



## 2/10/23 (C4LV1NPU6):

Made CSS Practice project. Can be used in Startup App's website.

I found the typing animation interesting.

CSSP CodePen URL: https://codepen.io/C4LV1NPU6/pen/WNKVodL



## 2/13/23 (C4LV1NPU6):

Made CSS Flex project. Can be used in Startup App's website.

I found it interesting how HTML passes variables to CSS.

CSSF CodePen URL: https://codepen.io/C4LV1NPU6/pen/dyqbwwB



## 2/15/23 (C4LV1NPU6):

Set up Simon CSS sub-website.

I learned how to implement the Simon Game web application using HTML and CSS. This included the layout and appearances for the about, home, play, and scores pages. It was a lot of information but I studied it and copied it perfectly.

Sub-site name: https://simon.lightbikebattle.click/

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/production.pem -h lightbikebattle.click -s simon



## 2/20/23 (C4LV1NPU6+rokketranger):

Set up Startup HTML+CSS sub-website.

I learned how to implement the Startup web application using HTML and CSS. This included the layout and appearances for the main game page. It was a lot of information but I used my Codepen prototype so it didn't take super long.

Sub-site name: https://startup.lightbikebattle.click/

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/,Access\ Info/production.pem -h lightbikebattle.click -s startup

Website deploy command: ./deployWebsite.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/,Access\ Info/production.pem -h lightbikebattle.click

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/,Access\ Info/production.pem -h lightbikebattle.click -s simon



## 2/22/23 (C4LV1NPU6):

Made JavaScript Functions+Arrows+Arrays+Objects+Classes projects. Arrays can be used in Startup App's website.

I found it interesting that you can pass functions as parameters. I found it interesting that the writers of JS decided to let functions be first order objects, especially since not many other languages do it. I found the syntax for arrays in JS interesting, I expected it to be more like how it is in Java. I found it interesting how objects are a lot like dictionaries in Python.

JavaScript Arrays(+Loops+Conditionals) CodePen URL: https://codepen.io/C4LV1NPU6/pen/VwGaNqP



## 2/25/23 (C4LV1NPU6):

Made JavaScript Expressions+Rest+Spread+Destructuring+Exceptions projects. Exceptions can be used in Startup App's website.

I found it interesting that an easier way of doing regular expression operations hasn't been made in JavaScript like how it has in other programming languages. I found it interesting (and nice) that JavaScript has a shorthand for doing rest+spread operations. I find it interesting (and handy) that you can use destructuring with rest. I found it interesting (and helpful) that throwing an exception skips the rest of your code so you don't have to do it yourself with an unwieldy set of nested if/else statements.

JavaScript Exceptions CodePen URL: https://codepen.io/C4LV1NPU6/pen/LYJRawg



## 2/26/23 (C4LV1NPU6):

Made JavaScript DOM project. Can be used in Startup App's website.

I found it interesting that there was no direct reference to using setHTML() for safely injecting HTML.

JavaScript DOM CodePen URL: https://codepen.io/C4LV1NPU6/pen/bGxBgJN



## 2/26/23 (3/3/23) (C4LV1NPU6):

Set up Simon JavaScript sub-website.

I learned how to implement the Simon Game web application using HTML, CSS, and JavaScript. This included the layout, appearances, and functionality for the about, home, play, and scores pages. It was a lot of information but I studied it and copied it perfectly.

Sub-site name: https://simon.lightbikebattle.click/

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/,Access\ Info/production.pem -h lightbikebattle.click -s simon