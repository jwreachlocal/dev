/*! jQuery v1.8.3 jquery.com | jquery.org/license */

(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window); 
/*! jQuery Cookie Plugin v1.3 https://github.com/carhartl/jquery-cookie */
(function(e,h,j){function k(b){return b}function l(b){return decodeURIComponent(b.replace(m," "))}var m=/\+/g,d=e.cookie=function(b,c,a){if(c!==j){a=e.extend({},d.defaults,a);null===c&&(a.expires=-1);if("number"===typeof a.expires){var f=a.expires,g=a.expires=new Date;g.setDate(g.getDate()+f)}c=d.json?JSON.stringify(c):String(c);return h.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}c=d.raw?k:l;a=h.cookie.split("; ");f=0;for(g=a.length;f<g;f++){var i=a[f].split("=");if(c(i.shift())===b)return b=c(i.join("=")),d.json?JSON.parse(b):b}return null};d.defaults={};e.removeCookie=function(b,c){return null!==e.cookie(b)?(e.cookie(b,null,c),!0):!1}})(jQuery,document);
/*! jQuery Deparam Plugin https://raw.github.com/cowboy/jquery-bbq/v1.2.1/jquery.ba-bbq.js */
(function(h){h.deparam=function(i,j){var d={},k={"true":!0,"false":!1,"null":null},l=decodeURIComponent;h.each(i.replace(/\+/g," ").split("&"),function(i,m){var a=m.split("="),c=l(a[0]),g=d,f=0,b=c.split("]["),e=b.length-1;/\[/.test(b[0])&&/\]$/.test(b[e])?(b[e]=b[e].replace(/\]$/,""),b=b.shift().split("[").concat(b),e=b.length-1):e=0;if(2===a.length)if(a=l(a[1]),j&&(a=a&&!isNaN(a)?+a:"undefined"===a?void 0:void 0!==k[a]?k[a]:a),e)for(;f<=e;f++)c=""===b[f]?g.length:b[f],g=g[c]=f<e?g[c]||(b[f+1]&&isNaN(b[f+1])?{}:[]):a;else h.isArray(d[c])?d[c].push(a):d[c]=void 0!==d[c]?[d[c],a]:a;else c&&(d[c]=j?void 0:"")});return d}})(jQuery);
/*! jQuery Form Plugin http://malsup.github.com/jquery.form.js */
(function(c){function u(a){var e=a.data;a.isDefaultPrevented()||(a.preventDefault(),c(this).ajaxSubmit(e))}function t(a){var e=a.target,g=c(e);if(!g.is(":submit,input:image")){e=g.closest(":submit");if(0===e.length)return;e=e[0]}var b=this;b.clk=e;"image"==e.type&&(void 0!==a.offsetX?(b.clk_x=a.offsetX,b.clk_y=a.offsetY):"function"==typeof c.fn.offset?(g=g.offset(),b.clk_x=a.pageX-g.left,b.clk_y=a.pageY-g.top):(b.clk_x=a.pageX-e.offsetLeft,b.clk_y=a.pageY-e.offsetTop));setTimeout(function(){b.clk=b.clk_x=b.clk_y=null},100)}function p(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}var A,B;A=void 0!==c("<input type='file'/>").get(0).files;B=void 0!==window.FormData;c.fn.ajaxSubmit=function(a){function e(b){function e(){function a(){try{var b=(q.contentWindow?q.contentWindow.document:q.contentDocument?q.contentDocument:q.document).readyState;p("state = "+b);b&&"uninitialized"==b.toLowerCase()&&setTimeout(a,50)}catch(c){p("Server abort: ",c," (",c.name,")"),j(C),t&&clearTimeout(t),t=void 0}}var b=k.attr("target"),h=k.attr("action");f.setAttribute("target",m);g||f.setAttribute("method","POST");h!=d.url&&f.setAttribute("action",d.url);!d.skipEncodingOverride&&(!g||/post/i.test(g))&&k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});d.timeout&&(t=setTimeout(function(){u=!0;j(y)},d.timeout));var l=[];try{if(d.extraData)for(var i in d.extraData)d.extraData.hasOwnProperty(i)&&(c.isPlainObject(d.extraData[i])&&d.extraData[i].hasOwnProperty("name")&&d.extraData[i].hasOwnProperty("value")?l.push(c('<input type="hidden" name="'+d.extraData[i].name+'">').attr("value",d.extraData[i].value).appendTo(f)[0]):l.push(c('<input type="hidden" name="'+i+'">').attr("value",d.extraData[i]).appendTo(f)[0]));d.iframeTarget||(w.appendTo("body"),q.attachEvent?q.attachEvent("onload",j):q.addEventListener("load",j,!1));setTimeout(a,15);f.submit()}finally{f.setAttribute("action",h),b?f.setAttribute("target",b):k.removeAttr("target"),c(l).remove()}}function j(a){if(!h.aborted&&!B){try{r=q.contentWindow?q.contentWindow.document:q.contentDocument?q.contentDocument:q.document}catch(b){p("cannot access response document: ",b),a=C}if(a===y&&h)h.abort("timeout"),v.reject(h,"timeout");else if(a==C&&h)h.abort("server abort"),v.reject(h,"error","server abort");else if(r&&r.location.href!=d.iframeSrc||u){q.detachEvent?q.detachEvent("onload",j):q.removeEventListener("load",j,!1);var a="success",e;try{if(u)throw"timeout";var f="xml"==d.dataType||r.XMLDocument||c.isXMLDoc(r);p("isXml="+f);if(!f&&(window.opera&&(null===r.body||!r.body.innerHTML))&&--A){p("requeing onLoad callback, DOM not available");setTimeout(j,250);return}var g=r.body?r.body:r.documentElement;h.responseText=g?g.innerHTML:null;h.responseXML=r.XMLDocument?r.XMLDocument:r;f&&(d.dataType="xml");h.getResponseHeader=function(a){return{"content-type":d.dataType}[a]};g&&(h.status=Number(g.getAttribute("status"))||h.status,h.statusText=g.getAttribute("statusText")||h.statusText);var i=(d.dataType||"").toLowerCase(),k=/(json|script|text)/.test(i);if(k||d.textarea){var m=r.getElementsByTagName("textarea")[0];if(m)h.responseText=m.value,h.status=Number(m.getAttribute("status"))||h.status,h.statusText=m.getAttribute("statusText")||h.statusText;else if(k){var n=r.getElementsByTagName("pre")[0],D=r.getElementsByTagName("body")[0];n?h.responseText=n.textContent?n.textContent:n.innerText:D&&(h.responseText=D.textContent?D.textContent:D.innerText)}}else"xml"==i&&(!h.responseXML&&h.responseText)&&(h.responseXML=E(h.responseText));try{var f=h,g=d,s=f.getResponseHeader("content-type")||"",F="xml"===i||!i&&0<=s.indexOf("xml"),x=F?f.responseXML:f.responseText;F&&"parsererror"===x.documentElement.nodeName&&c.error&&c.error("parsererror");g&&g.dataFilter&&(x=g.dataFilter(x,i));"string"===typeof x&&("json"===i||!i&&0<=s.indexOf("json")?x=H(x):("script"===i||!i&&0<=s.indexOf("javascript"))&&c.globalEval(x));z=x}catch(I){a="parsererror",h.error=e=I||a}}catch(G){p("error caught: ",G),a="error",h.error=e=G||a}h.aborted&&(p("upload aborted"),a=null);h.status&&(a=200<=h.status&&300>h.status||304===h.status?"success":"error");"success"===a?(d.success&&d.success.call(d.context,z,"success",h),v.resolve(h.responseText,"success",h),l&&c.event.trigger("ajaxSuccess",[h,d])):a&&(void 0===e&&(e=h.statusText),d.error&&d.error.call(d.context,h,a,e),v.reject(h,"error",e),l&&c.event.trigger("ajaxError",[h,d,e]));l&&c.event.trigger("ajaxComplete",[h,d]);l&&!--c.active&&c.event.trigger("ajaxStop");d.complete&&d.complete.call(d.context,h,a);B=!0;d.timeout&&clearTimeout(t);setTimeout(function(){d.iframeTarget||w.remove();h.responseXML=null},100)}}}var f=k[0],i,d,l,m,w,q,h,s,u,t;s=!!c.fn.prop;var v=c.Deferred();if(c(":input[name=submit],:input[id=submit]",f).length)return alert('Error: Form elements must not have name or id of "submit".'),v.reject(),v;if(b)for(i=0;i<n.length;i++)b=c(n[i]),s?b.prop("disabled",!1):b.removeAttr("disabled");d=c.extend(!0,{},c.ajaxSettings,a);d.context=d.context||d;m="jqFormIO"+(new Date).getTime();d.iframeTarget?(w=c(d.iframeTarget),(b=w.attr("name"))?m=b:w.attr("name",m)):(w=c('<iframe name="'+m+'" src="'+d.iframeSrc+'" />'),w.css({position:"absolute",top:"-1000px",left:"-1000px"}));q=w[0];h={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var b="timeout"===a?"timeout":"aborted";p("aborting upload... "+b);this.aborted=1;if(q.contentWindow.document.execCommand)try{q.contentWindow.document.execCommand("Stop")}catch(e){}w.attr("src",d.iframeSrc);h.error=b;d.error&&d.error.call(d.context,h,b,a);l&&c.event.trigger("ajaxError",[h,d,b]);d.complete&&d.complete.call(d.context,h,b)}};(l=d.global)&&0===c.active++&&c.event.trigger("ajaxStart");l&&c.event.trigger("ajaxSend",[h,d]);if(d.beforeSend&&!1===d.beforeSend.call(d.context,h,d))return d.global&&c.active--,v.reject(),v;if(h.aborted)return v.reject(),v;if(s=f.clk)if((b=s.name)&&!s.disabled)d.extraData=d.extraData||{},d.extraData[b]=s.value,"image"==s.type&&(d.extraData[b+".x"]=f.clk_x,d.extraData[b+".y"]=f.clk_y);var y=1,C=2;s=c("meta[name=csrf-token]").attr("content");if((b=c("meta[name=csrf-param]").attr("content"))&&s)d.extraData=d.extraData||{},d.extraData[b]=s;d.forceSync?e():setTimeout(e,10);var z,r,A=50,B,E=c.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},H=c.parseJSON||function(a){return window.eval("("+a+")")};return v}if(!this.length)return p("ajaxSubmit: skipping submit process - no element selected"),this;var g,b,k=this;"function"==typeof a&&(a={success:a});g=this.attr("method");b=this.attr("action");(b=(b="string"===typeof b?c.trim(b):"")||window.location.href||"")&&(b=(b.match(/^([^#]+)/)||[])[1]);a=c.extend(!0,{url:b,success:c.ajaxSettings.success,type:g||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);b={};this.trigger("form-pre-serialize",[this,a,b]);if(b.veto)return p("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return p("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var f=a.traditional;void 0===f&&(f=c.ajaxSettings.traditional);var n=[],j,l=this.formToArray(a.semantic,n);a.data&&(a.extraData=a.data,j=c.param(a.data,f));if(a.beforeSubmit&&!1===a.beforeSubmit(l,this,a))return p("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[l,this,a,b]);if(b.veto)return p("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;b=c.param(l,f);j&&(b=b?b+"&"+j:j);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+b,a.data=null):a.data=b;var i=[];a.resetForm&&i.push(function(){k.resetForm()});a.clearForm&&i.push(function(){k.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var C=a.success||function(){};i.push(function(b){var e=a.replaceTarget?"replaceWith":"html";c(a.target)[e](b).each(C,arguments)})}else a.success&&i.push(a.success);a.success=function(b,c,e){for(var g=a.context||this,f=0,d=i.length;f<d;f++)i[f].apply(g,[b,c,e||k,k])};j=0<c("input:file:enabled[value]",this).length;b="multipart/form-data"==k.attr("enctype")||"multipart/form-data"==k.attr("encoding");f=A&&B;p("fileAPI :"+f);var y;if(!1!==a.iframe&&(a.iframe||(j||b)&&!f))a.closeKeepAlive?c.get(a.closeKeepAlive,function(){y=e(l)}):y=e(l);else if((j||b)&&f){var u=new FormData;for(j=0;j<l.length;j++)u.append(l[j].name,l[j].value);if(a.extraData){j=c.param(a.extraData).split("&");b=j.length;var f={},z,t;for(z=0;z<b;z++)t=j[z].split("="),f[decodeURIComponent(t[0])]=decodeURIComponent(t[1]);for(var m in f)f.hasOwnProperty(m)&&u.append(m,f[m])}a.data=null;m=c.extend(!0,{},c.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:g||"POST"});a.uploadProgress&&(m.xhr=function(){var b=jQuery.ajaxSettings.xhr();b.upload&&(b.upload.onprogress=function(b){var c=0,e=b.loaded||b.position,f=b.total;b.lengthComputable&&(c=Math.ceil(100*(e/f)));a.uploadProgress(b,e,f,c)});return b});m.data=null;var E=m.beforeSend;m.beforeSend=function(a,b){b.data=u;E&&E.call(this,a,b)};y=c.ajax(m)}else y=c.ajax(a);k.removeData("jqxhr").data("jqxhr",y);for(m=0;m<n.length;m++)n[m]=null;this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&c.isFunction(c.fn.on);if(!a.delegation&&0===this.length){var e=this.selector,g=this.context;if(!c.isReady&&e)return p("DOM not ready, queuing ajaxForm"),c(function(){c(e,g).ajaxForm(a)}),this;p("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return a.delegation?(c(document).off("submit.form-plugin",this.selector,u).off("click.form-plugin",this.selector,t).on("submit.form-plugin",this.selector,a,u).on("click.form-plugin",this.selector,a,t),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,u).bind("click.form-plugin",a,t)};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a,e){var g=[];if(0===this.length)return g;var b=this[0],k=a?b.getElementsByTagName("*"):b.elements;if(!k)return g;var f,n,j,l,i,p;f=0;for(p=k.length;f<p;f++)if(i=k[f],j=i.name)if(a&&b.clk&&"image"==i.type)!i.disabled&&b.clk==i&&(g.push({name:j,value:c(i).val(),type:i.type}),g.push({name:j+".x",value:b.clk_x},{name:j+".y",value:b.clk_y}));else if((l=c.fieldValue(i,!0))&&l.constructor==Array){e&&e.push(i);n=0;for(i=l.length;n<i;n++)g.push({name:j,value:l[n]})}else if(A&&"file"==i.type&&!i.disabled)if(e&&e.push(i),l=i.files,l.length)for(n=0;n<l.length;n++)g.push({name:j,value:l[n],type:i.type});else g.push({name:j,value:"",type:i.type});else null!==l&&"undefined"!=typeof l&&(e&&e.push(i),g.push({name:j,value:l,type:i.type,required:i.required}));if(!a&&b.clk&&(k=c(b.clk),f=k[0],(j=f.name)&&!f.disabled&&"image"==f.type))g.push({name:j,value:k.val()}),g.push({name:j+".x",value:b.clk_x},{name:j+".y",value:b.clk_y});return g};c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};c.fn.fieldSerialize=function(a){var e=[];this.each(function(){var g=this.name;if(g){var b=c.fieldValue(this,a);if(b&&b.constructor==Array)for(var k=0,f=b.length;k<f;k++)e.push({name:g,value:b[k]});else null!==b&&"undefined"!=typeof b&&e.push({name:this.name,value:b})}});return c.param(e)};c.fn.fieldValue=function(a){for(var e=[],g=0,b=this.length;g<b;g++){var k=c.fieldValue(this[g],a);null===k||("undefined"==typeof k||k.constructor==Array&&!k.length)||(k.constructor==Array?c.merge(e,k):e.push(k))}return e};c.fieldValue=function(a,e){var g=a.name,b=a.type,k=a.tagName.toLowerCase();void 0===e&&(e=!0);if(e&&(!g||a.disabled||"reset"==b||"button"==b||("checkbox"==b||"radio"==b)&&!a.checked||("submit"==b||"image"==b)&&a.form&&a.form.clk!=a||"select"==k&&-1==a.selectedIndex))return null;if("select"==k){var f=a.selectedIndex;if(0>f)return null;for(var g=[],k=a.options,n=(b="select-one"==b)?f+1:k.length,f=b?f:0;f<n;f++){var j=k[f];if(j.selected){var l=j.value;l||(l=j.attributes&&j.attributes.value&&!j.attributes.value.specified?j.text:j.value);if(b)return l;g.push(l)}}return g}return c(a).val()};c.fn.clearForm=function(a){return this.each(function(){c("input,select,textarea",this).clearFields(a)})};c.fn.clearFields=c.fn.clearInputs=function(a){var e=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var g=this.type,b=this.tagName.toLowerCase();if(e.test(g)||"textarea"==b)this.value="";else if("checkbox"==g||"radio"==g)this.checked=!1;else if("select"==b)this.selectedIndex=-1;else if(a&&(!0===a&&/hidden/.test(g)||"string"==typeof a&&c(this).is(a)))this.value=""})};c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var e=this.type;"checkbox"==e||"radio"==e?this.checked=a:"option"==this.tagName.toLowerCase()&&(e=c(this).parent("select"),a&&(e[0]&&"select-one"==e[0].type)&&e.find("option").selected(!1),this.selected=a)})};c.fn.ajaxSubmit.debug=!1})(jQuery);
/**** Assign jQuery to window.RL_JQUERY ****/
window.rl_jquery = jQuery.noConflict(true);
window.RL_PROXY_DOMAINS = ["avxtrk.com", "ddcsem.com", "ezlcl.com", "reachlocal.com", "reachlocal.net", "rtrk.com", "rtrk.com.au", "rtrk1.com", "rtrk2.com", "rtrk5.com", "search-dealer.com", "smrtlnk.com", "trvlclick.com"]; // Hard proxy base domains.
;
window.RL_ROBOTS = ["googlebot\/","Googlebot-Mobile","Googlebot-Image","bingbot","slurp","java","wget","curl","Commons-HttpClient","Python-urllib","libwww","httpunit","nutch","phpcrawl","msnbot","Adidxbot","blekkobot","teoma","ia_archiver","GingerCrawler","webmon ","httrack","webcrawler","FAST-WebCrawler","FAST Enterprise Crawler","convera","biglotron","grub.org","UsineNouvelleCrawler","antibot","netresearchserver","speedy","fluffy","jyxobot","bibnum.bnf","findlink","exabot","gigabot","msrbot","seekbot","ngbot","panscient","yacybot","AISearchBot","IOI","ips-agent","tagoobot","MJ12bot","dotbot","woriobot","yanga","buzzbot","mlbot","yandex","purebot","Linguee Bot","Voyager","CyberPatrol","voilabot","baiduspider","citeseerxbot","spbot","twengabot","postrank","turnitinbot","scribdbot","page2rss","sitebot","linkdex","ezooms","dotbot","mail\\.ru","discobot","heritrix","findthatfile","europarchive.org","NerdByNature.Bot","sistrix crawler","ahrefsbot","Aboundex","domaincrawler","wbsearchbot","summify","ccbot","edisterbot","seznambot","ec2linkfinder","gslfbot","aihitbot","intelium_bot","facebookexternalhit","yeti","RetrevoPageAnalyzer","lb-spider","sogou","lssbot","careerbot","wotbox","wocbot","ichiro","DuckDuckBot","lssrocketcrawler","drupact","webcompanycrawler","acoonbot","openindexspider","gnam gnam spider","web-archive-net.com.bot","backlinkcrawler","coccoc"];
/**
 * Loader.
 *
 * Load and process rl_config.js, rl_modules.js, rl_lib.js, and rl_jquery files.  Depending on rl_config.js, load products and modules.
 *
 * rl_config.js, rl_modules.js, and rl_lib.js override via c, m, and l params.
 * Ex. <script src="mms.js?c=http://www.example.com/rl_config.js&m=http://www.example.com/rl_modules.js&l=http://www.example.com/rl_lib.js"></script>
 *
 * environment override via e param.
 * Valid values are P (prod), QA (QA), T (integrated testing), D (dev), S (sandbox).
 * Ex. <script src="mms.js?e=T"></script>
 *
 * The init method for products can be overriden to not autoexec via autorun param.
 * Valid value is "0".
 * Ex. <script src="mms.js?autorun=0"></script>
 */

(function(window, $) {
  "use strict";

  var RL_LOADER = function() {

    // Default configuration settings.
    var ACCESS_LIST_EXCLUSIONS = ["capture", "email", "remarketing"],
        FILES = {
          "P":[
            {name: "rl_config", file: "/rl_config.js", namespace: "rl_widget_cfg", async: false, fileType: "js"},
            {name: "mms_css", file: "/mms/mms.css", namespace: null, async: null, fileType: "css"}
          ],
          "QA":[
            {name: "rl_config", file: "/rl_config.js", namespace: "rl_widget_cfg", async: false, fileType: "js"},
            {name: "mms_css", file: "/mms/mms.css", namespace: null, async: null, fileType: "css"}
          ],
          "T":[
            {name: "rl_config", file: "/static/rl_config.js", namespace: "rl_widget_cfg", async: false, fileType: "js"},
            {name: "mms_css", file: "/assets/mms.css", namespace: null, async: null, fileType: "css"}
          ],
          "D":[
            {name: "rl_config", file: "/static/rl_config.js", namespace: "rl_widget_cfg", async: false, fileType: "js"},
            {name: "mms_css", file: "/assets/mms.css", namespace: null, async: null, fileType: "css"}
          ],
          "S":[
            {name: "rl_config", file: "/static/rl_config.js", namespace: "rl_widget_cfg", async: false, fileType: "js"},
            {name: "mms_css", file: "/assets/mms.css", namespace: null, async: null, fileType: "css"}
          ]
        },  // Required files.
        SERVERS = {
          "P": {
            "CDN": {"host": "static.rlcdn.net", "basePath": "/capture_static"},
            "Capture": {"host": "rlets.com"}
          },
          "QA":{
            "CDN": {"host": "qweb351.dyn.wh.reachlocal.com", "basePath": "/capture_static"},
            "Capture": {"host": "q-capture-qa-vs-wh-gbl-capture-http.wh.reachlocal.com"}
          },
          "T":{
            "CDN": {"host": "cdn.rlets-test.com:9887", "basePath": ""},
            "Capture": {"host": "rlets-test.com:9887"}
          },
          "D":{
            "CDN": {"host": "dweb351.dyn.wh.reachlocal.com", "basePath": "/capture_static"},
            "Capture": {"host": "d-capture-dev-vs-wh-gbl-capture-http.wh.reachlocal.com"}
          },
          "S":{
            "CDN": {"host": "cdn.rlets-test.com:3000", "basePath": ""},
            "Capture": {"host": "rlets-test.com:3000"}
          }
        };  // Servers.

    /**
     * Initialize loader.
     *
     * Get user settings if applicable and start loading dependent files.
     *
     * .init()
     */
    this.init = function() {
      var self = this;

      // Check browser compatibility.
      if (!self.constructor.isBrowserCompatible()) {
        return;
      }

      // Load files.
      self.constructor.loadFiles(self.config().files);

      // Wait for files to be loaded and then process files.
      var processFiles = function() {
        self.processFiles.call(self);
      };
      self.waitForAllFilesToBeLoaded(processFiles);
    };

    /**
     * Gets the configuration settings.
     *
     * Retrieves the default settings and override specific settings with user specified settings if applicable.
     *
     * .config()
     *
     * RETURNS: key-value mapping object
     */
    this.config = function() {
      var siteId = (window.rl_id || window.rl_siteid || window.rlets_siteid || "").replace(/-/g, ""),
          settings = this.constructor.parseUserSettings(this.constructor.getUserSettings()),
          environment = SERVERS[settings.e] ? settings.e : "P",
          servers = SERVERS[environment],
          files = FILES[environment],
          autorun = settings.autorun == 0 ? 0 : 1,
          captureHost = servers.Capture.host,
          cdnHost = servers.CDN.host,
          cdnBasePath = servers.CDN.basePath;

      for (var i = 0, length = files.length; i < length; i++) {
        var file = files[i];

        switch (file.name) {
          case "rl_config":
            file.url = this.constructor.getSiteConfigFileUrl({
              userDefinedUrl: settings.c,
              siteId: siteId,
              cdnHost: cdnHost,
              cdnBasePath: cdnBasePath,
              file: file.file
            });
            break;

          case "mms_css":
            file.url = ["//", cdnHost, cdnBasePath, file.file].join("");
            break;

          default:
            continue;
        }
      }

      return {
        siteId: siteId,
        environment: environment,
        autorun: autorun,
        cdnHost: cdnHost,
        cdnBasePath: cdnBasePath,
        captureHost: captureHost,
        files: files
      };
    };

    /**
     * Initialize/load products.
     *
     * .loadProducts()
     */
    this.loadProducts = function() {
      var products = window.rl_widget_cfg.products || [],
          productAccessList = this.constructor.loadProductAccessList();

      if (this.config().autorun === 0) {
        return;
      }

      for (var i = 0, length = products.length; i < length; i++) {
        var product = products[i],
            productObj = window.RL[product.name.toUpperCase()];

        if (product.enabled === false) {
          continue;
        }

        if (ACCESS_LIST_EXCLUSIONS.indexOf(product.name) === -1) {
          // Access list check
          if (productAccessList.blacklist === true && productAccessList.products.indexOf(product.name) > -1) {
            continue;
          }

          if (productAccessList.whitelist === true && productAccessList.products.indexOf(product.name) === -1) {
            continue;
          }
        }

        productObj.init();
        productObj.isLoaded = true;
      }
    };
  };

  /**
   * Waits for all the defined files to be loaded.
   *
   * Waits for all the files to be loaded and executes the callback function.
   *
   * .waitForAllFilesToBeLoaded(callbackFn)
   * callbackFn - function - callback function
   */
  RL_LOADER.prototype.waitForAllFilesToBeLoaded = function(callbackFn) {
    var self = this;

    var checkFn = function() {
      return self.constructor.areFilesLoaded(self.config().files);
    };

    this.constructor.waitFor(checkFn, callbackFn);
  };

  /**
   * Process core files after they are loaded.
   *
   * After all the core files are loaded, load modules and products, and set up the JS configuration settings.
   *
   * .processFiles()
   */
  RL_LOADER.prototype.processFiles = function() {
    var captureJsConfig = window.rl_widget_cfg,   // Capture JS (site) config from CDN.
        config = this.config(),
        RL = window.RL;

    // Update domains and paths.
    captureJsConfig.env = config.environment;
    captureJsConfig.config.domains.cdn = config.cdnHost;
    captureJsConfig.config.domains.capture = config.captureHost;
    captureJsConfig.config.cdnBasePath = config.cdnBasePath;

    RL.lib.isOptedOut();

    // Confirm window.RL object has been created and initialized.
    if (!RL._init()) {
      return false;
    }

    // Load modules.
    RL._modules.init();

    // Load products.
    this.loadProducts();
  };

  /**
   * Checks if browser is compatible.
   *
   * Checks if browser supports JSON and postMessage().
   *
   * .isBrowserCompatible()
   *
   * RETURNS: boolean
   */
  RL_LOADER.isBrowserCompatible = function() {
    if (window.JSON && window.postMessage) {
      // Browser must support JSON and postMessage().
      return true;
    }
    return false;
  };

  /**
   * Retrieves user settings from the url querystring.
   *
   * .getUserSettings()
   *
   * RETURNS: string
   */
  RL_LOADER.getUserSettings = function() {
    var scriptEs = document.getElementsByTagName("script");

    // Get the last mms.js script tag.
    for (var i = scriptEs.length; --i > -1;) {
      var src = scriptEs[i].src || "",
          pos;

      // Check if script is mms.js.
      if (src.indexOf("mms.js") < 0) {
        // Not a mms.js script.
        continue;
      }

      // Extract querystring.
      pos = src.indexOf("?");
      return pos > -1 ? src.slice(pos + 1) : "";
    }
  };

  /**
   * Parses user settings from the querystring into a key-value mapping object.
   *
   * .parseUserSettings(settings)
   * settings - string - user settings
   *
   * RETURNS: key-value mapping object
   */
  RL_LOADER.parseUserSettings = function(settings) {
    var data = {};

    if (typeof settings === "string") {
      settings = settings.split("&");
    } else {
      return data;
    }

    // Get each key-value pair.
    for (var i = 0, length = settings.length; i < length; i++) {
      var keyValue = settings[i].split("="),
          key = keyValue[0] || "",
          value = keyValue[1] || "";

      if (key.length === 0) {
        // Skip empty key.
        continue;
      }

      data[decodeURIComponent(key)] = decodeURIComponent(value);
    }

    return data;
  };

  /**
   * Generates the site JS config file url.
   *
   * If an user-defined url exist, then that is used.
   * Otherwise, generate the file path from the site id if site id is valid.
   * If site id is not valid, then use the default file path.
   *
   * .getSiteConfigFileUrl(settings)
   * settings - object - key-value mapping
   *
   * settings object:
   * userDefinedUrl - string - user-defined url from the querystring
   * siteId - string - site id
   * cdnHost - string - cdn host
   * cdnBasePath - string - cdn base path
   * file - string - file
   *
   * RETURNS: string
   */
  RL_LOADER.getSiteConfigFileUrl = function(settings) {
    var userDefinedUrl = typeof settings.userDefinedUrl === "string" ? settings.userDefinedUrl : "",
        siteId,
        cdnHost,
        cdnBasePath,
        file,
        url;

    if (userDefinedUrl.length > 2) {
      return userDefinedUrl;
    }

    siteId = typeof settings.siteId === "string" ? settings.siteId : "";
    cdnHost = typeof settings.cdnHost === "string" ? settings.cdnHost : "";
    cdnBasePath = typeof settings.cdnBasePath === "string" ? settings.cdnBasePath : "";
    file = typeof settings.file === "string" ? settings.file : "";
    url = this.getSiteConfigFilePath(siteId);

    return ["//", url.length > 0 ? [cdnHost, url].join("") : [cdnHost, cdnBasePath, file].join("")].join("");
  };

  /**
   * Generates the site JS config file path based on the site id.
   *
   * If the site id is a 32 character UUID, then the file path will be
   * /capture_configs/{3-char}/{3-char}/{3-char}/{23-char}.js else returns empty string.
   *
   * .getSiteConfigFilePath(siteId)
   * siteId - string - site id
   *
   * RETURNS: string
   */
  RL_LOADER.getSiteConfigFilePath = function(siteId) {
    var filePath = [];

    if (siteId.length !== 32) {
      // Invalid site id.
      return "";
    }

    // Valid site id.
    filePath.push("/capture_configs");
    filePath.push(siteId.substr(0, 3));
    filePath.push(siteId.substr(3, 3));
    filePath.push(siteId.substr(6, 3));
    filePath.push([siteId.substr(9), "js"].join("."));
    filePath = filePath.join("/");

    return filePath;
  };

  /**
   * Loads core JS & CSS files.
   *
   * The list of files to load is generated by .config() and is stored in the .config().files.
   *
   * .loadFiles(files)
   * files - object - array of key-value mappings
   *
   * files object:
   * url - string - url address
   * async - boolean - load JS aysnc or not
   * fileType - string - "js" or "css"
   */
  RL_LOADER.loadFiles = function(files) {
    files = files || [];

    for (var i = 0, length = files.length; i < length; i++) {
      var file = files[i];

      if (file.fileType === 'js') {
        this.loadJs(file.url, file.async);
      } else if (file.fileType === 'css') {
        this.loadCss(file.url);
      }
    }
  };

  /**
   * Load JS file.
   *
   * .loadJs(url, async)
   * url - string - JS file url
   * async - boolean - load file async or not
   */
  RL_LOADER.loadJs = function(url, async) {
    // Create script tag element.
    var scriptE = document.createElement("script");
    scriptE.src = url;
    scriptE.async = async === true ? true : false;

    // Append script tag to HEAD element.
    document.getElementsByTagName("head")[0].appendChild(scriptE);
  };

  /**
   * Load CSS file.
   *
   * .loadCss(url)
   * url - string - CSS file url
   */
  RL_LOADER.loadCss = function(url) {
    // Create link tag element.
    var linkE = document.createElement("link");
    linkE.rel = "stylesheet";
    linkE.type = "text/css";
    linkE.href = url;
    linkE.media = "all";

    // Append to HEAD element.
    document.getElementsByTagName("head")[0].appendChild(linkE);
  };

  /**
   * Wait for checkFn to return true and then execute foundFn.
   *
   * .waitFor(checkFn, foundFn)
   * checkFn - function - check for function
   * foundFn - function - found function
   */
  RL_LOADER.waitFor = function(checkFn, foundFn) {
    var checkRetryCounter = 0,
        checkRetryId;

    var checkIntervalFn = function() {
      if (++checkRetryCounter > 35) {
        clearInterval(checkRetryId);
        return;
      }

      if (checkFn()) {
        clearInterval(checkRetryId);
        foundFn();
        return;
      }
    };

    checkRetryId = setInterval(checkIntervalFn, 100);
  };

  /**
   * Check if core files are loaded.
   *
   * .areFilesLoaded(files)
   * files - object - array of key-value mappings
   *
   * files object:
   * namespace - string - object name
   *
   * RETURNS: boolean
   */
  RL_LOADER.areFilesLoaded = function(files) {
    files = files || [];

    for (var i = 0, length = files.length; i < length; i++) {
      var namespace = files[i].namespace;

      if (namespace && !window[namespace]) {
        return false;
      }
    }

    return true;
  };

  /**
   * Load the list of products that are enabled/disabled.
   *
   * .loadProductAccessList()
   */
  RL_LOADER.loadProductAccessList = function() {
    var captureJsConfig = window.rl_widget_cfg,         // Capture JS (site) config from CDN.
        blacklist = captureJsConfig.blacklist,
        whitelist = captureJsConfig.whitelist,
        hostname = window.location.hostname,
        pathname = window.location.pathname,
        permissiveAccessList = {blacklist: false, whitelist: false, products: []},
        restrictiveAccessList = {blacklist: false, whitelist: true, products: []},
        isBlacklist = false,
        isWhitelist = false,
        productAccessList;

    if (blacklist && blacklist.enabled === true) {
      isBlacklist = true;
      productAccessList = blacklist;
    } else if (whitelist && whitelist.enabled === true) {
      isWhitelist = true;
      productAccessList = whitelist;
    } else {
      return permissiveAccessList;
    }

    if (typeof productAccessList.items[hostname] !== "undefined") {
      var hostRules = productAccessList.items[hostname];
      for (var i = 0; i < hostRules.length; i++) {
        if (pathname.match("^"+hostRules[i].path)) {
          return {blacklist: isBlacklist, whitelist: isWhitelist, products: hostRules[i].products};
        }
      }
      return isBlacklist ? permissiveAccessList : restrictiveAccessList;
    }

    return permissiveAccessList;
  };


  window.RL = {_loader: new RL_LOADER(), jq: $};
  if (!window.rl_no_load) {
    window.RL._loader.init();
  }

})(window, window.rl_jquery);
(function(window, RL) {
  "use strict";

  RL._init = function() {
    var cfg = window.rl_widget_cfg;

    // Verify config object.
    if (!cfg || !cfg.config || !cfg.products) {
      return false;
    }

    this.config = (function(cfg) {
      // Clean up config data.
      var c = JSON.parse(JSON.stringify(cfg)),
        p = {};

      // Process product configs.
      for (var i = -1, length = cfg.products.length; ++i < length;) {
        var product = cfg.products[i];
        p[product.name] = product.config;
      }
      c.products = p;

      // Remove module configs.
      c.modules = undefined;

      // Clean up internal domains.
      c.config.domains.internal = (function(domains) {
        for (var i = -1, length = domains.length; ++i < length;) {
          domains[i] = domains[i].replace(/ /g, "");
        }
        return domains;
      })(c.config.domains.internal);

      return c;
    })(cfg);

    this.config.config = (function(c) {
      // Populate config object with basic page information.
      c.pageUri = (function(location) {
        return {
          hash: location.hash.length > 1 ? location.hash.slice(1) : "",
          hostname: location.hostname,
          href: location.href,
          pathname: location.pathname,
          protocol: location.protocol,
          search: location.search.length > 1 ? location.search.slice(1) : ""
        };
      })(window.location);
      c.pageTitle = window.document.title;
      c.referrer = RL.lib.Referrer.referrer();
      c.scorpion = RL.jq("body").attr("data-source") === "c77d130cdb614c8497a9b22757aa6382" ? 1 : 0;
      c.dotNet = (function($) {
        var $formsE = $("form");
        if ($formsE.length === 1) {
          if (($formsE.attr("onsubmit") || "").indexOf("WebForm_OnSubmit()") > -1 || typeof __doPostBack === "function" || ($("input#__EVENTTARGET").length === 1 && $("input#__EVENTARGUMENT").length === 1 && $("input#__VIEWSTATE").length === 1)) {
            return 1;
          }
        }
        return 0;
      })(RL.jq);
      return c;
    })(this.config.config);

    return this;
  };

})(window, window.RL);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions:
 * - String.random()
 * - String#toLowerSnakeCase()
 */

(function(RL) {
  "use strict";

  /**
   * Generate random string.
   *
   * Code is mostly based on https://gist.github.com/2368164.
   * String length is defaulted to 9 characters if the length param is not set.
   *
   * String.random(length)
   * length - int - (optional) string length
   *
   * Return: string
   */
  String.random = function(length) {
    var m = typeof length === "number" && length >= 0 ? length : 9,
        s = "",
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i=0; i < m; i++) {
      s += r.charAt(Math.floor(Math.random() * r.length));
    }

    return s;
  };

  /**
   * Convert a string into a lower case with snake case format.
   *
   * Ex. "Foo Bar".toLowerSnakeCase() => "foo_bar"
   *
   * .toLowerSnakeCase()
   * Return: string
   */
  String.prototype.toLowerSnakeCase = function() {
    return this.trim().toLowerCase().replace(/ /gi, "_");
  };

  // Create RL.lib namespace.
  RL.lib = {};
})(window.RL);

/**
 * Functions not defined in IE8.
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
    'use strict';
    if (this == null) {
      throw new TypeError();
    }
    var n, k, t = Object(this),
        len = t.length >>> 0;

    if (len === 0) {
      return -1;
    }
    n = 0;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) { // shortcut for verifying if it's NaN
        n = 0;
      } else if (n != 0 && n != Infinity && n != -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }
    if (n >= len) {
      return -1;
    }
    for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}
;
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .createStorage(basePath)
 * - .isOptedOut(complete, settings)
 * - .loadCss()
 * - .loadJs()
 * - .post(url, data, options)
 */

(function(window, RL, $) {
  "use strict";

  /**
   * Create a RL.lib.Storage object.
   *
   * .createStorage(basePath)
   * basePath - string - url address of where the set, get, remove web storage services
   *
   * Return: RL.lib.Storage
   */
  RL.lib.createStorage = function(basePath) {
    // Sanity check.
    if (typeof basePath !== "string" || basePath.length < 1) {
      return undefined;
    }

    return new this.Storage({basePath: basePath});
  };

  /**
   * Check if the tracking opt-out cookie is set.
   *
   * If the opt-out is set, the cookie value is passed to the complete callback function; otherwise, the boolean
   * false is passed.  The cookie is cached for the duration specified in the settings parameter or the default
   * is 30 seconds.
   *
   * .isOptedOut(complete, settings)
   * complete - function - function called after the cookie is retrieved
   * settings - object - key-value mapping
   *
   * complete function:
   * cookie - string/boolean - cookie value or false
   *
   * settings object:
   * forced - boolean - force a check rather than fetch from cache
   * duration - int - cache duration in seconds (15 seconds default)
   */
  RL.lib.isOptedOut = (function(LIB) {
    var key = "RlocalOptOut",
        value,
        expiry = new Date(2000, 0, 1),
        API;

    API = function(complete, settings) {
      var currentDate = new Date(),
          settings = settings || {},
          forced = settings.forced === true ? true : false,
          duration = (typeof settings.duration === "number" && settings.duration > 0) ? settings.duration : 15,
          storage = LIB.createStorage(["//", window.rl_widget_cfg.config.domains.capture, "/static"].join(""));

      if (forced === false && expiry >= currentDate) {
        // Read from cache.
        if (typeof complete === "function") {
          complete(value);
        }
        return;
      }

      var callback = function(data) {
        // Cache cookie value.
        value = data[key] == 1 ? true : false;
        expiry = currentDate;
        expiry.setSeconds(currentDate.getSeconds() + duration);

        if (typeof complete === "function") {
          complete(value);
        }
        return;
      };

      storage.getItem(key, callback);
    };

    if (window.jasmine && window.jasmine.SnapdragonConsoleReporter) {
      // Needed for Jasmine tests.
      API.clearCache = function() {
        value = undefined;
        expiry = new Date(2000, 0, 1);
      };
    }

    return API;
  })(RL.lib);

  /**
   * Load external CSS file.
   *
   * .loadCss(url)
   * url - string - file path
   *
   * Return: RL.lib
   */
  RL.lib.loadCss = function(url) {
    // Create link tag element.
    var linkE = document.createElement("link");
    linkE.rel = "stylesheet";
    linkE.type = "text/css";
    linkE.href = url;
    linkE.media = "all";

    // Append to HEAD element.
    document.getElementsByTagName("head")[0].appendChild(linkE);

    return this;
  };

  /**
   * Load external JavaScript file asynchronously.
   *
   * .loadJs(url, complete)
   * url - string - file path
   * complete - function - callback function when script has been loaded
   *
   * Return: RL.lib
   */
  RL.lib.loadJs = function(url, complete) {
    // Create script tag element.
    var scriptE = document.createElement("script");
    scriptE.src = url;
    scriptE.async = true;

    if (typeof complete === "function") {
      // Attach onload callback function to script tag.
      if (scriptE.addEventListener) {
        // Firefox, Chrome, and IE >= 9.
        $(scriptE).bind("load", function($e) {
          $(this).unbind($e);
          complete.call(this);
        });
      } else {
        // IE < 9.
        $(scriptE).bind("readystatechange", function($e) {
          if (this.readyState === "complete" || this.readyState === "loaded") {
            $(this).unbind($e);
            complete.call(this);
          }
        });
      }
    }

    // Append to HEAD element.
    document.getElementsByTagName("head")[0].appendChild(scriptE);

    return this;
  };

  /**
   * Perform a form post.
   *
   * Create a form and an iframe, and perform a post to the iframe.
   *
   * The complete function is called when the iframe the form is posting to is loaded;
   * in short, the load event is triggered.  This function will be called even if the
   * iframe loads a 404 page.
   *
   * The success function is called when the iframe sends a message via postMessage()
   * to the parent window, and the message is accepted by the handler.  The message must
   * be a JSON string with the following format: {id: "", data: {}}.  The id value is the
   * value passed in the form field "rl_eid".
   *
   * .post(uri, data, options)
   * uri - string - URL where request is sent
   * data - object - key-value mapping
   * options - object - (optional) key-value mapping
   *
   * options object:
   * id - string - form ID
   * complete - function - function to be called when the request finishes
   * success - function - function to be called if the request succeeds
   *
   * success function:
   * - object - data returned from post destination
   */
  RL.lib.post = (function(LIB) {
    var API = function(url, data, options) {
      var iframeEId,
          formEId,
          iframeE,
          formE;

      if (typeof url !== "string" || url.length === 0) {
        // Endpoint url must be valid.
        return false;
      }

      if (!$.isPlainObject(options)) {
        options = {};
      }
      if (typeof options.id !== "string" || options.id.length === 0) {
        options.id = String.random(10);
      }
      if ($.isPlainObject(data)) {
        data.rl_eid = options.id;
      } else {
        data = {rl_eid: options.id};
      }

      iframeEId = ["rl-iframe", options.id].join("-");
      formEId = ["rl-form", options.id].join("-");

      // Create an iframe element node.
      iframeE = LIB.Node.createIframe({
        id: iframeEId,
        name: iframeEId.replace(/-/g, "_"),
        parentNode: LIB.Node.createRoot(),
        complete: {
          handler: $.proxy(API._iframeLoadHandler, API),
          data: {
            success: options.success,
            complete: options.complete,
            nodesToRemove: [iframeEId, formEId]
          }
        }
      });

      // Create form element node.
      formE = LIB.Node.createForm({
        id: formEId,
        method: "post",
        action: url,
        target: iframeE.name,
        parentNode: iframeE.parentNode,
        data: data
      });

      if (typeof options.success === "function") {
        LIB.WindowMessageListener.bind($.proxy(API._iframeWindowMessageHandler, API), options.id, {success: options.success, nodesToRemove: [iframeEId, formEId]});
      }

      $(formE).submit();
    };

    /**
     * Helper methods.
     *
     * Instead of keeping helper methods private, they are exposed to the public so
     * unit/integration tests can be performed.
     */

    /**
     * .post._iframeLoadHandler(event, data)
     */
    API._iframeLoadHandler = function(event, data) {
      if (typeof data.success !== "function") {
        // Clean up nodes from DOM after iframe loads since there is no success function.
        this._removeNodes(data.nodesToRemove);
      }

      if (typeof data.complete === "function") {
        // Call complete function since iframe has loaded.
        data.complete();
      }
    };

    /**
     * .post._iframeWindowMessageHandler(wmlData, data, origin)
     */
    API._iframeWindowMessageHandler = function(wmlData, data, origin) {
      // Remove bound event since it should never be used again.
      LIB.WindowMessageListener.unbind(wmlData.WML_EVENT_ID);

      // Clean up nodes from DOM.
      this._removeNodes(wmlData.nodesToRemove);

      // Return data to success function.
      wmlData.success(data);
    };

    /**
     * .post._removeNodes(nodes)
     */
    API._removeNodes = function(nodes) {
      var nodesE = [];

      if (!$.isArray(nodes)) {
        nodes = [];
      }

      for (var i = 0, length = nodes.length; i < length; i++) {
        // Get element node and cache it in an array.
        var nodeE = document.getElementById(nodes[i]);
        if (nodeE) {
          nodesE.push(nodeE);
        }
      }

      LIB.Node.remove(nodesE, 100);
    };

    return API;
  })(RL.lib);
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Campaign.checkDynamicUrl(url)
 * - .Campaign.checkUrl(url)
 * - .Campaign.getFromCookie()
 * - .Campaign.getFromQuerystring()
 */

(function(window, RL, $) {
  "use strict";

  RL.lib.Campaign = (function(LIB) {
    var CAMPAIGN_DATA = {"scid": "", "cid": "", "tc": "", "rl_key": "", "kw": "", "pub_cr_id": ""},
        DOMAINS = JSON.parse(JSON.stringify(window.RL_PROXY_DOMAINS || []));

    return {
      /**
       * Check if url is dynamically proxied.
       *
       * Call .getHostname() to get the hostname then the hostname is checked to see if it starts
       * with "url" and contains at least 1 pair of "--" and return a boolean.
       *
       * Campaign.checkDynamicUrl(url)
       * url - string - url value
       *
       * Return: boolean
       */
      checkDynamicUrl: function(url) {
        var hostname = LIB.Url.getHostname(url);
        return (hostname.indexOf("url") === 0 && hostname.indexOf("--") > -1) ? true : false;
      },

      /**
       * Check if url is hard proxied.
       *
       * Call .getBaseDomain() to get the base domain then the base domain is compared to a list of valid
       * proxy base domains.  Return a boolean.
       *
       * Campaign.checkUrl(url)
       * url - string - url value
       *
       * Return: boolean
       */
      checkUrl: function(url) {
        var baseDomain = LIB.Url.getBaseDomain(url);
        return DOMAINS.indexOf(baseDomain) > -1 ? true : false;
      },

      /**
       * Retrieve PROXY cookie.
       *
       * Read PROXY cookie "RLocalUID" and return an object or null if none exist.
       *
       * Campaign.getFromCookie()
       *
       * Return: object/null
       */
      getFromCookie: function() {
        var cookie = $.deparam($.cookie("RlocalUID") || "");
        return (cookie.scid && cookie.cid && cookie.tc) ? $.extend(CAMPAIGN_DATA, cookie) : null;
      },

      /**
       * Retrieve campaign data from querystring.
       *
       * Read campaign data from querystring and return an object or null if none exist.
       * Will use "querystring" param instead of location.search if param is used.
       *
       * Campaign.getFromQuerystring(querystring)
       * querystring - string - (optional) url querystring value
       *
       * Return: object/null
       */
      getFromQuerystring: (function() {
        var querystring = (function(querystring) {
          querystring = $.deparam(querystring.replace("?", ""));
          return (!querystring.scid || !querystring.cid || !querystring.tc || !querystring.rl_key) ? null : $.extend(CAMPAIGN_DATA, querystring);
        })(location.search);

        return function() {
          return querystring;
        }
      })()
    };
  })(RL.lib);
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Node.createForm(settings)
 * - .Node.createIframe(settings)
 * - .Node.createRoot()
 * - .Node.remove(nodes, delay)
 */

(function(window, RL, $) {
  "use strict";

  RL.lib.Node = {
    /**
     * Create a simple FORM element node.
     *
     * Create a FORM element node with no submit button child element node.  If the settings.data is set,
     * hidden INPUT element node(s) are created and appended to the FORM element node.
     *
     * The settings.method param is defaulted to "post" if it is not set or set to an invalid value.
     *
     * The settings.data param allows for string, number, null, and array of string, number, and null values.
     * Ex. {foo: "bar", sky: 1, earth: null, water: ["foo", 1, null]}
     *
     * Node.createForm(settings)
     * settings - object - (optional) key-value mapping
     *
     * settings object:
     * id - string - element id
     * method - string - HTTP method ("get" or "post")
     * action - string - destination address of where to send the data
     * target - string - where to display the response
     * parentNode - object - parent node to attach to
     * data - object - key-value mapping
     *
     * Return: FORM element node.
     */
    createForm: function(settings) {
      var formE = document.createElement("form"),
          docFragment = document.createDocumentFragment();

      // Initialize settings param.
      settings = $.isPlainObject(settings) ? settings : {};

      if (typeof settings.id === "string" && settings.id !== "") {
        formE.id = settings.id;
      }
      if (typeof settings.action === "string" && settings.action !== "") {
        formE.action = settings.action;
      }
      if (typeof settings.target === "string" && settings.target !== "") {
        formE.target = settings.target;
      }
      formE.method = typeof settings.method === "string" && settings.method === "get" ? "get" : "post";

      if ($.isPlainObject(settings.data)) {
        // Create FORM INPUT element nodes.
        for (var key in settings.data) {
          var value = settings.data[key];

          if (typeof value === "string" || typeof value === "number" || value === null) {
            docFragment.appendChild($("<input>", {name: key, value: value, type: "hidden"}).get(0));
          } else if ($.type(value) === "array") {
            var keyArrayName = [key, "[]"].join("");
            for (var i = value.length; --i >= 0;) {
              // Create an INPUT element node for each value array element.
              var valueArrayElement = value[i];
              if (typeof valueArrayElement === "string" || typeof valueArrayElement === "number" || valueArrayElement === null) {
                docFragment.appendChild($("<input>", {name: keyArrayName, value: valueArrayElement, type: "hidden"}).get(0));
              }
            }
          }
        }
        if (docFragment.hasChildNodes()) {
          formE.appendChild(docFragment);
        }
      }

      if (typeof settings.parentNode === "object" && settings.parentNode.nodeType === 1) {
        settings.parentNode.appendChild(formE);
      }

      return formE;
    },

    /**
     * Create a simple IFRAME element node.
     *
     * The settings.complete can be a function or a key-value map that contains the handler function and a data key-value map.
     *
     * If settings.complete is a function, then that is executed when the iframe "load" event is triggered.  The event object
     * is passed to settings.complete as the 1st argument.
     *
     * If settings.complete is a key-value map and settings.complete.handler is a function, it is executed when
     * the iframe "load" event is triggered.  If settings.complete.data is a key-value map, then that is passed to
     * settings.complete.handler as the 2nd argument.  The 1st argument is the event object.
     *
     * For both settings.complete and settings.complete.handler functions, "this" is set as the IFRAME element node.
     *
     * Node.createIframe(settings)
     * settings - object - (optional) key-value mapping
     *
     * settings object:
     * id - string - (optional) element id
     * complete - function/object - (optional) load event handler or key-value map that contains the load event handler and data
     * name - string - (optional) element name
     * parentNode - object - (optional) parent node to attach to
     * src - string - (optional) address of the document to embed
     *
     * complete object:
     * handler - function - the handler to execute
     * data - object - (optional) key-value map passed to the handler
     *
     * complete/handler function:
     * object - the event object
     * object - settings.complete.data
     *
     * Return: IFRAME element node.
     */
    createIframe: (function() {
      var API = function(settings) {
        var $iframeE,
            completeHandler,
            completeData;

        // Initialize settings param.
        settings = $.isPlainObject(settings) ? settings : {};
        if (typeof settings.complete === "function") {
          completeHandler = settings.complete;
        } else if ($.isPlainObject(settings.complete)) {
          if (typeof settings.complete.handler === "function") {
            completeHandler = settings.complete.handler;
          }
          if ($.isPlainObject(settings.complete.data)) {
            completeData = settings.complete.data;
          }
        }
        if (typeof settings.id !== "string") {
          settings.id = "";
        }
        if (typeof settings.name !== "string") {
          settings.name = "";
        }
        if (typeof settings.src !== "string" || settings.src.length < 1) {
          settings.src = "about:blank";
        }

        $iframeE = $("<iframe>").prop({
            id: settings.id,
            name: settings.name,
            src: settings.src
          });

        if (typeof settings.parentNode === "object" && settings.parentNode.nodeType === 1) {
          $iframeE.appendTo(settings.parentNode);
        }

        if (completeHandler) {
          $iframeE.on("load", {complete: completeHandler, data: completeData}, API._iframeLoadHandler);
        }

        return $iframeE.get(0);
      };

      /**
       * Helper methods.
       *
       * Instead of keeping helper methods private, they are exposed to the public so
       * unit/integration tests can be performed.
       */

      /**
       * Node.createIframe._iframeLoadHandler($event)
       */
      API._iframeLoadHandler = function($event) {
        $event.data.complete.call(this, $event.originalEvent, $event.data.data);
      };

      return API;
    })(),

    /**
     * Create "rl-root" hidden DIV element node.
     *
     * Node.createRoot()
     *
     * Return: DIV element node.
     */
    createRoot: function() {
      var $rootE = $("#rl-root");

      if ($rootE.length === 0) {
        // Create .
        $rootE = $("<div>", {id: "rl-root", css: {left: "-9999px", top: "-9999px", display: "none", property: "absolute"}})
          .appendTo($("body"));
      }

      return $rootE.get(0);
    },

    /**
     * Remove element nodes asynchronously.
     *
     * Remove an array of element nodes asynchronously.
     *
     * Node.remove(nodes, delay)
     * nodes - array - array of element nodes
     * delay - int - a number greater than 0 (in milliseconds)
     */
    remove: function(nodes, delay) {
      if (!$.isArray(nodes)) {
        nodes = [];
      }
      if (!delay || delay < 1) {
        delay = 1;
      }

      var removeNodesFn = function() {
        $(nodes).remove();
      };

      setTimeout(removeNodesFn, delay);
    }
  };
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Url.getBaseDomain(url)
 * - .Url.getHostname(url)
 * - .Url.getQuerystring(url, key)
 */

(function(window, RL, $) {
  "use strict";

  RL.lib.Url = {
    /**
     * Get the base domain of an url.
     *
     * Call .getHostname() to get the hostname then the hostname is used to parse out
     * the base domain.
     *
     * Url.getBaseDomain(url)
     * url - string - url value
     *
     * Return: string
     */
    getBaseDomain: function(url) {
      var hostname = this.getHostname(url),
          hostnameArr = hostname.split(".");

      if (hostnameArr.length > 2) {
        return [hostnameArr[hostnameArr.length - 2], hostnameArr[hostnameArr.length - 1]].join(".");
      }
      return hostname;
    },

    /**
     * Get the hostname of an url.
     *
     * Url.getHostname(url)
     * url - string - url value
     *
     * Return: string
     */
    getHostname: function(url) {
      return (typeof url !== "string" || url === "") ? "" : url.replace(/^(https?:)?\/\/([^\/?#:]+)([\/?#:]+[^\/?#:]*)*/gi, "$2");
    },

    /**
     * Parse out the querystring portion of an url.
     *
     * Querystring is deserializes into a key-value mapping.  If key param is set, only those values are returned.  If key param is
     * set to an empty string, null, or undefined, all values are returned.
     *
     * Require jQuery deparam() plugin.
     *
     * Url.getQuerystring(url, key)
     * url - string - url value
     * key - string/array - (optional) key/keys to look for
     *
     * Return: object
     */
    getQuerystring: function(url, key) {
      var querystring = {},
          response = {};

      // Sanity check.
      if (typeof url !== "string" || url.length < 1) {
        return response;
      }

      // Deserialize string into a key-value mapping.
      querystring = $.deparam(url.replace(/[^?#]*(\?([^?#]*))?(#[^?#]*)?/gi, "$2"));

      switch ($.type(key)) {
        case "string":
          if (key.length > 0) {
            response[key] = querystring[key] || "";
          } else {
            response = querystring;
          }
          break;

        case "array":
          for (var i = -1, length = key.length; ++i < length;) {
            var keyItem = key[i];
            if (typeof keyItem === "string") {
              response[keyItem] = querystring[keyItem] || "";
            }
          }
          break;

        default:
          response = querystring;
      }

      return response;
    }
  };
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Referrer.referrer()
 * - .Referrer.hiliteCookieReferrer()
 * - .Referrer.redirectReferrer()
 * - .Referrer.domReferrer()
 */

(function(window, RL, $) {
  "use strict";

  RL.lib.Referrer = (function(LIB) {
    return {
      referrer: function() {
        var _LIB_ = LIB;
        return _LIB_.Referrer.hiliteCookieReferrer() || _LIB_.Referrer.redirectReferrer() || _LIB_.Referrer.domReferrer();
      },

      hiliteCookieReferrer: function() {
        var c = $.cookie("RlocalHilite");
        return c !== null ? $.deparam(c).se_refer : null;
      },

      redirectReferrer: function() {
        return LIB.Url.getQuerystring(window.location.search).redirect_referrer;
      },

      domReferrer: function() {
        return document.referrer;
      }
    };
  })(RL.lib);
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Storage(settings)
 * - .Storage.getItem(key, success)
 * - .Storage.removeItem(key, success)
 * - .Storage.setItem(key, success)
 * - .Storage.sendRequest(url, settings)
 * - .Storage.url(filePath, data, settings)
 */

(function(window, RL, $) {
  "use strict";

  /**
   * A class to store data in a remote web storage.
   */
  RL.lib.Storage = (function(LIB) {
    /**
     * Create a Storage object.
     *
     * Storage(settings)
     * settings - object - key-value mapping
     *
     * settings object:
     * basePath - string - url address of where the set, get, remove web storage services
     */
    var Storage = function(settings) {
      settings = $.isPlainObject(settings) ? settings : {};

      this.settings = function(key) {
        if (typeof key === "string" && key !== "") {
          return settings[key];
        }
        return settings;
      };
    };

    /**
     * Create the endpoint url that contains the payload.
     *
     * This is function is used internally by .setItem(), .getItem(), and .removeItem().
     *
     * .url(filePath, data, settings)
     * filePath - string - path of endpoint
     * data - array - data array
     * settings - object - (optional) key-value mappings
     *
     * settings object:
     * eventId - string - event id used for window "message" event
     */
    Storage.prototype.url = function(filePath, data, settings) {
      var eventId,
          payload;

      if (typeof filePath !== "string" || filePath.length < 1) {
        // Invalid filePath parameter.
        return false;
      }

      if ($.type(data) !== "array" || data.length < 1) {
        // Invalid data parameter.
        return false;
      }

      settings = $.isPlainObject(settings) ? settings : {};

      eventId = typeof settings.eventId === "string" ? settings.eventId : "";

      payload = data;

      return [this.settings("basePath"), filePath, "?rl_eid=", eventId, "&rl_ws=", encodeURIComponent(JSON.stringify(payload))].join("");
    };

    /**
     * Send request to endpoint.
     *
     * This is function is used internally by .setItem(), .getItem(), and .removeItem().
     *
     * .sendRequest(url, data, settings)
     * url - string - endpoint url
     * settings - object - (optional) key-value mappings
     *
     * settings object:
     * eventId - string - event id used for window "message" event
     * success - function - function to be called if the request succeeds
     *
     * success function:
     * data - string - retrieved data
     */
    Storage.prototype.sendRequest = function (url, settings) {
      var _LIB_ = LIB;    // LIB alias.
      var messageHandler,
          iframeCompleteCallback;

      if (typeof url !== "string" || url.length < 1) {
        // Invalid url parameter.
        return false;
      }

      settings = $.isPlainObject(settings) ? settings : {};

      if (typeof settings.eventId === "string" && settings.eventId.length > 0) {
        messageHandler = function(data, response, origin) {
          // Security check.
          if (origin.search(/(\.)?(rlmms|rlets|rlcdn|reachlocal)(-(qa|dev|test|sb))?\.|(lvh\.me)|file:\/\/|jasmine|localhost|127\.0\.0\.1/gi) < 0) {
            // Ignore messages not from RL domains.
            return;
          }

          _LIB_.WindowMessageListener.unbind(settings.eventId);

          if (typeof settings.success === "function") {
            // Return data to callback function.
            settings.success(response);
          }
        };
        _LIB_.WindowMessageListener.bind(messageHandler, settings.eventId);
      }

      iframeCompleteCallback = function() {
        var $iframeE = $(this);
        var removeIframe = function() {
          $iframeE.remove();
        };
        setTimeout(removeIframe, 100);
      };

      return _LIB_.Node.createIframe({
        parentNode: _LIB_.Node.createRoot(),
        src: url,
        complete: iframeCompleteCallback
      });
    };

    /**
     * Retrieve arbitrary data from storage.
     *
     * .getItem(key, success)
     * key - string/array - key or array of keys
     * success - function - function to be called if the request succeeds
     *
     * success function:
     * data - string - retrieved data
     */
    Storage.prototype.getItem = function(key, success) {
      var FILE_PATH = "/getItem.html",
          EVENT_ID = ["getItem", String.random(7)].join("-"),
          payload = [],
          url;

      if ($.type(key) === "string") {
        payload.push(key);
      } else if ($.type(key) === "array") {
        for (var i = -1, length = key.length; ++i < length;) {
          var keyItem = key[i];
          if (typeof keyItem === "string") {
            payload.push(keyItem);
          }
        }
      }

      url = this.url(FILE_PATH, payload, {eventId: EVENT_ID});
      if (url === false) {
        return false;
      }

      this.sendRequest(url, {success: success, eventId: EVENT_ID});
    };

    /**
     * Remove arbitrary data from storage.
     *
     * .removeItem(key, success)
     * key - string/array - key or array of keys
     * success - function - function to be called if the request succeeds
     *
     * success function:
     * data - string - retrieved data
     */
    Storage.prototype.removeItem = function(key, success) {
      var FILE_PATH = "/removeItem.html",
          EVENT_ID = ["removeItem", String.random(7)].join("-"),
          payload = [],
          url;

      if ($.type(key) === "string") {
        payload.push(key);
      } else if ($.type(key) === "array") {
        for (var i = -1, length = key.length; ++i < length;) {
          var keyItem = key[i];
          if (typeof keyItem === "string") {
            payload.push(keyItem);
          }
        }
      }

      url = this.url(FILE_PATH, payload, {eventId: EVENT_ID});
      if (url === false) {
        return false;
      }

      this.sendRequest(url, {success: success, eventId: EVENT_ID});
    };

    /**
     * Store arbitrary data.
     *
     * The data parameter is an array of key-value mapping objects.  Each object contains "k" (key) and "v" (value) properties
     * and an optional "e" (expires) property.  The key and value properties must be of type string, and the key property
     * value cannot be an empty string.  The expires property value must be a number or an empty string.  If the expires
     * value is set, localStorage is used when the value is a future time, or else sessionStorage is used.
     * See https://developer.mozilla.org/en-US/docs/DOM/Storage for the difference between the two.
     *
     * .setItem(data, success)
     * data - array - array of key-value mappings
     * success - function - callback
     *
     * success function:
     * data - string - retrieved data
     */
    Storage.prototype.setItem = function(data, success) {
      var FILE_PATH = "/setItem.html",
          EVENT_ID = ["setItem", String.random(7)].join("-"),
          payload = [],
          url;

      // Sanity check.
      if ($.type(data) !== "array") {
          // data must be an array.
          return false;
      }
      for (var i = -1, length = data.length; ++i < length;) {
        var datum = data[i];
        if ($.isPlainObject(datum)) {
          payload.push(datum);
        }
      }

      url = this.url(FILE_PATH, payload, {eventId: EVENT_ID});
      if (url === false) {
        return false;
      }

      this.sendRequest(url, {success: success, eventId: EVENT_ID});
    };

    return Storage;
  })(RL.lib);
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .DataQueue()
 * - .DataQueue.get(id)
 * - .DataQueue.insert(data, id)
 * - .DataQueue.remove(id)
 */

(function(window, RL, $) {
  "use strict";

  /**
   * A class that provides queueing of objects to ids.
   */
  RL.lib.DataQueue = function() {
    var queue = {},
        unbindCounter = 0;    // Number of unbind() calls.

    /**
     * Retrieve data.
     *
     * Retrieve data mapping to an id.
     *
     * .get(id)
     * id - string - unique id
     *
     * Return: object
     */
    this.get = function(id) {
      var data;

      if (id === undefined) {
        return $.extend(true, {}, queue);
      }

      return queue[id];
    };

    /**
     * Insert data.
     *
     * If an id is set, then the data is mapped to that id.  If data already exists for that id, then the
     * existing data is overwritten.  If an id is not set, then one will be generated.  In either case,
     * the id is returned.
     *
     * .insert(data, id)
     * data - object - any piece of data
     * id - string - (optional) id
     *
     * Return: string
     */
    this.insert = function(data, id) {
      if (data === undefined) {
        return false;
      }

      if (typeof id !== "string" || id.length < 1) {
        id = String.random(10);
      }

      queue[id] = data;

      return id;
    };

    /**
     * Remove data.
     *
     * Remove data mapping to an id if id exists.  If id param is not set, then all data are purged.
     * If data mapped to an id is purged, then the id is returned.  If all data are purged, then the
     * boolean true is returned.  The boolean false is returned if id is set but does not exist.
     *
     * .remove(id)
     * id - string - id
     *
     * Return: boolean/string
     */
    this.remove = function(id) {
      if (id === undefined) {
        // Remove all data.
        queue = {};
        unbindCounter = 0;

        return true;
      } else if (queue[id]) {
        // Remove mapped data.
        queue[id] = undefined;

        if (++unbindCounter > 2) {
          // Clean up queue object.
          queue = this.queue();
          unbindCounter = 0;
        }

        return id;
      }

      return false;
    };

    /**
     * Iterate through each item in the queue.
     *
     * The optional data object is passed to the callback function as the 3rd argument.
     *
     * .each(callback, data)
     * callback - function - executed on each item
     * data - object - (optional) key-value mapping
     *
     * callback function:
     * string - id for inserted data
     * object - inserted data
     * object - optional key-value mapping
     */
    this.each = function(callback, data) {
      if (typeof callback !== "function") {
        return false;
      }

      for (var i in queue) {
        var elem = queue[i];

        if (elem === undefined) {
          continue;
        }

        callback(i, elem, data);
      }
    };

    if (window.jasmine && window.jasmine.SnapdragonConsoleReporter) {
      // Need for Jasmine tests.
      this.setQueue = function(newQueue) {
        queue = newQueue;
      };
      this.getQueue = function() {
        return queue;
      };
    }
  };
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .AjaxListener.bind()
 * - .AjaxListener.queue()
 * - .AjaxListener.start()
 * - .AjaxListener.stop()
 * - .AjaxListener.unbind()
 */

(function(window, RL, $) {
  "use strict";

  RL.lib.AjaxListener = (function(LIB) {
    var originalXMLHttpRequest = {
          open: XMLHttpRequest.prototype.open,
          send: XMLHttpRequest.prototype.send
        },
        dataQueue = new LIB.DataQueue();

    return {
      /**
       * Start listening to AJAX events.
       *
       * Hijack the XMLHttpRequest object in order to intercept the .send() call event.
       * Return true if is/starts listening or else return false.
       *
       * AjaxListener.start(reset)
       * reset - boolean - purge existing queue object and recreate
       *
       * Return: boolean
       */
      start: function(reset) {
        if (!window.XMLHttpRequest) {
          // Reject browsers that do not support XMLHttpRequest.
          return false;
        }

        if (reset === true) {
          dataQueue = new LIB.DataQueue();
        }

        // Code is based on http://stackoverflow.com/questions/3596583/javascript-detect-an-ajax-event with minor modifications.
        var s_ajaxListener = new Object();
        s_ajaxListener.tempOpen = originalXMLHttpRequest.open;
        s_ajaxListener.tempSend = originalXMLHttpRequest.send;
        s_ajaxListener.callback = function () {
          var queue = dataQueue.get(),
              handlerArg = {
                method: this.method,
                url: this.url,
                payload: this.data
              };

          for (var qIndex in queue) {
            var qElem = queue[qIndex];
            handlerArg.data = qElem.data;
            qElem.handler(handlerArg);
          }
        };

        XMLHttpRequest.prototype.open = function(method, url) {
          s_ajaxListener.tempOpen.apply(this, arguments);
          s_ajaxListener.method = method;
          s_ajaxListener.url = url;
          if (method.toLowerCase() === "get") {
            var urlArr = url.split("?");
            s_ajaxListener.data = urlArr[1];
          }
        };

        XMLHttpRequest.prototype.send = function(data) {
          s_ajaxListener.tempSend.apply(this, arguments);
          if (s_ajaxListener.method.toLowerCase() === "post") {
            s_ajaxListener.data = data || "";
          }
          s_ajaxListener.callback();
        };

        return true;
      },

      /**
       * Stop listening to AJAX events.
       *
       * AjaxListener.stop()
       */
      stop: function() {
        XMLHttpRequest.prototype.open = originalXMLHttpRequest.open;
        XMLHttpRequest.prototype.send = originalXMLHttpRequest.send;
      },

      /**
       * Attach a handler to an AJAX event (e.g. XMLHttpRequest.send()).
       *
       * If binding is success, return an id or else the boolean false.
       * The data parameter accepts a key-value mapping of primitive data types.
       * The handler function parameter key-value mapping object will include the method type,
       * url, payload, and the key-values from the data parameter.
       *
       * AjaxListener.bind(handler, data)
       * handler - function - function to execute each time the event is triggered
       * data - object - (optional) key-value mapping
       *
       * handler function parameter:
       * object - (optional) key-value mapping
       *
       * Return: string/boolean
       */
      bind: function(handler, data) {
        if (typeof handler !== "function") {
          return false;
        }

        return dataQueue.insert({
          handler: handler,
          data: $.isPlainObject(data) ? JSON.parse(JSON.stringify(data)) : undefined
        });
      },

      /**
       * Return a copy of the queue.
       *
       * AjaxListener.queue()
       *
       * Return: object
       */
      queue: function() {
        return dataQueue.get();
      },

      /**
       * Remove a handler (and data).
       *
       * If id maps to a handler, remove handler and return id or else return the boolean false.
       * If id is undefined, remove all handlers.
       *
       * AjaxListener.unbind(id)
       * id - string - (optional) id
       *
       * Return: string/boolean
       */
      unbind: function(id) {
        return dataQueue.remove(id);
      }
    };
  })(RL.lib);
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .WindowMessageListener.bind(handler, id, data)
 * - .WindowMessageListener.parseEvent(event)
 * - .WindowMessageListener.queue()
 * - .WindowMessageListener.trigger(id, data, origin)
 * - .WindowMessageListener.unbind(id)
 */

(function(window, RL, $) {
  "use strict";

  RL.lib.WindowMessageListener = (function() {
    /**
     * Will automatically listen to "message" events triggered by postMessage() calls.
     * See https://developer.mozilla.org/en-US/docs/DOM/window.postMessage.
     *
     * All RL postMessage() calls must pass a JSON string for the "message" parameter.
     * The string must contain "id" and "data" keys.  The "id" key maps to a string, and the "data" key
     * maps to an object.
     * Ex. "{\"id\":\"234234\",\"data\":{\"foo\":\"bar\"}}"
     */
    var queue = {},
        unbindCounter = 0,    // Number of unbind() calls.
        API;

    API = {
      /**
       * Attach a handler to the "message" event for the window DOM object.
       *
       * If binding is success, return an unique id (user-specified id) or else the boolean false.
       *
       * When the handler is triggered, the returned-id is passed as data.WML_EVENT_ID.
       *
       * WindowMessageListener.bind(handler, data)
       * handler - function - function to execute each time the event is triggered
       * id - string - (optional) user-defined id
       * data - object - (optional) key-value mapping containing data that will be passed to the event handler
       *
       * handler function parameters:
       * object - (optional) data object from .bind()
       * object - (optional) data sent by the document that caused the event
       * string - (optional) the scheme, hostname and port of the document that caused the event
       *
       * Return: string/boolean
       */
      bind: function(handler, id, data) {
        var id;

        if (typeof handler !== "function") {
          return false;
        }

        if (typeof id !== "string" || id.length < 1) {
          id = String.random(10);
        }
        data = $.isPlainObject(data) ? $.extend({}, data) : {};
        data.WML_EVENT_ID = id;   // Make event id available to the handler.

        queue[id] = {
          handler: handler,
          data: $.isPlainObject(data) ? $.extend({}, data) : undefined
        };

        return id;
      },

      /**
       * Parse JSON string message sent by postMessage() call.
       *
       * Parse "id" and "data" key values, and return them along with the event origin value in
       * a key-value mapping object.  If those keys do not exist or the "id" key value is not a valid
       * string, then return the boolean false
       *
       * WindowMessageListener.parseEvent(event)
       * event - object - DOM event object
       *
       * Return: object
       */
      parseEvent: function(event) {
        var id,
            data,
            payload;

        if (!event) {
          return false;
        }

        try {
          payload = JSON.parse(event.data);
        } catch(err) {
          // Not a valid message.
          return false;
        }

        if ($.isPlainObject(payload)) {
          id = payload.id;
          data = payload.data;
        }

        if (typeof id !== "string" || id.length === 0) {
          // Invalid id.
          return false;
        }

        return {
          id: id,
          data: data,
          origin: event.origin
        }
      },

      /**
       * Return a copy of the queue.
       *
       * WindowMessageListener.queue()
       *
       * Return: object
       */
      queue: function() {
        return $.extend(true, {}, queue);
      },

      /**
       * Execute handler.
       *
       * If id maps to a handler, then execute the handler and return true or else return false.
       *
       * WindowMessageListener.trigger(id, data, origin)
       * id - string - unique id returned by .bind()
       * data - object - (optional) any object.
       * origin - string - (optional) the scheme, hostname and port
       *
       * Return: boolean
       */
      trigger: function(id, data, origin) {
        var wmlEvent = typeof id === "string" ? queue[id] : undefined;

        if (wmlEvent === undefined) {
          return false;
        }

        wmlEvent.handler(wmlEvent.data, data, origin);

        return true;
      },

      /**
       * Remove a previously-attached event handler for the window DOM object.
       *
       * If id maps to a handler, remove handler and return id or else return the boolean false.
       * After 10 successful unbind() calls, the queue object is cleaned up by removing keys that map to
       * the "undefined" object.
       *
       * If id is undefined, remove all handlers.
       *
       * WindowMessageListener.unbind(id)
       * id - string - (optional) unique id returned by .bind()
       *
       * Return: string/boolean
       */
      unbind: function(id) {
        if (id === undefined) {
          // Remove all handlers.
          queue = {};
          unbindCounter = 0;

          return true;
        } else if (typeof id === "string" && queue[id]) {
          // Remove mapped handler.
          queue[id] = undefined;

          if (++unbindCounter > 2) {
            // Clean up queue object.
            queue = this.queue();
            unbindCounter = 0;
          }

          return id;
        }

        return false;
      }
    };


    if (window.jasmine && window.jasmine.SnapdragonConsoleReporter) {
      // Need for Jasmine tests.
      API.setQueue = function(newQueue) {
        queue = newQueue;
      };
      API.getQueue = function() {
        return queue;
      };
    }

    // Event handler for the "message" event.
    var eventHandlerFn = function($event) {
      var eventData = API.parseEvent($event.originalEvent);

      if (eventData === false) {
        // Not a valid RL message event.
        return;
      }

      API.trigger(eventData.id, eventData.data, eventData.origin);
    };

    // Bind event handler to "message" event.
    $(window).on("message", eventHandlerFn);

    return API;
  })();
})(window, window.RL, window.rl_jquery);
/**
 * MODULES.
 */

(function(window, RL, $) {
  "use strict";

  var document = window.document,
      MODULES = {};


  MODULES = {
    init: function() {
      for (var name in this) {
        var fn = this[name];

        if (typeof fn === "function" && name !== "init") {
          fn();
        }
      }
    },

    /**
     * Create an internal message queue for events.
     *
     * Available functions in the .Events namespace:
     * - subscribe(product, event, handler, scope)
     * - dispatch(product, event, data)
     * - unsubscribe(product, name, id)
     */
    events: function() {
      var buffer = {};

      RL.Events = {
        /**
         * Subscribe to an event.
         *
         * Returns an alpha-numeric id if subscription is successful or else false.
         * The handler function should return a "false" if there is async logic.
         *
         * RL.Events.subscribe(product, event, handler, scope)
         * product - string - product name (e.g. capture)
         * event - string - event name (e.g. load, close)
         * handler - function - a function to execute each time the event is triggered
         * scope - object - (optional) scope for the handler function
         *
         * handler function:
         * data - object - (optional) key-value mapping
         * complete - function - (optional) must execute this function if exist when handler contains async logic
         */
        subscribe: function(product, event, handler, scope) {
          var id = String.random(5);

          // Sanity check.
          if (typeof product !== "string" || typeof event !== "string" || typeof handler !== "function" || product === "" || event === "") {
            // product, event, and handler params are required.
            return false;
          }

          // Store event.
          if (!buffer[product]) {
            buffer[product] = {};
          }
          if (!buffer[product][event]) {
            buffer[product][event] = [];
          }
          buffer[product][event].push({id: id, handler: handler, scope: scope});

          return id;
        },
        /**
         * Dispatch an event.
         *
         * RL.Events.dispatch(product, event, data)
         * product - string - product name (e.g. capture)
         * event - string - event name (e.g. load, close)
         * data - object - (optional) key-value mapping
         * complete - function - (optional) function to execute once subscribed queue has been dispatched
         */
        dispatch: function(product, event, data, complete) {
          var queue = (buffer[product] && buffer[product][event]) ? buffer[product][event] : [],
            asyncQueueCount = 0,
            asyncQueueCounter = 0;

          // Helper function to check if async queue has been dispatched.
          var done = typeof complete === "function" ? function() {
              if (++asyncQueueCounter >= asyncQueueCount) {
                complete();
              }
            } : undefined;

          for (var i = -1, length = queue.length; ++i < length;) {
            var q = queue[i],
              scope,
              r;

            if (q === undefined || q === null) {
              continue;
            }

            scope = q.scope;
            r = scope ? q.handler.call(scope, data, done) : q.handler(data, done);

            if (r === false) {
              // Queue contains async handler.  Increase count.
              asyncQueueCount++;
            }
          }

          if (typeof complete === "function" && asyncQueueCount === 0) {
            // Queue does not contain async handlers and has been dispatched.
            complete();
          }
        },
        /**
         * Unsubscribe from an event.
         *
         * If id is not provided, then all the handlers are removed.
         *
         * RL.Events.unsubscribe(product, name, id)
         * product - string - product name (e.g. capture)
         * event - string - event name (e.g. load, close)
         * id - string - (optional) id returned from subscribe()
         */
        unsubscribe: function(product, event, id) {
          var queue = (buffer[product] && buffer[product][event]) ? buffer[product][event] : [];

          if (typeof id === "string" && id !== "") {
            // Remove handler with specified id.
            for (var i = -1, length = queue.length; ++i < length;) {
              if (queue[i].id === id) {
                buffer[product][event].splice(i, 1);
                return;
              }
            }
            return;
          }

          if (queue.length > 0) {
            // Remove all handlers.
            buffer[product][event] = [];
          }
        }
      };

      return this;
    },

    /**
     * Stores data using web storage on a 3rd party domain.
     */
    storage: function() {
      var config = window.rl_widget_cfg;
      RL.CaptureStorage = RL.lib.createStorage(["//", config.config.domains.capture, "/static"].join(""));
      RL.CaptureSiteStorage = RL.lib.createStorage(["//", config.id, ".", config.config.domains.capture, "/static"].join(""));
      return this;
    },

    /**
     * Various functions used for tracking purposes.
     *
     * Triggers capture-web-service.sendRequest and capture-web-service.receiveResponse events.
     *
     * Interface with Capture API.
     */
    CaptureWebServices: function() {
      var self = RL,  // RL alias.
          $ = self.jq;  // jQuery alias.

      self.CaptureWS = {
        /**
         * Track initial visit.
         *
         * Will generate visitor id if none is present.  Will generate visit id and referrer type if none is present.
         *
         * RL.CaptureWS.trackVisit(data)
         * data - object - key-value pairs
         *
         * data object:
         * visitorId - string - (optional) visitor id
         */
        trackVisit: function(data, callback) {
          var URI = "/api/v1/visits",
              eventId = ["trackVisit", String.random(7)].join("-"),
              payload = $.extend(this._buildCampaignPayload(false), this._buildPayload());

          // Required params.

          payload.referrer_source = data.referrer_source;

          // Optional params.

          if (typeof data.visitorId === "string" && data.visitorId !== "") {
            payload.visitor_id = data.visitorId;
          }
          if (typeof data.visitId === "string" && data.visitId !== "") {
            payload.visit_id = data.visitId;
          }

          this._sendRequest(URI, eventId, payload, callback);
        },
        /**
         * Track formmail data.
         *
         * RL.CaptureWS.trackEmail(data)
         * data - object - key-value pairs
         *
         * data object:
         * visitId - string - visit id
         * visitorId - string - visitor id
         */
        trackEmail: function(data) {
          var URI = "/api/v1/emails",
            eventId = ["trackEmail", String.random(7)].join("-"),
            payload = $.extend(this._buildCampaignPayload(), this._buildPayload());

          // Required params.

          payload.visit_id = data.visitId;      // Visit id.
          payload.visitor_id = data.visitorId;  // Visitor id.

          // Optional params.

          // CVT-type dependent data.
          for (var p in data) {
            switch (p) {
              case "visitId":
              case "visitorId":
                break;

              default:
                payload[p] = data[p];
            }
          }

          this._sendRequest.call(this, URI, eventId, payload);
        },
        /**
         * Track form post data.
         *
         * RL.CaptureWS.trackPost(data)
         * data - object - key-value pairs
         * callback - function - (optional) callback function to execute once the response has been received
         *
         * data object:
         * visitId - string - visit id
         * visitorId - string - visitor id
         */
        trackPost: function(data, callback) {
          var URI = "/api/v1/posts",
              eventId = ["trackPost", String.random(7)].join("-"),
              requiredFields = {phone: false, email: false},
              payload = $.extend(this._buildCampaignPayload(), this._buildPayload());

          // Required params.

          payload.visit_id = data.visitId;      // Visit id.
          payload.visitor_id = data.visitorId;  // Visitor id.

          // Optional params.

          // CVT-type dependent data.
          for (var p in data) {
            switch (p) {
              case "visitId":
              case "visitorId":
                break;

              case "postbody":
                var d = $.deparam(data[p]);
                for (var k in d) {
                  var kLowerSnakeCase = k.toLowerSnakeCase(),
                      v = d[k].filterCreditCard(),              // Check for credit card numbers.
                      labels,
                      labelLowerSnakeCase;

                  if (kLowerSnakeCase.search(/(work_phone_number|mobile_phone_number|home_phone_number|phone_number|work_phone|mobile_phone|home_phone|phone)/gi) > -1 && v.length > 0) {
                    // Phone number field found.
                    requiredFields.phone = true;
                    continue;
                  }
                  if (kLowerSnakeCase.search(/(email_address|emailaddress|email)/gi) > -1 && v.length > 0) {
                    // Email address field found.
                    requiredFields.email = true;
                    continue;
                  }

                  var curFormInput = $("input[name='" + k + "']").get(0);
                  if (curFormInput) {
                    labels = $("label[for='" + curFormInput.id + "']");
                    if (labels.length > 0) {
                      labelLowerSnakeCase = labels.first().text().toLowerSnakeCase();

                      if (labelLowerSnakeCase.search(/(work_phone_number|mobile_phone_number|home_phone_number|phone_number|work_phone|mobile_phone|home_phone|phone)/gi) > -1 && v.length > 0) {
                        // Phone number field found.
                        requiredFields.phone = true;
                        d[labelLowerSnakeCase] = v;
                        continue;
                      }

                      if (labelLowerSnakeCase.search(/(email_address|emailaddress|email)/gi) > -1 && v.length > 0) {
                        // Email address field found.
                        requiredFields.email = true;
                        d[labelLowerSnakeCase] = v;
                        continue;
                      }
                    }
                  }

                  d[k] = v;
                }
                payload[p] = $.param(d);
                break;

              default:
                payload[p] = data[p];
            }
          }

          if (requiredFields.phone || requiredFields.email) {
            this._sendRequest.call(this, URI, eventId, payload, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        },
        /**
         * Track a CVT event.
         *
         * RL.CaptureWS.trackCvt(data)
         * data - object - key-value pairs
         *
         * data object:
         * cvtId - string - cvt id
         * cvtType - string/number - cvt type (e.g. 2, 3, 7, 8)
         * visitId - string - visit id
         * visitorId - string - visitor id
         */
        trackCvt: function(data) {
          var URI = "/api/v1/cvts",
              eventId = ["trackCvt", String.random(7)].join("-"),
              payload = $.extend(this._buildCampaignPayload(), this._buildPayload());

          // Required params.

          payload.src = "capture";
          payload.idpagecvt = data.cvtId;       // CVT id.
          payload.event = data.cvtType;         // CVT type.
          payload.visit_id = data.visitId;      // Visit id.
          payload.visitor_id = data.visitorId;  // Visitor id.

          // Optional params.

          // CVT-type dependent data.
          for (var p in data) {
            switch (p) {
              case "cvtId":
              case "cvtType":
              case "visitId":
              case "visitorId":
                break;

              default:
                payload[p] = data[p];
            }
          }

          this._sendRequest.call(this, URI, eventId, payload);
        },

        _sendRequest: function(url, eventId, data, callback) {
          var config = RL.config,
              url = ["//", config.id, ".", config.config.domains.capture, url].join(""),
              payload = $.extend({rl_eid: eventId}, data);

          // Send POST request.
          RL.lib.post(url, payload, {
            id: eventId,
            success: function(data) {
              if (typeof callback === "function") {
                callback(data);
              }
            }
          });

          // Dispatch event.
          RL.Events.dispatch("capture-web-service", "sendRequest", {url: url, data: payload, eventId: eventId});
        },

        _buildPayload: function() {
          var config = RL.config,
              siteConfig = config.config,
              data = {};

          data.global_master_advertiser_id = config.globalMasterAdvertiserId; // Global master advertiser id.
          data.page_name = siteConfig.pageTitle;      // Page title.
          data.fname = siteConfig.pageUri.href;       // Page url.
          data.referrer = siteConfig.referrer;        // Referrer url.

          data.debug = JSON.stringify({
            webStorage: sessionStorage.getItem("rl_debug_web_storage"),
            visitRequest: sessionStorage.getItem("rl_debug_visit_request"),
            visitResponse: sessionStorage.getItem("rl_debug_visit_response"),
            getVisitData: sessionStorage.getItem("rl_debug_get_visit_data"),
            referrerOther: sessionStorage.getItem("rl_debug_referrer_other")
          });

          return data;
        },

        _buildCampaignPayload: function(defaultToOther) {
          var config = RL.config,
              siteConfig = config.config,
              campaignData = config.campaign_data,
              campaign = siteConfig.campaign,
              platform = siteConfig.platform,
              data = {};

          defaultToOther = defaultToOther === false ? false : true;   // Default to true.

          if (campaign.isPaidCampaign === true) {
            data.scid = campaign.scid;
            data.campaign_id = [platform, campaign.cid].join("_");
            data.tc = campaign.tc;
            data.master_campaign_id = (campaignData[data.campaign_id] || {}).master_campaign_id;
            data.kw = campaign.kw || "";
            data.pub_cr_id = campaign.pub_cr_id || "";
          } else {
            try {
              data.master_campaign_id = (campaignData[sessionStorage.getItem("referrer_type")] || {}).master_campaign_id;
            } catch(err) {
            }

            if (defaultToOther && !data.master_campaign_id) {
              data.master_campaign_id = (campaignData["OTHER"] || {}).master_campaign_id;
              sessionStorage.setItem("rl_debug_referrer_other", data.master_campaign_id);
            }
          }
          if (data.master_campaign_id) {
            data.master_campaign_id = [platform, data.master_campaign_id].join("_");
          }

          return data;
        }
      };
    },

    /**
     * Get campaign data from cookies or location querystring.
     *
     * Will collect data from the following sources in the listed order:
     * - RlocalUID
     * - RlocalTag
     * - location querystring
     *
     * Proxy-URL-to-native-URL mappings are stored in RL.config.proxyUrls object.  If that object does not exist, then
     * one will be created.
     *
     * Returns an object will at least the following properties:
     * - isSrcProxy (boolean)
     * - isSrcRct (boolean)
     * - isSrcQuerystring (boolean)
     * - isPaidCampaign (boolean)
     *
     * .getCampaign(enabled)
     * enabled - int - 1: module enabled, 0: module disabled
     */
    Campaign: function() {
      var FIELDS = ["scid", "cid", "tc", "rl_key", "kw", "pub_cr_id"],  // Required data points.
          PROXY_DOMAINS = ["avxtrk.com", "ddcsem.com", "ezlcl.com", "reachlocal.com", "reachlocal.net", "rtrk.com", "rtrk.com.au", "rtrk1.com", "rtrk2.com", "rtrk5.com", "search-dealer.com", "smrtlnk.com", "trvlclick.com"], // Hard proxy base domains.
          self = RL,  // RL alias.
          $ = self.jq,  // jQuery alias.
          qs;           // Campaign data in querystring.

      qs = (function(qs) {
        // Get campaign data from querystring.
        var scid = qs.scid || "",
          cid = qs.cid || "",
          tc = qs.tc || "",
          rl_key = qs.rl_key || "",
          kw = qs.kw || "",
          pub_cr_id = qs.pub_cr_id || "",
          data;

        if (scid === "" || cid === "" || tc === "" || rl_key === "") {
          // Since campaign data does not exist in the querystring, try local web storage.
          try {
            data = JSON.parse(sessionStorage.getItem("rl_campaign") || "");
          } catch(err) {
            // Local web storage does not have campaign data or web storage is not enabled.
            return null;
          }

          if (data.scid === "" || data.cid === "" || data.tc === "" || data.rl_key === "") {
            // Local web storage does not have campaign data.
            return null;
          }
        } else {
          // Querystring contains campaign data.
          data = {
            scid: scid,
            cid: cid,
            tc: tc,
            rl_key: rl_key,
            kw: kw,
            pub_cr_id: pub_cr_id,
            rl_tag: ""
          };
        }

        return data;
      })($.deparam(self.config.config.pageUri.search));

      if (qs === null) {
        try {
          sessionStorage.removeItem("rl_campaign");
        } catch(err) {}

        self.CaptureSiteStorage.getItem("rl_campaign", function(data) {
          if (!data.rl_campaign) {
            return;
          }

          // Retrieve campaign data stored in web storage in the Capture domain for multidomain visit.
          try {
            data = JSON.parse(data.rl_campaign);
          } catch(err) {
            return;
          }

          if (!data.campaign || !data.pageUri) {
            return;
          }

          if (self.config.config.referrer === unescape(data.pageUri)) {
            qs = data.campaign;
            self.config.config.campaign = self.getCampaign();

            // Cache campaign data.
            try {
              sessionStorage.setItem("rl_campaign", JSON.stringify(qs));
            } catch(err) {}
            self.CaptureSiteStorage.setItem([{k: "rl_campaign", v: JSON.stringify({campaign: qs, pageUri: escape(self.config.config.pageUri.href)})}]);
          }
        });
      } else {
        // Cache campaign data.
        try {
          sessionStorage.setItem("rl_campaign", JSON.stringify(qs));
        } catch(err) {}
        self.CaptureSiteStorage.setItem([{k: "rl_campaign", v: JSON.stringify({campaign: qs, pageUri: escape(self.config.config.pageUri.href)})}]);
      }

      self.getCampaign = function() {
        var proxyCookie,
          isProxy,
          campaign;

        proxyCookie = (function(cookie) {
          // Get proxy campaign data from RlocalUID cookie.
          cookie = cookie !== null ? $.deparam(cookie) : {};
          return cookie.scid ? cookie : null;
        })($.cookie("RlocalUID"));

        isProxy = (function() {
          // Check if proxy campaign.
          var pageUri = self.config.config.pageUri,
            hostname = pageUri.hostname.toLowerCase(),
            baseDomain;

          // Check if URL is dynamically proxied.
          if (hostname.indexOf("url") === 0 && hostname.indexOf("--") > -1) {
            // Dynamically proxied URL starts with "url" and contains at least 1 pair of "--".

            // Save proxied URL.
            self.config.config.proxyUrl = pageUri.href;

            // Replaced cached proxied URL with native URL (see TRACK-1092).
            pageUri.hostname = hostname.slice(3, hostname.indexOf(".")).replace(/--/g, ".");
            pageUri.href = pageUri.href.replace(hostname, pageUri.hostname);
            self.config.config.pageUri = pageUri;

            return true;
          }

          baseDomain = (function(h, hArr) {
            // Get base domain.
            if (hArr.length > 2) {
              return [hArr[hArr.length - 2], hArr[hArr.length - 1]].join(".");
            }
            return h;
          })(hostname, hostname.split("."));

          // Check if URL is a hard proxied URL.
          if (PROXY_DOMAINS.indexOf(baseDomain) > -1) {
            // Proxied URLs has one of the listed base domain.

            // Save proxied URL.
            self.config.config.proxyUrl = pageUri.href;

            // Make sure rl_config.js has a "proxyUrls" section.
            if (!self.config.proxyUrls) {
              self.config.proxyUrls = {};
            }

            self.config.config.pageUri = (function(pageUri, proxyUrl, nativeUrl) {
              // Replaced cached proxied URL with native URL if one is specified.
              if (typeof nativeUrl === "string" && nativeUrl !== "") {
                pageUri.hostname = nativeUrl;
                pageUri.href = pageUri.href.replace(proxyUrl, nativeUrl);
              }

              return pageUri;
            })(pageUri, hostname, self.config.proxyUrls[hostname]);

            return true;
          }

          return false;
        })();

        // Additional flags.
        if (proxyCookie !== null && isProxy === true) {
          campaign = proxyCookie;
          campaign.isSrcProxy = true;
          campaign.isSrcQuerystring = false;
          campaign.isPaidCampaign = true;
        } else if (qs !== null) {
          campaign = $.extend({}, qs);
          campaign.isSrcProxy = false;
          campaign.isSrcQuerystring = true;
          campaign.isPaidCampaign = true;
        } else {
          campaign = {
            isSrcProxy: false,
            isSrcQuerystring: false,
            isPaidCampaign: false
          };
        }

        // Additional campaign data.
        for (var i = -1, length = FIELDS.length; ++i < length;) {
          var field = FIELDS[i];
          if (!campaign[field]) {
            campaign[field] = "";
          }
        }

        return campaign;
      };

      self.config.config.campaign = self.getCampaign();
    },

    /**
     * Replace common credit card numbers with astericks.
     *
     * The following 6 credit cards will be filtered:
     * - American Express
     * - Diners Club
     * - Discover
     * - JCB
     * - Mastercard
     * - Visa
     *
     * Example usage: "hi there".filterCreditcard();
     *
     * <string>.filterCreditCard()
     */
    CreditCard: function() {
      String.prototype.filterCreditCard = function() {
        var CC = [
            "3[47]\\d{2}[ -.]?\\d{6}[ -.]?\\d{5}",              // American Express.
            "3([68]\\d|0[0-5])\\d[ -.]?\\d{6}[ -.]?\\d{4}",         // Diners Club.
            "6(011|5\\d{2})[ -.]?(\\d{4}[ -.]?){3}",            // Discover.
            "35(2[8-9]|[3-8]\\d)[ -.]?(\\d{4}[ -.]?){3}",         // JCB.
            "5[1-5]\\d{2}[ -.]?(\\d{4}[ -.]?){3}",            // Mastercard.
            "4\\d{3}[ -.]?(\\d{4}|\\d{3})[ -.]?(\\d{4}|\\d{2})[ -.]?\\d{4}" // Visa.
          ],          // Credit card regex.
          strMatches = [];  // Credit card regex matches.

        // Helper function
        var generateReplacementString = function(l) {
          var s = "";
          for (var i = -1; ++i < l;) {
            s = [s, "*"].join("");
          }
          return s;
        };

        strMatches = (function(str, CC) {
          var s = [];
          for (var i = -1, length = CC.length; ++i < length;) {
            var r = new RegExp(CC[i], "gi"),
              m = str.match(r);
            if (m !== null) {
              s = s.concat(m);
            }
          }
          return s;
        })(this, CC);

        return (function(str, strMatches) {
          for (var i = -1, length = strMatches.length; ++i < length;) {
            var s = strMatches[i],
              r = generateReplacementString(s.length);
            str = str.replace(s, r);
          }
          return str;
        })(this, strMatches);
      };
    },

    /**
     * Track CVTs.
     *
     * CVTs are stored in RL.config.cvts object.  If that object does not exist, then one will be created.
     *
     * Subscribes to form-submission-capture.callback event to track POST events and capture form data.
     *
     * .trackCvt()
     */
    CVT: function() {
      var self = RL,  // RL alias.
          $ = self.jq,  // jQuery alias.
          post;     // Undefined if page request is not type POST.

      // Check if current page is a POST request.
      self.CaptureStorage.getItem("rl_capture_post", function(data) {
        post = data.rl_capture_post ? data.rl_capture_post : undefined;
      });

      // Make sure rl_config.js has a "cvts" section.
      if (!$.isPlainObject(self.config.cvts)) {
        self.config.cvts = {};
      }

      self.trackCvt = (function() {
        var config = self.config,             // Config.
          platform = config.config.platform,  // Platform.
          campaign = config.config.campaign,  // Campaign info.
          pageCvts;                           // Current page's CVT info.

        // Helper function to get CVT info for a given URL.
        var getCvt = function(originalUri) {
          var cvtConfig = config.cvts,  // CVT config.
            data = [],                  // All the CVTs for the page.
            cvt;                        // Paid CVT.

          // Update campaign info.
          campaign = config.config.campaign;

          // Make sure uri is in lower case for comparision
          var uri = originalUri.toLowerCase();

          data = (function() {
            // Get list of CVTs from config.
            for (var cvtDomain in cvtConfig) {
              var cvtPaths = cvtConfig[cvtDomain];

              cvtDomain = cvtDomain.toLowerCase();

              if (uri.indexOf(cvtDomain) !== 0) {
                // Not matching protocol & domain.
                continue;
              }

              // Remove protocol and domain for current url.
              uri = uri.replace(cvtDomain, "");

              if (uri.charAt(0) !== "/") {
                // Prefix a slash if missing.
                uri = ["/", uri].join("");
              }

              for (var cvtPath in cvtPaths) {
                var path = [cvtPath.charAt(0) !== "/" ? "/" : "", cvtPath.toLowerCase()].join("");

                if (uri.indexOf(path) !== 0) {
                  // Not a substring of the current url.
                  continue;
                }

                // Return array of CVTs.
                return cvtPaths[cvtPath] || [];
              }
            }

            return [];
          })();

          cvt = (function() {
            var campaignCid;

            if (campaign.isPaidCampaign === true) {
              campaignCid = [platform, campaign.cid].join("_");

              // Clean up data.
              for (var i = -1, length = data.length; ++i < length;) {
                var d = data[i];

                if (d.campaign_id === campaignCid) {
                  return d;
                }
              }
            }

            return undefined;
          })();

          return {
            data: data,   // Page CVTs.
            cvt: cvt    // Paid campaign CVT.
          };
        };

        // Helper function track CVT event.
        var trackCvt = function(cvtId, cvtType, o) {
          var self = this,
            $ = self.jq,
            fname,
            referrer;

          if ($.isPlainObject(o)) {
            if (typeof o.fname === "string") {
              fname = o.fname;
            }
            if (typeof o.referrer === "string") {
              referrer = o.referrer;
            }
          }

          (function(o) {
            var visitorId,
                visitId,
                eventId;

            try {
              visitorId = sessionStorage.getItem("visitor_id");
              visitId = sessionStorage.getItem("visit_id");
            } catch(err) {
              visitorId = null;
              visitId = null;
            }

            if (visitId !== null && visitorId !== null) {
              // Track CVT since visit and visitor ids are available.
              self.CaptureWS.trackCvt({
                cvtId: o.id,
                cvtType: o.type,
                visitorId: visitorId,
                visitId: visitId,
                referrer: o.referrer,
                fname: o.fname
              });
              return;
            }

            // Wait for visit and visitor ids to be available.
            eventId = self.Events.subscribe("capture", "visit", function(data) {
              // Unsubscribe to event.
              self.Events.unsubscribe("capture", "visit", eventId);

              // Track CVT since visit and visitor ids are available.
              self.CaptureWS.trackCvt({
                cvtId: o.id,
                cvtType: o.type,
                visitorId: data.visitorId,
                visitId: data.visitId,
                referrer: o.referrer,
                fname: o.fname
              });
            });
          })({id: cvtId, type: cvtType === "high" ? 8 : 7, referrer: referrer, fname: fname});
        };

        // Helper function track form post.
        var trackPost = function(data, complete) {
          var visitorId,
              visitId,
              eventId,
              timeoutId;

          try {
            visitorId = sessionStorage.getItem("visitor_id");
            visitId = sessionStorage.getItem("visit_id");
          } catch(err) {
            visitorId = null;
            visitId = null;
          }

          if (visitId !== null && visitorId !== null) {
            data.visitId = visitId;
            data.visitorId = visitorId;

            // Track Post since visit and visitor ids are available.
            self.CaptureWS.trackPost(data, complete);
            return;
          }

          // Wait for visit and visitor ids to be available.
          eventId = self.Events.subscribe("capture", "visit", function(data) {
            // Unsubscribe to event.
            self.Events.unsubscribe("capture", "visit", eventId);

            // End timeout.
            clearTimeout(timeoutId);

            data.visitId = visitId;
            data.visitorId = visitorId;

            // Track CVT since visit and visitor ids are available.
            self.CaptureWS.trackPost(data, complete);
          });

          timeoutId = setTimeout(function() {
            self.CaptureWS.trackPost(data, complete);
          }, 1000);
        };

        // Subscribe to form-submission-capture.callback event.
        self.Events.subscribe("form-submission-capture", "callback", function(data, complete) {
          var formCvts = getCvt.call(self, data.url),
            cvt = formCvts.cvt,
            isAuto8 = false;

          // Initialize variables just in case they are undefined.
          if (pageCvts === undefined) {
            pageCvts = {data: [], cvt: undefined};
          }

          if (cvt !== undefined || (pageCvts.cvt !== undefined && pageCvts.cvt.value === "low")) {
            // Form post is a CVT.
            if (pageCvts.cvt && pageCvts.cvt.value === "low" && (cvt === undefined || cvt.value !== "high")) {
              // Auto 8.
              cvt = {
                cvtid: pageCvts.cvt.cvtid,
                value: "high"
              };
              isAuto8 = true;
            }
          }

          if (cvt !== undefined) {
            // Track CVT POST event.
            trackCvt.call(self, cvt.cvtid, cvt.value, {referrer: config.config.pageUri.href, fname: data.url});
          }

          var payload = {
            formUri: data.url,
            postbody: data.data
          };
          if (isAuto8 === true) {
            payload.referrer = config.config.pageUri.href;
          }

          // Track form post.
          trackPost.call(self, payload, function() {
            // Set POST action flag.
            self.CaptureStorage.setItem([{k: "rl_capture_post", v: data.url, e: parseInt((new Date()).getTime() / 1000) + 60}], function() {
              if (typeof complete === "function") {
                complete();
              }
            });
          });

          return false;
         }, self);

        return function() {
          var cvt;

          // Get current page's CVT info.
          pageCvts = getCvt.call(this, config.config.pageUri.href);
          cvt = pageCvts.cvt;

          if (post === config.config.pageUri.href) {
            // POST event are tracked before the post.

            // Remove POST action flag.
            this.CaptureStorage.removeItem("rl_capture_post");
            return;
          }

          if (cvt !== undefined) {
                // Track CVT event.
                trackCvt.call(this, cvt.cvtid, cvt.value);
              }

              // Not a CVT page.
              return false;
        };
      })();
    },

    /**
     * Collect form submit and AJAX request data.
     *
     * Collects data from input (text, password, hidden, checkbox, and radio), textarea,
     * and select elements for form submit.
     *
     * Collect data from AJAX request payload (only IE8+, FF3.6+, Chrome, Safari).
     *
     * Triggers form-submission-capture.callback event during an interception.
     *
     * .captureFormSubmit(callback, form)
     * form - object - form element(s)
     */
    Form: function() {
      var self = RL,  // RL alias.
          $ = self.jq;  // jQuery alias.

      self.captureFormSubmit = (function() {
        var submittedForms = []; // Submitted forms.

        // Helper function to collect data from AJAX request.
        var getXhrData = function(callback) {
          // Works for IE8+ and other modern browsers only.
          if (window.XMLHttpRequest && XMLHttpRequest.prototype) {
            // Code is based on http://stackoverflow.com/questions/3596583/javascript-detect-an-ajax-event with minor modifications.
            var s_ajaxListener = new Object();
            s_ajaxListener.tempOpen = XMLHttpRequest.prototype.open;
            s_ajaxListener.tempSend = XMLHttpRequest.prototype.send;
            s_ajaxListener.callback = function () {
              callback({
                method: this.method,
                url: this.url,
                data: this.data
              });
            };

            XMLHttpRequest.prototype.open = function(method, url) {
              s_ajaxListener.tempOpen.apply(this, arguments);
              s_ajaxListener.method = method;
              s_ajaxListener.url = url;
              if (method.toLowerCase() === "get") {
                var urlArr = url.split("?");
                s_ajaxListener.data = urlArr[1];
              }
            };

            XMLHttpRequest.prototype.send = function(data) {
              s_ajaxListener.tempSend.apply(this, arguments);
              if (s_ajaxListener.method.toLowerCase() === "post") {
                s_ajaxListener.data = data || "";
              }
              s_ajaxListener.callback();
            };
          }
        };

        // Helper function to capture form submit event.
        var captureForm = function(forms) {
          var config = self.config.config,
              isDotNet = config.dotNet;

          for (var i = -1, length = forms.length; ++i < length;) {
            var formE = forms[i],
              $formE = $(formE);

            // Sanity check.
            if (!formE.nodeType || formE.nodeType !== 1 || typeof formE.nodeName !== "string" || formE.nodeName.toLowerCase() !== "form") {
              // Not a form element node.
              continue;
            }

            // Check if form is .NET Web Form.
            if (isDotNet === 1) {
              (function(formE) {
                var onSubmit = window.WebForm_OnSubmit,
                  hasSubmitted = false;

                window.WebForm_OnSubmit = function() {
                  var r;

                  if (formE.action.indexOf("https:") === 0) {
                    // Do not track forms with SSL.
                    onSubmit();
                  } else if (hasSubmitted === false) {
                    r = onSubmit();

                    if (r === false) {
                      return false;
                    }

                    hasSubmitted = true;

                    self.Events.dispatch("form-submission-capture", "callback", {form: formE, url: formE.action, data: $(formE).formSerialize()}, function() {
                      $formE.find(":submit").click();
                    });

                    return false;
                  }

                  return true;
                };
              })(formE);

              return null;
            }

            formE.onsubmit = (function(formE) {
              var onSubmitFn = formE.onsubmit;

              var attach = function(e) {
                var r = typeof onSubmitFn === "function" ? onSubmitFn.call(formE, e) : null,
                  submittedFormsIndex = submittedForms.indexOf(formE),
                  isAjax = submittedFormsIndex > -1 ? true : false,
                  formData = $(formE).formSerialize();

                // Helper function to submit form.
                var sendRequest = function() {
                  if (r !== false) {
                    if (formE.action.indexOf("https:") === 0) {
                      // Do not capture forms with SSL.
                      formE.submit();
                      return;
                    }

                    // Dispatch form-submission-capture.callback event.
                    self.Events.dispatch("form-submission-capture", "callback", {form: formE, url: formE.action, data: formData}, function() {
                      // Form submission is not cancelled.
                      formE.submit();
                    });
                  } else {
                    // Form submission is blocked in the onsubmit handler.
                    formE.submit = (function(formE) {
                      // Override submit().
                      var submit = formE.submit;

                      return function() {
                        var formE = this,
                          args = arguments,
                          formData = $(formE).formSerialize();

                        if (formE.action.indexOf("https:") === 0) {
                          // Do not capture forms with SSL.
                          submit.apply(formE, args);
                          return;
                        }

                        self.Events.dispatch("form-submission-capture", "callback", {form: formE, url: formE.action, data: formData}, function() {
                          // Form submission is not cancelled.
                          submit.apply(formE, args);
                        });
                      };
                    })(formE);
                  }
                };

                if (typeof e.defaultPrevented === "boolean") {
                  // Modern browsers.
                  if (isAjax === true) {
                    submittedForms[submittedFormsIndex] = null;
                  }

                  if (isAjax === false) {
                    sendRequest();
                  }
                } else {
                  // Older browsers.
                  setTimeout(function() {
                    submittedFormsIndex = submittedForms.indexOf(formE);
                    isAjax = submittedFormsIndex > -1 ? true : false;

                    if (isAjax === true) {
                      submittedForms[submittedFormsIndex] = null;
                    }

                    if (isAjax === false) {
                      sendRequest();
                    }
                  }, 100);
                }
              };

              var attachDelayedHandler = function(e) {
                setTimeout(function() {
                  attach(e);
                }, 100);

                // Stop form submission.
                if (e && e.preventDefault) {
                  e.preventDefault();
                } else if (window.event && window.event.returnValue) {
                  window.eventReturnValue = false;
                }

                return false;
              };

              if (formE.addEventListener) {
                formE.addEventListener("submit", attachDelayedHandler, false);
              } else if (formE.attachEvent) {
                formE.attachEvent("onsubmit",  attachDelayedHandler);
              }

              return null;
            })(formE);
          }
        };

        // Helper function to capture AJAX event.
        var captureXhr = function() {
          // Sanity check.
          if (document.forms.length === 0) {
            // Forms do not exist.
            return;
          }

          // Intercept XHR requests.
          getXhrData(function(requestData) {
            var forms = document.forms,
              url = requestData.url,
              data = requestData.data;

            for (var i = -1, length = forms.length; ++i < length;) {
              var formE = forms[i],
                formUri = formE.action;

              if (formUri === url || (formUri !== "" && (formUri.indexOf(url) > -1 || (url !== "" && url.indexOf(formUri) > -1)))) {
                if (formUri.indexOf("https:") === 0) {
                  // Do not track forms with SSL.
                  return;
                }

                submittedForms.push(formE);

                // Dispatch form-submission-capture.callback event.
                self.Events.dispatch("form-submission-capture", "callback", {url: formUri, data: data});
                return;
              }
            }
          });
        };

        return function(form) {
          var config = this.config.config,
              isHipaa = config.hipaa,
              isScorpion = config.scorpion,
              isSsl = config.pageUri.protocol === "https:" ? 1 : 0,
              formEArr;

          if (isScorpion === 1 || isHipaa === 1 || isSsl === 1) {
            // Do not track forms automatically if it is a Scorpion site.
            // Do not track forms if it is a HIPAA site.
            // Do not track forms with SSL.
            return;
          }

          formEArr = form === undefined ? document.forms : ($.type(form) === "array" ? form : [form]);

          captureForm(formEArr);
          captureXhr();
        };
      })();
    },

    /**
     * Search and replace all image and CSS style background image on the page.
     *
     * .replaceImage(data)
     * data - array - array of key-value mapping (e.g. [{"search": "http://www.site.com/foo.jpg", "replace": "http://www.site.com/bar.jpg"}])
     *
     * data object:
     * search - string - string to replace
     * replace - string - string used to replace
     */
    ImageReplacement: function() {
      var self = RL,  // RL aslias.
          $ = self.jq;  // jQuery alias.

      self.replaceImage = (function() {
        var images,
          imgArr = [],
          bgImgArr = [];

        // Helper function to retrieve the CSS style.
        var getCss = function(elem, css) {
          if (!elem || !elem.style) {
            return "";
          }

          // Format style name to camel casing.
          var style = css.replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase();
          });

          if (elem.currentStyle){
            return elem.style[style] || elem.currentStyle[style] || "";
          }

          var dv = document.defaultView || window;
          return elem.style[style] || dv.getComputedStyle(elem, "").getPropertyValue(css) || "";
        };

        // Helper function to get image elements and other elements with background images.
        var getImages = function() {
          var elems = document.getElementsByTagName("*"),
            imgArr = [],  // array of image elements
            bgArr = [];   // array of elements with background images

          for (var i = -1, length = elems.length; ++i < length;) {
            var elem = elems[i];

            switch (elem.nodeName.toLowerCase()) {
              case "script":
              case "link":
              case "style":
              case "meta":
              case "html":
              case "head":
              case "title":
              case "base":
              case "noscript":
                continue;
                break;

              case "img":
                imgArr.push(elem);
                break;

              default:
                var bgImg = getCss(elem, "background-image"),
                  url = /url\(['"]?([^")]+)/.exec(bgImg) || [];
                if (typeof url[1] === "string" && url[1] !== "") {
                  bgArr.push(elem);
                }
            }
          }

          return {img: imgArr, bgImg: bgArr};
        };

        // Helper function to replace image elements and elements with background images.
        var replace = function(search, replace) {
          // Replace image elements.
          for (var i = -1, length = images.img.length; ++i < length;) {
            var elem = images.img[i];

            if (elem.attributes.getNamedItem("src").value === search || elem.attributes.getNamedItem("src").ie8_value === search || elem.src === search) {
              // Replace node src value and remove node from list.
              elem.src = replace;
            } else {
              // Add node to list for additional replacements.
              imgArr.push(elem);
            }
          }

          // Replace elements with background images.
          for (var i = -1, length = images.bgImg.length; ++i < length;) {
            var elem = images.bgImg[i],
              elemBgImg = getCss(elem, "background-image");
            if (elemBgImg.indexOf(search) > -1) {
              // Replace node background image and remove node from list.
              elem.style.backgroundImage = ["url('", replace, "')"].join("");
            } else {
              // Add node to list for additional replacements.
              bgImgArr.push(elem);
            }
          }
        };

        return function(data) {
          imgArr = bgImgArr = [];

          if ($.isPlainObject(data)) {
            // Replace 1 node.
            images = getImages();
            replace(data.search, data.replace);
          } else if ($.type(data) === "array") {
            // Replace multiple nodes.
            images = getImages();
            for (var i = -1, length = data.length; ++i < length;) {
              var elem = data[i];
              if ($.isPlainObject(elem)) {
                replace(elem.search, elem.replace);
              }
            }
          }

          images = undefined;
          return {img: imgArr, bgImg: bgImgArr};
        };
      })();
    },

    /**
     * Replaces href in an anchor node.
     *
     * .replaceLink(options)
     * options - object - key-value mapping
     *
     * options object:
     * nodeE - object - DOM node to replace
     * uri - string - new url value
     * text - string - (optional) new text string
     * handler - function - (optional) bind click event handler
     */
    LinkReplacement: function() {
      var self = RL,  // RL aslias.
          $ = self.jq;  // jQuery alias.

      self.replaceLink = (function() {
        // Helper function modify the anchor element.
        var replace = function(nodeE, uri, text, handler) {
          text = text || nodeE.innerHTML;
          nodeE.href = uri;
          nodeE.innerHTML = text;

          // Attach click event handler.
          if (typeof handler === "function") {
            $(nodeE).click(handler);
          }
        };

        return function(options) {
          // Sanity check.
          if (!$.isPlainObject(options)) {
            // Invalid parameter.
            return false;
          } else if (typeof options.nodeE !== "object" || options.nodeE.nodeType !== 1 || options.nodeE.nodeName !== "A") {
            // Invalid nodeE parameter property.
            return false;
          } else if (typeof options.uri !== "string") {
            // Invalid uri parameter property.
            return false;
          }

          // Initialize optional parameter properties.
          if (typeof options.text !== "string") {
            options.text = undefined;
          }
          if (typeof options.handler !== "function") {
            options.handler = undefined;
          }

          replace(options.nodeE, options.uri, options.text, options.handler);

          return options.nodeE;
        };
      })();
    },

    /**
     * Replace phone numbers in TextNodes on the page.
     *
     * .replacePhoneNumbers(data)
     * data - array - array of key-value mapping (e.g. [{"search": "8183397978", "replace": "2221113333"}, {"search": "8183397777", "replace": "2221114444"}])
     */
    PhoneNumberReplacement: function() {
      var self = RL,  // RL aslias.
          $ = self.jq;  // jQuery alias.

      self.replacePhoneNumber = function(data) {
        var POST_PHONE_PATTERN = "([~|_|\\,|\\?|\\||#|\\[|\\]|\\{|\\}|\\^|\\:|\\=|\\\|\"|\\*|\\/|\\.|\\+|\\-|\\(|\\)|\\s|%20|&nbsp;]*)",
          PRE_PHONE_PATTERN = "([\\(|\\+]*)",
          dataCollection = [];

        if ($.type(data) !== "array") {
          return false;
        }

        for (var i = -1, length = data.length; ++i < length;) {
          var elem = data[i],
            searchPN = elem.search,
            newPN = elem.replace,
            isDomestic = true,
            searchTerm,
            newTerm,
            regex;

          // Sanity check.
          if (typeof searchPN !== "string" || typeof newPN !== "string") {
            // Both search and replace values must be strings.
            continue;
          }

          // Do not replace phone numbers with alphabetical characters.
          if (searchPN.search(/[a-z\/]+/i) >= 0) {
            continue;
          }

          // Remove nondigit characters.
          searchPN = searchPN.replace(/[\s-()\.]*/g, "");

          // Clean phone numbers by removing "#".
          (function(_searchPN, _newPN) {
            var index;

            index = _searchPN.indexOf("#");
            if (index > -1) {
              searchPN = _searchPN.substr(0, index);
              isDomestic = false;
            }

            index = _newPN.indexOf("#");
            if (index > -1) {
              newPN = _newPN.substr(0, index);
              isDomestic = false;
            }
          })(searchPN, newPN);

          // Create phone number RegEx pattern.
          searchTerm = (function(searchPN, postPhonePattern, prePhonePattern) {
            var searchTermArr = [];

            for (var i = -1, length = searchPN.length; ++i < length;) {
              searchTermArr.push(searchPN.charAt(i));
              searchTermArr.push(postPhonePattern);
            }

            if (searchTermArr.length > 0) {
              searchTermArr.pop();
              searchTermArr.unshift(prePhonePattern);
            }

            return searchTermArr.join("");
          })(searchPN, POST_PHONE_PATTERN, PRE_PHONE_PATTERN);

          if (isDomestic === true) {
            newTerm = (function(_newPN) {
              var newTermArr = [];

              for (var i = -1, length = _newPN.length; ++i < length;) {
                newTermArr.push(_newPN.charAt(i));
                newTermArr.push("$" + (i + 2));
              }

              if (newTermArr.length > 0) {
                newTermArr.pop();
                newTermArr.unshift("$1");
              }

              return newTermArr.join("");
            })(newPN);
          } else {
            newTerm = newPN;
          }

          dataCollection.push({
            search: new RegExp(searchTerm, "i"),
            replace: newTerm
          });
        }

        // Replace text nodes.
        self.replaceText({data: dataCollection});

        // Replace anchor nodes that have "tel" protocol.
        (function(data) {
          var anchorEArr = $("a");

          for (var i = -1, iLength = anchorEArr.length; ++i < iLength;) {
            var anchorE = anchorEArr[i],
              anchorEHref = anchorE.href.trim(),
              anchorEProtocol = anchorE.protocol;

            if (anchorEProtocol !== "tel:") {
              continue;
            }

            for (var j = -1, jLength = data.length; ++j < jLength;) {
              var d = data[j],
                s = d.search,
                r = d.replace;

              if (anchorEHref.search(s) > -1) {
                anchorE.href= anchorEHref.replace(s, r);
                break;
              }
            }
          }
        })(dataCollection);
      };
    },

    /**
     * Check if the visit is by a robot by comparing User-Agent.
     *
     * The list of UA is taken from http://www.user-agents.org/allagents.xml.  If the module is executed,
     * the result is saved at RL.config.config.robot as a boolean.
     */
    Robot: function() {
      var self = RL;  // RL alias.

      var list = window.RL_ROBOTS,
        ua = navigator.userAgent.toLowerCase();

      if (ua.indexOf("robot") > -1) {
        // May be a robot since "robot" is in the user-agent.
        self.config.config.robot = true;
        return;
      }

      for (var i = -1, length = list.length; ++i < length;) {
        if (ua.indexOf(list[i].toLowerCase()) > -1) {
          // May be a robot since one of the known robot substring is in the user-agent.
          self.config.config.robot = true;
          return;
        }
      }

      self.config.config.robot = false;

      // Dispatch robots.load event.
      self.Events.dispatch("robot", "load", {robot: self.config.config.robot});
    },

    /**
     * Replaces text in TextNodes.
     *
     * .replaceText(options)
     * options - object - key-value data mapping
     *
     * options object:
     * node - object - DOM node to start the search
     * data - object/array - search & replace text (array of)
     *
     * data object:
     * search - string/regex - search string
     * replace - string - new string
     * success - function - (optional) function to be called if the replacement succeeds
     */
    TextReplacement:  function() {
      var self = RL,  // RL alias.
          $ = self.jq;  // jQuery alias.

      self.replaceText = (function() {
        var replace = function(node, data) {
          // Native DOM traversal.
          var treeWalker = function(node, data) {
            var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);

            while (node = walker.nextNode()) {
              replaceText(node, data);
            }
          };

          // Manual DOM traversal.
          var recursiveTreeTraversal = function(node, data) {
            var childNodes = node.childNodes || [];

            for (var i = -1, length = childNodes.length; ++i < length;) {
              recursiveTreeTraversal(childNodes[i], data);
            }

            if (node.nodeType !== 3) {
              return;
            }

            replaceText(node, data);
          };

          var replaceText = function(node, data) {
            for (var i = -1, length = data.length; ++i < length;) {
              var r = data[i],
                nodeValue = undefined;

              if ($.type(r.search) === "regexp") {
                nodeValue = node.nodeValue;
                node.nodeValue = node.nodeValue.replace(r.search, r.replace);
                if (nodeValue.search(r.search) > -1 && typeof r.success === "function") {
                  r.success(node);
                }
              } else if (node.nodeValue === r.search) {
                node.nodeValue = r.replace;
                if (typeof r.success === "function") {
                  r.success(node);
                }
              }
            }
          };

          return typeof document.createTreeWalker === "function" ? treeWalker(node, data) : recursiveTreeTraversal(node, data);
        };

        return function(options) {
          var node, // DOM node.
            data; // Array of search & replace text.

          if (!$.isPlainObject(options)) {
            return false;
          }

          if ($.type(options.data) === "array") {
            data = [];
            for (var i = -1, length = options.data.length; ++i < length;) {
              var text = options.data[i];
              if ($.isPlainObject(text) && (typeof text.search === "string" || $.type(text.search) === "regexp") && typeof text.replace === "string") {
                data.push(text);
              }
            }
          } else if ($.isPlainObject(options.data) && (typeof options.data.search === "string" || $.type(options.data.search) === "regexp") && typeof options.data.replace === "string") {
            data = [options.data];
          } else {
            return false;
          }

          node = (typeof node === "object" && node.nodeType === 1) ? options.node : document.body;

          if (data.length > 0) {
            replace(node, data);
          }
        };
      })();
    }
  };


  try {
    RL._modules = MODULES;
  } catch(e) {
  }

})(window, window.RL, window.RL.jq);
/**
 * Provide a set of functions for Scorpion sites.
 *
 * Since Scorpion sites are designed using .NET, some of Capture JS features might be crippled.
 * A set of functions are provided for Scorpion site integration.
 */

(function(window, RL, $) {
  "use strict";

  RL.Scorpion = {
    /**
     * Track form post by forwarding data to Capture.
     *
     * Data is sent to CAPTURE asynchronously so the complete callback function is required to continue
     * the original form submission.
     *
     * .trackFormPost(settings)
     * settings - object - key-value mapping
     *
     * settings object:
     * url - string - form action url
     * data - object - form fields (key-value mapping)
     * complete - function - callback function after forwarding form data to Capture
     * node - object - (optional) DOM node
     */
    trackFormPost: function(settings) {
      // Sanity check and clean up.
      if (!$.isPlainObject(settings)) {
        settings = {};
      } else {
        if (typeof settings.url !== "string" || settings.url.length < 1) {
          settings.url = "";
        }
        if ($.isPlainObject(settings.data)) {
          settings.data = $.param(settings.data);
        } else if (typeof settings.data !== "string") {
          settings.data = "";
        }
        if (typeof settings.complete !== "function") {
          settings.complete = undefined;
        }
      }

      // Dispatch form-submission-capture.callback event.
      RL.Events.dispatch("form-submission-capture", "callback", {url: settings.url, data: settings.data, node: settings.node}, settings.complete);
    }
  };

})(window, window.RL, window.rl_jquery);
/**
 * Capture.
 *
 *
 * Track user visits.
 *
 *
 * Example product settings in the config file (rl_globalConfig.js):
 *
 * config: {
 *   id: "f51e0b33-c1ea-456d-a795-d94c4a598284"
 * }
 *
 * id - string - unique site id.
 */

(function(window, undefined, $RL) {
  "use strict";

  var $CAPTURE = {},                  // Capture widget (window.RL.CAPTURE).
    globalConfig,
    captureConfig,
    replacementConfig,
    cookies = {};                 // Cookies used by CAPTURE.


  $CAPTURE = {
    /**
     * Init.
     *
     * Fire capture.load event.
     *
     * .init(skipInit)
     * skipInit - boolean - true to skip setting config data
     */
    init: function(skipInit) {
      var _$RL = $RL,             // RL alias.
        _$CAPTURE = this,         // $CAPTURE alias.
        $ = _$RL.jq;            // jQuery alias.

        globalConfig = $RL.config.config;       // Global config alias.
        captureConfig = $RL.config.products.capture;  // Capture config alias.
        replacementConfig = $RL.config.replacements;  // Replacments config alias.

        var platform = globalConfig.platform, // Platform.
            campaign = globalConfig.campaign; // Campaign data.

      sessionStorage.removeItem("rl_debug_web_storage");
      sessionStorage.removeItem("rl_debug_visit_request");
      sessionStorage.removeItem("rl_debug_visit_response");
      sessionStorage.removeItem("rl_debug_get_visit_data");
      sessionStorage.removeItem("rl_debug_referrer_other");

      if (campaign.isPaidCampaign === true && campaign.isSrcProxy === true) {
        // Do not track if proxy visit.
        return;
      }

      if (typeof skipInit !== "boolean" || skipInit === false) {
        // Get cookies from RLMMS.com domain.
        _$RL.lib.isOptedOut(function(cookie) {
          var _$RL = $RL;

          // Check if tracking page.
          if (cookie === true) {
            return _$CAPTURE;
          }

          _$RL.Events.subscribe("robot", "load", function(data) {
            // Wait for robot detection.
            _$CAPTURE.init(true);
            return _$CAPTURE;
          });

          if (typeof _$RL.config.config.robot === "boolean") {
            // Wait for robot detection.
            _$CAPTURE.init(true);
            return _$CAPTURE;
          }
        });

        return _$CAPTURE;
      }

      $(document).ready(function() {
        // Track visit event.
        _$CAPTURE.trackVisit();

        // Track CVTs.
        _$RL.trackCvt();

        // Capture form submit event.
        _$RL.captureFormSubmit();

        if (campaign.isPaidCampaign === true) {
          // Paid campaign visit.

          if (campaign.isSrcProxy === false) {
            // Phone and string replacements if non-proxied campaign.
            _$CAPTURE.replace([platform, campaign.scid].join("_"));
          }
        } else {
          // Organic visit.
        }

        // Dispatch load event.
        _$RL.Events.dispatch("capture", "load");
      });

      return _$CAPTURE;
    },

    /**
     * Replace phone numbers and images.
     *
     * .replace(type)
     * type - string - SCID or referrer type if organic visit
     */
    replace: function(type) {
      var _$RL = $RL,           // RL alias.
        _$CAPTURE = this,       // $CAPTURE alias.
        $ = $RL.jq,           // jQuery alias.
        data = replacementConfig[type]; // Phone and string replacement data.

      // Sanity check.
      if (data === undefined) {
        // Data must exist for SCID or referrer type.
        return false;
      }

      // Replace phone numbers.
      if ($.type(data.phone) === "array") {
        (function(data) {
          // Format data.
          var d = [];
          for (var i = -1, length = data.length; ++i < length;) {
            var elem = data[i];
            d.push({
              search: elem.original,
              replace: elem.replace
            });
          }
          _$RL.replacePhoneNumber(d);
        })(data.phone);
      }

      // Replace strings.
      if ($.type(data.strings) === "array") {
        (function(data) {
          // Format data.
          var d = [];
          for (var i = -1, length = data.length; ++i < length;) {
            var elem = data[i];
            d.push({
              search: elem.original,
              replace: elem.replace
            });
          }
          _$CAPTURE.replaceString(d);
        })(data.strings);
      }

      // Replace email links.
      if ($.type(data.email) === "array") {
        (function(data) {
          // Format data.
          var d = [];
          for (var i = -1, length = data.length; ++i < length;) {
            var elem = data[i];
            d.push({
              search: elem.original,
              replace: elem.replace
            });
          }
          _$CAPTURE.replaceEmailLinks(d);
        })(data.email);
      }

      return _$CAPTURE;
    },

    /**
     * Replace email links on the page.
     *
     * .replaceEmailLinks(data)
     * data - array - array of key-value mapping (e.g. [{"search": "foo@bar.com", "replace": "bar@foo.com"}, {"search": "joe@plumber.com", "replace": "info@plumber.com"}])
     */
    replaceEmailLinks: function(data) {
      var _$RL = $RL,   // RL alias.
        $ = $RL.jq,   // jQuery alias.
        linkEArr = $.makeArray($("a[href^=mailto]")); // Mail links.

      for (var i = -1, ilength = data.length; ++i < ilength;) {
        var d = data[i],
          s = d.search,
          r = d.replace;

        for (var j = -1, jlength = linkEArr.length; ++j < jlength;) {
          var linkE = linkEArr[j];

          if (linkE.href.replace("mailto:", "").toLowerCase() === s.toLowerCase()) {
            _$RL.replaceLink({
              nodeE: linkE,
              uri: ["mailto", r].join(":")
            });
          }
        }
      }

      return this;
    },

    /**
     * Replace strings on the page.
     *
     * .replaceStrings(data)
     * data - array - array of key-value mapping (e.g. [{"search": "8183397978", "replace": "2221113333"}, {"search": "8183397777", "replace": "2221114444"}])
     */
    replaceString: function(data) {
      var _$RL = $RL,       // RL alias.
        $ = $RL.jq,       // jQuery alias.
        imgData = [],     // Images that needed replacement.
        strData = {data: []}; // Text that needed replacement.

      // Sanity check.
      if ($.type(data) !== "array") {
        // Data parameter must be an array of objects.
        return false;
      }

      // Helper function to parse out the image file.
      var parseString = function(str) {
        if (str.search(/(img)?.*src\s*=\s*[\"\'][^\'\"]*[\"\']/ig) > -1) {
          // String contains IMG tag.
          var text = str.replace(/<?\s*(img)?(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*src\s*=\s*[\"\']([^\"\']*)[\"\'](\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*\/?>?/ig, "");

          if ($.trim(text).length === 0) {
            // String is an IMG tag.
            return {type: ["image"], string: str.replace(/<?\s*(img)?(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*src\s*=\s*[\"\']([^\"\']*)[\"\'](\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*\/?>?/ig, "$3")};
          } else {
            // String contains additional text.
            return {type: ["string"], string: text, image: str.match(/(<\s*img.*src\s*=\s*)[\"\']([^\"\']*)[\"\']((\s\w+\s*=?\s*[\"\']?[^\"\']*[\"\']?)*\s*\/?>)/ig)[0]};
          }
        } else if (str.search(/^(background(-image)?:|transparent )?(url)?\s*\(\s*[\"\']?([^\"\']*)[\"\']?\s*\)$/ig) === 0) {
          // String contains CSS background image.
          return {type: ["image"], string: str.replace(/^(background(-image)?:|transparent )?(url)?\s*\(\s*[\"\']?([^\"\']*)[\"\']?\s*\)$/ig, "$4")};
        } else if (str.search(/^background\s*=\s*[\"\']([^\"\']*)[\"\']?$/ig) === 0) {
          // String contains CSS background image.
          return {type: ["image"], string: str.replace(/^background\s*=\s*[\"\']([^\"\']*)[\"\']?$/ig, "$1")};
        } else if (str.search(/.+\.(jpg|jpeg|gif|tif|png|bmp)\s*$/ig) > -1) {
          // String contains an url.
          return {type: ["image", "string"], string: str.replace(/(.+\.(jpg|jpeg|gif|tif|png|bmp))\s*$/ig, "$1")};
        } else if (str.search(/a(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*href\s*=\s*[\"\'][^\'\"]*[\"\']/ig) > -1) {
          // String contains a link.
          var text = str.replace(/<a(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*href\s*=\s*[\"\']([^\"\']*)[\"\'](\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*>.+<\/a>/gi, "$LINK$");

          if ($.trim(text) === "$LINK$") {
            // String is a link.
            return {type: ["link"], link: str};
          } else {
            // String contains additional text.
            var linkStr = str.match(/<a(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*href\s*=\s*[\"\']([^\"\']*)[\"\'](\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*>.+<\/a>/ig);
            if (linkStr !== null) {
              return {type: ["string"], string: text, link: linkStr[0]};
            }
          }
        }

        return {type: ["string"], string: str};
      };

      for (var i = -1, length = data.length; ++i < length;) {
        var elem = data[i],
          searchStr = parseString(elem.search),
          replaceStr = parseString(elem.replace);

        if (searchStr.string !== "" && replaceStr.string !== "") {
          // Straight string replacement.
          if (searchStr.type.indexOf("image") > -1 && replaceStr.type.indexOf("image") > -1) {
            imgData.push({search: searchStr.string, replace: replaceStr.string});
          }
          if (searchStr.type.indexOf("string") > -1 && replaceStr.type.indexOf("string") > -1) {
            (function() {
              var success;

              if (replaceStr.image) {
                var success = (function() {
                  var image  = replaceStr.image;
                  return function(nodeE) {
                    $(nodeE).after(image);
                  };
                })();
              } else if(replaceStr.link) {
                var success = (function() {
                  var link  = replaceStr.link,
                    pos = replaceStr.string.search(/^\s*\$LINK\$/gi) > -1 ? "before" : "after";
                  return function(nodeE) {
                    if (pos === "before") {
                      $(nodeE).before(link);
                    } else {
                      $(nodeE).after(link);
                    }
                  };
                })();
                replaceStr.string = replaceStr.string.replace("$LINK$", "");
              }

              try {
                strData.data.push({search: new RegExp(["(\n)*", searchStr.string, "(\n)*"].join(""), "g"), replace: replaceStr.string, success: success});
              } catch(e) {}
            })();
          }
        }
      }

      _$RL.replaceImage(imgData);
      _$RL.replaceText(strData);

      return this;
    },

    /**
     * Track visit event.
     *
     * Serialized data must follow the order stated in the YAML file.
     * Fire capture.visit event.
     *
     * .trackVisit()
     */
    trackVisit: function() {
      var _$RL = $RL,       // $RL alias.
          _$CAPTURE = this, // $CAPTURE alias.
          $ = $RL.jq;       // jQuery alias.

      sessionStorage.setItem("rl_debug_web_storage", 1);
      sessionStorage.setItem("rl_debug_visit_request", 0);
      sessionStorage.setItem("rl_debug_visit_response", 0);
      sessionStorage.setItem("rl_debug_get_visit_data", 0);

      // Retrieve visit & visitor ids.
      _$RL.CaptureSiteStorage.getItem(["visitor_id", "visit_id", "referrer_type"], function(data) {
        var ts = parseInt((new Date()).getTime() / 1000),
          visitorId = typeof data.visitor_id === "string" ? data.visitor_id : "",
          visitData = (typeof data.visit_id === "string" && data.visit_id !== "") ? JSON.parse(data.visit_id) : {},
          visitTS = visitData.ts || 0,
          visitId = visitData.id || "",
          referrerType = typeof data.referrer_type === "string" ? data.referrer_type : "",
          previousVisitId,
          previousReferrerType;

        sessionStorage.setItem("rl_debug_get_visit_data", parseInt(sessionStorage.getItem("rl_debug_get_visit_data") || 0) + 1);

        if (visitorId === "") {
          // New visitor.
          referrerType = visitId = "";
        } else {
          // Previous visitor but check to see if new visit.

          if (visitId && referrerType) {
            // Save previous session info just in case this is a continuation.
            previousVisitId = visitId;
            previousReferrerType = referrerType;
          }

          var isInternalPage = (function(gc) {
            // Check if page is internal.
            var domains = gc.domains.internal || [],
                hostname = gc.pageUri.hostname;

            for (var i = -1, length = domains.length; ++i < length;) {
              if (hostname.indexOf(domains[i].toLowerCase()) === 0) {
                // Page is internal.
                return true;
              }
            }

            // Page is external.
            return false;
          })(globalConfig);

          if (isInternalPage === false) {
            // New visit since domain is not internal.
            referrerType = visitId = "";
          } else if (globalConfig.referrer === "" && ts - visitTS >= 86400) {
            // Last visit was 24+ hours ago.
            referrerType = visitId = "";
          } else if (globalConfig.referrer !== "") {
            var isInternalReferrer = (function(gc) {
              // Check if referrer is internal.
              var domains = gc.domains.internal || [],
                referrer = gc.referrer.replace(/^https?:\/\//, "");

              for (var i = -1, length = domains.length; ++i < length;) {
                if (referrer.indexOf(domains[i].toLowerCase()) === 0) {
                  // Came from an internal page.
                  return true;
                }
              }

              // Came from an external page.
              return false;
            })(globalConfig);

            if (isInternalReferrer === false) {
              // New visit since page is referred from an external source.
              referrerType = visitId = "";
            }
          }
        }

        try {
          // Cache visitor id, visit id, and referrer type if visitor and visit are valid.
          sessionStorage.setItem("visit_id", visitId);
          sessionStorage.setItem("visitor_id", visitorId);
          sessionStorage.setItem("referrer_type", referrerType);
        } catch(err) {}

        if (visitorId && !$.cookie('rl_visitor_history')) {
          $.cookie('rl_visitor_history', visitorId);
        }

        if (visitId) {
          if (globalConfig.campaign.isPaidCampaign === false && referrerType) {
            if (_$RL.config.config.robot === true && referrerType === "DIRECT") {
              // Do not replace if visited by a robot and the referral type is "DIRECT".
              return;
            }

            // Phone and string replacements for organic visit.
            _$CAPTURE.replace(referrerType);
          }

          // Dispatch visit event.
          _$RL.Events.dispatch("capture", "visit", {visitorId: visitorId, visitId: visitId, referrerType: referrerType});

          // Not new visit.
          return;
        } else {
          // Track visit callback.
          window.rl_captureTrackVisit = function(data) {
            sessionStorage.setItem("rl_debug_visit_response", parseInt(sessionStorage.getItem("rl_debug_visit_response") || 0) + 1);

            // Manage visit id, visitor id, and referrer type.
            if ($.isEmptyObject(data)) {
              // Continuation of a previous session.
              if (previousVisitId) {
                visitId = previousVisitId;
                previousVisitId = undefined;
              }
              if (previousReferrerType) {
                referrerType = previousReferrerType;
                previousReferrerType = undefined;
              }
            } else {
              if (typeof data.visitor_id === "string" && data.visitor_id !== "") {
                visitorId = data.visitor_id;
              }
              if (typeof data.visit_id === "string" && data.visit_id !== "") {
                visitId = data.visit_id;
              }
              if (typeof data.referrer_type === "string" && data.referrer_type !== "") {
                referrerType = data.referrer_type;
              }
            }

            if (visitId && visitorId) {
              try {
                // Cache visitor id, visit id, and referrer type.
                sessionStorage.setItem("visit_id", visitId);
                sessionStorage.setItem("visitor_id", visitorId);
                sessionStorage.setItem("referrer_type", referrerType);
              } catch(err) {}
            }

            if (visitorId && !$.cookie('rl_visitor_history')) {
              $.cookie('rl_visitor_history', visitorId);
            }

            // Save visit id, visitor id, and referral type.
            _$RL.CaptureSiteStorage.setItem([
              {k: "visitor_id", v: visitorId, e: ""},
              {k: "visit_id", v: JSON.stringify({id: visitId, ts: parseInt((new Date()).getTime() / 1000)})},
              {k: "referrer_type", v: referrerType}
            ]);

            if (globalConfig.campaign.isPaidCampaign === false && referrerType) {
              if (_$RL.config.config.robot === true && referrerType === "DIRECT") {
                // Do not replace if visited by a robot and the referral type is "DIRECT".
                return;
              }

              // Phone and string replacements for organic visit.
              _$CAPTURE.replace(referrerType);
            }

            // Dispatch visit event.
            _$RL.Events.dispatch("capture", "visit", {visitorId: visitorId, visitId: visitId, referrerType: referrerType});
          };

          // Track new visit.
          _$RL.CaptureWS.trackVisit({
            visitId: visitId || previousVisitId,
            visitorId: visitorId,
            referrer_source: globalConfig.campaign.isPaidCampaign ? "PAID" : "ORGANIC"
          }, window.rl_captureTrackVisit);

          sessionStorage.setItem("rl_debug_visit_request", parseInt(sessionStorage.getItem("rl_debug_visit_request") || 0) + 1);
        }
      });

      return _$CAPTURE;
    }
  };


  $RL.CAPTURE = $CAPTURE;
})(window, undefined, window.RL);
/**
 * Total Live Chat.
 *
 *
 * Display a chat application (provided by APEX CHAT).
 *
 *
 * Example product settings in the config file (rl_config.js):
 *
 * config: {
 *   id: "USA2621094"
 * }
 *
 * id - string - unique product id.
 */

function ChatProduct(window, RL) {
  "use strict";

  var CHAT = {
    /**
     * Init.
     *
     * Fire chat.load event.
     *
     * .init()
     */
    init: function() {
      var self = this,
        chatConfig = RL.config.products.chat;

      // Sanity check.
      if (typeof chatConfig.apex_chat_id !== "string" || chatConfig.apex_chat_id === "") {
        // Chat id is required.
        return this;
      }

      // Load Apex Chat library.
      RL.lib.loadJs("//www.apexchat.com/scripts/dyns.js", function() {self.loadChatWidget.call(self);});

      return this;
    },

    loadChatWidget: function() {
      var chatConfig = RL.config.products.chat;

      this.initializeChat(chatConfig.apex_chat_id);

      // Dispatch load event.
      RL.Events.dispatch("chat", "load");
    },

    initializeChat: function(id, rl_adid, rl_key) {
      window.init(id);
    }
  };


  RL.CHAT = CHAT;
}

ChatProduct(window, window.RL);
/**
 * Total Video Now. 
 * 
 * 
 * Display a video player in a user-specified DOM or in an overlay.
 * 
 * 
 * Example product settings in the config file (rl_config.js):
 * 
 * config: {
 *   cssSelector: "#my-div",
 *   closeButtonText: "",
 *   closeButtonImage: "http://www.images.com/button.jpg",
 *   closeButtonWidth: "100",
 *   closeButtonHeight: "50",
 *   autoplay: "1",
 *   video: "<object id=\"player_swf\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"400\" height=\"332\" codebase=\"http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab\"><param name=\"movie\" value=\"http://cdn-akm.vmixcore.com/core-flash/UnifiedVideoPlayer/UnifiedVideoPlayer.swf?player_id=80b916b86efd0417de7e77c4c21f069b\"></param><param name=\"allowScriptAccess\" value=\"always\"></param><param name=\"allowFullScreen\" value=\"true\"></param><param name=\"wmode\" value=\"transparent\"></param><param name=\"flashVars\" value=\"player_id=80b916b86efd0417de7e77c4c21f069b&services_url=http://cdn-akm.vmixcore.com/core-flash/UnifiedVideoPlayer/services.xml&env=&token=V0Uo0cQHKBkX5aiwxLovkxeeJiBegwHRRD\"></param> <embed name=\"player_swf\" src=\"http://cdn-akm.vmixcore.com/core-flash/UnifiedVideoPlayer/UnifiedVideoPlayer.swf?player_id=80b916b86efd0417de7e77c4c21f069b\" width=\"400\" height=\"332\" allowScriptAccess=\"always\" allowFullScreen=\"true\" wmode=\"transparent\" type=\"application/x-shockwave-flash\" flashvars=\"player_id=80b916b86efd0417de7e77c4c21f069b&services_url=http://cdn-akm.vmixcore.com/core-flash/UnifiedVideoPlayer/services.xml&env=&token=V0Uo0cQHKBkX5aiwxLovkxeeJiBegwHRRD\" swliveconnect=\"true\" pluginspage=\"http://www.adobe.com/go/getflashplayer\"></embed></object>", 
 * }
 * 
 * cssSelector - string - (optional) DOM node id.  if not populated, video player will be displayed in an overlay window.
 * closeButtonText - string - (optional) user specified close button text.  if this and closeButtonImage are not populated, text "X" is used.
 * closeButtonImage - string - (optional) close button image url.
 * closeButtonWidth - string - (optional) close button image width in pixels.
 * closeButtonHeight - string - (optional) close button image height in pixels.
 * autoplay - string - 1 to autoplay video when finish loading and 0 to not.
 * video - string - video embed code.
 */

(function(window, undefined, $RL) {
	"use strict";
	
	var $VIDEO = {},									// Video widget (window.RL.VIDEO).
    videoConfig,                // Video config alias
		videoE;											// Video node.
		

	/**
	 * Create close button.
	 * 
	 * createCloseButton()
	 */
	var createCloseButton = function() {
		var $ = $RL.jq,																		// jQuery alias.
			vConfig = this.config(),														// Cleaned up settings.
			$containerE = $("<div>").addClass("rl-video-close-container"),					// Close button container node.
			$buttonE = $("<a>", {href: "javascript:void(0);"}).addClass("rl-video-close"),	// Close button node.
			$buttonImageE;																	// Close button image node.
		
		if (vConfig.closeButtonText !== "") {
			// Create close button with user-specified text.
			$buttonE.html(vConfig.closeButtonText);
		} else if (vConfig.closeButtonImage !== "") {
			// Create close button with an user-specified image.
			$buttonImageE = $("<img>", {src: vConfig.closeButtonImage, alt: ""});
			$buttonE.append($buttonImageE);
		} else {
			// Create close button with a default text.
			$buttonE.html("X");
		}
		
		// Apply width and height close button image if exist.
		if (vConfig.width !== "" && $buttonImageE) {
			$buttonImageE.css({width: vConfig.width + "px"});
		}
		if (vConfig.height !== "" && $buttonImageE) {
			$containerE.css({height: vConfig.height + "px"});
			$buttonImageE.css({height: vConfig.height + "px"});
		}
		
		return $containerE.append($buttonE).get(0);
	};	
	
	/**
	 * Create the video player.
	 * 
	 * Create the iframe node then write the video embed code into iframe's document object.
	 * 
	 * create() 
	 */	
	var create = function(overlay) {
		var IFRAME_DOC_CONTENT = ["<html><head><style>html,body{padding:0;margin:0;}</style><script type=\"text/javascript\">rl_events = function(e) {if (typeof window.parent.rlvideo_events === \"function\") {window.parent.rlvideo_events(e);}};</script></head><body>", "</body></html>"],	// Iframe content.
			_$VIDEO = this,				// $VIDEO alias.
			$ = $RL.jq,					// jQuery alias.
			vConfig = _$VIDEO.config(),	// Cleaned up settings.
			video = vConfig.video,		// Video embed code.
			$iframeE = $("<iframe>", {id: "rl-video-iframe", scrolling: "no", frameborder: 0});	// Iframe node.
			
		if (vConfig.autoplay === "1" || overlay === true) {
			// Set autoplay if specified or is in an overlay.
			video = video.replace("name=\"flashVars\" value=\"", "name=\"flashVars\" value=\"auto_play=1&").replace("type=\"application/x-shockwave-flash\" flashvars=\"", "type=\"application/x-shockwave-flash\" flashvars=\"auto_play=1&");
		}
		
		if (overlay === true) {
			// Attach auto-close event handler for video played in an overlay.
			window.rlvideo_events = function(e) {
				if (e.type === "video_complete") {
					setTimeout(
						function() {
							_$VIDEO.hide();	
						},
						750
					);
				}
			};
			video = video.replace("name=\"flashVars\" value=\"", "name=\"flashVars\" value=\"event_handler=rl_events&").replace("type=\"application/x-shockwave-flash\" flashvars=\"", "type=\"application/x-shockwave-flash\" flashvars=\"event_handler=rl_events&");
		}
		
		$iframeE.ready(function() {
			// Write VMIX video JS to iframe's document.
			var iframeDocE = $iframeE.contents().get(0);
			iframeDocE.open();
			iframeDocE.write(IFRAME_DOC_CONTENT.join(video));
			iframeDocE.close();
		});
		
		return $iframeE.get(0);
	};
	

	$VIDEO = {
		/**
		 * Get product settings.
		 *
		 * Clean and verify data.  If data is not valid, it is set to empty string.
		 * cssSelector node is verified to exist or else set to empty string.
		 *
		 * .config(key)
		 * key - string - (optional) setting to retrieve.  if not provided, all settings are returned.
		 */
		config: function(key) {
			var $ = $RL.jq,				// jQuery alias.
				vConfig = videoConfig;	// Video config alias.
				
			// Helper function to clean up setting.
			var clean = function(key, value) {
				switch (key) {
					case "cssSelector":
						if (typeof value === "string" && value !== "") {
							if (value.charAt(0) !== "#") {
								// Only node ids are accepted.
								value = "#" + value;
							}
							
							if ($(value).length > 0) {
								// User-specified node exist.
								return value;
							}
						}
						return "";
					
					case "closeButtonText":
					case "closeButtonImage":
						return typeof value === "string" ? value : "";
						
					case "closeButtonWidth":
					case "closeButtonHeight":
						return $.isNumeric(value) ? String(value) : "";
						
					case "autoplay":
						return value == "1" ? "1" : "0";
						
					case "video":
						return (typeof value === "string" && value !== "") ? value.replace(/&?auto_play=[01]/g, "") : "";
						
					default:
						return "";
				}
			};
				
			if (typeof key === "string" && key !== "") {
				// Return specfic setting.
				if (!vConfig[key]) {
					// Key not found.
					return "";
				}
				return clean(key, vConfig[key]);
			} else {
				// Return all settings.		
				return {
					cssSelector: clean("cssSelector", vConfig.cssSelector),
					closeButtonText: clean("closeButtonText", vConfig.closeButtonText),
					closeButtonImage: clean("closeButtonImage", vConfig.closeButtonImage),
					closeButtonWidth: clean("closeButtonWidth", vConfig.closeButtonWidth),
					closeButtonHeight: clean("closeButtonHeight", vConfig.closeButtonHeight),
					autoplay: clean("autoplay", vConfig.autoplay),
					video: clean("video", vConfig.video)
				};
			}
		},
		
		/**
		 * Hide and remove video player.
		 *
		 * Fade out node containing the video player and remove from DOM.
		 * Fire video.hide event.
		 *
		 * .hide()
		 */
		hide: function() {
			var _$RL = $RL,										// $RL alias.
				_$EMAIL = this,									// $EMAIL alias.
				$ = $RL.jq,										// jQuery alias.
				$videoContainerE = $("#rl-video-container");	// Video container (overlay) node.
			
			if ($videoContainerE.length > 0) {
				// Video player displayed in an overlay.
				$videoContainerE.fadeOut("fast", function() {
					$videoContainerE.remove();
					videoE = $videoContainerE = undefined;
				});
			} else if (videoE !== undefined) {
				// Email form displayed in a user-specified DOM node.
				var $videoE = $(videoE);
				$videoE.fadeOut("fast", function() {
					$videoE.remove();
					$videoE = videoE = undefined;
				});
			}
			
			// Dispatch hide event.
			_$RL.Events.dispatch("video", "hide");
			
			return _$EMAIL;
		},
		
		/**
		 * Init.
		 * 
		 * Fire video.load event.
		 * 
		 * .init()
		 */
		init: function() {
			var _$RL = $RL,			// RL alias.
				_$VIDEO = this,		// $VIDEO alias.
				$ = _$RL.jq;		// jQuery alias.

      videoConfig = $RL.config.products.video;		// Video config alias.

			$(document).ready(function() {
				// Show player.
				_$VIDEO.show(_$VIDEO.config("autoplay"));

				// Dispatch load event.
				_$RL.Events.dispatch("video", "load");
			});
					
			return _$VIDEO;
		},
		
		/**
		 * Display video.
		 *
		 * If a DOM element ID XXX is specified in the config, the DOM structure is #XXX->IFRAME; otherwise,
		 * DIV#rl-video-container->DIV#rl-video->DIV#rl-video-close-button,IFRAME.
		 * Fire video.show event.
		 *
		 * .show(autoplay)
		 * autoplay - boolean - autoplay video when loaded
		 */
		show: function(autoplay) {
			var _$RL = $RL,					// RL alias.
				_$VIDEO = this,				// $VIDEO alias.
				$ = _$RL.jq,				// jQuery alias.
				cssSelector = _$VIDEO.config("cssSelector");	// Cleaned up settings.
				
			if (videoE !== undefined) {
				// Video is already displayed.
				return false;
			}
			
			if (cssSelector !== "") {
				// Look for user-specified DOM node.
				var $videoE = $(cssSelector);
				if ($videoE.length > 0) {
					// Create video in user-specified DOM node.
					videoE = $videoE
						.append(create.call(_$VIDEO))
						.get(0);
				}
			} else {
				// Create video to put in an overlay.
				videoE = $("<div>", {id: "rl-video"})
					.append(createCloseButton.call(_$VIDEO))
					.get(0);
				
				// Create overlay.
				$("<div>", {id: "rl-video-container"})
					.click(function() {
						// Click on overlay will close video player.
						_$VIDEO.hide();
					})
					.append(videoE)
					.css({display: "none"})
					.appendTo($("body"))
					.fadeIn("fast");
				
				// Parent node needs to be on the DOM first.
				videoE.appendChild(create.call(_$VIDEO, true));
			}
			
			// Dispatch show event.
			_$RL.Events.dispatch("video", "show");
		}
	};

	
	$RL.VIDEO = $VIDEO;
})(window, undefined, window.RL);
/**
 * Remarketing.
 *
 *
 * Drop remarketing pixels.  Pixels can be an image, iframe, or script tag.
 *
 *
 * Example product settings in the config file (rl_config.js):
 *
 * config: {
 *   pixels: [
 *     "<img src=\"http://ad.reachlocal.com/pixel?id=294157&t=2\" width=\"1\" height=\"1\" />",
 *     "<script type=\"text/javascript\"> adroll_adv_id = \"H54CPKZH5BFBBEUFKYCRH2\"; adroll_pix_id = \"TPZQZZAMYVFH5FFYYJP4RD\"; (function () { var oldonload = window.onload; window.onload = function(){    __adroll_loaded=true;    var scr = document.createElement(\"script\");    var host = ((\"https:\" == document.location.protocol) ? \"https://s.adroll.com\" : \"http://a.adroll.com\");    scr.setAttribute('async', 'true');    scr.type = \"text/javascript\";    scr.src = host + \"/j/roundtrip.js\";    document.documentElement.firstChild.appendChild(scr);    if(oldonload){oldonload()}}; }()); </script>",
 *     "<iframe src='http://pixel.fetchback.com/serve/fb/pdc?cat=&name=Halleen+Kia&sid=2749' scrolling='no' width='1' height='1' marginheight='0' marginwidth='0' frameborder='0'></iframe>"
 *   ]
 * }
 *
 * pixels - array - an array of strings.
 */

(function(window, undefined, $RL) {
	"use strict";

	var $REMARKETING = {},											// Remarketing widget (window.RL.REMARKETING).
    globalConfig,
    siteConfig,
    remarketingConfig;


	$REMARKETING = {
		/**
		 * Drop pixels.
		 *
		 * Pixels can be images, IFRAMEs, and JavaScript snippets.
		 * Pixel code is embedded onto the DOM, and then retrieved and processed as an DOM object.
		 *
		 * Fire remarketing.drop event.
		 *
		 * .drop(pixels)
		 * pixels - array - list of pixels.  each array element is a string.
		 */
		drop: function() {
			var _$RL = $RL,					// $RL alias.
				$ = _$RL.jq,				// jQuery alias.
				$rootE = $("#rl-root");		// #rl-root DOM node.

			_$RL.CaptureSiteStorage.getItem(["visit_id"], function(data) {
				if (typeof data.visit_id === "undefined") {
					if ($rootE.length < 1) {
						// Create hidden DIV to drop pixel(s).
						$rootE = $("<div>", {id: "rl-root"}).css({height: "0", width: "0"}).appendTo($("body"));
					}

					var campaignData = globalConfig.campaign_data,
						campaignKey = [siteConfig.platform, siteConfig.campaign.cid].join("_"),
						masterCampaignId = (campaignData[campaignKey] || {}).master_campaign_id,
						remarketingPixels;

					if (typeof masterCampaignId !== 'undefined' && typeof remarketingConfig[masterCampaignId] !== 'undefined') {
						if (typeof remarketingConfig[masterCampaignId][siteConfig.campaign.scid] !== 'undefined') {
							remarketingPixels = remarketingConfig[masterCampaignId][siteConfig.campaign.scid];
						} else {
							remarketingPixels = remarketingConfig[masterCampaignId]["default"];
						}
						if (typeof remarketingPixels["tags"] == "string" && remarketingPixels["tags"] !== "") {
							var pixelId = "rl-pixel-" + pixelId;
							$("<div>", {id: pixelId}).html(remarketingPixels["tags"] ).appendTo($rootE);
						}
						if (typeof remarketingPixels["scripts"] == "string" && remarketingPixels["scripts"] !== "") {
							(function(script) {
								try {
									// Get and execute JS code.
									eval.call(window, script);
								} catch (err) {
								}
							})(remarketingPixels["scripts"]);
						}
					}

					// Dispatch drop event.
					_$RL.Events.dispatch("remarketing", "drop");

					return this;
				}
			});
		},

		/**
		 * Init.
		 *
		 * Fire remarketing.load event.
		 *
		 * .init()
		 */
		init: function() {
			var _$RL = $RL,				// $RL alias.
				_$REMARKETING = this,	// $REMARKETING alias.
				$ = _$RL.jq;

      globalConfig = $RL.config;									// Global config alias.
      siteConfig = $RL.config.config;
      remarketingConfig = $RL.config.products.remarketing;		// Remarketing config alias.

			if (siteConfig.campaign.isPaidCampaign === true && siteConfig.campaign.isSrcProxy === true) {
				// Do not drop pixel(s) if proxied.
				return _$REMARKETING;
			}

			$(document).ready(function() {
				// Drop pixels.
				_$REMARKETING.drop();

				// Dispatch load event.
				_$RL.Events.dispatch("remarketing", "load");
			});

			return _$REMARKETING;
		}
	};


	$RL.REMARKETING = $REMARKETING;
})(window, undefined, window.RL);
/**
 * Email Form.
 *
 *
 * Display a generic email form in a user-specified DOM node or in an overlay window.
 *
 *
 * Example product settings in the config file (rl_config.js):
 *
 * config: {
 *   company: "ABC Company",
 *   companyEmail: "info@abc.com",
 *   cssSelector: "#my-div",
 *   height: "400",
 *   width: "400"
 * }
 *
 * company - string - (optional) company name displayed on the email form header section.
 * companyEmail - string - (optional) company email address (target email address).
 * cssSelector - string - (optional) DOM node id.  if not populated, email form will be displayed in an overlay window.
 * height - string - (optional) email form container node height in pixel.
 * width - string - (optional) email form container node width in pixel.
 */

(function(window, undefined, $RL) {
  "use strict";

  var $EMAIL = {},                  // Email widget (window.RL.EMAIL).
    siteConfig,
    emailConfig,
    emailE;                     // Email form node.


  /**
   * Create a form field.
   *
   * create(options)
   * options - object - key-value mapping
   *
   * options object:
   * email - string - company email address (target email address)
   */
  var create = function(options) {
    var FIELDS = [
        {
          label: {
            "id": "rl-email-label-name",
            "class": "",
            "value": "Name"
          },
          field: {
            "id": "rl-email-name",
            "class": "",
            "name": "name",
            "type": "text"
          },
          validators: ["required"]
        },
        {
          label: {
            "id": "rl-email-label-email",
            "class": "",
            "value": "E-Mail"
          },
          field: {
            "id": "rl-email-email",
            "class": "",
            "name": "email",
            "type": "text"
          },
          validators: ["required", "email"]
        },
        {
          label: {
            "id": "rl-email-label-phone",
            "class": "",
            "value": "Phone"
          },
          field: {
            "id": "rl-email-phone",
            "class": "",
            "name": "phone",
            "type": "text"
          },
          validators: []
        },
        {
          label: {
            "id": "rl-email-label-message",
            "class": "",
            "value": "Message"
          },
          field: {
            "id": "rl-email-message",
            "class": "",
            "name": "message",
            "type": "textarea"
          },
          validators: ["required"]
        }
      ],          // Default form fields.
      _$EMAIL = this,   // $EMAIL alias.
      $ = $RL.jq,     // jQuery alias.
      $formE = $("<form>", {id: "rl-email-form", method: "POST"});  // Form element node.

    for (var i = -1, iLength = FIELDS.length; ++i < iLength;) {
      var f = FIELDS[i],
        label = f.label,
        field = f.field,
        validators = f.validators,
        $labelE,    // Label node.
        $fieldE;    // Field node.

      // Create field node.
      switch(field.type) {
        case "text":
          $fieldE = $("<input>", {type: "text"});
          break;

        case "textarea":
          $fieldE = $("<textarea>");
          break;

        default:
          continue;
      }

      // Create label node.
      $labelE = $("<label>", {id: label.id, "for": field.id}).addClass("rl-email-label").html(label.value).appendTo($formE);

      if (validators.indexOf("required") > -1) {
        // Display required text.
        $labelE.append($("<span>").addClass("rl-email-required").html("required"));
      }

      // Bind validators.
      for (var j = -1, jLength = validators.length; ++j < jLength;) {
        validate.call(_$EMAIL, $fieldE.get(0), validators[j]);
      }

      $labelE.append($fieldE.attr({id: field.id, name: field.name}).addClass("rl-email-field"));
    }

    // Attach buttons to DOM.
    $formE
      .append($("<input>", {type: "submit", name: "submit", value: "Send Message"}).addClass("rl-button"))
      .append(
        $("<input>", {type: "button", name: "cancel", value: "Cancel"}).addClass("rl-button").click(function() {
          _$EMAIL.hide();
        })
      )
      .submit(function() {
        var $formE = $(this),
          $fieldsE = $formE.find(".rl-email-field"),
          validated = 1;

        // Verify all fields are validated.
        for (var i = -1, length = $fieldsE.length; ++i < length;) {
          var $fieldE = $($fieldsE.get(i));

          // Trigger validation.
          $fieldE.blur();

          // Set form validation flag.
          if ($fieldE.data("validated") === 0) {
            validated = 0;
          }
        }

        if (validated === 1) {
          // Form has been validated.

          // Track CVT.
          trackCvt.call(_$EMAIL, {cvtType: 3, email: options.email});

          // Track email form data.
          trackEmail.call(_$EMAIL, {email: options.email});

          // Display confirmation.
          $(emailE)
            .empty()
            .append($("<span>").addClass("rl-email-confirmation").html("Your message has been sent."));

          _$EMAIL.hide(1000);
        }

        return false;
      });

    return $formE.get(0);
  };

  /**
   * Track CVTs.
   *
   * trackCvt(data)
   * data - object - key-value mapping
   *
   * data object:
   * cvtId - string - (optional) cvt id
   * cvtType - string/number - cvt type (e.g. 2, 3)
   * email - string - company email address (target email address)
   */
  var trackCvt = function(data) {
    var _$RL = $RL,     // $RL alias.
      $ = $RL.jq,     // jQuery alias.
      visitorId = sessionStorage.getItem("visitor_id"), // Visitor id.
      visitId = sessionStorage.getItem("visit_id"),   // Visit id.
      payload,
      eventId;

    if (siteConfig.campaign.isPaidCampaign === false) {
      // Only track CVT if paid campaign.
      return;
    }

    payload = {
      cvtId: data.cvtId || "",
      cvtType: data.cvtType,
      customer_name: $("#rl-email-name").val(),
      customer_email: $("#rl-email-email").val(),
      customer_phone: $("#rl-email-phone").val(),
      target_email: data.email
    };

    if (visitId !== null && visitorId !== null) {
      payload.visit_id = visitId;
      payload.visitor_id = visitorId;

      // Track CVT since visit and visitor ids are available.
      _$RL.CaptureWS.trackCvt(payload);
      return;
    }

    // Wait for visit and visitor ids to be available.
    eventId = _$RL.Events.subscribe("capture", "visit", function(data) {
      _$RL.Events.unsubscribe("capture", "visit", eventId);

      payload.visit_id = data.visitId;
      payload.visitor_id = data.visitorId;

      // Track CVT since visit and visitor ids are available.
      _$RL.CaptureWS.trackCvt(payload);
    });
  };

  /**
   * Track Email post.
   *
   * trackEmail(data)
   * data - object - key-value mapping
   *
   * data object:
   * email - string - company email address (target email address)
   */
  var trackEmail = function(data) {
    var _$RL = $RL,     // $RL alias.
      $ = $RL.jq,     // jQuery alias.
      visitorId = sessionStorage.getItem("visitor_id"), // Visitor id.
      visitId = sessionStorage.getItem("visit_id"),   // Visit id.
      payload,
      eventId;

    payload = {
      target_email: data.email,
      data: JSON.stringify({
        customer_name: $("#rl-email-name").val(),
        customer_email: $("#rl-email-email").val(),
        customer_phone: $("#rl-email-phone").val(),
        message: $("#rl-email-message").val()
      })
    };

    if (visitId !== null && visitorId !== null) {
      payload.visit_id = visitId;
      payload.visitor_id = visitorId;

      // Track CVT since visit and visitor ids are available.
      _$RL.CaptureWS.trackEmail(payload);
      return;
    }

    // Wait for visit and visitor ids to be available.
    eventId = _$RL.Events.subscribe("capture", "visit", function(data) {
      _$RL.Events.unsubscribe("capture", "visit", eventId);

      payload.visit_id = data.visitId;
      payload.visitor_Id = data.visitorId;

      // Track CVT since visit and visitor ids are available.
      _$RL.CaptureWS.trackEmail(payload);
    });
  };

  /**
   * Attach validator check to a field node.
   *
   * validate(fieldE, type)
   * fieldE - object - form field node
   * type - string - type of validator (e.g. required, email)
   */
  var validate = (function() {
    var regex = {
      // Regex taken from http://www.zparacha.com/validate-email-address-using-javascript-regular-expression/#.UJl4QsXA98E.
      email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    };  // Collection of validation regex.

    // Helper function to set error message.
    var set = function(type, message) {
      var $ = $RL.jq,     // jQuery alias.
        $fieldE = this,   // Field node.
        $validationTextE = $fieldE.siblings(".rl-email-required");    // Error message node.

      if (typeof message === "string" && message !== "") {
        if ($validationTextE.length === 0) {
          // Create new validation text.
          $validationTextE = $("<span>").addClass("rl-email-required").html(message).before($fieldE);
        } else {
          // Save existing validation text.
          $validationTextE.data("validation_text", $validationTextE.html());

          // Edit message.
          $validationTextE.html(message);
        }
      }
    };

    // Helper function remove error message.
    var clear = function(type) {
      var $fieldE = this,   // Field node.
        $validationTextE = $fieldE.siblings(".rl-email-required"),    // Error message span node.
        existingValidationText;

      if ($validationTextE.length > 0) {
        existingValidationText = $validationTextE.data("validation_text");

        if (typeof existingValidationText === "string" && existingValidationText != "") {
          // Display original message.
          $validationTextE.html(existingValidationText);
        }
      }
    };

    // Helper function
    var mark = function() {
      var $fieldE = this,
        validators = $fieldE.data("validators") || {},
        validated = 1;

      for (var i in validators) {
        validated &= validators[i];
      }

      if (validated === 0) {
        $fieldE.parent().addClass("error");
      } else {
        $fieldE.parent().removeClass("error");
      }

      $fieldE.data("validated", validated);
    };

    return function(fieldE, type) {
      var $ = $RL.jq,   // jQuery alias.
        $fieldE = $(fieldE),
        validators;

      // Sanity check.
      if (typeof fieldE !== "object" || fieldE.nodeType !== 1) {
        // Not a valid DOM object.
        return false;
      }

      switch (type) {
        case "required":
          $fieldE.bind("blur", {validator: type}, function($e) {
            var $fieldE = $(this),
              validators = $fieldE.data("validators") || {},
              type = $e.data.validator;

            if ($fieldE.val().trim() === "") {
              // Empty string.
              validators[type] = 0;
              set.call($fieldE, type);
            } else {
              validators[type] = 1;
              clear.call($fieldE, type);
            }

            $fieldE.data("validators", validators);

            mark.call($fieldE);
          });
          return;

        case "email":
          $fieldE.bind("blur", {validator: type}, function($e) {
            var $fieldE = $(this),
              value = $fieldE.val(),
              validators = $fieldE.data("validators") || {},
              type = $e.data.validator;

            if (value.trim() === "") {
              // No validation on empty strings.
              validators[type] = 1;
              clear.call($fieldE, type);
            } else if (regex.email.test(value)) {
              // Valid email address.
              validators[type] = 1;
              clear.call($fieldE, type);
            } else {
              // Invalid email address.
              validators[type] = 0;
              set.call($fieldE, type, "Invalid");
            }

            $fieldE.data("validators", validators);

            mark.call($fieldE);
          });
          return;

        default:
          return;
      }
    };
  })();


  $EMAIL = {
    /**
     * Get product settings.
     *
     * Clean and verify data.  If data is not valid, it is set to empty string.
     * cssSelector node is verified to exist or else set to empty string.
     *
     * .config()
     */
    config: function() {
      var $ = $RL.jq,           // jQuery alias.
          config = emailConfig; // Email config alias.

      return {
        cssSelector: (function(cssSelector) {
          if (typeof cssSelector === "string" && cssSelector !== "") {
            if (cssSelector.charAt(0) !== "#") {
              // Only node ids are accepted.
              cssSelector = "#" + cssSelector;
            }

            if ($(cssSelector).length > 0) {
              // User-specified node exist.
              return cssSelector;
            }
          }

          return "";
        })(config.cssSelector),
        width: $.isNumeric(config.width) ? String(config.width) : "",
        height: $.isNumeric(config.height) ? String(config.height) : "",
        company: typeof config.company === "string" ? config.company : "",
        companyEmail: typeof config.companyEmail === "string" ? config.companyEmail : ""
      };
    },

    /**
     * Hide and remove email form.
     *
     * Fade out node containing the email form and remove from DOM.
     * Fire email.hide event.
     *
     * .hide(delay)
     * delay - string/number - (optional) delay in milliseconds
     */
    hide: function(delay) {
      var _$RL = $RL,                   // $RL alias.
          _$EMAIL = this,                 // $EMAIL alias.
          $ = $RL.jq,                   // jQuery alias.
          $emailContainerE = $("#rl-email-container");  // Email form container (overlay) node.

      // Sanity check.
      if (!$.isNumeric(delay)) {
        delay = "fast";
      }

      if ($emailContainerE.length > 0) {
        // Email form displayed in an overlay.
        $emailContainerE.fadeOut(delay, function() {
          $emailContainerE.remove();
          emailE = $emailContainerE = undefined;
        });
      } else if (emailE !== undefined) {
        // Email form displayed in a user-specified DOM node.
        var $emailE = $(emailE);
        $emailE.fadeOut(delay, function() {
          $emailE.remove();
          $emailE = emailE = undefined;
        });
      }

      // Dispatch hide event.
      _$RL.Events.dispatch("email", "hide");

      return _$EMAIL;
    },

    /**
     * Init.
     *
     * Fire email.load event.
     *
     * .init()
     */
    init: function() {
      var _$RL = $RL,       // RL alias.
          _$EMAIL = this,   // $EMAIL alias.
          $ = $RL.jq;       // jQuery alias.

      siteConfig = $RL.config.config;         // Global config alias.
      emailConfig = $RL.config.products.email;    // Email config alias.

      _$RL.lib.isOptedOut(function(cookie) {
        // Check for opt-out.
        if (cookie !== false) {
          return;
        }

        $(document).ready(function() {
          // Replace existing email links.
          _$EMAIL.replace();

          // Dispatch load event.
          _$RL.Events.dispatch("email", "load");
        });
      });

      return _$EMAIL;
    },

    /**
     * Replace email links.
     *
     * Fire email.replace event.
     *
     * .replace(nodeE)
     * nodeE - object - (optional) parent node to search and replace
     */
    replace: function(nodeE) {
      var _$RL = $RL,       // $RL alias.
          _$EMAIL = this,   // $EMAIL alias.
          $ = $RL.jq,       // jQuery alias.
          $linksE = (typeof nodeE === "object" && nodeE.nodeType === 1) ? $(nodeE).find("a") : $("a");  // List of anchor nodes.

      if (siteConfig.hipaa === 1) {
        // Do not replace email links if HIPAA.
        return false;
      }

      $linksE.each(function() {
        var nodeE,
            emailAddress;

        if (this.protocol === "mailto:" && !$(this).hasClass("rl-no-form")) {
          nodeE = this;
          emailAddress = this.href.replace("mailto:", "");

          _$RL.replaceLink({
            nodeE: nodeE,
            uri: "javascript:void(0);",
            handler: function(e) {
              _$EMAIL.show({email: emailAddress});
            }
          });
        }
      });

      // Dispatch replace event.
      _$RL.Events.dispatch("email", "replace");

      return _$EMAIL;
    },

    /**
     * Show email form.
     *
     * Create and overlay if a DOM node is not specified.
     * Fire email.show event.
     *
     * .show(options)
     * options - object - key-value mapping
     *
     * options object:
     * company - string - (optional) company name displayed on the email form header section
     * email - string - company email address (target email address)
     */
    show: function(options) {
      var _$RL = $RL,           // $RL alias.
        _$EMAIL = this,         // $EMAIL alias.
        $ = $RL.jq,           // jQuery alias.
        eConfig = _$EMAIL.config(),   // Cleaned up settings.
        companyName = eConfig.company !== "" ? eConfig.company : (typeof options.company === "string" ? options.company : ""),      // Company name.
        companyEmail = eConfig.companyEmail !== "" ? eConfig.companyEmail : (typeof options.email === "string" ? options.email : ""); // Company email.

      // Sanity check.
      if (typeof options.email !== "string" || options.email === "") {
        // Email address is required;
        return _$EMAIL;
      }

      if (emailE !== undefined) {
        // Email form is already displayed.
        return _$EMAIL;
      }

      if (eConfig.cssSelector !== "") {
        // Look for user-specified DOM node.
        var $emailE = $(eConfig.cssSelector);
        if ($emailE.length > 0) {
          // Create email form in user-specified DOM node.
          emailE = $emailE
            .append($("<div>").addClass("rl-email-company-name").html(companyName))
            .append(create.call(_$EMAIL, options))
            .get(0);
        }
      } else {
        // Create email form to put in an overlay.
        emailE = $("<div>", {id: "rl-email"})
          .append($("<div>").addClass("rl-email-company-name").html(companyName))
          .append(create.call(_$EMAIL, {email: companyEmail}))
          .get(0);

        // Create overlay.
        $("<div>", {id: "rl-email-container"})
          .append(emailE)
          .append($("<div>").addClass("rl-email-overlay-win"))
          .css({display: "none"})
          .appendTo($("body"))
          .fadeIn("fast");
      }

      // Apply width and height to email form node.
      if (eConfig.width !== "") {
        emailE.style.width = [eConfig.width, "px"].join("");
      }
      if (eConfig.height !== "") {
        emailE.style.height = [eConfig.height, "px"].join("");
      }

      // Center email form node.
      emailE.style.marginTop = ["-", (emailE.offsetHeight / 2), "px"].join("");
      emailE.style.marginLeft = ["-", (emailE.offsetWidth / 2), "px"].join("");

      // Track CVT.
      trackCvt.call(_$EMAIL, {cvtType: 2, email: companyEmail});

      // Dispatch show event.
      _$RL.Events.dispatch("email", "show");

      return _$EMAIL;
    }
  };


  $RL.EMAIL = $EMAIL;
})(window, undefined, window.RL);
/**
 * External JS 
 *
 *
 * Add additional JS snippets or code 
 *
 *
 * Example product settings in the config file (rl_config.js):
 *
 * config: {
 *   google_analytics_id: "UA-XXXXX-X"
 * }
 *
 * google_analytics_id - string - a google analytics id provided by google. 
 */

function ExternaljsProduct(window, RL) {
  "use strict";

  var EXTERNALJS = {
    /**
     * Init.
     *
     * Fire externaljs.load event.
     *
     * .init()
     */
    init: function() {
      var self = this,
        externaljsConfig = RL.config.products.externaljs;

      // Sanity check.
      if (typeof externaljsConfig !== "object" || externaljsConfig === {}) {
        // config is required.
        return this;
      }

      if (typeof externaljsConfig.google_analytics_id === "string" && externaljsConfig.google_analytics_id !== "") {
        self.loadGoogleAnalytics(externaljsConfig.google_analytics_id);
      }

      return this;
    },

    loadGoogleAnalytics: function(google_analytics_id) {
      window._gaq = window._gaq || [];
      window._gaq.push(['_setAccount', google_analytics_id]);
      window._gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    }
  };

  RL.EXTERNALJS = EXTERNALJS;
}

ExternaljsProduct(window, window.RL);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//























;
