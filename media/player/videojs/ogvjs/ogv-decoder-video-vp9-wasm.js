
var OGVDecoderVideoVP9W = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(OGVDecoderVideoVP9W) {
  OGVDecoderVideoVP9W = OGVDecoderVideoVP9W || {};


var a;a||(a=typeof OGVDecoderVideoVP9W !== 'undefined' ? OGVDecoderVideoVP9W : {});var aa,n;a.ready=new Promise(function(b,c){aa=b;n=c});var ba=a,ca=Object.assign({},a),ha="object"==typeof window,p="function"==typeof importScripts,q="",v,w,x,fs,z,D;
if("object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node)q=p?require("path").dirname(q)+"/":__dirname+"/",D=()=>{z||(fs=require("fs"),z=require("path"))},v=function(b,c){D();b=z.normalize(b);return fs.readFileSync(b,c?void 0:"utf8")},x=b=>{b=v(b,!0);b.buffer||(b=new Uint8Array(b));return b},w=(b,c,e)=>{D();b=z.normalize(b);fs.readFile(b,function(d,f){d?e(d):c(f.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),
process.on("unhandledRejection",function(b){throw b;}),a.inspect=function(){return"[Emscripten Module object]"};else if(ha||p)p?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),_scriptDir&&(q=_scriptDir),0!==q.indexOf("blob:")?q=q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):q="",v=b=>{var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},p&&(x=b=>{var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";
c.send(null);return new Uint8Array(c.response)}),w=(b,c,e)=>{var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)};a.print||console.log.bind(console);var F=a.printErr||console.warn.bind(console);Object.assign(a,ca);ca=null;var ia=0,G;a.wasmBinary&&(G=a.wasmBinary);var noExitRuntime=a.noExitRuntime||!0;"object"!=typeof WebAssembly&&H("no native wasm support detected");
var I,ja=!1,ka,la;function ma(){var b=I.buffer;ka=b;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAP32=new Int32Array(b);a.HEAPU8=la=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=new Float32Array(b);a.HEAPF64=new Float64Array(b)}var na,oa=[],pa=[],qa=[];function ra(){var b=a.preRun.shift();oa.unshift(b)}var L=0,sa=null,M=null;a.preloadedImages={};a.preloadedAudios={};
function H(b){if(a.onAbort)a.onAbort(b);b="Aborted("+b+")";F(b);ja=!0;b=new WebAssembly.RuntimeError(b+". Build with -s ASSERTIONS=1 for more info.");n(b);throw b;}function ta(){return N.startsWith("data:application/octet-stream;base64,")}var N;N="ogv-decoder-video-vp9-wasm.wasm";if(!ta()){var ua=N;N=a.locateFile?a.locateFile(ua,q):q+ua}function va(){var b=N;try{if(b==N&&G)return new Uint8Array(G);if(x)return x(b);throw"both async and sync fetching of the wasm failed";}catch(c){H(c)}}
function wa(){if(!G&&(ha||p)){if("function"==typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+N+"'";return b.arrayBuffer()}).catch(function(){return va()});if(w)return new Promise(function(b,c){w(N,function(e){b(new Uint8Array(e))},c)})}return Promise.resolve().then(function(){return va()})}
function xa(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var e=c.D;"number"==typeof e?void 0===c.B?O(e)():O(e)(c.B):e(void 0===c.B?null:c.B)}}}var P=[];function O(b){var c=P[b];c||(b>=P.length&&(P.length=b+1),P[b]=c=na.get(b));return c}
var Ra={k:function(){throw Infinity;},m:function(b,c,e){la.copyWithin(b,c,c+e)},l:function(b){var c=la.length;b>>>=0;if(2147483648<b)return!1;for(var e=1;4>=e;e*=2){var d=c*(1+.2/e);d=Math.min(d,b+100663296);var f=Math;d=Math.max(b,d);f=f.min.call(f,2147483648,d+(65536-d%65536)%65536);a:{try{I.grow(f-ka.byteLength+65535>>>16);ma();var g=1;break a}catch(h){}g=void 0}if(g)return!0}return!1},a:function(){return ia},d:Ja,f:Ka,i:La,g:Ma,e:Na,c:Oa,j:Pa,h:Qa,n:function(b,c,e,d,f,g,h,l,r,t,u,J,Q,R,da,ea){function fa(E,
k,A,ya,za,Aa,Ta,Ua,S){E.set(new Uint8Array(Va,k,A*ya));var B,y;for(B=y=0;B<Aa;B++,y+=A)for(k=0;k<A;k++)E[y+k]=S;for(;B<Aa+Ua;B++,y+=A){for(k=0;k<za;k++)E[y+k]=S;for(k=za+Ta;k<A;k++)E[y+k]=S}for(;B<ya;B++,y+=A)for(k=0;k<A;k++)E[y+k]=S;return E}var Va=I.buffer,m=a.videoFormat,Ba=(Q&-2)*r/h,Ca=(R&-2)*t/l,Da=u*r/h,Ea=J*t/l;u===m.cropWidth&&J===m.cropHeight&&(da=m.displayWidth,ea=m.displayHeight);for(var Fa=a.recycledFrames,C,Ga=l*c,Ha=t*d,Ia=t*g;0<Fa.length;){var K=Fa.shift();m=K.format;if(m.width===
h&&m.height===l&&m.chromaWidth===r&&m.chromaHeight===t&&m.cropLeft===Q&&m.cropTop===R&&m.cropWidth===u&&m.cropHeight===J&&m.displayWidth===da&&m.displayHeight===ea&&K.y.bytes.length===Ga&&K.u.bytes.length===Ha&&K.v.bytes.length===Ia){C=K;break}}C||(C={format:{width:h,height:l,chromaWidth:r,chromaHeight:t,cropLeft:Q,cropTop:R,cropWidth:u,cropHeight:J,displayWidth:da,displayHeight:ea},y:{bytes:new Uint8Array(Ga),stride:c},u:{bytes:new Uint8Array(Ha),stride:d},v:{bytes:new Uint8Array(Ia),stride:g}});
fa(C.y.bytes,b,c,l,Q,R,u,J,0);fa(C.u.bytes,e,d,t,Ba,Ca,Da,Ea,128);fa(C.v.bytes,f,g,t,Ba,Ca,Da,Ea,128);a.frameBuffer=C},b:function(b){ia=b}};
(function(){function b(f){a.asm=f.exports;I=a.asm.o;ma();na=a.asm.v;pa.unshift(a.asm.p);L--;a.monitorRunDependencies&&a.monitorRunDependencies(L);0==L&&(null!==sa&&(clearInterval(sa),sa=null),M&&(f=M,M=null,f()))}function c(f){b(f.instance)}function e(f){return wa().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(f,function(g){F("failed to asynchronously prepare wasm: "+g);H(g)})}var d={a:Ra};L++;a.monitorRunDependencies&&a.monitorRunDependencies(L);if(a.instantiateWasm)try{return a.instantiateWasm(d,
b)}catch(f){return F("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return G||"function"!=typeof WebAssembly.instantiateStreaming||ta()||N.startsWith("file://")||"function"!=typeof fetch?e(c):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(c,function(g){F("wasm streaming compile failed: "+g);F("falling back to ArrayBuffer instantiation");return e(c)})})})().catch(n);return{}})();
a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.p).apply(null,arguments)};a._ogv_video_decoder_init=function(){return(a._ogv_video_decoder_init=a.asm.q).apply(null,arguments)};a._ogv_video_decoder_async=function(){return(a._ogv_video_decoder_async=a.asm.r).apply(null,arguments)};a._ogv_video_decoder_destroy=function(){return(a._ogv_video_decoder_destroy=a.asm.s).apply(null,arguments)};
a._ogv_video_decoder_process_header=function(){return(a._ogv_video_decoder_process_header=a.asm.t).apply(null,arguments)};a._ogv_video_decoder_process_frame=function(){return(a._ogv_video_decoder_process_frame=a.asm.u).apply(null,arguments)};a._malloc=function(){return(a._malloc=a.asm.w).apply(null,arguments)};a._free=function(){return(a._free=a.asm.x).apply(null,arguments)};
var T=a._setThrew=function(){return(T=a._setThrew=a.asm.y).apply(null,arguments)},U=a.stackSave=function(){return(U=a.stackSave=a.asm.z).apply(null,arguments)},V=a.stackRestore=function(){return(V=a.stackRestore=a.asm.A).apply(null,arguments)};function La(b,c,e,d,f){var g=U();try{return O(b)(c,e,d,f)}catch(h){V(g);if(h!==h+0)throw h;T(1,0)}}function Oa(b,c,e,d,f){var g=U();try{O(b)(c,e,d,f)}catch(h){V(g);if(h!==h+0)throw h;T(1,0)}}
function Qa(b,c,e,d,f,g,h,l,r){var t=U();try{O(b)(c,e,d,f,g,h,l,r)}catch(u){V(t);if(u!==u+0)throw u;T(1,0)}}function Ma(b,c,e,d,f,g){var h=U();try{return O(b)(c,e,d,f,g)}catch(l){V(h);if(l!==l+0)throw l;T(1,0)}}function Ka(b,c,e,d){var f=U();try{return O(b)(c,e,d)}catch(g){V(f);if(g!==g+0)throw g;T(1,0)}}function Pa(b,c,e,d,f,g,h){var l=U();try{O(b)(c,e,d,f,g,h)}catch(r){V(l);if(r!==r+0)throw r;T(1,0)}}function Ja(b,c,e){var d=U();try{return O(b)(c,e)}catch(f){V(d);if(f!==f+0)throw f;T(1,0)}}
function Na(b,c){var e=U();try{O(b)(c)}catch(d){V(e);if(d!==d+0)throw d;T(1,0)}}var W;M=function Sa(){W||Wa();W||(M=Sa)};
function Wa(){function b(){if(!W&&(W=!0,a.calledRun=!0,!ja)){xa(pa);aa(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();qa.unshift(c)}xa(qa)}}if(!(0<L)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)ra();xa(oa);0<L||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}a.run=Wa;
if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();Wa();var X,Xa,Y;"undefined"===typeof performance||"undefined"===typeof performance.now?Y=Date.now:Y=performance.now.bind(performance);function Z(b){var c=Y();b=b();a.cpuTime+=Y()-c;return b}a.loadedMetadata=!!ba.videoFormat;a.videoFormat=ba.videoFormat||null;a.frameBuffer=null;a.cpuTime=0;Object.defineProperty(a,"processing",{get:function(){return!1}});
a.init=function(b){Z(function(){a._ogv_video_decoder_init()});b()};a.processHeader=function(b,c){var e=Z(function(){var d=b.byteLength;X&&Xa>=d||(X&&a._free(X),Xa=d,X=a._malloc(Xa));var f=X;(new Uint8Array(I.buffer,f,d)).set(new Uint8Array(b));return a._ogv_video_decoder_process_header(f,d)});c(e)};a.C=[];
a.processFrame=function(b,c){function e(l){a._free(g);c(l)}var d=a._ogv_video_decoder_async(),f=b.byteLength,g=a._malloc(f);d&&a.C.push(e);var h=Z(function(){(new Uint8Array(I.buffer,g,f)).set(new Uint8Array(b));return a._ogv_video_decoder_process_frame(g,f)});d||e(h)};a.close=function(){};a.sync=function(){a._ogv_video_decoder_async()&&(a.C.push(function(){}),Z(function(){a._ogv_video_decoder_process_frame(0,0)}))};a.recycledFrames=[];
a.recycleFrame=function(b){var c=a.recycledFrames;c.push(b);16<c.length&&c.shift()};


  return OGVDecoderVideoVP9W.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDecoderVideoVP9W;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return OGVDecoderVideoVP9W; });
else if (typeof exports === 'object')
  exports["OGVDecoderVideoVP9W"] = OGVDecoderVideoVP9W;
