"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3931],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8851:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={docId:"radio"},s="Radio",c={unversionedId:"components/radio",id:"components/radio",isDocsHomePage:!1,title:"Radio",description:"Badaso provides an input component in the form of a choice with a radio button, namely BadasoRadio. When generating CRUD, the container width for this component can be set in Optional Details with the format shown in the code below. To use radio, when creating a CRUD the items property of Optional Details is required.",source:"@site/docs/components/radio.md",sourceDirName:"components",slug:"/components/radio",permalink:"/components/radio",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/radio.md",tags:[],version:"current",frontMatter:{docId:"radio"},sidebar:"tutorialSidebar",previous:{title:"Password",permalink:"/components/password"},next:{title:"Relation",permalink:"/components/relation"}},p=[{value:"View: BadasoRadio",id:"view-badasoradio",children:[]},{value:"<code>props</code>",id:"props",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"radio"},"Radio"),(0,a.kt)("p",null,"Badaso provides an input component in the form of a choice with a radio button, namely BadasoRadio. When generating CRUD, the container width for this component can be set in Optional Details with the format shown in the code below. To use radio, when creating a CRUD the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," property of Optional Details is required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "size": "6", // 1-12 default 12\n    "items": [\n        {\n            "label": "This is label",\n            "value": "this_is_value"\n        }\n    ]\n}\n')),(0,a.kt)("h2",{id:"view-badasoradio"},"View: BadasoRadio"),(0,a.kt)("p",null,"The code below is a sample for using BadasoRadio in the Vue Template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-radio\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error"\n    :items="items">\n</badaso-radio>\n')),(0,a.kt)("h2",{id:"props"},(0,a.kt)("inlineCode",{parentName:"h2"},"props")),(0,a.kt)("p",null,"Below is a list of props that this component provides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Radio",\n},\nplaceholder: {\n    type: String,\n    default: "Radio",\n},\nvalue: {\n    type: String,\n    required: true,\n},\nitems: {\n    type: Array,\n    required: true,\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}u.isMDXComponent=!0}}]);