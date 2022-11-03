![](https://github.com/coderofsalvation/aframe-verse/raw/main/.img/demo.gif)

An extension for the [aframe-verse component](https://github.com/coderofsalvation/aframe-verse) which allows specific aframe experiences to load (trusted) scripts.

# Usage 

Allow certain urls in [aframe-verse.json](https://github.com/coderofsalvation/aframe-verse/aframe-verse.json) to load scripts by adding `scripts:true`:

```json
{
  destinations:[
    ...
    {url:"./app3.html", scripts:true},
    {url:"https://trustedfriend.com/game.html", scripts:true},
  ]
}
```

> Advice: don't trust things you should'nt trust :heart:


Just add the `scripts` attribute to your cluster-client ([index.html](https://github.com/coderofsalvation/aframe-verse/blob/main/apps/index.html)):

```
<a-entity aframe-verse="......" scripts>
```

Then `game.html` or `app3.html` will have to include their scripts inside the `aframe-verse`-block:

```html
<script src="....."></script>                     <!-- will not be loaded

<a-entity aframe-verse="______">

   <script src="./component/foo.js"/>            <!-- will be loaded (inside aframe-verse block)
   <script src="./component/bar.js"/>            <!-- 

</a-entity>
```

> Profit! Now `foo.js` and `bar.js` will be loaded, but not `.....`

This way scripts are cherrypicked, so you don't have to worry about accidentally loading global scripts too (2 versions of `aframe.min.js` e.g.).

## Conditional loading

For aframe-verse-only scripts, you don't have to use `<script>`-tags, but you can use the `aframe-verse-script`-classname in your `game.html` or `app3.html`:

```html
<template class="aframe-verse-script" src="component/x.js"/> 
```

> Profit! now the component will only get loaded when viewed thru **aframe-verse**, and not in standalone mode.

Still, in some cases, you'd want to add an `aframe-verse.js`-stub, to kick off your app:

```html
<template class="aframe-verse-script" src="aframe-verse.js"/> 
```

aframe-verse.js
```js
// our 'domready' event
$('[aframe-verse]').addEventListener("loaded", () => {            

  let promise = e.detail.promise()  // dont fadein experience yet

  myexperience = new Experience()                                                 
  myexperience.start()

  promise.resolve()                 // now we can fadein 
})
```

> Profit!

## Scope of this component

Further privacy/Security-stuff is out of scope (see the `navigate` custom-component example in the [aframe-verse README.md](https://github.com/coderofsalvation/aframe-verse) in the `Customizing (with code) > Customizing navigation further` section.

> Please publish any useful components under reponame `aframe-verse-component-mycomponent` for discoverability.

