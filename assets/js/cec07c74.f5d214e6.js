"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>b});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,p=d["".concat(l,".").concat(b)]||d[b]||c[b]||o;return n?i.createElement(p,s(s({ref:t},h),{},{components:n})):i.createElement(p,s({ref:t},h))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var u=2;u<o;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const o={title:"GitHub Events Are Booming! Are Bots the Reason?",date:new Date("2022-08-01T00:00:00.000Z"),authors:["mia","winkyao","caitin"],tags:["insight"],image:"./github-data-is-booming.jpg",description:"This post dives deeply into GitHub event trending, why GitHub events are surging, and whether GitHub's architecture can handle the increasing load.",keywords:["github"]},s=void 0,r={permalink:"/blog/github-data-is-booming",editUrl:"https://github.com/pingcap/ossinsight/edit/main/blog/github-data-is-booming/index.mdx",source:"@site/blog/github-data-is-booming/index.mdx",title:"GitHub Events Are Booming! Are Bots the Reason?",description:"This post dives deeply into GitHub event trending, why GitHub events are surging, and whether GitHub's architecture can handle the increasing load.",date:"2022-08-01T00:00:00.000Z",formattedDate:"August 1, 2022",tags:[{label:"insight",permalink:"/blog/tags/insight"}],readingTime:4.105,hasTruncateMarker:!1,authors:[{name:"Mia Zhou",title:"Technical Content Developer",url:"https://github.com/luzizhuo",imageURL:"https://github.com/luzizhuo.png",key:"mia"},{name:"Wink Yao",title:"Head of Community & Developer Ecosystem Team at PingCAP.",url:"https://twitter.com/golangwink",imageURL:"https://github.com/winkyao.png",key:"winkyao"},{name:"Caitin Chen",title:"Technical Content Developer",url:"https://github.com/CaitinChen",imageURL:"https://github.com/caitinchen.png",key:"caitin"}],frontMatter:{title:"GitHub Events Are Booming! Are Bots the Reason?",date:"2022-08-01T00:00:00.000Z",authors:["mia","winkyao","caitin"],tags:["insight"],image:"./github-data-is-booming.jpg",description:"This post dives deeply into GitHub event trending, why GitHub events are surging, and whether GitHub's architecture can handle the increasing load.",keywords:["github"]},nextItem:{title:"Build a Better GitHub Insight Tool in a Week? A True Story",permalink:"/blog/why-we-choose-tidb-to-support-ossinsight"}},l={image:n(17025).Z,authorsImageUrls:[void 0,void 0,void 0]},u=[{value:"Historical data analysis",id:"historical-data-analysis",level:2},{value:"The secret behind the exponential growth of GitHub events",id:"the-secret-behind-the-exponential-growth-of-github-events",level:2},{value:"When will GitHub reach 10 billion events?",id:"when-will-github-reach-10-billion-events",level:2},{value:"Can MySQL sharding support such a huge amount of data?",id:"can-mysql-sharding-support-such-a-huge-amount-of-data",level:2},{value:"Data sources",id:"data-sources",level:2}],h={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://ossinsight.io/"},"OSS Insight")," website displays the data changes of GitHub events in real time. GitHub events are activities triggered by user actions on GitHub, for example, commenting and forking a repository. ",(0,a.kt)("strong",{parentName:"p"},"In nearly seven weeks, GitHub events increased by about 150 million, from 4.7 billion to 4.85 billion.")," GitHub events are booming!"),(0,a.kt)("p",null,"This post dives deeply into GitHub event trending, why GitHub events are surging, and whether GitHub's architecture can handle the increasing load."),(0,a.kt)("h2",{id:"historical-data-analysis"},"Historical data analysis"),(0,a.kt)("p",null,"The OSS Insight database includes all the GitHub events since 2011. When we plot the number of events by year, we can see that since 2018 they have been increasing rapidly."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub event trending",src:n(41169).Z,width:"1972",height:"1170"})),(0,a.kt)("center",null,(0,a.kt)("em",null,"GitHub event trending")),(0,a.kt)("br",null),(0,a.kt)("p",null,"The figure below shows how long it takes to grow each billion events in GitHub."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The time to reach a billion GitHub events",src:n(17025).Z,width:"1280",height:"708"})),(0,a.kt)("center",null,(0,a.kt)("em",null,"The time to reach a billion GitHub events")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It's taking less and less for GitHub to generate 1 billion events. It took more than 6 years for the first billion events and only 13 months for the last billion!")),(0,a.kt)("h2",{id:"the-secret-behind-the-exponential-growth-of-github-events"},"The secret behind the exponential growth of GitHub events"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.blog/2018-10-16-future-of-software/"},"GitHub Actions")," was released in October 2018. Since August 2019, it has ",(0,a.kt)("a",{parentName:"p",href:"https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/"},"supported continuous integration and continuous delivery (CI/CD)"),", and it has been free for open source projects. Therefore, projects hosted on GitHub can automate their own development workflows, and a large number of automation-related bot applications have appeared on GitHub Marketplace. Could GitHub events' data growth be related to these?"),(0,a.kt)("p",null,"To find the answer, we divided the events into data from humans and data from bots and plotted them with the following histogram. The blue columns represent the human data, and the yellow columns represent the bot data."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bot events vs. human events",src:n(44073).Z,width:"2032",height:"1214"})),(0,a.kt)("center",null,(0,a.kt)("em",null,"Bot events vs. human events")),(0,a.kt)("br",null),(0,a.kt)("p",null,"As you can see, the proportion of GitHub bot events has increased each year. In 2015, they were only 1.23% of all events. In early July of this year, they reached 13.2%. To show the data changes of bot events more clearly, we made the following line chart."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bot event trending",src:n(14610).Z,width:"2338",height:"1228"})),(0,a.kt)("center",null,(0,a.kt)("em",null,"Bot event trending")),(0,a.kt)("br",null),(0,a.kt)("p",null,"This figure shows that since 2019, bot events have been grown faster than before. As ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mini256"},"Mini256"),", a TiDB community contributor said in ",(0,a.kt)("a",{parentName:"p",href:"https://ossinsight.io/blog/say-thanks-to-github-robots"},"Love, Code, and Robot \u2014 Explore robots in the world of code"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For now, rough statistics find that there are more than 95,620 bots on GitHub. The number doesn't seem like so much, but wait...")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"These 95 thousand bot accounts generated 603 million events. These events account for 12.82% of all public events on GitHub"),", and these GitHub robots have served over 18 million open source repositories.")),(0,a.kt)("p",null,"Bots are playing an increasingly important role on GitHub. Many projects are handing over automated work to bots. We expect that GitHub events will grow faster in the future."),(0,a.kt)("h2",{id:"when-will-github-reach-10-billion-events"},"When will GitHub reach 10 billion events?"),(0,a.kt)("p",null,"How many GitHub events will there be by the end of 2022? We fit predictions to GitHub historical data."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Human event fit (left) vs. bot event fit (right)",src:n(67514).Z,width:"2750",height:"1096"})),(0,a.kt)("center",null,(0,a.kt)("em",null,"Human event fit (left) vs. bot event fit (right)")),(0,a.kt)("br",null),(0,a.kt)("p",null,"It's estimated that by the end of 2022, GitHub events will reach 5.36 billion."),(0,a.kt)("br",null),(0,a.kt)("center",null,(0,a.kt)("img",{src:n(86708).Z,width:"50%",alt:"github-event-prediction"})),(0,a.kt)("center",null,(0,a.kt)("em",null,"GitHub event prediction")),(0,a.kt)("br",null),(0,a.kt)("p",null,"According to this prediction, GitHub events will exceed 10 billion in February 2025."),(0,a.kt)("br",null),(0,a.kt)("center",null,(0,a.kt)("img",{src:n(23430).Z,width:"50%",alt:"gitub-events-exceed-10-billion"})),(0,a.kt)("center",null,(0,a.kt)("em",null,"GitHub events will exceed 10 billion in 2025")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"can-mysql-sharding-support-such-a-huge-amount-of-data"},"Can MySQL sharding support such a huge amount of data?"),(0,a.kt)("p",null,"GitHub uses MySQL as the main storage for all non-git warehouse data. The rapid growth of data volume poses a great challenge to GitHub's high availability. In March 2022, GitHub had 3 service disruptions, each lasting 2-5 hours. ",(0,a.kt)("a",{parentName:"p",href:"https://github.blog/2022-03-23-an-update-on-recent-service-disruptions/"},"The official investigation report")," shows the MySQL database caused the outages. During peak load periods, the GitHub mysql1 database (the main database cluster in GitHub) load increased. Therefore, database access reached the maximum number of connections. This affected the performance of many GitHub services and features."),(0,a.kt)("p",null,"In fact, over the past few years GitHub has optimized its databases. For example, it added clusters to support platform growth and partitioned the main database. But these improvements did not fundamentally solve the problem. In the near future, GitHub events will exceed 5 billion, or even 10 billion. Can MySQL sharding support such data surge?"),(0,a.kt)("h2",{id:"data-sources"},"Data sources"),(0,a.kt)("p",null,"All the analysis data in this article comes from ",(0,a.kt)("a",{parentName:"p",href:"https://ossinsight.io/"},"OSS Insight"),", a tool based on ",(0,a.kt)("a",{parentName:"p",href:"https://en.pingcap.com/tidb-cloud/?utm_source=ossinsight&utm_medium=referral"},"TiDB")," to analyze and gain insights into GitHub events data."),(0,a.kt)("p",null,"You can use it to easily get insights about developers and repositories based on billions of GitHub events. You can also get the latest and historical rankings and trends in technical fields."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The OSS Insight website",src:n(40997).Z,width:"1280",height:"518"})),(0,a.kt)("center",null,(0,a.kt)("em",null,"The OSS Insight website")),(0,a.kt)("br",null))}c.isMDXComponent=!0},86708:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-event-prediction-0881ce3bd3772ea520f3aca4e2ba69fd.jpg"},23430:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitub-events-exceed-10-billion-9fb7e093845d4919d23cd1b424f11e72.jpg"},14610:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bot-event-trending-25401299ab3b9ae43e09a59a03ba03af.jpg"},44073:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bot-events-vs-human-events-e0c3e9655149a55789998a1744fdfe76.jpg"},17025:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-data-is-booming-d146db8ceb0898fa5317133d3226bdf7.jpg"},41169:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-event-trending-84fa821819da29f3700c049214512ce9.jpg"},67514:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/human-event-fit-vs-bot-event-fit-0361fd4f0c35b96d9c4535a242a91ed2.jpg"},40997:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/oss-insight-website-34873411dd542699e50a918f05f66bc8.jpg"}}]);