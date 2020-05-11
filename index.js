const wrapper = document.getElementById('wrapper')
const btn = document.getElementById('button')
const clearbtn = document.getElementById('clearButton')

// adds boxes


btn.onclick = () => { // .onclick means when the button is clicked

    let numBoxes = number.value
    let imageSearch = input.value

for (i = 0; i < numBoxes; i++) {
    const box = document.createElement('box')
    box.className = 'box'

    let generatedImage = document.createElement('img') 

    let numGen = Math.ceil((Math.random() * 100) + 1); // randomises the image

    generatedImage.src = `https://source.unsplash.com/random/500x500/?sig=${imageSearch}&${numGen}`
    generatedImage.setAttribute("height", "425vw / 3.5")
    generatedImage.setAttribute("width", "425vw / 3.5")
    
    wrapper.appendChild(box)
    box.appendChild(generatedImage)
}
}


// clears all boxes

clearbtn.onclick = () => {
    while (wrapper.hasChildNodes())
    wrapper.removeChild(wrapper.firstChild)
    }

// The removeChild() method removes a specified child node of the specified element.
// Returns the removed node as a Node object, or null if the node does not exist.

// The Node.firstChild read-only property returns the node's first child in the tree, or null if the node has no children. 
// If the node is a Document, it returns the first node in the list of its direct children.

// The Node.lastChild read-only property returns the last child of the node. 
// If its parent is an element, then the child is generally an element node, a text node, or a comment node. 
// It returns null if there are no child elements.
