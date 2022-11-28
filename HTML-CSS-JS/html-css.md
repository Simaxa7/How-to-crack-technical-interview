# HTML and CSS Interview Questions

Number of questions: Total = 42; High = 21; Medium = 12; Low = 9.

## Table of Contents

## Week 1 (Questions with High priority)
Number of questions: High = 21.
Estimate: ~30m*21 = 10h 30m / 5d = 2h 6m per day.

--- 

## Question 1
### 1.1 What is Critical Rendering Path? High
Critical Rendering Path - This is the process from the first HTML request to the page rendered. 

Critical Rendering Path start from HTML request, 
- then generate DOM and CSSOM
- then combine DOM and CSSOM threes to render three, 
- then starts layout process, determines where and how the elements are positioned on the page
- last step is painting the pixels to the screen

---

## Question 2
### 1.2 How can I get indexed better by search engines? High
* Create a sitemap(XML) and submit them to different search engines.
* Create robots.txt to exclude some unnecessary pages.
* Use semantic tags
* Exclude pages that is not related to your content from indexing by configuring robots meta tags
* You can use Google Search Console , you can find here different statistics, analytics, and reports. You can find which pages were indexed and which were not and many other helpful information.
* Robots scan your website more often if you update your pages more often.

---

## Question 3
### 1.3 What is desktop first and mobile first design approach? High
Mobile first  - this is when we create a design first for mobile devices and then expand it to desktop. The mobile first approach usually prioritizes users resulting in the process being more content-centric.

Desktop first - this is when we create a design first for mobile devices and then expand it to desktop

---

## Question 4
### 1.4 How to make page responsive? High
- Breakpoint @media
- % rem em vw vh `vmin` `vmax`
- display: flex, grid 

---

## Question 5
### 1.5 What are the building blocks of HTML5? High
- more semantic text markup
- new form elements
- video and audio
- canvas and SVG
- new communication API
- new javascript API
- geolocation API
- web worker API
- new data storage
- Canvas and SVG

---

## Question 6
### 1.6 When should you use `<section>`, `<div>` or `<article>`? High
`<section>` - We should use this tag when we want to split a page into section:
Introduction, contact information, details

`<div>` - element has no special meaning at all

`<article>` - like `<section>` it must have `<h1>`. We should use this tag when our content independent or reusable:
forum post, magazine article, newspaper article

---

## Question 7
### 1.7 What are the semantic tags available in html5? High
The main semantic HTML5 tags - `<article>`, `<main>`, `<section>`, `<nav>`, `<mark>`, `<header>`, `<footer>`, `<figure>`, `<figcapture>`, `<time>`, `<aside>`

---

## Question 8
### 1.8 Why would you like to use semantic tag? High
It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content

---

## Question 9
### 1.9 What is accessibility? ARIA role means in a web application High
Accessibility  - technology must be equally accessible for people with and without disabilities

ARIA role – It is a set of attributes that defines ways to make web content and web applications more accessible to people with disabilities. (html5 tags includes roles)

---

## Question 10
### 1.10 What is the purpose of the alt attribute on images? High
When image can’t be displayed, we can see alternative text(alt=””) 

---

## Question 11
### 1.11 Define semantic markup. What are the semantic meanings for `<section>`, `<article>`, `<aside>`, `<nav>`, `<header>`, `<footer>`and when/how should each be used in structuring html markup? High

`<section>` - We should use this tag when we want to split a page into section:
Introduction, contact information, details

`<article>` - like `<section>` it must have `<h1>`. We should use this tag when our content independent or reusable:
forum post, magazine article, newspaper article

`<aside>` -its independent item of content, usually it contains a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget

`<nav>` - we should use when we want to group navigation links

`<header>` - usually it contains logo, navigation menu and other introduction information

`<footer>` - usually it contains logo, authors, copyright, sometimes contact data. navigation

---

## Question 12
### 1.12 Describe the difference between a cookie, sessionStorage and localStorage? High

