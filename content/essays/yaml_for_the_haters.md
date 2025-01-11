---
title: YAML for the haters
tags: [yaml]
---

YAML is just JSON. That's it. Every valid JSON document is a valid YAML
document. You can literally just change the file ending from `.json` to `.yaml`
and be on your way.

But if you want to go one better changing the file ending, you can remove all
the quotes around your keys:

JSON:

```json
{
  "key": "value",
  "object": {
    "inner_key": "inner_value"
  }
}
```

YAML:

```
{
  key: value,
  object: {
    inner_key: inner_value
  }
}
```

You can add trailing commas:

```
{
  key: value,
  object: {
    inner_key: inner_value,
  },
}
```

And also comments

```
{
  key: value,
  object: {
    # NOTE: this key is important
    inner_key: inner_value,
  },
}
```

You can also remove those braces if you like:

```
key: value
object:
    # NOTE: this key is important
    inner_key: inner_value
```

> But without the matching curly braces how do I know when a document has ended
> if I'm streaming it character by character!

Easy, just use the document end/start marker `---`:

```
---
key: value
object:
    inner_key: inner_value
---
```

And if you read the start marker without an ending marker then you know
something gone wrong. Don't complain about a tool just because you haven't
bothered to learn it properly.

> I heard that someone specified their version number in YAML like 0.10 and it
> got borked because YAML thought it was a floating point and converted it to
> 0.1

Just wrap it in quotes like `my_version: "0.10"`. You shouldn't be using
numbers to represent number-like things anyway.
