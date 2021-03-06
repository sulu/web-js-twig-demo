import 'core-js/features/object/assign'; // polyfill for IE support
import web from '@sulu/web';
import $ from 'jquery';
import Map from './components/map';

window.$ = window.jQuery = $;
window.web = web;

// register components
web.registerComponent('map', Map);

// The started components are written into a variable in the `base.html.twig` file
// this allows us to async load the whole javascript code and start the components
// here when the javascript is finally loaded.
if (webJsComponents) {
    web.startComponents(webJsComponents);
}
