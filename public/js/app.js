!function(e){var t={};function n(_){if(t[_])return t[_].exports;var r=t[_]={i:_,l:!1,exports:{}};return e[_].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,_){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(n.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(_,r,function(t){return e[t]}.bind(null,r));return _},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return N})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return _}));var _,r,o,l,u,i={},c=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n){var _,r,o,l=arguments,u={};for(o in t)"key"==o?_=t[o]:"ref"==o?r=t[o]:u[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return d(e,u,_,r,null)}function d(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++_.__v:o};return null!=_.vnode&&_.vnode(l),l}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function b(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!g.__r++||l!==_.debounceRendering)&&((l=_.debounceRendering)||o)(g)}function g(){for(var e;g.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,_,r,o,l;e.__d&&(o=(r=(t=e).__v).__e,(l=t.__P)&&(n=[],(_=a({},r)).__v=r.__v+1,A(l,r,_,t.__n,void 0!==l.ownerSVGElement,null!=r.__h?[o]:null,n,null==o?y(r):o,r.__h),E(n,r),r.__e!=o&&m(r)))}))}function k(e,t,n,_,r,o,l,u,f,a){var p,v,m,b,g,k,O,j=_&&_.__k||c,x=j.length;for(f==i&&(f=null!=l?l[0]:x?y(_,0):null),n.__k=[],p=0;p<t.length;p++)if(null!=(b=n.__k[p]=null==(b=t[p])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?d(null,b,null,null,b):Array.isArray(b)?d(h,{children:b},null,null,null):b.__b>0?d(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=j[p])||m&&b.key==m.key&&b.type===m.type)j[p]=void 0;else for(v=0;v<x;v++){if((m=j[v])&&b.key==m.key&&b.type===m.type){j[v]=void 0;break}m=null}A(e,b,m=m||i,r,o,l,u,f,a),g=b.__e,(v=b.ref)&&m.ref!=v&&(O||(O=[]),m.ref&&O.push(m.ref,null,b),O.push(v,b.__c||g,b)),null!=g?(null==k&&(k=g),"function"==typeof b.type&&null!=b.__k&&b.__k===m.__k?b.__d=f=S(b,f,e):f=w(e,b,m,j,l,g,f),a||"option"!==n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&m.__e==f&&f.parentNode!=e&&(f=y(m))}if(n.__e=k,null!=l&&"function"!=typeof n.type)for(p=l.length;p--;)null!=l[p]&&s(l[p]);for(p=x;p--;)null!=j[p]&&("function"==typeof n.type&&null!=j[p].__e&&j[p].__e==n.__d&&(n.__d=y(_,p+1)),T(j[p],j[p]));if(O)for(p=0;p<O.length;p++)C(O[p],O[++p],O[++p])}function S(e,t,n){var _,r;for(_=0;_<e.__k.length;_++)(r=e.__k[_])&&(r.__=e,t="function"==typeof r.type?S(r,t,n):w(n,r,r,e.__k,null,r.__e,t));return t}function w(e,t,n,_,r,o,l){var u,i,c;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(r==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),u=null;else{for(i=l,c=0;(i=i.nextSibling)&&c<_.length;c+=2)if(i==o)break e;e.insertBefore(o,l),u=l}return void 0!==u?u:o.nextSibling}function O(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||f.test(t)?n:n+"px"}function j(e,t,n,_,r){var o,l,u;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||O(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||O(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(o=t!==(t=t.replace(/Capture$/,"")),(l=t.toLowerCase())in e&&(t=l),t=t.slice(2),e.l||(e.l={}),e.l[t+o]=n,u=o?P:x,n?_||e.addEventListener(t,u,o):e.removeEventListener(t,u,o)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&"contentEditable"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function x(e){this.l[e.type+!1](_.event?_.event(e):e)}function P(e){this.l[e.type+!0](_.event?_.event(e):e)}function A(e,t,n,r,o,l,u,i,c){var f,s,p,d,y,m,b,g,S,w,O,j=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(c=n.__h,i=t.__e=n.__e,t.__h=null,l=[i]),(f=_.__b)&&f(t);try{e:if("function"==typeof j){if(g=t.props,S=(f=j.contextType)&&r[f.__c],w=f?S?S.props.value:f.__:r,n.__c?b=(s=t.__c=n.__c).__=s.__E:("prototype"in j&&j.prototype.render?t.__c=s=new j(g,w):(t.__c=s=new v(g,w),s.constructor=j,s.render=M),S&&S.sub(s),s.props=g,s.state||(s.state={}),s.context=w,s.__n=r,p=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=j.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=a({},s.__s)),a(s.__s,j.getDerivedStateFromProps(g,s.__s))),d=s.props,y=s.state,p)null==j.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==j.getDerivedStateFromProps&&g!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(g,w),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(g,s.__s,w)||t.__v===n.__v){s.props=g,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,s.__h.length&&u.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(g,s.__s,w),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,y,m)}))}s.context=w,s.props=g,s.state=s.__s,(f=_.__r)&&f(t),s.__d=!1,s.__v=t,s.__P=e,f=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(r=a(a({},r),s.getChildContext())),p||null==s.getSnapshotBeforeUpdate||(m=s.getSnapshotBeforeUpdate(d,y)),O=null!=f&&f.type===h&&null==f.key?f.props.children:f,k(e,Array.isArray(O)?O:[O],t,n,r,o,l,u,i,c),s.base=t.__e,t.__h=null,s.__h.length&&u.push(s),b&&(s.__E=s.__=null),s.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=H(n.__e,t,n,r,o,l,u,c);(f=_.diffed)&&f(t)}catch(e){t.__v=null,(c||null!=l)&&(t.__e=i,t.__h=!!c,l[l.indexOf(i)]=null),_.__e(e,t,n)}}function E(e,t){_.__c&&_.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){_.__e(e,t.__v)}}))}function H(e,t,n,_,r,o,l,u){var f,a,s,p,d,h=n.props,v=t.props;if(r="svg"===t.type||r,null!=o)for(f=0;f<o.length;f++)if(null!=(a=o[f])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,o[f]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),o=null,u=!1}if(null===t.type)h===v||u&&e.data===v||(e.data=v);else{if(null!=o&&(o=c.slice.call(e.childNodes)),s=(h=n.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(null!=o)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,_,r){var o;for(o in n)"children"===o||"key"===o||o in t||j(e,o,null,n[o],_);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||j(e,o,t[o],n[o],_)})(e,v,h,r,u),p?t.__k=[]:(f=t.props.children,k(e,Array.isArray(f)?f:[f],t,n,_,"foreignObject"!==t.type&&r,o,l,i,u)),u||("value"in v&&void 0!==(f=v.value)&&(f!==e.value||"progress"===t.type&&!f)&&j(e,"value",f,h.value,!1),"checked"in v&&void 0!==(f=v.checked)&&f!==e.checked&&j(e,"checked",f,h.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){_.__e(e,n)}}function T(e,t,n){var r,o,l;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||C(r,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){_.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&T(r[l],t,n);null!=o&&s(o)}function M(e,t,n){return this.constructor(e,n)}function N(e,t,n){var r,o,l;_.__&&_.__(e,t),o=(r=n===u)?null:n&&n.__k||t.__k,e=p(h,null,[e]),l=[],A(t,(r?t:n||t).__k=e,o||i,i,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:t.childNodes.length?c.slice.call(t.childNodes):null,l,n||i,r),E(l,e)}_={__e:function(e,t){for(var n,_,r,o=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return t.__h=o,n.__E=n}catch(t){e=t}throw e},__v:0},v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=h,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,u=i},function(e,t,n){"use strict";n.r(t);var _,r,o=n(0);r=n(2).default,_=Object(o.c)(Object(o.a)(r,null),document.getElementById("preact-root"),_)},function(e,t,n){"use strict";n.r(t);var _,r,o,l=n(0),u=function(e){var t=e.path,n=e.children;return window.location.pathname===t?n:null},i=0,c=[],f=l.b.__b,a=l.b.__r,s=l.b.diffed,p=l.b.__c,d=l.b.unmount;function h(e,t){l.b.__h&&l.b.__h(r,e,i||t),i=0;var n=r.__H||(r.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function v(e){return i=1,function(e,t,n){var o=h(_++,2);return o.t=e,o.__c||(o.__=[n?n(t):w(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=r),o.__}(w,e)}function y(e,t){var n=h(_++,7);return S(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function m(){c.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(g),e.__H.__h.forEach(k),e.__H.__h=[]}catch(t){e.__H.__h=[],l.b.__e(t,e.__v)}})),c=[]}l.b.__b=function(e){r=null,f&&f(e)},l.b.__r=function(e){a&&a(e),_=0;var t=(r=e.__c).__H;t&&(t.__h.forEach(g),t.__h.forEach(k),t.__h=[])},l.b.diffed=function(e){s&&s(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==c.push(t)&&o===l.b.requestAnimationFrame||((o=l.b.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),b&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);b&&(t=requestAnimationFrame(n))})(m)),r=void 0},l.b.__c=function(e,t){t.some((function(e){try{e.__h.forEach(g),e.__h=e.__h.filter((function(e){return!e.__||k(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],l.b.__e(n,e.__v)}})),p&&p(e,t)},l.b.unmount=function(e){d&&d(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(g)}catch(e){l.b.__e(e,t.__v)}};var b="function"==typeof requestAnimationFrame;function g(e){var t=r;"function"==typeof e.__c&&e.__c(),r=t}function k(e){var t=r;e.__c=e.__(),r=t}function S(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function w(e,t){return"function"==typeof t?t(e):t}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],_=!0,r=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(_=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);_=!0);}catch(e){r=!0,o=e}finally{try{_||null==u.return||u.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,_=new Array(t);n<t;n++)_[n]=e[n];return _}function x(){var e,t=O(v(0),2),n=t[0],_=t[1],r=(e=function(){_(n+1)},i=8,y((function(){return e}),[n]));return Object(l.a)("div",null,"Counter: ",n,Object(l.a)("button",{onClick:r},"Increment"))}function P(){return Object(l.a)("div",null,Object(l.a)("span",null,"Afp Payment"))}t.default=function(){return Object(l.a)("div",null,Object(l.a)(u,{path:"/afp-onboarding"},Object(l.a)(x,null)),Object(l.a)(u,{path:"/afp-payment"},Object(l.a)(P,null)),Object(l.a)(u,{path:"/all-preact-components"},Object(l.a)(x,null)))}}]);
//# sourceMappingURL=app.js.map