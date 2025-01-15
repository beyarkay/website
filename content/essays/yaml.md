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

```diff
 {
-  "key": "value",
+  key: value,
-  "object": {
+  object: {
-    "inner_key": "inner_value"
+    inner_key: inner_value
   }
 }
```

You can add trailing commas (because nobody likes big diffs):

```diff
 {
   key: value,
   object: {
-    inner_key: inner_value
+    inner_key: inner_value,
-  }
+  },
 }
```

And also comments

```diff
 {
   key: value,
   object: {
+    # NOTE: this key is important
     inner_key: inner_value,
   },
 }
```

You can also remove those braces if you like:

```diff
-{
   key: value,
+  object:
-  object: {
     # NOTE: this key is important
     inner_key: inner_value,
-  },
-}
```

> But without the matching curly braces how do I know when a document has ended
> if I'm streaming it character by character!

Easy, just use the document end/start marker `---`:

```yaml
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
numbers to represent string-like things anyway.

Here's an example:

```yaml my-doc.yaml
---
# comment
inline_list: [1, 2, 3, 4]
other_list:
  - 1
  - 2
  - 3
  - 3
object:
  foo: 1
  bar: 2
  baz: 3
list_of_objects:
  - foo: 1
    bar: 2
    baz: 3
  - foo: 4
    bar: 5
    baz: 6
---
```

See the [spec][1] for more details. Note that you want YAML 1.**2**, prior
versions weren't backwards compatible with JSON.

[1]: https://yaml.org/spec/1.2.2/
