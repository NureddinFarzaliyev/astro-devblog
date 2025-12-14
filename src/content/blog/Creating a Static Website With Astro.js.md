---
title: "Creating a Static Website With Astro.js"
date: "12/14/2025, 3:18:45 PM"
author: "Nureddin Farzaliyev"
description: "This is a test blog post. And this is a long description for this test blog post. This description spans more than 2 lines."
tags: ["featured", "astro"]
cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fupwork-cloud%2Fimage%2Fupload%2Fc_scale%2Cw_1000%2Fv1709148358%2Fcatalog%2F1599188287082782720%2Fnn6cfvm9pjnwxe91k6vo.webp&f=1&nofb=1&ipt=cc3304b7bdff36fbac882080176fdc0c990c59f860789f76d60bdf26556c8eaf"
---

### Introduction

We use traditional html to create simple pages.

`pages/index.astro` - index page
`pages/about.astro` - `/about`
`pages/posts/post-1.md` - `/posts/post-1`
`pages/posts/index.astro`- `/posts/`

The JS variables can be defined between:

```astro
---
const pageTitle = "Home Page";
const tags = ["HTML", "CSS", "JS", "Astro"]
---
```

and used in html:

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content="{Astro.generator}" />
    <title>{pageTitle}</title>
  </head>
  <body>
    <h1>{pageTitle}</h1>
    <p><b>Tags:</b> {tags.map(tag => <span>{tag} </span>)}</p>
  </body>
</html>
```

JSX-like **conditional rendering** is also possible

### Defining and using css variables in js

```astro
---
const tagColor = "crimson"
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
        <title>Astro</title>

        <style define:vars={{tagColor}}>
            span {
                color: var(--tagColor);
            }
        </style>
	</head>
	<body>
        <p>
            <b>Tags:</b>
            {tags.map(tag => <span>{tag} </span>)}
        </p>
	</body>
</html>
```

### Defining and using styles in css files

You can define global styles in a seperate file and include it using `import ../styles/globals.css `

**Global**

adding `is:global` to a `<style>` tag
