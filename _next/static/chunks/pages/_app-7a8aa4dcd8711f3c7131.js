(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4067:function(e){e.exports={title:"Derive Alpha",author:"Abid Omar",headerTitle:"Derive Alpha",description:"Derivatives Calculator",language:"en-us",siteUrl:"https://derivealpha.com",siteRepo:"",siteLogo:"/static/images/logo.svg",image:"/static/images/avatar.png",email:"contact@derivealpha.com",github:"https://github.com/derivealpha",locale:"en-US",analytics:{googleAnalyticsId:"UA-32638959-1"}}},9917:function(e,t,n){"use strict";var r=n(3038),i=n(319);t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,l=void 0!==i&&i,d=e.priority,u=void 0!==d&&d,h=e.loading,g=e.lazyBoundary,v=void 0===g?"200px":g,b=e.className,y=e.quality,w=e.width,x=e.height,N=e.objectFit,S=e.objectPosition,Z=e.onLoadingComplete,_=e.loader,E=void 0===_?j:_,P=e.placeholder,A=void 0===P?"empty":P,L=e.blurDataURL,z=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),B=n?"responsive":"intrinsic";"layout"in z&&(z.layout&&(B=z.layout),delete z.layout);var D="";if(function(e){return"object"===typeof e&&(p(e)||function(e){return void 0!==e.src}(e))}(t)){var I=p(t)?t.default:t;if(!I.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(I)));if(L=L||I.blurDataURL,D=I.src,(!B||"fill"!==B)&&(x=x||I.height,w=w||I.width,!I.height||!I.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(I)))}t="string"===typeof t?t:D;var C=k(w),T=k(x),X=k(y),M=!u&&("lazy"===h||"undefined"===typeof h);t.startsWith("data:")&&(l=!0,M=!1);m.has(t)&&(M=!1);0;var R,$,H,q=s.useIntersection({rootMargin:v,disabled:!M}),U=r(q,2),W=U[0],K=U[1],Y=!M||K,V={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:S},F="blur"===A?{filter:"blur(20px)",backgroundSize:N||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:S||"0% 0%"}:{};if("fill"===B)R={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof C&&"undefined"!==typeof T){var J=T/C,G=isNaN(J)?"100%":"".concat(100*J,"%");"responsive"===B?(R={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},$={display:"block",boxSizing:"border-box",paddingTop:G}):"intrinsic"===B?(R={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},$={boxSizing:"border-box",display:"block",maxWidth:"100%"},H='<svg width="'.concat(C,'" height="').concat(T,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===B&&(R={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:C,height:T})}else 0;var Q={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};Y&&(Q=O({src:t,unoptimized:l,layout:B,width:C,quality:X,sizes:n,loader:E}));var ee=t;return a.default.createElement("div",{style:R},$?a.default.createElement("div",{style:$},H?a.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(H))}):null):null,!Y&&a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},z,O({src:t,unoptimized:l,layout:B,width:C,quality:X,sizes:n,loader:E}),{decoding:"async","data-nimg":!0,style:V,className:b}))),a.default.createElement("img",Object.assign({},z,Q,{decoding:"async","data-nimg":!0,className:b,ref:function(e){W(e),function(e,t,n,r){if(!e)return;var i=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),r){var i=e.naturalWidth,a=e.naturalHeight;r({naturalWidth:i,naturalHeight:a})}}))};e.complete?i():e.onload=i}(e,ee,A,Z)},style:f({},V,F)})),u?a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imagesrcset:Q.srcSet,imagesizes:Q.sizes})):null)};var a=u(n(9748)),o=u(n(639)),c=n(8997),l=n(5809),s=n(7426);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}var m=new Set;var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t).concat(N(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(N(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(N(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(e){return void 0!==e.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||l.imageConfigDefault,v=g.deviceSizes,b=g.imageSizes,y=g.loader,w=g.path,x=(g.domains,[].concat(i(v),i(b)));function O(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,o=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,o=[];r=a.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c=.01*Math.min.apply(Math,o);return{widths:x.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(a,r,c),d=s.widths,u=s.kind,f=d.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:d.map((function(e,n){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:l({src:t,quality:o,width:d[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t=h.get(y);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(y))}function N(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var i,a=(i=n(9748))&&i.__esModule?i:{default:i},o=n(1063),c=n(4651),l=n(7426);var s={};function d(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,i=c.useRouter(),u=a.default.useMemo((function(){var t=o.resolveHref(i,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?o.resolveHref(i,e.as):c||a}}),[i,e.href,e.as]),f=u.href,m=u.as,h=e.children,p=e.replace,g=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var y=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),x=r(w,2),O=x[0],k=x[1],j=a.default.useCallback((function(e){O(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,O]);a.default.useEffect((function(){var e=k&&n&&o.isLocalURL(f),t="undefined"!==typeof b?b:i&&i.locale,r=s[f+"%"+m+(t?"%"+t:"")];e&&!r&&d(i,f,m,{locale:t})}),[m,f,k,b,n,i]);var N={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[i?"replace":"push"](n,r,{shallow:a,locale:l,scroll:c}))}(e,i,f,m,p,g,v,b)},onMouseEnter:function(e){o.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(i,f,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof b?b:i&&i.locale,Z=i&&i.isLocaleDomain&&o.getDomainLocale(m,S,i&&i.locales,i&&i.domainLocales);N.href=Z||o.addBasePath(o.addLocale(m,S,i&&i.defaultLocale))}return a.default.cloneElement(t,N)};t.default=u},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=i.useRef(),s=i.useState(!1),d=r(s,2),u=d[0],f=d[1],m=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!o&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[m,u]};var i=n(9748),a=n(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},56:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return T}});var i=n(5914),a=n(9008),o=n(9748);const c=(0,o.createContext)({setTheme:e=>{},themes:[]}),l=["light","dark"],s="(prefers-color-scheme: dark)",d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:a=["light","dark"],defaultTheme:d=(n?"system":"light"),attribute:p="data-theme",value:g,children:v})=>{const[b,y]=(0,o.useState)((()=>f(i,d))),[w,x]=(0,o.useState)((()=>f(i))),O=g?Object.values(g):a,k=(0,o.useCallback)((t=>{const n=h(t);x(n),"system"!==b||e||N(n,!1)}),[b,e]),j=(0,o.useRef)(k);j.current=k;const N=(0,o.useCallback)(((e,r=!0,a=!0)=>{let o=(null==g?void 0:g[e])||e;const c=t&&a?m():null;if(r)try{localStorage.setItem(i,e)}catch(e){}if("system"===e&&n){const e=h();o=(null==g?void 0:g[e])||e}if(a){const e=document.documentElement;"class"===p?(e.classList.remove(...O),e.classList.add(o)):e.setAttribute(p,o),null==c||c()}}),[]);(0,o.useEffect)((()=>{const e=function(){return j.current(...[].slice.call(arguments))},t=window.matchMedia(s);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const S=(0,o.useCallback)((t=>{e?N(t,!0,!1):N(t),y(t)}),[e]);return(0,o.useEffect)((()=>{const e=e=>{e.key===i&&S(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[S]),(0,o.useEffect)((()=>{if(!r)return;let t=e&&l.includes(e)?e:b&&l.includes(b)?b:"system"===b&&w||null;document.documentElement.style.setProperty("color-scheme",t)}),[r,b,w,e]),o.default.createElement(c.Provider,{value:{theme:b,setTheme:S,forcedTheme:e,resolvedTheme:"system"===b?w:b,themes:n?[...a,"system"]:a,systemTheme:n?w:void 0}},o.default.createElement(u,{forcedTheme:e,storageKey:i,attribute:p,value:g,enableSystem:n,defaultTheme:d,attrs:O}),v)},u=(0,o.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,defaultTheme:i,value:c,attrs:l})=>{const d="class"===n?`var d=document.documentElement.classList;d.remove(${l.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",u=(e,t)=>{e=(null==c?void 0:c[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},f="system"===i;return o.default.createElement(a.default,null,o.default.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${d}${u(e)}}()`}}:r?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${d}var e=localStorage.getItem('${t}');${f?"":u(i)+";"}if("system"===e||(!e&&${f})){var t="${s}",m=window.matchMedia(t);m.media!==t||m.matches?${u("dark")}:${u("light")}}else if(e) ${c?`var x=${JSON.stringify(c)};`:""}${u(c?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${d}var e=localStorage.getItem("${t}");if(e){${c?`var x=${JSON.stringify(c)};`:""}${u(c?"x[e]":"e",!0)}}else{${u(i)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),f=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},m=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},h=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light");var p=n(4067),g=n.n(p),v=n(4298),b=function(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(v.default,{id:"ga-script",strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(g().analytics.googleAnalyticsId)}),(0,i.tZ)(v.default,{id:"gat-script",strategy:"lazyOnload",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(g().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})},y=function(){return(0,i.tZ)(i.HY,{children:g().analytics.googleAnalyticsId&&(0,i.tZ)(b,{})})};function w(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var x=n(1664);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.href,n=w(e,["href"]),r=t&&t.startsWith("/"),a=t&&t.startsWith("#");return r?(0,i.tZ)(x.default,{href:t,children:(0,i.tZ)("a",k({},n))}):a?(0,i.tZ)("a",k({href:t},n)):(0,i.tZ)("a",k({target:"_blank",rel:"noopener noreferrer",href:t},n))};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=n(5675);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var _=function(e){var t=e.src;e.width,e.quality;return t},E=function(e){var t=N({},e);return(0,i.tZ)(S.default,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({unoptimized:!0,loader:_},t))};function P(e){return e.dark?(0,i.BX)(j,{className:"select-none",href:"/",children:[(0,i.tZ)("div",{className:"inline-block align-middle",children:(0,i.tZ)(E,{src:"/images/logo.svg",alt:"logo",width:"55px",height:"55px"})}),(0,i.BX)("div",{className:"inline-block align-middle",children:[(0,i.tZ)("span",{className:"select-none font-graphik tracking-normal leading-none font-normal text-2xl text-base text-black uppercase block",children:"derive"}),(0,i.tZ)("span",{className:"select-none font-graphik tracking-wider leading-none font-normal text-2xl text-base text-black uppercase block",children:"alpha"})]})]}):(0,i.BX)(j,{className:"select-none",href:"/",children:[(0,i.tZ)("div",{className:"inline-block align-middle",children:(0,i.tZ)(E,{src:"/images/logo-white.svg",alt:"logo",width:"55px",height:"55px"})}),(0,i.BX)("div",{className:"inline-block align-middle",children:[(0,i.tZ)("span",{className:"font-graphik tracking-normal leading-none font-normal text-2xl text-base text-white uppercase block",children:"derive"}),(0,i.tZ)("span",{className:"font-graphik tracking-wider leading-none font-normal text-2xl text-base text-white uppercase block",children:"alpha"})]})]})}function A(){return(0,i.BX)("footer",{className:"bg-navbar-black","aria-labelledby":"footer-heading",children:[(0,i.tZ)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,i.BX)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8",children:[(0,i.tZ)("div",{className:"md:flex md:items-center md:justify-between",children:(0,i.tZ)(P,{})}),(0,i.BX)("div",{className:"border-t border-gray-200 mt-4 pt-4 md:flex md:items-center md:justify-between",children:[(0,i.tZ)("p",{className:"text-sm text-white md:mt-0 md:order-1",children:"\xa9 2020 Derive Alpha. All rights reserved."}),(0,i.BX)("p",{className:"mt-8 text-sm text-white md:mt-0 md:order-2",children:["Designed & developed by"," ",(0,i.tZ)(j,{className:"border-b pb-1",href:"https://aderbal.com",children:"Aderbal"})]})]})]})]})}function L(){return(0,i.BX)("div",{className:"menu-toggle",children:[(0,i.tZ)("input",{type:"checkbox",id:"css-toggle"}),(0,i.BX)("div",{className:"bars toggle-open select-none",children:[(0,i.tZ)("div",{className:"bar"}),(0,i.tZ)("div",{className:"bar"})]}),(0,i.tZ)("span",{className:"toggle-open select-none",children:"menu"}),(0,i.BX)("div",{className:"bars toggle-close select-none",children:[(0,i.tZ)("div",{className:"bar"}),(0,i.tZ)("div",{className:"bar"})]}),(0,i.tZ)("span",{className:"toggle-close select-none",children:"close"}),(0,i.tZ)("div",{className:"submenu-toggle",children:(0,i.BX)("nav",{id:"full-dropdown",className:"submenu collapse",children:[(0,i.tZ)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8",children:(0,i.tZ)(P,{})}),(0,i.BX)("div",{className:"header-menu flex justify-end max-w-7xl mx-auto",children:[(0,i.BX)("div",{className:"menu-item",children:[(0,i.tZ)("span",{className:"font-graphik",children:"Tools"}),(0,i.BX)("ul",{className:"sub-menu",children:[(0,i.tZ)("li",{className:"menu-item",children:(0,i.tZ)(j,{href:"/strategy-builder",children:"Strategy Builder"})}),(0,i.tZ)("li",{className:"menu-item",children:(0,i.tZ)(j,{href:"/options-value",children:"Options Value"})})]})]}),(0,i.BX)("div",{className:"menu-item",children:[(0,i.tZ)("span",{children:"Learn"}),(0,i.BX)("ul",{className:"sub-menu",children:[(0,i.tZ)("li",{className:"menu-item",children:(0,i.tZ)(j,{href:"/blog",children:"Blog"})}),(0,i.tZ)("li",{className:"menu-item",children:(0,i.tZ)(j,{href:"/newsletter",children:"Newsletter"})})]})]}),(0,i.BX)("div",{className:"menu-item",children:[(0,i.tZ)("span",{children:"About"}),(0,i.BX)("ul",{className:"sub-menu",children:[(0,i.tZ)("li",{className:"menu-item",children:(0,i.tZ)(j,{href:"/about",children:"About"})}),(0,i.tZ)("li",{className:"menu-item",children:(0,i.tZ)(j,{href:"/terms-of-service",children:"Terms of Service"})}),(0,i.tZ)("li",{className:"menu-item",children:(0,i.tZ)(j,{href:"/privacy-policy",children:"Privacy Policy"})})]})]})]})]})})]})}function z(){return(0,i.BX)("header",{className:"bg-navbar-gray","aria-labelledby":"footer-heading",children:[(0,i.tZ)("h2",{id:"header-heading",className:"sr-only",children:"Header"}),(0,i.tZ)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8",children:(0,i.BX)("div",{className:"md:flex md:items-center md:justify-between",children:[(0,i.tZ)("div",{className:"",children:(0,i.tZ)(P,{dark:!0})}),(0,i.tZ)("div",{className:"",children:(0,i.tZ)(L,{})})]})})]})}var B=function(e){var t=e.children;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(z,{}),t,(0,i.tZ)(A,{})]})},D=n(1163);n(9495);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=e.Component,n=e.pageProps;return(0,D.useRouter)(),(0,i.BX)(d,{attribute:"class",children:[(0,i.BX)(a.default,{children:[(0,i.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),(0,i.tZ)("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"})]}),(0,i.tZ)(y,{}),(0,i.tZ)(B,{children:(0,i.tZ)(t,C({},n))})]})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(56)}])},9495:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4298:function(e,t,n){e.exports=n(7926)},5914:function(e,t,n){"use strict";n.d(t,{HY:function(){return r.HY},tZ:function(){return a},BX:function(){return a}});var r=n(6400),i=0;function a(e,t,n,a,o){var c,l,s={};for(l in t)"ref"==l?c=t[l]:s[l]=t[l];var d={type:e,props:s,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--i,__source:a,__self:o};if("function"==typeof e&&(c=e.defaultProps))for(l in c)void 0===s[l]&&(s[l]=c[l]);return r.YM.vnode&&r.YM.vnode(d),d}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);