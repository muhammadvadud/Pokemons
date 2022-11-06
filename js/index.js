const elDiv = document.querySelector(".row")


for(let pokemon of pokemons){
const newDiv = document.createElement("div")
const newImg = document.createElement("img")
const newH4 = document.createElement("h4")
const newP = document.createElement("p")
const newH5 = document.createElement("h5")
const newH5Age = document.createElement("h5")
const newImgHeight = document.createElement("img")
const newHr = document.createElement("hr")
const heartDiv = document.createElement("div")





newDiv.setAttribute("class","card-div ")
newDiv.setAttribute("style", "margin-left:50px ;")
newHr.setAttribute("class","Hr")
newImg.setAttribute("src", pokemon.img)
newImg.setAttribute("class", "ApiImg")
newImgHeight.setAttribute("src", "../img/Outline/heart.png")
newImgHeight.setAttribute("class","rasm")
heartDiv.setAttribute("class", "heart")


newH4.textContent = pokemon.name
newP.textContent = pokemon.type
newH5.textContent= pokemon.weight
newH5Age.textContent=pokemon.height


elDiv.appendChild(newDiv)
newDiv.appendChild(newImg)
newDiv.appendChild(newHr)
newDiv.appendChild(heartDiv)
heartDiv.appendChild(newH4)
heartDiv.appendChild(newImgHeight)
newDiv.appendChild(newP)
newDiv.appendChild(newH5)
newDiv.appendChild(newH5Age)

} 