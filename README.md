An extension for the [aframe-verse component](https://github.com/coderofsalvation/aframe-verse) which allows specific aframe experiences to load scripts.

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
