(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9618:function(t,e,r){var n={"./ListLayout":1782,"./ListLayout.tsx":1782,"./PostLayout":1523,"./PostLayout.tsx":1523};function a(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=9618},6053:function(t,e,r){"use strict";r.d(e,{TQ:function(){return s},$t:function(){return d},Uy:function(){return u}});var n=r(7320),a=r(9008),i=r(1163),o=r(4067),c=r.n(o),l=function(t){var e=t.title,r=t.description,o=t.ogType,l=t.ogImage,s=(t.twImage,(0,i.useRouter)());return(0,n.BX)(a.default,{children:[(0,n.tZ)("title",{children:e}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(s.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:o}),(0,n.tZ)("meta",{property:"og:site_name",content:c().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:e}),Array.isArray(l)?l.map((function(t){var e=t.url;return(0,n.tZ)("meta",{property:"og:image",content:e},e)})):(0,n.tZ)("meta",{property:"og:image",content:l},l)]})},s=function(t){var e=t.title,r=t.description,a=c().siteUrl+c().socialBanner,i=c().siteUrl+c().socialBanner;return(0,n.tZ)(l,{title:e,description:r,ogType:"website",ogImage:a,twImage:i})},d=function(t){var e=t.title,r=t.description,o=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner,d=(0,i.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:e,description:r,ogType:"website",ogImage:o,twImage:s}),(0,n.tZ)(a.default,{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(t){var e=t.authorDetails,r=t.title,o=t.summary,s=t.date,d=t.lastmod,u=t.url,p=t.images,h=void 0===p?[]:p,m=(0,i.useRouter)(),g=new Date(s).toISOString(),f=new Date(d||s).toISOString(),y=(0===h.length?[c().socialBanner]:"string"===typeof h?[h]:h).map((function(t){return{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(t)}})),x={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:y,datePublished:g,dateModified:f,author:e?e.map((function(t){return{"@type":"Person",name:t.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:o},v=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:r,description:o,ogType:"article",ogImage:y,twImage:v}),(0,n.BX)(a.default,{children:[s&&(0,n.tZ)("meta",{property:"article:published_time",content:g}),d&&(0,n.tZ)("meta",{property:"article:modified_time",content:f}),(0,n.tZ)("link",{rel:"canonical",href:"".concat(c().siteUrl).concat(m.asPath)}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(x,null,2)}})]})]})}},8605:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(7320);function a(t){var e=t.children;return(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:e})}},1838:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(7320),a=r(1664),i=function(t){return t&&t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(t){return t.toLowerCase()})).join("-")},o=function(t){var e=t.text;return(0,n.tZ)(a.default,{href:"/blog/tags/".concat(i(e)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.split(" ").join("-")})})}},1782:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var n=r(7320),a=r(6359),i=r(1838);function o(t){var e=t.totalPages,r=t.currentPage,i=r-1>0,o=r+1<=e;return(0,n.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.BX)("nav",{className:"flex justify-between",children:[!i&&(0,n.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,n.tZ)(a.Z,{href:r-1===1?"/blog/archive/":"/blog/archive/".concat(r-1),children:(0,n.tZ)("button",{children:"Previous"})}),(0,n.BX)("span",{children:[r," of ",e]}),!o&&(0,n.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!o,children:"Next"}),o&&(0,n.tZ)(a.Z,{href:"/blog/archive/".concat(r+1),children:(0,n.tZ)("button",{children:"Next"})})]})})}var c=r(4067),l=r.n(c),s=function(t){return new Date(t).toLocaleDateString(l().locale,{year:"numeric",month:"long",day:"numeric"})};function d(t){var e=t.posts,r=t.title,c=t.initialDisplayPosts,l=void 0===c?[]:c,d=t.pagination,u=l.length>0?l:e;return(0,n.BX)(n.HY,{children:[(0,n.BX)("div",{children:[(0,n.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r})}),(0,n.BX)("ul",{children:[!e.length&&"No posts found.",u.map((function(t){var e=t.slug,r=t.date,o=t.title,c=t.summary,l=t.tags;return(0,n.tZ)("li",{className:"py-2",children:(0,n.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.BX)("dl",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:r,children:s(r)})})]}),(0,n.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.BX)("div",{children:[(0,n.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.tZ)(a.Z,{href:"/blog/".concat(e),className:"text-gray-900 dark:text-gray-100",children:o})}),(0,n.tZ)("div",{className:"flex flex-wrap",children:l.map((function(t){return(0,n.tZ)(i.Z,{text:t},t)}))})]}),(0,n.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:c})]})]})},e)}))]})]}),d&&d.totalPages>1&&(0,n.tZ)(o,{currentPage:d.currentPage,totalPages:d.totalPages})]})}},1523:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(7320),a=r(4942),i=r(6359),o=r(8605),c=r(6053),l=r(1838),s=r(4067),d=r.n(s);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={weekday:"long",year:"numeric",month:"long",day:"numeric"};function m(t){var e=t.frontMatter,r=t.authorDetails,a=t.next,s=t.prev,u=t.children,m=e.slug,g=(e.fileName,e.date),f=e.title,y=e.tags;return(0,n.BX)("div",{className:"",children:[(0,n.tZ)(c.Uy,p({url:"".concat(d().siteUrl,"/blog/").concat(m),authorDetails:r},e)),(0,n.tZ)("article",{children:(0,n.BX)("div",{children:[(0,n.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,n.tZ)("div",{className:"space-y-1 text-center",children:(0,n.tZ)(o.Z,{children:f})})}),(0,n.BX)("div",{className:"pt-10 pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,n.tZ)("div",{className:"text-xl prose dark:prose-dark max-w-none",children:u})}),(0,n.BX)("div",{className:"text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2",children:[(0,n.tZ)("dl",{className:"py-4 space-y-10",children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-s font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:g,children:new Date(g).toLocaleDateString(d().locale,h)})})]})}),y&&(0,n.BX)("div",{className:"py-4",children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,n.tZ)("div",{className:"flex flex-wrap",children:y.map((function(t){return(0,n.tZ)(l.Z,{text:t},t)}))})]}),(a||s)&&(0,n.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8",children:[s&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Previous Article"}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.tZ)(i.Z,{href:"/blog/".concat(s.slug),children:s.title})})]}),a&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Next Article"}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.tZ)(i.Z,{href:"/blog/".concat(a.slug),children:a.title})})]})]}),(0,n.tZ)("div",{className:"py-4",children:(0,n.tZ)(i.Z,{href:"/blog/archive",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Back to the archive"})})]})]})]})})]})}},1427:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return y},default:function(){return x}});var n=r(7320),a=r(8605),i=r(4942),o=r(5701),c=r(9748),l=r(3194),s=r(8744),d=r(6359),u=function(t){var e=t.toc,r=t.indentDepth,a=void 0===r?3:r,i=t.fromHeading,o=void 0===i?1:i,c=t.toHeading,l=void 0===c?6:c,s=t.asDisclosure,d=void 0!==s&&s,u=t.exclude,p=void 0===u?"":u,h=Array.isArray(p)?new RegExp("^("+p.join("|")+")$","i"):new RegExp("^("+p+")$","i"),m=e.filter((function(t){return t.depth>=o&&t.depth<=l&&!h.test(t.value)})),g=(0,n.tZ)("ul",{children:m.map((function(t){return(0,n.tZ)("li",{className:"".concat(t.depth>=a&&"ml-6"),children:(0,n.tZ)("a",{href:t.url,children:t.value})},t.value)}))});return(0,n.tZ)(n.HY,{children:d?(0,n.BX)("details",{open:!0,children:[(0,n.tZ)("summary",{className:"pt-2 pb-2 ml-6 text-xl font-bold",children:"Table of Contents"}),(0,n.tZ)("div",{className:"ml-6",children:g})]}):g})},p=function(t){var e=t.children,r=(0,c.useRef)(null),a=(0,c.useState)(!1),i=a[0],o=a[1],l=(0,c.useState)(!1),s=l[0],d=l[1];return(0,n.BX)("div",{ref:r,onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1),d(!1)},className:"relative",children:[i&&(0,n.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ".concat(s?"focus:outline-none focus:border-green-400 border-green-400":"border-gray-300"),onClick:function(){d(!0),navigator.clipboard.writeText(r.current.innerText),setTimeout((function(){d(!1)}),2e3)},children:(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:s?"text-green-400":"text-gray-300",children:s?(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.tZ)("pre",{children:e})]})};function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g={Image:s.Z,TOCInline:u,a:d.Z,pre:p,wrapper:function(t){var e=t.layout,a=(0,o.Z)(t,["layout"]),i=r(9618)("./".concat(e)).default;return(0,n.tZ)(i,m({},a))}},f=function(t){var e=t.layout,r=t.mdxSource,a=(0,o.Z)(t,["layout","mdxSource"]),i=(0,c.useMemo)((function(){return(0,l.getMDXComponent)(r)}),[r]);return(0,n.tZ)(i,m({layout:e,components:g},a))},y=!0;function x(t){var e=t.post,r=t.authorDetails,i=t.prev,o=t.next,c=e.mdxSource,l=e.toc,s=e.frontMatter;return(0,n.tZ)(n.HY,{children:"draft"in s&&!0!==s.draft?(0,n.tZ)(f,{layout:s.layout||"PostLayout",toc:l,mdxSource:c,frontMatter:s,authorDetails:r,prev:i,next:o}):(0,n.tZ)("div",{className:"mt-24 text-center",children:(0,n.BX)(a.Z,{children:["Under Construction"," ",(0,n.tZ)("span",{role:"img","aria-label":"roadwork sign",children:"\ud83d\udea7"})]})})})}},3214:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return r(1427)}])},1032:function(t,e,r){t.exports=r(6584)},3194:function(t,e,r){t.exports=r(8773)},8773:function(t,e,r){"use strict";e.getMDXComponent=function(t,e){const r={React:n,ReactDOM:i,_jsx_runtime:a,...e};return new Function(...Object.keys(r),t)(...Object.values(r))};var n=c(r(9748)),a=c(r(1032)),i=c(r(9748));function o(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(o=function(t){return t?r:e})(t)}function c(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var r=o(e);if(r&&r.has(t))return r.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var c=a?Object.getOwnPropertyDescriptor(t,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=t[i]}return n.default=t,r&&r.set(t,n),n}}},function(t){t.O(0,[888,179],(function(){return e=3214,t(t.s=e);var e}));var e=t.O();_N_E=e}]);