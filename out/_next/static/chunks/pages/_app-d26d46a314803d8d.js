(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1647)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),s=n(1003),u=n(7795),i=n(4465),a=n(2692),c=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,o){if(s.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function x(e){return"string"==typeof e?e:u.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let n,o;let{href:u,as:h,children:m,prefetch:b,passHref:y,replace:j,shallow:g,scroll:_,locale:k,onClick:w,onMouseEnter:C,onTouchStart:M,legacyBehavior:O=!1}=e,E=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,O&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let P=!1!==b,N=l.default.useContext(a.RouterContext),T=l.default.useContext(c.AppRouterContext),L=null!=N?N:T,S=!N,{href:I,as:R}=l.default.useMemo(()=>{if(!N){let e=x(u);return{href:e,as:h?x(h):e}}let[t,n]=s.resolveHref(N,u,!0);return{href:t,as:h?s.resolveHref(N,h):n||t}},[N,u,h]),U=l.default.useRef(I),B=l.default.useRef(R);O&&(o=l.default.Children.only(n));let A=O?o&&"object"==typeof o&&o.ref:t,[D,H,K]=f.useIntersection({rootMargin:"200px"}),F=l.default.useCallback(e=>{(B.current!==R||U.current!==I)&&(K(),B.current=R,U.current=I),D(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[R,A,I,K,D]);l.default.useEffect(()=>{L&&H&&P&&v(L,I,R,{locale:k})},[R,I,H,k,P,null==N?void 0:N.locale,L]);let X={ref:F,onClick(e){O||"function"!=typeof w||w(e),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,o,r,u,i,a,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:a,scroll:i}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(h):h()}(e,L,I,R,j,g,_,k,S,P)},onMouseEnter(e){O||"function"!=typeof C||C(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(P||!S)&&v(L,I,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof M||M(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(P||!S)&&v(L,I,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||y||"a"===o.type&&!("href"in o.props)){let Z=void 0!==k?k:null==N?void 0:N.locale,q=(null==N?void 0:N.isLocaleDomain)&&d.getDomainLocale(R,Z,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);X.href=q||p.addBasePath(i.addLocale(R,Z,null==N?void 0:N.defaultLocale))}return O?l.default.cloneElement(o,X):l.default.createElement("a",Object.assign({},E,X),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!l,[c,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!a&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=u.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=s.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},u.push(n),s.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),s.delete(o);let t=u.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&u.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,a,n,t,c]);let h=o.useCallback(()=>{f(!1)},[]);return[p,c,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,s=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1647:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(5893);n(4744);var r=n(1664),l=n.n(r),s=n(7294);function u(e){let{subMenuClose:t}=e;return(0,o.jsxs)("div",{className:"flex md:hidden flex-col items-end py-3 px-5 space-y-3 bg-stone-400",children:[(0,o.jsx)(l(),{className:" hover:underline",href:"/post",onClick:t,children:"POST"}),(0,o.jsx)(l(),{className:"hover:underline",href:"/about",onClick:t,children:"ABOUT"})]})}function i(){let[e,t]=(0,s.useState)({show:!1}),n=()=>{t({show:!e.show})},r=()=>{console.log("close"),t({show:!1})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("nav",{className:" flex flex-row space-x-10 justify-between py-3 px-5 md:py-6 md:px-10 2xl:px-20 border-b border-black",children:[(0,o.jsx)("div",{className:" flex text-2xl font-bold items-center",children:(0,o.jsx)(l(),{href:"/",onClick:r,children:"Hunman"})}),(0,o.jsxs)("div",{className:"hidden md:flex md:visible flex-row space-x-5 justify-around items-center",children:[(0,o.jsx)(l(),{href:"/post",onClick:r,children:"POST"}),(0,o.jsx)(l(),{href:"/about",onClick:r,children:"ABOUT"})]}),(0,o.jsx)("div",{onClick:n,className:"flex visible md:hidden items-center justify-center hover:cursor-pointer",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})]}),e.show?(0,o.jsx)(u,{subMenuClose:r}):(0,o.jsx)(o.Fragment,{})]})}function a(e){let{children:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" text-black min-h-screen bg-stone-300",children:[(0,o.jsx)(i,{}),(0,o.jsx)("main",{children:t})]})})}var c=function(e){let{Component:t,pageProps:n}=e;return(0,o.jsx)(a,{children:(0,o.jsx)(t,{...n})})}},4744:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);