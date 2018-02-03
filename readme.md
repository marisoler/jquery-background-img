# jquery-background-img
### Plug-in de jquery para cambiar el fondo con imagenes random
#### Installation
```js
npm install jquery-background-img
```
##### You need to load jQuery first
```html
<script src="/node_modules/jquery/dist/jquery-js"></script>
<script src="/node_modules/jquery-background-img/src/index.js"></script>
```

Before using the Unsplash API you need to register as developer. Then you must put the **CLIENT_ID** to be enable to get photos from Unsplash API.

```js
window.BackgroundImg.setup(clientId);
```

#### How it works?
```html
<div id="bg-unsplash"></div>
```

```js
$(document).ready(function(){
	window.BackgroundImg.setup(clientId);
    $('#bg-unsplash').BackgroundImg({
    	minHeight: '700px', //by default it's 800px
        backgroundSize: 'contain', //by default it's cover
        backgroundPosition: 'top center', //by default it´s center
        backgroundColor: 'black', //by default it's black
    });
});
```
