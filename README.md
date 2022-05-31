# PFP - Prefab Paragraphs

Pre-fabricated Paragraph Types to get you started quickly.

This module is just intended to get you going with some "out of the box"
Paragraph Types. If you install these Paragraph Types and then remove this
module, your Paragraph Types remain. Likewise, once a Paragraph Type has
been installed, this module will not reinstall or update it -- there is no
ongoing monitoring or updates once the Paragraph Types are implemented.

Besides the UI for selecting and installing blueprints, this module does
implement some CSS to style certain options. If you don't want to use these
styles you can safely disable the module after using the blueprints you wish
to use. If you want to retain these styles you can either leave the module
enabled or copy the CSS to your own theme.

## Blueprints

  - **Audio** - A simple filefield that displays as an HTML5 audio player.
  - **Callout** - A collection of fields with various settings for display
    options. An image field that can be set to the left or right, text and
    optional action button placed opposite of the image.
  - [Embed](https://github.com/CEDC/prefab_paragraphs/wiki/Embed) -
  Simple text area configured to "Raw HTML" to allow code embedding.
  - **Files** - A multi-value file field.
  - **Gallery** - A multivalue image field that displays as a mini-thumb gallery
    using Colorbox to popup a larger view of each image.
  - **Image** - A full-width image that uses free cropping and various settings
    for the display, including width and background color.
  - **PDF** - Embed a PDF into the page with a filefield and the PDFjs module.
  - **Slider** - Insert a slider/rotator into the page with Flexslider and
    Flexslider Paragraphs.
  - [Text](https://github.com/CEDC/prefab_paragraphs/wiki/Text) -
  Text section with an optional section title and the ability to specify
  how many columns the text should display in (via CSS).
  - **Quote** - A pull quote and credit.
  - **Video** - Use Video Embed Field to allow easy insertion of Youtube or
    Vimeo videos into the page as a Paragraphs item.
  - **View** - Insert a view into the content (e.g. "Related content").

## Other Config files

 - **[Classy Paragraphs](https://github.com/CEDC/prefab_paragraphs/wiki/Classy-Paragraphs)** -
  If you have your own Classy Paragraphs already defined, blueprints will not
  import the Classy Paragraph config, to prevent overwriting your data. Note
  that this may cause some of the blueprints not to work completely as expected.
  For example, the classy paragraphs that define width, color, or number of
  columns on a particular blueprint may not be set up correctly.
  (Future plan: to allow you to select which Classy Paragraph classes/sets to
  import, and/or to automatically import only needed classes/sets for other
  Paragraph Types, without overwriting existing Classy Paragraph config)

