/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license //@ sourceMappingURL=jquery-1.10.2.min.map */

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/*! jQuery Cookie Plugin v1.3 https://github.com/carhartl/jquery-cookie */
(function(e,h,j){function k(b){return b}function l(b){return decodeURIComponent(b.replace(m," "))}var m=/\+/g,d=e.cookie=function(b,c,a){if(c!==j){a=e.extend({},d.defaults,a);null===c&&(a.expires=-1);if("number"===typeof a.expires){var f=a.expires,g=a.expires=new Date;g.setDate(g.getDate()+f)}c=d.json?JSON.stringify(c):String(c);return h.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}c=d.raw?k:l;a=h.cookie.split("; ");f=0;for(g=a.length;f<g;f++){var i=a[f].split("=");if(c(i.shift())===b)return b=c(i.join("=")),d.json?JSON.parse(b):b}return null};d.defaults={};e.removeCookie=function(b,c){return null!==e.cookie(b)?(e.cookie(b,null,c),!0):!1}})(jQuery,document);
/*! jQuery Deparam Plugin https://raw.github.com/cowboy/jquery-bbq/v1.2.1/jquery.ba-bbq.js */
(function(h){h.deparam=function(i,j){var d={},k={"true":!0,"false":!1,"null":null},l=decodeURIComponent;h.each(i.replace(/\+/g," ").split("&"),function(i,m){var a=m.split("="),c=l(a[0]),g=d,f=0,b=c.split("]["),e=b.length-1;/\[/.test(b[0])&&/\]$/.test(b[e])?(b[e]=b[e].replace(/\]$/,""),b=b.shift().split("[").concat(b),e=b.length-1):e=0;if(2===a.length)if(a=l(a[1]),j&&(a=a&&!isNaN(a)?+a:"undefined"===a?void 0:void 0!==k[a]?k[a]:a),e)for(;f<=e;f++)c=""===b[f]?g.length:b[f],g=g[c]=f<e?g[c]||(b[f+1]&&isNaN(b[f+1])?{}:[]):a;else h.isArray(d[c])?d[c].push(a):d[c]=void 0!==d[c]?[d[c],a]:a;else c&&(d[c]=j?void 0:"")});return d}})(jQuery);
/*! jQuery Form Plugin http://malsup.github.com/jquery.form.js */
(function(c){function u(a){var e=a.data;a.isDefaultPrevented()||(a.preventDefault(),c(this).ajaxSubmit(e))}function t(a){var e=a.target,g=c(e);if(!g.is(":submit,input:image")){e=g.closest(":submit");if(0===e.length)return;e=e[0]}var b=this;b.clk=e;"image"==e.type&&(void 0!==a.offsetX?(b.clk_x=a.offsetX,b.clk_y=a.offsetY):"function"==typeof c.fn.offset?(g=g.offset(),b.clk_x=a.pageX-g.left,b.clk_y=a.pageY-g.top):(b.clk_x=a.pageX-e.offsetLeft,b.clk_y=a.pageY-e.offsetTop));setTimeout(function(){b.clk=b.clk_x=b.clk_y=null},100)}function p(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}var A,B;A=void 0!==c("<input type='file'/>").get(0).files;B=void 0!==window.FormData;c.fn.ajaxSubmit=function(a){function e(b){function e(){function a(){try{var b=(q.contentWindow?q.contentWindow.document:q.contentDocument?q.contentDocument:q.document).readyState;p("state = "+b);b&&"uninitialized"==b.toLowerCase()&&setTimeout(a,50)}catch(c){p("Server abort: ",c," (",c.name,")"),j(C),t&&clearTimeout(t),t=void 0}}var b=k.attr("target"),h=k.attr("action");f.setAttribute("target",m);g||f.setAttribute("method","POST");h!=d.url&&f.setAttribute("action",d.url);!d.skipEncodingOverride&&(!g||/post/i.test(g))&&k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});d.timeout&&(t=setTimeout(function(){u=!0;j(y)},d.timeout));var l=[];try{if(d.extraData)for(var i in d.extraData)d.extraData.hasOwnProperty(i)&&(c.isPlainObject(d.extraData[i])&&d.extraData[i].hasOwnProperty("name")&&d.extraData[i].hasOwnProperty("value")?l.push(c('<input type="hidden" name="'+d.extraData[i].name+'">').attr("value",d.extraData[i].value).appendTo(f)[0]):l.push(c('<input type="hidden" name="'+i+'">').attr("value",d.extraData[i]).appendTo(f)[0]));d.iframeTarget||(w.appendTo("body"),q.attachEvent?q.attachEvent("onload",j):q.addEventListener("load",j,!1));setTimeout(a,15);f.submit()}finally{f.setAttribute("action",h),b?f.setAttribute("target",b):k.removeAttr("target"),c(l).remove()}}function j(a){if(!h.aborted&&!B){try{r=q.contentWindow?q.contentWindow.document:q.contentDocument?q.contentDocument:q.document}catch(b){p("cannot access response document: ",b),a=C}if(a===y&&h)h.abort("timeout"),v.reject(h,"timeout");else if(a==C&&h)h.abort("server abort"),v.reject(h,"error","server abort");else if(r&&r.location.href!=d.iframeSrc||u){q.detachEvent?q.detachEvent("onload",j):q.removeEventListener("load",j,!1);var a="success",e;try{if(u)throw"timeout";var f="xml"==d.dataType||r.XMLDocument||c.isXMLDoc(r);p("isXml="+f);if(!f&&(window.opera&&(null===r.body||!r.body.innerHTML))&&--A){p("requeing onLoad callback, DOM not available");setTimeout(j,250);return}var g=r.body?r.body:r.documentElement;h.responseText=g?g.innerHTML:null;h.responseXML=r.XMLDocument?r.XMLDocument:r;f&&(d.dataType="xml");h.getResponseHeader=function(a){return{"content-type":d.dataType}[a]};g&&(h.status=Number(g.getAttribute("status"))||h.status,h.statusText=g.getAttribute("statusText")||h.statusText);var i=(d.dataType||"").toLowerCase(),k=/(json|script|text)/.test(i);if(k||d.textarea){var m=r.getElementsByTagName("textarea")[0];if(m)h.responseText=m.value,h.status=Number(m.getAttribute("status"))||h.status,h.statusText=m.getAttribute("statusText")||h.statusText;else if(k){var n=r.getElementsByTagName("pre")[0],D=r.getElementsByTagName("body")[0];n?h.responseText=n.textContent?n.textContent:n.innerText:D&&(h.responseText=D.textContent?D.textContent:D.innerText)}}else"xml"==i&&(!h.responseXML&&h.responseText)&&(h.responseXML=E(h.responseText));try{var f=h,g=d,s=f.getResponseHeader("content-type")||"",F="xml"===i||!i&&0<=s.indexOf("xml"),x=F?f.responseXML:f.responseText;F&&"parsererror"===x.documentElement.nodeName&&c.error&&c.error("parsererror");g&&g.dataFilter&&(x=g.dataFilter(x,i));"string"===typeof x&&("json"===i||!i&&0<=s.indexOf("json")?x=H(x):("script"===i||!i&&0<=s.indexOf("javascript"))&&c.globalEval(x));z=x}catch(I){a="parsererror",h.error=e=I||a}}catch(G){p("error caught: ",G),a="error",h.error=e=G||a}h.aborted&&(p("upload aborted"),a=null);h.status&&(a=200<=h.status&&300>h.status||304===h.status?"success":"error");"success"===a?(d.success&&d.success.call(d.context,z,"success",h),v.resolve(h.responseText,"success",h),l&&c.event.trigger("ajaxSuccess",[h,d])):a&&(void 0===e&&(e=h.statusText),d.error&&d.error.call(d.context,h,a,e),v.reject(h,"error",e),l&&c.event.trigger("ajaxError",[h,d,e]));l&&c.event.trigger("ajaxComplete",[h,d]);l&&!--c.active&&c.event.trigger("ajaxStop");d.complete&&d.complete.call(d.context,h,a);B=!0;d.timeout&&clearTimeout(t);setTimeout(function(){d.iframeTarget||w.remove();h.responseXML=null},100)}}}var f=k[0],i,d,l,m,w,q,h,s,u,t;s=!!c.fn.prop;var v=c.Deferred();if(c(":input[name=submit],:input[id=submit]",f).length)return alert('Error: Form elements must not have name or id of "submit".'),v.reject(),v;if(b)for(i=0;i<n.length;i++)b=c(n[i]),s?b.prop("disabled",!1):b.removeAttr("disabled");d=c.extend(!0,{},c.ajaxSettings,a);d.context=d.context||d;m="jqFormIO"+(new Date).getTime();d.iframeTarget?(w=c(d.iframeTarget),(b=w.attr("name"))?m=b:w.attr("name",m)):(w=c('<iframe name="'+m+'" src="'+d.iframeSrc+'" />'),w.css({position:"absolute",top:"-1000px",left:"-1000px"}));q=w[0];h={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var b="timeout"===a?"timeout":"aborted";p("aborting upload... "+b);this.aborted=1;if(q.contentWindow.document.execCommand)try{q.contentWindow.document.execCommand("Stop")}catch(e){}w.attr("src",d.iframeSrc);h.error=b;d.error&&d.error.call(d.context,h,b,a);l&&c.event.trigger("ajaxError",[h,d,b]);d.complete&&d.complete.call(d.context,h,b)}};(l=d.global)&&0===c.active++&&c.event.trigger("ajaxStart");l&&c.event.trigger("ajaxSend",[h,d]);if(d.beforeSend&&!1===d.beforeSend.call(d.context,h,d))return d.global&&c.active--,v.reject(),v;if(h.aborted)return v.reject(),v;if(s=f.clk)if((b=s.name)&&!s.disabled)d.extraData=d.extraData||{},d.extraData[b]=s.value,"image"==s.type&&(d.extraData[b+".x"]=f.clk_x,d.extraData[b+".y"]=f.clk_y);var y=1,C=2;s=c("meta[name=csrf-token]").attr("content");if((b=c("meta[name=csrf-param]").attr("content"))&&s)d.extraData=d.extraData||{},d.extraData[b]=s;d.forceSync?e():setTimeout(e,10);var z,r,A=50,B,E=c.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},H=c.parseJSON||function(a){return window.eval("("+a+")")};return v}if(!this.length)return p("ajaxSubmit: skipping submit process - no element selected"),this;var g,b,k=this;"function"==typeof a&&(a={success:a});g=this.attr("method");b=this.attr("action");(b=(b="string"===typeof b?c.trim(b):"")||window.location.href||"")&&(b=(b.match(/^([^#]+)/)||[])[1]);a=c.extend(!0,{url:b,success:c.ajaxSettings.success,type:g||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);b={};this.trigger("form-pre-serialize",[this,a,b]);if(b.veto)return p("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return p("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var f=a.traditional;void 0===f&&(f=c.ajaxSettings.traditional);var n=[],j,l=this.formToArray(a.semantic,n);a.data&&(a.extraData=a.data,j=c.param(a.data,f));if(a.beforeSubmit&&!1===a.beforeSubmit(l,this,a))return p("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[l,this,a,b]);if(b.veto)return p("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;b=c.param(l,f);j&&(b=b?b+"&"+j:j);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+b,a.data=null):a.data=b;var i=[];a.resetForm&&i.push(function(){k.resetForm()});a.clearForm&&i.push(function(){k.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var C=a.success||function(){};i.push(function(b){var e=a.replaceTarget?"replaceWith":"html";c(a.target)[e](b).each(C,arguments)})}else a.success&&i.push(a.success);a.success=function(b,c,e){for(var g=a.context||this,f=0,d=i.length;f<d;f++)i[f].apply(g,[b,c,e||k,k])};j=0<c("input:file:enabled[value]",this).length;b="multipart/form-data"==k.attr("enctype")||"multipart/form-data"==k.attr("encoding");f=A&&B;p("fileAPI :"+f);var y;if(!1!==a.iframe&&(a.iframe||(j||b)&&!f))a.closeKeepAlive?c.get(a.closeKeepAlive,function(){y=e(l)}):y=e(l);else if((j||b)&&f){var u=new FormData;for(j=0;j<l.length;j++)u.append(l[j].name,l[j].value);if(a.extraData){j=c.param(a.extraData).split("&");b=j.length;var f={},z,t;for(z=0;z<b;z++)t=j[z].split("="),f[decodeURIComponent(t[0])]=decodeURIComponent(t[1]);for(var m in f)f.hasOwnProperty(m)&&u.append(m,f[m])}a.data=null;m=c.extend(!0,{},c.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:g||"POST"});a.uploadProgress&&(m.xhr=function(){var b=jQuery.ajaxSettings.xhr();b.upload&&(b.upload.onprogress=function(b){var c=0,e=b.loaded||b.position,f=b.total;b.lengthComputable&&(c=Math.ceil(100*(e/f)));a.uploadProgress(b,e,f,c)});return b});m.data=null;var E=m.beforeSend;m.beforeSend=function(a,b){b.data=u;E&&E.call(this,a,b)};y=c.ajax(m)}else y=c.ajax(a);k.removeData("jqxhr").data("jqxhr",y);for(m=0;m<n.length;m++)n[m]=null;this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&c.isFunction(c.fn.on);if(!a.delegation&&0===this.length){var e=this.selector,g=this.context;if(!c.isReady&&e)return p("DOM not ready, queuing ajaxForm"),c(function(){c(e,g).ajaxForm(a)}),this;p("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return a.delegation?(c(document).off("submit.form-plugin",this.selector,u).off("click.form-plugin",this.selector,t).on("submit.form-plugin",this.selector,a,u).on("click.form-plugin",this.selector,a,t),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,u).bind("click.form-plugin",a,t)};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a,e){var g=[];if(0===this.length)return g;var b=this[0],k=a?b.getElementsByTagName("*"):b.elements;if(!k)return g;var f,n,j,l,i,p;f=0;for(p=k.length;f<p;f++)if(i=k[f],j=i.name)if(a&&b.clk&&"image"==i.type)!i.disabled&&b.clk==i&&(g.push({name:j,value:c(i).val(),type:i.type}),g.push({name:j+".x",value:b.clk_x},{name:j+".y",value:b.clk_y}));else if((l=c.fieldValue(i,!0))&&l.constructor==Array){e&&e.push(i);n=0;for(i=l.length;n<i;n++)g.push({name:j,value:l[n]})}else if(A&&"file"==i.type&&!i.disabled)if(e&&e.push(i),l=i.files,l.length)for(n=0;n<l.length;n++)g.push({name:j,value:l[n],type:i.type});else g.push({name:j,value:"",type:i.type});else null!==l&&"undefined"!=typeof l&&(e&&e.push(i),g.push({name:j,value:l,type:i.type,required:i.required}));if(!a&&b.clk&&(k=c(b.clk),f=k[0],(j=f.name)&&!f.disabled&&"image"==f.type))g.push({name:j,value:k.val()}),g.push({name:j+".x",value:b.clk_x},{name:j+".y",value:b.clk_y});return g};c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};c.fn.fieldSerialize=function(a){var e=[];this.each(function(){var g=this.name;if(g){var b=c.fieldValue(this,a);if(b&&b.constructor==Array)for(var k=0,f=b.length;k<f;k++)e.push({name:g,value:b[k]});else null!==b&&"undefined"!=typeof b&&e.push({name:this.name,value:b})}});return c.param(e)};c.fn.fieldValue=function(a){for(var e=[],g=0,b=this.length;g<b;g++){var k=c.fieldValue(this[g],a);null===k||("undefined"==typeof k||k.constructor==Array&&!k.length)||(k.constructor==Array?c.merge(e,k):e.push(k))}return e};c.fieldValue=function(a,e){var g=a.name,b=a.type,k=a.tagName.toLowerCase();void 0===e&&(e=!0);if(e&&(!g||a.disabled||"reset"==b||"button"==b||("checkbox"==b||"radio"==b)&&!a.checked||("submit"==b||"image"==b)&&a.form&&a.form.clk!=a||"select"==k&&-1==a.selectedIndex))return null;if("select"==k){var f=a.selectedIndex;if(0>f)return null;for(var g=[],k=a.options,n=(b="select-one"==b)?f+1:k.length,f=b?f:0;f<n;f++){var j=k[f];if(j.selected){var l=j.value;l||(l=j.attributes&&j.attributes.value&&!j.attributes.value.specified?j.text:j.value);if(b)return l;g.push(l)}}return g}return c(a).val()};c.fn.clearForm=function(a){return this.each(function(){c("input,select,textarea",this).clearFields(a)})};c.fn.clearFields=c.fn.clearInputs=function(a){var e=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var g=this.type,b=this.tagName.toLowerCase();if(e.test(g)||"textarea"==b)this.value="";else if("checkbox"==g||"radio"==g)this.checked=!1;else if("select"==b)this.selectedIndex=-1;else if(a&&(!0===a&&/hidden/.test(g)||"string"==typeof a&&c(this).is(a)))this.value=""})};c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var e=this.type;"checkbox"==e||"radio"==e?this.checked=a:"option"==this.tagName.toLowerCase()&&(e=c(this).parent("select"),a&&(e[0]&&"select-one"==e[0].type)&&e.find("option").selected(!1),this.selected=a)})};c.fn.ajaxSubmit.debug=!1})(jQuery);
/*! jQuery String Padding Plugin https://github.com/Andy-Holland/jQuery.pad */
(function(e,t){t.pad=function(e,t,n,r){e=e.toString();if(typeof t=="undefined")t=1;if(typeof n=="undefined")n=" ";if(typeof r=="undefined")r="l";if(e.length<t){if(r[0]=="l")return Array(t-e.length+1).join(n)+e;return e+Array(t-e.length+1).join(n)}return e};t.lpad=function(e,n,r){return t.pad(e,n,r,"l")};t.rpad=function(e,n,r){return t.pad(e,n,r,"r")}})(window,jQuery);
/*! jQuery URL Plugin https://github.com/allmarkedup/purl */
(function(n){"function"===typeof define&&define.amd?define(n):window.purl=n()})(function(){function n(b,c){for(var a=decodeURI(b),a=s[c?"strict":"loose"].exec(a),d={attr:{},param:{},seg:{}},g=14;g--;)d.attr[t[g]]=a[g]||"";d.param.query=p(d.attr.query);d.param.fragment=p(d.attr.fragment);d.seg.path=d.attr.path.replace(/^\/+|\/+$/g,"").split("/");d.seg.fragment=d.attr.fragment.replace(/^\/+|\/+$/g,"").split("/");d.attr.base=d.attr.host?(d.attr.protocol?d.attr.protocol+"://"+d.attr.host:d.attr.host)+(d.attr.port?":"+d.attr.port:""):"";return d}function u(b){b=b.tagName;return"undefined"!==typeof b?v[b.toLowerCase()]:b}function q(b,c,a,d){var g=b.shift();if(g){var e=c[a]=c[a]||[];if("]"==g)if(m(e))""!==d&&e.push(d);else if("object"==typeof e){c=b=e;a=[];for(var f in c)c.hasOwnProperty(f)&&a.push(f);b[a.length]=d}else c[a]=[c[a],d];else{~g.indexOf("]")&&(g=g.substr(0,g.length-1));if(!r.test(g)&&m(e))if(0===c[a].length)e=c[a]={};else{f={};for(var l in c[a])f[l]=c[a][l];e=c[a]=f}q(b,e,g,d)}}else m(c[a])?c[a].push(d):c[a]="object"==typeof c[a]?d:"undefined"==typeof c[a]?d:[c[a],d]}function p(b){return w(String(b).split(/&|;/),function(c,a){try{a=decodeURIComponent(a.replace(/\+/g," "))}catch(d){}var b=a.indexOf("="),e;a:{for(var f=a.length,l,h=0;h<f;++h)if(l=a[h],"]"==l&&(e=!1),"["==l&&(e=!0),"="==l&&!e){e=h;break a}e=void 0}f=a.substr(0,e||b);e=a.substr(e||b,a.length);e=e.substr(e.indexOf("=")+1,e.length);""===f&&(f=a,e="");b=f;f=e;if(~b.indexOf("]")){var k=b.split("[");q(k,c,"base",f)}else{if(!r.test(b)&&m(c.base)){e={};for(k in c.base)e[k]=c.base[k];c.base=e}""!==b&&(k=c.base,e=k[b],"undefined"===typeof e?k[b]=f:m(e)?e.push(f):k[b]=[e,f])}return c},{base:{}}).base}function w(b,c,a){for(var d=0,g=b.length>>0;d<g;)d in b&&(a=c.call(void 0,a,b[d],d,b)),++d;return a}function m(b){return"[object Array]"===Object.prototype.toString.call(b)}function h(b,c){1===arguments.length&&!0===b&&(c=!0,b=void 0);b=b||window.location.toString();return{data:n(b,c||!1),attr:function(a){a=x[a]||a;return"undefined"!==typeof a?this.data.attr[a]:this.data.attr},param:function(a){return"undefined"!==typeof a?this.data.param.query[a]:this.data.param.query},fparam:function(a){return"undefined"!==typeof a?this.data.param.fragment[a]:this.data.param.fragment},segment:function(a){if("undefined"===typeof a)return this.data.seg.path;a=0>a?this.data.seg.path.length+a:a-1;return this.data.seg.path[a]},fsegment:function(a){if("undefined"===typeof a)return this.data.seg.fragment;a=0>a?this.data.seg.fragment.length+a:a-1;return this.data.seg.fragment[a]}}}var v={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href",embed:"src",object:"data"},t="source protocol authority userInfo user password host port relative path directory file query fragment".split(" "),x={anchor:"fragment"},s={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},r=/^[0-9]+$/;h.jQuery=function(b){null!=b&&(b.fn.url=function(c){var a="";this.length&&(a=b(this).attr(u(this[0]))||"");return h(a,c)},b.url=h)};h.jQuery(window.jQuery);return h});
/**** Assign jQuery to window.RL_JQUERY ****/
window.rl_jquery = jQuery.noConflict(true);
window.RL_PROXY_DOMAINS = ["avxtrk.com", "ddcsem.com", "ezlcl.com", "reachlocal.com", "reachlocal.net", "rtrk.com", "rtrk.com.au", "rtrk1.com", "rtrk2.com", "rtrk5.com", "search-dealer.com", "smrtlnk.com", "trvlclick.com"]; // Hard proxy base domains.
;
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

    // Create storage objects.
    RL.CaptureStorage = RL.lib.Storage.getInstance(["//", cfg.config.domains.capture, "/static"].join(""));
    RL.CaptureSiteStorage = RL.lib.Storage.getInstance(["//", cfg.id, ".", cfg.config.domains.capture, "/static"].join(""));

    return this;
  };

})(window, window.RL);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions:
 * - String.random()
 * - String.prototype.toLowerSnakeCase()
 * - RL.lib.makeBrowserCompatible()
 */

(function(RL) {
  "use strict";

  // Create RL.lib namespace.
  RL.lib = {};

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
   * String.prototype.toLowerSnakeCase()
   * Return: string
   */
  String.prototype.toLowerSnakeCase = function() {
    return this.trim().toLowerCase().replace(/ /gi, "_");
  };

  /**
   * Functions not defined in IE8.
   */
  (RL.lib.makeBrowserCompatible = function() {
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

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    if (!Date.now) {
      Date.now = function now() {
        return new Date().getTime();
      };
    }
  })();
})(window.RL);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .areCookieAndWebStorageEnabled()
 * - .isCookieEnabled()
 * - .isOptedOut(complete, settings)
 * - .isWebStorageEnabled()
 * - .loadCss()
 * - .loadJs()
 * - .post(url, data, options)
 * - .replaceText(data, rootNode, complete)
 * - .replacePhoneNumbers(data, rootNode, complete)
 */

(function(window, RL_LIB, $) {
  "use strict";

  /**
   * Check if cookie and web storage are enabled.
   *
   * .areCookieAndWebStorageEnabled()
   *
   * Return: boolean
   */
  RL_LIB.areCookieAndWebStorageEnabled = function() {
    return RL_LIB.isCookieEnabled() && RL_LIB.isWebStorageEnabled();
  };

  /**
   * Check if cookie is enabled.
   *
   * .isCookieEnabled()
   *
   * Return: boolean
   */
  RL_LIB.isCookieEnabled = function() {
    var isEnabled;

    $.cookie("rl_cookie_test", "test");
    isEnabled = $.cookie("rl_cookie_test") === "test";
    $.removeCookie("rl_cookie_test");

    return isEnabled;
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
   * duration - int - cache duration in seconds (5 seconds default)
   */
  RL_LIB.isOptedOut = (function() {
    var KEY = "RlocalOptOut",
        STORAGE,
        expiry = new Date(2000, 0, 1),
        inProgress = false,
        queue = [],
        value,
        API;

    API = function(complete, settings) {
      if (typeof complete !== "function") {
        return false;
      }

      settings = API._initSettings(settings);

      queue.push({complete: complete, settings: settings});

      if (inProgress === true) {
        return;
      } else if (settings.forced === false && expiry >= new Date()) {
        API._loadCachedData();
      } else {
        API._loadCurrentData();
      }
    };

    API._initSettings = function(settings) {
      settings = settings || {};

      return {
        forced: settings.forced === true ? true : false,
        duration: (typeof settings.duration === "number" && settings.duration >= 0) ? settings.duration : 5
      };
    };

    API._loadCachedData = function() {
      inProgress = true;

      this._processQueue();
    };

    API._loadCurrentData = function() {
      inProgress = true;

      if (!STORAGE) {
        STORAGE = RL_LIB.Storage.getInstance(["//", window.rl_widget_cfg.config.domains.capture, "/static"].join(""));
      }

      STORAGE.getItem(KEY, this._processQueue);
    };

    API._processQueue = function(data) {
      var queueItem;

      if ($.isPlainObject(data)) {
        value = data[KEY] == 1 ? true : false;
      }

      while (queueItem = queue.shift()) {
        API._processQueueItem(queueItem);
      }

      inProgress = false;
    };

    API._processQueueItem = function(data) {
      var newExpiry = new Date();
      newExpiry.setSeconds(newExpiry.getSeconds() + data.settings.duration);

      if (newExpiry > expiry) {
        expiry = newExpiry;
      }

      data.complete(value);
    };

    if (window.jasmine) {
      // Needed for Jasmine tests.
      API._reset = function() {
        value = undefined;
        expiry = new Date(2000, 0, 1);
        queue = [];
        inProgress = false;
        STORAGE = undefined;
      };

      API._getQueue = function() {
        return queue;
      };

      API._getInProgressFlag = function() {
        return inProgress;
      };

      API._getCachedValue = function() {
        return value;
      };

      API._getExpiry = function() {
        return expiry;
      };

      API._setInProgressFlag = function(flag) {
        inProgress = flag;
      };

      API._setExpiry = function(newExpiry) {
        expiry = newExpiry;
      };

      API._setCachedValue = function(newValue) {
        value = newValue;
      };
    }

    return API;
  })();

  /**
   * Check if web storage is enabled.
   *
   * .isWebStorageEnabled()
   *
   * Return: boolean
   */
  RL_LIB.isWebStorageEnabled = function() {
    var isEnabled;

    try {
      sessionStorage.setItem("rl_storage_test", "test");
      isEnabled = sessionStorage.getItem("rl_storage_test") === "test";
      sessionStorage.removeItem("rl_storage_test");
      return isEnabled;
    } catch(err) {
      return false;
    }
  };

  /**
   * Load external CSS file.
   *
   * .loadCss(url)
   * url - string - file path
   *
   * Return: RL.lib
   */
  RL_LIB.loadCss = function(url) {
    // Create link tag element.
    var element = document.createElement("link");
    element.rel = "stylesheet";
    element.type = "text/css";
    element.href = url;
    element.media = "all";

    // Append to HEAD element.
    document.getElementsByTagName("head")[0].appendChild(element);

    return element;
  };

  /**
   * Load external JavaScript file asynchronously.
   *
   * Returns the Script element.
   *
   * .loadJs(url, complete)
   * url - string - file path
   * complete - function - callback function when script has been loaded
   *
   * Return: object
   */
  RL_LIB.loadJs = (function() {
    var API = function(url, complete) {
      // Create script tag element.
      var element = document.createElement("script");
      element.src = url;
      element.async = true;

      if (typeof complete === "function") {
        // Attach onload callback function to script tag.
        API._bindLoadEvent(element, complete);
      }

      // Append to HEAD element.
      document.getElementsByTagName("head")[0].appendChild(element);

      return element;
    };

    /**
     * Bind load/readystatechange event to the script element.
     *
     * ._bindLoadEvent(element, complete)
     * element - object - script element
     * complete - function - (optional) function to execute when script is loaded
     */
    API._bindLoadEvent = function(element, complete) {
      if (element.addEventListener) {
        // Firefox, WebKit, and IE >= 9.
        $(element).on("load", {complete: complete}, this._loadEventCallback);
      } else {
        // IE < 9.
        $(element).on("readystatechange", {complete: complete}, this._readyStateChangeEventCallback);
      }
    };

    /**
     * Load event callback.
     *
     * Unbinds event and executes the complete function.
     *
     * ._loadEventCallback($e)
     * $e - object - jQuery event object
     */
    API._loadEventCallback = function($e) {
      $(this).off($e);
      $e.data.complete();
    };

    /**
     * Readystatechange event callback.
     *
     * Unbinds event and executes the complete function when script is ready.
     *
     * ._loadEventCallback($e)
     * $e - object - jQuery event object
     */
    API._readyStateChangeEventCallback = function($e) {
      if (this.readyState === "complete" || this.readyState === "loaded") {
        $(this).off($e);
        $e.data.complete();
      }
    };

    return API;
  })();

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
  RL_LIB.post = (function() {
    var API = function(url, data, options) {
      var iframeEId,
          formEId,
          rootE,
          iframeE,
          formE;

      if (typeof url !== "string" || !url) {
        // Endpoint url must be valid.
        return false;
      }

      if (!$.isPlainObject(options)) {
        options = {};
      }
      if (typeof options.id !== "string" || !options.id) {
        options.id = String.random(10);
      }
      if ($.isPlainObject(data)) {
        data.rl_eid = options.id;
      } else {
        data = {rl_eid: options.id};
      }

      iframeEId = ["rl-iframe", options.id].join("-");
      formEId = ["rl-form", options.id].join("-");

      // Create a hidden div.
      rootE = RL_LIB.Node.createRoot();

      // Create an iframe element node.
      iframeE = RL_LIB.Node.createIframe({
        id: iframeEId,
        name: iframeEId.replace(/-/g, "_"),
        parentNode: rootE,
        complete: {
          handler: API._iframeLoadHandler,
          data: {
            success: options.success,
            complete: options.complete,
            nodesToRemove: [iframeEId, formEId]
          }
        }
      });

      // Create form element node.
      formE = RL_LIB.Node.createForm({
        id: formEId,
        method: "post",
        action: url,
        target: iframeE.name,
        parentNode: rootE,
        data: data
      });

      if (typeof options.success === "function") {
        RL_LIB.WindowMessageListener.bind(API._iframeWindowMessageHandler, options.id, {success: options.success, nodesToRemove: [iframeEId, formEId]});
      }

      $(formE).submit();
    };

    /**
     * Remove nodes and execute complete callback function when iframe is loaded.
     *
     * .post._iframeLoadHandler(event, data)
     * event - object - event object
     * data - object - hash of data
     */
    API._iframeLoadHandler = function(event, data) {
      if (typeof data.success !== "function") {
        // Clean up nodes from DOM after iframe loads since there is no success function.
        API._removeNodes(data.nodesToRemove);
      }

      if (typeof data.complete === "function") {
        // Call complete function since iframe has loaded.
        data.complete();
      }
    };

    /**
     * Remove nodes and execute success callback function when the iframe content loaded and executed.
     *
     * .post._iframeWindowMessageHandler(wmlData, data, origin)
     * wmlData - object - hash of data
     * data - object - hash of data
     * origin - string - iframe content url
     */
    API._iframeWindowMessageHandler = function(wmlData, data, origin) {
      // Remove bound event since it should never be used again.
      RL_LIB.WindowMessageListener.unbind(wmlData.WML_EVENT_ID);

      // Clean up nodes from DOM.
      API._removeNodes(wmlData.nodesToRemove);

      // Return data to success function.
      wmlData.success(data);
    };

    /**
     * Remove nodes from DOM.
     *
     * .post._removeNodes(nodes)
     * nodes - array - array of node ids to remove
     */
    API._removeNodes = function(nodeIds) {
      var nodes,
          node;

      if (!$.isArray(nodeIds)) {
        return false;
      }

      nodes = [];

      for (var i = 0, length = nodeIds.length; i < length; i++) {
        // Get element node and cache it in an array.
        if (node = document.getElementById(nodeIds[i])) {
          nodes.push(node);
        }
      }

      RL_LIB.Node.remove(nodes, 100);
    };

    return API;
  })();

  /**
   * Replace text.
   *
   * For each data hash that contains "search" and "replace" keys, iterate through all
   * TextNodes, and see if the search value matches the node value.  If it does, replace the
   * node value with a new one.
   *
   * .replaceText(data, rootNode, complete)
   * data - object - array of hashes
   * rootNode - object - (optional) root node to search and replace
   * complete - function - (optional) function to execute when replacement is done
   */
  RL_LIB.replaceText = (function() {
    var API = function(data, rootNode, complete) {
      var textNodes,
          searchAndReplaceValues;

      if (!$.isArray(data)) {
        throw new TypeError("Parameter data accepts an array.");
      } else if (rootNode && (typeof rootNode !== "object" || rootNode.nodeType !== 1)) {
        throw new Error("rootNode is not a valid DOM node.");
      }

      data = $.extend(true, [], data);
      textNodes = RL_LIB.Node.getTextNodes(rootNode || document.body);

      while (searchAndReplaceValues = data.shift()) {
        API._searchAndReplaceTextInEachNode(searchAndReplaceValues.search, searchAndReplaceValues.replace, textNodes);
      }

      if (typeof complete === "function") {
        complete();
      }
    };

    /**
     * Search and replace text in each TextNode.
     *
     * Iterate through list of TextNodes and check if search string/regexp matches.  If it does
     * and if the search and replacement values differ, then replace the match with the replacement value.
     *
     * .replaceText._searchAndReplaceTextInEachNode(searchValue, replaceValue, nodes)
     * searchValue - string/regexp - search string/regexp
     * replaceValue - string - new/replacement string
     * nodes - object - array of TextNodes
     */
    API._searchAndReplaceTextInEachNode = function(searchValue, replaceValue, nodes) {
      var textNode,
          textNodeValue,
          newTextNodeValue;

      for (var i = 0, length = nodes.length; i < length; i++) {
        textNode = nodes[i];
        textNodeValue = textNode.nodeValue;

        try {
          newTextNodeValue = textNodeValue.search(searchValue) > -1 ? textNodeValue.replace(searchValue, replaceValue) : textNodeValue;
        } catch(err) {
          newTextNodeValue = textNodeValue;
        }

        if (textNodeValue !== newTextNodeValue) {
          textNode.nodeValue = newTextNodeValue;
        }
      }
    };

    return API;
  })();

  /**
   * Replace phone numbers.
   *
   * For each data hash that contains "search" and "replace" keys, iterate through all
   * TextNodes and Anchor nodes, and see if the search value matches the node value.  If it does, replace the
   * node value with a new one.
   *
   * .replacePhoneNumbers(data, rootNode, complete)
   * data - object - array of hashes
   * rootNode - object - (optional) root node to search and replace
   * complete - function - (optional) function to execute when replacement is done
   */
  RL_LIB.replacePhoneNumbers = (function() {
    var DELIMITER_PATTERN = "([\(\)\+\-\.\/\*\~ ]*)",
        API;

    API = function(data, rootNode, complete) {
      if (!$.isArray(data)) {
        throw new ErrorType();
      } else if (rootNode && (typeof rootNode !== "object" || rootNode.nodeType !== 1)) {
        throw new Error("rootNode is not a valid DOM node.");
      }

      data = API._prepData(data);
      rootNode = rootNode || document.body;

      // Replace TextNodes.
      RL_LIB.replaceText(data, rootNode);

      // Replace Anchor nodes.
      API._replaceAnchors(data, rootNode);

      if (typeof complete === "function") {
        complete();
      }
    };

    /**
     * Prepare raw search and replace data.
     *
     * Take an array of hashes that contains search and replace numbers and return
     * an array of hashes where the search data is now a regexp and the replace number
     * stays the same.
     *
     * ._prepData(data)
     * data - object - array of hashes (hash contains "search" and "replace" keys)
     *
     * Return: object
     */
    API._prepData = function(data) {
      var SELF_PREPDATA = this._prepData,
          response = [];

      for (var i = 0, length = data.length; i < length; i++) {
        try {
          response.push(SELF_PREPDATA._prepSearchAndReplaceNumbers(data[i]));
        } catch(err) {
          continue;
        }
      }

      return response;
    };

    /**
     * Prepare raw hash data that contains "search" and "replace" values.
     *
     * Take a hash of "search" and "replace" values, and return a hash
     * where the "search" value is a regexp and the formmatted and original
     * replace value.
     *
     * ._prepData._prepSearchAndReplaceNumbers(data)
     * data - object - hash (contains "search" and "replace" keys)
     *
     * Return: object
     */
    API._prepData._prepSearchAndReplaceNumbers = function(data) {
      var searchNumber,
          replaceNumber;

      data = data || {};
      searchNumber = data.search;
      replaceNumber = data.replace;

      if (typeof searchNumber !== "string") {
        throw new TypeError("Search number is not a string.");
      } else if (searchNumber === "") {
        throw new Error("Search number is required.");
      } else if (typeof replaceNumber !== "string") {
        throw new TypeError("Replace number is not a string.");
      } else if (searchNumber.search(/[a-z]+/i) > -1) {
        // Do not replace phone numbers with alphabetical characters.
        throw new Error("Search number contains letter(s).");
      }

      return {
        search: this._getSearchRegexp(searchNumber),
        replace: this._getReplaceString(replaceNumber),
        replaceRaw: replaceNumber
      };
    };

    /**
     * Get the search phone number RegExp.
     *
     * ._prepData._getSearchRegexp(number)
     * number - string - phone number
     *
     * Return: object
     */
    API._prepData._getSearchRegexp = function(number) {
      var doNotFormat = number.indexOf("#") > -1 ? true : false,
          regexp;

      // Remove non-digits.
      number = number.replace(/[^\d]*/gi, "");

      if (number === "") {
        throw new TypeError("number argument needs to contain digits.");
      }

      regexp = [DELIMITER_PATTERN];

      for (var i = 0, length = number.length; i < length; i++) {
        regexp.push(number.charAt(i));
        regexp.push(DELIMITER_PATTERN);
      }

      if (doNotFormat === true) {
        regexp.shift();
        regexp.pop();
      }

      return new RegExp(regexp.join(""), "g");
    };

    /**
     * Get the replacement phone number string.
     *
     * ._prepData._getReplaceString(number)
     * number - string - phone number
     *
     * Return: object
     */
    API._prepData._getReplaceString = function(number) {
      var doNotFormat = number.indexOf("#") > -1 ? true : false,
          cleanNumber = number.replace(/[^\d]*/gi, ""),
          string;

      if (cleanNumber === "") {
        throw new TypeError("number argument needs to contain digits.");
      }

      if (doNotFormat === true) {
        // Do not format the replacement number to look like the original.
        return number.replace("#", "");
      }

      string = ["$01"];

      for (var i = 0, length = cleanNumber.length; i < length; i++) {
        string.push(cleanNumber.charAt(i));
        string.push("$");
        string.push($.lpad(String(i + 2), 2, "0"));
      }

      return string.join("");
    };

    /**
     * Search and replace numbers in each Anchor node.
     *
     * For each data hash that contains "search" and "replace" keys, iterate through all
     * Anchor node, and see if the search value matches the node value.  If it does, replace the
     * node value with a new one.
     *
     * ._replaceAnchors(data, rootNode)
     * data - object - array of hashes
     * rootNode - object - (optional) root node to search and replace
     */
    API._replaceAnchors = function(data, rootNode) {
      var SELF_REPLACEANCHORS = this._replaceAnchors,
          anchorNodes = RL_LIB.Node.getAnchors({protocols: ["tel:"]}),
          searchAndReplaceValues;

      data = $.extend(true, [], data);

      while (searchAndReplaceValues = data.shift()) {
        SELF_REPLACEANCHORS._searchAndReplaceNumberInEachNode(searchAndReplaceValues.search, searchAndReplaceValues.replaceRaw, anchorNodes);
      }
    };

    /**
     * Search and replace number in each Anchor node.
     *
     * Iterate through list of TextNodes and check if search string/regexp matches.  If it does
     * and if the search and replacement values differ, then replace the match with the replacement value.
     *
     * .replaceText._searchAndReplaceNumberInEachNode(searchValue, replaceValue, nodes)
     * searchValue - string/regexp - search string/regexp
     * replaceValue - string - new/replacement string
     * nodes - object - array of Anchor nodes
     */
    API._replaceAnchors._searchAndReplaceNumberInEachNode = function(searchValue, replaceValue, nodes) {
      var anchorNode,
          anchorNodeHrefValue,
          newAnchorNodeHrefValue;

      for (var i = 0, length = nodes.length; i < length; i++) {
        anchorNode = nodes[i];
        anchorNodeHrefValue = decodeURI(anchorNode.href);

        try {
          newAnchorNodeHrefValue = anchorNodeHrefValue.search(searchValue) > -1 ? anchorNodeHrefValue.replace(searchValue, replaceValue) : anchorNodeHrefValue;
        } catch(err) {
          newAnchorNodeHrefValue = anchorNodeHrefValue;
        }

        if (anchorNodeHrefValue !== newAnchorNodeHrefValue) {
          anchorNode.href = newAnchorNodeHrefValue;
        }
      }
    };

    return API;
  })();
})(window, window.RL.lib, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .DataQueue()
 * - .DataQueue.getInstance()
 * - .DataQueue.prototype.get(id)
 * - .DataQueue.prototype.insert(data, id)
 * - .DataQueue.prototype.remove(id)
 * - .DataQueue.prototype.each(callback, data)
 */

(function(window, RL, $) {
  "use strict";

  /**
   * A class that provides queueing of objects to ids.
   */
  var DataQueue = function() {
    var queue = {};

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
      return id === undefined ? $.extend(true, {}, queue) : queue[id];
    };

    /**
     * Insert data.
     *
     * If an id is set, then the data is mapped to that id.  If data already exists for that id, then the
     * existing data is overwritten.  If an id is not set, then one will be generated.  In either case,
     * the id is returned.
     *
     * .insert(data, id)
     * data - mixed - anything other than undefined
     * id - string - (optional) id
     *
     * Return: string
     */
    this.insert = function(data, id) {
      if (data === undefined) {
        return false;
      }

      if (typeof id !== "string" || !id) {
        id = String.random(10);
      }

      queue[id] = data;

      return id;
    };

    /**
     * Remove data.
     *
     * Remove data mapping to an id if id exists.  If id argument is undefined, then all data are purged.
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

        return true;
      } else if (queue[id] !== undefined) {
        // Remove mapped data.
        queue[id] = undefined;
        queue = $.extend(true, {}, queue);

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
     * data - object - (optional) hash data
     *
     * callback function:
     * string - id for inserted data
     * object - inserted data
     * object - optional hash data
     */
    this.each = function(callback, data) {
      if (typeof callback !== "function") {
        return false;
      }

      for (var i in queue) {
        callback(i, queue[i], data);
      }
    };

    if (window.jasmine) {
      // Need for Jasmine tests.
      this.getQueue = function() {
        return queue;
      };
    }
  };

  /**
   * Get an instance of RL.lib.DataQueue.
   *
   * .getInstance()
   *
   * Return: object
   */
  DataQueue.getInstance = function() {
    return new this();
  };

  RL.lib.DataQueue = DataQueue;
})(window, window.RL, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Events.subscribe(eventName, handler, options)
 * - .Events.unsubscribe(idEventName)
 * - .Events.trigger(eventName, complete, data)
 */

(function(window, RL_LIB, $) {
  "use strict";

    var events = RL_LIB.DataQueue.getInstance(),
        Events,
        Event,
        EventHandler;

    Events = {
      /**
       * Subscribe to an event.
       *
       * The event name cannot have a dash.  Returns an alpha-numeric id if subscription is successful or else false.
       *
       * The handler function must return a boolean false and execute the function (2nd argument) when the asynch logic is completed.
       * Example of the handler function definition:
       *  function foo(data, func) {
       *    // Async call.
       *    callAsyncFunc(function() {
       *      // Do something.
       *      func();
       *    });
       *    return false;
       *  }
       *
       * .subscribe(eventName, handler, settings)
       * eventName - string - event name (e.g. capture.load, email_close)
       * handler - function - a function to execute each time the event is triggered
       * settings - object - (optional) hash
       *
       * settings object:
       * handlerData - object - (optional) hash passed to handler function
       * handlerContext - object - (optional) context for the handler function
       * executeHandlerEvenIfEventHasBeenTriggered - boolean - (optional) execute handler function immediately if event has been triggered already
       *
       * handler function:
       * object - data hash
       * function - if handler function contains async logic and that logic needs to be executed before the complete argument function for trigger, then this argument needs to be executed when the async logic is completed
       *
       * Returns: string
       */
      subscribe: function(eventName, handler, settings) {
        var event,
            eventHandler;

        if (typeof eventName !== "string" || typeof handler !== "function") {
          throw new TypeError();
        } else if (!eventName) {
          throw new Error("Parameter is required: eventName.")
        } else if (eventName.indexOf("-") > -1) {
          throw new Error("eventName argument cannot have a dash.")
        }

        settings = $.isPlainObject(settings) ? settings : {};

        settings = this.subscribe._initSettings({
          handlerData: settings.handlerData,
          handlerContext: settings.handlerContext,
          executeHandlerEvenIfEventHasBeenTriggered: settings.executeHandlerEvenIfEventHasBeenTriggered
        });

        // Save subscription.
        event = this.subscribe._getOrCreateEvent(eventName);
        eventHandler = EventHandler.getInstance(handler, settings.handlerData, settings.handlerContext, settings.executeHandlerEvenIfEventHasBeenTriggered);
        Event.bind(event, eventHandler);

        if (event.hasBeenTriggered) {
          // Execute handler since the Event has been triggered already.
          this.subscribe._executeHandlerIfEventHasBeenTriggered(eventHandler);
        }

        return eventHandler.id;
      },

      /**
       * Unsubscribe from an event.
       *
       * If id is provided, then that specific handler is removed.
       * If an event name is supplied, all handlers mapped to that event are removed.
       *
       * .unsubscribe(eventNameOrEventHandlerId)
       * eventNameOrEventHandlerId - string - EventHandler id or Event name
       */
      unsubscribe: function(eventNameOrEventHandlerId) {
        var eventNameAndEventHandlerQueueId,
            event,
            eventHandler;

        if (typeof eventNameOrEventHandlerId !== "string") {
          throw new TypeError();
        } else if (!eventNameOrEventHandlerId) {
          throw new Error("Parameter is required: eventNameOrEventHandlerId.")
        }

        eventNameAndEventHandlerQueueId = this.unsubscribe._getEventNameAndEventHandlerQueueId(eventNameOrEventHandlerId);
        event = events.get(eventNameAndEventHandlerQueueId.eventName);
        if (event) {
          eventHandler = Event.getEventHandler(event, eventNameAndEventHandlerQueueId.eventHandlerQueueId);
          Event.unbind(event, eventHandler);
        }
      },

      /**
       * Trigger an event.
       *
       * .trigger(eventName, complete, data)
       * eventName - string - event name
       * complete - function - (optional) function to execute once all the handlers have been executed
       * data - object - (optional) data hash
       */
      trigger: function(eventName, complete, data) {
        var event = events.get(eventName);

        if (!event) {
          event = Event.getInstance(eventName);
          events.insert(event, eventName);
        }

        Event.trigger(event, complete, data);
      }
    };

    /**
     * Cleans up setting values.
     *
     * If the required event name and handler functions do not exist, return false; otherwise,
     * a hash of the data will be returned.
     *
     * .subscribe._initSettings(settings)
     * settings - object - data hash
     *
     * Return: boolean/object
     */
    Events.subscribe._initSettings = function(settings) {
      if (!$.isPlainObject(settings.handlerData)) {
        settings.handlerData = {};
      }
      if (typeof settings.handlerContext !== "object") {
        settings.handlerContext = window;
      }
      if (typeof settings.executeHandlerEvenIfEventHasBeenTriggered !== "boolean") {
        settings.executeHandlerEvenIfEventHasBeenTriggered = true;
      }

      return settings;
    };

    /**
     * Get an Event object.
     *
     * Get the Event from the queue if it exists or else create a new one.
     *
     * .subscribe._getOrCreateEvent(eventName)
     * eventName - string - event name
     *
     * Return: object
     */
    Events.subscribe._getOrCreateEvent = function(eventName) {
      var event = events.get(eventName) || Event.getInstance(eventName);
      events.insert(event, eventName);
      return event;
    };

    /**
     * Execute handler if the execute-handler-if-event-has-been-triggered flag is set.
     *
     * .subscribe._executeHandlerIfEventHasBeenTriggered(eventHandler)
     * eventHandler - object - EventHandler object
     */
    Events.subscribe._executeHandlerIfEventHasBeenTriggered = function(eventHandler) {
      if (eventHandler.executeEvenIfEventHasBeenTriggered) {
        EventHandler.execute(eventHandler);
      }
    };

    /**
     * Parse out the Event name and EventHandler queue id.
     *
     * .unsubscribe._getEventNameAndEventHandlerQueueId(eventNameOrEventHandlerId)
     * eventNameOrEventHandlerId - string - either the Event name or EventHandler id
     *
     * Return: object
     */
    Events.unsubscribe._getEventNameAndEventHandlerQueueId = function(eventNameOrEventHandlerId) {
      var delimiterIndex = eventNameOrEventHandlerId.indexOf("-"),
          eventName = delimiterIndex > 0 ? eventNameOrEventHandlerId.substring(0, delimiterIndex) : eventNameOrEventHandlerId,
          eventHandlerQueueId = delimiterIndex > 0 ? eventNameOrEventHandlerId.substring(delimiterIndex + 1) : undefined;

      return {eventName: eventName, eventHandlerQueueId: eventHandlerQueueId};
    };

    /**
     * An EventHandler object.
     */
    EventHandler = function(func, data, context, executeEvenIfEventHasBeenTriggered, id) {
      this.id = id || "";
      this.func = func;
      this.data = data;
      this.context = context;
      this.executeEvenIfEventHasBeenTriggered = executeEvenIfEventHasBeenTriggered;
    };

    /**
     * Create a new EventHandler instance object.
     *
     * .EventHandler.getInstance()
     *
     * Return: object
     */
    EventHandler.getInstance = function(func, data, context, executeEvenIfEventHasBeenTriggered, id) {
      return new EventHandler(func, data, context, executeEvenIfEventHasBeenTriggered, id);
    };

    /**
     * Execute an event handler.
     *
     * Returns what the handler's response.
     *
     * .EventHander.execute(eventHandler, callbackFunc)
     * eventHandler - object - EventHandler object
     * callbackFunc - function - (optional) function to pass to the event handler as an argument
     *
     * Return: mixed
     */
    EventHandler.execute = function(eventHandler, callbackFunc) {
      return eventHandler.func.call(eventHandler.context, eventHandler.data, callbackFunc);
    };

    /**
     * An Event object.
     */
    Event = function(name) {
      this.name = name;                                 // Event name.
      this.hasBeenTriggered = false;                    // True if event has already been tripped.
      this.isReady = true;                              // Event can not be triggered simultaneously.
      this.asyncQueueCount = 0;
      this.asyncQueueCounter = 0;
      this.handlerCounter = 0;
      this.handlerQueue = RL_LIB.DataQueue.getInstance();  // Qeueu of event handlers.
    };

    /**
     * Create a new Event instance object.
     *
     * .Event.getInstance()
     *
     * Return: object
     */
    Event.getInstance = function(name) {
      return new Event(name);
    };

    /**
     * Get the EventHandler bound to the Event.
     *
     * .Event.getEventHandler(event, eventHandlerQueueId)
     * event - object - Event
     * eventHandlerQueueId - string - the internal queue id (not EventHandler.id)
     *
     * Return: object
     */
    Event.getEventHandler = function(event, eventHandlerQueueId) {
      return event.handlerQueue.get(eventHandlerQueueId || "");
    };

    /**
     * Insert an EventHandler into the Event queue.
     *
     * .Event.bind(event, eventHandler)
     * event - object - Event object
     * eventHandler - object - EventHandler object
     */
    Event.bind = function(event, eventHandler) {
      var eventId = event.handlerQueue.insert(eventHandler);
      if (event.name) {
        eventId = [event.name, eventId].join("-");
      }
      eventHandler.id = eventId;
      return eventId;
    };

    /**
     * Remove an EventHandler from the Event queue.
     *
     * .Event.unbind(event, eventHandlerId)
     * event - object - Event object
     * eventHandlerId - string - EventHandler id
     */
    Event.unbind = function(event, eventHandler) {
      var id = eventHandler ? eventHandler.id.replace([event.name, "-"].join(""), "") : undefined;
      event.handlerQueue.remove(id);
    };

    /**
     * Execute all event handlers.
     *
     * .Event.trigger(event, complete, data)
     * event - object - Event object
     * complete - function - (optional) function to execute when all handlers are executed
     * data - object - data hash passed to the event handlers
     */
    Event.trigger = function(event, complete, data) {
      if (!event.isReady) {
        // Event is currently running.
        return false;
      }

      event.isReady = false;
      event.hasBeenTriggered = true;
      event.asyncQueueCount = 0;
      event.asyncQueueCounter = 0;
      event.handlerCounter = 0;
      event.handlerQueue.each(
        Event.trigger._iteratorCallback,
        {
          event: event,
          data: data,
          complete: complete
        }
      );

      Event.trigger._fin(event, complete);
    };

    /**
     * This is called when iterating over each event handler.
     *
     * .Event.trigger._iteratorCallback(eventHandlerId, eventHandler, iteratorData)
     * eventHandlerId - string - EventHandler internal id
     * eventHandler - object - EventHandler object
     * iteratorData - object - data hash
     */
    Event.trigger._iteratorCallback = function(eventHandlerId, eventHandler, iteratorData) {
      var event = iteratorData.event,
          data = $.extend(true, eventHandler.data, iteratorData.data),
          complete = Event.trigger._createAsyncCompleteCallback(event, iteratorData.complete);

      // Keep track of the number of handlers are executed.
      event.handlerCounter++;

      if (EventHandler.execute(eventHandler, complete) === false) {
        // Handler has async function calls.  Increase count.
        event.asyncQueueCount++;
      }
    };

    /**
     * Create a new complete callback function for async handlers.
     *
     * The new complete callback function will increase the async handler counter and
     * check if all handlers are completed.
     *
     * .Event.trigger._createAsyncCompleteCallback(event, complete)
     * event - object - the Event
     * complete - function - function to execute once all handlers are executed
     *
     * Return: function
     */
    Event.trigger._createAsyncCompleteCallback = function(event, complete) {
      return function() {
        event.asyncQueueCounter++;
        Event.trigger._fin(event, complete);
      };
    };

    /**
     * This is called to check when all the event handlers are executed.
     *
     * Execute complete function once all handlers are executed.
     * Set the ready flag.
     *
     * .Event.trigger._fin(event, complete)
     * event - object - the Event
     * complete - function - function to execute once all handlers are executed
     */
    Event.trigger._fin = function(event, complete) {
      if (event.handlerCounter > 0) {
        if (event.asyncQueueCount === 0) {
          // All handlers are sync and executed.
          if (typeof complete === "function") {
            complete();
          }

          event.isReady = true;
        } else if (event.asyncQueueCounter === event.asyncQueueCount) {
          // All handlers including async are executed.
          if (typeof complete === "function") {
            complete();
          }

          event.isReady = true;
        }
      } else {
        // No handlers.
        event.isReady = true;
      }
    };

    if (window.jasmine && window.jasmine.SnapdragonConsoleReporter) {
      // Need for Jasmine tests.
      Events.setEvents = function(newEvents) {
        events = newEvents;
      };
      Events.getEvents = function() {
        return events;
      };
    }

    Events.EventHandler = EventHandler;
    Events.Event = Event;
    RL.lib.Events = Events;

})(window, window.RL.lib, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Campaign.checkDynamicUrl(url)
 * - .Campaign.checkUrl(url)
 * - .Campaign.getData()
 * - .Campaign.getFromCookie()
 * - .Campaign.getFromQuerystring()
 */

(function(window, RL_LIB, $) {
  "use strict";

  var RL_LIB_CAMPAIGN = (function() {
    var CAMPAIGN_DATA = {"scid": "", "cid": "", "tc": "", "rl_key": "", "kw": "", "pub_cr_id": ""};

    return {
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
          return (querystring.scid && querystring.cid && querystring.tc && querystring.rl_key) ? $.extend(CAMPAIGN_DATA, querystring) : null;
        })(window.location.search);

        return function() {
          return querystring;
        };
      })()
    };
  })();

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
  RL_LIB_CAMPAIGN.checkUrl = function(url) {
    var DOMAINS = JSON.parse(JSON.stringify(window.RL_PROXY_DOMAINS || [])),
        baseDomain = RL_LIB.Url.getBaseDomain(url);

    return DOMAINS.indexOf(baseDomain) > -1 ? true : false;
  };

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
  RL_LIB_CAMPAIGN.checkDynamicUrl = function(url) {
    var hostname = RL_LIB.Url.getHostname(url);
    return (hostname.indexOf("url") === 0 && hostname.indexOf("--") > -1) ? true : false;
  };

  /**
   * Retrieve campaign data.
   *
   * Will search for campaign data from the URL querystring, RlocalUID cookie, and rl_campaign web storages on the site and Capture domains.
   *
   * Campaign.getData(callback)
   * callback - function - (optional) function is execute once the data is retrieved
   *
   * callback function:
   * object - hash of campaign data (cid, scid, tc, etc.)
   */
  RL_LIB_CAMPAIGN.getData = (function() {
    var API = function(callback) {
      var response = {isCaptureCampaign: false, isProxyCampaign: false},
          data;

      if (typeof callback !== "function") {
        callback = function() {};
      }

      // Retrieve from querystring.
      data = RL_LIB_CAMPAIGN.getFromQuerystring();
      if (data) {
        // Capture visit.
        response.isCaptureCampaign = true;
        return API._cacheDataAndReturnResponse(data, response, callback);
      }

      // Retrieve from cookie.
      data = RL_LIB_CAMPAIGN.getFromCookie()
      if (data) {
        // Proxy visit.
        response.isProxyCampaign = true;
        return API._cacheDataAndReturnResponse(data, response, callback);
      }

      // Retreive from cache.
      RL.lib.Events.subscribe("get_campaign_data", API._receivedDataFromCache, {handlerData: {response: response, callback: callback}});
      API._getFromCache();
    };

    /**
     * Process data retrieved from cache.
     *
     * Method is called when the data is retrieved from cache.  The context of the method is a hash of the response hash and the callback function.
     *
     * Campaign.getData._receivedDataFromCache(data)
     * data - hash/null - hash of campaign data (cid, scid, tc, etc.)
     */
    API._receivedDataFromCache = function(data) {
      // Remove listener.
      RL.lib.Events.unsubscribe("get_campaign_data");

      if (data) {
        // Capture visit.
        this.response.isCaptureCampaign = true;
      }

      API._cacheDataAndReturnResponse(data || {}, this.response, this.callback);
    };

    /**
     * Save campaign data to cache and execute the callback function with the data as the argument.
     *
     * Campaign.getData._cacheDataAndReturnResponse(data, response, callback)
     * data - object - hash of the campaign data (cid, scid, tc, etc)
     * response - object - hash of the response (isCaptureCampaign, isProxyCampaign)
     * callback - function - function to execute
     */
    API._cacheDataAndReturnResponse = function(data, response, callback) {
      API._saveInCache(data);
      callback($.extend(response, data));
    };

    /**
     * Retrieve stored Capture campaign data.
     *
     * Retrieve data from web storage on the site and Capture domains.
     * If web storage is disabled, null will be returned.
     *
     * Campaign.getdata._getFromCache()
     */
    API._getFromCache = function() {
      var data;

      if (!RL_LIB.isWebStorageEnabled()) {
        // Web storage is disabled.
        return RL.lib.Events.trigger("get_campaign_data", undefined, null);
      }

      data = sessionStorage.getItem("rl_campaign");

      if (!data) {
        // Retrieve campaign data stored in web storage in the Capture domain for multidomain visit.
        return RL.CaptureSiteStorage.getItem("rl_campaign", API._getFromCache._parseDataCachedRemotely);
      }

      API._getFromCache._parseDataCachedLocally(data);
    };

    /**
     * Parse data cached on the site domain.
     *
     * Campaign.getdata._getFromCache._parseDataCachedLocally(data)
     * data - string - campaign data
     */
    API._getFromCache._parseDataCachedLocally = function(data) {
      try {
        data = JSON.parse(data);
      } catch(err) {
        // Local web storage does not have campaign data.
        return RL.lib.Events.trigger("get_campaign_data", undefined, null);
      }

      if (!data.scid || !data.cid || !data.tc || !data.rl_key) {
        // Retrieved data does not contain valid campaign data.
        return RL.lib.Events.trigger("get_campaign_data", undefined, null);
      }

      RL.lib.Events.trigger("get_campaign_data");
    };

    /**
     * Parse data cached on the Capture domain.
     *
     * Campaign.getdata._getFromCache._parseDataCachedRemotely(data)
     * data - object - cached data
     *
     * data object:
     * rl_campaign - object - hash of campaign data and url of the page that cached the data
     */
    API._getFromCache._parseDataCachedRemotely = function(data) {
      try {
        data = JSON.parse(data.rl_campaign || "");
      } catch(err) {
        // Local web storage does not have campaign data.
        return RL.lib.Events.trigger("get_campaign_data", undefined, null);
      }

      if (!data.campaign || !data.pageUri) {
        // Retrieved data does not contain valid campaign data.
        return RL.lib.Events.trigger("get_campaign_data", undefined, null);
      }

      if (RL.config.config.referrer !== unescape(data.pageUri)) {
        // Retrieved campaign data is not valid for the current visit.
        return RL.lib.Events.trigger("get_campaign_data", undefined, null);
      }

      if (!data.campaign.scid || !data.campaign.cid || !data.campaign.tc) {
        // Retrieved data does not contain valid campaign data.
        return RL.lib.Events.trigger("get_campaign_data", undefined, null);
      }

      RL.lib.Events.trigger("get_campaign_data", undefined, data.campaign);
    };

    /**
     * Store campaign data in cache.
     *
     * Campaign data will be stored as JSON on the site and Capture domains.
     * If the argument is null or undefined, it will remove the cached data.
     *
     * Campaign.getdata._saveInCache(data)
     * data - object - hash of campaign data (scid, cid, tc, etc.)
     */
    API._saveInCache = function(data) {
      if (data) {
        sessionStorage.setItem("rl_campaign", JSON.stringify(data));
        RL.CaptureSiteStorage.setItem([{k: "rl_campaign", v: JSON.stringify({campaign: data, pageUri: escape(window.location.href)})}]);
      } else {
        sessionStorage.removeItem("rl_campaign");
        RL.CaptureSiteStorage.removeItem("rl_campaign");
      }
    };

    return API;
  })();

  RL_LIB.Campaign = RL_LIB_CAMPAIGN;

})(window, window.RL.lib, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Node.createForm(settings)
 * - .Node.createIframe(settings)
 * - .Node.createRoot()
 * - .Node.remove(nodes, delay)
 * - .Node.getTextNodes(rootNode)
 * - .Node.getAnchors(settings)
 */

(function(window, RL_LIB, $) {
  "use strict";

  RL_LIB.Node = {
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
    },

    /**
     * Get all TextNodes.
     *
     * If TreeWalker is supported, use it to get all TextNodes, or manually traverse the DOM to get them.
     * Return an array of nodes.
     *
     * .getTextNodes(rootNode)
     * rootNode - object - root node
     *
     * Return: object
     */
    getTextNodes: (function() {
      var API = function(rootNode) {

        if (rootNode !== undefined && (typeof rootNode !== "object" || rootNode === null || rootNode.nodeType !== 1)) {
          throw new Error("rootNode is invalid");
        }

        rootNode = rootNode || document.body;

        return API._isTreeWalkerEnabled() ? API._walkTree(rootNode) : API._walkDom(rootNode);
      };

      /**
       * Check if TreeWalker is supported.
       *
       * ._isTreeWalkerEnabled()
       *
       * Return: boolean
       */
      API._isTreeWalkerEnabled = function() {
        return document.createTreeWalker ? true : false;
      };

      /**
       * Get TextNodes by using TreeWalker.
       *
       * ._walkTree(rootNode)
       * rootNode - object - root node
       *
       * Return: object
       */
      API._walkTree = function(rootNode) {
        var treeWalker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false),
            nodes = [],
            node;

        while (node = treeWalker.nextNode()) {
          nodes.push(node);
        }

        return nodes;
      };

      /**
       * Get TextNodes by traversing the DOM iteratively.
       *
       * Traverse the DOM iteratively and look for TextNodes, and return an array of nodes.
       * Code taken from http://stackoverflow.com/questions/2579666/getelementsbytagname-equivalent-for-textnodes.
       *
       * ._walkDom(rootNode)
       * rootNode - object - root node
       *
       * Return: object
       */
      API._walkDom = function(rootNode) {
        var nodes = [],
            node;

        node = rootNode.childNodes[0];

        while (node) {
          if (node.nodeType == 3) {
            nodes.push(node);
          }

          if (node.hasChildNodes()) {
            node = node.firstChild;
          } else {
            while (!node.nextSibling && node != rootNode) {
              node = node.parentNode;
            }
            node = node.nextSibling;
          }
        }

        return nodes;
      };

      return API;
    })(),

    /**
     * Gets anchor elements.
     *
     * The list of anchor elements can be filtered by protocols and the parent node.
     * The settings.rootNode is node.  The settings.protocols is an array of protocols.
     * Returns an array of elements.
     *
     * .getAnchors(settings)
     * settings - object - (optional) a hash
     *
     * settings object:
     * rootNode - object - parent node
     * protocols - object - array of protocols to match
     *
     * Return: object
     */
    getAnchors: function(settings) {
      var nodes,
          rootNode,
          protocols;

      settings = settings || {};

      rootNode = settings.rootNode;
      if (rootNode !== undefined && (typeof rootNode !== "object" || rootNode === null || rootNode.nodeType !== 1)) {
        throw new Error("rootNode is invalid");
      }

      protocols = ($.isArray(settings.protocols) && settings.protocols.length > 0) ? settings.protocols : undefined;
      nodes = $(rootNode || document.body).find("a");

      if (protocols) {
        nodes = nodes.filter(function() {
          return protocols.indexOf(this.protocol) >= 0 ? this : undefined;
        });
      }

      return $.makeArray(nodes);
    }
  };
})(window, window.RL.lib, window.rl_jquery);
/**
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 * - .Url.getBaseDomain(url)
 * - .Url.getHostname(url)
 * - .Url.getQuerystring(url, key)
 */

(function(window, RL_LIB, $) {
  "use strict";

  RL_LIB.Url = {
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
     * Querystring is deserializes into a hash.  If key argument is a string or an array of strings, then the corresponding value(s) are returned.
     * If key argument is undefined, all values are returned.
     *
     * Url.getQuerystring(url, key)
     * url - string - url
     * key - string/array - (optional) key/keys to look for
     *
     * Return: object
     */
    getQuerystring: (function() {
      var API = function(url, key) {
        try {
          return API._getParamValue(API._getQuerystringAsAHash(url), key);
        } catch(err) {
          return {};
        }
      };

      /**
       * Get the querystring as a hash.
       *
       * ._getQuerystringAsAHash(url)
       * url - string - url
       *
       * Return: object
       */
      API._getQuerystringAsAHash = function(url) {
        if (typeof url !== "string") {
          throw new TypeError("Parameter url accepts a string.");
        } else if (url === "") {
          throw new Error("Parameter url is required.");
        }

        return $.deparam(url.replace(/[^?#]*(\?([^?#]*))?(#[^?#]*)?/gi, "$2"));
      };

      /**
       * Get the param value(s).
       *
       * ._getParamValue(hash, key)
       * hash - object - querystring hash
       * key - string - param key
       *
       * Return: object
       */
      API._getParamValue = function(hash, key) {
        var response = {},
            keys;

        if (typeof key === "string" && key) {
          response[key] = hash[key];
        } else if ($.isArray(key)) {
          keys = key;
          for (var i = 0, length = keys.length; i < length; i++) {
            key = keys[i];
            if (typeof key === "string" && key) {
              response[key] = hash[key];
            }
          }
        } else if (key === undefined) {
          response = hash;
        } else {
          throw new TypeError("Parameter key accepts a string or an array of strings.");
        }

        return response;
      };

      return API;
    })()
  };
})(window, window.RL.lib, window.rl_jquery);
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
 * - .Storage.getInstance(basePath)
 * - .Storage().settings(key)
 * - .Storage.prototype.getItem(key, success)
 * - .Storage.prototype.removeItem(key, success)
 * - .Storage.prototype.setItem(key, success)
 * - .Storage._sendRequest(url, settings)
 * - .Storage._sendRequest._removeIframe()
 * - .Storage._sendRequest._processMessage(data, response, origin)
 * - .Storage._getUrl(basePath, filePath, data, eventId)
 * - .Storage._getPayloadForGetAndRemove(key)
 * - .Storage._getPayloadForSet(data)
 */

(function(window, RL_LIB, $) {
  "use strict";

  /**
   * Create a Storage object.
   *
   * Storage(settings)
   * settings - object - a hash
   *
   * settings object:
   * basePath - string - url address of where the set, get, remove web storage services
   */
  var Storage = function(settings) {
    if (!$.isPlainObject(settings)) {
      throw new TypeError("Parameter settings accepts a hash.");
    } else if (typeof settings.basePath !== "string") {
      throw new TypeError("Parameter settings.basePath accepts a string.");
    } else if (settings.basePath === "") {
      throw new Error("Parameter settings.basePath is required.")
    }

    /**
     * Return a settings value.
     *
     * If the key argument is undefined, return a hash of all the setting values.
     *
     * .settings(key)
     * key - string - (optional) settings key
     *
     * Return: object/string
     */
    this.settings = function(key) {
      if (key === undefined) {
        return $.extend(true, {}, settings);
      } else if (typeof key === "string") {
        return settings[key];
      } else {
        throw new TypeError("Parameter key accepts an undefined or string.");
      }
    };
  };

  /**
   * Retrieve arbitrary data from storage.
   *
   * .prototype.getItem(key, success)
   * key - string/array - key or array of keys
   * success - function - function to be called if the request succeeds
   *
   * success function:
   * data - string - retrieved data
   */
  Storage.prototype.getItem = function(key, success) {
    var FILE_PATH = "/getItem.html",
        EVENT_ID = ["getItem", String.random(7)].join("-"),
        payload,
        url;

    try {
      payload = this.constructor._getPayloadForGetAndRemove(key);
    } catch(err) {
      return false;
    }

    if (payload.length < 1) {
      return false;
    }

    url = this.constructor._getUrl(this.settings("basePath"), FILE_PATH, payload, EVENT_ID);

    this.constructor._sendRequest(url, {success: success, eventId: EVENT_ID});
  };

  /**
   * Remove arbitrary data from storage.
   *
   * .prototype.removeItem(key, success)
   * key - string/array - key or array of keys
   * success - function - function to be called if the request succeeds
   *
   * success function:
   * data - string - retrieved data
   */
  Storage.prototype.removeItem = function(key, success) {
    var FILE_PATH = "/removeItem.html",
        EVENT_ID = ["removeItem", String.random(7)].join("-"),
        payload,
        url;

    try {
      payload = this.constructor._getPayloadForGetAndRemove(key);
    } catch(err) {
      return false;
    }

    if (payload.length < 1) {
      return false;
    }

    url = this.constructor._getUrl(this.settings("basePath"), FILE_PATH, payload, EVENT_ID);

    this.constructor._sendRequest(url, {success: success, eventId: EVENT_ID});
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
   * .prototype.setItem(data, success)
   * data - array - array of key-value mappings
   * success - function - callback
   *
   * success function:
   * data - string - retrieved data
   */
  Storage.prototype.setItem = function(data, success) {
    var FILE_PATH = "/setItem.html",
        EVENT_ID = ["setItem", String.random(7)].join("-"),
        payload,
        url;

    try {
      payload = this.constructor._getPayloadForSet(data);
    } catch(err) {
      return false;
    }

    if (payload.length < 1) {
      return false;
    }

    url = this.constructor._getUrl(this.settings("basePath"), FILE_PATH, payload, EVENT_ID);

    this.constructor._sendRequest(url, {success: success, eventId: EVENT_ID});
  };

  /**
   * Get an instance of RL.lib.Storage.
   *
   * .getInstance()
   *
   * Return: object
   */
  Storage.getInstance = function(basePath) {
    return new this({basePath: basePath});
  };

  /**
   * Remove invalid key(s) and return an array of valid key(s).
   *
   * The key argument can be a string or an array of strings.  If it is an array
   * containing non-strings, then they are removed.  If key is some other data type,
   * then an error is thrown.
   *
   * ._getPayloadForGetAndRemove(key)
   * key - string/array - key(s)
   *
   * Return: array
   */
  Storage._getPayloadForGetAndRemove = function(key) {
    var response = [],
        keys;

    if (typeof key === "string") {
      response.push(key);
    } else if ($.isArray(key)) {
      keys = key;
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (typeof key === "string") {
          response.push(key);
        }
      }
    } else {
      throw new TypeError("Parameter key accepts a string or an array.");
    }

    return response;
  };

  /**
   * Remove invalid data entries and return an array of valid entries.
   *
   * The data argument can only be an array of hashes.  None has array elemnts
   * are removed.  If data argument is not an array, then an error is thrown.
   *
   * ._getPayloadForSet(data)
   * data - array - array of hashes
   *
   * Return: array
   */
  Storage._getPayloadForSet = function(data) {
    var response = [],
        dataElem;

    if (!$.isArray(data)) {
      throw new TypeError("Parameter data accepts an array.");
    }

    for (var i = 0, length = data.length; i < length; i++) {
      dataElem = data[i];
      if ($.isPlainObject(dataElem)) {
        response.push(dataElem);
      }
    }

    return response;
  };

  /**
   * Create the endpoint url that contains the payload.
   *
   * ._getUrl(basePath, filePath, data, eventId)
   * basePath - string - url address of where the set, get, remove web storage services
   * filePath - string - path of endpoint
   * data - array - data array
   * eventId - string - (optional) event id used for window "message" event
   *
   * Return: string
   */
  Storage._getUrl = function(basePath, filePath, data, eventId) {
    eventId = typeof eventId === "string" ? eventId : "";

    return [basePath, filePath, "?rl_eid=", eventId, "&rl_ws=", encodeURIComponent(JSON.stringify(data))].join("");
  };

  /**
   * Send request to endpoint.
   *
   * This is function is used internally by .setItem(), .getItem(), and .removeItem().
   *
   * ._sendRequest(url, data, settings)
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
  Storage._sendRequest = function (url, settings) {
    var SELF_SENDREQUEST = this._sendRequest,
        RL_LIB_NODE = RL_LIB.Node,
        eventId;

    settings = $.isPlainObject(settings) ? settings : {};
    eventId = typeof settings.eventId === "string" ? settings.eventId : undefined;

    if (eventId) {
      RL_LIB.WindowMessageListener.bind(SELF_SENDREQUEST._processMessage, eventId, {success: settings.success});
    }

    RL_LIB_NODE.createIframe({
      parentNode: RL_LIB_NODE.createRoot(),
      src: url,
      complete: SELF_SENDREQUEST._removeIframe
    });
  };

  /**
   * Remove iframe node after a 100ms delay.
   *
   * "this" must be the iframe node.
   *
   * ._sendRequest._removeIframe()
   */
  Storage._sendRequest._removeIframe = function() {
    var removeIframe = function() {
      $(this).remove();
    };
    setTimeout($.proxy(removeIframe, this), 100);
  };

  /**
   * Process the postMessage from the request.
   *
   * ._sendRequest._processMessage(data, response, origin)
   * data - object - hash
   * response - string - response
   * origin - string - url where message originated
   */
  Storage._sendRequest._processMessage = function(data, response, origin) {
    // Security check.
    if (origin.search(/rlmms|rlets|rlcdn|reachlocal|lvh\.me|file:\/\/|jasmine|localhost|127\.0\.0\.1/gi) < 0) {
      // Ignore messages not from RL domains.
      return false;
    }

    RL_LIB.WindowMessageListener.unbind(data.WML_EVENT_ID);

    if (typeof data.success === "function") {
      // Return data to callback function.
      data.success(response);
    }
  };

  RL_LIB.Storage = Storage;
})(window, window.RL.lib, window.rl_jquery);
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

(function(window, RL_LIB, $) {
  "use strict";

  var originalXMLHttpRequest = {
        open: XMLHttpRequest.prototype.open,
        send: XMLHttpRequest.prototype.send
      },
      dataQueue = RL_LIB.DataQueue.getInstance(),
      AjaxListener;

  AjaxListener = {
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
        dataQueue = RL_LIB.DataQueue.getInstance();
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
     * If binding is success, return an id.
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
     * Return: string
     */
    bind: function(handler, data) {
      if (typeof handler !== "function") {
        throw new TypeError();
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

  if (window.jasmine && window.jasmine.SnapdragonConsoleReporter) {
    // Need for Jasmine tests.
    AjaxListener.setDataQueue = function(newQueue) {
      dataQueue = newQueue;
    };
    AjaxListener.getDataQueue = function() {
      return dataQueue;
    };
  }

  RL_LIB.AjaxListener = AjaxListener;

})(window, window.RL.lib, window.rl_jquery);
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
 * Provide a set of base functions in the RL.lib namespace.
 *
 * List of functions in RL.lib namespace:
 */

(function(window, RL_LIB, RL, $) {
  "use strict";

  var CVT = {
    getCvtByUrlAndCampaignId: (function() {
      var API = function(url, campaignId) {
        var cvtsFilteredByUrl = CVT.getCvtsByUrl(url);

        for (var cvtUrl in cvtsFilteredByUrl) {
          var cvts = cvtsFilteredByUrl[cvtUrl],
              cvt = API._getCvtByCampaignId.call(cvts, campaignId);

          if (cvt) {
            return cvt;
          }
        }

        return null;
      };

      API._getCvtByCampaignId = function(campaignId) {
        var cvts = this;

        for (var i = 0, length = cvts.length; i < length; i++) {
          var cvt = cvts[i];

          if (cvt.campaign_id === campaignId) {
            return cvt;
          }
        }

        return null;
      };

      return API;
    })(),

    /**
     * Get all CVTs that applies to the specified url.
     *
     * Matching CVTs are returned in a hash.
     *
     * .getCvtsByUrl(url)
     * url - string - url
     *
     * Return: object
     */
    getCvtsByUrl: (function() {
      var API = function(url) {
        var $url,
            host,
            paths,
            cvts;

        if (typeof url !== "string" || url === "") {
          return {};
        }

        cvts = RL.config.cvts;

        host = API._getHost.call(cvts, url);
        if (!host) {
          return {};
        }

        paths = API._getPath.call(cvts, host, url.replace(host, ""));
        if (paths.length === 0) {
          return {};
        }

        return API._getCvts.call(cvts, host, API._sortPathsByLongestToShortest(paths));
      };

      API._getHost = function(url) {
        var cvts = this;

        for (var cvtHost in cvts) {
          if (url.indexOf(cvtHost) === 0) {
            return cvtHost;
          }
        }

        return null;
      };

      API._getPath = function(host, relativePath) {
        var cvts = this[host],
            paths = [];

        for (var cvtRelativePath in cvts) {
          if (relativePath.indexOf(cvtRelativePath) > -1) {
            paths.push(cvtRelativePath);
          }
        }

        return paths;
      };

      API._getCvts = function(host, paths) {
        var cvtsFilteredByHost = this[host],
            cvts = {};

        for (var i = 0, length = paths.length; i < length; i++) {
          var path = paths[i];
          cvts[[host, path].join("")] = cvtsFilteredByHost[path];
        }

        return cvts;
      };

      API._sortPathsByLongestToShortest = function(paths) {
        return paths.sort(function(a, b) {
          return b.length - a.length;
        });
      };

      return API;
    })()
  }

  RL_LIB.CVT = CVT;

})(window, window.RL.lib, window.RL, window.rl_jquery);
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
         * visitId - string - (optional) visit id
         * referrerType - string - (optional) referrer type
         * referrerSource - string - (optional) referrer source
         */
        trackVisit: function(data, callback) {
          var URI = "/api/v1/visits",
              eventId = this._generateEventId("trackVisit"),
              payload = $.extend(this._buildCampaignPayload(false), this._buildPayload());

          if (typeof data.visitorId === "string" && data.visitorId !== "") {
            payload.visitor_id = data.visitorId;
          }
          if (typeof data.visitId === "string" && data.visitId !== "") {
            payload.visit_id = data.visitId;
          }
          if (typeof data.referrerType === "string" && data.referrerType !== "") {
            payload.referrer_type = data.referrerType;
          }
          if (typeof data.referrerSource === "string" && data.referrerSource !== "") {
            payload.referrer_source = data.referrerSource;
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
            eventId = this._generateEventId("trackEmail"),
            payload = $.extend(this._buildCampaignPayload(), this._buildPayload());

          payload.visit_id = data.visitId || "";
          payload.visitor_id = data.visitorId || "";

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

          this._sendRequest(URI, eventId, payload);
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
              eventId = this._generateEventId("trackPost"),
              requiredFields = {phone: false, email: false},
              payload = $.extend(this._buildCampaignPayload(), this._buildPayload());

          payload.visit_id = data.visitId || "";
          payload.visitor_id = data.visitorId || "";

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
            this._sendRequest(URI, eventId, payload, callback);
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
              eventId = this._generateEventId("trackCvt"),
              payload = $.extend(this._buildCampaignPayload(), this._buildPayload());

          payload.src = "capture";
          payload.idpagecvt = data.cvtId || "";       // CVT id.
          payload.event = data.cvtType || "";         // CVT type.
          payload.visit_id = data.visitId || "";      // Visit id.
          payload.visitor_id = data.visitorId || "";  // Visitor id.

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

          this._sendRequest(URI, eventId, payload);
        },

        _sendRequest: function(urlPath, eventId, data, callback) {
          var config = RL.config,
              url = this._buildUrl(config.id, config.config.domains.capture, urlPath),
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
          RL.lib.Events.trigger("sent_request_to_capture_api", undefined, {url: url, data: payload, eventId: eventId});
        },

        _buildPayload: function() {
          var config = RL.config,
              siteConfig = config.config,
              data = {};

          data.global_master_advertiser_id = config.globalMasterAdvertiserId; // Global master advertiser id.
          data.page_name = siteConfig.pageTitle;      // Page title.
          data.fname = siteConfig.pageUri.href;       // Page url.
          data.referrer = siteConfig.referrer;        // Referrer url.

          try {
            data.debug = JSON.stringify({
              webStorage: sessionStorage.getItem("rl_debug_web_storage"),
              visitRequest: sessionStorage.getItem("rl_debug_visit_request"),
              visitResponse: sessionStorage.getItem("rl_debug_visit_response"),
              getVisitData: sessionStorage.getItem("rl_debug_get_visit_data"),
              referrerOther: sessionStorage.getItem("rl_debug_referrer_other"),
              jsConfig: RL.config.config,
              allCampaignData: RL.config.campaign_data,
              paidCampaignData: RL.config.campaign_data[[RL.config.config.platform, RL.config.config.campaign.cid].join("_")],
              unpaidCampaignData: RL.config.campaign_data[sessionStorage.getItem("referrer_type")],
              referrerType: sessionStorage.getItem("referrer_type"),
              scorpionCounter: sessionStorage.getItem("rl_debug_scorpion_call_count")
            });
          } catch(err) {
            data.debug = JSON.stringify({
              webStorage: 0,
              visitRequest: 0,
              visitResponse: 0,
              getVisitData: 0,
              referrerOther: 0,
              jsConfig: RL.config.config,
              allCampaignData: RL.config.campaign_data,
              paidCampaignData: RL.config.campaign_data[[RL.config.config.platform, RL.config.config.campaign.cid].join("_")],
              unpaidCampaignData: "",
              referrerType: "",
              scorpionCounter: 0
            });
          }

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
            data.referrer_source = "PAID";
          } else {
            try {
              data.master_campaign_id = (campaignData[sessionStorage.getItem("referrer_type")] || {}).master_campaign_id;
            } catch(err) {
            }

            if (defaultToOther && !data.master_campaign_id) {
              data.master_campaign_id = (campaignData["OTHER"] || {}).master_campaign_id;
              try {
                sessionStorage.setItem("rl_debug_referrer_other", data.master_campaign_id);
              } catch(err) {}
            }

            data.referrer_source = "ORGANIC";
          }

          if (data.master_campaign_id) {
            data.master_campaign_id = [platform, data.master_campaign_id].join("_");
          }

          return data;
        },

        _buildUrl: function(siteId, host, path) {
          var config = RL.config,
              protocol = (config.env === "P" || config.env === "QA") ? "https" : "http";

          return [protocol, "://", siteId, ".", host, path].join("");
        },

        _generateEventId: function(prefix) {
          return [prefix, String.random(7)].join("-");
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

                    RL.lib.Events.trigger("captured_form_submission", function() {
                      $formE.find(":submit").click();
                    }, {form: formE, url: formE.action, data: $(formE).formSerialize()});

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
                    RL.lib.Events.trigger("captured_form_submission", function() {
                      // Form submission is not cancelled.
                      formE.submit();
                    }, {form: formE, url: formE.action, data: formData});
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

                        RL.lib.Events.trigger("captured_form_submission", function() {
                          // Form submission is not cancelled.
                          submit.apply(formE, args);
                        }, {form: formE, url: formE.action, data: formData});
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
                RL.lib.Events.trigger("captured_form_submission", undefined, {url: formUri, data: data});
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
     * settings - object - a hash object
     *
     * settings object:
     * url - string - form action url
     * data - object - form fields (a hash object)
     * complete - function - callback function after forwarding form data to Capture
     * node - object - (optional) form DOM node
     */
    trackFormPost: (function() {
      var callCounter = 0,
          API;

      API = function(settings) {
        var config = RL.config.config,
            isHipaa = config.hipaa === 1 ? true : false,
            pageUrl = config.pageUri.href;

        try {
          sessionStorage.setItem("rl_debug_scorpion_call_count", ++callCounter);
        } catch(err) {}

        settings = this.trackFormPost._initSettings(settings);

        if (this.trackFormPost._isSslAndIsNotHipaa(pageUrl, settings.url, isHipaa)) {
          // Do not track forms that have SSL but is not HIPAA.
          return false;
        }

        // Dispatch form-submission-capture.callback event.
        RL.lib.Events.trigger("captured_form_submission", settings.complete, {url: settings.url, data: settings.data, node: settings.node});

        return true;
      };

      API._initSettings = function(settings) {
        if (!$.isPlainObject(settings)) {
          return {
            url: "",
            data: "",
            complete: undefined
          };
        }

        if (typeof settings.url !== "string") {
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

        return {
          url: settings.url,
          data: settings.data,
          complete: settings.complete
        };
      };

      API._isSslAndIsNotHipaa = function(pageUrl, formActionUrl, isHipaa) {
        if ((pageUrl.substr(0, 5) === "https" || formActionUrl.substr(0, 5) === "https") && !isHipaa) {
          return true;
        }

        return false;
      };

      return API;
    })()
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

(function(window, RL, $) {
  "use strict";

  var API = {
    /**
     * Kick off tracking.
     *
     * If the visit is by Proxy, then tracking will be disabled and this method will return a boolean "false"; otherwise,
     * the RL.CAPTURE object will be returned.
     *
     * .init()
     *
     * Return: boolean/object
     */
    init: function() {
      var SELF_INIT = this.init;

      // Init debug.
      this.debug.init();

      if (SELF_INIT._isProxyVisit()) {
        // Do not track if proxy visit.
        return false;
      }

      // Check if visitor has opted out.
      RL.lib.isOptedOut(SELF_INIT._isOptedOutCallback);
    },

    debug: {
      /**
       * .debug.init()
       */
      init: function() {
        try {
          sessionStorage.setItem("rl_debug_web_storage", "1");
          sessionStorage.setItem("rl_debug_visit_request", "0");
          sessionStorage.setItem("rl_debug_visit_response", "0");
          sessionStorage.setItem("rl_debug_get_visit_data", "0");
          sessionStorage.setItem("rl_debug_referrer_other", "0");
        } catch(err) {}
      },

      /**
       * .debug.clear()
       */
      clear: function() {
        try {
          sessionStorage.removeItem("rl_debug_web_storage");
          sessionStorage.removeItem("rl_debug_visit_request");
          sessionStorage.removeItem("rl_debug_visit_response");
          sessionStorage.removeItem("rl_debug_get_visit_data");
          sessionStorage.removeItem("rl_debug_referrer_other");
        } catch(err) {}
      },

      /**
       * .debug.get()
       */
      get: function() {
        try {
          return {
            rl_debug_web_storage: sessionStorage.getItem("rl_debug_web_storage"),
            rl_debug_visit_request: sessionStorage.getItem("rl_debug_visit_request"),
            rl_debug_visit_response: sessionStorage.getItem("rl_debug_visit_response"),
            rl_debug_get_visit_data: sessionStorage.getItem("rl_debug_get_visit_data"),
            rl_debug_referrer_other: sessionStorage.getItem("rl_debug_referrer_other")
          };
        } catch(err) {
          return {
            rl_debug_web_storage: "0",
            rl_debug_visit_request: "0",
            rl_debug_visit_response: "0",
            rl_debug_get_visit_data: "0",
            rl_debug_referrer_other: "0"
          };
        }
      },

      /**
       * .debug.set(key)
       */
      set: function(key, value) {
        switch(key) {
          case "rl_debug_visit_request":
          case "rl_debug_visit_response":
          case "rl_debug_get_visit_data":
          case "rl_debug_referrer_other":
            try {
              sessionStorage.setItem(key, value || "1");
            } catch(err) {}
            break;

          default:
        }
      }
    }
  };

  /**
   * Check if the visit is a Proxy visit.
   *
   * .init._isProxyVisit()
   *
   * Return: boolean
   */
  API.init._isProxyVisit = function() {
    var campaign = RL.config.config.campaign;
    return campaign.isSrcProxy;
  };

  /**
   * Check if the visit is a Capture visit.
   *
   * .init._isCaptureVisit()
   *
   * Return: boolean
   */
  API.init._isCaptureVisit = function() {
    var campaign = RL.config.config.campaign;
    return campaign.isPaidCampaign && !campaign.isSrcProxy;
  };

  /**
   * Check if the visit is a Proxy or Capture visit.
   *
   * .init._isPaidVisit()
   *
   * Return: boolean
   */
  API.init._isPaidVisit = function() {
    return RL.config.config.campaign.isPaidCampaign;
  };

  /**
   * Check if visitor has opted out callback.
   *
   * If the optout cookie has the boolean value "true", then the visitor has opted out.
   *
   * .init._isOptedOutCallback(cookie)
   * cookie - boolean - true if visitor has opted out else false
   */
  API.init._isOptedOutCallback = function(cookie) {
    var SELF_INIT = API.init;

    if (cookie === true) {
      // Visitor has opted out.

     // Track CVTs.
      SELF_INIT._trackCvts(true);

      return;
    }

    // Replace strings and images.
    SELF_INIT._replacePageContent(SELF_INIT._getCaptureVisitReplacementDataType());

    // Retrieve visitor id, visit id, and referrer type, and track visit.
    RL.CaptureSiteStorage.getItem(["visitor_id", "visit_id", "referrer_type", "bot_type"], SELF_INIT._trackVisit);

    // Capture form submits.
    SELF_INIT._captureFormSubmits();
  };

  /**
   * Replace web page content.
   *
   * .init._replacePageContent(dataType)
   * dataType - string - the data type that is needed to get the replacement data
   */
  API.init._replacePageContent = function(dataType) {
    var SELF_INIT_REPLACEPAGECONTENT = API.init._replacePageContent,
        replacementData;

    if (!RL.lib.areCookieAndWebStorageEnabled()) {
      // Do not replace if web storage and cookie are disabled.
      return false;
    }

    // Get data for all replacement type.
    replacementData = SELF_INIT_REPLACEPAGECONTENT._getData(dataType);

    if (!$.isEmptyObject(replacementData.strings)) {
      // Replace text & images.
      SELF_INIT_REPLACEPAGECONTENT._replaceTextAndImages(SELF_INIT_REPLACEPAGECONTENT._formatData(replacementData.strings));
    }

    if (!$.isEmptyObject(replacementData.phone)) {
      // Replace phone numbers.
      SELF_INIT_REPLACEPAGECONTENT._replacePhoneNumbers(SELF_INIT_REPLACEPAGECONTENT._formatData(replacementData.phone));
    }

    if (!$.isEmptyObject(replacementData.email)) {
      // Replace emails.
      SELF_INIT_REPLACEPAGECONTENT._replaceEmailLinks(SELF_INIT_REPLACEPAGECONTENT._formatData(replacementData.email));
    }
  };

  /**
   * Get the data type that is needed to get the replacement data for organic visits.
   *
   * If the visitor is a robot and the visit is direct, return empty string or else return the referrer type.
   *
   * .init._getOrganicVisitReplacementDataType()
   *
   * Return: string
   */
  API.init._getOrganicVisitReplacementDataType = function() {
    var SELF_INIT = API.init,
        referrerType,
        isARobotVisitor;

    try {
      referrerType = sessionStorage.getItem("referrer_type") || "";
      isARobotVisitor = sessionStorage.getItem("bot_type") ? true : false;
    } catch(err) {
      // Web storage is disabled.
      return "";
    }

    if (!SELF_INIT._isPaidVisit() && !(isARobotVisitor && referrerType === "DIRECT")) {
      // Do not replace if visited by a robot and the referral type is "DIRECT".
      return referrerType;
    }

    // Proxy visit or visitor is a robot and the visit is direct.
    return "";
  };

  /**
   * Get the data type that is needed to get the replacement data for Capture visits.
   *
   * Return the platform concatenated with the SCID.
   *
   * .init._getCaptureVisitReplacementDataType()
   *
   * Return: string
   */
  API.init._getCaptureVisitReplacementDataType = function() {
    var config = RL.config.config;

    if (API.init._isCaptureVisit()) {
      return [config.platform, config.campaign.scid].join("_");
    }

    // Proxy visit or web storage is disabled.
    return "";
  };

  /**
   * Get replacement data for the specified type.
   *
   * Type is either platform + SCID or the referrer type.  If there is
   * no data for the specified type or if the type is not specified,
   * then an empty hash is return.
   *
   * .init._replacePageContent._getData = function(dataType)
   * dataType - string - type of data to get
   *
   * Return: object
   */
  API.init._replacePageContent._getData = function(dataType) {
    try {
      return RL.config.replacements[dataType] || {};
    } catch(err) {
      return {};
    }
  }

  /**
   * Format JS config data so it is usuable.
   *
   * Returns an array of hashes that has "search" and "replace" keys.
   *
   * .init._replacePageContent._formatData(data)
   * data - object - array of hashes
   *
   * Return: object
   */
  API.init._replacePageContent._formatData = function(data) {
    var response = [];

    if ($.type(data) !== "array") {
      return [];
    }

    for (var i = 0, length = data.length; i < length; i++) {
      var dataElement = data[i];
      response.push({
        search: dataElement.original,
        replace: dataElement.replace
      });
    }

    return response;
  }

  /**
   * Replace text and images.
   *
   * .init._replacePageContent._replaceTextAndImages(data)
   * data - object - aray of hashes with "search" and "replace" keys
   */
  API.init._replacePageContent._replaceTextAndImages = function(data) {
    var imgData = [],         // Images that needed replacement.
        strData = {data: []}; // Text that needed replacement.

    if (data.length < 1) {
      return;
    }

    for (var i = 0, length = data.length; i < length; i++) {
      var elem = data[i],
        searchStr = API.init._replacePageContent._replaceTextAndImages._parseString(elem.search),
        replaceStr = API.init._replacePageContent._replaceTextAndImages._parseString(elem.replace);

      if (searchStr.string !== "") {
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

    RL.replaceImage(imgData);
    RL.replaceText(strData);
  };

  /**
   * Parse data for pure text and images.
   *
   * .init._replacePageContent._replaceTextAndImages._parseString(string)
   * string - string - string to parse for text and images
   *
   * Return: object
   */
  API.init._replacePageContent._replaceTextAndImages._parseString = function(string) {
    if (string.search(/(img)?.*src\s*=\s*[\"\'][^\'\"]*[\"\']/ig) > -1) {
      // String contains IMG tag.
      var text = string.replace(/<?\s*(img)?(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*src\s*=\s*[\"\']([^\"\']*)[\"\'](\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*\/?>?/ig, "");

      if ($.trim(text).length === 0) {
        // String is an IMG tag.
        return {type: ["image"], string: string.replace(/<?\s*(img)?(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*src\s*=\s*[\"\']([^\"\']*)[\"\'](\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*\/?>?/ig, "$3")};
      } else {
        // String contains additional text.
        return {type: ["string"], string: text, image: string.match(/(<\s*img.*src\s*=\s*)[\"\']([^\"\']*)[\"\']((\s\w+\s*=?\s*[\"\']?[^\"\']*[\"\']?)*\s*\/?>)/ig)[0]};
      }
    } else if (string.search(/^(background(-image)?:|transparent )?(url)?\s*\(\s*[\"\']?([^\"\']*)[\"\']?\s*\)$/ig) === 0) {
      // String contains CSS background image.
      return {type: ["image", "string"], string: string.replace(/^(background(-image)?:|transparent )?(url)?\s*\(\s*[\"\']?([^\"\']*)[\"\']?\s*\)$/ig, "$4")};
    } else if (string.search(/^background\s*=\s*[\"\']([^\"\']*)[\"\']?$/ig) === 0) {
      // String contains CSS background image.
      return {type: ["image"], string: string.replace(/^background\s*=\s*[\"\']([^\"\']*)[\"\']?$/ig, "$1")};
    } else if (string.search(/.+\.(jpg|jpeg|gif|tif|png|bmp)\s*$/ig) > -1) {
      // String contains an url.
      return {type: ["image", "string"], string: string.replace(/(.+\.(jpg|jpeg|gif|tif|png|bmp))\s*$/ig, "$1")};
    } else if (string.search(/a(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*href\s*=\s*[\"\'][^\'\"]*[\"\']/ig) > -1) {
      // String contains a link.
      var text = string.replace(/<a(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*href\s*=\s*[\"\']([^\"\']*)[\"\'](\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*>.+<\/a>/gi, "$LINK$");

      if ($.trim(text) === "$LINK$") {
        // String is a link.
        return {type: ["link"], link: string};
      } else {
        // String contains additional text.
        var linkStr = string.match(/<a(\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*href\s*=\s*[\"\']([^\"\']*)[\"\'](\s\w+\s*=?\s*[\"\'][^\"\']*[\"\'])*\s*>.+<\/a>/ig);
        if (linkStr !== null) {
          return {type: ["string"], string: text, link: linkStr[0]};
        }
      }
    }

    return {type: ["string"], string: string};
  };

  /**
   * Replace phone numbers.
   *
   * .init._replacePageContent._replacePhoneNumbers(data)
   * data - object - aray of hashes with "search" and "replace" keys
   */
  API.init._replacePageContent._replacePhoneNumbers = function(data) {
    if (data.length < 1) {
      return;
    }

    RL.lib.replacePhoneNumbers(data);
  };

  /**
   * Replace email links.
   *
   * .init._replacePageContent._replaceEmailLinks(data)
   * data - object - aray of hashes with "search" and "replace" keys
   */
  API.init._replacePageContent._replaceEmailLinks = function(data) {
    if (data.length < 1) {
      return;
    }

    $("a[href^=mailto]").each(function(i, linkE) {
      for (var i = 0, length = data.length; i < length; i++) {
        var searchReplaceData = data[i],
            searchValue = searchReplaceData.search,
            replaceValue = searchReplaceData.replace;

        if (linkE.href.replace("mailto:", "").toLowerCase() === searchValue.toLowerCase()) {
          return RL.replaceLink({
            nodeE: linkE,
            uri: ["mailto", replaceValue].join(":")
          });
        }
      }
    });
  };

  /**
   * Capture form submits.
   *
   * .init._captureFormSubmits()
   */
  API.init._captureFormSubmits = function() {
    RL.captureFormSubmit();
  };

  /**
   * Record CVTs.
   *
   * .init._trackCvts()
   */
  API.init._trackCvts = (function() {
    var formPostSubscriptionId,
        postUrl,
        pageCvt,
        TRACKCVTS;

    TRACKCVTS = function(isFormPostOnly) {
      if (isFormPostOnly !== true && API.init._isCaptureVisit()) {
        TRACKCVTS._getPostRequestFlag(TRACKCVTS._checkIfPostRequest);
      }

      if (formPostSubscriptionId === undefined) {
        formPostSubscriptionId = RL.lib.Events.subscribe("captured_form_submission", TRACKCVTS._checkFormPostForCvts);
      }
    };

    /**
     *
     */
    TRACKCVTS._getPostRequestFlag = function(callback) {
      if (postUrl === undefined) {
        RL.CaptureStorage.getItem("rl_capture_post_url", function(data) {
          var url = data.rl_capture_post ? data.rl_capture_post : null;
          postUrl = url;
          callback(url);
        });
      } else {
        callback(postUrl);
      }
    };

    /**
     *
     */
    TRACKCVTS._checkIfPostRequest = function(url) {
      var pageUrl = window.location.href,
          cvt;

      if (url === pageUrl) {
        // CVT event has been captured already.
        return RL.CaptureStorage.removeItem("rl_capture_post_url");
      }

      cvt = RL.lib.CVT.getCvtByUrlAndCampaignId(pageUrl, [RL.config.config.platform, RL.config.config.campaign.cid].join("_"));
      pageCvt = cvt;

      if (cvt) {
        TRACKCVTS._sendCvtEvent(cvt.cvtid, cvt.value);
      }
    };

    /**
     *
     */
    TRACKCVTS._checkFormPostForCvts = function(data, complete) {
      var formCvt = RL.lib.CVT.getCvtByUrlAndCampaignId(data.url, [RL.config.config.platform, RL.config.config.campaign.cid].join("_")),
          isAuto8 = false;

      if (formCvt || (pageCvt && pageCvt.value === "low")) {
        // Form post is a CVT.
        if (pageCvt && pageCvt.value === "low" && (!formCvt || formCvt.value !== "high")) {
          // Auto 8.
          formCvt = {
            cvtid: pageCvt.cvtid,
            value: "high"
          };
          isAuto8 = true;
        }
      }

      if (formCvt) {
        // Send CVT event for form post.
        TRACKCVTS._sendCvtEvent(formCvt.cvtid, formCvt.value, {referrer: document.referrer, fname: data.url});
      }

      TRACKCVTS._sendPostEvent(data.url, data.data, isAuto8, complete);

      return false;
    };

    /**
     *
     */
    TRACKCVTS._sendCvtEvent = function(id, type, fields) {
      var payload = {
        cvtId: id,
        cvtType: type === "high" ? 8 : 7,
        visitorId: sessionStorage.getItem("visitor_id") || "",
        visitId: sessionStorage.getItem("visit_id") || ""
      };

      if ($.isPlainObject(fields)) {
        for (var fieldName in fields) {
          payload[fieldName] = fields[fieldName];
        }
      }

      RL.CaptureWS.trackCvt(payload);
    };

    /**
     *
     */
    TRACKCVTS._sendPostEvent = function(url, postbody, isAuto8, complete) {
      var payload = {
        visitorId: sessionStorage.getItem("visitor_id") || "",
        visitId: sessionStorage.getItem("visit_id") || "",
        formUri: url,
        postbody: postbody
      };

      if (isAuto8 === true) {
        payload.referrer = document.referrer;
      }

      RL.CaptureWS.trackPost(payload, TRACKCVTS._getPostEventCallback(url, complete));
    };

    TRACKCVTS._getPostEventCallback = function(url, complete) {
      return function() {
        // Set POST action flag.
        RL.CaptureStorage.setItem([{k: "rl_capture_post", v: url, e: parseInt(Date.now() / 1000) + 60}], complete);
      };
    };

    return TRACKCVTS;
  })();

  /**
   * Track visit.
   *
   * .init._trackVisit()
   */
  API.init._trackVisit = function(data) {
    var SELF_INIT = API.init,
        SELF_DEBUG = API.debug;

    if (!RL.lib.areCookieAndWebStorageEnabled()) {
      // Do not track if web storage and cookie are disabled.
      return false;
    }

    data = SELF_INIT._trackVisit._checkVisit(data || {});

    if (data.visitId) {
      SELF_INIT._trackVisit._continueVisit(data);
    } else {
      RL.CaptureWS.trackVisit({
        visitorId: data.visitorId,
        visitId: data.visitId || sessionStorage.getItem("rl_history_visit_id"),
        referrerType: data.referrerType
      }, SELF_INIT._trackVisit._startVisit);

      // Log visit request.
      SELF_DEBUG.set("rl_debug_visit_request", parseInt(SELF_DEBUG.get().rl_debug_visit_request) + 1);
    }
  };

  /**
   * Check for a visit (session).
   *
   * If a visit is in progress, return visit data.  Visit data is a hash that contains
   * "visitor_id", "visit_id", "referrer_type", and "bot_type" keys.  The visit id value is a JSON-formatted
   * string that contains "id" and "expiration" keys.  The id value is the visit id and the
   * expiration is a timestamp of when the visit expires.
   *
   * .init._trackVisit._checkVisit(data)
   * data - object - hash with "visitor_id", "visit_id", "referrer_type", and "bot_type" keys.
   *
   * Return: object
   */
  API.init._trackVisit._checkVisit = function(data) {
    var SELF_INIT = API.init,
        SELF_DEBUG = API.debug,
        visitorId,
        visitId,
        referrerType,
        botType;

    // Log visit data retrieval.
    SELF_DEBUG.set("rl_debug_get_visit_data", parseInt(SELF_DEBUG.get().rl_debug_get_visit_data) + 1);

    if (!data.visitor_id) {
      // New visit since no visitor id.
      return {visitorId: "", visitId: "", referrerType: "", botType: ""};
    }

    visitorId = data.visitor_id || "";
    visitId = SELF_INIT._trackVisit._parseVisitId(data.visit_id) || "";
    referrerType = data.referrer_type || "";
    botType = data.bot_type || "";

    // Cache visit id, referrer type, and bot type just in case the visit is a continuation.
    sessionStorage.setItem("rl_history_visit_id", visitId);
    sessionStorage.setItem("rl_history_referrer_type", referrerType);
    sessionStorage.setItem("rl_history_bot_type", botType);

    if (!visitId) {
      // New visit since no visit id.
      visitId = referrerType = botType = "";
    } else if (!SELF_INIT._trackVisit._isAnInternalUrl(window.location.hostname)) {
      // New visit since unknown domain.
      visitId = referrerType = botType = "";
    } else if (SELF_INIT._trackVisit._isReferredFromAnExternalSource()) {
      // New visit since page is referred from an external source.
      visitId = referrerType = botType = "";
    }

    if (visitorId && !$.cookie("rl_visitor_history")) {
      $.cookie("rl_visitor_history", visitorId);
    }

    // Cache visitor id, visit id, and referrer type.
    sessionStorage.setItem("visitor_id", visitorId);
    sessionStorage.setItem("visit_id", visitId);
    sessionStorage.setItem("referrer_type", referrerType);
    sessionStorage.setItem("bot_type", botType);

    return {visitorId: visitorId, visitId: visitId, referrerType: referrerType, botType: botType};
  };

  /**
   * Parse out cached visit id.
   *
   * Parse JSON-formatted string and return the visit id.  Visit id can expire for organic visits.
   *
   * .init._trackVisit._parseVisitId(data)
   * data - string - JSON-formatted string that contains "id" and "expiration" keys.
   *
   * Return: string
   */
  API.init._trackVisit._parseVisitId = function(data) {
    try {
      data = JSON.parse(data);
    } catch(err) {
      return "";
    }

    if (RL.config.config.referrer === "" && (data.expiration || 0) <= (Date.now() / 1000)) {
      // Visit has expired.
      return "";
    }

    return data.id || "";
  };

  /**
   * Check if the url is considered an internal url.
   *
   * .init._trackVisit._isAnInternalUrl(url)
   * url - string - page url
   *
   * Return: boolean
   */
  API.init._trackVisit._isAnInternalUrl = function(url) {
    var domains = RL.config.config.domains.internal || [];

    if (!url) {
      return false;
    }

    // Strip off protocol.
    url = url.replace(/^https?:\/\//, "").toLowerCase();

    for (var i = 0, length = domains.length; i < length; i++) {
      if (url.indexOf(domains[i].toLowerCase()) === 0) {
        return true;
      }
    }

    return false;
  };

  /**
   * Check if the referrer is from an external source.
   *
   * .init._trackVisit._isReferredFromAnExternalSource()
   *
   * Return: boolean
   */
  API.init._trackVisit._isReferredFromAnExternalSource = function() {
    var url = RL.config.config.referrer;
    return url ? !API.init._trackVisit._isAnInternalUrl(url) : false;
  };

  /**
   * Start a new visit.
   *
   * .init._trackVisit._startVisit(data)
   * data - object - hash containing "visitorId", "visitId", and "referrerType" keys.
   */
  API.init._trackVisit._startVisit = function(data) {
    var SELF_INIT = API.init,
        SELF_DEBUG = API.debug;

    // Log visit response.
    SELF_DEBUG.set("rl_debug_visit_response", parseInt(SELF_DEBUG.get().rl_debug_visit_response) + 1);

    if ($.isEmptyObject(data)) {
      // Continuation of a previous session.
      data = {
        visitor_id: sessionStorage.getItem("visitor_id") || "",
        visit_id: sessionStorage.getItem("rl_history_visit_id") || "",
        referrer_type: sessionStorage.getItem("rl_history_referrer_type") || "",
        bot_type: sessionStorage.getItem("rl_history_bot_type") || ""
      };
    } else {
      data.visitor_id = data.visitor_id || "";
      data.visit_id = data.visit_id || "";
      data.referrer_type = data.referrer_type || "";
      data.bot_type = data.bot_type || "";
    }

    sessionStorage.removeItem("rl_history_visit_id");
    sessionStorage.removeItem("rl_history_referrer_type");
    sessionStorage.removeItem("rl_history_bot_type");

    // Cache visitor id, visit id, and referrer type.
    sessionStorage.setItem("visitor_id", data.visitor_id);
    sessionStorage.setItem("visit_id", data.visit_id);
    sessionStorage.setItem("referrer_type", data.referrer_type);
    sessionStorage.setItem("bot_type", data.bot_type);

    if (data.visitor_id && !$.cookie("rl_visitor_history")) {
      $.cookie("rl_visitor_history", data.visitor_id);
    }

    // Save visit id, visitor id, and referral type.
    RL.CaptureSiteStorage.setItem([
      {k: "visitor_id", v: data.visitor_id, e: ""},
      {k: "visit_id", v: JSON.stringify({id: data.visit_id, expiration: parseInt(Date.now() / 1000) + 86400})},
      {k: "referrer_type", v: data.referrer_type},
      {k: "bot_type", v: data.bot_type},
    ]);

    // Phone and string replacements for organic visit.
    SELF_INIT._replacePageContent(SELF_INIT._getOrganicVisitReplacementDataType());

    // Track CVTs.
    SELF_INIT._trackCvts();

    // Dispatch visit event.
    RL.lib.Events.trigger("Capture_visit", undefined, {visitorId: data.visitor_id, visitId: data.visit_id, referrerType: data.referrer_type, botType: data.bot_type});
  };

  /**
   * Continue an existing visit.
   *
   * .init._trackVisit._startVisit(data)
   * data - object - hash containing "visitorId", "visitId", and "referrerType" keys.
   */
  API.init._trackVisit._continueVisit = function(data) {
    var SELF_INIT = API.init;

    // Phone and string replacements for organic visit.
    SELF_INIT._replacePageContent(API.init._getOrganicVisitReplacementDataType());

    // Track CVTs.
    SELF_INIT._trackCvts();

    // Dispatch visit event.
    RL.lib.Events.trigger("Capture_visit", undefined, {visitorId: data.visitorId, visitId: data.visitId, referrerType: data.referrerType, botType: data.botType});
  };

  RL.CAPTURE = API;

})(window, window.RL, window.RL.jq);
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
      RL.lib.Events.trigger("Chat_load");
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
			RL.lib.Events.trigger("Video_hide");

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
				RL.lib.Events.trigger("Video_load");
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
			RL.lib.Events.trigger("Video_show");
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

					if (siteConfig.campaign.isPaidCampaign) {
						$REMARKETING.dropPaid();
					} else {
						var eventId = _$RL.lib.Events.subscribe("Capture_visit", function(data) {
							_$RL.lib.Events.unsubscribe(eventId);
							$REMARKETING.dropOrganic();
						});
					}

					// Dispatch drop event.
					RL.lib.Events.trigger("Remarketing_drop");

					return this;
				}
			});
		},

		dropPaid: function() {
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
				$REMARKETING.dropPixels(remarketingPixels);
			}
		},

		dropOrganic: function() {
			var _$RL = $RL,					// $RL alias.
				$ = _$RL.jq,
				campaignData = globalConfig.campaign_data,
				mcid;
	
			try {
				var referrerType = sessionStorage.getItem("referrer_type");
        mcid = (campaignData[referrerType] || {}).master_campaign_id;
      } catch(err) {
      }

      if (!mcid) {
        mcid = (campaignData["OTHER"] || {}).master_campaign_id;
      }

      if (typeof mcid !== 'undefined' && typeof remarketingConfig[mcid] !== 'undefined') {
      	$.each(remarketingConfig[mcid], function(scid, pixels) {
      		$REMARKETING.dropPixels(pixels);
      	});
      }
    },

    dropPixels: function(remarketingPixels) {
    	var _$RL = $RL,					// $RL alias.
				$ = _$RL.jq,				// jQuery alias.
				$rootE = $("#rl-root");		// #rl-root DOM node.

    	if (typeof remarketingPixels["tags"] == "string" && remarketingPixels["tags"] !== "") {
				// pixelId = "rl-pixel-" + pixelId;
				$("<div>").html(remarketingPixels["tags"] ).appendTo($rootE);
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
				RL.lib.Events.trigger("Remarketing_load");
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
    eventId = RL.lib.Events.subscribe("Capture_visit", function(data) {
      RL.lib.Events.unsubscribe(eventId);

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
    eventId = RL.lib.Events.subscribe("Capture_visit", function(data) {
      RL.lib.Events.unsubscribe(eventId);

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
      RL.lib.Events.trigger("Email_hide");

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

      if (!_$RL.lib.areCookieAndWebStorageEnabled()) {
        // Do not replace email links with email form.
        return false;
      }

      _$RL.lib.isOptedOut(function(cookie) {
        // Check for opt-out.
        if (cookie !== false) {
          return;
        }

        $(document).ready(function() {
          // Replace existing email links.
          _$EMAIL.replace();

          // Dispatch load event.
          RL.lib.Events.trigger("Email_load");
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
      RL.lib.Events.trigger("Email_replace");

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
      RL.lib.Events.trigger("Email_show");

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
