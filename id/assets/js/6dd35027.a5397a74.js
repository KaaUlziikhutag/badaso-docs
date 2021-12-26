"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7254],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2528:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],u={docId:"time",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/time.md"},p="Time",c={unversionedId:"components/time",id:"components/time",isDocsHomePage:!1,title:"Time",description:"Badaso menyediakan sebuah komponen input berupa waktu(jam, menit, detik), yaitu BadasoTime. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/components/time.md",sourceDirName:"components",slug:"/components/time",permalink:"/id/components/time",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/time.md",tags:[],version:"current",frontMatter:{docId:"time",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/time.md"},sidebar:"tutorialSidebar",previous:{title:"Text Area",permalink:"/id/components/textarea"},next:{title:"Upload File Multiple",permalink:"/id/components/upload-file-multiple"}},l=[{value:"View: BadasoTime",id:"view-badasotime",children:[]},{value:"<code>props</code>",id:"props",children:[]}],d={toc:l};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"time"},"Time"),(0,o.kt)("p",null,"Badaso menyediakan sebuah komponen input berupa waktu(jam, menit, detik), yaitu BadasoTime. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": "6" // 1-12 default 12\n}\n')),(0,o.kt)("h2",{id:"view-badasotime"},"View: BadasoTime"),(0,o.kt)("p",null,"Kode di bawah merupakan sampel untuk penggunaan BadasoTime pada Vue Template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-time\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error">\n</badaso-time>\n')),(0,o.kt)("h2",{id:"props"},(0,o.kt)("inlineCode",{parentName:"h2"},"props")),(0,o.kt)("p",null,"Berikut merupakan daftar props yang disediakan komponen ini."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Time",\n},\nplaceholder: {\n    type: String,\n    default: "Time",\n},\nvalue: {\n    type: String,\n    required: true,\n    default: "",\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}s.isMDXComponent=!0}}]);