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

Then add the `scripts` attribute to your cluster-client ([index.html](https://github.com/coderofsalvation/aframe-verse/blob/main/apps/index.html)):

```
<a-entity aframe-verse="......" scripts>
```

Then `game.html` or `app3.html` will have to include their scripts inside the `aframe-verse`-block:

```html
<script src="....."></script>                          <!-- will not be loaded

<a-entity aframe-verse="______">

   <script src="./component/foo.js"/>            <!-- will be loaded (inside aframe-verse block)
   <script src="./component/bar.js"/>            <!-- 

</a-entity>
```

> Profit! Now `foo.js` and `bar.js` will be loaded, but not `.....`

This way scripts are cherrypicked, so you don't have to worry about accidentally loading global scripts (2 versions of `aframe.min.js` e.g.). Global scripts should only be loaded in the cluster-client ([index.html](https://github.com/coderofsalvation/aframe-verse/blob/main/apps/index.html) e.g.)

## Conditional loading 

For aframe-verse-only  scripts, you don't have to use `<script>`-tags, but you can use the `aframe-verse-script`-classname in your `game.html` or `app3.html`:

```html
<template class="aframe-verse-script" src="component/x.js"/> 
```

> Profit! now the script will only get loaded when viewed thru a cluster-client, and not in standalone mode.
