---
title: Esoteric vim
tags: [vim, neovim, vi, shell, unix, terminal]
# draft: true
---

I think I know vim pretty well. I'm at the stage where I'm the crusty old man
complaining that most vim emulators (like the VSCode vim-plugin) don't have
support for the [expression
register](https://vimhelp.org/change.txt.html#%40%3D) or using
[`i_CTRL-X_CTRL-F`](https://vimhelp.org/insert.txt.html#i_CTRL-X_CTRL-F) to
autocomplete file names.

I figured I'd write up some of the more esoteric vim/neovim features that I use
on a regular basis, since these have a high impact on my workflow but I don't
see them on most "top vim commands" lists. If you don't know vim, I'd recommend
typing `vimtutor` into any terminal, going until you get bored, and then coming
back here.

> NOTE: I'm going to make each trick a heading, so you/I can link to it

# `ctrl-z`

This isn't technically a vim command, it's just a plain shell
send-to-background keystroke. But I use it so, so, much. ctrl-z will send vim
to the background. Faster than quitting and reopening vim, no lost context,
handy for working in the terminal (it's painful using :! for anything semi
serious)

## (`f` or `F` or `t` or `T`) then `;` then `.`

First jump to a letter (with `f` or `F` or `t` or `T`) and do some action. Then
repeat the jump with `;` and repeat the action with `.` Now spam them like
`;.;.;.;.` (the `;` and `.` keys are close together on a QWERTY keyboard,
making this nice and fast) And now you've done your operation on the entire
line without thinking about vim-style regex. For example, If I've got this
line:

```c
struct.member = struct.othermember + struct.foo - struct.bar;
```

And I want it to become

```c
struct->member = struct->othermember + struct->foo - struct->bar;
```

I could use a regex on that line

```
'<,'>s/\./->/g
```

But I've got to remember to escape the `.` and generally vim's regex doesn't
roll off the tongue. But I could also do this:

```
0f.s->^[;.;.;.
```

Which can be explained like:

```
0     go to the start of the line
f.    go forward, until the cursor is over the first `.`
s     delete the character under the cursor and enter insert mode (AKA substitute)
->    enter the literal characters `->`
^[    escape from insert mode to command mode
;     repeat the last fFtT command (in this case, go to the next `.`)
.     repeat the last "action" (in this case, substitute `.`  with `->`
;.;.  go to next `.`, substitute with `->`, repeat
```

And lets you stay "in vim mode" instead of having to recall vim's regex, you
can just use regular vim commands to do what you want. Using `fFtT;.` is like
baby's first macro.

# Capital-letter macros

Macros are obviously a big one, but "recording" to a capital letter macro (like
`qQ` instead of `qq`) will append whatever actions you perform to the macro (in
this case, the `q` macro). Super nice for quickly adding something you forgot, or
monkey patching a badly recorded macro.

# Special registers `""` and `"%`

Special registers are handy. Use CTRL-r to insert the value of a register.

- `""` Contains your last yank
- `"%` is the filename

# Expression register `"=`

The calculator/expression register "= is also really good. Use Ctrl-r in insert mode to
get a simple calculator, but if you have an expression visually selected then
the following will evaluate the expression:

`cCTRL-r=CTRL-r"CTRL-j`

# Insert mode commands

Insert mode command are very nice:

- `CTRL-h` to backspace (keeps your fingers on the home row)
- `CTRL-j` or `CTRL-m` for a newline (keeps your fingers on the home row)
- `CTRL-w` to delete the word (faster than tapping backspace a bunch)
- `CTRL-u` to delete the line (faster than tapping backspace a bunch)
- `CTRL-k` for mnemonics of funky characters. For example, `CTRL-k:e` gives you
  ë, `CTRL-k12` gives you `½`, and a _lot_ more which are all very intuitive.
  Most times I just mash various two-character combinations to get what I want,
  like `+-` for ± or `p*` for π. See
  [`:digraphs`](https://vimhelp.org/digraph.txt.html#digraphs-default) for a
  list of examples
- `CTRL-x CTRL-f` to autocomplete a filename in the current working directory

See :h ins-special-keys for lots more

# Remapping CAPS LOCK to control at the OS level

Remapping caps lock to _control_ at the OS level makes a lot of sense, for all
shortcuts on your computer, and it means you can very easily exit out of insert
mode with caps lock + [ (keeping your fingers on the home row).

# `CTRL-a` and `CTRL-x`

Using CTRL-a and CTRL-x to increment/decrement a number is useful, but even
more so when paired with gCTRL-a and gCTRL-x, which (when used over a visual
selection) will increment the first line by 1, the second by 2, etc. Making it
really easy to get a numbered list.

On macos I've got alt+character `nnoremap`'ed to do @ character, like, so typing alt-r is the same as invoking the macro (but slightly more ergonomic)

# Various `g` commands

- `gf` open file under cursor
- `gx` open URL under cursor in browser
- `g&` repeat last :s command for entire file
- `g*`/`g#` like `*`/`#` but without `\<` `\>`
- `ge` opposite of `e`
- `gv` select whatever your previous selection was (useful after pasting
  something)

See [`:help g`](https://vimhelp.org/index.txt.html#g)

# `:cq`

[:cq](https://vimhelp.org/quickfix.txt.html#%3Acq) is useful when writing a
commit message in git (ie after `git commit`)

It will exit without saving and return a non-zero error code, causing git to abort the commit
