---
title: "Design"
description: "This section contains notes on important design concepts."
---

## Dark mode

Enabling the switch between dark and light mode can greatly improve the user experience.

Steps to do dark mode right:

### Never go with pure black

`#000000` is a color that should never be used in UI designs in general, apart from **some** texts.

Prefer colors like:

![Dark mode colors](https://raw.githubusercontent.com/Stratis-Dermanoutsos/Full-Stack-Notes/main/Images/Design-Dark-Mode-Colors.png)

### Limit the saturation

When you choose a color, limit the saturation to levels of 200-500.

Going less than 200 has no point in choosing a color.

Exceeding 500 will damage the contrast.

![Dark mode saturation](https://raw.githubusercontent.com/Stratis-Dermanoutsos/Full-Stack-Notes/main/Images/Design-Dark-Mode-Saturation.png)

### White for text

The text is always going to be fine with a `#FFFFFF` color code.

In case you want to have colors draw less attention, just decrease the opacity.

![Dark mode font opacity](https://raw.githubusercontent.com/Stratis-Dermanoutsos/Full-Stack-Notes/main/Images/Design-Dark-Mode-Font-Color.png)

### Avoid using shadows

This is pretty straightforward.

Dark mode is better suited for flat designs and the shadows will prevent this.

Instead, change the background color of components and make it lighter for higher ones.

> Refer to [Never go with pure black](#never-go-with-pure-black).

## Resources

- [Design Principles](https://principles.design)
- [Collect UI - Daily inspiration](https://collectui.com)
- [Daily Landing Page inspirations](https://landingpage.fyi)
- [Palitra App - The easiest way to find a color palette!](https://palitra.app)
- [lookup design - Find Design Examples](https://lookup.design)
- [UI/UX design tools, tweet by @asiedu_dev](https://twitter.com/asiedu_dev/status/1465576339176493056)
- [Helpful Figma plugins](https://www.instagram.com/p/CWOQi0hPv9o/)
- [Font flipper](https://fontflipper.com/)
- [60-30-10 Color Rule by Jesse Showalter](https://youtu.be/UWwNIMHFdW4)
