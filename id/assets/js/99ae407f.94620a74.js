"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4522],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,g=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7802:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],u={docId:"routing",sidebar_position:2,custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/routing.md"},l="Routing",c={unversionedId:"core-concept/routing",id:"core-concept/routing",isDocsHomePage:!1,title:"Routing",description:"Pada halaman ini dijelaskan mengenai routing frontend dan backend untuk CRUD yang di-generate.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/core-concept/routing.md",sourceDirName:"core-concept",slug:"/core-concept/routing",permalink:"/id/core-concept/routing",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/routing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{docId:"routing",sidebar_position:2,custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/routing.md"},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/id/core-concept/storage"},next:{title:"User, Role And Permission",permalink:"/id/core-concept/role-and-permission"}},d=[{value:"CRUD Generated Routes",id:"crud-generated-routes",children:[{value:"Backend",id:"backend",children:[]},{value:"Frontend",id:"frontend",children:[]}]}],p={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"routing"},"Routing"),(0,i.kt)("p",null,"Pada halaman ini dijelaskan mengenai routing frontend dan backend untuk CRUD yang di-generate."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".env")," configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title=".env"',title:'".env"'},"MIX_API_ROUTE_PREFIX=\nMIX_ADMIN_PANEL_ROUTE_PREFIX=\n")),(0,i.kt)("h2",{id:"crud-generated-routes"},"CRUD Generated Routes"),(0,i.kt)("h3",{id:"backend"},"Backend"),(0,i.kt)("p",null,"Berikut ini merupakan tipe URL API yang dipanggil untuk Backend."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browse/Index (List) : GET")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add/Create : POST")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/add\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read/Detail : GET")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/read\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edit/Update : PUT")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/edit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delete/Remove : DELETE")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/delete\n")),(0,i.kt)("h3",{id:"frontend"},"Frontend"),(0,i.kt)("p",null,"Berikut ini merupakan tipe URL API yang dipanggil untuk Frontend."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browse/Index (List)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add/Create")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/add\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read/Detail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/detail\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edit/Update")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/edit\n")))}s.isMDXComponent=!0}}]);