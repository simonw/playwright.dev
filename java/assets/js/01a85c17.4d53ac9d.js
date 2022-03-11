"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4013,6103],{8665:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(3366),u=n(7294),a=n(6010),i=n(1022),o=n(9960),s="sidebar_2ahu",l="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",d="sidebarItem_2UVv",h="sidebarItemLink_1RT6",p="sidebarItemLinkActive_12pM",f=n(5999);function m(e){var t=e.sidebar;return 0===t.items.length?null:u.createElement("nav",{className:(0,a.Z)(s,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},u.createElement("div",{className:(0,a.Z)(l,"margin-bottom--md")},t.title),u.createElement("ul",{className:c},t.items.map((function(e){return u.createElement("li",{key:e.permalink,className:d},u.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:h,activeClassName:p},e.title))}))))}var v=["sidebar","toc","children"];var g=function(e){var t=e.sidebar,n=e.toc,o=e.children,s=(0,r.Z)(e,v),l=t&&t.items.length>0;return u.createElement(i.Z,s,u.createElement("div",{className:"container margin-vert--lg"},u.createElement("div",{className:"row"},l&&u.createElement("aside",{className:"col col--3"},u.createElement(m,{sidebar:t})),u.createElement("main",{className:(0,a.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&u.createElement("div",{className:"col col--2"},n))))}},497:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(7294),u=n(8665),a=n(7774),i=n(9521),o="tag_21yA";function s(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(a.Z,e))}))),r.createElement("hr",null))}var l=function(e){var t=e.tags,n=(0,i.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(s,{key:e.letter,letterEntry:e})})))};var c=function(e){var t=e.tags,n=e.sidebar,a=(0,i.MA)();return r.createElement(u.Z,{title:a,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},r.createElement("h1",null,a),r.createElement(l,{tags:Object.values(t)}))}},7774:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),u=n(6010),a=n(9960),i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var l=function(e){var t,n=e.permalink,l=e.name,c=e.count;return r.createElement(a.Z,{href:n,className:(0,u.Z)(i,(t={},t[o]=!c,t[s]=c,t))},l,c&&r.createElement("span",null,c))}},8219:function(e,t,n){n.d(t,{O:function(){return D}});var r=n(7462),u=n(3366),a=n(7294),i=n(6010),o=n(9960),s=n(4996),l=n(6775),c=n(541),d=n(3919),h=n(9521),p=n(7412),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"],m=["className","isDropdownItem"],v=["className","isDropdownItem"],g=["mobile","position"];function D(e){var t,n=e.activeBasePath,i=e.activeBaseRegex,p=e.to,m=e.href,v=e.label,g=e.activeClassName,D=void 0===g?"":g,F=e.prependBaseUrlToHref,E=e["data-language-prefix"],A=(0,u.Z)(e,f),k=(0,s.Z)(p),C=(0,s.Z)(n),_=(0,s.Z)(m,{forcePrependBaseUrl:!0}),b=v&&m&&!(0,d.Z)(m),w="dropdown__link--active"===D,x=(0,l.TH)();if(E){m="pathname://"+E+x.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+x.hash,A.autoAddBaseUrl=!1,A.target="_self";var y=["java","dotnet","python"].some((function(e){return x.pathname.startsWith("/"+e)}));(x.pathname.startsWith(E)&&y&&E.length>1||1===E.length&&!y)&&(A.className+=" "+D)}return a.createElement(o.Z,(0,r.Z)({},m?{href:F?_:m}:Object.assign({isNavLink:!0,activeClassName:null!=(t=A.className)&&t.includes(D)?"":D,to:k},n||i?{isActive:function(e,t){return i?(0,h.Fx)(i,t.pathname):t.pathname.startsWith(C)}}:null),A),b?a.createElement("span",null,v,a.createElement(c.Z,w&&{width:12,height:12})):v)}function F(e){var t=e.className,n=e.isDropdownItem,o=void 0!==n&&n,s=(0,u.Z)(e,m),l=a.createElement(D,(0,r.Z)({className:(0,i.Z)(o?"dropdown__link":"navbar__item navbar__link",t)},s));return o?a.createElement("li",null,l):l}function E(e){var t=e.className,n=(e.isDropdownItem,(0,u.Z)(e,v));return a.createElement("li",{className:"menu__list-item"},a.createElement(D,(0,r.Z)({className:(0,i.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,i=void 0!==n&&n,o=(e.position,(0,u.Z)(e,g)),s=i?E:F;return a.createElement(s,(0,r.Z)({},o,{activeClassName:null!=(t=o.activeClassName)?t:(0,p.E)(i)}))}},7412:function(e,t,n){n.d(t,{E:function(){return d},Z:function(){return h}});var r=n(3366),u=n(7294),a=n(8219),i=n(3154),o=n(5413),s=n(1093),l=["type"],c={default:function(){return a.Z},localeDropdown:function(){return o.Z},search:function(){return s.Z},dropdown:function(){return i.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(7548).Z}};var d=function(e){return e?"menu__link--active":"navbar__link--active"};function h(e){var t=e.type,n=(0,r.Z)(e,l),a=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),i=function(e){var t=c[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(a);return u.createElement(i,n)}},1359:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),u=n(8695),a="loadingRing_3atr";function i(e){var t=e.className;return r.createElement("div",{className:(0,u.Z)(a,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(7855),u=n(5861),a=n(7757),i=n.n(a),o=n(5850),s=n.n(o),l=n(9376);function c(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)(i().mark((function e(t){var n,u,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+l.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:s().Index.load(r)}})),a=n.reduce((function(e,t){for(var n,u=(0,r.Z)(t.index.invertedIndex);!(n=u()).done;){var a=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5779:function(e,t,n){n.d(t,{Z:function(){return V}});var r=n(9376),u=n(7855),a=n(5861),i=n(7757),o=n.n(i),s=n(7294),l=n(8695),c=n(2263),d=n(412),h=n(6775),p=n(3551),f=n(4241),m=n(6092),v=n(3318),g=n(5579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",A="cursor_6rPN",k="hitTree_2sUa",C="hitIcon_3jP2",_="hitPath_3Lax",b="noResultsIcon_1rmk",w="hitFooter_1JML",x="hitWrapper_4Hzp",y="hitTitle_2AMl",Z="hitAction_2kg3",N="noResults_1vI5",I="searchBarContainer_2P1H",B="searchBarLoadingRing_1FtX",z="searchIndexLoading_1eRR",L="input_1tay",R="hint_1WuO",M="suggestions_1cWc",T="dataset_3Xc2",j="empty_2isC";function S(e){var t=e.document,n=e.type,r=e.page,u=e.metadata,a=e.tokens,i=e.isInterOfTree,o=e.isLastOfTree,s=0===n,l=1===n,c=[];i?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):o&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var d=c.map((function(e){return'<span class="'+k+'">'+e+"</span>"})),h='<span class="'+C+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+y+'">'+(0,v.o)(t.t,(0,g.m)(u,"t"),a)+"</span>"];return s||p.push('<span class="'+_+'">'+(0,m.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(d,[h,'<span class="'+x+'">'],p,["</span>",'<span class="'+Z+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function H(){return'<span class="'+N+'"><span class="'+b+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var P=n(1359);function W(){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4485),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var V=function(e){var t,n=e.handleSearchBarToggle,i=(0,c.Z)().siteConfig.baseUrl,m=(0,h.k6)(),v=(0,h.TH)(),g=(0,s.useRef)(null),k=(0,s.useRef)("empty"),C=(0,s.useRef)(!1),_=(0,s.useState)(!1),b=_[0],x=_[1],y=(0,s.useState)(!1),Z=y[0],N=y[1],U=(0,s.useCallback)((0,a.Z)(o().mark((function e(){var t,n,a,s,l,c,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===k.current){e.next=2;break}return e.abrupt("return");case 2:return k.current="loading",x(!0),e.next=6,Promise.all([(0,p.w)(i),W()]);case 6:t=e.sent,n=t[0],a=n.wrappedIndexes,s=n.zhDictionary,l=t[1],c=l(g.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:L,hint:R,suggestions:M,suggestion:E,cursor:A,dataset:T,empty:j}},[{source:(0,f.v)(a,s,r.qo),templates:{suggestion:S,empty:H,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=i+"search?q="+encodeURIComponent(t);n.href=u,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),m.push(u))}));var a=document.createElement("div");return a.className=w,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,a=n.u,i=n.h,o=t.tokens,s=a;if(r.vc&&o.length>0){for(var l,c=new URLSearchParams,d=(0,u.Z)(o);!(l=d()).done;){var h=l.value;c.append(O,h)}s+="?"+c.toString()}i&&(s+=i),m.push(s)})),k.current="done",x(!1),C.current&&((d=g.current).value&&c.autocomplete.open(),d.focus());case 15:case"end":return e.stop()}}),e)}))),[i,m]);(0,s.useEffect)((function(){if(r.vc){var e=d.default.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[v.search]);var V=(0,s.useCallback)((function(){C.current=!0,U(),null==n||n(!0)}),[n,U]),Q=(0,s.useCallback)((function(){null==n||n(!1)}),[n]),X=(0,s.useCallback)((function(){U()}),[U]),q=(0,s.useCallback)((function(e){e.target.value&&N(!0)}),[]);return s.createElement("div",{className:(0,l.Z)("navbar__search",I,(t={},t[z]=b&&Z,t))},s.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:V,onBlur:Q,onChange:q,ref:g}),s.createElement(P.Z,{className:B}))}},4241:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(7855),u=n(5850),a=n.n(u);function i(e,t){var n=[];return function e(u,a){if(0!==u.length){var i=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(i))for(var o,s=function(e,t){var n=[];return function e(u,a){for(var i,o=0,s=!1,l=(0,r.Z)(t);!(i=l()).done;){var c=i.value;if(u.substr(0,c.length)===c){var d={missed:a.missed,term:a.term.concat({value:c})};u.length>c.length?e(u.substr(c.length),d):n.push(d),s=!0}else for(var h=c.length-1;h>o;h-=1){var p=c.substr(0,h);if(u.substr(0,h)===p){o=h;var f={missed:a.missed,term:a.term.concat({value:p,trailing:!0})};u.length>h?e(u.substr(h),f):n.push(f),s=!0;break}}}s||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&n.push(a))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(i,t),l=(0,r.Z)(s);!(o=l()).done;){var c=o.value,d=a.concat.apply(a,c);e(u.slice(1),d)}else{var h=a.concat({value:i});e(u.slice(1),h)}}else n.push(a)}(e,[]),n}var o=n(9376);function s(e){return l(e).concat(l(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function l(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(u,l){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(u,o.dK);if(0!==c.length){var d=function(e,t){var n=i(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,l=(0,r.Z)(n);!(u=l()).done;){var c=u.value;c[c.length-1].maybeTyping=!0}for(var d,h,p=[],f=(0,r.Z)(o.dK);!(d=f()).done;){var m=d.value;if("en"===m)o._k||p.unshift(a().stopWordFilter);else{var v=a()[m];v.stopWordFilter&&p.unshift(v.stopWordFilter)}}if(p.length>0){var g=function(e){return p.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};h=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var A=D.value,k=g(A);h.push(k),k.length<A.length&&k.length>0&&F.push(k)}n.push.apply(n,F)}else h=n.slice();for(var C,_=[],b=(0,r.Z)(h);!(C=b()).done;){var w=C.value;if(w.length>2)for(var x=w.length-1;x>=0;x-=1)_.push(w.slice(0,x).concat(w.slice(x+1)))}return s(n).concat(s(_))}(c,t),h=[],p=function(){for(var t,u=f.value,a=u.term,i=u.tokens,o=function(){var u=t.value,o=u.documents,s=u.index,l=u.type;if(h.push.apply(h,s.query((function(e){for(var t,n=(0,r.Z)(a);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!h.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-h.length).map((function(t){var n=o.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:l,page:0!==l&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:i,score:t.score}}))),h.length>=n)return{v:"break|search"}},s=(0,r.Z)(e);!(t=s()).done;){var l=o();if("object"==typeof l)return l.v}};e:for(var f,m=(0,r.Z)(d);!(f=m()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===u&&(u=n.index),r===u?0===t.type?-1:0===n.type?1:t.index-n.index:r-u}))}(h),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(h),l(h)}else l([])}}},8740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){function r(e,t){for(var n=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(7855),u=n(8740);function a(e,t,n){for(var i,o=[],s=(0,r.Z)(t);!(i=s()).done;){var l=i.value,c=e.toLowerCase().indexOf(l);if(c>=0){c>0&&o.push(a(e.substr(0,c),t)),o.push("<mark>"+(0,u.X)(e.substr(c,l.length))+"</mark>");var d=c+l.length;d<e.length&&o.push(a(e.substr(d),t));break}}return 0===o.length?n?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):o.join("")}},3318:function(e,t,n){n.d(t,{o:function(){return s}});var r=n(8740),u=n(6092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function i(e){for(var t=[],n=0,r=e;r.length>0;){var u=r.match(a);if(!u){t.push(r);break}u.index>0&&t.push(r.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,r=e.substr(n)}return t}var o=n(9376);function s(e,t,n,r){void 0===r&&(r=o.Hk);for(var u={chunkIndex:-1},a=l(e,t,n,0,0,u),i=a.slice(0,u.chunkIndex),s=a[u.chunkIndex],c=[s.html],d=a.slice(u.chunkIndex+1),h=s.textLength,p=0,f=0,m=!1,v=!1;h<r;)if((p<=f||0===d.length)&&i.length>0){var g=i.pop();h+g.textLength<=r?(c.unshift(g.html),p+=g.textLength,h+=g.textLength):(m=!0,i.length=0)}else{if(!(d.length>0))break;var D=d.shift();h+D.textLength<=r?(c.push(D.html),f+=D.textLength,h+=D.textLength):(v=!0,d.length=0)}return(m||i.length>0)&&c.unshift("\u2026"),(v||d.length>0)&&c.push("\u2026"),c.join("")}function l(e,t,n,a,o,s){var c=[],d=t[a],h=d[0],p=d[1];if(h<o)(a+=1)<t.length&&c.push.apply(c,l(e,t,n,a,o));else{h>o&&c.push.apply(c,i(e.substring(o,h)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),s&&(s.chunkIndex=c.length),c.push({html:(0,u.C)(e.substr(h,p),n,!0),textLength:p});var f=h+p;(a+=1)<t.length?c.push.apply(c,l(e,t,n,a,f)):f<e.length&&c.push.apply(c,i(e.substr(f)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},9376:function(e,t,n){n.d(t,{vc:function(){return o},rx:function(){return s},dK:function(){return a},_k:function(){return i},Hk:function(){return c},qo:function(){return l},Iz:function(){return d}});var r=n(5850),u=n.n(r);n(8465)(u()),n(2324).w(u()),n(3609)(u());var a=["en","zh"],i=!1,o=null,s="ad6017c8",l=8,c=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},2324:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function u(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return u}})}}]);