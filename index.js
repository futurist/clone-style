// browser for IE9+
function cloneStyle(styleNode, docNode, beforeNode) {
  // determine docNode
  const {ownerDocument} = styleNode
  docNode = docNode || ownerDocument

  // clone styleNode
  const style = ownerDocument!=docNode
    ? docNode.importNode(styleNode, false)
    : styleNode.cloneNode(false)

  // insert new style
  if(beforeNode) beforeNode.parentNode.insertBefore(style, beforeNode)
  else docNode.head.appendChild(style)

  // clone cssText
  const {sheet} = styleNode
  if(!sheet) return style
  const {cssRules} = sheet
  for(let i=0;i<cssRules.length;i++){
    style.sheet.insertRule(cssRules[i].cssText, i)
  }

  return style
}

module.exports = cloneStyle

