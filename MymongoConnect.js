const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://127.0.0.1:27017/retail", function (err, db) {
    
    // db.collection('Persons', function (err, collection) {
        
    //     collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
    //     collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
    //     collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

    //     db.collection('Persons').count(function (err, count) {
    //         if (err) throw err;
            
    //         console.log('Total Rows: ' + count);
    //     });
    // });
                
});