---
layout: post
title:  "Redesigning Vimcasts: The Analytics Overview"
date:   2014-02-05 
categories: blog
excerpt: I've been working with Drew Neil to develop a content strategy for the popular developers' site, Vimcasts. I've learnt a lot from the user survey. For example, a majority of the 216 respondents would like Drew to add tags, categories and search. Now, I dig down into the analytics to track how people currently use the Vimcasts site.
---

>*Users will only give feedback if they're motivated to speak up – whether in praise or scorn – but metrics reflect users' unspoken opinions.*
> Bowles and Box, [Undercover User Experience Design][undercover]

I've been working with Drew Neil to develop a content strategy for the popular developers' site, Vimcasts. I've learnt a lot from the [user survey][survey]. Now, I dig down into the analytics to track how people have been using the Vimcasts site.

I looked at data from Jan 30 2013 to Jan 30 2014 using Google Analytics. This is the overview:

* 170,458 unique visitors
* 2.02 average pages visited
* 2:42 mins average time spent on site
* 68.49% bounce rate
* 51.28% new visitors
* average of 3,000-4,500 unique visitors a week, apart from a huge spike at the end of Feb thanks to a blog post hitting the front page of Hacker News
* the user profile is international, although the highest number of visitors coming from the US (33.11%)
* in terms of operating systems, 34.46% of visitors use mac, 31.46% linux and 24.06% windows

<img class = "Vimcasts_unique_visitors" src="/images/Vimcasts_unique_visitors.png" alt="a screenshot of Vimcasts unique visitors over the course of a year">

###What data should I look at?

It's easy to get lost in data, so I wanted to concentrate on analytics that had a direct relevance to our broad content strategy goals:

* We'd like to increase people's engagement with the site by making the content easier to navigate on all devices. Is user engagement actually a problem at the moment? If so, how?
* We'd like to increase traffic to the site through a broader social media strategy. What's the relation between social media and the site at the moment?
* We'd like to give more visibility to training, publications and pro-screencasts. How are these product pages performing at the moment?

###Could user engagement be improved?

Yep. One possible warning sign is the bouce rate: at 68.49% it's quite high. Of course, bouce rates are pretty mysterious beasts at the best of times. A high bounce rate doesn't have to be bad: it could mean that the visitor found what they were looking for on the first page they hit. Also, some people might subscribe through RSS (or some other channel) after liking what they see.

However, given that our [user survey][survey] suggested that people would really like Drew to make it easier for them to find content through addings categories and search, I'm guessing that **some site visitors are deciding to jump elsewhere because they land on a page that isn't quite relevant and they can't find what they need quick enough**. Or they land on a page and aren't clear enough about what the site is and how it can help them. Or they don't want to invest time and valuable band-width in watching a 5 minute screencast. Or they are interested in Vim but see Vimcasts as being targeted at intermediate and advanced users – with some justification. Or they aren't confident in their language skills. Or they are searching for Vim, the cleaning product. 

####Let's explore these engagement issues some more

There are 235,812 visits of only 0-10 seconds to the site which decreases to 10,292 visits for 31-60 seconds. The duration of visits then increases again: 20,732 visits last for 601-1800 seconds. This isn't so surprising: people who watch a video, or part of one, immediately fall into a fairly high engagement bracket.  In terms of repeat users, 166,233 only visit once; 41, 562 twice and so on until nine visits when the number of visits starts going up again. More people visit the site between 9-14 times than 4 times, for example. This suggests Vimcasts has a committed following of regular fans, something born out by the user survey. I'm cautious in interpreting the data though. Infrequent site visitors may actually be still engaged with Vimcasts through RSS or through Drew's monthly emails. However, the numbers of unengaged and/or one-time visitors still suggests to me that Vimcasts could do more to engage site visitors.

####Vimcast fans know how to use the site
The [user survey][survey] showed that a substantial minority of Vimcast fans like the site as it is. This is great in terms of showing that the site is working on a number of key levels. However, I think it's worth remembering that Vimcast fans know how to use the site. **Return visitors are much more likely to land on the archive page – arguably the most useful page on the site  with a fairly low 28.14% exit rate**. New visitors tend to land on the homepage (52.96% new visitors; 45.80% exit rate) or on individual episodes. This suggests to me that new site visitors or less engaged users could be persuaded to stay longer on the site if it were easier for them to find the information that they wanted, no matter what page they landed on.


