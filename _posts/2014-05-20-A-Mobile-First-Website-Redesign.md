---
layout: post
title:  "A mobile first website redesign: Vimcasts, a case study"
date:   2014-05-20 
categories: blog
metadescription: What happens when you do a mobile first redesign? Here I discuss the business case, the practicalities and the content implications.  
excerpt: It’s official - mobile devices are here to stay and we are doing all kinds of stuff on them, not just trying to complete tasks. In this post I look at the business case for a mobile first website redesign, the practicalities, the content implications, the problems and the advantages.
---

It’s official: mobile devices are here to stay _and_ we are doing all kinds of stuff on them, not just trying to complete tasks. To pull out one statistic from Karen McGrane’s brilliant book _Content Strategy for Mobile_: by 2015, according to a prediction by International Data Corporation, more Americans will access the internet devices through mobile devices than through desktop computers. As McGrane concludes: “Delivering content on mobile isn’t an after-thought. It’s a necessity.”

###The business case for a mobile first website redesign
The analytics and user comments showed that Vimcasts was losing potential users because it wasn't optimised for mobile. Mobile accounted for a higher than average new visitor rate (60%) and also a higher bounce rate (73%). Even engaged visitors were getting a bit annoyed with the inflexibility of the site's design. [Johann Philipp Strathausen comments][fixedfont] on a Vimcast blog post: 'you have a fixed font size in your CSS, making it impossible for my browser to zoom the page... You should use em instead'. This was upvoted 11 times. We decided that one of the goals of the Vimcast website redsign was to increase people's engagement with the site by making the content easier to navigate on all devices.

###The practicalities of doing a mobile first website redesign
Drew, founder of Vimcasts, decided to use front end framework [Zurb Foundation][] to build the new Vimcasts website. Foundation offers designers and developers a fast way to build professional websites using code snippets/design templates. It is also great because it encourages you to build mobile-first and makes it 'easy' (my quote marks) for you to optimise content for different viewports.  I coulnd't believe how quickly we got up a navigation bar, for example, that looked good on small, medium and larger viewports. Customising Foundation of course took longer, sometimes, much longer. Responsive design was an obvious choice for Vimcasts: building a mobile-only site means forking your content, which means twice as much work in terms of content production. 

###The content implications of doing a mobile first website redesign
Vimcasts uses Middleman, a static site generator, so we were spared the pain of choosing and then customising a CMS. Here are a few content issues that we did address though:

* The particular content challenge for Vimcasts was creating content that works across all viewports. My main rule of thumb in terms of copy was less is more. And guess what? I think the website – even on larger screens – is the better for it. Our 'what is this website about' blurb got stripped right down: Learn essential Vim Skills / with Drew Neil, author of Practical Vim. 
* We decided on curated character limits for the teaser copy for articles and screencasts so they would work on smaller viewports and wouldn't be truncated, which is never pretty. 
* We tried to make the categories table look like a chequer board, but realised it was too complicated to implement across different viewports. So we went for a simpler design, which actually looks better. 
* We made it really clear how long screencasts are so that people can decide whether they have the time and necessary bandwidth to watch them.
* We decided to collapse show notes on small viewports but keep them expanded on larger viewports (comments are always collapsed). This means that people can access the same content on all viewports, but don't feel overwhelmed by a page that seems to scroll forever on smaller screens. For inspiration, we looked to Wikipeda. 
* We wanted to encourage social sharing so showed the buttons running across the screen for larger viewports but in a 2 x 2 formation on smaller screens – so the buttons were still a good size. 

###The problems of doing a mobile first website redesign
It's not all that easy, even using Foundation. You have to think flexibly in terms of both design, content and build. It takes time, skill and reserves of patience that you didn't know you possessed to pull it off. If you use a designer who works in Photoshop then they'll struggle here – you need a designer who understands responsive design. Even then, some designers don't really like the 'limitations' of designing for small viewports first and have gained much of their experience designing for hover and click rather than tap.

###The advantage of doing a mobile first website redesign
Taking a mobile first approach helps you to better understand content priorities and visual hierarchy – and could help your clients do the same. It also means that you're not tempted to stuff as much content as possible on a big screen (because your desktop users really need to see that homepage carousel and complex infographic, right?), leading to acceptable mobile load times. In short, a mobile first approach let's you serve people the content that they need, wherever they are, whatever they are doing, and whatever screen they are choosing to view your website on. As a result, you should increase engagement rates, lower bounce rates and increase your reputation as a forward thinking company that cares about user experience. Or at least that's the plan. You also have a website that has a flying chance of still being usable in a few years time.  

###Need help working out how you can improve your digital content?
[Get in touch][email]! Or you can find out more about [how content strategy can help your business][content strategy section].


[fixedfont]: http://vimcasts.org/blog/2013/02/habit-breaking-habit-making/#comment-816613999
[Zurb Foundation]: http://foundation.zurb.com/
[email]: mailto:hannah.adcock@gmail.com
[content strategy section]: /#what_is_content_strategy_section