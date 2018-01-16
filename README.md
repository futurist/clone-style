# Clone Style
Clone `<style>` tag right in browser, for IE9+

## Why?
`<style>` tag is another world of [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model), cannot easily clone using `cloneNode` etc, so this lib exists here.

## Usage

> cloneStyle(styleNode, [docNode], [beforeNode])

- styleNode: must be a existing `<style>` node to be cloned

- docNode: the document to append the new style node to, or current document if omitted

- beforeNode: the place to insert before the new style node, or append to `<head>` if omitted.

## Example

```js
const newStyle = cloneStyle($0)
// newStyle now exists in <head>

const newStyle2 = cloneStyle($0, iframeDocument)
// newStyle now exists in iframe <head>


const newStyle2 = cloneStyle($0, iframeDocument, someNode)
// newStyle now exists in iframe before someNode

```

