"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[653],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return t?n.createElement(h,o(o({ref:r},u),{},{components:t})):n.createElement(h,o({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2971:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const s={sidebar_position:10},o="Shares - Reserved",i={unversionedId:"core-features/sharing-reserved",id:"core-features/sharing-reserved",title:"Shares - Reserved",description:"zrok was built to share and access digital resources. A reserved share allows the user to have a reliable,",source:"@site/../docs/core-features/sharing-reserved.md",sourceDirName:"core-features",slug:"/core-features/sharing-reserved",permalink:"/docs/core-features/sharing-reserved",draft:!1,editUrl:"https://github.com/openziti/zrok/tree/main/../docs/core-features/sharing-reserved.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Shares - Public",permalink:"/docs/core-features/sharing-public"},next:{title:"File Sharing",permalink:"/docs/core-features/files"}},c={},l=[],u={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shares---reserved"},"Shares - Reserved"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zrok")," was built to share and access digital resources. A ",(0,a.kt)("inlineCode",{parentName:"p"},"reserved")," share allows the user to have a reliable,\npublic, persistent shared url. (the share name not ephemeral, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"reserved"),"). This means that the share\nwill be able to be used and regardless of how many times the resource is shared. This is useful when the\nurl must be known. "),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"zrok reserve")," command to create a reserved share."))}p.isMDXComponent=!0}}]);