"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3550],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),u=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(f,i(i({ref:e},c),{},{components:r})):o.createElement(f,i({ref:e},c))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94842:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905)),a=r(54616);const i={title:"How to get insight from your own data by ask questions without SQL skills?",description:"Load data, then ask questions with your own language to get insight from your own data.",date:new Date("2023-01-06T00:00:00.000Z"),authors:["chatgpt"],tags:["openai"]},s=void 0,l={permalink:"/blog/chat2query-tutorials",editUrl:"https://github.com/pingcap/ossinsight/edit/main/web/blog/chat2query-tutorials/index.mdx",source:"@site/blog/chat2query-tutorials/index.mdx",title:"How to get insight from your own data by ask questions without SQL skills?",description:"Load data, then ask questions with your own language to get insight from your own data.",date:"2023-01-06T00:00:00.000Z",formattedDate:"January 6, 2023",tags:[{label:"openai",permalink:"/blog/tags/openai"}],readingTime:.67,hasTruncateMarker:!1,authors:[{name:"Written with help of ChatGPT",title:"From OpenAI",url:"https://chat.openai.com/",key:"chatgpt"}],frontMatter:{title:"How to get insight from your own data by ask questions without SQL skills?",description:"Load data, then ask questions with your own language to get insight from your own data.",date:"2023-01-06T00:00:00.000Z",authors:["chatgpt"],tags:["openai"]},nextItem:{title:"Reducing Online Serving Latency from 1.11s to 123.6ms on a Distributed SQL Database",permalink:"/blog/reduce-query-latency"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To get insight of your own dataset without writing sql is easy, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sign up for a TiDB Cloud account at ",(0,n.kt)("a",{parentName:"p",href:"https://tidbcloud.com/free-trial?utm_source=ossinsight&utm_medium=referral"},"https://tidbcloud.com/free-trial")," using your email, Google account, or GitHub account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a free Serverless Tier cluster in the TiDB Cloud web console.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'In the TiDB Cloud web console, click the "Import" button and follow the prompts to load a CSV file into your cluster from a local file or from Amazon S3.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Import Data",src:r(75609).Z,width:"2880",height:"778"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the web console's SQL editor(Chat2Query) to get insights from your data. But no worry, you don't need to write SQL, you could ask questions about your data in natural language."),(0,n.kt)("p",{parentName:"li"},"The magic is typing ",(0,n.kt)("inlineCode",{parentName:"p"},"-- your question")," and press Enter, here is an example:"),(0,n.kt)("video",{src:a.Z,width:"100%",autoplay:!0,controls:!0}))))}m.isMDXComponent=!0},54616:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/medias/how-to-use-chat2query-1e0ac55afcf56bb9cf9b4a9d4fdab82d.mp4"},75609:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/import-e582dbff5395f16d8707ac61a3749b3f.png"}}]);