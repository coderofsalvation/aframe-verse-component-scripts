AFRAME.registerComponent('scripts', {
  init: function(){
    this.el.addEventListener("loadHTML", (e) => this.loadScripts(e) )
  }, 
  loadScripts: function(e){
    if( !e.detail.destination.scripts ) return // not allowed in aframe-verse.json
    let promise = e.detail.promise()
    let query = this.data.cssquery || "[aframe-verse script]"
    let attr  = this.data.attr  || "src"
    let scripts = [...e.detail.dom.querySelectorAll(query)]
    scripts.map( (script) => {
      let s = document.createElement("script")
      s.setAttribute("src", script.getAttribute(attr) )
      this.el.appendChild(s)
    })
    promise.resolve()
  }
})
