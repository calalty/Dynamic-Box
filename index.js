const wrapper = document.getElementById('wrapper')
const btn = document.getElementById('button')
const clearbtn = document.getElementById('clearButton')

// adds boxes

let numBoxes // let variable for number of boxes
btn.onclick = () => {

    numBoxes = input.value

for (i = 0; i < numBoxes; i++) {

    const box = document.createElement('box')
    box.className = 'box'

    let generatedImage = document.createElement('img')
    generatedImage.src = "5bf43911110d4c1bb210b93c.jpeg"
    generatedImage.setAttribute("height", "255vw / 3.5")
    generatedImage.setAttribute("width", "255vw / 3.5")
    
    wrapper.appendChild(box)
    box.appendChild(generatedImage)

    console.log(numBoxes)
    }
}

// clears all boxes

clearbtn.onclick = () => {
    while (wrapper.hasChildNodes())
    wrapper.removeChild(wrapper.firstChild)
    }

