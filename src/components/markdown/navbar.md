# Navigational Bar

## Overview

For my journey to find my own creative design style for my personal website, I thought I would start with the NavBar. Navbar's give structure to a website and overall, brings everything together. There are common approaches like the top-nav, side-nav, hamburger, etc.

What I want is something new, unique, and modern. In designing this nav, I hope find inspiration for the other components of my website like its design and color scheme.

**languages**: HTML, JSX  
**tools**: React, TailwindCSS

## Background

From what I can see, the majority of websites today has a top Nav. Sometimes we see a side Nav with a hamburger style menu on smaller screens. For mobile apps, its common to find a bottom Nav for ease of access.

What I hope to accomplish is to innovate the Navigation and WOW the user. Most importantly though, the navigation MUST be recognize-able at first glance, otherwise, the user will be lost.

## Research & Analysis

_DESIGN IDEAS_

- **Hamburger Icon** - "Secondary Menu" Easily recognize-able as a menu. simply opens and close a menu with links.

  - could animate the menu opening/closing. full-screen nav possibly, or change the whole look of the page? Has been done plenty before, so I think I can find a better way.

  ![hamburger](https://www.vandelaydesign.com/wp-content/uploads/magnet.gif)
  ![hamburger2](https://www.vandelaydesign.com/wp-content/uploads/martin.gif)
  ![hamburger3](https://www.vandelaydesign.com/wp-content/uploads/parker.gif)
  ![hamburger4](https://www.vandelaydesign.com/wp-content/uploads/rino.gif)

- **Link Hover effects** - Some cool animations with the page when hovering menu links, possible thumbnail of the destination?

  - still doesn't solve the way the Nav is designed though. Could add mouse hover animations anywhere and on any type of nav. Still a good idea though and will consider this in conjunction with the final nav design.

  ![hover](https://www.vandelaydesign.com/wp-content/uploads/sam-goddard-767x401.gif)
  ![hover2](https://www.vandelaydesign.com/wp-content/uploads/alienist-615.gif)

  _I like how simple and modern this one [below](https://codemyui.com/stretch-and-expand-underline-on-click-navigation/) feels_
  ![hover3](https://codemyui.com/wp-content/uploads/2020/06/Stretch-and-Expand-Underline-on-Click-Navigation.gif)

- **Side Nav** - with vertical text links

  - This one is definitely modern looking and pretty uncommon for a side nav. Highly considering this idea.

  ![side nav](https://www.vandelaydesign.com/wp-content/uploads/carnival-sounds.gif)
  ![side nav2](https://www.vandelaydesign.com/wp-content/uploads/bien.gif)

  _this [jump nav](https://codemyui.com/jump-link-sidebar-navigation-for-articles/) would work well with the vertical side nav_
  ![side nav3](https://codemyui.com/wp-content/uploads/2020/01/Jump-Link-Sidebar-Navigation-for-Articles.gif)

- **tabs!** - horizontal or vertical colorized tabs

  - Now this is a really cool idea; Almost playful! colorizing the tabs mean I could even have a different theme for each page. Definitely better with less Nav items as too much tabs will feel cluttered. Will be considering using this type of nav for my arcade style website.

  ![tabs](https://www.vandelaydesign.com/wp-content/uploads/canal-street.gif)
  ![tabs2](https://www.vandelaydesign.com/wp-content/uploads/amber.gif)

- **hybrid nav**

  - hybrid seems like it might be the way to go. They feel innovative, unique, and modern if we implement the correct styles. Thinking I might combine the vertical style nav with another.

  _interesting combination of a hamburger style pop-out top nav_
  ![hybrid](https://www.vandelaydesign.com/wp-content/uploads/stylist.gif)

  _this one's a burger with bottom nav. I like the zooming animations_
  ![hybrid2](https://i0.wp.com/codemyui.com/wp-content/uploads/2015/11/3d-navigation-menu.gif?fit=880%2C440&ssl=1)

## Design & Thought Process

Now I need to decide what links my Nav should include, what pages and components my website should have. Im thinking of possibly doing a single page with a top to bottom scroll. The links in my _side/jump nav_ should auto-scroll to the specific point in the page. Each component could take up 100vh and I think it would be cool to include a parallax effect in the background. Probably thinking to must outside of the scope of the Nav, but I wanted to at least jot down some ideas for later.

For now, I can choose a few dummy links and add more later.

- home
- about
- projects
- contact

_Constraints_  
The great thing about designing a sleek side nav is that I don't have to worry too much about break-points and different sized screens. I will however need to make it sticky so that it doesn't scroll along with the page.
