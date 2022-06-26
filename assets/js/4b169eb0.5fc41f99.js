"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[6284],{73648:function(e){e.exports=JSON.parse("{\"blogPosts\":[{\"id\":\"/why-you-should-choose-tidb\",\"metadata\":{\"permalink\":\"/_blog/why-you-should-choose-tidb\",\"source\":\"@site/_blog/why-you-should-choose-tidb.mdx\",\"title\":\"Why You Should Choose TiDB\",\"description\":\"const tidbGroup = [41986369, 48833910, 53311716]\",\"date\":\"2022-06-26T20:09:38.501Z\",\"formattedDate\":\"June 26, 2022\",\"tags\":[],\"readingTime\":7.945,\"truncated\":false,\"authors\":[],\"nextItem\":{\"title\":\"Open Source Database Repos Landscape 2021\",\"permalink\":\"/_blog/deep-insight-about-oss-database-2021\"}},\"content\":\"import {CommonChart} from \\\"../src/components/CommonChart\\\";\\nimport ContributorsCharts from \\\"../src/components/ContributorsCharts\\\";\\nimport GroupSelect from \\\"../src/components/GroupSelect\\\";\\nconst tidbGroup = [41986369, 48833910, 53311716]\\n\\n## \u2753 What is tidb\\n\\nTiDB is an open source distributed Hybrid Transactional and Analytical Processing (HTAP) database compatible with the MySQL protocol.\\n\\n#### \u2139\ufe0f  Learn more about TiDB\\n- Source Code: https://github.com/pingcap/tidb\\n- Official Website: [https://en.pingcap.com](https://en.pingcap.com/?utm_source=ossinsight&utm_medium=referral)\\n- Docs: [https://docs.pingcap.com](https://docs.pingcap.com?utm_source=ossinsight&utm_medium=referral)\\n\\n\\n## \ud83d\udc40 Comparison\\n\\nNow we can use TiDB as an example, analyze it in four aspects: stars, issues, PRs and contributors. You can also select any repo in the filter box to compare with it.\\n\\n### Stars\\n\\n#### The most starred OSDB repos since 2011 (updated 1 hour ago)\\n\\nThe number of stars is an important and commonly used metric to measure the popularity of a repository. We sort all database repositories from GitHub and rank them by their accumulated number of stars.\\n\\nIn this bar chart, we can see that TiDB ranks second in the most starred open source database repos since 2011, which is enough to show that it is very popular in the field of open source databases.\\n\\n<CommonChart\\n  chart='barchart'\\n  category='rt-osdb-ranking-by-stars'\\n  n={20}\\n  formatSql={false}\\n  categoryIndex='repo_group_name'\\n  valueIndex='num'\\n  seriesName='Stars'\\n  categoryType={false}\\n/>\\n\\n#### Stargazers from Top 50 Companies in the TiDB repo\\n\\nWe can see which companies (top 50) star the TiDB repo most in this pie chart. Among them, many open source enthusiasts from Chinese Internet giants such as Tencent, Alibaba, and Bytedance expressed their appreciation for TiDB. At the same time, hundreds of developers from Google, Microsoft and Facebook also starred the TiDB repository. It can be seen that TiDB is concerned and welcomed all around the world.\\n\\n<GroupSelect />\\n\\n<CommonChart\\n  chart='piechart'\\n  category='stars-top-50-company'\\n  formatSql={false}\\n  categoryIndex='company_name'\\n  valueIndex='stargazers'\\n  categoryType='owner'\\n  seriesName='Stargazers'\\n  repoId={tidbGroup}\\n  comparing\\n/>\\n\\n#### Countries/Regions of stargazers\\n\\nThis map will show you which country or region does stargazers come from. They make an issue to report the problem, or request a new feature.\\n\\nWe display the geographic information by all stargazers on the map. They come from 146 countries and regions except for Antarctica. It can be seen that in addition to China (where PingCAP is headquartered), the United States and Europe have gathered the most stargazers, and there are scattered stargazers in other regions. It can also be inferred that TiDB is popular all over the world.\\n\\n<CommonChart\\n  chart='worldmapchart'\\n  category='stars-map'\\n  formatSql={false}\\n  categoryIndex='country_or_area'\\n  valueIndex='count'\\n  seriesName='stargazers'\\n  effect={false}\\n  size={56}\\n  repoId={tidbGroup}\\n  comparing\\n/>\\n\\n### Issues\\n\\nTotal number of issues, issue submitters, issues comments, and issue commenters since 2011.\\n\\nJudging from the total number of issues, TiDB repository has a total of 155562 issues(2022-04-06), ranking the top 3 in all open source database repos. We judge the activeness of an open source repository by referring to the number of issues as well. Generally, the higher number of issues means more contributors are involved in a repository, which can presents the active level of it. Therefore, the activity of the TiDB repository can be considered to be at the forefront of the open source database area.\\n\\n<CommonChart\\n  chart='barchart'\\n  category='rt-osdb-ranking-by-issues'\\n  n={20}\\n  formatSql={false}\\n  categoryIndex='repo_group_name'\\n  valueIndex='num'\\n  seriesName='Issues'\\n  categoryType={false}\\n/>\\n\\nIn order to prevent the phenomenon of submitting issues maliciously(only open but not closed), we can also refer to the average opening/closing time and initial response time of issues in open source database repos to make the evaluation.\\n\\n#### Median time cost from open issue to close\\n\\n<CommonChart\\n  chart='barchart'\\n  category='rt-osdb-ranking-by-median-issue-open-to-close'\\n  n={20}\\n  formatSql={false}\\n  categoryIndex='repo_group_name'\\n  valueIndex='days'\\n  seriesName='Days'\\n  categoryType={false}\\n/>\\n\\n#### Median time cost from open issue to first response\\n\\n<CommonChart\\n  chart='barchart'\\n  category='rt-osdb-ranking-by-median-issue-open-to-first-respond'\\n  n={20}\\n  formatSql={false}\\n  categoryIndex='repo_group_name'\\n  valueIndex='days'\\n  seriesName='Days'\\n  categoryType={false}\\n/>\\n\\n#### Countries/Regions of Issue Openers\\n\\nThis map will show you which country or region issue creators come from. They make an issue to report the problem, or request a new feature.\\n\\nWe can see that in addition to China, contributors from 38 countries around the world have submitted issues for the TiDB repository from this map.\\n\\n<CommonChart\\n  chart='worldmapchart'\\n  category='issue-creators-map'\\n  formatSql={false}\\n  categoryIndex='country_or_area'\\n  valueIndex='count'\\n  seriesName='Issue openers'\\n  effect={false}\\n  size={56}\\n  repoId={tidbGroup}\\n  comparing\\n/>\\n\\n### Pull Requests\\n\\nTotal number of pull requests (PRs), PR creators, PR reviews, and PR reviewers since 2011.\\n\\nIn addition to stars and issues, the number of PRs is an important indicator for measuring the activity of repos. The higher number of PRs, are considered as a repository more active basically. In the following bar chart, the total number of PRs of TiDB ranks No.3 in all open source database repos after elasticsearch and cockroachdb, and the gap with second place is gradually narrowing.\\n\\n<CommonChart\\n  chart='barchart'\\n  category='rt-osdb-ranking-by-prs'\\n  n={20}\\n  formatSql={false}\\n  categoryIndex='repo_group_name'\\n  valueIndex='num'\\n  seriesName='PRs'\\n  categoryType={false}\\n/>\\n\\n#### Company of PR Creators about TiDB repository\\nThe pie charts describe the major companies of PR creators for each project.\\n\\nWe can also analyze the origin of PR creators about TiDB. If all PRs come from the same company, the definition of open source will be called into question. We use the pie chart below to show the Top 50 companies of contributors who submitted PRs for TiDB.\\n\\nOf course, as the parent company of TiDB, PingCAP has become a gathering place for PR creators. But what is surprising is that hundreds of open source enthusiasts from different companies also contributed to TiDB, and their proportion is  more than 60%, far exceeding PingCAP itself. This also shows that TiDB is a real open source database, and the TiDB community is a typical vibrant organization.\\n\\n<CommonChart\\n  chart='piechart'\\n  category='pull-request-creators-top-50-company'\\n  formatSql={false}\\n  categoryIndex='company_name'\\n  valueIndex='code_contributors'\\n  categoryType='owner'\\n  seriesName='Contributors'\\n  repoId={tidbGroup}\\n  comparing\\n/>\\n\\n:::info\\nIf you want to learn company distribution about other repository, please visit: https://ossinsight.io/compare.\\n:::\\n\\n#### Countries/Regions of PR Creators\\nThis map shows you where the PR creators come from and which countries or regions welcome the repository the best.\\n\\nFrom the perspective of geographical distribution, people who contributed to TiDB can also measure the repository's popularity and diversity in all open source database repos. We can see that TiDB is an active, inclusive, and international open source project in this map.\\n\\n<CommonChart\\n  chart='worldmapchart'\\n  category='pull-request-creators-map'\\n  formatSql={false}\\n  categoryIndex='country_or_area'\\n  valueIndex='count'\\n  seriesName='PR creators'\\n  effect={false}\\n  size={56}\\n  repoId={tidbGroup}\\n  comparing\\n/>\\n\\n#### Heat Map of Commits Time about PRs\\n\\nWe can also analyze the activity of open source repos from the commits time. The figure below shows the time heat map for PRs commits.\\n\\nThe Heat Maps of Commits Time display the number of push events occurring at a particular point of time. The Y-axis represents 7 days a week, and the X-axis represents 24 hours a day according to the Universal Time Coordinated (UTC). The lighter color in this heat map indicates that less push events occur at a particular point of time. On the contrary, the darker color indicates more push events occurring.\\n\\nFrom this heat map, we can see that the vast majority of PRs are committed between 2:00 - 16:00\uff08UTC\uff09indicating that in addition to the vast majority of Chinese contributors, there are also contributors from different time zones who have contributed to TiDB during working hours.\\n\\n<CommonChart\\n  chart='heatmapchart'\\n  category='commits-time-distribution'\\n  xIndex='hour'\\n  yIndex='dayofweek'\\n  valueIndex='pushes'\\n  formatSql={false}\\n  repoId={tidbGroup}\\n  comparing\\n/>\\n\\n#### Median time cost from open pull request to close it\\n\\nIt is unilateral to prove that the repository is active only by the number of submitted PRs. It is also necessary to pay attention to the life cycle of a PR (from open to close) to assist in analyzing the activity and health of open source repos. As you can see from the bar chart below, the PR life cycle length varies widely between repos. On average, hive and ignite take almost 120 days to close a PR, while TiDB, which is also on the list, only takes about 10 days.\\n\\n<CommonChart\\n  chart='barchart'\\n  category='rt-osdb-ranking-by-median-pr-open-to-merge'\\n  n={20}\\n  formatSql={false}\\n  categoryIndex='repo_group_name'\\n  valueIndex='days'\\n  seriesName='Days'\\n  categoryType={false}\\n/>\\n\\n### Contributors\\n\\nThe total number of contributors since 2011 about each repository.\\n\\n> by Contributors\\n\\nIn addition to the above three criteria for measuring the activity of an open source database repository, some interesting conclusions can be drawn from the analysis from the perspective of contributors.\\n\\nUsually, a non-full-time contributor will contribute no more than 100 PRs in the same repository (unless he/she is a super fan of the repository). In order to reasonable to assume whether the people participating in the open source community are real community members (not company employees). We group all contributors by the total number of PRs submitted by themselves into <= 10,<= 100,> 100. Then we can get insights of the TiDB community.\\n\\nIn order to obtain a comprehensive and objective analysis result, we recommend that the total number of contributors and the proportion of contributors be compared together. Contributors who submitted less than 10 PRs in the TiDB repository accounted for 76.8% of total PRs which is 806 contributors. There are more than 300 contributors who submitted more than 10 PRs for TiDB. It can be seen that the research and development resources of TiDB are very sufficient, and the quality of the code can be trusted.\\n\\n#### The percentage of different types of contributors in total contributors\\n*All contributors are classified according to the total number of PRs submitted by themselves into <= 10,<= 100,> 100.\\n\\n<ContributorsCharts type='contributors' percent/>\\n\\n<ContributorsCharts type='contributors'/>\\n\\n> by PRs\\n\\nWe can also measure the health of a repository with the percentage of the total number of PRs submitted by these different types of contributors.\\n7.4% of contributors created a total of 2082 PRs, 20.3% of contributors created a total of 5093 PRs, and 72.3% of contributors created 20245 PRs. This is a very healthy ratio.\\n\\n#### The percentage of the sum of PRs submitted by different types of contributors in total PRs\\n*All contributors are classified according to the total number of PRs submitted by themselves into <= 10,<= 100,> 100.\\n\\n<ContributorsCharts type='prs' percent/>\\n\\n<ContributorsCharts type='prs'/>\"},{\"id\":\"/deep-insight-about-oss-database-2021\",\"metadata\":{\"permalink\":\"/_blog/deep-insight-about-oss-database-2021\",\"source\":\"@site/_blog/deep-insight-about-oss-database-2021.mdx\",\"title\":\"Open Source Database Repos Landscape 2021\",\"description\":\"In this chapter, we will share with you some of the top Open Source Database repos (OSDB repos) on GitHub in 2021 measured by different metrics including the number of stars, PRs, contributors, countries, regions and so on.\",\"date\":\"2022-06-26T20:09:38.497Z\",\"formattedDate\":\"June 26, 2022\",\"tags\":[],\"readingTime\":1.945,\"truncated\":false,\"authors\":[],\"prevItem\":{\"title\":\"Why You Should Choose TiDB\",\"permalink\":\"/_blog/why-you-should-choose-tidb\"},\"nextItem\":{\"title\":\"Difference Between MySQL Compatible Databases\",\"permalink\":\"/_blog/difference-between-mysql-compatible-databases\"}},\"content\":\"import {CommonChart} from \\\"../src/components/CommonChart\\\";\\n\\nIn this chapter, we will share with you some of **the top Open Source Database repos (OSDB repos) on GitHub in 2021** measured by different metrics including the number of stars, PRs, contributors, countries, regions and so on. \\n\\nNote: \\n1. You can move your cursor onto any of the repository bars/lines on the chart and get the exact number. \\n2. The SQL commands above each chart are what we use on our TiDB Cloud to get the analytical results. Try those SQL commands by yourselves on TiDB Cloud with this [10-minute tutorial](/blog/try-it-yourself/).\\n\\n## Star history of top OSDB repos since 2011\\n\\nThe number of stars is often thought of as a measure of whether a github repository is popular or not. We sort all database repositories from github by the total number of historical stars since 2011. For visualizing the results more intuitively, we show the top 10 open source databases by using an interactive line chart. \\n\\n<CommonChart\\n  chart='dynamic-stars'\\n  category='archive-2021-top10-star-racing'\\n  formatSql={false}\\n  repo='db_repos'\\n/>\\n\\n## Top 10 the most starred OSDB repos in 2021\\n\\n<CommonChart\\n  chart='barchart'\\n  category='archive-2021-top10-by-stars'\\n  n={10}\\n  formatSql={false}\\n  categoryIndex='repo_name'\\n  valueIndex='stars'\\n  seriesName='Stars'\\n  repo='db_repos'\\n/>\\n\\n## Top 10 OSDB repos with the most PRs in 2021\\n\\n<CommonChart\\n  chart='barchart'\\n  category='archive-2021-top10-by-prs'\\n  n={20}\\n  formatSql={false}\\n  categoryIndex='repo_name'\\n  valueIndex='num'\\n  seriesName='PRs'\\n  repo='db_repos'\\n/>\\n\\n## Top 20 contributors in OSDB repos\\n\\n<CommonChart\\n  chart='barchart'\\n  category='archive-2021-top20-by-developers'\\n  formatSql={false}\\n  categoryIndex='actor_login'\\n  valueIndex='pr_count'\\n  categoryType='owner'\\n  seriesName='PRs'\\n  repo='db_repos'\\n/>\\n\\n## Top 20 OSDB repos with the highest YoY growth rate of stars in 2021\\n\\n<CommonChart\\n  chart='yoychart'\\n  category='archive-2021-top20-by-stars-yoy'\\n  formatSql={false}\\n  repo='db_repos'\\n/>\\n\\n## Top 10 OSDB repos with the lowest YoY growth rate of stars in 2021\\n\\n<CommonChart\\n  chart='yoychart'\\n  category='archive-2021-bottom10-by-yoy'\\n  formatSql={false}\\n  repo='db_repos'\\n/>\\n\\n## Top 5 programming languages used in OSDB repos in 2021\\n\\n<CommonChart\\n  chart='barchart'\\n  category='archive-2021-top5-by-languages'\\n  formatSql={false}\\n  categoryIndex='language'\\n  valueIndex='COUNT(*)'\\n  categoryType='lang'\\n  seriesName='PRs'\\n  repo='db_repos'\\n/>\\n\\n## Top 20 companies contributing the most to OSDB repos in 2021\\n\\n<CommonChart\\n  chart='barchart'\\n  category='archive-2021-top20-by-companies'\\n  formatSql={false}\\n  categoryIndex='company'\\n  valueIndex='users_count'\\n  seriesName='Contributors'\\n  categoryType={false}\\n  repo='db_repos'\\n/>\\n\\n## Top 10 countries/regions contributing the most to OSDB repos in 2021\\n\\n<CommonChart\\n  chart='worldmapchart'\\n  category='archive-2021-top10-by-regions'\\n  formatSql={false}\\n  categoryIndex='country_code'\\n  valueIndex='users_count'\\n  seriesName='Contributors'\\n  repo='db_repos'\\n/>\\n\\n## The Rankings of OSDB repos on GitHub measured by Z-score in 2021\\n\\nThe previous analysis results were only evaluated from a single dimension, now let's evaluate them from a multidimensional perspective. We can try to rank the repositories based on the [Z-score](https://en.wikipedia.org/wiki/Standard_score) standard.\\n\\nThis is the comprehensive ranking calculated by z-score:\\n\\n<CommonChart\\n  chart='zscorechart'\\n  category='archive-2021-archive-ranking'\\n  formatSql={false}\\n  repo='db_repos'\\n/>\"},{\"id\":\"/difference-between-mysql-compatible-databases\",\"metadata\":{\"permalink\":\"/_blog/difference-between-mysql-compatible-databases\",\"source\":\"@site/_blog/difference-between-mysql-compatible-databases.md\",\"title\":\"Difference Between MySQL Compatible Databases\",\"description\":\"Contributors\",\"date\":\"2022-04-08T00:00:00.000Z\",\"formattedDate\":\"April 8, 2022\",\"tags\":[],\"readingTime\":0.815,\"truncated\":true,\"authors\":[{\"name\":\"hooopo\",\"title\":\"Engineer of TiDB Community\",\"url\":\"https://twitter.com/hooopo\",\"imageURL\":\"https://github.com/hooopo.png\",\"key\":\"hooopo\"}],\"prevItem\":{\"title\":\"Open Source Database Repos Landscape 2021\",\"permalink\":\"/_blog/deep-insight-about-oss-database-2021\"}},\"content\":\"## Contributors\\n\\n> Contributors open pull requests, issues and comment in pr body & issue body\\n\\n<iframe width=\\\"100%\\\" height=\\\"400\\\" src=\\\"/charts/tidb-vs-mysql-compatible-databases-contributor.html?theme=vintage&v=3\\\"></iframe>\\n\\n\x3c!--truncate--\x3e\\n\\n## Contributions\\n> Total Number of Pull Request + Issue + Comment + Review\\n\\n<iframe width=\\\"100%\\\" height=\\\"400\\\" src=\\\"/charts/tidb-vs-mysql-compatible-databases-contribution.html?theme=vintage&v=3\\\"></iframe>\\n\\n\\n## Code\\n> lines of modified code: additions + deletions\\n\\n<iframe width=\\\"100%\\\" height=\\\"400\\\" src=\\\"/charts/tidb-vs-mysql-compatible-databases-code.html?theme=vintage&v=3\\\"></iframe>\\n\\n\\n### The top 10 pull request code additions+deletions of `percona/percona-server`\\n\\n```sql\\ngharchive_dev> select (additions+deletions) as lines_modified, concat('https://github.com/percona/percona-server/pull/', number) from github_ev\\n            -> ents where repo_name = 'percona/percona-server' order by lines_modified desc limit 10;\\n+----------------+-------------------------------------------------------------------+\\n| lines_modified | concat('https://github.com/percona/percona-server/pull/', number) |\\n+----------------+-------------------------------------------------------------------+\\n| 1847591        | https://github.com/percona/percona-server/pull/3474               |\\n| 1847131        | https://github.com/percona/percona-server/pull/3474               |\\n| 1611523        | https://github.com/percona/percona-server/pull/3978               |\\n| 1611239        | https://github.com/percona/percona-server/pull/3978               |\\n| 1526190        | https://github.com/percona/percona-server/pull/4204               |\\n| 1525900        | https://github.com/percona/percona-server/pull/4235               |\\n| 1525495        | https://github.com/percona/percona-server/pull/4235               |\\n| 1436855        | https://github.com/percona/percona-server/pull/4204               |\\n| 919569         | https://github.com/percona/percona-server/pull/4407               |\\n| 831538         | https://github.com/percona/percona-server/pull/3604               |\\n+----------------+-------------------------------------------------------------------+\\n10 rows in set\\nTime: 0.168s\\ngharchive_dev>\\n```\\n\\n\\n## Pull Requests\\n> Pull requests trend\\n\\n<iframe width=\\\"100%\\\" height=\\\"400\\\" src=\\\"/charts/tidb-vs-mysql-compatible-databases-pull-request.html?theme=vintage&v=3\\\"></iframe>\"}]}")}}]);