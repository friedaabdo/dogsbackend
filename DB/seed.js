const mongoose = require("./conn")
const Dog = require("../models/dog")

const allDogs = require('./seedDogs.json')

const db = mongoose.connection

Dog.deleteMany({}).then(() => {
    Dog.insertMany(allDogs).then((dog) => {
        console.log('dog',dog)
        DB.close()
    })
})