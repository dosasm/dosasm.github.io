"use strict";(self.webpackChunkdosasm=self.webpackChunkdosasm||[]).push([[9671],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),l=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=l(t.components);return r.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=l(a),d=n,h=c["".concat(m,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(h,o(o({ref:e},p),{},{components:a})):r.createElement(h,o({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},20426:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={sidebar_position:1},m="DosAsm",l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"DosAsm",description:"DosAsm\u8bd5\u56fe\u6574\u5408DOS\u73af\u5883\u4e0b\u6c47\u7f16\u8bed\u8a00\u5f00\u53d1\u7684\u5de5\u5177\u8bf4\u660e\u548c\u53c2\u8003\u8d44\u6599\uff0c\u4ee5\u4e0b\u662f\u4e3b\u8981\u9879\u76ee",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/dosasm/dosasm/edit/docusaurus/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"MASM/TASM",permalink:"/docs/tutorial-masm-tasm/vsce-basic"}},p=[{value:"DOSASM",id:"dosasm-1",children:[]},{value:"DOSRUN",id:"dosrun",children:[]},{value:"\u5176\u4ed6\u5de5\u5177",id:"\u5176\u4ed6\u5de5\u5177",children:[]},{value:"\u6765\u6e90\u4e0e\u7248\u6743\u76f8\u5173",id:"\u6765\u6e90\u4e0e\u7248\u6743\u76f8\u5173",children:[]},{value:"\u7ef4\u62a4",id:"\u7ef4\u62a4",children:[]},{value:"\u611f\u8c22",id:"\u611f\u8c22",children:[]}],u={toc:p};function c(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dosasm"},"DosAsm"),(0,i.kt)("p",null,"DosAsm\u8bd5\u56fe\u6574\u5408DOS\u73af\u5883\u4e0b\u6c47\u7f16\u8bed\u8a00\u5f00\u53d1\u7684\u5de5\u5177\u8bf4\u660e\u548c\u53c2\u8003\u8d44\u6599\uff0c\u4ee5\u4e0b\u662f\u4e3b\u8981\u9879\u76ee"),(0,i.kt)("h2",{id:"dosasm-1"},"DOSASM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dosasm/dosasm"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-dosasm%2Fdosasm-lightgrey?logo=github",alt:"in github"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dosasm/dosasm"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-dosasm%2Fdosasm-red?logo=gitee",alt:"in gitee"}))),(0,i.kt)("p",null,"\u8be5\u9879\u76ee\u4e3a\u672cpages\u9875\u7684\u6e90\u7801\u7f51\u7ad9\uff0c\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"docusaurus"),"\u6784\u5efa\u3002\u9879\u76ee\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/notes-njupt/%E6%80%BB%E8%A7%88"},"\u300a\u5fae\u578b\u8ba1\u7b97\u673a\u539f\u7406\u53ca\u63a5\u53e3\u6280\u672f\u300b\u8bfe\u7a0b\u7b14\u8bb0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference"},"\u5173\u4e8eDOS\u7cfb\u7edf\u3001\u6c47\u7f16\u8bed\u8a00\u7684\u4e00\u4e9b\u53c2\u8003")),(0,i.kt)("li",{parentName:"ul"},"DOSRUN\u7b49\u5de5\u5177\u7684\u53c2\u8003\u6587\u6863")),(0,i.kt)("h2",{id:"dosrun"},"DOSRUN"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=xsro.masm-tasm"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-xsro.masm--tasm-blue?logo=visual-studio-code",alt:"in market"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://dosasm.github.io/dosrun"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-reactApp-blue?logo=react",alt:"dosrun playGround"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dosasm/dosrun"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-dosasm%2Fdosrun-lightgrey?logo=github",alt:"in github"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dosasm/dosrun"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-dosasm%2Fdosrun-red?logo=gitee",alt:"in gitee"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DOSRUN"),"\u63d0\u4f9b\u4e00\u7cfb\u5217\u5728\u73b0\u4ee3\u8ba1\u7b97\u673a\u4e2d\u8fd0\u884cDOS\u6a21\u62df\u5668\u5b9e\u73b0\u6c47\u7f16\u8bed\u8a00\u5f00\u53d1\u7684\u5de5\u5177\uff0c\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u9879\u76ee\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=xsro.masm-tasm"},"MASM/TASM"),": VSCode\u63d2\u4ef6\u5b9e\u73b0DOS\u73af\u5883\u6a21\u62df\u5668\u7684\u8c03\u7528\u6765\u5f00\u53d1\u6c47\u7f16\u7b49\u8bed\u8a00",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u53d7\u5230",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=kaixa.masm-code"},"MASM-Code"),"\u7684\u542f\u53d1\uff0c\u975e\u5e38\u611f\u8c22\u539f\u4f5c\u8005"),(0,i.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u73b0\u5728\u5728",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dosasm/dosrun/tree/main/extension"},"extension"),"\u76ee\u5f55\u4e0b\u7ef4\u62a4"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dosasm.github.io/dosrun"},"PlayGround"),": \u4f7f\u7528react\u6784\u5efa\u7684\u5728\u7ebf\u7f16\u8bd1\u8fd0\u884c\u8c03\u8bd5\u6c47\u7f16\u4ee3\u7801\u7684\u5728\u7ebfwebApp",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6258\u7ba1\u5728github pages: ",(0,i.kt)("a",{parentName:"li",href:"https://dosasm.github.io/dosrun"},"https://dosasm.github.io/dosrun"),"\u548c gitee pages: ",(0,i.kt)("a",{parentName:"li",href:"https://dosasm.gitee.io/dosrun"},"https://dosasm.gitee.io/dosrun")),(0,i.kt)("li",{parentName:"ul"},"\u5728\u76ee\u5f55",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dosasm/dosrun/tree/main/react-app"},"react-app"),"\u4e0b\u7ef4\u62a4")))),(0,i.kt)("h2",{id:"\u5176\u4ed6\u5de5\u5177"},"\u5176\u4ed6\u5de5\u5177"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6c47\u7f16\u8bed\u8a00\u7684\u4e00\u4e9b\u4ee3\u7801",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitee.com/dosasm/CLTASM"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-dosasm%2FCLTASM-red?logo=gitee",alt:"in gitee"}))))),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7VSCode\u7684tasks\u6765\u914d\u7f6e\u6c47\u7f16\u5f00\u53d1\u73af\u5883\u7684\u65b9\u6cd5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/xsro/VSC-ASMtasks"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-xsro%2FVSC--ASMtasks-lightgrey?logo=github",alt:"in github"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitee.com/dosasm/VSC-ASMtasks"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-dosasm%2FVSC--ASMtasks-red?logo=gitee",alt:"in gitee"})))))),(0,i.kt)("h2",{id:"\u6765\u6e90\u4e0e\u7248\u6743\u76f8\u5173"},"\u6765\u6e90\u4e0e\u7248\u6743\u76f8\u5173"),(0,i.kt)("p",null,"\u5185\u5bb9\u53ef\u80fd\u5f88\u591a\u6574\u7406\u81ea\u7f51\u7edc\u548c\u8bfe\u5802\uff0c\u5982\u679c\u6d89\u53ca\u4fb5\u6743\uff0c\u8bf7\u8054\u7cfb\u5220\u9664\u3002"),(0,i.kt)("h2",{id:"\u7ef4\u62a4"},"\u7ef4\u62a4"),(0,i.kt)("p",null,"\u8be5\u7ec4\u7ec7\u76ee\u524d\u4e3b\u8981\u7531",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/xsro"},"\u9648\u7559\u57ce\u4e0b"),"(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xsro"},"xsro"),")\u7ef4\u62a4\uff0c\n\u76ee\u524d\u5728\u7ee7\u7eed\u5b66\u4e60\u4ee5\u53ca\u5bfb\u627e\u8bfb\u7814\u673a\u4f1a\u3002\n\u9879\u76ee\u82b1\u8d39\u4e86\u592a\u591a\u5927\u5b66\u65f6\u5149\uff0c\u5b66\u5230\u4e86\u4e5f\u9519\u8fc7\u4e86\u3002"),(0,i.kt)("p",null,"\u90ae\u7bb1: ",(0,i.kt)("a",{parentName:"p",href:"mailto:xsro@foxmail.com"},"xsro@foxmail.com")),(0,i.kt)("h2",{id:"\u611f\u8c22"},"\u611f\u8c22"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Thanks to my teacher ",(0,i.kt)("em",{parentName:"li"},"Han"),"."),(0,i.kt)("li",{parentName:"ul"},"inspired by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Woodykaixa"},"Woodykaixa"),"'s ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Woodykaixa/masm-code"},"masm-code")),(0,i.kt)("li",{parentName:"ul"},"Thanks to excellent DOS emulator: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.dosbox.com"},"dosbox"),": an excellent x86 emulator with DOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dosbox-x.com/"},"dosbox-x"),": Cross-platform DOS emulation package with Complete, accurate emulation and more"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/caiiiycuk"},"caiiiycuk"),"'s ",(0,i.kt)("a",{parentName:"li",href:"https://js-dos.com/"},"js dos"),":The simpliest API to run DOS games in browser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://takeda-toshiya.my.coocan.jp/msdos"},"msdos player")))),(0,i.kt)("li",{parentName:"ul"},"Thanks for ASM language information",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/publishers/Roncho"},"Roncho")," 's extension ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Roncho.assembly-8086"},"Assembly (TASM)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/9176324"},"blindtiger"),"'s ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/9176324/bltg-team.masm"},"masm"))))))}c.isMDXComponent=!0}}]);