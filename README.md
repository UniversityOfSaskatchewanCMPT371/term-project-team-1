# HealthDeck
[![Coverage Status](https://coveralls.io/repos/github/UniversityOfSaskatchewanCMPT371/term-project-team-1/badge.svg?branch=master)](https://coveralls.io/github/UniversityOfSaskatchewanCMPT371/term-project-team-1?branch=master)

HealthDeck will be your companion app for you to know your healthcare practitioners better!

  - Just scan your practitioner's QR code from their ID
  - You'll be able to add their card to your healthcare deck
  - Magic

# Features!

  - Users will be able to edit their practitioner card lineup
  - A nifty carousel that shows all the cards you have scanned into your roster

### Tech

HealthDeck uses the following technologies and open source projects to work properly:

* [Vue.js] - HTML enhanced for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Laravel] - the coolest PHP framework ever
* [Sass] - basically, CSS with superpowers. a stable professional-grade CSS extension language
* [Composer] - dependency manager for Laravel
* [Gulp] - the streaming build system
* [MySQL] - for database access
* [PHP] - duh

# Installation

### Development environment 
HealthDeck requires React Native to run.

Install [Composer](https://getcomposer.org/download/) (There's a Windows installer to make your life easier). `cd` into the directory where you `git clone`d the HealthDeck repo, then install Laravel (we're making a global install just so it's more awesome):

```bash
$ composer global require "laravel/installer"
```
Verify that you have everything installed:

```bash
$ php -V
$ composer --version
$ laravel --version
```

You only have to do the steps above once, and you're all set to code!

### During development 
To get the latest development code, checkout the `develop` branch:

```bash
$ git checkout develop
```
Compile the Vue.js and Laravel dependencies...

```bash
$ cd wwwbs
$ npm install
$ composer install
```
Authenticate your session, then start the development server! Make sure you have the .env file in the `wwwbs` folder (for security, our .env file is not tracked by version control)

```bash
$ php artisan key:generate
$ php artisan serve
```

Keep the `php artisan serve` window open, and type http://127.0.0.1:8000 on your favourite browser (which is Chrome). Boom. Wacky.

### Testing environment

Our project is powered by TDD. Our code for testing is still under development, but we'll update this space with instructions on how to do testing when we're done.

### Todos

 - Write LOTS of Tests
 - Integrate style checking and testing suites into the repo
 - Create migrations and seeders for the database
 - Make controllers for the models
 - Prepare Incremental Deliverable 1
 - Party hard
 - Integrate Gulp to automate PHPUnit testing and Sass stylesheet compilation

### The Dev Team

We're a pretty cool bunch. We like coding, coffee, and party parrots. We are Group 1 - we don't have a group name yet, but who needs a group name when we're literally Group Numero Uno?!

[Kaadan] • [Peters] • [Pineda] • [Rathy] • [Salim]


License
----

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [MySQL]: <https://www.mysql.com/>
   [Vue.js]: <https://vuejs.org/>
   [Twitter Bootstrap]: <http://getbootstrap.com/>
   [Laravel]: <https://laravel.com/>
   [Composer]: <https://getcomposer.org/download/>
   [PHP]: <http://www.php.net/>
   [Gulp]: <https://gulpjs.com/>
   [Sass]: <http://sass-lang.com/>
   [npm]: <https://www.npmjs.com/get-npm>
   [Apache]: <https://httpd.apache.org/download.cgi>

   [Kaadan]: <mailto:fah235@mail.usask.ca>
   [Peters]: <mailto:hih050@mail.usask.ca>
   [Pineda]: <mailto:jay.p@usask.ca>
   [Rathy]: <mailto:vip670@mail.usask.ca>
   [Crooks]: <mailto:bbc712@mail.usask.ca>
   
