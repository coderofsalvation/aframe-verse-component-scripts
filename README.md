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
<a-entity aframe-verse="......">

   <script src="./component/special.js"/>

</a-entity>
```

## Customizing 

If for some reason the above is not feasible, you can make something like this work too:


```html
<template>
  <foo bar="./component/special.js"/>
</template>

<a-entity aframe-verse="......">

</a-entity>
```

But then you need to add the `scripts` attribute to your cluster-client ([index.html](https://github.com/coderofsalvation/aframe-verse/blob/main/apps/index.html)) like this:

```
<a-entity aframe-verse="......" scripts="cssquery: template>foo; attr: bar">
```
