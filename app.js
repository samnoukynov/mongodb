const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = require('express')()
const readline = require('readline');
// const user = require('./Models/User')
const fs = require('fs');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);


app.listen(3000,()=> {console.log('App listening on port 3000')})

app.get('/', (req , res ) => { res.end('hello world !')})

client.connect()
    .then(connectedClient => {
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        // ceci est la requête de l'api pour la déclencher
        app.post('/create/:ID/:name/:password', function(request, response) {
            var name = request.params.name;
            var ID = request.params.ID;
            var password = request.params.password;
            console.log("envoie")
            console.log("nom : " + name + " ID : " + ID + " password : " + password );

            // permet d'inserer dans la base mongodb
            //db.collection("User").insertMany([{"ID": ID ,"nom": name ,"mot_de_passe": password }])
            // console.log("recus")

            // permet de récuperer toutes les données dans mongodb
            // db.collection("User").find({ }).toArray().then( result => {
            //  console.log(result); })

            // permet de supprimer tout ce qu'il y a dans la base mongodb
            //db.collection("User").remove({ })

            // permet de modifier un le nom d'un User avec l'id 4
            // console.log("modification")
         //   db.collection("User").update({"ID" : 4} , {"nom" : " richard"})

            response.end();

    })})
    .catch(err => {
        console.error("Failed to connect to server");
    })