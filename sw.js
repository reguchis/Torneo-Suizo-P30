/* Torneo Suizo Escolar · versión 1.2.4 · Service Worker
   Guarda la app en el dispositivo para abrirla sin internet.
   Al publicar una versión nueva, cambia el número de VERSION. */
var VERSION="1.2.4";
var CACHE="torneo-suizo-p30-"+VERSION;
var ARCHIVOS=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/apple-touch-icon.png","./icons/favicon-32.png"];

self.addEventListener("install",function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ARCHIVOS);}));
});
self.addEventListener("message",function(e){if(e.data==="activar") self.skipWaiting();});
self.addEventListener("activate",function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k.indexOf("torneo-suizo-p30-")===0&&k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
function guardar(clave,res){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(clave,cp);});}
function pagina(req){
  return new Promise(function(resolve){
    var listo=false,red=null;
    var deCache=function(){return caches.match("./index.html").then(function(r){return r||caches.match("./");});};
    var t=setTimeout(function(){deCache().then(function(r){if(r&&!listo){listo=true;resolve(r);}});},3500);
    red=fetch(req).then(function(res){
      clearTimeout(t);
      if(res&&res.ok) guardar("./index.html",res);
      if(!listo){listo=true;resolve(res);}
    }).catch(function(){
      clearTimeout(t);
      deCache().then(function(r){if(!listo){listo=true;resolve(r||Response.error());}});
    });
  });
}
self.addEventListener("fetch",function(e){
  var req=e.request;
  if(req.method!=="GET") return;
  var url=new URL(req.url);
  if(url.origin!==self.location.origin) return;
  if(req.mode==="navigate"){e.respondWith(pagina(req));return;}
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(function(r){
    return r||fetch(req).then(function(res){if(res&&res.ok&&url.pathname.indexOf(new URL(self.registration.scope).pathname)===0) guardar(req,res);return res;});
  }));
});
