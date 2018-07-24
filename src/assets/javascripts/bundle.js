!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),n.d(t,"h",function(){return l}),n.d(t,"createElement",function(){return l}),n.d(t,"cloneElement",function(){return s}),n.d(t,"Component",function(){return U}),n.d(t,"render",function(){return B}),n.d(t,"rerender",function(){return d}),n.d(t,"options",function(){return r});var r={},o=[],a=[];function l(e,t){var n,l,i,u,s=a;for(u=arguments.length;u-- >2;)o.push(arguments[u]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((l=o.pop())&&void 0!==l.pop)for(u=l.length;u--;)o.push(l[u]);else"boolean"==typeof l&&(l=null),(i="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(i=!1)),i&&n?s[s.length-1]+=l:s===a?s=[l]:s.push(l),n=i;var c=new function(){};return c.nodeName=e,c.children=s,c.attributes=null==t?void 0:t,c.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(c),c}function i(e,t){for(var n in t)e[n]=t[n];return e}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function s(e,t){return l(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var c=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=[];function p(e){!e._dirty&&(e._dirty=!0)&&1==f.push(e)&&(r.debounceRendering||u)(d)}function d(){var e,t=f;for(f=[];e=t.pop();)e._dirty&&E(e)}function h(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&v(e,t.nodeName):n||e._componentConstructor===t.nodeName}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function m(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===c.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,b,l):e.removeEventListener(t,b,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var i=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(i?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function b(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var g=[],C=0,x=!1,w=!1;function k(){for(var e;e=g.pop();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function N(e,t,n,r,o,a){C++||(x=null!=o&&void 0!==o.ownerSVGElement,w=null!=e&&!("__preactattr_"in e));var l=O(e,t,n,r,a);return o&&l.parentNode!==o&&o.appendChild(l),--C||(w=!1,a||k()),l}function O(e,t,n,r,o){var a=e,l=x;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),P(e,!0))),a.__preactattr_=!0,a;var i=t.nodeName;if("function"==typeof i)return function(e,t,n,r){var o=e&&e._component,a=o,l=e,i=o&&e._componentConstructor===t.nodeName,u=i,s=m(t);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;o&&u&&(!r||o._component)?(T(o,s,3,n,r),e=o.base):(a&&!i&&(I(a),e=l=null),o=L(t.nodeName,s,n),e&&!o.nextBase&&(o.nextBase=e,l=null),T(o,s,1,n,r),e=o.base,l&&e!==l&&(l._component=null,P(l,!1)));return e}(e,t,n,r);if(x="svg"===i||"foreignObject"!==i&&x,i=String(i),(!e||!v(e,i))&&(a=function(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}(i,x),e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),P(e,!0)}var u=a.firstChild,s=a.__preactattr_,c=t.children;if(null==s){s=a.__preactattr_={};for(var f=a.attributes,p=f.length;p--;)s[f[p].name]=f[p].value}return!w&&c&&1===c.length&&"string"==typeof c[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=c[0]&&(u.nodeValue=c[0]):(c&&c.length||null!=u)&&function(e,t,n,r,o){var a,l,i,u,s,c=e.childNodes,f=[],p={},d=0,v=0,m=c.length,y=0,b=t?t.length:0;if(0!==m)for(var g=0;g<m;g++){var C=c[g],x=C.__preactattr_,w=b&&x?C._component?C._component.__key:x.key:null;null!=w?(d++,p[w]=C):(x||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(f[y++]=C)}if(0!==b)for(var g=0;g<b;g++){u=t[g],s=null;var w=u.key;if(null!=w)d&&void 0!==p[w]&&(s=p[w],p[w]=void 0,d--);else if(!s&&v<y)for(a=v;a<y;a++)if(void 0!==f[a]&&h(l=f[a],u,o)){s=l,f[a]=void 0,a===y-1&&y--,a===v&&v++;break}s=O(s,u,n,r),i=c[g],s&&s!==e&&s!==i&&(null==i?e.appendChild(s):s===i.nextSibling?_(i):e.insertBefore(s,i))}if(d)for(var g in p)void 0!==p[g]&&P(p[g],!1);for(;v<=y;)void 0!==(s=f[y--])&&P(s,!1)}(a,c,n,r,w||null!=s.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||y(e,r,n[r],n[r]=void 0,x);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||y(e,r,n[r],n[r]=t[r],x)}(a,t.attributes,s),x=l,a}function P(e,t){var n=e._component;n?I(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||_(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;P(e,!0),e=t}}var j={};function L(e,t,n){var r,o=j[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),U.call(r,t,n)):((r=new U(t,n)).constructor=e,r.render=M),o)for(var a=o.length;a--;)if(o[a].constructor===e){r.nextBase=o[a].nextBase,o.splice(a,1);break}return r}function M(e,t,n){return this.constructor(e,n)}function T(e,t,n,o,a){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?p(e):E(e,1,a)),e.__ref&&e.__ref(e))}function E(e,t,n,o){if(!e._disable){var a,l,u,s=e.props,c=e.state,f=e.context,p=e.prevProps||s,d=e.prevState||c,h=e.prevContext||f,v=e.base,_=e.nextBase,y=v||_,b=e._component,x=!1;if(v&&(e.props=p,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,f)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,f),e.props=s,e.state=c,e.context=f),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){a=e.render(s,c,f),e.getChildContext&&(f=i(i({},f),e.getChildContext()));var w,O,S=a&&a.nodeName;if("function"==typeof S){var j=m(a);(l=b)&&l.constructor===S&&j.key==l.__key?T(l,j,1,f,!1):(w=l,e._component=l=L(S,j,f),l.nextBase=l.nextBase||_,l._parentComponent=e,T(l,j,0,f,!1),E(l,1,n,!0)),O=l.base}else u=y,(w=b)&&(u=e._component=null),(y||1===t)&&(u&&(u._component=null),O=N(u,a,f,n||!v,y&&y.parentNode,!0));if(y&&O!==y&&l!==b){var M=y.parentNode;M&&O!==M&&(M.replaceChild(O,y),w||(y._component=null,P(y,!1)))}if(w&&I(w),e.base=O,O&&!o){for(var U=e,B=e;B=B._parentComponent;)(U=B).base=O;O._component=U,O._componentConstructor=U.constructor}}if(!v||n?g.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(p,d,h),r.afterUpdate&&r.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||o||k()}}function I(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?I(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,_(t),function(e){var t=e.constructor.name;(j[t]||(j[t]=[])).push(e)}(e),S(t)),e.__ref&&e.__ref(null)}function U(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function B(e,t,n){return N(n,e,{},!1,t,!1)}i(U.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),p(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),E(this,2)},render:function(){}});var W={h:l,createElement:l,cloneElement:s,Component:U,render:B,rerender:d,options:r};t.default=W},function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n(2));(0,r.render)((0,r.h)(o.default,null),document.getElementById("preact"))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n(3));var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n.defaults(),n.handleChange=n.handleChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"defaults",value:function(){return{fe:1e4,m:122e3,cc:5e3,al:2e3,o:0,msi:1e3,lpli:12e4}}},{key:"handleChange",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,parseInt(e.target.value)||0))}},{key:"totalSurvivorIncome",value:function(){return 12*this.state.msi*20}},{key:"totalLifeInsurance",value:function(){return this.state.fe+this.state.m+this.state.cc+this.state.al+this.state.o+this.totalSurvivorIncome()}},{key:"newLifeInsurance",value:function(){return this.totalLifeInsurance()-this.state.lpli}},{key:"render",value:function(){return(0,o.h)("table",{style:"border-collapse:collapse;"},(0,o.h)("tbody",null,(0,o.h)("tr",null,(0,o.h)(a.default,{name:"Funeral Expense",val:this.state.fe,id_key:"fe",handleChange:this.handleChange})),(0,o.h)("tr",null,(0,o.h)("td",null,"Debts you want paid off")),(0,o.h)("tr",null,(0,o.h)(a.default,{mindent:!0,name:"Mortgage",val:this.state.m,id_key:"m",handleChange:this.handleChange})),(0,o.h)("tr",null,(0,o.h)(a.default,{mindent:!0,name:"Credit Cards",val:this.state.cc,id_key:"cc",handleChange:this.handleChange})),(0,o.h)("tr",null,(0,o.h)(a.default,{mindent:!0,name:"Auto Loans",val:this.state.al,id_key:"al",handleChange:this.handleChange})),(0,o.h)("tr",null,(0,o.h)(a.default,{mindent:!0,name:"Other",val:this.state.o,id_key:"o",handleChange:this.handleChange})),(0,o.h)("tr",null,(0,o.h)(a.default,{name:"Monthly Survivor Income",val:this.state.msi,id_key:"msi",handleChange:this.handleChange}),(0,o.h)("td",null,this.totalSurvivorIncome())),(0,o.h)("tr",null,(0,o.h)("td",null,"Total Life Insurance Needed"),(0,o.h)("td",null,this.totalLifeInsurance())),(0,o.h)("tr",null,(0,o.h)(a.default,{name:"Less Present Life Insurance",val:this.state.lpli,id_key:"lpli",handleChange:this.handleChange})),(0,o.h)("tr",null,(0,o.h)(a.default,{name:"Less Present Life Insurance",val:this.state.lpli,id_key:"lpli",handleChange:this.handleChange})),(0,o.h)("tr",null,(0,o.h)("td",null,"New Life Insurance Needed"),(0,o.h)("td",null,this.newLifeInsurance()))))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:""},n.handleChange=n.handleChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"handleChange",value:function(e){this.props.handleChange(e,this.props.id_key)}},{key:"render",value:function(){var e=this.props.mindent?"margin-left: 30px;":"";return(0,o.h)("td",{style:"text-align: right;"},(0,o.h)("span",null,(0,o.h)("label",{style:"float: left;"+e},this.props.name,":")),(0,o.h)("span",null,(0,o.h)("input",{type:"text",style:"text-align: right; border: none; background-color: yellow; margin-left: 30px",value:this.props.val,onChange:this.handleChange})))}}]),t}();t.default=a}]);