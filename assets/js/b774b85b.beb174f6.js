"use strict";(self.webpackChunkdosasm=self.webpackChunkdosasm||[]).push([[3539],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),i=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=i(t.components);return r.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=i(n),s=l,d=m["".concat(u,".").concat(s)]||m[s]||k[s]||a;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,o[1]=p;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72040:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],p={},u="\u9898\u76ee",i={unversionedId:"notes-njupt/\u9898\u76ee",id:"notes-njupt/\u9898\u76ee",isDocsHomePage:!1,title:"\u9898\u76ee",description:"[toc]",source:"@site/docs/notes-njupt/\u9898\u76ee.md",sourceDirName:"notes-njupt",slug:"/notes-njupt/\u9898\u76ee",permalink:"/docs/notes-njupt/\u9898\u76ee",editUrl:"https://github.com/dosasm/dosasm/edit/docusaurus/docs/notes-njupt/\u9898\u76ee.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"11 \u53ef\u7f16\u7a0b\u5b9a\u65f6\u5668/\u8ba1\u6570\u5668",permalink:"/docs/notes-njupt/\u53ef\u7f16\u7a0b\u5b9a\u65f6\u8ba1\u6570\u5668"}},c=[{value:"\u7b2c\u4e8c\u7ae0ppt",id:"\u7b2c\u4e8c\u7ae0ppt",children:[]},{value:"\u7b2c\u4e09\u7ae0ppt\u4f8b\u9898",id:"\u7b2c\u4e09\u7ae0ppt\u4f8b\u9898",children:[{value:"80X86\u5fae\u673a\u4e2d\uff0cCPU\u5728\u5206\u522b\u6536\u5230DMA\u603b\u7ebf\u8bf7\u6c42\u4fe1\u53f7\u548c\u4e2d\u65ad\u8bf7\u6c42\u4fe1\u53f7\u540e\uff0c\u5206\u522b\u5728\u4ec0\u4e48\u65f6\u5019\u8fdb\u884c\u54cd\u5e94",id:"80x86\u5fae\u673a\u4e2d\uff0ccpu\u5728\u5206\u522b\u6536\u5230dma\u603b\u7ebf\u8bf7\u6c42\u4fe1\u53f7\u548c\u4e2d\u65ad\u8bf7\u6c42\u4fe1\u53f7\u540e\uff0c\u5206\u522b\u5728\u4ec0\u4e48\u65f6\u5019\u8fdb\u884c\u54cd\u5e94",children:[]},{value:"CPU\u7684INTR\u5f15\u811a\u6536\u5230\u4e86\u4e00\u4e2a\u4e2d\u65ad\u7533\u8bf7\u4fe1\u53f7\uff0c\u4f46CPU\u5e76\u6ca1\u6709\u7acb\u523b\u54cd\u5e94\uff0c\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0",id:"cpu\u7684intr\u5f15\u811a\u6536\u5230\u4e86\u4e00\u4e2a\u4e2d\u65ad\u7533\u8bf7\u4fe1\u53f7\uff0c\u4f46cpu\u5e76\u6ca1\u6709\u7acb\u523b\u54cd\u5e94\uff0c\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0",children:[]}]},{value:"8254\u5b9a\u65f6\u5668\u8ba1\u6570\u5668\u8ba8\u8bba",id:"8254\u5b9a\u65f6\u5668\u8ba1\u6570\u5668\u8ba8\u8bba",children:[]}],k={toc:c};function m(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,a.kt)("p",null,"[toc]"),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u7ae0ppt"},"\u7b2c\u4e8c\u7ae0ppt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-assembly"},"MOV BX,1000H;\u7acb\u5373\u6570\u5bfb\u5740\uff0c\u7acb\u5373\u6570\u4e0d\u80fd\u8bf4\u662f\u5bfb\u5740\u54ea\u4e2a\u903b\u8f91\u6bb5\uff0c\u4e0d\u8003\u8651\u5bfb\u5740\u54ea\u4e2a\u903b\u8f91\u6bb5\nMOV AL,DS:[2000H];\u95f4\u63a5\u5bfb\u5740\uff0cAL=56H\nMOV AX,BX;\nMOV DL,[BX]\nMOV AL,[SI+0016H];\nMOV AL [BP+0016H];\nMOV AL,[BX+SI+0016H]\n")),(0,a.kt)("h2",{id:"\u7b2c\u4e09\u7ae0ppt\u4f8b\u9898"},"\u7b2c\u4e09\u7ae0ppt\u4f8b\u9898"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5df2\u77e5\u6570\u636e\u6bb512345H\u5355\u5143\u5185\u5bb9\u4e3a55H\uff0cX\u5355\u5143\u5185\u5bb9\u4e3a66H\uff0c\u8fde\u7eed\u6267\u884c\u4e0b\u5217\u6307\u4ee4\u540e\uff0cAL=?\uff0cX\u5355\u5143\u7684\u5185\u5bb9=\uff1f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-assembly"},"MOV AX, 1000H;AX=1000H\nMOV DS, AX;DS=AX=1000H\nMOV BX, 2345H;BX=2345H\nMOV AL, [BX];1000H:2345H=12345H|AL=55H\nMOV SI, X\u5355\u5143\u7684\u504f\u79fb\u5730\u5740\nMOV [SI], BL;BL=45H\n")),(0,a.kt)("p",null,"AL=55H\uff0cBL=45H"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5df2\u77e5DS=3000H,ES=4000H,BX=1000H")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58\u5355\u5143\u5730\u5740"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"31000H"),(0,a.kt)("td",{parentName:"tr",align:null},"34H")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"31001H"),(0,a.kt)("td",{parentName:"tr",align:null},"12H")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"41000H"),(0,a.kt)("td",{parentName:"tr",align:null},"78H")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"41001H            56H"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"\u8bf7\u95ee\u8fde\u7eed\u6267\u884c\u4e0b\u5217\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-assembly"},"MOV  AX, [BX] ;3000H:1000H=31000H AX=?1234H\nMOV  AX, ES:[BX]  ;AX=?5678H\nMOV  AH, ES:[BX]  ;AX=?7878H\n")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u670916\u4e2a\u5b57\u7684\u6570\u636e\u533a\uff0c\u5b83\u7684\u8d77\u59cb\u5730\u5740\u4e3a70A0:DDF6H,\u8bf7\u5199\u51fa\u8fd9\u4e2a\u6570\u636e\u533a\u9996\u672b\u5b57\u5355\u5143\u7269\u7406\u5730\u5740")),(0,a.kt)("p",null,"16\u5b57\uff0c32\u5b57\u8282\n\u9996\u5730\u574070A0:DDF6H=7E7F6H\n\u672b\u5c3e\u5730\u57407E7F6H+32D-2H=7E814H"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-assembly"}," BUF DB \u2018THE QUICK BROWN FOX\u2019\n LL EQU $-BUF;LL=19\n S  DB \u2018HELLO\u2019\n LLL EQU $-S;LLL=5\n LLLL EQU $-BUF;LLLL=24\n")),(0,a.kt)("p",null,"\u5206\u522b\u5199\u51faLL=? LLL=? LLLL=?"),(0,a.kt)("p",null,"\u8f93\u5165\u8f93\u51fa\u7cfb\u7edf\u6982\u8ff0\u7ec3\u4e60"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"IN AL,DX"),"\u6307\u4ee4\u540e\uff0c\u8fdb\u5165AL\u5bc4\u5b58\u5668\u7684\u6570\u636e\u6765\u81ea\uff08","[DX]","\u7aef\u53e3\uff09"),(0,a.kt)("li",{parentName:"ol"},"PC\u7cfb\u5217\u673a\u4e2d\uff0cI/O\u7aef\u53e3\u4e0e\u5b58\u50a8\u5668\u91c7\u7528____\u7f16\u5740\u65b9\u5f0f")),(0,a.kt)("h3",{id:"80x86\u5fae\u673a\u4e2d\uff0ccpu\u5728\u5206\u522b\u6536\u5230dma\u603b\u7ebf\u8bf7\u6c42\u4fe1\u53f7\u548c\u4e2d\u65ad\u8bf7\u6c42\u4fe1\u53f7\u540e\uff0c\u5206\u522b\u5728\u4ec0\u4e48\u65f6\u5019\u8fdb\u884c\u54cd\u5e94"},"80X86\u5fae\u673a\u4e2d\uff0cCPU\u5728\u5206\u522b\u6536\u5230DMA\u603b\u7ebf\u8bf7\u6c42\u4fe1\u53f7\u548c\u4e2d\u65ad\u8bf7\u6c42\u4fe1\u53f7\u540e\uff0c\u5206\u522b\u5728\u4ec0\u4e48\u65f6\u5019\u8fdb\u884c\u54cd\u5e94"),(0,a.kt)("p",null,"DMA\u603b\u7ebf\u8bf7\u6c42\u4fe1\u53f7\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u524d\u6307\u4ee4\u7684\u5f53\u524d\u603b\u7ebf\u5468\u671f\u6267\u884c\u5b8c\u540e")),(0,a.kt)("p",null,"\u4e2d\u65ad\u8bf7\u6c42\u4fe1\u53f7\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6709\u975e\u5c4f\u853d\u4e2d\u65ad\u8bf7\u6c42\uff0c\u6ca1\u6709DMA\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u6761\u6307\u4ee4\u6267\u884c\u5b8c")),(0,a.kt)("h3",{id:"cpu\u7684intr\u5f15\u811a\u6536\u5230\u4e86\u4e00\u4e2a\u4e2d\u65ad\u7533\u8bf7\u4fe1\u53f7\uff0c\u4f46cpu\u5e76\u6ca1\u6709\u7acb\u523b\u54cd\u5e94\uff0c\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0"},"CPU\u7684INTR\u5f15\u811a\u6536\u5230\u4e86\u4e00\u4e2a\u4e2d\u65ad\u7533\u8bf7\u4fe1\u53f7\uff0c\u4f46CPU\u5e76\u6ca1\u6709\u7acb\u523b\u54cd\u5e94\uff0c\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0"),(0,a.kt)("p",null,"\u53ef\u80fd\u6709\u4ee5\u4e0b\u539f\u56e0"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"CPU\u5f53\u524d\u6307\u4ee4\u672a\u6267\u884c\u5b8c"),(0,a.kt)("li",{parentName:"ol"},"CPU\u5904\u4e8e\u5173\u4e2d\u65ad\u72b6\u6001\uff0c\u4e0d\u54cd\u5e94\u4e2d\u65ad"),(0,a.kt)("li",{parentName:"ol"},"\u6b64\u65f6\u6709DMA\u8bf7\u6c42\u6216\u975e\u5c4f\u853d\u4e2d\u65ad\u8bf7\u6c42\u6216\u6b63\u5728\u6267\u884c\u4f18\u5148\u7ea7\u66f4\u9ad8\u7684\u4e2d\u65ad\u8bf7\u6c42")),(0,a.kt)("h4",{id:"8259a\u8fdb\u884c\u4e2d\u65ad\u7ba1\u7406\u4e2d\uff0c\u5982\u679c\u901a\u8fc7inta\u63a5\u6536\u5230\u4e86cpu\u9001\u6765\u7684\u4e2d\u65ad\u54cd\u5e94\u4fe1\u53f7\uff0c\u8fd9\u4e2a\u4e2d\u65ad\u54cd\u5e94\u4fe1\u53f7\u662f2\u4e2a\u8fde\u7eed\u7684\u8d1f\u8109\u51b2\uff0c\u90a3\u4e48\u8fd9\u4e24\u4e2a\u8fde\u7eed\u7684\u8d1f\u8109\u51b2\u7684\u4f5c\u7528\u5206\u522b\u662f\u4ec0\u4e48"},"8259A\u8fdb\u884c\u4e2d\u65ad\u7ba1\u7406\u4e2d\uff0c\u5982\u679c\u901a\u8fc7INTA\u63a5\u6536\u5230\u4e86CPU\u9001\u6765\u7684\u4e2d\u65ad\u54cd\u5e94\u4fe1\u53f7\uff0c\u8fd9\u4e2a\u4e2d\u65ad\u54cd\u5e94\u4fe1\u53f7\u662f2\u4e2a\u8fde\u7eed\u7684\u8d1f\u8109\u51b2\uff0c\u90a3\u4e48\u8fd9\u4e24\u4e2a\u8fde\u7eed\u7684\u8d1f\u8109\u51b2\u7684\u4f5c\u7528\u5206\u522b\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u8d1f\u8109\u51b2\uff1a\u4f7f\u4e2d\u65ad\u8bfb\u7269\u5bc4\u5b58\u5668\u4e2d\u4e0e\u88ab\u9009\u4e2d\u7684\u4e2d\u65ad\u6e90\u5bf9\u5e94\u7684\u90a3\u4e00\u4f4d\u7f6e1\uff0c\u628a\u4e2d\u65ad\u8bf7\u6c42\u5bc4\u5b58\u5668\u4e2d\u7684\u76f8\u5e94\u4f4d\u7f6e0\uff08\u4f7f\u4e0e\u88ab\u9009\u4e2d\u7684\u4e2d\u65ad\u6e90\u5bf9\u5e94\u7684ISRi\u4f4d\u7f6e1\uff0cIRRi\u4f4d\u7f6e0\uff09"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u8d1f\u8109\u51b2\uff1a\u4f7f8259A\u5411CPU\u9001\u51fa\u88ab\u9009\u4e2d\u7684\u4e2d\u65ad\u6e90\u7684\u4e2d\u65ad\u7c7b\u578b\u7801"),(0,a.kt)("h2",{id:"8254\u5b9a\u65f6\u5668\u8ba1\u6570\u5668\u8ba8\u8bba"},"8254\u5b9a\u65f6\u5668\u8ba1\u6570\u5668\u8ba8\u8bba"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e488254\u65e2\u53eb\u505a\u5b9a\u65f6\u5668\uff0c\u53c8\u53eb\u505a\u8ba1\u6570\u5668\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u662f\u4e0d\u662f\u5b58\u5728\u4e00\u4e2a\u8f93\u5165\u9891\u7387\u4e3a100Hz\u7684\u4fe1\u53f7\uff0c\u7ecf\u8fc78254\u5b9a\u65f6\u5668\uff0c\u5f97\u5230\u4e00\u4e2a\u8f93\u51fa\u4e3a1000Hz\u7684\u4fe1\u53f7\uff1f\u4e3a\u4ec0\u4e48\uff1f")),(0,a.kt)("p",null,"\u7b54\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u56e0\u4e3a8254\u65e2\u80fd\u591f\u5b9e\u73b0\u51cf\u6cd5\u8ba1\u6570\u529f\u80fd\uff0c\u4e5f\u80fd\u591f\u901a\u8fc7\u5916\u90e8\u65f6\u949f\u8fdb\u884c\u5206\u9891\u4ea7\u751f\u5b9a\u65f6\u4fe1\u53f7\uff0c\u5b9e\u73b0\u5b9a\u65f6\u529f\u80fd\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\uff0c\u56e0\u4e3aN=fclk/fout=0.1\uff0c\u4e0d\u662f\u6574\u6570\uff0c\u800c\u4e14\u8f93\u51fa\u4fe1\u53f7\u7684\u9891\u7387\u4e0d\u53ef\u80fd\u5927\u4e8e\u8f93\u5165\u4fe1\u53f7\u7684\u9891\u7387\u3002")))}m.isMDXComponent=!0}}]);