Cookie:

The max size for Cookies are 4kb
Cookies (for that domain) are sent on each request
Server or client can set up expiration date. Client can't access(with flag httponly=true))

SessionStorage and LocalStorage:

The size about 5mb(it is dependent from browser)
They just sit in your browser until someone requests it. Only client can access.

Difference between sessionStorage and localStorage
- sessionStorage - it will be cleared when we are the finished current session(close the browser tab); 
- localStorage - no expiration date

---

## Question 24
### 2.1 What are the possible ways to apply CSS styles to a web page?  High
Inline: CSS rules are inserted into HTML tags as an attribute

Internal: You should define element `<style>` in the head section and write in this section needed styles

External: You should define element `<link>` in the head section and show path to the styles sheet
`<link rel="stylesheet" href="myStyles.css">`

---

## Question 25
### 2.2 What does the cascading portion of CSS mean?  High
algorithm witch priorities and decides which rules need to apply

When everything is equal, the last one gets applied.
Styles of a higher precedence will overwrite rules of a lower precedence.
You can calculate the weight of the style.
- Tag Selector:1
- `class` Selector:10
- `id` selector:100
- Inline style: 1000

also you can use p {color: green !important;} Using “!important bag practice”

---

## Question 26
### 2.3 What is CSS preprocessor?  High
A CSS preprocessor is a scripting language that extends CSS and is compiled into regular CSS syntax
Main point is to use additional features:
- nesting
- variables
- mixins
- media queries
- importing
- loops
- if/else Statements

---

## Question 27
### 2.4 What are media queries?  High
Your content can rendering to adapt to different conditions:
- `@media screen, print {}`
- `@media (hover: hover) {}`
- `@media (min-width: 1024px) and (orientation: landscape) {}`

---

## Question 28
### 2.5 What does box-sizing do?  High
This property defines how the width and height of an element are calculated

Example width:100px; paddings:5px; borders:5px;

box-sizing: border-box;
Full width/height include content (content!=width)+paddings+borders=100px

box-sizing: content-box; 
Full width/height include content(content=width=100px)+paddings+borders=120px

---

## Question 29
### 2.6 Explain some pros and cons for CSS animations versus JavaScript animations  High
CSS animations PROS:
- is easier and more performance for simple animations
- easier to code and less bulky than JavaScript required to achieve the same effects.
- allow animation and presentation logic to be grouped together.
- GPU-dependent transforms ( scale, rotation, translation or skew) and opacity manipulations, are faster than traditional JS  animations, which are more CPU-dependent.
- Some browsers block JavaScript.
 
CSS animations CONS:
- JavaScript for more complexity, such as animating two different properties differently
- Modern JavaScript frameworks and libraries, which allows animations to be at least as quick, smooth, and CPU-efficient as CSS animations.
- CSS3's animations don’t work in older browsers

---

## Question 30
### 2.7 What is theming? How to respond on the system theme change?  High
Theming - it is when users have the ability to make customizations.

## Question 31 
### 2.8 How to make images responsive?  High
`img {
  max-width: 100%;
  width: 100%;
  height: auto;
}`

`.bg-img {
  height: 1200px;
  background-image: url(large.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
}`

`background-image: image-set(  
    url(img1.png 1x, url(img2.png) 2x)
);`

`@media (min-width: 768px and max-width: 1023px){}`

using third-party tools

---

## Question 32
### 2.9 Explain CSS grid layout with example  High
CSS Grid Layout it is a two-dimensional grid system to CSS. You can use it to layout major page areas or small user interface elements.

`.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`

If you have 4 elements, then you will get two rows and three columns. in the first row there will be three elements of the same width and equal to 1/3 of the width of the parent. in the second line you will have one element, the width of the element is 1/3 of the parent.

---

## Week 2 (Questions with Medium priority)

Number of questions: Medium = 12.
Estimate: ~30m*12 = 6h / 5d = 1h 12m per day.

---

