---
title: GitHub-like activity graphs in your terminal
tags: [git, git-activity, github, projects, bash, unix]
---

I recently made `git-activity`, a small shell script/git alias that lets you
view a github-style activity graph in your terminal. It's small, but it's
pretty fun to use:

![[git_activity.jpg]]

If you just want to test it out first, paste this line into your terminal:

```sh
curl \
    --silent \
    https://gist.githubusercontent.com/beyarkay/d3be7cc248d3f66e97ecaf2993e57b0a/raw/git-activity.sh \
    | bash
```

And if you like how it looks, paste this line into a terminal to add a `git
activity` alias.

```sh
git config \
    --global \
    alias.activity \
    '!curl --silent https://gist.githubusercontent.com/beyarkay/d3be7cc248d3f66e97ecaf2993e57b0a/raw/git-activity.sh | bash'
```

(you can see the full gist [here][1])

Now you can type `git activity` in any git repo and get a pretty terminal-based
activity graph!

[1]: https://gist.githubusercontent.com/beyarkay/d3be7cc248d3f66e97ecaf2993e57b0a/raw/git-activity.sh
