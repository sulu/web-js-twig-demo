<?php

require \dirname(__DIR__) . '/vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(\dirname(__DIR__) . '/templates');
$twig = new \Twig\Environment($loader, [
    'cache' => \dirname(__DIR__) . '/var/twig/compilation_cache',
]);

// add sulu/web-twig extensions
// @see https://github.com/sulu/web-twig/blob/master/docs/component.md
$twig->addExtension(new \Sulu\Twig\Extensions\ComponentExtension());

$template = ltrim($_SERVER['REQUEST_URI'], '/');

if (!$template) {
    $template = 'homepage';
}

$template = sprintf('pages/%s.html.twig', $template);

$content = '<h1>Error 404</h1>';
if ($loader->exists($template)) {
    $content = $twig->render($template);
}

header('Content-Type', 'text-html');
echo $content;