## Question 13
### 1.13 Ways to improve website performance Medium
Fix Broken URLs, Put CSS at the Top and JavaScript at the Bottom, Optimize images, Remove Unused scripts/plugins/css, minify scripts, use cache correctly, check the quality of the provider

---

## Question 14
### 1.14 What does async and defer refer in script tag? Describe the difference between `<script>`, `<script async>` and `<script defer>`

`<script async>` is executed immediately after loading, good for independent scripts

`<script defer>` they are loaded and executed sequentially, and with async – asynchronously. 

In addition, defer always waits until the entire HTML document is ready

---

## Question 15
### 1.15 What is an iframe and how does it work? Medium
`iframe`  - another HTML element inside a web page.
They are commonly used to external ads, videos, tags, or other interactive elements into the page.

---

## Question 16
### 1.16 Explain the use of `rel="nofollow"`, `rel="noreferrer"`, `rel="noopener"` attribute? Medium

`rel="noreferrer"` keeps external sites from knowing that you have included links to their material on your website

`rel="nofollow"` that directs search engines not to use the link for page ranking calculations.

`rel="noopener"`  - browser navigate to the target resource without granting the new browsing context access to the document that opened it

---

## Question 17
### 1.17 Explain the use of `rel="preload"`, `rel="prefetch"`, `rel="preconnect"` attribute? Medium
`rel="preload"` - the browser should download and cache a resource as soon as possible

`rel="prefetch"` -the browser should download and cache a resource in the background

`rel="preconnect"`  - the browser should download a resource as soon as possible because your page will set up a connection to another origin

---

## Question 18
### 1.18 What does CORS stand for and what issue does it address? Medium

CORS stands for Cross Origin Resource Sharing and is used to get around the browsers same-origin policy. For security purposes, a browser won't load requests for resources to other domains when those requests are initiated by scripts. CORS gets around this issue by supplying a special header that specifies which domains may make XMLHttpRequests for its resources.

---

## Question 19
### 1.19 What is the DOM? How does the DOM work? Medium
The DOM is an interface(API) that allows a programming language to manipulate the structure, the content and style of a website. The main object “document” has properties, methods, and events available for manipulating

---

## Question 33
### 2.10 What are the css selectors? Medium
`p {color: red}`
A CSS selector is the first part of a CSS Rule. In ours example it is `“p”`
CSS selectors can be tags(`p,a,img,div,body`), class(`.box, .container`), id (`#targetElement`)

You can combine different types
Body `div.contaner p {color: blue}`

---

## Question 34
### 2.11 When to use css grid and flexbox? Medium
CSS Grid - you can place components along the X- and Y dimensional

CSS Flexbox -you can place components along only one dimensional

---

## Question 35
### 2.12 What is CSS BEM? Medium
BEM
`[block]__[element]--[modifier]`
* Block: The outermost parent element of the component is defined as the block.
* Element: Inside the component may be one or more children called elements.
* Modifier: Either a block or element may have a variation signified by a modifier.

---

## Question 36
### 2.13 Explain the CSS “box model” and the layout components that it consists of Medium
Content+paddings+borders+margins

---

## Question 37
### 2.14 What is CSS flexbox? Medium
The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.

2 main components of Flex-box:
`-container display flex;`

`flex-direction:` row; if you want all elements to be on a one line

`flex-direction:` column; if you want each element to be on a new line

`-flex-item` you can add a rule for one element

---

# Week 3 (Questions with Low priority)

Number of questions: Low = 9.
Estimate: ~30m*9 = 4h 30m / 5d = 54m per day.

---

## Question 20
### 1.20 What is the CSSOM? Low
The CSSOM is an interface(API) that allows a programming language to manipulate the CSS(example document.body.style.color )

---

## Question 21
### 1.21 Explain the difference between layout, painting and compositing? Low
* “layout” - Browser will calculate how much space each element takes up and where to place it
* “painting” - drawing out text, colors, images, borders, and shadows, essentially every visual part of the elements.
* “compositing” - parts of the page were drawn into potentially multiple layers they need to be drawn to the screen in the correct order

