"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"Reducing Online Serving Latency from 1.11s to 123.6ms on a Distributed SQL Database",date:new Date("2022-11-17T00:00:00.000Z"),authors:["Mini256","caitin"],tags:["tidbcloud"],image:"./reduce-online-serving-latency-with-distributed-sql-database.jpg",description:"This post tells how a GitHub data insight website on a distributed database reduced online serving latency from 1.11s to 123.6ms.",keywords:["open source","database","distributed sql database"]},r=void 0,s={permalink:"/blog/reduce-query-latency",editUrl:"https://github.com/pingcap/ossinsight/edit/main/web/blog/reduce-query-latency/index.mdx",source:"@site/blog/reduce-query-latency/index.mdx",title:"Reducing Online Serving Latency from 1.11s to 123.6ms on a Distributed SQL Database",description:"This post tells how a GitHub data insight website on a distributed database reduced online serving latency from 1.11s to 123.6ms.",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"tidbcloud",permalink:"/blog/tags/tidbcloud"}],readingTime:10.525,hasTruncateMarker:!1,authors:[{name:"Mini256",title:"Engineer of TiDB Community",url:"https://github.com/Mini256",imageURL:"https://github.com/Mini256.png",key:"Mini256"},{name:"Caitin Chen",title:"Technical Content Developer",url:"https://github.com/CaitinChen",imageURL:"https://github.com/caitinchen.png",key:"caitin"}],frontMatter:{title:"Reducing Online Serving Latency from 1.11s to 123.6ms on a Distributed SQL Database",date:"2022-11-17T00:00:00.000Z",authors:["Mini256","caitin"],tags:["tidbcloud"],image:"./reduce-online-serving-latency-with-distributed-sql-database.jpg",description:"This post tells how a GitHub data insight website on a distributed database reduced online serving latency from 1.11s to 123.6ms.",keywords:["open source","database","distributed sql database"]},prevItem:{title:"How to get insight from your own data by asking questions without SQL skills?",permalink:"/blog/chat2query-tutorials"},nextItem:{title:"Open Source Highlights: Trends and Insights from GitHub 2022",permalink:"/blog/trends-and-insights-from-github-2022"}},l={image:n(12337).Z,authorsImageUrls:[void 0,void 0]},d=[{value:"Analyzing the SQL execution plan",id:"analyzing-the-sql-execution-plan",level:2},{value:"Using <code>EXPLAIN ANALYZE</code> to troubleshoot query performance problems",id:"using-explain-analyze-to-troubleshoot-query-performance-problems",level:3},{value:"Why did <code>TableRowIDScan</code> take so long?",id:"why-did-tablerowidscan-take-so-long",level:3},{value:"Why was <code>EXPLAIN ANALYZE</code> faster the second time?",id:"why-was-explain-analyze-faster-the-second-time",level:3},{value:"Using a covering index to avoid executing <code>TableRowIDScan</code>",id:"using-a-covering-index-to-avoid-executing-tablerowidscan",level:2},{value:"Pushing down computing to further reduce query latency",id:"pushing-down-computing-to-further-reduce-query-latency",level:2},{value:"Applying what we learned to other queries",id:"applying-what-we-learned-to-other-queries",level:2},{value:"References",id:"references",level:2}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"TL;DR:"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This post tells how a website on a distributed database ",(0,i.kt)("strong",{parentName:"em"},"reduced online serving latency from 1.11 s to 417.7 ms, and then to 123.6 ms"),". We found that some lessons learned on MySQL could be applied throughout the optimization process. But when we optimize a ",(0,i.kt)("strong",{parentName:"em"},"distributed database,")," we need to consider more.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://ossinsight.io/"},"OSS Insight")," website displays the data changes of GitHub events in real time. It's powered by ",(0,i.kt)("a",{parentName:"p",href:"https://www.pingcap.com/tidb-cloud/"},"TiDB Cloud"),", a MySQL-compatible distributed SQL database for elastic scale and real-time analytics."),(0,i.kt)("p",null,"Recently, to save costs, we tried to use lower-specification machines without affecting query efficiency and user experience. But our website and query response slowed down."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The repository analysis page was loading",src:n(33620).Z,width:"1280",height:"523"})),(0,i.kt)("center",null,(0,i.kt)("em",null,"The repository analysis page was loading, loading, and loading")),(0,i.kt)("br",null),(0,i.kt)("p",null,"How could we solve these problems on a distributed database? Could we use the methodology we learned on MySQL?"),(0,i.kt)("h2",{id:"analyzing-the-sql-execution-plan"},"Analyzing the SQL execution plan"),(0,i.kt)("p",null,"To identify slow SQL statements, we used TiDB Cloud's Diagnosis page to sort SQL queries by their average latency."),(0,i.kt)("p",null,"For example, after the API server received a request, it executed the following SQL statement to obtain the number of issues in the ",(0,i.kt)("a",{parentName:"p",href:"https://ossinsight.io/analyze/microsoft/vscode"},"vscode repository"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    COUNT(DISTINCT number)\nFROM github_events\nWHERE\n    repo_id = 41881900     -- vscode\n    AND type = 'IssuesEvent';\n")),(0,i.kt)("p",null,"However, if the open source repository is large, this query may take several seconds or more to execute."),(0,i.kt)("h3",{id:"using-explain-analyze-to-troubleshoot-query-performance-problems"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"EXPLAIN ANALYZE")," to troubleshoot query performance problems"),(0,i.kt)("p",null,"In MySQL, when we troubleshoot query performance problems, we usually use the ",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN ANALYZE <sql>")," statement to view the SQL statement's execution plan. We can use the execution plan to locate the problem. The same works for TiDB."),(0,i.kt)("p",null,"We executed the ",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN ANALYZE SELECT\n    COUNT(DISTINCT number)\nFROM github_events\nWHERE\n    repo_id = 41881900     -- vscode\n    AND type = 'IssuesEvent';\n")),(0,i.kt)("p",null,"The result showed that the query took 1.11 seconds to execute."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The query result",src:n(75641).Z,width:"2850",height:"374"})),(0,i.kt)("center",null,(0,i.kt)("em",null,"The query result")),(0,i.kt)("br",null),(0,i.kt)("p",null,"You can see that TiDB's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/explain-overview"},(0,i.kt)("inlineCode",{parentName:"a"},"EXPLAIN ANALYZE"))," statement execution result was completely different from MySQL's. TiDB's execution plan gave us a clearer understanding of how this SQL statement was executed."),(0,i.kt)("p",null,"The execution plan shows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This SQL statement was split into several subtasks. Some were on the ",(0,i.kt)("inlineCode",{parentName:"li"},"root")," node, and others were on the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/dev/tikv-overview#tikv-overview"},(0,i.kt)("inlineCode",{parentName:"a"},"tikv"))," node."),(0,i.kt)("li",{parentName:"ul"},"The query fetched data from the ",(0,i.kt)("inlineCode",{parentName:"li"},"partition:issue_event partition")," table."),(0,i.kt)("li",{parentName:"ul"},"This query did a range scan through the index ",(0,i.kt)("inlineCode",{parentName:"li"},"index_github_events_on_repo_id(repo_id)"),". This let the query ",(0,i.kt)("strong",{parentName:"li"},"narrow down the data scan quickly"),". ",(0,i.kt)("strong",{parentName:"li"},"This process only took")," ",(0,i.kt)("strong",{parentName:"li"},"59 ms.")," It was the sum of the execution times of multiple concurrent tasks."),(0,i.kt)("li",{parentName:"ul"},"Besides ",(0,i.kt)("inlineCode",{parentName:"li"},"IndexRangeScan"),", ",(0,i.kt)("strong",{parentName:"li"},"the query also used ",(0,i.kt)("inlineCode",{parentName:"strong"},"TableRowIDScan")),". ",(0,i.kt)("strong",{parentName:"li"},"This scan took")," ",(0,i.kt)("strong",{parentName:"li"},"4.69 s"),", the sum of execution times for multiple concurrent subtasks.")),(0,i.kt)("p",null,"From the execution times above, we determined that the query performance bottleneck was in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TableRowIDScan")," step."),(0,i.kt)("p",null,"We reran the ",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN ANALYZE")," statement and found that the query was faster the second time. Why?"),(0,i.kt)("h3",{id:"why-did-tablerowidscan-take-so-long"},"Why did ",(0,i.kt)("inlineCode",{parentName:"h3"},"TableRowIDScan")," take so long?"),(0,i.kt)("p",null,"To find the reason why ",(0,i.kt)("inlineCode",{parentName:"p"},"TableRowIDScan")," took so long, we need basic knowledge of TiDB's underlying storage."),(0,i.kt)("p",null,"In TiDB, a table's data entries and indexes are stored on TiKV nodes in key-value pairs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For an index, the key is the combination of the index value and the ",(0,i.kt)("inlineCode",{parentName:"li"},"row_id")," (for a non-clustered index) or the primary key (for a clustered index). The ",(0,i.kt)("inlineCode",{parentName:"li"},"row_id")," or primary key indicates where the data is stored."),(0,i.kt)("li",{parentName:"ul"},"For a data entry, the key is the combination of the table ID and the ",(0,i.kt)("inlineCode",{parentName:"li"},"row_id")," or primary key. The value part is the combination of this row of data.")),(0,i.kt)("p",null,"This graph shows how ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexLookup")," is executed in the execution plan:"),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The logical structure",src:n(68884).Z,width:"1280",height:"747"})),(0,i.kt)("center",null,(0,i.kt)("em",null,"This is the logical structure, not the physical storage structure.")),(0,i.kt)("br",null),(0,i.kt)("p",null,"In the query above, TiDB uses the query condition ",(0,i.kt)("inlineCode",{parentName:"p"},"repo_id=41881900")," to filter out all row numbers ",(0,i.kt)("inlineCode",{parentName:"p"},"row_id")," related to the repository in the secondary index ",(0,i.kt)("inlineCode",{parentName:"p"},"index_github_events_on_repo_id"),". The query needs the number ",(0,i.kt)("inlineCode",{parentName:"p"},"column")," data, but the secondary index doesn't provide it. Therefore, TiDB must execute ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexLookup")," to find the corresponding row in the table based on the obtained ",(0,i.kt)("inlineCode",{parentName:"p"},"row_id")," (the ",(0,i.kt)("inlineCode",{parentName:"p"},"TableRowIDScan")," step)."),(0,i.kt)("p",null,"The rows are probably scattered in different data blocks and stored on the hard disk. This causes TiDB to perform a large number of I/O operations to read data from different data blocks or even different machine nodes."),(0,i.kt)("h3",{id:"why-was-explain-analyze-faster-the-second-time"},"Why was ",(0,i.kt)("inlineCode",{parentName:"h3"},"EXPLAIN ANALYZE")," faster the second time?"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN ANALZYE"),'\'s execution result, we saw that the "execution info" column corresponding to the ',(0,i.kt)("inlineCode",{parentName:"p"},"TableRowIDScan")," step contained this information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"block: {cache_hit_count: 2755559, read_count: 179510, read_byte: 4.07 GB}\n")),(0,i.kt)("p",null,"We thought this had something to do with TiKV. TiKV read a very large number of data blocks from the disk. Because the data blocks read from the ",(0,i.kt)("em",{parentName:"p"},"disk")," were cached in ",(0,i.kt)("em",{parentName:"p"},"memory")," in the first execution, 2.75 million data blocks could be read directly from ",(0,i.kt)("em",{parentName:"p"},"memory")," instead of being retrieved from the hard disk. This made the ",(0,i.kt)("inlineCode",{parentName:"p"},"TableRowIDScan")," step much faster, and the query was faster overall."),(0,i.kt)("p",null,"However, we believed that user queries were random. For example, a user might look up data from a ",(0,i.kt)("inlineCode",{parentName:"p"},"vscode")," repository and then go to a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes")," repository. TiKV's memory couldn't cache all the data blocks in all the drives. Therefore, this did not solve our problem, but it reminded us that when we analyze SQL execution efficiency, we need to exclude cache effects."),(0,i.kt)("h2",{id:"using-a-covering-index-to-avoid-executing-tablerowidscan"},"Using a covering index to avoid executing ",(0,i.kt)("inlineCode",{parentName:"h2"},"TableRowIDScan")),(0,i.kt)("p",null,"Could we avoid executing ",(0,i.kt)("inlineCode",{parentName:"p"},"TableRowIDScan")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexLookup"),"?"),(0,i.kt)("p",null,"In MySQL, a covering index prevents the database from index lookup after index filtering. We wanted to apply this to OSS Insight. In our TiDB database, we tried to create a composite index to achieve index coverage."),(0,i.kt)("p",null,"When we created a composite index with multiple columns, we needed to pay attention to the column order. Our goals were to allow a composite index to be used by as many queries as possible, to help these queries narrow the scope of data scans as quickly as possible, and to provide as many fields as possible in the query. When we created a composite index we followed this order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Columns that had high differentiation and could be used as equivalence conditions for the ",(0,i.kt)("inlineCode",{parentName:"li"},"WHERE")," statement, like ",(0,i.kt)("inlineCode",{parentName:"li"},"repo_id")),(0,i.kt)("li",{parentName:"ol"},"Columns that didn't have high differentiation but could be used as equivalence conditions for the ",(0,i.kt)("inlineCode",{parentName:"li"},"WHERE")," statement, like ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"action")),(0,i.kt)("li",{parentName:"ol"},"Columns that could be used as range query conditions for the ",(0,i.kt)("inlineCode",{parentName:"li"},"WHERE")," statement, like ",(0,i.kt)("inlineCode",{parentName:"li"},"created_at")),(0,i.kt)("li",{parentName:"ol"},"Redundant columns that were not used as filter conditions but were used in the query, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"push_size"))),(0,i.kt)("p",null,"We used the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE IDNEX")," statement to create a composite index in the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE INDEX index_github_events_on_repo_id_type_number ON github_events(repo_id, type, number);\n")),(0,i.kt)("p",null,"When we created the index and ran the SQL statement again, the query speed was significantly faster. We viewed the execution plan through ",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN ANALYZE")," and found that the execution plan became simpler. The ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexLookup")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TableRowIDScan")," steps were gone. ",(0,i.kt)("strong",{parentName:"p"},"The query took only 417.7 ms"),"."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The result of the EXPLAIN query",src:n(58645).Z,width:"1280",height:"114"})),(0,i.kt)("center",null,(0,i.kt)("em",null,"The result of the EXPLAIN query. This query cost 417.7 ms")),(0,i.kt)("br",null),(0,i.kt)("p",null,"So we knew that our query could get all the data it needed by doing an ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexRangeScan")," on the new index. This composite index included the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," field, so TiDB did not need to perform ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexLookup")," to get data from the table. This reduced a lot of I/O operations."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"`IndexRangeScan` in the non-clustered table",src:n(81749).Z,width:"1280",height:"690"})),(0,i.kt)("center",null,(0,i.kt)("em",null,"IndexRangeScan in the non-clustered table")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"pushing-down-computing-to-further-reduce-query-latency"},"Pushing down computing to further reduce query latency"),(0,i.kt)("p",null,"For a query that needed to obtain 270,000 rows of data, 417.7 ms was quite a short execution time. But could we improve the time even more?"),(0,i.kt)("p",null,"We thought this relied on TiDB's architecture that separates computing and storage layers. This is different from MySQL."),(0,i.kt)("p",null,"In TiDB:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"tidb-server")," node computes data. It corresponds to root in the execution plan."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"tikv-server")," node stores the data. It corresponds to ",(0,i.kt)("inlineCode",{parentName:"li"},"cop[tikv]")," in the execution plan.")),(0,i.kt)("p",null,"Generally, an SQL statement is split into multiple steps to execute with the cooperation of computing and storage nodes."),(0,i.kt)("p",null,"When we executed the SQL statement in this article, TiDB obtained the data of the ",(0,i.kt)("inlineCode",{parentName:"p"},"github_events")," table from ",(0,i.kt)("inlineCode",{parentName:"p"},"tikv-server")," and performed the aggregate calculation of the COUNT function on ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb-server"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    COUNT(DISTINCT number)\nFROM github_events\nWHERE\n    repo_id = 41881900     -- vscode\n    AND type = 'IssuesEvent';\n")),(0,i.kt)("p",null,"The execution plan indicated that when TiDB was performing ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexReader"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb-server")," needed to read 270,000 rows of data from ",(0,i.kt)("inlineCode",{parentName:"p"},"tikv-server")," through the network. This was time-consuming."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"`tidb-server` read 270,000 rows of data from `tikv-server`",src:n(71247).Z,width:"1280",height:"112"})),(0,i.kt)("center",null,(0,i.kt)("em",null,"tidb-server read 270,000 rows of data from tikv-server")),(0,i.kt)("br",null),(0,i.kt)("p",null,"How could we avoid such a large network transmission? Although the query needed to obtain a large amount of data, the final calculation result was only a number. Could we complete the ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT")," aggregation calculation on ",(0,i.kt)("inlineCode",{parentName:"p"},"tikv-server")," and return the result only to ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb-server"),"?"),(0,i.kt)("p",null,"TiDB had implemented this idea through the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/dev/tikv-overview#tikv-coprocessor"},"coprocessor")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"tikv-server"),". This optimization process is called computing pushdown."),(0,i.kt)("p",null,"The execution plan indicated that our SQL query did not do this. Why? We checked the TiDB documentation and learned that:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Usually, aggregate functions with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DISTINCT")," option are executed in the TiDB layer in a single-threaded execution model.")),(0,i.kt)("p",null,"This meant that our SQL statement couldn't use computing pushdown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    COUNT(DISTINCT number)\nFROM github_events\nWHERE\n    repo_id = 41881900     -- vscode\n    AND type = 'IssuesEvent';\n")),(0,i.kt)("p",null,"Therefore, we removed the ",(0,i.kt)("inlineCode",{parentName:"p"},"DISTINCT")," keyword."),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"github_events")," table, an issue only generated an event with the ",(0,i.kt)("inlineCode",{parentName:"p"},"IssuesEvent")," type and ",(0,i.kt)("inlineCode",{parentName:"p"},"opened")," action. We could get the total number of unique issues by adding the condition of ",(0,i.kt)("inlineCode",{parentName:"p"},"action = 'opened'"),". This way, we didn't need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"DISTINCT")," keyword for deduplication."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT\n    COUNT(number)\nFROM github_events\nWHERE\n    repo_id = 41881900     -- vscode\n    AND type = 'IssuesEvent'\n    AND action = 'opened';\n")),(0,i.kt)("p",null,"The composite index we created lacked the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," column. This caused the query index coverage to fail. So we created a new composite index:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE INDEX index_github_events_on_repo_id_type_action_number ON github_events(repo_id, type, action, number);\n")),(0,i.kt)("p",null,"After we created the index, we checked the execution plan of the modified SQL statement through the ",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN ANALYZE")," statement. We found that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Because we added a new filter ",(0,i.kt)("inlineCode",{parentName:"li"},"action='opened'"),", the number of rows to scan had decreased from 270,000 to 140,000."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tikv-server")," executed the ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamAgg")," operator, which was the aggregate calculation of the ",(0,i.kt)("inlineCode",{parentName:"li"},"COUNT")," function. This indicated that the calculation had been pushed down to the TiKV coprocessor for execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tidb-server")," only needed to obtain two rows of data from ",(0,i.kt)("inlineCode",{parentName:"li"},"tikv-server")," through the network. This greatly reduced the amount of data transmitted."),(0,i.kt)("li",{parentName:"ul"},"The query only took 123.6 ms.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+-------------------------+---------+---------+-----------+-------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------+-----------+------+\n| id                      | estRows | actRows | task      | access object                                                                                                           | execution info                                                                                                                                                                                                                                                                                                                                                           | operator info                                                                             | memory    | disk |\n+-------------------------+---------+---------+-----------+-------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------+-----------+------+\n| StreamAgg_28            | 1.00    | 1       | root      |                                                                                                                         | time:123.6ms, loops:2                                                                                                                                                                                                                                                                                                                                                    | funcs:count(Column#43)->Column#34                                                         | 388 Bytes | N/A  |\n| \u2514\u2500IndexReader_29        | 1.00    | 2       | root      | partition:issues_event                                                                                                  | time:123.6ms, loops:2, cop_task: {num: 2, max: 123.5ms, min: 1.5ms, avg: 62.5ms, p95: 123.5ms, max_proc_keys: 131360, p95_proc_keys: 131360, tot_proc: 115ms, tot_wait: 1ms, rpc_num: 2, rpc_time: 125ms, copr_cache_hit_ratio: 0.50, distsql_concurrency: 15}                                                                                                           | index:StreamAgg_11                                                                        | 590 Bytes | N/A  |\n|   \u2514\u2500StreamAgg_11        | 1.00    | 2       | cop[tikv] |                                                                                                                         | tikv_task:{proc max:116ms, min:8ms, avg: 62ms, p80:116ms, p95:116ms, iters:139, tasks:2}, scan_detail: {total_process_keys: 131360, total_process_keys_size: 23603556, total_keys: 131564, get_snapshot_time: 1ms, rocksdb: {delete_skipped_count: 320, key_skipped_count: 131883, block: {cache_hit_count: 307, read_count: 1, read_byte: 63.9 KB, read_time: 60.2\xb5s}}} | funcs:count(gharchive_dev.github_events.number)->Column#43                                | N/A       | N/A  |\n|     \u2514\u2500IndexRangeScan_15 | 7.00    | 141179  | cop[tikv] | table:github_events, index:index_ge_on_repo_id_type_action_created_at_number(repo_id, type, action, created_at, number) | tikv_task:{proc max:116ms, min:8ms, avg: 62ms, p80:116ms, p95:116ms, iters:139, tasks:2}                                                                                                                                                                                                                                                                                 | range:[41881900 "IssuesEvent" "opened",41881900 "IssuesEvent" "opened"], keep order:false | N/A       | N/A  |\n+-------------------------+---------+---------+-----------+-------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------+-----------+------+\n')),(0,i.kt)("h2",{id:"applying-what-we-learned-to-other-queries"},"Applying what we learned to other queries"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Through our analysis and optimizations, the query latency was significantly reduced:")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.11 s \u2192 417.7 ms \u2192 123.6 ms")),(0,i.kt)("p",null,"We applied what we learned to other queries and created the following composite indexes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"github_events")," table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"index_ge_on_repo_id_type_action_pr_merged_created_at_add_del\n\nindex_ge_on_repo_id_type_action_created_at_number_pdsize_psize\n\nindex_ge_on_repo_id_type_action_created_at_actor_login\n\nindex_ge_on_creator_id_type_action_merged_created_at_add_del\n\nindex_ge_on_actor_id_type_action_created_at_repo_id_commits\n")),(0,i.kt)("p",null,"These composite indexes covered more than 20 analytical queries in repository analysis and personal analysis pages on the OSS Insight website. This improved our website's overall loading speed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Some lessons we learned on MySQL can be applied throughout the optimization process.")," But we need to consider more when we optimize query performance in a ",(0,i.kt)("strong",{parentName:"p"},"distributed database"),". We also recommend you read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/performance-tuning-overview"},"Performance Tuning")," in the TiDB documentation. This will give you a more professional and comprehensive guide to performance optimization."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/dev/tidb-computing"},"TiDB Computing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/stable/tidb-storage"},"TiDB Storage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/stable/agg-distinct-optimization"},"Distinct Optimization"))))}u.isMDXComponent=!0},58645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explain-query-result-270a89734fe48b57355391bbdb749b1c.jpg"},81749:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/indexrangescan-non-clustered-b1aac3b0d289a5559922d8242ffa2a27.jpg"},68884:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logical-structure-e3fb6e84ec25a9a8b55138c0b693e42f.jpg"},75641:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-result-bf927d2c279ceb509e4a6e0d665ce470.jpg"},71247:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/read-270000-rows-from-tikv-server-37f8f2852d7412d01fbf9db2ab13a364.jpg"},12337:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reduce-online-serving-latency-with-distributed-sql-database-f9c0be44478f3161e57f08ac90c2c870.jpg"},33620:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/repository-analysis-page-579609580f53e08e2e5d2c4ec7007b32.jpg"}}]);