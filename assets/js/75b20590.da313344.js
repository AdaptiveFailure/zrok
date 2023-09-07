"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:100},a="Open Source",p={unversionedId:"concepts/opensource",id:"concepts/opensource",title:"Open Source",description:"It's important to the zrok project that it remain free and open source software. The code is available on GitHub",source:"@site/../docs/concepts/opensource.md",sourceDirName:"concepts",slug:"/concepts/opensource",permalink:"/docs/concepts/opensource",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/concepts/opensource.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Sharing Websites and Files",permalink:"/docs/concepts/files"},next:{title:"Hosting",permalink:"/docs/concepts/hosting"}},c={},s=[{value:"Built on OpenZiti",id:"built-on-openziti",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"open-source"},"Open Source"),(0,r.kt)("p",null,"It's important to the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," project that it remain free and open source software. The code is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/zrok"},"GitHub"),"\nfor the world to use, inspect, and build upon!"),(0,r.kt)("p",null,"Check out the repository over on GitHub at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/zrok"},"https://github.com/openziti/zrok"),".  If you find ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," to be useful, and\nyou want to help spread the word of ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," give the project a star. It really does help get the word out about the\nproject."),(0,r.kt)("p",null,"The project also uses a very permissive license: Apache v2. We encourage people to fork the repo and use ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," for your own purposes how you see fit or contribute back to the project."),(0,r.kt)("h2",{id:"built-on-openziti"},"Built on OpenZiti"),(0,r.kt)("p",null,"The power of ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," really lies in ",(0,r.kt)("inlineCode",{parentName:"p"},"private")," sharing. It's increasingly clear that security needs to be a first-class\nmember of any organization. To enable ",(0,r.kt)("inlineCode",{parentName:"p"},"private")," sharing, ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," was built on top of another excellent open source project named OpenZiti. "),(0,r.kt)("p",null,"OpenZiti is a secure overlay network focusing on bringing zero trust to applications. It is the ",(0,r.kt)("strong",{parentName:"p"},"backbone")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok"),".\nIn fact, ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," proudly proclaims itself as an Ziti ",(0,r.kt)("em",{parentName:"p"},"native")," application."),(0,r.kt)("p",null,"If you are interested in learning more about OpenZiti head over to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openziti.io/docs/learn/introduction/"},"the docs"),", try the quickstart, and don't forget to star that project too. We couldn't build ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," without OpenZiti!"))}u.isMDXComponent=!0}}]);