---

## Question 22
### 1.22 What are the Benefits of Server Side Rendering (SSR) Over Client Side Rendering (CSR)? Low
When we make a request to the webpage, the server prepares the HTML page with the required data (sometimes fetching from the database) and sends it to the user's machine.

SSR  Benefits
* An application has a simple UI, and it has not had many pages/features
* An application doesn't have many dynamic data
* Read preference of the site is more than write
* SSR using  for not on rich sites and has few users

---

## Question 23
### 1.23 What is difference between Select and Datalist? Low

`Select` You can choose only one option from the given list, and you should scan a long list to select an option. The “onchange” event is fired immediately upon change.

`Datalist` support browsers Chrome, Edge, Opera
You can choose any option from the given list, and you can type your own option.
the event is happened after the element loses focus or the user presses enter

---

## Question 38
### 2.15 What is the difference between Pseudo-classes and pseudo-elements? Low

Pseudo-classes are like ‘fake’ classes that are applied to elements under certain conditions
* :link
* :visited
* :first-child
* :nth-child(n)
* And others

Pseudo-elements effectively create new elements that are not specified in the markup of the document and can be manipulated much like a regular element.
* ::before
* ::after
* ::first-letter
* ::first-line

---

## Question 39
### 2.16 How do you specify units in the CSS? Low

Absolute lengths: `px`

Relative lengths: `%` `em` `rem` `ex`

Relative screen: `vw`, `vh`, `vmin`, `vmax`

---

## Question 40
### 2.17 What is the difference between class selectors and id selectors?Low

There can be any number of elements per page in one class but only one element with id

---

## Question 41
### 2.18 What is the difference between the “nth-child()” and “nth-of-type()” selectors? Low
nth-child(2) you send into brackets the rule and want to apply to this child
```html
<div>
    <p></p> - first child
    <div></div> - second child – you will change this element
    <p></p> -third
</div>
```

`p:nth-of-type(2)` you send into brackets the rule and want to apply to this child(witch have type p)
```html
<div>
    <p></p> - first child (first child type p)
    <div></div> - second child – (not type p)
    <p></p> -third (second child type p) – you will change this element
</div>
```

---


## Question 42
### 2.19 What is the difference between RGBa, HEX and HSLa? Low

RGB Colors

RGB colors work by mixing together different amounts of red (R), green (G), and blue (B). Each color (R, G, or B) can take on 1 of a possible 256 values (between 0 and 255). This results in 16,777,216 possible colors.

```css
h1 {
  background-color: rgb(99, 21, 127);
}
```
Opacity is a measure of how transparent a color is. To modify opacity in RGB colors, CSS offers the rgba() value. It represents the opacity of a color. The alpha value can be a number between 0 or 1, inclusive.

RGBa Colors
```css
h1 {
  color: rgba(123, 88, 9, 0.5);
}
```

Hex color

Hex color codes also offer 16,777,216 color options, but they follow a different syntax.

RGB values and hex color codes are different ways to represent the same thing: color.
```css
h1 {
  background-color: #ccaadd;
}
```

HSL color

HSL stands for Hue, Saturation, and Lightness.
* Hue - the technical term that describes what we understand as "color." In HSL, hue is represented on a color wheel. It can take on values between 0 and 360.
* Saturation - the amount of gray in a given color. In HSL, saturation is specified using a percentage between 0% and 100%.
* Lightness - the amount of white in a given color. Similar to saturation, lightness is specified using a percentage between 0% and 100%.
```css
h1 {
  color: rgba(123, 88, 9, 0.5);
}
```
HSLa color
Opacity is a measure of how transparent a color is. To modify opacity in HSL colors, CSS offers the HSLa() value. It represents the opacity of a color. The alpha value can be a number between 0 or 1, inclusive.

```css
h1 {
  color: hsla(239, 45%, 22%, 0.4);
}
```