####Vimcasts isn't responsive: does this matter?
Yep. **Mobile accounts for a higher than average new visitor rate (60%) and also a higher bouce rate (73%)**. To make sure that first-time mobile visitors stick around we need to make sure they have an enjoyable user experience. Even engaged visitors get a bit annoyed with the inflexibility of the site's design. [Johann Philipp Strathausen comments][fixedfont] on a Vimcast blog post: 'you have a fixed font size in your CSS, making it impossible for my browser to zoom the page... You should use em instead'. This was upvoted 11 times and is currently the top comment for that page. 

Although tablets are third in popularity as a browsing device after desktops and mobiles, tablet users spend almost twice as long browsing (4:35). This makes sense: tablets are great for watching videos because they are portable but you don't have to squint at the screen to see what's going on. So, if we can make Vimcasts perform well on tablets then we should in for an easier ride in terms of user engagement because tablet users are more likely to spend time on the site in the first place. 


####But isn't there a limit to how many people watch videos on the move?
Probably, because it costs money and load times can be painful. However, at the moment page loading times for Safari (used by 10.70% of visitors), Opera and Android browser are particularly poor. We'll look into why these browsers are struggling to handle the site.

###What's the relation between social media and the site at the moment?
**The data supports what we learned from the [user survey][survey]: relatively few people find out about Vimcast through social media**. There were about 10,000 (not necessarily first time) visitors from Reddit, Twitter, Stack Overflow and slightly fewer from Hacker News. Hacker News visitors weren't very engaged; Reddit users tended to be sent to landing pages, while Stack overflow people landed on individual episodes; Twitter users had a high bounce rate. The few people who came via Facebook spent twice as long as average on the site. 

What does all this suggest? Adding share buttons on each episode page might be a good idea. Not everyone uses them, but it will make social sharing easier for people who do. Also, that Facebook might offer a currently unexplored way of getting more fans. However, **Vimcasts is a specialist technical site so the 'quality' of sharing is more important than just increasing the numbers**. Socially active influencers who like Vim and know people who like Vim can bring more engaged followers. For example, [Remko Tronçon's blog post][remko] has sent over a fairly modest 789 visitors, 325 of them new, but they spend almost double the average time on the site. 

###How are Drew's product pages performing at the moment?
Drew offers online workshops about once a month, in-person workshops occasionally within Europe and private workshops for companies. He also has a book for sale, [Practical Vim][] (Pragmatic Bookshelf), and has produced [professional screencasts for Thoughtbot][thoughtbot]. He's considering producing some inexpensive eBooks on various topics as well. 

Out of 170,458 unique visitors to the site, only 4115 had viewed the sales page for Drew's main masterclass. This doesn't strike me as all that impressive. Neither is it surprising given that the link is in the footer of each page and doesn't exactly draw the eye. However, this isn't the full story: Drew advertises each workshop with a promotional blog post, through email and through Twitter. The user survey in fact suggested that very few Vim fans had not heard of the workshops - only 4%. This isn't to say that newer or less engaged visitors have though. 

Making Drew's masterclasses and publications at least more visible on the homepage, and easier to find from other landing pages, would at least ensure that all visitors – not just the dedicated and knowledgable – can easily find out about them.

###Conclusion
> *Metrics are like a crying baby: they leave you in no doubt that something is wrong, but don't tell you how to find and solve the problem.*
> Bowles and Box, [Undercover User Experience Design][undercover]

Thankfully, the [user survey][survey] has helped with the 'find and solve the problem' side of things. It's still early days though and Google Analytics is better than people at telling me about page views. I still wonder how many people bounce off the site because they aren't fluent in English (so translated transcripts might help). Or how many people think 'yeah, maybe Vim would help me work better' before landing on the site and sighing: 'Man, I have to watch a video and I don't have time and what on earth does pasting from the visual mode mean anyway? I'll come back another time when I know more about Vim. Maybe'. 

**Vimcasts mainly appeals to intermediate and advanced users**: targeting novices is not something that Vimcasts does at the moment. It's a possible direction for the site in the future though. 

###Need help working out how you can improve your digital content?
[Get in touch][email]! Or you can find out more about [how content strategy can help your business][content strategy section]. 


[survey]: /blog/2014/01/27/Redesigning-Vimcasts-The_User_Survey.html
[email]: mailto:hannah.adcock@gmail.com
[content strategy section]: /#what_is_content_strategy_section
[remko]: http://el-tramo.be/blog/my-favorite-vim-plugins/
[Practical Vim]: http://el-tramo.be/blog/my-favorite-vim-plugins/
[thoughtbot]: https://learn.thoughtbot.com/products/21-navigating-ruby-files-with-vim
[undercover]: http://undercoverux.com/
[fixedfont]: http://vimcasts.org/blog/2013/02/habit-breaking-habit-making/#comment-816613999