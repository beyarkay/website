---
title: TikTok Scraper
tags:
  [
    project,
    tiktok,
    web-scraping,
    data-visualisation,
    honours-university-project,
    tiktok,
    virality,
    social-media,
  ]
---

![likes-followers](assets/tiktok-likes-followers.png)

Around August 2022 for my 4th year Honours project at Stellenbosch University,
I scraped over 26k TikTok videos taken over a two-week period with the goal of
analysing what makes a video go viral, and what that virality actually looks
like. I wrote a [formal report][1] for the class,
and this blog post is a less-formal write-up of that experience and what I
found. The code, as always, is [on GitHub][2].

# The Data

For each TikTok video, the following was recorded:

- `scraped_at`: Scraping time
- `url`: TikTok URL, useful as a ID of sorts
- `audio`: the name of the audio that plays with the TikTok (often viral pop songs or
  audio snippets)
- `audio_url`: audio URL, since the audio name isn't required to be unique
- `likes`: the number of likes
- `comments`: the number of comments
- `creator`: the username of whoever created the TikTok
- `creator_url`: the URL of the homepage of whoever created the TikTok
- `creator_followers`: the number of followers of the creator at the time the TikTok was scraped
- `creator_likes`: the total number of likes of the creator at the time the TikTok was scraped,
  summed over all their TikToks

There was, at the time of scraping, a bug in the TikTok UI that caused an
overflow if any user had more that $2^{31}$ likes:

![bella](assets/bellapoarch.png)

Before processing the data, I found all `creator_likes` that were negative and
corrected them to the un-wrapped value.

I would have liked to get more information from the TikTok (such as a vector
embedding of the video itself, or the time the TikTok was uploaded), but this
information was either too prone to get my bot kicked out of the site, not
available via the web UI, or in the case of video embeddings, I wasn't able to
get the video embedding done in time for the class deadline. That is still
something I'd like to revisit in the future.

# The Graphs

## TikToks that went viral

Let's have a look at a post going viral:

![](assets/tiktok-change_in_likes_top_tiktoks.png)

<summary>
    Here are those URLs if you want to see the actual videos:
<details>
<ol>
    <li> <a href="https://www.tiktok.com/@surthycooks/video/7128141932953439494">@surthycooks #1</a></li>
    <li> <a href="https://www.tiktok.com/@surthycooks/video/7133022105947360518">@surthycooks #2</a></li>
    <li><a href="https://www.tiktok.com/@getgifted_byhannah/video/7127211352669703425">@getgifted_byhannah</a></li>
    <li><a href="https://www.tiktok.com/@soukainasing1/video/7112141117285502213">@soukainasing1</a></li>
    <li><a href="https://www.tiktok.com/@bayashi.tiktok/video/7129095826332241154">@bayashi</a></li>
    <li><a href="https://www.tiktok.com/@funny_movie598/video/7121028864540675334">@funny_movie598</a></li>
    <li><a href="https://www.tiktok.com/@supercarblondie/video/7122427921842638081">@supercarblondie</a></li>
    <li><a href="https://www.tiktok.com/@samdracott_farrier/video/7135923443370937605">@samdracott_farrier</a></li>
    <li><a href="https://www.tiktok.com/@longlloydcah/video/7112599838386081067">@longlloydcah</a></li>
    <li><a href="https://www.tiktok.com/@myuz_gaza1gaza1/video/7141728537228086530">@myuz_gaza1gaza1</a></li>

</ol>
</details>
</summary>

This plot shows the TikToks which had the greatest change in the number of
likes, even the "least" viral TikToks in this plot grow by over a million likes
in just a few days.

Despite my poor graph labelling, you can see [@surtheycooks' video](https://www.tiktok.com/@surthycooks/video/7128141932953439494) (dark blue
line) exploding in popularity after the first few days, the bot first saw the
video when it was at ~500k likes, but it grew to over 10M likes over the course
of about a week. [@surtheycooks' next video](https://www.tiktok.com/@surthycooks/video/7133022105947360518) (the orange line) _also_ went viral,
posted about a week after the first, and the rate at which it was getting liked
was very similar to the first video. Both videos are of the feel-good
altruistic sort of the creator making soup/food in a _very_ fancy kitchen and
then handing it out to poor people in her area.

You can also see a flaw in the scraping methodology: I didn't think to program
the bot to regularly check in on "interesting" tiktoks, so sometimes a video
gets seen every hour, sometimes the bot goes days without seeing that video
again (as can be seen from the occasional long straight lines like in the
yellow, pink, and light blue lines).

## Creators gained followers

![followers-by-creator](assets/tiktok-followers-by-creator.png)

Here you can see which creators gained the most followers over the two-weeks I
was scraping, and how many followers they gained. The impact of @surtheycooks's
viral videos is clear, and she gained more followers than anyone else I
measured. If you're on TikTok you'll probably recognise most of these names,
they're all somewhat popular and regularly post on the platform. Plotting these
numbers by absolute number of followers makes the graph basically
unintelligible, since the distribution is so insanely exponential.

## Days since last upload

![days since last upload](assets/tiktok-days-since-last-upload.png)

This is a heatmap showing how long creators spend before uploading a new
video. The vast majority of creators upload videos once a week, with some
creators waiting over a month between uploads.

It's interesting to note that creators with more followers don't really upload
much more often than creators with fewer followers. I initially expected that
people with fewer followers to upload less frequently than people with more
followers, but that's absolutely not the case. There doesn't seem to be a
significant relationship between the number of followers and the frequency of
uploads.

Also from this plot, based on the histograms on the right and top of the main
heatmap, we can see that the number of followers is approximately log-normally
distributed, and the upload frequency is approximately exponentially
distributed. I'm surprised that past-Boyd didn't do any chi-squared
distribution analysis to put a number to how exponentially/log-normally
distributed these numbers were.

## Social media is _very_ exponentially distributed

You'll maybe have noticed that ~none of these graph show absolute numbers on
linear plots, they're either showing the change over time or they're showing a
logarithmic plot.

# Implementation details

The scraper was written in Python using `scrapy`, `selenium`, `requests`,
`BeautifulSoup`, and friends. A cron job was setup to run every hour from a
Raspberry Pi in my apartment, it would grab social data from TikTok videos and
save them to a `.jsonlines` file that later got `scp`'d to my laptop for
actually processing the data. The scraper loads the home page of TikTok without
logging in and scrolls until it has scraped the social data of 100 unique
TikToks which takes about 50 minutes (30s/TikTok, although a lot of time is
spent waiting and not actually watching TikTok).

The scraper doesn't login to TikTok, so each time it runs it gets whatever
TikTok thinks an anonymous user in Stellenbosch, South Africa will enjoy
watching. This was helpful for data analysis since I didn't have to worry about
TikTok learning what the bot wanted to see or hiding videos the bot had already
seen, but it meant that the bot didn't really experience the "true" version of
TikTok. C'est la vie.

---

# Final Thoughts

This was a post-hoc write-up of a project I did for university. It would have
been cool to spend more time, but university doesn't reward you for going
deep. Maybe another day, although there's so many cool things to do in the
world.

If you like data science and graphs of interesting data, you'll really like
[looking at which programming libraries are downloaded on the week vs
weekend][3].

[1]: http://boydkane.com/assets/tiktok-report.pdf
[2]: https://github.com/beyarkay/tiktok-scraper
[2]: /projects/crates-download-ratio
