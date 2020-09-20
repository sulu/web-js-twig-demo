# Web JS and Web Twig Demo

With the combination of [web-js](https://github.com/sulu/web-js) and [web-twig](https://github.com/sulu/web-twig)
you can easily manage your js components and control your loaded JS code.

## Installation

To install the demo you should clone this project:

```bash
https://github.com/sulu/web-js-twig-demo.git
cd web-js-twig-demo
```

Then install the PHP dependencies using [composer](https://getcomposer.org/).

```bash
composer install
```

Then go into the assets/website folder and install the JS dependencies using [npm](https://www.npmjs.com/get-npm).

```bash
cd assets/website
npm install
```

## Start the project

The easiest way to start the demo is by using the [PHP internal webserver](https://www.php.net/manual/en/features.commandline.webserver.php).

```bash
php -S 127.0.0.1:8000 -t public
```

When you now visit [http://127.0.0.1:8000](http://127.0.0.1:8000) the demo should appear.
