"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[97920,46103],{48219:function(e,n,t){t.d(n,{O:function(){return F}});var r=t(87462),u=t(63366),a=t(67294),o=t(86010),s=t(39960),c=t(44996),i=t(76775),l=t(90541),h=t(13919),f=t(89521),p=t(47412),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"],m=["className","isDropdownItem"],v=["className","isDropdownItem"],D=["mobile","position"];function F(e){var n,t=e.activeBasePath,o=e.activeBaseRegex,p=e.to,m=e.href,v=e.label,D=e.activeClassName,F=void 0===D?"":D,g=e.prependBaseUrlToHref,_=e["data-language-prefix"],E=(0,u.Z)(e,d),A=(0,c.Z)(p),C=(0,c.Z)(t),k=(0,c.Z)(m,{forcePrependBaseUrl:!0}),w=v&&m&&!(0,h.Z)(m),y="dropdown__link--active"===F,x=(0,i.TH)();if(_){m="pathname://"+_+x.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+x.hash,E.autoAddBaseUrl=!1,E.target="_self";var b=["java","dotnet","python"].some((function(e){return x.pathname.startsWith("/"+e)}));(x.pathname.startsWith(_)&&b&&_.length>1||1===_.length&&!b)&&(E.className+=" "+F)}return a.createElement(s.Z,(0,r.Z)({},m?{href:g?k:m}:Object.assign({isNavLink:!0,activeClassName:null!=(n=E.className)&&n.includes(F)?"":F,to:A},t||o?{isActive:function(e,n){return o?(0,f.Fx)(o,n.pathname):n.pathname.startsWith(C)}}:null),E),w?a.createElement("span",null,v,a.createElement(l.Z,y&&{width:12,height:12})):v)}function g(e){var n=e.className,t=e.isDropdownItem,s=void 0!==t&&t,c=(0,u.Z)(e,m),i=a.createElement(F,(0,r.Z)({className:(0,o.Z)(s?"dropdown__link":"navbar__item navbar__link",n)},c));return s?a.createElement("li",null,i):i}function _(e){var n=e.className,t=(e.isDropdownItem,(0,u.Z)(e,v));return a.createElement("li",{className:"menu__list-item"},a.createElement(F,(0,r.Z)({className:(0,o.Z)("menu__link",n)},t)))}n.Z=function(e){var n,t=e.mobile,o=void 0!==t&&t,s=(e.position,(0,u.Z)(e,D)),c=o?_:g;return a.createElement(c,(0,r.Z)({},s,{activeClassName:null!=(n=s.activeClassName)?n:(0,p.E)(o)}))}},47412:function(e,n,t){t.d(n,{E:function(){return h},Z:function(){return f}});var r=t(63366),u=t(67294),a=t(48219),o=t(23154),s=t(55413),c=t(51093),i=["type"],l={default:function(){return a.Z},localeDropdown:function(){return s.Z},search:function(){return c.Z},dropdown:function(){return o.Z},docsVersion:function(){return t(47250).Z},docsVersionDropdown:function(){return t(59308).Z},doc:function(){return t(87548).Z}};var h=function(e){return e?"menu__link--active":"navbar__link--active"};function f(e){var n=e.type,t=(0,r.Z)(e,i),a=function(e,n){return e&&"default"!==e?e:n?"dropdown":"default"}(n,void 0!==t.items),o=function(e){var n=l[e];if(!n)throw new Error('No NavbarItem component found for type "'+e+'".');return n()}(a);return u.createElement(o,t)}},11359:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),u=t(78695),a="loadingRing_3atr";function o(e){var n=e.className;return r.createElement("div",{className:(0,u.Z)(a,n)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,n,t){t.d(n,{w:function(){return l}});var r=t(67855),u=t(15861),a=t(87757),o=t.n(a),s=t(35850),c=t.n(s),i=t(39376);function l(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(o().mark((function e(n){var t,u,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(n+"search-index.json?_="+i.rx);case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,u=t.map((function(e,n){var t=e.documents,r=e.index;return{type:n,documents:t,index:c().Index.load(r)}})),a=t.reduce((function(e,n){for(var t,u=(0,r.Z)(n.index.invertedIndex);!(t=u()).done;){var a=t.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},15779:function(e,n,t){t.d(n,{Z:function(){return q}});var r=t(39376),u=t(67855),a=t(15861),o=t(87757),s=t.n(o),c=t(67294),i=t(78695),l=t(52263),h=t(10412),f=t(76775),p=t(3551),d=t(44241),m=t(86092),v=t(53318),D=t(85579),F="searchBar_2moK",g="dropdownMenu_17SC",_="suggestion_1kAZ",E="cursor_6rPN",A="hitTree_2sUa",C="hitIcon_3jP2",k="hitPath_3Lax",w="noResultsIcon_1rmk",y="hitFooter_1JML",x="hitWrapper_4Hzp",b="hitTitle_2AMl",Z="hitAction_2kg3",I="noResults_1vI5",z="searchBarContainer_2P1H",S="searchBarLoadingRing_1FtX",N="searchIndexLoading_1eRR",B="input_1tay",L="hint_1WuO",R="suggestions_1cWc",j="dataset_3Xc2",H="empty_2isC";function M(e){var n=e.document,t=e.type,r=e.page,u=e.metadata,a=e.tokens,o=e.isInterOfTree,s=e.isLastOfTree,c=0===t,i=1===t,l=[];o?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):s&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+A+'">'+e+"</span>"})),f='<span class="'+C+'">'+(c?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+b+'">'+(0,v.o)(n.t,(0,D.m)(u,"t"),a)+"</span>"];return c||p.push('<span class="'+k+'">'+(0,m.C)(r.t||(n.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(h,[f,'<span class="'+x+'">'],p,["</span>",'<span class="'+Z+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function P(){return'<span class="'+I+'"><span class="'+w+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var T=t(11359);function U(){return W.apply(this,arguments)}function W(){return(W=(0,a.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(24485),t.e(90213)]).then(t.t.bind(t,24485,23));case 2:return n=e.sent,(r=n.default).noConflict?r.noConflict():n.noConflict&&n.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var q=function(e){var n,t=e.handleSearchBarToggle,o=(0,l.Z)().siteConfig.baseUrl,m=(0,f.k6)(),v=(0,f.TH)(),D=(0,c.useRef)(null),A=(0,c.useRef)("empty"),C=(0,c.useRef)(!1),k=(0,c.useState)(!1),w=k[0],x=k[1],b=(0,c.useState)(!1),Z=b[0],I=b[1],W=(0,c.useCallback)((0,a.Z)(s().mark((function e(){var n,t,a,c,i,l,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===A.current){e.next=2;break}return e.abrupt("return");case 2:return A.current="loading",x(!0),e.next=6,Promise.all([(0,p.w)(o),U()]);case 6:n=e.sent,t=n[0],a=t.wrappedIndexes,c=t.zhDictionary,i=n[1],l=i(D.current,{hint:!1,autoselect:!0,cssClasses:{root:F,noPrefix:!0,dropdownMenu:g,input:B,hint:L,suggestions:R,suggestion:_,cursor:E,dataset:j,empty:H}},[{source:(0,d.v)(a,c,r.qo),templates:{suggestion:M,empty:P,footer:function(e){var n=e.query;if(!e.isEmpty){var t=document.createElement("a"),u=o+"search?q="+encodeURIComponent(n);t.href=u,t.textContent=r.Iz.see_all_results,t.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),m.push(u))}));var a=document.createElement("div");return a.className=y,a.appendChild(t),a}}}}]).on("autocomplete:selected",(function(e,n){var t=n.document,a=t.u,o=t.h,s=n.tokens,c=a;if(r.vc&&s.length>0){for(var i,l=new URLSearchParams,h=(0,u.Z)(s);!(i=h()).done;){var f=i.value;l.append(O,f)}c+="?"+l.toString()}o&&(c+=o),m.push(c)})),A.current="done",x(!1),C.current&&((h=D.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[o,m]);(0,c.useEffect)((function(){if(r.vc){var e=h.Z.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var n=document.querySelector("article");if(n){var t=new r.vc(n);t.unmark(),t.mark(e)}}))}}),[v.search]);var q=(0,c.useCallback)((function(){C.current=!0,W(),null==t||t(!0)}),[t,W]),V=(0,c.useCallback)((function(){null==t||t(!1)}),[t]),Q=(0,c.useCallback)((function(){W()}),[W]),X=(0,c.useCallback)((function(e){e.target.value&&I(!0)}),[]);return c.createElement("div",{className:(0,i.Z)("navbar__search",z,(n={},n[N]=w&&Z,n))},c.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:Q,onFocus:q,onBlur:V,onChange:X,ref:D}),c.createElement(T.Z,{className:S}))}},99134:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(15861),u=t(87757),a=t.n(u),o=t(67294),s=t(52263),c=t(11022),i=t(12859),l=t(39960),h=t(76775),f=t(10412);var p=function(){var e=(0,h.k6)(),n=(0,h.TH)(),t=(0,s.Z)().siteConfig.baseUrl;return{searchValue:f.Z.canUseDOM&&new URLSearchParams(n.search).get("q")||"",updateSearchPath:function(t){var r=new URLSearchParams(n.search);t?r.set("q",t):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return t+"search?q="+encodeURIComponent(e)}}},d=t(3551),m=t(44241),v=t(86092),D=t(53318),F=t(85579),g=t(11359),_=t(39376);function E(e,n){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,t){return Object.prototype.hasOwnProperty.call(n,t)?String(n[t]):e}))}var A="searchQueryInput_29Sn",C="searchResultItem__mS7",k="searchResultItemPath_3SSy",w="searchResultItemSummary_bS6q";function y(e){var n=e.searchResult,t=n.document,r=n.type,u=n.page,a=n.tokens,s=n.metadata,c=0===r,i=2===r,h=(c?t.b:u.b).slice(),f=i?t.s:t.t;return c||h.push(u.t),o.createElement("article",{className:C},o.createElement("h2",null,o.createElement(l.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:i?(0,v.C)(f,a):(0,D.o)(f,(0,F.m)(s,"t"),a,100)}})),h.length>0&&o.createElement("p",{className:k},h.join(" \u203a ")),i&&o.createElement("p",{className:w,dangerouslySetInnerHTML:{__html:(0,D.o)(t.t,(0,F.m)(s,"t"),a,100)}}))}var x=function(){var e=(0,s.Z)().siteConfig.baseUrl,n=p(),t=n.searchValue,u=n.updateSearchPath,l=(0,o.useState)(t),h=l[0],f=l[1],v=(0,o.useState)(),D=v[0],F=v[1],C=(0,o.useState)(),k=C[0],w=C[1],x=(0,o.useMemo)((function(){return h?E(_.Iz.search_results_for,{keyword:h}):_.Iz.search_the_documentation}),[h]);(0,o.useEffect)((function(){u(h),D&&(h?D(h,(function(e){w(e)})):w(void 0))}),[h,D]);var b=(0,o.useCallback)((function(e){f(e.target.value)}),[]);return(0,o.useEffect)((function(){t&&t!==h&&f(t)}),[t]),(0,o.useEffect)((function(){function n(){return(n=(0,r.Z)(a().mark((function n(){var t,r,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,d.w)(e);case 2:t=n.sent,r=t.wrappedIndexes,u=t.zhDictionary,F((function(){return(0,m.v)(r,u,100)}));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),o.createElement(c.Z,{title:x},o.createElement(i.Z,null,o.createElement("meta",{property:"robots",content:"noindex, follow"})),o.createElement("div",{className:"container margin-vert--lg"},o.createElement("h1",null,x),o.createElement("input",{type:"search",name:"q",className:A,"aria-label":"Search",onChange:b,value:h,autoComplete:"off",autoFocus:!0}),!D&&h&&o.createElement("div",null,o.createElement(g.Z,null)),k&&(k.length>0?o.createElement("p",null,E(1===k.length?_.Iz.count_documents_found:_.Iz.count_documents_found_plural,{count:k.length})):o.createElement("p",null,_.Iz.no_documents_were_found)),o.createElement("section",null,k&&k.map((function(e){return o.createElement(y,{key:e.document.i,searchResult:e})})))))}},44241:function(e,n,t){t.d(n,{v:function(){return l}});var r=t(67855),u=t(35850),a=t.n(u);function o(e,n){var t=[];return function e(u,a){if(0!==u.length){var o=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var s,c=function(e,n){var t=[];return function e(u,a){for(var o,s=0,c=!1,i=(0,r.Z)(n);!(o=i()).done;){var l=o.value;if(u.substr(0,l.length)===l){var h={missed:a.missed,term:a.term.concat({value:l})};u.length>l.length?e(u.substr(l.length),h):t.push(h),c=!0}else for(var f=l.length-1;f>s;f-=1){var p=l.substr(0,f);if(u.substr(0,f)===p){s=f;var d={missed:a.missed,term:a.term.concat({value:p,trailing:!0})};u.length>f?e(u.substr(f),d):t.push(d),c=!0;break}}}c||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&t.push(a))}(e,{missed:0,term:[]}),t.sort((function(e,n){var t=e.missed>0?1:0,r=n.missed>0?1:0;return t!==r?t-r:e.term.length-n.term.length})).map((function(e){return e.term}))}(o,n),i=(0,r.Z)(c);!(s=i()).done;){var l=s.value,h=a.concat.apply(a,l);e(u.slice(1),h)}else{var f=a.concat({value:o});e(u.slice(1),f)}}else t.push(a)}(e,[]),t}var s=t(39376);function c(e){return i(e).concat(i(e.filter((function(e){var n=e[e.length-1];return!n.trailing&&n.maybeTyping})),!0))}function i(e,n){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(n?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function l(e,n,t){return function(u,i){var l=function(e,n){if(1===n.length&&["ja","jp","th"].includes(n[0]))return a()[n[0]].tokenizer(e).map((function(e){return e.toString()}));var t=/[^-\s]+/g;return n.includes("zh")&&(t=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(t)||[]}(u,s.dK);if(0!==l.length){var h=function(e,n){var t=o(e,n);if(0===t.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,i=(0,r.Z)(t);!(u=i()).done;){var l=u.value;l[l.length-1].maybeTyping=!0}for(var h,f,p=[],d=(0,r.Z)(s.dK);!(h=d()).done;){var m=h.value;if("en"===m)s._k||p.unshift(a().stopWordFilter);else{var v=a()[m];v.stopWordFilter&&p.unshift(v.stopWordFilter)}}if(p.length>0){var D=function(e){return p.reduce((function(e,n){return e.filter((function(e){return n(e.value)}))}),e)};f=[];for(var F,g=[],_=(0,r.Z)(t);!(F=_()).done;){var E=F.value,A=D(E);f.push(A),A.length<E.length&&A.length>0&&g.push(A)}t.push.apply(t,g)}else f=t.slice();for(var C,k=[],w=(0,r.Z)(f);!(C=w()).done;){var y=C.value;if(y.length>2)for(var x=y.length-1;x>=0;x-=1)k.push(y.slice(0,x).concat(y.slice(x+1)))}return c(t).concat(c(k))}(l,n),f=[],p=function(){for(var n,u=d.value,a=u.term,o=u.tokens,s=function(){var u=n.value,s=u.documents,c=u.index,i=u.type;if(f.push.apply(f,c.query((function(e){for(var n,t=(0,r.Z)(a);!(n=t()).done;){var u=n.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,t).filter((function(e){return!f.some((function(n){return n.document.i.toString()===e.ref}))})).slice(0,t-f.length).map((function(n){var t=s.find((function(e){return e.i.toString()===n.ref}));return{document:t,type:i,page:0!==i&&e[0].documents.find((function(e){return e.i===t.p})),metadata:n.matchData.metadata,tokens:o,score:n.score}}))),f.length>=t)return{v:"break|search"}},c=(0,r.Z)(e);!(n=c()).done;){var i=s();if("object"==typeof i)return i.v}};e:for(var d,m=(0,r.Z)(h);!(d=m()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,n){e.index=n})),e.sort((function(n,t){var r=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index,u=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index;return-1===r&&(r=n.index),-1===u&&(u=t.index),r===u?0===n.type?-1:0===t.type?1:n.index-t.index:r-u}))}(f),function(e){e.forEach((function(n,t){t>0&&n.page&&e.some((function(e){return e.document===n.page}))&&(t<e.length-1&&e[t+1].page===n.page?n.isInterOfTree=!0:n.isLastOfTree=!0)}))}(f),i(f)}else i([])}}},98740:function(e,n,t){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}t.d(n,{X:function(){return r}})},85579:function(e,n,t){function r(e,n){for(var t=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[n]&&t.push.apply(t,a[n].position)}return t.sort((function(e,n){return e[0]-n[0]||n[1]-e[1]}))}t.d(n,{m:function(){return r}})},86092:function(e,n,t){t.d(n,{C:function(){return a}});var r=t(67855),u=t(98740);function a(e,n,t){for(var o,s=[],c=(0,r.Z)(n);!(o=c()).done;){var i=o.value,l=e.toLowerCase().indexOf(i);if(l>=0){l>0&&s.push(a(e.substr(0,l),n)),s.push("<mark>"+(0,u.X)(e.substr(l,i.length))+"</mark>");var h=l+i.length;h<e.length&&s.push(a(e.substr(h),n));break}}return 0===s.length?t?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):s.join("")}},53318:function(e,n,t){t.d(n,{o:function(){return c}});var r=t(98740),u=t(86092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var n=[],t=0,r=e;r.length>0;){var u=r.match(a);if(!u){n.push(r);break}u.index>0&&n.push(r.substr(0,u.index)),n.push(u[0]),t+=u.index+u[0].length,r=e.substr(t)}return n}var s=t(39376);function c(e,n,t,r){void 0===r&&(r=s.Hk);for(var u={chunkIndex:-1},a=i(e,n,t,0,0,u),o=a.slice(0,u.chunkIndex),c=a[u.chunkIndex],l=[c.html],h=a.slice(u.chunkIndex+1),f=c.textLength,p=0,d=0,m=!1,v=!1;f<r;)if((p<=d||0===h.length)&&o.length>0){var D=o.pop();f+D.textLength<=r?(l.unshift(D.html),p+=D.textLength,f+=D.textLength):(m=!0,o.length=0)}else{if(!(h.length>0))break;var F=h.shift();f+F.textLength<=r?(l.push(F.html),d+=F.textLength,f+=F.textLength):(v=!0,h.length=0)}return(m||o.length>0)&&l.unshift("\u2026"),(v||h.length>0)&&l.push("\u2026"),l.join("")}function i(e,n,t,a,s,c){var l=[],h=n[a],f=h[0],p=h[1];if(f<s)(a+=1)<n.length&&l.push.apply(l,i(e,n,t,a,s));else{f>s&&l.push.apply(l,o(e.substring(s,f)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),c&&(c.chunkIndex=l.length),l.push({html:(0,u.C)(e.substr(f,p),t,!0),textLength:p});var d=f+p;(a+=1)<n.length?l.push.apply(l,i(e,n,t,a,d)):d<e.length&&l.push.apply(l,o(e.substr(d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return l}},39376:function(e,n,t){t.d(n,{vc:function(){return s},rx:function(){return c},dK:function(){return a},_k:function(){return o},Hk:function(){return l},qo:function(){return i},Iz:function(){return h}});var r=t(35850),u=t.n(r);t(88465)(u()),t(72324).w(u()),t(93609)(u());var a=["en","zh"],o=!1,s=null,c="d4db5de5",i=8,l=50,h={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},72324:function(e,n,t){function r(e){var n=new RegExp("^[^"+e+"]+","u"),t=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(n,"").replace(t,"")}))}}function u(e,n){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),n&&(this.tokenizer=n)},n&&(e.zh.tokenizer=n),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}t.d(n,{w:function(){return u}})}}]);