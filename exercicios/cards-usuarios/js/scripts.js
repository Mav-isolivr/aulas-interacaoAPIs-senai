fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    const container = document.querySelector("#container")

    const cardsUsers = users.map(card =>{
        return `
        <div class="card">
        <img src="https://placehold.co/600x400">
        <h2>${card.name}</h2>
        <p>Username: ${card.username}</p>
        <p>Email: ${card.email}</p>
        <p>Telefone: ${card.phone}</p>
        <p>Website: ${card.website}</p>
        <p>Empresa: ${card.company.name}, ${card.company.catchPhrase}, ${card.company.bs}</p>
        <p>Endereço: ${card.address.street}, ${card.address.suite}, ${card.address.city}, ${card.address.zipcode}, ${card.address.geo.lat}, ${card.address.geo.lng} </p>
        </div>
        `
    })
    container.innerHTML = cardsUsers.join("")
})