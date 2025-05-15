fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(dogsImg =>{
    console.log(dogsImg)
    const container = document.querySelector("#container")

   container.innerHTML = `<img src=${dogsImg.message}>`
    
})