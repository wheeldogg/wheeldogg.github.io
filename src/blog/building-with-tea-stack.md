---
title: Building This Blog with the TEA Stack
excerpt: A look behind the scenes at how this site was built using Tailwind, Eleventy, and Alpine.js.
date: 2024-12-10
category: software
---

# Building This Blog with the TEA Stack

When I set out to build this blog, I wanted something fast, simple, and easy to maintain. The TEA Stack (Tailwind, Eleventy, Alpine.js) turned out to be the perfect choice.

## Why TEA?

### Tailwind CSS

Utility-first CSS means I can style directly in my markup without context-switching. The dark theme was easy to implement with Tailwind's color system.

```html
<div class="bg-zinc-900 text-zinc-100 rounded-xl p-6">
  Content here
</div>
```

### Eleventy

Zero client-side JavaScript by default. Pages load instantly because there's minimal overhead. The template system (I'm using Twig) is flexible and powerful.

### Alpine.js

For the interactive bits - mobile navigation, lightbox gallery, counters - Alpine.js provides reactivity without the weight of a full framework.

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Content</div>
</div>
```

## The Result

A blazing-fast blog that:

- Loads in under 1 second
- Works without JavaScript (except for interactive features)
- Is easy to maintain and extend
- Looks exactly how I want it

If you're thinking about building a blog or personal site, give the TEA Stack a try. You won't regret it.
