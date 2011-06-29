# jQuery Genealogy

A _fun_ jQuery plugin for your (or for your element's) extended relatives.

## Supported Methods

- **el.grandchildren()**

  All of the element's children's children.

- **el.greatGrandchildren()**

  All of the element's grandchildren's children.

- **el.grandparent()**

  The element's parent's parent.

- **el.greatGrandparent()**

  The element's grandparent's parent.

- **el.aunts(), el.uncles()**

  All of the element's parent's siblings.

- **el.prevAunt(), el.prevUncle()**

  The element directly before the element's parent.

- **el.prevAunts(), el.prevUncles()**

  All of the element's parent's siblings that come before the element in the document, returned in reverse document order (closest to the original element first).

- **el.nextAunt(), el.nextUncle()**

  The element directly after the element's parent.

- **el.nextAunts(), el.nextUncles()**

  All of the element's parent's siblings that come after the element in the document, returned in document order (closest to the original element first).

- **el.cousins()**

  All of the element's aunts and uncles's children.

- **el.prevCousins()**

  All of the element's aunts and uncles's children that come before the element in the document, returned in reverse document order (closest to the original element first).

- **el.nextCousins()**

  All of the element's aunts and uncles's children that come after the element in the document, returned in document order (closest to the original element first).

- **el.nieces(), el.nephews()**

  All of the element's siblings' children.

- **el.prevNieces(), el.prevNephews()**

  All of the element's siblings' children that come before the element in the document, returned in reverse document order (closest to the original element first).

- **el.nextNieces(), el.nextNephews()**

  All of the element's siblings' children that come after the element in the document, returned in document order (closest to the original element first).

## About

Inspired by one of John Resig's offhand remarks.

Please submit bug reports on GitHub issues or send me a note at spicyjalapeno@gmail.com if you have any questions or feature suggestions.
