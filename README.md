# Prefab Paragraph Types

Pre-fabricated Paragraph Types to get you started quickly.

This module is just intended to get you going with some "out of the box"
Paragraph Types. If you install these Paragraph Types and then remove this
module, your Paragraph Types remain. Likewise, once a Paragraph Type has
been installed, this module will not reinstall or update it -- there is no
ongoing monitoring or updates once the Paragraph Types are implemented.

Initial implementation is just a collection of config files that can be
imported using Backdrop's CMI as well as some basic CSS that the module
implements to make the classes work. Long-term, perhaps implementing this as
an installable module that let's you select which elements to activate via
the UI could be an option.

The config files are not imported by default when you install this module
(they are in the `config_files` directory).

## Config files

1. **[Classy Paragraphs](https://github.com/CEDC/prefab_paragraphs/wiki/Classy-Paragraphs)** -
  If you have your own Classy Paragraphs already defined, don't import these
  files or your will be overwritten. (Future plan: to allow you to select
  which Classy Paragraph classes/sets to import, and/or to automatically
  import only needed classes/sets for other Paragraph Types, without
  overwriting existing Classy Paragraph config)

2. **Prefab Paragraph Types** -
  - [Embed](https://github.com/CEDC/prefab_paragraphs/wiki/Embed) -
  Simple text area configured to "Raw HTML" to allow code embedding.
  - [Text](https://github.com/CEDC/prefab_paragraphs/wiki/Text) -
  Text section with an optional section title and the ability to specify
  how many columns the text should display in (via CSS).
