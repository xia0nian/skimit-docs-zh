(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{654:function(t,e,s){"use strict";s.d(e,"d",(function(){return n})),s.d(e,"a",(function(){return i})),s.d(e,"f",(function(){return r})),s.d(e,"b",(function(){return c})),s.d(e,"e",(function(){return h})),s.d(e,"h",(function(){return u})),s.d(e,"i",(function(){return d})),s.d(e,"c",(function(){return p})),s.d(e,"g",(function(){return f}));s(388);const n=/#.*$/,a=/\.(md|html)$/,i=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(n,"").replace(a,"")}function l(t){return r.test(t)}function c(t){if(l(t))return t;const e=t.match(n),s=e?e[0]:"",a=o(t);return i.test(a)?t:a+".html"+s}function h(t,e){const s=t.hash,a=function(t){const e=t.match(n);if(e)return e[0]}(e);if(a&&s!==a)return!1;return o(t.path)===o(e)}function u(t,e,s){if(l(e))return{type:"external",path:e};s&&(e=function(t,e,s){const n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;const a=e.split("/");s&&a[a.length-1]||a.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?a.pop():"."!==e&&a.push(e)}""!==a[0]&&a.unshift("");return a.join("/")}(e,s));const n=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===n)return Object.assign({},t[e],{type:"page",path:c(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,s,n){const{pages:a,themeConfig:i}=s,r=n&&i.locales&&i.locales[n]||i;if("auto"===(t.frontmatter.sidebar||r.sidebar||i.sidebar))return function(t){const e=p(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=r.sidebar||i.sidebar;if(o){const{base:t,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var s;return{}}(e,o);return s?s.map(e=>function t(e,s,n,a=1){if("string"==typeof e)return u(s,e,n);if(Array.isArray(e))return Object.assign(u(s,e[0],n),{title:e[1]});{a>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const i=e.children||[];return 0===i.length&&e.path?Object.assign(u(s,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:i.map(e=>t(e,s,n,a+1)),collapsable:!1!==e.collapsable}}}(e,a,t)):[]}return[]}function p(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},656:function(t,e,s){},657:function(t,e,s){},658:function(t,e,s){},659:function(t,e,s){},660:function(t,e,s){},661:function(t,e,s){},662:function(t,e,s){},663:function(t,e,s){},664:function(t,e,s){},665:function(t,e,s){},666:function(t,e,s){},667:function(t,e,s){},668:function(t,e,s){},669:function(t,e,s){},671:function(t,e,s){"use strict";s.r(e);var n=s(654),a={name:"SidebarGroup",props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(671).default},methods:{isActive:n.e}},i=(s(678),s(59)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"},[e("a-icon",{attrs:{type:"down"}})],1):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"},[e("a-icon",{attrs:{type:"down"}})],1):t._e()]),t._v(" "),t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)}),[],!1,null,null,null).exports;function o(t,e,s,n,a){const i={props:{to:e,activeClass:"",exactActiveClass:""},attrs:{title:s},class:{active:n,"sidebar-link":!0}};return a>2&&(i.style={"padding-left":a+"rem"}),t("RouterLink",i,s)}function l(t,e,s,a,i,r=1){return!e||r>i?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(n.e)(a,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,s+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,s,a,i,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:a,$themeConfig:i,$themeLocaleConfig:r},props:{item:c,sidebarDepth:h}}){const u=Object(n.e)(a,c.path),d="auto"===c.type?u||c.children.some(t=>Object(n.e)(a,c.basePath+"#"+t.slug)):u,p="external"===c.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,c.path,c.title||c.path):o(t,c.path,c.title||c.path,d),f=[e.frontmatter.sidebarDepth,h,r.sidebarDepth,i.sidebarDepth,1].find(t=>void 0!==t),g=r.displayAllHeaders||i.displayAllHeaders;if("auto"===c.type)return[p,l(t,c.children,c.basePath,a,f)];if((d||g)&&c.headers&&!n.d.test(c.path)){return[p,l(t,Object(n.c)(c.headers),c.path,a,f)]}return p}};s(679);function h(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?h(t,e):"page"===e.type&&Object(n.e)(t,e.path))}var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(i.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const n=e[s];if(h(t,n))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(n.e)(this.$route,t.regularPath)}}},d=Object(i.a)(u,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,n){return e("li",{key:n},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:n===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=d.exports},673:function(t,e,s){"use strict";s(656)},674:function(t,e,s){"use strict";s(657)},675:function(t,e,s){"use strict";s(658)},676:function(t,e,s){"use strict";s(659)},677:function(t,e,s){"use strict";s(660)},678:function(t,e,s){"use strict";s(661)},679:function(t,e,s){"use strict";s(662)},680:function(t,e,s){"use strict";s(663)},681:function(t,e,s){"use strict";s(664)},682:function(t,e,s){"use strict";s(665)},683:function(t,e,s){"use strict";s(666)},684:function(t,e,s){var n=s(52),a=s(35),i=s(41);t.exports=function(t){return"string"==typeof t||!a(t)&&i(t)&&"[object String]"==n(t)}},685:function(t,e,s){"use strict";s(667)},686:function(t,e,s){"use strict";s(668)},687:function(t,e,s){"use strict";s(669)},689:function(t,e,s){"use strict";s.r(e);var n=s(654),a={name:"Home",data:()=>({isDivider:!1}),methods:{isExtlink:t=>/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t),link(t){t=void 0===t?"":t;let e=Object(n.b)(t);return e=5===e.length&&".html"===e?"":e,e}},mounted(){this.data.footerWrap&&this.data.footerWrap.length&&(this.isDivider=!0)},computed:{data(){return this.$page.frontmatter}}},i=(s(673),s(59)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{staticClass:"hero-logo",attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n        "+t._s(t.data.heroText||t.$title||"Hello")+"\n      ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e(),t._v(" "),t.data.actions&&t.data.actions.length?e("div",{staticClass:"actions"},[e("a-space",{attrs:{size:"middle"}},t._l(t.data.actions,(function(s,n){return e("a-button",{key:n,attrs:{type:s.type?s.type:"primary",shape:s.shape?s.shape:null,size:s.size?s.size:"large",ghost:!!s.ghost&&s.ghost}},[t.isExtlink(s.link?s.link:"/")?e("a",{attrs:{href:t.link(s.link?s.link:"/"),target:"_blank"}},[t._v("\n              "+t._s(s.text)+"\n            ")]):e("RouterLink",{attrs:{to:t.link(s.link?s.link:"/")}},[t._v("\n              "+t._s(s.text)+"\n            ")])],1)})),1)],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(s,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-antdocs-content custom"})],1),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t.data.footerWrap&&t.data.footerWrap.length?e("div",{staticClass:"footer-container"},[e("a-row",{staticClass:"add-bottom",attrs:{gutter:{md:0,lg:32},type:"flex",justify:"space-around"}},t._l(t.data.footerWrap,(function(s,n){return e("a-col",{key:n,attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[e("div",[e("h2",[t._v(t._s(s.headline))]),t._v(" "),t._l(s.items,(function(s,n){return e("div",{key:n,staticClass:"footer-item"},[s.title&&null!==s.title?e("a",{attrs:{href:s.link,target:"_blank"}},[t._v("\n                "+t._s(s.title)+"\n              ")]):t._e(),t._v(" "),s.details&&null!==s.details?e("span",{staticClass:"footer-item-separator"},[t._v("-")]):t._e(),t._v(" "),s.details&&null!==s.details?e("span",{staticClass:"footer-item-description"},[t._v(t._s(s.details))]):t._e()])}))],2)])})),1)],1):t._e(),t._v(" "),e("div",{class:{"footer-divider":t.isDivider,"footer-bottom":!0},domProps:{innerHTML:t._s(t.data.footer)}})]):t._e()])}),[],!1,null,null,null).exports,o=(s(388),s(46)),l=s.n(o),c=(t,e,s=null)=>{let n=l()(e,"title","");return l()(e,"frontmatter.tags")&&(n+=" "+e.frontmatter.tags.join(" ")),s&&(n+=" "+s),h(t,n)};const h=(t,e)=>{const s=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp("[^\0-]"),a=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(n.test(t))return a.some(t=>e.toLowerCase().indexOf(t)>-1);{const n=t.endsWith(" ");return new RegExp(a.map((t,e)=>a.length!==e+1||n?`(?=.*\\b${s(t)}\\b)`:`(?=.*\\b${s(t)})`).join("")+".+","gi").test(e)}};var u={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,n=this.$localePath,a=[];for(let i=0;i<e.length&&!(a.length>=s);i++){const r=e[i];if(this.getPageLocalePath(r)===n&&this.isSearchable(r))if(c(t,r))a.push(r);else if(r.headers)for(let e=0;e<r.headers.length&&!(a.length>=s);e++){const s=r.headers[e];s.title&&c(t,r,s.title)&&a.push(Object.assign({},r,{path:r.path+"#"+s.slug,header:s}))}}return a},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},d=(s(674),Object(i.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,n){return e("li",{key:n,staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),p={name:"ThemeSwitch",data:()=>({isDarkMode:!1}),methods:{getSchemeStorage(t){if("undefined"==typeof localStorage)return;let e=localStorage.getItem(t);return"light"===e||"dark"!==e},setSchemeStorage:t=>!0===t?"dark":"light",switchScheme(){var t;if(this.isDarkMode=!this.isDarkMode,"undefined"==typeof localStorage)return;localStorage.setItem("antdocs-color-scheme",this.setSchemeStorage(this.isDarkMode));const e=null===(t=window)||void 0===t?void 0:t.document.querySelector("html");null==e||e.classList.toggle("dark",this.isDarkMode)}},mounted(){var t;this.isDarkMode=!this.getSchemeStorage("antdocs-color-scheme");const e=null===(t=window)||void 0===t?void 0:t.document.querySelector("html");null==e||e.classList.toggle("dark",this.isDarkMode)}},f=(s(675),{name:"NavLinks",components:{ThemeSwitch:Object(i.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-switch",on:{click:function(e){return t.switchScheme()}}},[e("a-tooltip",{attrs:{placement:"bottom"}},[e("template",{slot:"title"},[e("span",[t._v(t._s(t.isDarkMode?"切换亮色模式":"切换暗黑模式"))])]),t._v(" "),t.isDarkMode?e("a",{staticStyle:{"margin-top":"2px"}},[e("i",{staticClass:"anticon"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t._v(" "),e("path",{attrs:{d:"M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linejoin":"round"}})])])]):e("a",{staticStyle:{"margin-top":"2px"}},[e("i",{staticClass:"anticon"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 3V6.15V3Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M24 3V6.15",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.8492 9.15076L36.6219 11.3781L38.8492 9.15076Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M38.8492 9.15076L36.6219 11.3781",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M45 24H41.85H45Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M45 24H41.85",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.8492 38.8492L36.6219 36.6219L38.8492 38.8492Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M38.8492 38.8492L36.6219 36.6219",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 45V41.85V45Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M24 45V41.85",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.15076 38.8492L11.3781 36.6219L9.15076 38.8492Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M9.15076 38.8492L11.3781 36.6219",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 24H6.15H3Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M3 24H6.15",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.15076 9.15076L11.3781 11.3781L9.15076 9.15076Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M9.15076 9.15076L11.3781 11.3781",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",fill:"none",stroke:"#333","stroke-width":"4","stroke-linejoin":"round"}})])])])],2)],1)}),[],!1,null,null,null).exports},data(){return{currentStyle:this.$store.state.global.navStyle,routesPath:""}},created(){this.routesPath=JSON.stringify(this.$themeConfig.locales?this.$themeConfig.locales[this.$localePath].nav:this.$themeConfig.nav)},methods:{isExtlink:t=>/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t),link(t){t=void 0===t?"":t;let e=Object(n.b)(t);return e=5===e.length&&".html"===e?this.geneKey():e,e},geneKey:()=>Math.random().toString(36).substr(2,10)+(new Date).getTime(),currentPath(t){const e=this.routesPath;if(-1!=e.indexOf(t))return t;if(".html"===t.slice(-5)){let s=t.replace(".html","");if(-1!=e.indexOf(s))return t;return t.replace(/[^\/]+$/,"")}return t.replace(/[^\/]+$/,"")},activePage(t){if(-1==this.routesPath.indexOf("activeMatch"))return this.currentPath(t);for(let e=0;e<this.userLinks.length;e++)if(void 0!==this.userLinks[e].activeMatch)return new RegExp(this.userLinks[e].activeMatch).test(t)?this.userLinks[e].link:this.currentPath(t)}},computed:{currentPage(){return[this.activePage(this.$page.path)]},userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,n=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(a=>{const i=t[a],r=n[a]&&n[a].label||i.lang;let o;return i.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,a),s.some(t=>t.path===o)||(o=a)),{text:r,link:o}})};return[...this.userNav,a]}return this.userNav},userLinks(){const t=(this.nav||[]).map(t=>Object.assign(Object(n.g)(t),{items:(t.items||[]).map(n.g)}));return this.routesPath=JSON.stringify(t),t},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["github","gitlab"];for(let s=0;s<e.length;s++){const n=e[s];if(new RegExp(n,"i").test(t))return n}return"global"},isDarkMode(){return this.$themeConfig.isDarkMode||!1}}}),g=(s(676),Object(i.a)(f,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[e("a-menu",{attrs:{mode:t.currentStyle,id:"nav",selectable:!1,forceSubMenuRender:!0},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}},[t._l(t.userLinks,(function(s){return["links"===s.type?e("a-sub-menu",{key:t.link(s.link)},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n          "+t._s(s.text)+"\n        ")]),t._v(" "),t._l(s.items,(function(s,n){return["links"===s.type?e("a-menu-item-group",{key:t.link(s.link)||n,attrs:{title:s.text}},t._l(s.items,(function(s){return e("a-menu-item",{key:t.link(s.link)},[t.isExtlink(s.link)?e("a",{attrs:{href:s.link,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                "+t._s(s.text)+"\n                "),e("a-icon",{attrs:{type:"link"}})],1):e("RouterLink",{attrs:{to:t.link(s.link)}},[t._v("\n                "+t._s(s.text)+"\n              ")])],1)})),1):e("a-menu-item",{key:t.link(s.link)},[t.isExtlink(s.link)?e("a",{attrs:{href:s.link,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n              "+t._s(s.text)+"\n              "),e("a-icon",{attrs:{type:"link"}})],1):e("RouterLink",{attrs:{to:t.link(s.link)}},[t._v("\n              "+t._s(s.text)+"\n            ")])],1)]}))],2):e("a-menu-item",{key:t.link(s.link)},[t.isExtlink(s.link)?e("a",{attrs:{href:t.link(s.link),target:"_blank"}},[t._v("\n          "+t._s(s.text)+"\n          "),e("a-icon",{attrs:{type:"link"}})],1):e("RouterLink",{attrs:{to:t.link(s.link)}},[t._v("\n          "+t._s(s.text)+"\n        ")])],1)]}))],2),t._v(" "),e("ul",{staticClass:"extra-group"},[t.repoLink?e("li",[e("a-tooltip",{attrs:{placement:"bottom"}},[e("template",{slot:"title"},[e("span",{staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(t.repoLabel))])]),t._v(" "),e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e("a-icon",{attrs:{type:t.repoLabel}})],1)],2)],1):t._e(),t._v(" "),t.isDarkMode?e("li",[e("ThemeSwitch")],1):t._e()])],1):t._e()}),[],!1,null,null,null).exports),m={components:{NavLinks:g},data:()=>({popover_visible:!1}),methods:{showMenu(){this.$store.state.global.navStyle="inline",this.popover_visible=!0}}},v=(s(677),Object(i.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-button",on:{click:t.showMenu}},[e("a-icon",{attrs:{type:"bars"}}),t._v(" "),e("a-popover",{attrs:{placement:"bottomRight",trigger:"click",overlayClassName:"reset-popover"},model:{value:t.popover_visible,callback:function(e){t.popover_visible=e},expression:"popover_visible"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("NavLinks")],1)])],1)}),[],!1,null,null,null).exports),_=s(671),k={name:"Promo",methods:{gotoLink(){window.open(this.data.link)},popupInfo(){this.$info({title:this.data.msgTitle||"Message Title",content:this.data.msgText||"Put your text here.",okText:this.data.msgOkText||"Ok",maskClosable:!0})}},computed:{data(){return this.$themeConfig.ads}}},b=(s(680),Object(i.a)(k,(function(){var t=this,e=t._self._c;return t.data?e("div",[e("div",{staticClass:"promo"},[1===t.data.style?e("div",{attrs:{id:"promo_1"},on:{click:t.gotoLink}},[e("img",{attrs:{src:t.data.image}}),t._v(" "),e("span",{attrs:{title:t.data.text}},[t._v(t._s(t.data.text||"No text"))])]):2===t.data.style?e("div",{attrs:{id:"promo_2"}},[e("a-carousel",{attrs:{autoplay:"",autoplaySpeed:t.data.speed||3e3}},t._l(t.data.items,(function(t,s){return e("div",{key:s},[e("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:t.image,title:t.text}})])])})),0)],1):e("div",{attrs:{id:"promo_3"}},[e("div",{staticClass:"promo_title"},[t._v(t._s(t.data.title||"Sponsor"))]),t._v(" "),e("a-button",{attrs:{type:"primary",ghost:""},on:{click:t.popupInfo}},[t._v(t._s(t.data.btnText||"Become a Sponsor"))])],1)]),t._v(" "),e("a-divider",{attrs:{dashed:"",id:"reset-margin"}})],1):t._e()}),[],!1,null,null,null).exports),C={name:"Sidebar",components:{SidebarLinks:_.default,Promo:b},props:["items"]},y=(s(681),Object(i.a)(C,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[this.$themeConfig.ads?t("Promo"):this._e(),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),x={name:"Navbar",components:{NavButton:v,NavLinks:g,SearchBox:d,AlgoliaSearchBox:{},Sidebar:y},data:()=>({sidebar_visible:!1,sidebar_open:!1}),created(){this.$store.state.global.navStyle="horizontal"},methods:{isOpenDrawer(){this.sidebar_visible=!this.sidebar_visible,this.sidebar_open=!this.sidebar_open,document.getElementById("app").classList.toggle("toggle-sidebar")}},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(n.i)(this.$page,this.$page.regularPath,this.$site,this.$localePath)}}},$=(s(682),Object(i.a)(x,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("a-row",[e("NavButton"),t._v(" "),e("a-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:5,xxl:4}},[e("RouterLink",{class:{"no-logo":!t.$site.themeConfig.logo,"home-link":!0},attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name"},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox",{staticClass:"mobile-search"}):t._e()],1),t._v(" "),e("a-col",{staticClass:"nav-space-between",attrs:{xs:0,sm:0,md:18,lg:18,xl:19,xxl:20}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1),t._v(" "),t.shouldShowSidebar?e("a-drawer",{attrs:{placement:"left",closable:!1,visible:t.sidebar_visible,wrapClassName:"sidebarWrap"},on:{close:t.isOpenDrawer}},[e("div",{attrs:{slot:"handle"},slot:"handle"},[e("div",{class:{"drawer-open":t.sidebar_open,"drawer-handle":!0},on:{click:t.isOpenDrawer}},[e("i",{staticClass:"drawer-handle-icon"})])]),t._v(" "),e("Sidebar",{staticClass:"mobile-sidebar",attrs:{items:t.sidebarItems}})],1):t._e()],1)}),[],!1,null,null,null).exports),L=s(49),w=s.n(L),S={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=w()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:s="",docsBranch:n="master",docsRepo:a=e}=this.$site.themeConfig;return t&&a&&this.$page.relativePath?this.createEditLink(e,a,s,n,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,s,a,i){if(/bitbucket.org/.test(t)){return(n.f.test(e)?e:t).replace(n.a,"")+"/src"+`/${a}/`+(s?s.replace(n.a,"")+"/":"")+i+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}return(n.f.test(e)?e:"https://github.com/"+e).replace(n.a,"")+"/edit"+`/${a}/`+(s?s.replace(n.a,"")+"/":"")+i}}},P=(s(683),Object(i.a)(S,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),O=s(684),j=s.n(O),D={name:"PageNav",props:["sidebarItems"],computed:{prev(){return A(I.PREV,this)},next(){return A(I.NEXT,this)}}};const I={NEXT:{resolveLink:function(t,e){return M(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return M(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function A(t,{$themeConfig:e,$page:s,$route:a,$site:i,sidebarItems:r}){const{resolveLink:o,getThemeLinkConfig:l,getPageLinkConfig:c}=t,h=l(e),u=c(s),d=w()(u)?h:u;return!1===d?void 0:j()(d)?Object(n.h)(i.pages,d,a.path):o(s,r)}function M(t,e,s){const n=[];!function t(e,s){for(let n=0,a=e.length;n<a;n++)"group"===e[n].type?t(e[n].children||[],s):s.push(e[n])}(e,n);for(let e=0;e<n.length;e++){const a=n[e];if("page"===a.type&&a.path===decodeURIComponent(t.path))return n[e+s]}}var T=D,N=(s(685),Object(i.a)(T,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},["external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[e("a-icon",{attrs:{type:"left"}}),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")],1)],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),e("a-icon",{attrs:{type:"right"}})],1)],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),E=(s(389),{data:()=>({headersList:[]}),methods:{arrayToTree(t,e){return t.reduce((s,n)=>n.parent===e?(n.items=this.arrayToTree(t,n.id),s.concat(n)):s,[])}},computed:{hasHeaders(){return!!this.headersData},headersData(){return this.$page.headers},pageAnchorConfig(){return this.$page.frontmatter.pageAnchor||this.$themeConfig.pageAnchor||{anchorDepth:2,isDisabled:!1}},isCollapsePageAnchor(){return this.$store.state.global.isCollapsePageAnchor},filterHeadersByLevel2(){const{headers:t}=this.$page;let e;return e=t.filter(t=>2===t.level),e.forEach(t=>{t.items=[]}),e},filterHeadersByLevel(){if(1===this.pageAnchorConfig.anchorDepth)return this.filterHeadersByLevel2;const{headers:t}=this.$page;let e=t;return e.forEach((t,s)=>{t.id=s+1,2===t.level?t.parent=0:0!==s&&(2===e[s-1].level?t.parent=e[s-1].id:3===e[s-1].level&&(t.parent=e[s-1].parent))}),this.arrayToTree(e,0)}}}),R=(s(686),{components:{PageEdit:P,PageNav:N,PageAnchor:Object(i.a)(E,(function(){var t=this,e=t._self._c;return t.hasHeaders?e("div",{class:["page-anchor",{"collapse-page-anchor":t.isCollapsePageAnchor}]},[e("a-space",{staticStyle:{width:"100%"},attrs:{direction:"vertical",size:"large"}},[e("a-anchor",{staticClass:"page-anchor-offset"},[t._l(t.filterHeadersByLevel,(function(s,n){return[0!==s.items.length?e("a-anchor-link",{key:n,attrs:{href:"#"+s.slug,title:s.title}},[t._l(s.items,(function(s,n){return[3===s.level?e("a-anchor-link",{key:n,attrs:{href:"#"+s.slug,title:s.title}}):t._e()]}))],2):e("a-anchor-link",{key:n,attrs:{href:"#"+s.slug,title:s.title}})]}))],2)],1)],1):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"],computed:{hasPageAnchor(){return this.pageAnchorConfig.isDisabled?(this.$store.state.global.isCollapsePageAnchor=!0,!1):this.$page.headers?(this.$store.state.global.isCollapsePageAnchor=!1,!0):(this.$store.state.global.isCollapsePageAnchor=!0,!1)},pageAnchorConfig(){return this.$page.frontmatter.pageAnchor||this.$themeConfig.pageAnchor||{anchorDepth:2,isDisabled:!1}}}}),H=(s(687),{name:"Layout",components:{Home:r,Page:Object(i.a)(R,(function(){var t=this,e=t._self._c;return e("main",{class:["page",{"has-page-anchor":t.hasPageAnchor}]},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-antdocs-content"}),t._v(" "),e("PageEdit"),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t.pageAnchorConfig.isDisabled?t._e():e("PageAnchor"),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports,Sidebar:y,Navbar:$},computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(n.i)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"no-sidebar":!this.shouldShowSidebar},t]}}}),B=Object(i.a)(H,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses},[t.shouldShowNavbar?e("Navbar"):t._e(),t._v(" "),t.shouldShowSidebar?e("Sidebar",{attrs:{items:t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}):t._e(),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$themeConfig.backToTop?e("a-back-top"):t._e()],1)}),[],!1,null,null,null);e.default=B.exports}}]);