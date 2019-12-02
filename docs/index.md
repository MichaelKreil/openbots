---
title: "Lecture Notes"
---

# TL;DR

Social Bot research is a total disaster!

The whole theory of "Social Bots influenced elections" can be fully explained by serious scientific mistakes made by some researchers.

# The presentation

… was held at the great [OpenFest Conference](https://www.openfest.org/2019/en/full-schedule/#lecture-515) in Bulgaria on 2 November 2019.

*The recording will probably appear on YouTube at the end of November, and then added here.*

You can [**download the slides**](https://github.com/MichaelKreil/openbots/tree/master/slides) in multiple formats: [Apple Keynote](https://github.com/MichaelKreil/openbots/raw/master/slides/slides.key.zip), [PowerPoint](https://github.com/MichaelKreil/openbots/raw/master/slides/slides.pptx), [PDF](https://github.com/MichaelKreil/openbots/raw/master/slides/slides.pdf) and [PNGs](https://github.com/MichaelKreil/openbots/tree/master/slides/slides_png)

# Media coverage of Social Bots

Since the end of 2016, after the Brexit referendum and the election of Donald Trump, many media outlets have covered the theory that Social Bots have manipulated voters.

Almost all allegations are based on only three research groups:

* Comprop/Oxford: »Computational Propaganda Research Project« of Oxford University.
* Southern California/Indiana: Work of Emilio Ferrara (University of Southern California) and Alessandro Flammini (Indiana University)
* Berkeley/Swansea: Work of Oleksandr Talavera and Tho Pham (Swansea University) and Yuriy Gorodnichenko (University of California at Berkeley).

<p align="center"><img src="https://github.com/MichaelKreil/openbots/raw/master/graphics/articles_mk-01.png" width="80%"/></p>

*download the list of articles as [TSV](https://github.com/MichaelKreil/openbots/raw/master/data/media/media_coverage.tsv) or [Excel](https://github.com/MichaelKreil/openbots/raw/master/data/media/media_coverage.xlsx) and play with the [interactive version](https://data.info.graphics/blog/2018/12/21/social-bot-research-is-flawed/)*

# Research team: Comprop/Oxford

["The Computational Propaganda Project"](https://comprop.oii.ox.ac.uk) of the Oxford Internet Institute is the most widely used source of the claim that Social Bots manipulate voter opinion.
In particular, the work of Bence Kollanyi and Philip N. Howard focuses on the [Brexit referendum](https://comprop.oii.ox.ac.uk/research/working-papers/bots-strongerin-and-brexit-computational-propaganda-during-the-uk-eu-referendum/) ([PDF](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/06/COMPROP-2016-1.pdf)), the [First](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-first-u-s-presidential-debate/) ([PDF](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/10/Data-Memo-First-Presidential-Debate.pdf)), [Second](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-second-u-s-presidential-debate/) ([PDF](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/10/Data-Memo-Second-Presidential-Debate.pdf)) and [Third](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-third-u-s-presidential-debate/) ([PDF](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-third-u-s-presidential-debate/)) U.S. Presidential Debate and the [U.S. Election](https://comprop.oii.ox.ac.uk/research/working-papers/bots-and-automation-over-twitter-during-the-u-s-election/) ([PDF](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/11/Data-Memo-US-Election.pdf))

## Criterion

Their central criterion for Social Bots is:

> We define a high level of automation as accounts that post at least 50 times a day using one of these election-related hashtags…

This criterion is a pure assertion that has never been scientifically tested. 50 tweets per day is nothing that makes automation necessary. There are a lot of accounts that tweet more than 50 tweets per day, including journalist [Glenn Greenwald](https://twitter.com/ggreenwald) (50.2 tweets/day), author [Cory Doctorow](https://twitter.com/doctorow) (142.2 tweets/day) or member of the german parliament [Johannes Kahrs](https://twitter.com/kahrs) (up to 300 tweets/day).

## Falsifying the method

The easiest way to verify a method is to apply it to a group where we can be sure that it does not contain Social Bots. In this case we can use verified accounts. These accounts have been verified by Twitter that they are not controlled by "Russian AI", but by companies, media outlets and celebrities who can prove their identity.

I scanned Twitter to find a sample of around 300'000 verified Twitter accounts. Then I scanned all their tweets they published in 9 days between 2018-11-20 00:00:00 and 2018-11-29 00:00:00.

Of 306'954 verified accounts, 4'475 send 450 tweets or more in these 9 days, reaching the criterion of 50 tweets per day.
This means, 1.46% of these verified accounts are Social Bots according to the Comprop/Oxford method, more than the 0.11% they found in the 2016 US elections (see [page 4](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/11/Data-Memo-US-Election.pdf)).

On [page 3](http://blogs.oii.ox.ac.uk/politicalbots/wp-content/uploads/sites/89/2016/11/Data-Memo-US-Election.pdf) they claimed that 17.9% of all tweets are generated by automated accounts during elections. If I use the same method on the tweets by verified accounts I reach even 30.7% (4.1m of 13.3m tweets).

You can verify my results by using [code](https://github.com/MichaelKreil/openbots/tree/master/code/comprop_oxford) and [data](https://github.com/MichaelKreil/openbots/tree/master/code/comprop_oxford) in this [GitHub repository](https://github.com/MichaelKreil/openbots).

# Research team: South California/Indiana

This team got totally different results. While Comprop/Oxford claims that **0.1%** of Twitter accounts using US elections related hashtags are automated, [South California/Indiana claims](https://firstmonday.org/article/view/7090/5653) that they even found **14.4%** bots!

Their method uses machine learning (papers: [arXiv:1602.00975](https://arxiv.org/abs/1602.00975), [arXiv:1703.03107](https://arxiv.org/abs/1703.03107)).

> To train our system we initially used a publicly available dataset consisting of 15K manually verified Twitter bots identified via a honeypot approach (Lee, Eoff, and Caver- lee 2011) and 16K verified human accounts.

## Trained with spam

Interestingly, their training data set of "verified Twitter bots" comes from a research team that does not call them bots, but "[Content Polluters](https://pdfs.semanticscholar.org/b433/9952a73914dc7eacf3b8e4c78ce9a5aa9502.pdf)".

So South California/Indiana may not have trained a system to detect Social Bots, but spam accounts. That is a distinction that is very important to be made!

## Falsifying the method

You can test the Social Bot detection tool yourself: [botometer.iuni.iu.edu](https://botometer.iuni.iu.edu)

### US congress
When I tested the system in April 2018, about half of US Congress members on Twitter were classified as bots:

<p align="center"><img src="https://github.com/MichaelKreil/openbots/raw/master/graphics/congress_mk-01.png" width="80%"/></p>

*download the [raw data as JSON](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/botometer_congress.json) and play with the [interactive version](https://data.info.graphics/blog/2018/12/21/social-bot-research-is-flawed/)*

### Other examples

I have collected some examples of the misclassification of groups of people in a [Twitter thread](https://twitter.com/MichaelKreil/status/1125025823868760065).

- **10.5%** of NASA related accounts are **misclassified** as bots ([Twitter list](https://twitter.com/USAGov/lists/nasa/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/USAGov_list_nasa.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/USAGov_list_nasa.ndjson.gz))
- **12%** of Nobel Prize Laureates are **misclassified** as bots ([Twitter list](https://twitter.com/nobelprize/lists/nobel-laureates/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/NobelPrize_list_nobel-laureates.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/NobelPrize_list_nobel-laureates.ndjson.gz))
- **14%** of female directors are **misclassified** as bots ([Twitter list](https://twitter.com/TheDirectorList/lists/women-directors/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/TheDirectorList_list_women-directors.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/TheDirectorList_list_women-directors.ndjson.gz))
- **17.7%** of Reuters journalists are **misclassified** as bots ([Twitter list](https://twitter.com/Reuters/lists/all-journos-list-1/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/Reuters_list_all-journos-list-1.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/Reuters_list_all-journos-list-1.ndjson.gz))
- **21.9%** of UN women staff are **misclassified** as bots ([Twitter list](https://twitter.com/UN_Women/lists/un-women-staff-on-twitter/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/UN_Women_list_un-women-staff-on-twitter.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/UN_Women_list_un-women-staff-on-twitter.ndjson.gz))
- **35.9%** of the staff of german news agency "dpa" are **misclassified** as bots ([Twitter list](https://twitter.com/dpa/lists/dpa-mitarbeiter/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/dpa_list_dpa-mitarbeiter.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/dpa_list_dpa-mitarbeiter.ndjson.gz))
- **36%** of known bots by New Scientist are **misclassified** as humans ([Twitter list](https://twitter.com/newscientist/lists/twitterbots/members), [results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/newscientist_list_twitterbots.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/newscientist_list_twitterbots.ndjson.gz))
- **60.7%** of the bots collected by [Botwiki](https://botwiki.org/bots/) are **misclassified** as humans ([results](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/file_bots.tsv), [raw data](https://github.com/MichaelKreil/openbots/raw/master/data/southcalifornia_indiana/file_bots.ndjson.gz))

### Reverse engineering

The botometer is not a scientific instrument, yet many scientists have used it for their research. All their papers are based on a tool that achieves error rates of 50% and more. So all these papers are basically invalid.

One of these papers is:  
Tobias R. Keller & Ulrike Klinger (2019) Social Bots in Election Campaigns: Theoretical, Empirical, and Methodological Implications, Political Communication, 36:1, 171-189, DOI: [10.1080/10584609.2018.1526238](https://doi.org/10.1080/10584609.2018.1526238)

They scraped 600'000/800'000 Twitter accounts following the seven major parties in Germany. Then they checked every account with Botometer and of course came to the conclusion, that 7.1/9.9% are bots.

I completely reproduced their work to get the list of accounts they claim to be Social Bots (which of course are not Social Bots). But these many data points allow us to reverse engineer the botometer algorithm using Dimension Reduction ([UMAP](https://github.com/lmcinnes/umap)):

<p align="center"><img src="https://github.com/MichaelKreil/openbots/raw/master/graphics/reverse_engineering_botometer.png" width="80%"/></p>

*You can find [this tool](https://michaelkreil.github.io/reverse_engineering_botometer/) and the [code](https://github.com/MichaelKreil/reverse_engineering_botometer) online.*

Results: Typically, accounts were misclassified as Social Bots if they:
- send just one tweet, e.g. people have tried Twitter once, but never used it again,
- are inactive for a longer time, e.g. people have left Twitter,
- were not mentioned by other accounts, e.g. because people twittered boring stuff.

Accounts with one of these properties are the vast majority in the group of misclassified accounts. However, none of these properties prove that they are Social Bots.

Interestingly, this shows a reproducible problem of botometer: If you create a new Twitter account and send only one tweet, you will immediately be classified as a Social Bot.

## Summary

> Botometer is a *blackbox algorithm* that classifies people as bots and delegitimises movements.

# Research team: Berkeley/Swansea

## Overview
See the [blog post of Mike Hearn](https://blog.plan99.net/did-russian-bots-impact-brexit-ad66f08c014a):

> It is the most irresponsible abuse of maths I’ve seen for a long time.

## "Measuring" the influence of Social Bots

In their [paper](https://ideas.repec.org/p/swn/wpaper/2018-01.html) ([PDF](https://rahwebdav.swan.ac.uk/repec/pdf/WP2018-01.pdf)) *"Social media, sentiment and public opinions: Evidence from #Brexit and #USElection"* they claim that Social Bots had an influence on elections. During the Brexit referendum, Social Bots allegedly shifted 1.76 percentage points of the results towards pro-"leave" and in the 2016 US elections 3.23 percentage points towards pro-Trump. (pages 19-20)

How did they calculate that? In section 2.5 (page 10) they find that there is a correlation between election results and the number of tweets using different political hashtags. This makes sense because many Twitter users are also voters. The "mood" in the country thus has a direct causal influence on the "mood" on Twitter. The research team of Berkeley/Swansea has therefore calculated the correlation for Brexit and US Elections (see Figure 5 on page 30) and now come to the awkward conclusion that if there are more fake tweets on Twitter, this also influences the "mood" in the entire country. That's just ridiculous!

# Other research teams

## Birmingham

Sasha Talavera, Professor of Financial Economics at the University of Birmingham, claims that Scottish politician [Nicola Sturgeon ‘has 73,000 fake Twitter followers’](https://www.thetimes.co.uk/edition/scotland/nicola-sturgeon-has-73-000-fake-twitter-followers-says-university-study-7ldz322lr). He defines Social Bots as ["users with exactly 8 digits in usernames"](https://twitter.com/SashaTalavera/status/1193963253438844928). This is ridiculous, because this is the standard naming scheme for new users joining Twitter.

## The Nicholson Foundation; The Public Good Projects

The "Public Good Projects" claims that [Social Bots Likely Responsible for Majority of E-cig Marketing Messages](https://www.prnewswire.com/news-releases/socialbots-likely-responsible-for-majority-of-e-cig-marketing-messages-300937822.html). Even the Wall Street Journal [published this story](https://www.wsj.com/articles/congress-probes-bot-generated-social-media-messages-about-e-cigarettes-11571045405).

Amelia Howard had a [deeper look](https://threadreaderapp.com/thread/1184257476348260352.html) ([original Twitter thread](https://twitter.com/amelia_rh/status/1184257476348260352)) and came to the [conclusion](https://twitter.com/Amelia_RH/status/1184499335129632768?s=20):

> This myth of bot-dominated online vape advocacy is cut from whole cloth. But credible actors are spreading it & people who don't know better believe them. This is causing massive harm. Bad social science is just as dangerous as bad "hard" science.

*(["cut from whole cloth": Entirely fictional or utterly false…](https://idioms.thefreedictionary.com/cut+from+whole+cloth))*

# Counter-Research

- article [The "Social Bot" Fairy Tale](https://background.tagesspiegel.de/digitalisierung/the-social-bot-fairy-tale)
- others?

# Legislative Initiatives

## California
[California passed a law](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB1001) that forces people to disclose when they use bots for communication. [WIRED: "But upon deeper inspection, California’s bot bill is hollow."](https://www.wired.com/story/law-makes-bots-identify-themselves/)

## Germany

[LOAD e.V. gives an overview on Germany's new State Media Treaty (in german)](https://www.load-ev.de/2019/10/30/wir-brauchen-eine-faktenbasierte-digital-und-medienpolitik-regulierung-von-social-bots-im-neuen-medienstaatsvertrag/):

> The draft of the State Media Treaty defines "social bots" as follows:
> > Providers of telemedia services in social networks are obliged to indicate the fact of automation in the case of content or messages created automatically by means of a computer program, provided that the user account used for this purpose has been made available for use by natural persons in accordance with its external appearance. The shared content or the message must be preceded or accompanied by a clearly legible indication that it has been automatically created and sent using a computer program controlling the user account. A creation in the sense of this regulation is not only present, if contents and messages are generated immediately before the sending automated, but also, if with the sending automated on a prefabricated content or a pre-programmed message is used.
> This means that every account that has the profile photo of a person (and probably a name that looks like a person) and posts or tweets automatically is a "social bot". Does that mean that as soon as I schedule a tweet with Hootsuite, for example, because it is supposed to be tweeted at a certain time for whatever reason, I am a social bot?

# Summary

Social Bot research is a total disaster!

The whole theory of "Social Bots influenced elections" can be fully explained by the failure of some research groups.

All their papers have to be reviewed again and have to be revoked if necessary.

This includes all other research from all other groups, using their methods.
