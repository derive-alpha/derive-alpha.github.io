(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{6053:function(t,e,n){"use strict";n.d(e,{TQ:function(){return s},$t:function(){return u},Uy:function(){return d}});var r=n(7320),a=n(9008),i=n(1163),c=n(4067),o=n.n(c),l=function(t){var e=t.title,n=t.description,c=t.ogType,l=t.ogImage,s=(t.twImage,(0,i.useRouter)());return(0,r.BX)(a.default,{children:[(0,r.tZ)("title",{children:e}),(0,r.tZ)("meta",{name:"robots",content:"follow, index"}),(0,r.tZ)("meta",{name:"description",content:n}),(0,r.tZ)("meta",{property:"og:url",content:"".concat(o().siteUrl).concat(s.asPath)}),(0,r.tZ)("meta",{property:"og:type",content:c}),(0,r.tZ)("meta",{property:"og:site_name",content:o().title}),(0,r.tZ)("meta",{property:"og:description",content:n}),(0,r.tZ)("meta",{property:"og:title",content:e}),Array.isArray(l)?l.map((function(t){var e=t.url;return(0,r.tZ)("meta",{property:"og:image",content:e},e)})):(0,r.tZ)("meta",{property:"og:image",content:l},l)]})},s=function(t){var e=t.title,n=t.description,a=o().siteUrl+o().socialBanner,i=o().siteUrl+o().socialBanner;return(0,r.tZ)(l,{title:e,description:n,ogType:"website",ogImage:a,twImage:i})},u=function(t){var e=t.title,n=t.description,c=o().siteUrl+o().socialBanner,s=o().siteUrl+o().socialBanner,u=(0,i.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l,{title:e,description:n,ogType:"website",ogImage:c,twImage:s}),(0,r.tZ)(a.default,{children:(0,r.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(n," - RSS feed"),href:"".concat(o().siteUrl).concat(u.asPath,"/feed.xml")})})]})},d=function(t){var e=t.authorDetails,n=t.title,c=t.summary,s=t.date,u=t.lastmod,d=t.url,p=t.images,m=void 0===p?[]:p,g=(0,i.useRouter)(),h=new Date(s).toISOString(),f=new Date(u||s).toISOString(),y=(0===m.length?[o().socialBanner]:"string"===typeof m?[m]:m).map((function(t){return{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(t)}})),Z={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":d},headline:n,image:y,datePublished:h,dateModified:f,author:e?e.map((function(t){return{"@type":"Person",name:t.name}})):{"@type":"Person",name:o().author},publisher:{"@type":"Organization",name:o().author,logo:{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(o().siteLogo)}},description:c},x=y[0].url;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l,{title:n,description:c,ogType:"article",ogImage:y,twImage:x}),(0,r.BX)(a.default,{children:[s&&(0,r.tZ)("meta",{property:"article:published_time",content:h}),u&&(0,r.tZ)("meta",{property:"article:modified_time",content:f}),(0,r.tZ)("link",{rel:"canonical",href:"".concat(o().siteUrl).concat(g.asPath)}),(0,r.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Z,null,2)}})]})]})}},4405:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(7320);function a(t){var e=t.children;return(0,r.tZ)("div",{className:"max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",children:e})}},1838:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(7320),a=n(1664),i=function(t){return t&&t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(t){return t.toLowerCase()})).join("-")},c=function(t){var e=t.text;return(0,r.tZ)(a.default,{href:"/blog/tags/".concat(i(e)),children:(0,r.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.split(" ").join("-")})})}},1782:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(7320),a=n(6359),i=n(1838);function c(t){var e=t.totalPages,n=t.currentPage,i=n-1>0,c=n+1<=e;return(0,r.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,r.BX)("nav",{className:"flex justify-between",children:[!i&&(0,r.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,r.tZ)(a.Z,{href:n-1===1?"/blog/archive/":"/blog/archive/".concat(n-1),children:(0,r.tZ)("button",{children:"Previous"})}),(0,r.BX)("span",{children:[n," of ",e]}),!c&&(0,r.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!c,children:"Next"}),c&&(0,r.tZ)(a.Z,{href:"/blog/archive/".concat(n+1),children:(0,r.tZ)("button",{children:"Next"})})]})})}var o=n(4067),l=n.n(o),s=function(t){return new Date(t).toLocaleDateString(l().locale,{year:"numeric",month:"long",day:"numeric"})},u=n(4405);function d(t){var e=t.posts,n=t.title,o=t.initialDisplayPosts,l=void 0===o?[]:o,d=t.pagination,p=l.length>0?l:e;return(0,r.BX)(u.Z,{children:[(0,r.BX)("div",{className:"divide-y",children:[(0,r.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,r.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:n})}),(0,r.BX)("ul",{children:[!e.length&&"No posts found.",p.map((function(t){var e=t.slug,n=t.date,c=t.title,o=t.summary,l=t.tags;return(0,r.tZ)("li",{className:"py-4",children:(0,r.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,r.BX)("dl",{children:[(0,r.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,r.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,r.tZ)("time",{dateTime:n,children:s(n)})})]}),(0,r.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,r.BX)("div",{children:[(0,r.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,r.tZ)(a.Z,{href:"/blog/".concat(e),className:"text-gray-900 dark:text-gray-100",children:c})}),(0,r.tZ)("div",{className:"flex flex-wrap",children:l.map((function(t){return(0,r.tZ)(i.Z,{text:t},t)}))})]}),(0,r.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:o})]})]})},e)}))]})]}),d&&d.totalPages>1&&(0,r.tZ)(c,{currentPage:d.currentPage,totalPages:d.totalPages})]})}},216:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return h},default:function(){return f}});var r=n(7320),a=n(5671),i=n(3144),c=n(991),o=n(5756),l=n(1120),s=n(6053),u=n(4067),d=n.n(u),p=n(1782),m=n(9748);function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);if(e){var a=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var h=!0,f=function(t){(0,c.Z)(n,t);var e=g(n);function n(){return(0,a.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var t=this.props.tag[0].toUpperCase()+this.props.tag.split(" ").join("-").slice(1);return(0,r.BX)(r.HY,{children:[(0,r.tZ)(s.$t,{title:"".concat(this.props.tag," - ").concat(d().title),description:"".concat(this.props.tag," tags - ").concat(d().author)}),(0,r.tZ)(p.default,{posts:this.props.posts,title:"Tag / "+t})]})}}]),n}(m.default.Component)},2937:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tags/[tag]",function(){return n(216)}])},1163:function(t,e,n){t.exports=n(4651)}},function(t){t.O(0,[888,179],(function(){return e=2937,t(t.s=e);var e}));var e=t.O();_N_E=e}]);