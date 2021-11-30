"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[29514,46551,46103],{85642:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(67294),a=n(3905),u=n(46291),o=n(11022),i=n(86010),c=n(89521),l=n(93783),s=n(55537),d=n(87462),m=function(e){return r.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(95999),f=n(63366),h=n(39960),v=n(13919),g=n(90541),F="menuLinkText_1J2g",D=["items"],b=["item"],E=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],k=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},_=(0,r.memo)((function(e){var t=e.items,n=(0,f.Z)(e,D);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(A,(0,d.Z)({key:t,item:e},n))})))}));function A(e){var t=e.item,n=(0,f.Z)(e,b);return"category"===t.type?0===t.items.length?null:r.createElement(Z,(0,d.Z)({item:t},n)):r.createElement(x,(0,d.Z)({item:t},n))}function Z(e){var t,n=e.item,a=e.onItemClick,u=e.activePath,o=e.level,l=(0,f.Z)(e,E),s=n.items,m=n.label,p=n.collapsible,h=n.className,v=k(n,u),g=(0,c.uR)({initialState:function(){return!!p&&(!v&&n.collapsed)}}),D=g.collapsed,b=g.setCollapsed,C=g.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,u=(0,c.D9)(t);(0,r.useEffect)((function(){t&&!u&&n&&a(!1)}),[t,u,n,a])}({isActive:v,collapsed:D,setCollapsed:b}),r.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":D},h)},r.createElement("a",(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&v},t[F]=!p,t)),onClick:p?function(e){e.preventDefault(),C()}:void 0,href:p?"#":void 0},l),m),r.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:D},r.createElement(_,{items:s,tabIndex:D?-1:0,onItemClick:a,activePath:u,level:o+1})))}function x(e){var t=e.item,n=e.onItemClick,a=e.activePath,u=e.level,o=(0,f.Z)(e,C),l=t.href,s=t.label,m=t.className,p=k(t,a);return r.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(u),"menu__list-item",m),key:s},r.createElement(h.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:l},(0,v.Z)(l)&&{onClick:n},o),(0,v.Z)(l)?s:r.createElement("span",null,s,r.createElement(g.Z,null))))}var w="sidebar_15mo",y="sidebarWithHideableNavbar_267A",I="sidebarHidden_2kNb",N="sidebarLogo_3h0W",S="menu_Bmed",B="menuWithAnnouncementBar_2WvA",T="collapseSidebarButton_1CGd",M="collapseSidebarButtonIcon_3E-R";function L(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",T),onClick:t},r.createElement(m,{className:M}))}function z(e){var t,n,a=e.path,u=e.sidebar,o=e.onCollapse,l=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return r.createElement("div",{className:(0,i.Z)(w,(t={},t[y]=p,t[I]=l,t))},p&&r.createElement(s.Z,{tabIndex:-1,className:N}),r.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",S,(n={},n[B]=d,n))},r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(_,{items:u,activePath:a,level:1}))),f&&r.createElement(L,{onClick:o}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(_,{items:n,activePath:a,onItemClick:function(){return t()},level:1}))};function H(e){return r.createElement(c.Cv,{component:R,props:e})}var P=r.memo(z),W=r.memo(H);function j(e){var t=(0,l.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(P,e),a&&r.createElement(W,e))}var U=n(67707),O=n(84204),Q="backToTopButton_35hR",X="backToTopButtonShow_18ls";function q(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var K=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],u=(0,r.useRef)(!1),o=q(),l=o.smoothScrollTop,s=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(u.current)u.current=!1;else{var o=n<r;if(o||s(),n<300)a(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&a(!0)}else a(!1)}})),(0,c.SL)((function(e){e.location.hash&&(u.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,Q,(e={},e[X]=n,e)),type:"button",onClick:function(){return l()}})},V=n(76775),G={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},J=n(12859);function Y(e){var t,n,u,l=e.currentDocRoute,s=e.versionMetadata,d=e.children,f=s.pluginId,h=s.version,v=l.sidebar,g=v?s.docsSidebars[v]:void 0,F=(0,r.useState)(!1),D=F[0],b=F[1],E=(0,r.useState)(!1),C=E[0],k=E[1],_=(0,r.useCallback)((function(){C&&k(!1),b((function(e){return!e}))}),[C]);return r.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,c.os)(f,h)}},r.createElement("div",{className:G.docPage},r.createElement(K,null),g&&r.createElement("aside",{className:(0,i.Z)(G.docSidebarContainer,(t={},t[G.docSidebarContainerHidden]=D,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(G.docSidebarContainer)&&D&&k(!0)}},r.createElement(j,{key:v,sidebar:g,path:l.path,onCollapse:_,isHidden:C}),C&&r.createElement("div",{className:G.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},r.createElement(m,{className:G.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,i.Z)(G.docMainContainer,(n={},n[G.docMainContainerEnhanced]=D||!g,n))},r.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",G.docItemWrapper,(u={},u[G.docItemWrapperEnhanced]=D,u))},r.createElement(a.Zo,{components:U.Z},d)))))}var $=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,V.LX)(a.pathname,e)}));return o?r.createElement(r.Fragment,null,r.createElement(J.Z,null,r.createElement("html",{className:n.className})),r.createElement(Y,{currentDocRoute:o,versionMetadata:n},(0,u.Z)(t,{versionMetadata:n}))):r.createElement(O.default,null)}},48219:function(e,t,n){n.d(t,{O:function(){return F}});var r=n(87462),a=n(63366),u=n(67294),o=n(86010),i=n(39960),c=n(44996),l=n(76775),s=n(90541),d=n(13919),m=n(89521),p=n(47412),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"],h=["className","isDropdownItem"],v=["className","isDropdownItem"],g=["mobile","position"];function F(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,p=e.to,h=e.href,v=e.label,g=e.activeClassName,F=void 0===g?"":g,D=e.prependBaseUrlToHref,b=e["data-language-prefix"],E=(0,a.Z)(e,f),C=(0,c.Z)(p),k=(0,c.Z)(n),_=(0,c.Z)(h,{forcePrependBaseUrl:!0}),A=v&&h&&!(0,d.Z)(h),Z="dropdown__link--active"===F,x=(0,l.TH)();if(b){h="pathname://"+b+x.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+x.hash,E.autoAddBaseUrl=!1,E.target="_self";var w=["java","dotnet","python"].some((function(e){return x.pathname.startsWith("/"+e)}));(x.pathname.startsWith(b)&&w&&b.length>1||1===b.length&&!w)&&(E.className+=" "+F)}return u.createElement(i.Z,(0,r.Z)({},h?{href:D?_:h}:Object.assign({isNavLink:!0,activeClassName:null!=(t=E.className)&&t.includes(F)?"":F,to:C},n||o?{isActive:function(e,t){return o?(0,m.Fx)(o,t.pathname):t.pathname.startsWith(k)}}:null),E),A?u.createElement("span",null,v,u.createElement(s.Z,Z&&{width:12,height:12})):v)}function D(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,a.Z)(e,h),l=u.createElement(F,(0,r.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?u.createElement("li",null,l):l}function b(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,v));return u.createElement("li",{className:"menu__list-item"},u.createElement(F,(0,r.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,i=(e.position,(0,a.Z)(e,g)),c=o?b:D;return u.createElement(c,(0,r.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,p.E)(o)}))}},47412:function(e,t,n){n.d(t,{E:function(){return d},Z:function(){return m}});var r=n(63366),a=n(67294),u=n(48219),o=n(23154),i=n(55413),c=n(51093),l=["type"],s={default:function(){return u.Z},localeDropdown:function(){return i.Z},search:function(){return c.Z},dropdown:function(){return o.Z},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(87548).Z}};var d=function(e){return e?"menu__link--active":"navbar__link--active"};function m(e){var t=e.type,n=(0,r.Z)(e,l),u=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=s[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(u);return a.createElement(o,n)}},84204:function(e,t,n){n.r(t);var r=n(67294),a=n(11022),u=n(52263);t.default=function(){var e=(0,u.Z)().siteConfig.customFields.languageName;return r.createElement(a.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},"This page is not available for ",e,"."),r.createElement("p",null,"We could not find what you were looking for.")))))}},11359:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(78695),u="loadingRing_3atr";function o(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(u,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return s}});var r=n(67855),a=n(15861),u=n(87757),o=n.n(u),i=n(35850),c=n.n(i),l=n(39376);function s(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function e(t){var n,a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+l.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:c().Index.load(r)}})),u=n.reduce((function(e,t){for(var n,a=(0,r.Z)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(u)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},15779:function(e,t,n){n.d(t,{Z:function(){return Q}});var r=n(39376),a=n(67855),u=n(15861),o=n(87757),i=n.n(o),c=n(67294),l=n(78695),s=n(52263),d=n(10412),m=n(76775),p=n(3551),f=n(44241),h=n(86092),v=n(53318),g=n(85579),F="searchBar_2moK",D="dropdownMenu_17SC",b="suggestion_1kAZ",E="cursor_6rPN",C="hitTree_2sUa",k="hitIcon_3jP2",_="hitPath_3Lax",A="noResultsIcon_1rmk",Z="hitFooter_1JML",x="hitWrapper_4Hzp",w="hitTitle_2AMl",y="hitAction_2kg3",I="noResults_1vI5",N="searchBarContainer_2P1H",S="searchBarLoadingRing_1FtX",B="searchIndexLoading_1eRR",T="input_1tay",M="hint_1WuO",L="suggestions_1cWc",z="dataset_3Xc2",R="empty_2isC";function H(e){var t=e.document,n=e.type,r=e.page,a=e.metadata,u=e.tokens,o=e.isInterOfTree,i=e.isLastOfTree,c=0===n,l=1===n,s=[];o?s.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):i&&s.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var d=s.map((function(e){return'<span class="'+C+'">'+e+"</span>"})),m='<span class="'+k+'">'+(c?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+w+'">'+(0,v.o)(t.t,(0,g.m)(a,"t"),u)+"</span>"];return c||p.push('<span class="'+_+'">'+(0,h.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>"),[].concat(d,[m,'<span class="'+x+'">'],p,["</span>",'<span class="'+y+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function P(){return'<span class="'+I+'"><span class="'+A+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var W=n(11359);function j(){return U.apply(this,arguments)}function U(){return(U=(0,u.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(24485),n.e(90213)]).then(n.t.bind(n,24485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var Q=function(e){var t,n=e.handleSearchBarToggle,o=(0,s.Z)().siteConfig.baseUrl,h=(0,m.k6)(),v=(0,m.TH)(),g=(0,c.useRef)(null),C=(0,c.useRef)("empty"),k=(0,c.useRef)(!1),_=(0,c.useState)(!1),A=_[0],x=_[1],w=(0,c.useState)(!1),y=w[0],I=w[1],U=(0,c.useCallback)((0,u.Z)(i().mark((function e(){var t,n,u,c,l,s,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===C.current){e.next=2;break}return e.abrupt("return");case 2:return C.current="loading",x(!0),e.next=6,Promise.all([(0,p.w)(o),j()]);case 6:t=e.sent,n=t[0],u=n.wrappedIndexes,c=n.zhDictionary,l=t[1],s=l(g.current,{hint:!1,autoselect:!0,cssClasses:{root:F,noPrefix:!0,dropdownMenu:D,input:T,hint:M,suggestions:L,suggestion:b,cursor:E,dataset:z,empty:R}},[{source:(0,f.v)(u,c,r.qo),templates:{suggestion:H,empty:P,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=o+"search?q="+encodeURIComponent(t);n.href=a,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),s.autocomplete.close(),h.push(a))}));var u=document.createElement("div");return u.className=Z,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,o=n.h,i=t.tokens,c=u;if(r.vc&&i.length>0){for(var l,s=new URLSearchParams,d=(0,a.Z)(i);!(l=d()).done;){var m=l.value;s.append(O,m)}c+="?"+s.toString()}o&&(c+=o),h.push(c)})),C.current="done",x(!1),k.current&&((d=g.current).value&&s.autocomplete.open(),d.focus());case 15:case"end":return e.stop()}}),e)}))),[o,h]);(0,c.useEffect)((function(){if(r.vc){var e=d.Z.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[v.search]);var Q=(0,c.useCallback)((function(){k.current=!0,U(),null==n||n(!0)}),[n,U]),X=(0,c.useCallback)((function(){null==n||n(!1)}),[n]),q=(0,c.useCallback)((function(){U()}),[U]),K=(0,c.useCallback)((function(e){e.target.value&&I(!0)}),[]);return c.createElement("div",{className:(0,l.Z)("navbar__search",N,(t={},t[B]=A&&y,t))},c.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:q,onFocus:Q,onBlur:X,onChange:K,ref:g}),c.createElement(W.Z,{className:S}))}},44241:function(e,t,n){n.d(t,{v:function(){return s}});var r=n(67855),a=n(35850),u=n.n(a);function o(e,t){var n=[];return function e(a,u){if(0!==a.length){var o=a[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var i,c=function(e,t){var n=[];return function e(a,u){for(var o,i=0,c=!1,l=(0,r.Z)(t);!(o=l()).done;){var s=o.value;if(a.substr(0,s.length)===s){var d={missed:u.missed,term:u.term.concat({value:s})};a.length>s.length?e(a.substr(s.length),d):n.push(d),c=!0}else for(var m=s.length-1;m>i;m-=1){var p=s.substr(0,m);if(a.substr(0,m)===p){i=m;var f={missed:u.missed,term:u.term.concat({value:p,trailing:!0})};a.length>m?e(a.substr(m),f):n.push(f),c=!0;break}}}c||(a.length>0?e(a.substr(1),{missed:u.missed+1,term:u.term}):u.term.length>0&&n.push(u))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(o,t),l=(0,r.Z)(c);!(i=l()).done;){var s=i.value,d=u.concat.apply(u,s);e(a.slice(1),d)}else{var m=u.concat({value:o});e(a.slice(1),m)}}else n.push(u)}(e,[]),n}var i=n(39376);function c(e){return l(e).concat(l(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function l(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:u().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?u().Query.wildcard.TRAILING:u().Query.wildcard.NONE}}))}}))}function s(e,t,n){return function(a,l){var s=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(a,i.dK);if(0!==s.length){var d=function(e,t){var n=o(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:u().Query.presence.REQUIRED,wildcard:u().Query.wildcard.LEADING|u().Query.wildcard.TRAILING}}))}];for(var a,l=(0,r.Z)(n);!(a=l()).done;){var s=a.value;s[s.length-1].maybeTyping=!0}for(var d,m,p=[],f=(0,r.Z)(i.dK);!(d=f()).done;){var h=d.value;if("en"===h)i._k||p.unshift(u().stopWordFilter);else{var v=u()[h];v.stopWordFilter&&p.unshift(v.stopWordFilter)}}if(p.length>0){var g=function(e){return p.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};m=[];for(var F,D=[],b=(0,r.Z)(n);!(F=b()).done;){var E=F.value,C=g(E);m.push(C),C.length<E.length&&C.length>0&&D.push(C)}n.push.apply(n,D)}else m=n.slice();for(var k,_=[],A=(0,r.Z)(m);!(k=A()).done;){var Z=k.value;if(Z.length>2)for(var x=Z.length-1;x>=0;x-=1)_.push(Z.slice(0,x).concat(Z.slice(x+1)))}return c(n).concat(c(_))}(s,t),m=[],p=function(){for(var t,a=f.value,u=a.term,o=a.tokens,i=function(){var a=t.value,i=a.documents,c=a.index,l=a.type;if(m.push.apply(m,c.query((function(e){for(var t,n=(0,r.Z)(u);!(t=n()).done;){var a=t.value;e.term(a.value,{wildcard:a.wildcard,presence:a.presence})}})).slice(0,n).filter((function(e){return!m.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-m.length).map((function(t){var n=i.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:l,page:0!==l&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:o,score:t.score}}))),m.length>=n)return{v:"break|search"}},c=(0,r.Z)(e);!(t=c()).done;){var l=i();if("object"==typeof l)return l.v}};e:for(var f,h=(0,r.Z)(d);!(f=h()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,a=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(m),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(m),l(m)}else l([])}}},98740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},85579:function(e,t,n){function r(e,t){for(var n=[],r=0,a=Object.values(e);r<a.length;r++){var u=a[r];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},86092:function(e,t,n){n.d(t,{C:function(){return u}});var r=n(67855),a=n(98740);function u(e,t,n){for(var o,i=[],c=(0,r.Z)(t);!(o=c()).done;){var l=o.value,s=e.toLowerCase().indexOf(l);if(s>=0){s>0&&i.push(u(e.substr(0,s),t)),i.push("<mark>"+(0,a.X)(e.substr(s,l.length))+"</mark>");var d=s+l.length;d<e.length&&i.push(u(e.substr(d),t));break}}return 0===i.length?n?"<mark>"+(0,a.X)(e)+"</mark>":(0,a.X)(e):i.join("")}},53318:function(e,t,n){n.d(t,{o:function(){return c}});var r=n(98740),a=n(86092),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var t=[],n=0,r=e;r.length>0;){var a=r.match(u);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var i=n(39376);function c(e,t,n,r){void 0===r&&(r=i.Hk);for(var a={chunkIndex:-1},u=l(e,t,n,0,0,a),o=u.slice(0,a.chunkIndex),c=u[a.chunkIndex],s=[c.html],d=u.slice(a.chunkIndex+1),m=c.textLength,p=0,f=0,h=!1,v=!1;m<r;)if((p<=f||0===d.length)&&o.length>0){var g=o.pop();m+g.textLength<=r?(s.unshift(g.html),p+=g.textLength,m+=g.textLength):(h=!0,o.length=0)}else{if(!(d.length>0))break;var F=d.shift();m+F.textLength<=r?(s.push(F.html),f+=F.textLength,m+=F.textLength):(v=!0,d.length=0)}return(h||o.length>0)&&s.unshift("\u2026"),(v||d.length>0)&&s.push("\u2026"),s.join("")}function l(e,t,n,u,i,c){var s=[],d=t[u],m=d[0],p=d[1];if(m<i)(u+=1)<t.length&&s.push.apply(s,l(e,t,n,u,i));else{m>i&&s.push.apply(s,o(e.substring(i,m)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),c&&(c.chunkIndex=s.length),s.push({html:(0,a.C)(e.substr(m,p),n,!0),textLength:p});var f=m+p;(u+=1)<t.length?s.push.apply(s,l(e,t,n,u,f)):f<e.length&&s.push.apply(s,o(e.substr(f)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return s}},39376:function(e,t,n){n.d(t,{vc:function(){return i},rx:function(){return c},dK:function(){return u},_k:function(){return o},Hk:function(){return s},qo:function(){return l},Iz:function(){return d}});var r=n(35850),a=n.n(r);n(88465)(a()),n(72324).w(a()),n(93609)(a());var u=["en","zh"],o=!1,i=null,c="d4db5de5",l=8,s=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},72324:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function a(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return a}})}}]);