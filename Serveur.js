const express = require('express');
const run = require('nodemon/lib/monitor/run');
const connectDB =require('./DB/connectDB');
const Person = require('./model/person');
// Créer et enregistrer un enregistrement d'un modèle
// createUser()
// async function createUser() {
//     const person = new Person({name:"marwen", age:34, favoriteFoods:["pitzza neptun","jerbi riz","paget farci","burritos"]})
//     await person.save()
//     console.log(person)
    
// }
// Créer et enregistrer un enregistrement d'un modèle

// Créer de nombreux enregistrements avec model.create()
createUsers()
async function createUsers() {
 const person = await Person.create({name:"mar", age:20, favoriteFoods:["pitza neptun","jerbi riz","burritos"]},{name:"alex", age:17, favoriteFoods:["pitzza neptun","jerbi riz","paget farci"]},{name:"rim", age:10, favoriteFoods:["pitzza neptun","burritos","paget farci"]},{name:"mary", age:24, favoriteFoods:["pitza neptun","jerbi riz","paget farci"]},{name:"mary", age:17, favoriteFoods:["pitzza neptun","jerbi riz","paget farci"]},{name:"mary", age:14, favoriteFoods:["pitzza neptun","jerbi riz","paget farci"]})
console.log(person)
}
 // Créer de nombreux enregistrements avec model.create()
// Utilisez model.find() pour rechercher dans votre base de données
findAllUsers()
async function findAllUsers() {
const listPersonne = Person.find()
console.log(listPersonne);
}
// Utilisez model.find() pour rechercher dans votre base de données
// Use model.findOne() to Return a Single Matching Document from Your Database
findOneUser()
async function findOneUser() {
Person.findOne({favoriteFoods:"pitza neptun"}, function (err, onePersonne) {
    console.log(`onePersonne ${onePersonne}`)
    console.log(err)
});
}
// Use model.findOne() to Return a Single Matching Document from Your Database
// Use model.findById() to Search Your Database By _id
findUserById()
async function findUserById() {
Person.findById({_id:"62951e5cf63fc31e9e929579"}, function (err, PersonneById) {
    console.log(`pesonne by id ${PersonneById}`)
    console.log(err)
});
}
// Use model.findById() to Search Your Database By _id
// Perform Classic Updates by Running Find, Edit, then Save
findUserByIdAndUpdate()
async function findUserByIdAndUpdate() {
Person.updateOne({_id:"62951e5cf63fc31e9e929579"}, {$push:{favoriteFoods:"hamburgers"}}, function(err, res) {
    console.log(`pesonne update ${res}`)
    console.log(err)
});
}
// Perform Classic Updates by Running Find, Edit, then Save
// Perform New Updates on a Document Using model.findOneAndUpdate()
findAndUpdates()
async function findAndUpdates() {
Person.findByIdAndUpdate({_id:"62951e5cf63fc31e9e929579"}, {$push:{favoriteFoods:"hamburgerss"}}, function(err, res) {
    console.log(`pesonne update ${res}`)
    console.log(err)
});
}
// Perform New Updates on a Document Using model.findOneAndUpdate()
// Delete One Document Using model.findByIdAndRemove
findAndRemove()
async function findAndRemove() {
Person.findByIdAndRemove({_id:"62951e5cf63fc31e9e92957a"}, function(err, del) {
    console.log(`pesonne delete ${del}`)
    console.log(err)
});
}
// Delete One Document Using model.findByIdAndRemove
// MongoDB and Mongoose - Delete Many Documents with model.remove()
findsAndRemove()
async function findsAndRemove() {
Person.deleteMany({name: "mary"}, function(err, del) {
    console.log(`delete ${del}`)
    console.log(err)
});
}
// MongoDB and Mongoose - Delete Many Documents with model.remove()
// Chain Search Query Helpers to Narrow Search Results
SearchQuery()
async function SearchQuery() {
Person.find({favoriteFoods:"burritos"})   
         .limit(2)                // limit to 2 items
         .sort({name:1})      // sort ascending by Name
         .select({name: true}) // select firstName only
         .exec()                   // execute the query
         .then(docs => {
            console.log(docs)
          })
         .catch(err => {
            console.error(err)
          })
        }
// Chain Search Query Helpers to Narrow Search Results
connectDB();
const app = express();
const port =4000;
app.listen(port,(err)=>{
    err?
    console.log(err)
    :console.log(`listening on port ${port}`)
});