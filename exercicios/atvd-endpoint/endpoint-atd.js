fetch('https://jsonplaceholder.typicode.com/photos')
.then(endpoint => endpoint.json())
.then(photos => console.log(photos))