# Guidelines

This document contains guidelines to be followed when representing the tmplat brand.

1. [Fonts](https://github.com/tmplat-extension/tmplat-branding/tree/main/docs/guidelines.md#fonts)
2. [Notes & Caveats](https://github.com/tmplat-extension/tmplat-branding/tree/main/docs/guidelines.md#notes-caveats)

## Fonts

The wordmark is not set in a typeface &mdash; it's a bespoke, geometric, monolinear construction (round caps/joins, single stroke weight) drawn as vector paths, so it should never be recreated with a font. Use the `wordmark` assets directly instead.

Where live text is required alongside the mark, such as banner taglines, the following fonts are recommended:

| Type | Primary Font | Fallback Fonts |
| ---- | ------------ | -------------- |
| Sans-serif | [Inter](https://fonts.google.com/specimen/Inter) | Helvetica Neue, Arial, sans-serif |

Convert any live text to outlines before handing an SVG anywhere the font isn't guaranteed to be available; the exported PNGs are unaffected.

## Notes & Caveats

* **The mark is stroked, not outlined.** If you scale it non-uniformly, or convert to outlines in another tool, check `stroke-width` still resolves as expected. For a fully self-contained file, run "stroke to path" before handing off.
* **The toolbar variant exists for a reason.** The full-detail mark goes mushy below ~32px; use the `icon-stack-toolbar` variant (or the tiled `small` / `micro` variants) rather than scaling the base icon down.
* **Banner PNGs should be exported as 24-bit RGB with no alpha channel** &mdash; that's what the Chrome Web Store requires for promotional images.

---

Copyright © tmplat
