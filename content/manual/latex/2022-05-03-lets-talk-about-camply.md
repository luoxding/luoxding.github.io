---
title: "Let's talk about camply"
date: 2022-05-03
categories:
    - blog
tags:
    - update
    - camply
---

<style>
.camply-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>

If you don't already know, [camply](https://github.com/juftin/camply) is an open-source Python
project that I created a little while ago that helps people to find and snag last minute
cancellations at campgrounds all around the USA.

<img src="https://raw.githubusercontent.com/juftin/camply/main/docs/_static/camply.svg" class="camply-logo">

I got the idea for camply when my partner and I took a road trip last summer. When we started
planning campgrounds to stay at inside of National Parks during our trip, we quickly discovered that
campsites at busy destinations like Yellowstone and Glacier are a hot commodity and totally booked
out. After playing around in Chrome Developer tools
on [https://recreation.gov](https://recreation.gov) I realized that the APIs powering these websites
can be used to proactively search for new availabilities to open up.

Basically, camply works like this:

1. Install camply.

```console
pip install camply
```

2. You get the ID numbers of your favorite, popular campground / recreation area using
   [https://recreation.gov](https://recreation.gov) (you can do this with the camply CLI too,
   try `camply --help` on your commandline).

3. You use the camply CLI to search for a reservation to open up. This is pretty common on
   recreation.gov since their cancellation policy is generous and cheap. Check out the below command
   to search for campsites on weekends
   at [Yosemite National Park](https://www.recreation.gov/camping/gateways/2991) (a rare find for
   certain coveted campgrounds).

```console
camply campsites \
  --rec-area 2991 \
  --start-date 2022-06-01 \
  --end-date 2022-06-30 \
  --weekends \
  --continuous \
  --notifications pushover \
  --notify-first-try
```

4. camply runs a Python process that searches for new cancellations and sends you a push
   notification on your phone once something becomes available.

5. You click the link on the notification and scramble to book the campsite before anybody else
   does.

Boom! You've just booked yourself a hard to find campsite. That's basically it. camply supports
different notifications through email, Telegram, Pushover, and more. It also works at campgrounds in
Yellowstone National Park that don't use recreation.gov.

camply been one of my favorite side projects to work on and the major part of that enjoyment is
because people out there are actually using it to find spots (almost 200 Stargazers on GitHub as of
writing this 😍). As camply has been getting more popular the feature requests have begun to come
in. Where I don't have time to work on those features, camply could use some architecture
simplification to empower more open source contributors to develop them instead.

As these new projects start to pile up, I'm beginning to ask myself: "does camply need a large
overhaul and refactor to best support this?" If so, what's the best way to do that and what
functionality is the most important? My end goal is a camply version `1.0.0` but for now I'm trying
to understand what to prioritize and how to make camply the best possible Python application it can
be (see below for [Feature Ideas and Tech Debt](#camply-feature-ideas-and-tech-debt)).

If you have any feature suggestions, thoughts, architecture recommendations, or interest in
contributing to camply please [let me know](https://github.com/juftin/camply/discussions/80).
Getting to connect with open source contributors has been the best part of building this and has
made me a better developer in the process (the camping has been great too 🏕).

-- jf

P.S. If you're interested in working on a spin-off of camply that finds and reserves last minute
golfing tee times at golf courses around the world (including all the public Golf courses here in
Denver, CO), let's chat. I've got a Proof of Concept project that requires front end Python
skills and I'm looking for partners to work with on it.

```python
def reintroduce_myself(name: str) -> str:
    """
    Go away for awhile before posting again
    """
    intro = (f"Hey everyone, I'm {name}. "
             "I hope to have some more to say soon.")
    print(intro)
    return intro


if __name__ == "__main__":
    reintroduce_myself(name="juftin")
```

## Camply Feature Ideas and Tech Debt

-   [ ] Support multiple, simultaneous searches in the same process
    -   [#77](https://github.com/juftin/camply/discussions/77)
        and [#76](https://github.com/juftin/camply/discussions/76)
    -   This idea has been brought up a couple times. My current solution is to use Docker Compose to
        run multiple camply docker containers in the background.
-   [ ] Search for campsites based on attributes
    -   [#63](https://github.com/juftin/camply/discussions/63)
        and [#75](https://github.com/juftin/camply/discussions/75)
    -   This one is a no-brainer. People want to search for campsites that can fit their RV (or
        whatever equipment they might have). camply needs to be able to filter results based on a
        campsite's attributes and allowed equipment.
-   [ ] Simplify adding new campsite providers
    -   [#67](https://github.com/juftin/camply/issues/67)
        and [#40](https://github.com/juftin/camply/discussions/40)
    -   There have been a couple of requests for adding new Campsite providers (outside of
        [Recreation.gov](https://ecreation.gov)
        and [Yellowstone](https://www.yellowstonenationalparklodges.com/stay/camping/)). There is
        currently is an established pattern, including AbstractBaseClasses, to implement a new
        Campsite Booking Provider - but it's admittedly clunky and not super intuitive for new
        contributors.
-   [ ] Search for Wilderness Permits
    -   [#22](https://github.com/juftin/camply/discussions/22)
    -   This would be a tough, yet powerful feature to implement - it uses completely different
        endpoints and logic from regular campgrounds
-   [x] Search for specific campsites inside of campgrounds
    -   [#51](https://github.com/juftin/camply/discussions/51) Done! This was a simple, but rewarding
        feature to implement. People can now search for their favorite campsites in their local
        campground
-   [ ] Persisted data stores (like a SQLite database) to store data between searches
    -   Currently, each new camply search stores all of its data in-memory. Persisting data between
        searches could enable more powerful searching
-   [ ] Webserver UI
    -   This might be fun to build if camply is to ever become useful to a non-technical audience.
        Being able to configure searches via a WebUI would be very useful
-   [ ] Managed Online Service for Hosted Searches
    -   I'm not sure if this is feasible. I'm not interested in making money with camply, but I'm also
        not interested in losing money. Hosting people's searches on a webiste would be great, but
        possibly costly and require more time involved than I have to provide.
