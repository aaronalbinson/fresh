---
templateKey: basic-page
title: Style guide
elements:
  - herodescription: >-
      This is a hero box, great for introducing a page or sending the user to
      another page on the site
    herotitle: Hero
    type: hero
  - paragraph: >-
      Here's some text, you can include headers and [links](/about)


      # Header


      This page is an example page for how each element works in your website,
      feel free to look around but please don't delete anything. It might break
      something if you do!


      * I'm a list

      * So you can list your

      * Many lists


      Testing next line\

      Next line\

      NExt line
    type: text
  - galleryitem:
      - caption: >-
          Each gallery item should have a thumbnail, you should type in a title,
          for people who can't see your website.
        src: /img/styleguide.png
        thumbnail: /img/styleguide.png
      - caption: Image 2
        src: /img/styleguide.png
        thumbnail: /img/styleguide.png
    type: gallery
  - quoteauthor: 'Authors name, optional'
    quotetitle: >-
      I'm a quote for you to highlight something nice someone said or to show
      something important and to break up long text.
    type: quote
  - customhtml: >-
      <iframe width="560" height="315"
      src="https://www.youtube.com/embed/CB2O1zriSBE" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture" allowfullscreen></iframe><p>Custom HTML is perfect for
      embedding iframes</p>
    type: customhtml
  - paragraph: '# Left Paragraph'
    rparagraph: "Right paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. \n\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\r\rInteger posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue."
    type: text
  - lightordark: light
    paragraph: Left
    rparagraph: Right
    type: text
  - prebuilt: services
    type: prebuilt
  - loop: true
    source: 'https://youtu.be/VrS6akzR3sk'
    type: video
---

