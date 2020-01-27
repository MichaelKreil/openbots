---
title: "Lecture Notes"
---

# TL;DR

"Social bots have influenced elections."  
Does it sound plausible? Yes.  
Is it scientifically founded? Not at all.

Many mistakes were made in the research and a lack of review allowed an unfounded theory to spread around the world.

# This talk...

… was held at the great [OpenFest Conference](https://www.openfest.org/2019/en/full-schedule/#lecture-515) in Sofia, Bulgaria, on November 2, 2019.

<div style="margin:auto; width:100%; width:min(100%,max(560px,80%))">
	<div style="position:relative; padding-bottom:56.25%; padding-top:0px; height:0;">
		<iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" src="https://www.youtube.com/embed/vyTmczjwFRE?start=99" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
	</div>
</div>

You can [download the slides](https://github.com/MichaelKreil/openbots/tree/master/slides) in multiple formats: [Apple Keynote](https://github.com/MichaelKreil/openbots/raw/master/slides/slides.key.zip), [PowerPoint](https://github.com/MichaelKreil/openbots/raw/master/slides/slides.pptx), [PDF](https://github.com/MichaelKreil/openbots/raw/master/slides/slides.pdf) and [PNGs](https://github.com/MichaelKreil/openbots/tree/master/slides/slides_png)

# Media coverage of the social bots theory

After the Brexit referendum and the election of Donald Trump in 2016, many media outlets have covered the theory that social bots have manipulated voters.

Almost all allegations are based on the work of only three research groups:

* Comprop/Oxford: »Computational Propaganda Research Project« of Oxford University.
* Southern California/Indiana: Work of Emilio Ferrara (University of Southern California) and Alessandro Flammini (Indiana University)
* Berkeley/Swansea: Work of Oleksandr Talavera and Tho Pham (Swansea University) and Yuriy Gorodnichenko (University of California at Berkeley).

This page explains which scientific errors have been made by the researchers and is to be considered as an addition to the talk linked above.

<p align="center"><img src="https://github.com/MichaelKreil/openbots/raw/master/graphics/articles_mk-01.png" width="80%"/></p>

*download the list of articles as [TSV](https://github.com/MichaelKreil/openbots/raw/master/data/media/media_coverage.tsv) or [Excel](https://github.com/MichaelKreil/openbots/raw/master/data/media/media_coverage.xlsx)<!-- and play with the [interactive version](https://data.info.graphics/blog/2018/12/21/social-bot-research-is-flawed/)-->*

# Research team: Comprop/Oxford

["The Computational Propaganda Project"](https://comprop.oii.ox.ac.uk) of the Oxford Internet Institute is the most widely used source of the claim that Social Bots manipulate voter opinion.
In particular, the work of Bence Kollanyi and Philip N. Howard focuses on the [Brexit referendum](https://comprop.oii.ox.ac.uk/research/working-papers/bots-strongerin-and-brexit-computational-propaganda-during-the-uk-eu-referendum/) ([PDF](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/06/COMPROP-2016-1.pdf)), the [First](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-first-u-s-presidential-debate/) ([PDF](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/10/Data-Memo-First-Presidential-Debate.pdf)), [Second](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-second-u-s-presidential-debate/) ([PDF](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/10/Data-Memo-Second-Presidential-Debate.pdf)) and [Third](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-third-u-s-presidential-debate/) ([PDF](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-third-u-s-presidential-debate/)) U.S. Presidential Debate and the [U.S. Election](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-u-s-election/) ([PDF](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/11/Data-Memo-US-Election.pdf))

## Understanding the method

According to this research team, the central criterion used to detect social bots is:

> We define a high level of automation as accounts that post at least 50 times a day using one of these election-related hashtags[…]

This criterion is a pure assertion and has never been scientifically tested. 50 tweets per day is a number of posts that can be easily achieved by a human: Automation is not necessary to reach that amount. A lot of accounts tweet more than 50 tweets per day, including journalist [Glenn Greenwald](https://twitter.com/ggreenwald) (50.2 tweets/day), author [Cory Doctorow](https://twitter.com/doctorow) (142.2 tweets/day) or member of the German parliament [Johannes Kahrs](https://twitter.com/kahrs) (up to 300 tweets/day).

## Verifying the method

The simplest way to verify this method is to apply it to a group of users that are certified to not be social bots. In this case we can use verified accounts. Verified accounts have gone through a strict process that allows Twitter to certify that account holders – companies, media outlets, celebrities – have proven their identity.

I scanned Twitter to find a sample of around 300'000 verified Twitter accounts. Then I scanned all the tweets published by these accounts during a period of 9 days between 2018-11-20 00:00:00 and 2018-11-29 00:00:00.

Of 306'954 verified accounts, 4'475 published 450 tweets or more in these 9 days, thus meeting the criterion of 50 tweets per day. This means that, when the Comprop/Oxford method is applied, 1.46% of these verified accounts are categorised as social bots.

The Comprop/Oxford research used the same method on all Twitter accounts that tweeted with hashtags related to the US elections. One would expect that among those accounts, the amount of social bots is higher than in a pool that consists exclusively of verified users. The result of their research, however, is that only 0.11% of the accounts that tweeted with hashtags related to the US election are social bots (see [page 4](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/11/Data-Memo-US-Election.pdf)) – a number which is much lower than the results produced when the method is applied to the verified accounts.

Why should there be more social bots among users that have been verified by Twitter than among accounts tweeting about elections? There is no other scientific explanation for these results than a flaw in the method itself.

While the Comprop/Oxford paper cites these numbers of accounts categorised as social bots, its main focus is the number of tweets that are categorised as published by a social bot. Still using the test group consisting of verified accounts, I obtained the result that 30.7% (4.1m of 13.3m) of the tweets were published by so-called social bots. On [page 3](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/11/Data-Memo-US-Election.pdf) of the Comprop/Oxford publication, the researchers claim that 17.9% of all tweets published during the US election were generated by automated accounts. Here again, according to this method, there would be more tweets published by social bots among verified accounts than among US elections tweets.

You can verify my results by using the [code](https://github.com/MichaelKreil/openbots/tree/master/code/comprop_oxford) and the [data](https://github.com/MichaelKreil/openbots/tree/master/code/comprop_oxford) published in this [GitHub repository](https://github.com/MichaelKreil/openbots).

# Research team: South California/Indiana

The results produced by the research team of South California/Indiana are strongly diverging from the results of the Comprop/Oxford team. While the latter claims that **0.1%** of Twitter accounts using US elections related hashtags are automated, [the South California/Indiana claims](https://firstmonday.org/article/view/7090/5653) that they found an even higher amount of bots: **14.4%**! This is about 140 times more than the results obtained by the Comprop/Oxford team.

Their method uses machine learning (papers: [arXiv:1602.00975](https://arxiv.org/abs/1602.00975), [arXiv:1703.03107](https://arxiv.org/abs/1703.03107)).

> To train our system we initially used a publicly available dataset consisting of 15K manually verified Twitter bots identified via a honeypot approach (Lee, Eoff, and Caver- lee 2011) and 16K verified human accounts.

## Spam accounts are not bots

For this research the team used a training data set which they call “verified Twitter bots”. The origin of this data set is another research paper that doesn’t use the term bots, but "[content polluters](https://pdfs.semanticscholar.org/b433/9952a73914dc7eacf3b8e4c78ce9a5aa9502.pdf)", described as “spammers”, “malware disseminators” and other similar accounts. Twitter bots and content polluters are two very different terms, and it is scientifically wrong to simply reframe a data set.

In short: The South California/Indiana researchers seemingly trained a system to detect spam and malware accounts instead of social bots. That is a distinction that is very important to be made.

## Verifying the method

Test the social bot detection tool (“Botometer”) produced by the California/Indiana research team here: [botometer.iuni.iu.edu](https://botometer.iuni.iu.edu)

### US congress
When I tested this tool in April 2018, about half of US Congress members present on Twitter were classified as bots by the tool produced by the South California/Indiana team:

<p align="center"><img src="https://github.com/MichaelKreil/openbots/raw/master/graphics/congress_mk-01.png" width="80%"/></p>

*download the [raw data as JSON](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/botometer_congress.json)<!-- and play with the [interactive version](https://data.info.graphics/blog/2018/12/21/social-bot-research-is-flawed/)-->*

### Other examples

I have collected examples of the misclassification of various groups of people by this tool in a [Twitter thread](https://twitter.com/MichaelKreil/status/1125025823868760065).

- **10.5%** of NASA-related accounts are **misclassified** as bots ([Twitter list](https://twitter.com/USAGov/lists/nasa/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/USAGov_list_nasa.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/USAGov_list_nasa.ndjson.gz))
- **12%** of Nobel Prize Laureates are **misclassified** as bots ([Twitter list](https://twitter.com/nobelprize/lists/nobel-laureates/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/NobelPrize_list_nobel-laureates.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/NobelPrize_list_nobel-laureates.ndjson.gz))
- **14%** of female directors are **misclassified** as bots ([Twitter list](https://twitter.com/TheDirectorList/lists/women-directors/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/TheDirectorList_list_women-directors.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/TheDirectorList_list_women-directors.ndjson.gz))
- **17.7%** of Reuters journalists are **misclassified** as bots ([Twitter list](https://twitter.com/Reuters/lists/all-journos-list-1/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/Reuters_list_all-journos-list-1.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/Reuters_list_all-journos-list-1.ndjson.gz))
- **21.9%** of staff members of UN Women are **misclassified** as bots ([Twitter list](https://twitter.com/UN_Women/lists/un-women-staff-on-twitter/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/UN_Women_list_un-women-staff-on-twitter.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/UN_Women_list_un-women-staff-on-twitter.ndjson.gz))
- **35.9%** of the staff of german news agency "dpa" are **misclassified** as bots ([Twitter list](https://twitter.com/dpa/lists/dpa-mitarbeiter/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/dpa_list_dpa-mitarbeiter.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/dpa_list_dpa-mitarbeiter.ndjson.gz))
- **36%** of known bots by New Scientist are **misclassified** as humans ([Twitter list](https://twitter.com/newscientist/lists/twitterbots/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/newscientist_list_twitterbots.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/newscientist_list_twitterbots.ndjson.gz))
- **60.7%** of the bots collected by [Botwiki](https://botwiki.org/bots/) are **misclassified** as humans ([results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/file_bots.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/file_bots.ndjson.gz))

### Reverse engineering

The Botometer is not a scientific instrument, yet many scientists base their research on its results. All those papers are thus based on a tool with unacceptably high error rates. This makes all these research papers invalid.

One of these research papers is:  
Tobias R. Keller & Ulrike Klinger (2019) Social Bots in Election Campaigns: Theoretical, Empirical, and Methodological Implications, Political Communication, 36:1, 171-189, DOI: [10.1080/10584609.2018.1526238](https://doi.org/10.1080/10584609.2018.1526238)

In this case the researchers scraped 600'000 to 800'000 Twitter accounts following the seven major political parties in Germany. They then proceeded to check every account with the Botometer API, which led to the conclusion, that 7.1% to 9.9% of these accounts are bots.

I reproduced the work of this research group in order to get the list of accounts they claim to be social bots. These many data points allow us to reverse engineer the Botometer algorithm using Dimension Reduction ([UMAP](https://github.com/lmcinnes/umap)):

<p align="center"><img src="https://github.com/MichaelKreil/openbots/raw/master/graphics/reverse_engineering_botometer.png" width="80%"/></p>

*You can find [this tool](https://michaelkreil.github.io/reverse_engineering_botometer/) and the [code](https://github.com/MichaelKreil/reverse_engineering_botometer) online.*

Generally speaking, accounts were misclassified as social bots if they:
- sent only one tweet, e.g. people who have tried Twitter once, but never used it again,
- have been inactive for a long period of time, e.g. people who have left Twitter,
- are not mentioned by other accounts, e.g. people whose tweets don’t generate replies.

Accounts with one of these properties represent the vast majority of misclassified accounts. However, none of these properties prove that these accounts are social bots.

Interestingly, this issue is reflected in a reproducible flaw of the Botometer: If one creates a new Twitter account and send only one tweet, this account will immediately be classified as a social bot by this tool.

## Studies of other researchers using botometer

- [Cannabis Surveillance With Twitter Data: Emerging Topics and Social Bots.](https://doi.org/10.2105/AJPH.2019.305461)
- [Social Bots in Election Campaigns: Theoretical, Empirical, and Methodological Implications](https://doi.org/10.1080/10584609.2018.1526238)

## Summary

Botometer is a *blackbox algorithm* that classifies people as bots and can thus delegitimise the cause of entire movements.

# Research team: Berkeley/Swansea

## Overview
See the [blog post of Mike Hearn](https://blog.plan99.net/did-russian-bots-impact-brexit-ad66f08c014a):

> It is the most irresponsible abuse of maths I’ve seen for a long time.

## "Measuring" the influence of social bots

In their [paper](https://ideas.repec.org/p/swn/wpaper/2018-01.html) ([PDF](https://rahwebdav.swan.ac.uk/repec/pdf/WP2018-01.pdf)) *"Social media, sentiment and public opinions: Evidence from #Brexit and #USElection"* this research team claims that social bots had an influence on the elections they focused on. According to this research, during the Brexit referendum, social bots allegedly shifted the results of the vote by 1.76 percentage points towards "leave", and in the 2016 US elections, by 3.23 percentage points towards Trump. (pages 19-20)

How was this result obtained? In section 2.5 (page 10) the researchers claim to find a correlation between election results and the amounts of tweets using various political hashtags. This correlation is logical as many Twitter users are also voters. The political opinions of voters are directly reflected by the political opinions expressed on Twitter.

The research team of Berkeley/Swansea calculated the correlation between selected hashtags and the results of the Brexit and US elections (see Figure 5 on page 30), claiming that the content of tweets is influencing votes. They interpreted the results as a proof that those tweets influenced the election results, instead of considering the simpler explanation: Tweets reflect the existing political opinions of the people who publish the tweets. Correlation doesn’t mean causality!

# Other research teams

## Birmingham

Sasha Talavera, Professor of Financial Economics at the University of Birmingham, claims that Scottish politician [Nicola Sturgeon ‘has 73,000 fake Twitter followers’](https://www.thetimes.co.uk/edition/scotland/nicola-sturgeon-has-73-000-fake-twitter-followers-says-university-study-7ldz322lr). He defines social bots as ["users with exactly 8 digits in usernames"](https://twitter.com/SashaTalavera/status/1193963253438844928). Adding 8 digits to names of new users to create handles is the standard naming scheme for new users joining Twitter: 8 digits are a sign that a new user accepted the default that was proposed to them by Twitter, which is in no way a proof that a user is fake.

## The Nicholson Foundation; The Public Good Projects

The "Public Good Projects" published a study titled [Social Bots Likely Responsible for Majority of E-cig Marketing Messages](https://www.prnewswire.com/news-releases/socialbots-likely-responsible-for-majority-of-e-cig-marketing-messages-300937822.html). Large media outlets like the Wall Street Journal [covered this story](https://www.wsj.com/articles/congress-probes-bot-generated-social-media-messages-about-e-cigarettes-11571045405).

Amelia Howard had a [deeper look at this claim](https://threadreaderapp.com/thread/1184257476348260352.html) ([original Twitter thread](https://twitter.com/amelia_rh/status/1184257476348260352)) and came to the [conclusion](https://twitter.com/Amelia_RH/status/1184499335129632768?s=20):

> This myth of bot-dominated online vape advocacy is cut from whole cloth. But credible actors are spreading it & people who don't know better believe them. This is causing massive harm. Bad social science is just as dangerous as bad "hard" science.

# Counter-research

A research paper dismissing the social bots theory is currently being written by an academic research team and will be linked here as soon as it is public. You can also read the article I wrote on the topic with Florian Gallwitz of the University of Nuremberg in the German newspaper Tagesspiegel: [The "Social Bot" Fairy Tale](https://background.tagesspiegel.de/digitalisierung/the-social-bot-fairy-tale)
I am looking for other research on the topic: Please get in touch with me if you know other examples!

# Legislative Initiatives

Here are some legislative initiatives that were caused by the spreading of the flawed research on social bots.

## California
[The state of California passed a law](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB1001) that forces people to disclose when they use bots for communication. [WIRED: "But upon deeper inspection, California’s bot bill is hollow."](https://www.wired.com/story/law-makes-bots-identify-themselves/)

## Germany

[German NGO LOAD e.V. gives an overview on Germany's new State Media Treaty (in German)](https://www.load-ev.de/2019/10/30/wir-brauchen-eine-faktenbasierte-digital-und-medienpolitik-regulierung-von-social-bots-im-neuen-medienstaatsvertrag/):

>  The draft of the State Media Treaty defines "social bots" [...] as follows:

> >  "Providers of telemedia services in social networks are obliged to indicate the use of automation when content or messages are created automatically by a computer program, provided that the user account used for this purpose has been made available for use by natural persons on the basis of its external appearance. The shared content or the message must be preceded or accompanied by a clearly legible indication that it has been automatically created and sent using a computer program controlling the user account. This provision applies not only if content and messages are generated automatically immediately before they are sent, but also if they are sent automatically using a pre-programmed content or message.

> This means that every account that has a profile picture showing a person (and probably a name that appears to belong to a person) and posts or tweets automatically is a "social bot". Aha. Does that mean that as soon as I schedule a tweet with Hootsuite, for example, because it should be tweeted at a specific time for some reason, I am a social bot?

(Original text in German, this is my unofficial translation.)

# Summary

Social Bot research is scientifically inaccurate on all levels.

In the last years the claim that "Social bots influenced elections" has spread widely. This theory can be fully explained by serious scientific mistakes made by researchers.

All the papers about social bots have to be reviewed again and have to be revoked if necessary.

This includes all other research from all other groups that have based their research on these flawed methods.

Do social bots exist? Probably.
However, there is no evidence that they exist in large numbers, have influenced elections in any way or caused any other sort of problems.

Other reasons must be considered as potential causes for the election of Donald Trump, Brexit, the rise of the AfD in Germany and other similar issues: Outdated electoral systems, gerrymandering, the crisis of media, an easier rise of social movements through social media, right-wing narratives, and especially racism as a mass phenomenon are among the contemporary dynamics that should be studied as possible explanations for the main political events of the last years.
