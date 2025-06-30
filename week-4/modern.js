let farmer = {
name: 'Andrew',
age: 34,
location: "kla",
requestChicks: function(quantity) {
    return this.name + "requested" + quantity + "chicks";
}
}

// module.exports // exports object to any file 

export default farmer 