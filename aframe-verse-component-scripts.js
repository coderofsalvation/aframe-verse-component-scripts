AFRAME.registerComponent('scripts', {
  init: function(){
    this.el.addEventListener("loadHTML", (e) => this.loadScripts(e) )
  }, 
  loadScripts: function(e){
    if( !e.detail.destination.scripts ) return // not allowed in aframe-verse.json
    let promise = e.detail.promise()
    let scripts = [...e.detail.dom.querySelectorAll("[aframe-verse] script"), 
                   ...e.detail.dom.querySelectorAll(".aframe-verse-script")   ]
    if( scripts.length == 0 ) return promise.resolve()
    scripts.map( (script) => {
      let s = document.createElement("script")
      s.setAttribute("src", script.getAttribute("src") )
      this.el.appendChild(s)
    })
    promise.resolve()
  }
})
