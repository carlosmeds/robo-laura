const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");

// let url = "mongodb://username:password@localhost:27017/";
let url = "mongodb://localhost";

csvtojson()
  .fromFile('./src/database/dataset_estudantes.csv')
  .then(csvData => {
    console.log(csvData);

    mongodb.connect(
      url,
      { useNewUrlParser: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("RoboLaura")
          .collection("students")
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });