AFRAME.registerComponent = function(original){
  return function(tag,opts){
    if( AFRAME.components[tag] ) 
			return console.warn(`skipping AFRAME.registerComponent('${c}') already registered`) 
   	else return original.apply(AFRAME,arguments)
  }
}(AFRAME.registerComponent)

AFRAME.registerComponent('scripts', {
  init: function(){
    this.el.addEventListener("loadHTML", (e) => this.loadScripts(e) )
  }, 
  loadScripts: function(e){
    if( !e.detail.destination.scripts ) return // not allowed in aframe-verse.json
    let promise = e.detail.promise()
    let scripts = [...e.detail.dom.querySelectorAll("[aframe-verse] script"), 
                   ...e.detail.dom.querySelectorAll(".aframe-verse-script")   ]
		var promises = []
		scripts.map( (script) => promises.push( this.require(script.getAttribute('src') ) ) )
		if( promises.length ) 
			Promise.all(promises).then(promise.resolve).catch(promise.reject)
		else promise.resolve()
  },
	require: function(url){
		return new Promise(function(resolve, reject) {
			var tag = document.createElement('script')
			tag.setAttribute("src",url)
			tag.addEventListener('load', function() {
				resolve(tag);
			}, false);
			tag.addEventListener('error', function() {
				reject(tag);
				console.log('require('+url+') failed')
			}, false);
			document.body.appendChild(tag);
		})
	}
})
